export const startConversation = async () => {
  const response = await fetch('https://personal-chatbot-90zk.onrender.com/start')
  const data = await response.json()
  console.log(data) // { thread_id: 'unique_thread_id_here' }
  return data.thread_id
}

export const sendMessage = async (threadId, message) => {
  const response = await fetch('https://personal-chatbot-90zk.onrender.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ thread_id: threadId, message: message }),
  })
  const data = await response.json()
  console.log(data) // { response: 'chatbot_response_here' }
  return data.response
}
