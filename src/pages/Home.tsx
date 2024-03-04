import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'
import { useWindowSize } from 'hooks'

export default function Home() {
  const { height } = useWindowSize()

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        padding: 2,
        alignItems: 'center',
        height,
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
