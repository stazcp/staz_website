import { Box, Input } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useState, FormEvent } from 'react'
import useChat from '../hooks/use-chat'
import { MAX_QUERY_LENGTH, isMobile } from 'utils'
import SendIcon from '@mui/icons-material/Send'
import { useWindowSize } from 'hooks'

function ChatComponent() {
  const [userInput, setUserInput] = useState('')
  const { width } = useWindowSize()

  const { serverConnectionPending, serverConnectionError, sendMessage, aiResponsePending } =
    useChat()

  const formDisabled = serverConnectionPending || !!serverConnectionError || aiResponsePending

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
    <Box width={'100%'} marginTop={3} id="TEST_chat">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'row' }}>
        <Input
          value={userInput}
          onChange={(e) => {
            if (e.target.value.length <= MAX_QUERY_LENGTH) setUserInput(e.target.value)
          }}
          placeholder={renderPlaceholder()}
          disabled={formDisabled}
          sx={{
            backgroundColor: 'white',
            '&.MuiInput-underline:before': {
              borderBottomColor: '#ffffff',
            },
            width: '100%',
            paddingLeft: 4,
          }}
        />
        <LoadingButton
          variant="contained"
          style={{ backgroundColor: 'rgb(0,0,0,0.7)', width: '10vw' }}
          loading={aiResponsePending || serverConnectionPending}
          type="submit"
          color="primary"
          disabled={formDisabled}
          sx={{
            backgroundColor: 'rgb(0,0,0,0.7)',
            '& .MuiCircularProgress-svg': {
              color: '#ffffff',
            },
          }}
        >
          {isMobile(width) ? <SendIcon /> : <span>Send</span>}
        </LoadingButton>
      </form>
    </Box>
  )
}

export default ChatComponent
