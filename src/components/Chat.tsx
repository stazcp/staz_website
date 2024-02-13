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
  const {
    serverConnectionPending,
    serverConnectionError,
    setUserInput,
    userInput,
    aiResponsePending,
    sendMessage,
  } = useGlobalContext()

  const classes = useStyles()

  const formDisabled = serverConnectionPending || !!serverConnectionError

  return (
    <Box position={'absolute'} bottom={75} width={'100%'} marginLeft={4} marginRight={4}>
      <form
        onSubmit={formDisabled ? (e) => e.preventDefault() : sendMessage}
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder={serverConnectionPending ? 'Initializing...' : 'Type your message here'}
          style={{ width: '80vw', paddingLeft: 4 }}
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
          <span>Send</span>
        </LoadingButton>
      </form>
    </Box>
  )
}

export default ChatComponent
