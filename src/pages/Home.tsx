import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'
import { useWindowSize } from 'hooks'

export default function Home() {
  const { height, width } = useWindowSize()

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
        width,
      }}
    >
      <TextOutput />
      <div style={{ flexGrow: 1 }} />
      <Box marginTop={2} width={'100%'}>
        <Suggestions />
        <Chat />
      </Box>
    </Container>
  )
}
