import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'

export default function Home() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: 2,
        alignItems: 'center',
        height: '100vh',
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
