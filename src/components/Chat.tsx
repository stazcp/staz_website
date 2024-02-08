import { useEffect, useState } from 'react'
import { sendMessage, startConversation } from '../utils'
import { Container, Input } from '@mui/material'
import { useGlobalContext } from '../contexts/globalContext'
import { LoadingButton } from '@mui/lab'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  button: {
    backgroundColor: 'rgb(0,0,0,0.7)',
    color: '#ffffff', // Change this to the color you want for the text
    '& .MuiCircularProgress-svg': {
      color: '#ffffff', // Change this to the color you want for the spinner
    },
  },
})

function ChatComponent() {
  const [threadId, setThreadId] = useState('')
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { setResponses } = useGlobalContext()
  const classes = useStyles()

  useEffect(() => {
    const init = async () => {
      const id = await startConversation()
      setThreadId(id)
    }
    init()
  })

  const handleSend = async () => {
    if (!threadId || !userInput) return
    setIsLoading(true)
    const response = await sendMessage(threadId, userInput)
    setIsLoading(false)
    setResponses([response])
    setUserInput('') // Clear input after sending
  }

  return (
    <Container>
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Type your message here"
        style={{ width: 390 }}
      />
      <LoadingButton
        variant="contained"
        onClick={handleSend}
        style={{ backgroundColor: 'rgb(0,0,0,0.7)' }}
        loading={isLoading}
        loadingPosition="start"
        className={classes.button}
      >
        <span>Send</span>
      </LoadingButton>
    </Container>
  )
}

export default ChatComponent
