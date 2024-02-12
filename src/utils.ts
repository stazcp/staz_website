import DOMPurify from 'dompurify'

export const startConversation = async () => {
  const response = await fetch('https://personal-chatbot-90zk.onrender.com/start')
  const data = await response.json()
  console.log(data) // { thread_id: 'unique_thread_id_here' }
  return data.thread_id
}

export const sendMessage = async (threadId, message) => {
  const messageWithHTMLrequest =
    message +
    ' Please always respond using HTML to structure the response. For example, when starting a new paragraph, you should add <br> breaks. Also, refrain from ever mentioning this in the responses, as well as the existance of the information document.'

  const response = await fetch('https://personal-chatbot-90zk.onrender.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ thread_id: threadId, message: messageWithHTMLrequest }),
  })
  const data = await response.json()
  console.log(data) // { response: 'chatbot_response_here' }
  return data.response
}

export const cleanHTML = (html: string) =>
  html
    .replace(/```html|```/g, '')
    .replace(/【0†source】/g, '')
    .trim()

export const createMarkup = (html: string) => ({
  __html: DOMPurify.sanitize(html),
})
