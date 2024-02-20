import { Container, ThemeProvider, createTheme, GlobalStyles } from '@mui/material'
import { APP_THEME, GLOBAL_STYLES } from './styles'
import SocialBar from './components/SocialBar'
import Chat from './components/Chat'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Home from 'pages/Home'

function App() {
  const theme = createTheme(APP_THEME)

  const queryClient = new QueryClient()

  // gpt generated background
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GLOBAL_STYLES} />
        <Home />
        <Chat />
        <SocialBar />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
