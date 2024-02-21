import { Box, Typography } from '@mui/material'
import { cleanHTML, createMarkup } from '../utils'
import { INTRO_TEXT } from '../constants'
import useChat from '../hooks/use-chat'

// make the whole page a chat-bot interface,
// instead of chat bot in bottom corner
// the chat bot will print on the screen instead of a modal
// we can keep default text in case server is down
// click next button will activate the chat bar
// clicking next will make the chat bar appear
// as part of the page
// asking about projects I can provide links as well

const Home = () => {
  const { aiResponse, serverConnectionError, aiResponseError, aiResponsePending } = useChat()

  const strategies = [
    { condition: () => aiResponse, action: () => cleanHTML(aiResponse) },
    { condition: () => aiResponsePending, action: () => 'Loading...' },
    {
      condition: () => serverConnectionError,
      action: () => 'There was an error connecting to the server. Please try again later.',
    },
    {
      condition: () => aiResponseError,
      action: () => 'There was an error with the chat bot. Please try again later.',
    },
    { condition: () => true, action: () => INTRO_TEXT },
  ]

  const textToDisplay = () => {
    const strategy = strategies.find((s) => s.condition())
    return strategy ? createMarkup(strategy.action() || '') : { __html: '' }
  }

  return (
    <Box
      padding={4}
      minHeight={300}
      marginBottom={2}
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', overflow: 'scroll' }}
    >
      <Typography variant="h6" component="div">
        <div dangerouslySetInnerHTML={textToDisplay()} />
      </Typography>
    </Box>
  )
}

export default Home
