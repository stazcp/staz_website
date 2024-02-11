import { useEffect, useState } from 'react'
import { sendMessage, startConversation } from '../utils'
import { Box, Container, Input } from '@mui/material'
import { useGlobalContext } from '../contexts/globalContext'
import { LoadingButton } from '@mui/lab'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  button: {
    backgroundColor: 'rgb(0,0,0,0.7)',
    '& .MuiCircularProgress-svg': {
      color: '#ffffff', // Change this to the color you want for the spinner
    },
  },
  input: {
    backgroundColor: 'white',
    '&.MuiInput-underline:before': {
      borderBottomColor: '#ffffff', // Change this to the color you want for the underline
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
      if (threadId) return
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
    <Container maxWidth={'md'}>
      <Box position={'absolute'} bottom={75} width={'100%'}>
        <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'row' }}>
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message here"
            style={{ width: '80%' }}
            className={classes.input}
          />
          <LoadingButton
            variant="contained"
            onClick={handleSend}
            style={{ backgroundColor: 'rgb(0,0,0,0.7)', width: '10vw' }}
            loading={isLoading}
            loadingPosition="start"
            className={classes.button}
            type="submit"
            color="primary"
          >
            <span>Send</span>
          </LoadingButton>
        </form>
      </Box>
    </Container>
  )
}

export default ChatComponent
