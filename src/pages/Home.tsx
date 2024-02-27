import { Box, Container } from '@mui/material'
import { Chat, Suggestions, TextOutput } from 'components'
import useWindowSize from 'hooks/user-window-resize'
import { isMobile } from 'utils'

export default function Home() {
  const { width } = useWindowSize()

  return (
    <>
      <Container
        sx={{
          height: '95vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <TextOutput />
      </Container>
      <Box
        position={'fixed'}
        bottom={0}
        left={'50%'}
        height={150}
        sx={{ transform: 'translateX(-50%)' }}
        width={'90vw'}
      >
        <Suggestions />
        <Chat />
      </Box>
    </>
  )
}
