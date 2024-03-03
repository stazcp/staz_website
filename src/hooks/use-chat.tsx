import { useQuery, useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import {
  aiResponseAtom,
  aiResponseErrorAtom,
  aiResponsePendingAtom,
  questionCountAtom,
} from '@store/chat-state'
import { keepServerAwake, startConversation, sendMessageToServer, ErrorType } from 'utils'
import { useEffect } from 'react'

const useChat = () => {
  const [aiResponse, setAiResponse] = useAtom(aiResponseAtom)
  const [aiResponsePending, setAiResponsePendingAtom] = useAtom(aiResponsePendingAtom)
  const [aiResponseError, setAiResponseErrorAtom] = useAtom(aiResponseErrorAtom)
  const [questionCount, setQuestionCount]: [number, (val: number) => void] =
    useAtom(questionCountAtom)

  useEffect(() => {
    localStorage.setItem('questionCount', questionCount.toString())
  }, [questionCount])

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

  const { mutate: sendMessage } = useMutation<string, ErrorType>({
    mutationKey: ['sendMessage'],
    mutationFn: (userInput) => sendMessageToServer(threadId!, userInput!),
    onSuccess: (data) => {
      setAiResponse(data)
      setQuestionCount(questionCount + 1)
    },
    onSettled: () => setAiResponsePendingAtom(false),
    onMutate: () => setAiResponsePendingAtom(true),
    onError: (error) => setAiResponseErrorAtom(error),
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
