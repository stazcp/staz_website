import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'

export default function Home() {
  return (
    <>
      <Container
        sx={{
          maxHeight: '100vh',
          height: '90vh',
          overflow: 'hidden',
          marginBottom: '1rem',
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <TextOutput />
      </Container>
      <Box
        sx={{
          position: 'fixed',
          bottom: 25,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <Suggestions />
        <Chat />
      </Box>
    </>
  )
}
