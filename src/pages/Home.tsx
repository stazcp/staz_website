import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'
import useWindowSize from 'hooks/user-window-resize'

export default function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        maxHeight: '100vh',
        boxSizing: 'border-box',
        padding: 2,
        alignItems: 'center',
      }}
    >
      <TextOutput />
      <div style={{ flexGrow: 1 }} />
      <Box marginTop={2}>
        <Suggestions />
        <Chat />
      </Box>
    </Container>
  )
}
