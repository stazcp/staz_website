import DOMPurify from 'dompurify'

const BASE_URL = 'https://personal-chatbot-90zk.onrender.com'

export const startConversation = async () => {
  const response = await fetch(`${BASE_URL}/start`)
  const data = await response.json()
  return data.thread_id
}

export const postMessage = async (threadId: string, message: string): Promise<string> => {
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

export const cleanHTML = (html: string) => html.replace(/```html|```|【0†source】/g, '').trim()

export const createMarkup = (html: string) => ({
  __html: DOMPurify.sanitize(html),
})

export const keepServerAwake = () => fetch(`${BASE_URL}/keepalive`)
