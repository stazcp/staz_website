const QUESTION_LIMIT = 15
const BASE_URL = process.env.BASE_URL

export const startConversation = async (): Promise<string> => {
  const response = await fetch(`${BASE_URL}/start`)
  const data = await response.json()
  if ('error' in data) {
    throw data.error
  }
  return data.thread_id
}

export const sendMessageToServer = async (
  threadId: string,
  message: string,
  questionCount: number
): Promise<string> => {
  if (questionCount >= QUESTION_LIMIT) return 'You have reached the maximum number of questions.'
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ thread_id: threadId, message: message }),
  })
  const data = await response.json()
  if ('error' in data) {
    throw data.error
  }
  return data.response
}

export const keepServerAwake = () => fetch(`${BASE_URL}/keepalive`)
