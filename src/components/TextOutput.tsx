import { Box, Typography } from '@mui/material'
import { cleanHTML, createMarkup, INTRO_TEXT } from 'utils'
import useChat from '../hooks/use-chat'
import { useWindowSize } from 'hooks'

// make the whole page a chat-bot interface,
// instead of chat bot in bottom corner
// the chat bot will print on the screen instead of a modal
// we can keep default text in case server is down
// click next button will activate the chat bar
// clicking next will make the chat bar appear
// as part of the page
// asking about projects I can provide links as well

const TextOutput = () => {
  const { aiResponse, serverConnectionError, aiResponseError, aiResponsePending } = useChat()
  const { height } = useWindowSize()

  const strategies = [
    { condition: () => aiResponsePending, action: () => 'Loading...' },
    {
      condition: () => aiResponseError,
      action: () =>
        aiResponseError?.message || 'There was an error with the chat bot. Please try again later.',
    },
    {
      condition: () => serverConnectionError,
      action: () => 'There was an error connecting to the server. Please try again later.',
    },
    { condition: () => aiResponse, action: () => cleanHTML(aiResponse) },
    { condition: () => true, action: () => INTRO_TEXT },
  ]

  const textToDisplay = () => {
    const strategy = strategies.find((s) => s.condition())
    return strategy ? createMarkup(strategy.action() || '') : { __html: '' }
  }

  const tooShort = height < 700

  return (
    <Box
      padding={4}
      marginBottom={2}
      maxHeight={tooShort ? '50vh' : '60vh'}
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', overflow: 'scroll' }}
    >
      <Typography variant="h6" component="div">
        <div dangerouslySetInnerHTML={textToDisplay()} />
      </Typography>
    </Box>
  )
}

export default TextOutput
