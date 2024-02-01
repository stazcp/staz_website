import { Box, Container } from '@mui/material'

function Home() {
  return (
    <Container sx={{ margin: '0 10rem 0 10rem', textAlign: 'left' }}>
      <Box>
        <p>
          Welcome, <br />
          My name is Staz. <br />
          Which is short for Anastasis <br />
          which means resurrection in Greek <br />
          and yes I am Greek but also a US Citizen. <br /> <br />
          I am a Frontend (mostly) engineer and have <br />
          been working with React and Typescript mainly. <br />
          <br />
          On my freetime I like to learn about new technologies, <br />
          like crypto and AI, read books sometimes about development, others about leadership, and
          other times about science, the natural world and finally science fiction. <br /> <br />
          Fun Facts: <br />
          I used to be a Paratrooper Sniper in Greek Special Forces, <br />
          I love mountaineering, <br />
          I used to be a high-end mixologist at Michelin Rated restaurants, <br />
          and I used to own my own beach bar in Greece.
        </p>
      </Box>
      <Box sx={{ paddingTop: '5rem', textAlign: 'right' }}>
        Feel free to try my GPT powered chat-bot.
        <br />
        It can answer questions about me, my work, and my hobbies.
        <br />
        It is still in beta running on a free server so bear with me. <br />
      </Box>
    </Container>
  )
}

export default Home
