import { useQuery, useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import {
  aiResponseErrorAtom,
  aiResponsePendingAtom,
  questionCountAtom,
  aiResponseWithCountAtom,
} from '@store/chat-state'
import { keepServerAwake, startConversation, sendMessageToServer, ErrorType } from 'utils'
import { Chat } from './types'

const useChat = () => {
  const [aiResponse, setAiResponse] = useAtom(aiResponseWithCountAtom)
  const [aiResponsePending, setAiResponsePendingAtom] = useAtom(aiResponsePendingAtom)
  const [aiResponseError, setAiResponseErrorAtom] = useAtom(aiResponseErrorAtom)
  const [questionCount] = useAtom(questionCountAtom)

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

  const { mutate: _sendMessage } = useMutation<Chat['Response'], Chat['Error'], Chat['Response']>({
    mutationKey: ['sendMessage'],
    mutationFn: (userInput: string) => sendMessageToServer(threadId!, userInput!, questionCount),
    onSuccess: (data) => setAiResponse(data),
    onSettled: () => setAiResponsePendingAtom(false),
    onMutate: () => setAiResponsePendingAtom(true),
    onError: (error) => setAiResponseErrorAtom(error),
  })

  const sendMessage = (message: string) => {
    const chatDisabled = serverConnectionPending || !!serverConnectionError || aiResponsePending
    if (chatDisabled) return
    _sendMessage(message)
  }

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
