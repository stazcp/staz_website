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
        justifyContent: 'space-between',
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: 2,
        marginTop: 2,
        alignItems: 'center',
      }}
    >
      <TextOutput />
      <Box
        height={isMobile(width) ? 200 : 150}
        width={isMobile(width) ? '95vw' : '90vw'}
        display={'flex'}
        flexDirection={'column'}
        marginBottom={4}
        alignItems={'center'}
      >
        <Suggestions />
        <Chat />
      </Box>
    </Container>
  )
}
