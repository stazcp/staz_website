import { useEffect, useState } from 'react'
import { sendMessage, startConversation } from '../utils'
import { Box, Input } from '@mui/material'
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
    <Box>
      <form onSubmit={handleSend} style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message here"
          style={{ width: '500px' }}
          className={classes.input}
        />
        <LoadingButton
          variant="contained"
          onClick={handleSend}
          style={{ backgroundColor: 'rgb(0,0,0,0.7)' }}
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
  )
}

export default ChatComponent
