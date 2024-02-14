import { Box, Container, Typography } from '@mui/material'
import { useGlobalContext } from '../contexts/globalContext'
import { cleanHTML, createMarkup } from '../utils'
import { INTRO_TEXT } from '../constants'

// make the whole page a chat-bot interface,
// instead of chat bot in bottom corner
// the chat bot will print on the screen instead of a modal
// we can keep default text in case server is down
// click next button will activate the chat bar
// clicking next will make the chat bar appear
// as part of the page
// asking about projects I can provide links as well

const Home = () => {
  const { aiResponse } = useGlobalContext()

  const cleanResponse = cleanHTML(aiResponse ?? INTRO_TEXT)

  return (
    <Box
      padding={4}
      maxHeight={'50vh'}
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', overflow: 'scroll' }}
    >
      <Typography variant="h6" component="div">
        <div dangerouslySetInnerHTML={createMarkup(cleanResponse)} />
      </Typography>
    </Box>
  )
}

export default Home
