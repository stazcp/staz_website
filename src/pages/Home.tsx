import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'
import useWindowSize from 'hooks/user-window-resize'
import { isMobile } from 'utils'

export default function Home() {
  const { width } = useWindowSize()

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Distribute space between items
        minHeight: '100vh', // Make the container at least as tall as the viewport
        boxSizing: 'border-box',
        padding: 2,
        marginTop: 2,
      }}
    >
      <TextOutput />
      <Box height={150} width={'90vw'} boxSizing={'border-box'} marginBottom={4}>
        <Suggestions />
        <Chat />
      </Box>
    </Container>
  )
}
