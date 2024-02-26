import { useQuery, useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { aiResponseAtom, aiResponseErrorAtom, aiResponsePendingAtom } from '@store/chat-state'
import { keepServerAwake, startConversation, sendMessageToServer, ErrorType } from 'utils'

export const SEND_MESSAGE = ['sendMessage']

const useChat = () => {
  const [aiResponse, setAiResponse] = useAtom(aiResponseAtom)
  const [aiResponsePending, setAiResponsePendingAtom] = useAtom(aiResponsePendingAtom)
  const [aiResponseError, setAiResponseErrorAtom] = useAtom(aiResponseErrorAtom)

  const {
    isPending: serverConnectionPending,
    error: serverConnectionError,
    data: threadId,
  } = useQuery({
    queryKey: ['startConversation'],
    queryFn: startConversation,
  })

  // useQuery({
  //   queryKey: ['keepServerAwake'],
  //   queryFn: keepServerAwake,
  //   refetchInterval: 49000,
  // })

  const { mutate: sendMessage } = useMutation<string, ErrorType>({
    mutationKey: SEND_MESSAGE,
    mutationFn: (userInput) => sendMessageToServer(threadId!, userInput!),
    onSuccess: (data) => setAiResponse(data),
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
