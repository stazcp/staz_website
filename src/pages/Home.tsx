import { Box, Typography } from '@mui/material'

const paragraphs = [
  'Welcome,',
  'My name is Staz.',
  'I am a Frontend (mostly) engineer and have been working with React and Typescript mainly.',
  'I like to build things with AI, like this page for example uses GPT to generate the background image, as well as to power the chat bot where you can ask me questions about my work, hobbies, or anything else.',
]

// make the whole page a chat-bot interface,
// instead of chat bot in bottom corner
// the chat bot will print on the screen instead of a modal
// we can keep default text in case server is down
// click next button will activate the chat bar
// clicking next will make the chat bar appear
// as part of the page
// asking about projects I can provide links as well

const Home = () => {
  return (
    <Box padding={2} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
      <Typography variant="h6">
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Typography>
    </Box>
  )
}

export default Home
