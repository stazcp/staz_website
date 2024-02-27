import { Box, Input } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { makeStyles } from '@mui/styles'
import { useState, FormEvent } from 'react'
import useChat from '../hooks/use-chat'
import { isMobile } from 'utils'
import SendIcon from '@mui/icons-material/Send'
import { useWindowSize } from 'hooks'

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
  const [userInput, setUserInput] = useState('')
  const { width } = useWindowSize()

  const { serverConnectionPending, serverConnectionError, sendMessage, aiResponsePending } =
    useChat()

  const classes = useStyles()

  const formDisabled = serverConnectionPending || !!serverConnectionError

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (formDisabled || !userInput) return
    sendMessage(userInput)
    setUserInput('')
  }

  const renderPlaceholder = () => {
    if (serverConnectionPending) return 'Initializing...'
    if (serverConnectionError) return isMobile(width) ? 'Error' : 'Error initializing chat'
    return isMobile(width) ? 'Ask a question' : 'Type your message here'
  }

  return (
    <Box width={'100%'} marginTop={3}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row' }}>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={renderPlaceholder()}
          style={{ width: '100%', paddingLeft: 4 }}
          className={classes.input}
          disabled={formDisabled}
        />
        <LoadingButton
          variant="contained"
          style={{ backgroundColor: 'rgb(0,0,0,0.7)', width: '10vw' }}
          loading={aiResponsePending}
          loadingPosition="start"
          className={classes.button}
          type="submit"
          color="primary"
          disabled={formDisabled}
        >
          {isMobile(width) ? <SendIcon /> : <span>Send</span>}
        </LoadingButton>
      </form>
    </Box>
  )
}

export default ChatComponent
