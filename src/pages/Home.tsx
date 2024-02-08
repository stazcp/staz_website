import { Box, Typography } from '@mui/material'
import Chat from '../components/Chat'
import { useGlobalContext } from '../contexts/globalContext'

// make the whole page a chat-bot interface,
// instead of chat bot in bottom corner
// the chat bot will print on the screen instead of a modal
// we can keep default text in case server is down
// click next button will activate the chat bar
// clicking next will make the chat bar appear
// as part of the page
// asking about projects I can provide links as well

const Home = () => {
  const { responses } = useGlobalContext()
  return (
    <Box padding={2} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
      <Typography variant="h6">
        {responses.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Typography>
      <Chat />
    </Box>
  )
}

export default Home
