import { useQuery, useMutation } from '@tanstack/react-query'
import { keepServerAwake, startConversation, sendMessageToServer } from '../api'
import { useAtom } from 'jotai'
import { aiResponseAtom } from '@store/chat-state'

export const SEND_MESSAGE = ['sendMessage']

const useChat = () => {
  const [aiResponse, setAiResponse] = useAtom(aiResponseAtom)

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
    mutate: sendMessage,
    error: aiResponseError,
    isPending: aiResponsePending,
  } = useMutation<string, string>({
    mutationKey: SEND_MESSAGE,
    mutationFn: (userInput) => sendMessageToServer(threadId!, userInput!),
    onSuccess: (data) => setAiResponse(data),
  })

  return {
    serverConnectionPending,
    serverConnectionError,
    threadId,
    sendMessage,
    aiResponseError,
    aiResponsePending,
    aiResponse,
  }
}

export default useChat
