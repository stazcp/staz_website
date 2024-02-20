const BASE_URL = 'https://personal-chatbot-90zk.onrender.com'

export const startConversation = async (): Promise<string> => {
  const response = await fetch(`${BASE_URL}/start`)
  const data = await response.json()
  return data.thread_id
}

export const sendMessageToServer = async (threadId: string, message: string): Promise<string> => {
  const response = await fetch(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ thread_id: threadId, message: message }),
  })
  const data = await response.json()
  return data.response
}

export const keepServerAwake = () => fetch(`${BASE_URL}/keepalive`)
