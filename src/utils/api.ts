// const BASE_URL = 'https://personal-chatbot-90zk.onrender.com'
const BASE_URL = 'http://127.0.0.1:8000'

export const startConversation = async (): Promise<string> => {
  const response = await fetch(`${BASE_URL}/start`)
  const data = await response.json()
  if ('error' in data) {
    throw data.error
  }
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
  if ('error' in data) {
    throw data.error
  }
  return data.response
}

export const keepServerAwake = () => fetch(`${BASE_URL}/keepalive`)
