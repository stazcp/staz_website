import { ThemeProvider, createTheme, GlobalStyles, Container, Box } from '@mui/material'
import { APP_THEME, GLOBAL_STYLES } from './styles'
import Chat from './components/Chat'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from 'pages/Home'
import Suggestions from 'components/molecules/Suggestions'

function App() {
  const theme = createTheme(APP_THEME)

  const queryClient = new QueryClient()

  // gpt generated background
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GLOBAL_STYLES} />
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
          <Home />
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
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
