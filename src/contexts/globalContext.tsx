import { FormEvent, ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { keepServerAwake, postMessage, startConversation } from '../utils'
import { useQuery, useMutation } from '@tanstack/react-query'
import { GlobalContextValue, NewMessageMutationVariables } from './types'

const GlobalContext = createContext<GlobalContextValue | null>(null)

// Create a custom hook to access the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider')
  }
  return context
}

const GlobalContextProvider = ({ children }: { children: ReactNode }): ReactNode => {
  const [openLearnMoreModal, setOpenLearnMoreModal] = useState(false)
  const [userInput, setUserInput] = useState('')

  const {
    isPending: serverConnectionPending,
    error: serverConnectionError,
    data: threadId,
  } = useQuery({
    queryKey: ['startConversation'],
    queryFn: startConversation,
  })

  useQuery({
    queryKey: ['keepServerAwake'],
    queryFn: keepServerAwake,
    refetchInterval: 49000,
  })

  const {
    mutate: sendMessageMutation,
    data: aiResponse,
    error: aiResponseError,
    isPending: aiResponsePending,
  } = useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: ({ threadId, userInput }: NewMessageMutationVariables) =>
      postMessage(threadId, userInput),
  })

  const _sendMessage = (event: FormEvent): void => {
    event.preventDefault()
    if (!threadId && !userInput) return
    sendMessageMutation({ threadId, userInput })
    setUserInput('')
  }

  return (
    <GlobalContext.Provider
      value={{
        openLearnMoreModal,
        setOpenLearnMoreModal,
        serverConnectionPending,
        serverConnectionError,
        threadId,
        sendMessage: _sendMessage,
        setUserInput,
        userInput,
        aiResponse,
        aiResponsePending,
        aiResponseError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
