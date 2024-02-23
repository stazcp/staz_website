import { useQuery, useMutation } from '@tanstack/react-query'
import { keepServerAwake, startConversation, sendMessageToServer } from '../api'
import { useAtom } from 'jotai'
import { aiResponseAtom, aiResponsePendingAtom } from '@store/chat-state'

export const SEND_MESSAGE = ['sendMessage']

const useChat = () => {
  const [aiResponse, setAiResponse] = useAtom(aiResponseAtom)
  const [aiResponsePending, setAiResponsePendingAtom] = useAtom(aiResponsePendingAtom)

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

  const { mutate: sendMessage, error: aiResponseError } = useMutation<string, string>({
    mutationKey: SEND_MESSAGE,
    mutationFn: (userInput) => sendMessageToServer(threadId!, userInput!),
    onSuccess: (data) => setAiResponse(data),
    onSettled: () => setAiResponsePendingAtom(false),
    onMutate: () => setAiResponsePendingAtom(true),
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
