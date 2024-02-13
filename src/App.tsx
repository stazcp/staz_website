import { Container, ThemeProvider, createTheme, GlobalStyles } from '@mui/material'
import BasicTabs from './components/BasicTabs'
import GlobalContextProvider from './contexts/globalContext'
import { APP_THEME, GLOBAL_STYLES } from './styles'
import SocialBar from './components/SocialBar'
import Chat from './components/Chat'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const theme = createTheme(APP_THEME)

  const queryClient = new QueryClient()

  // gpt generated background
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={GLOBAL_STYLES} />
          <Container maxWidth={'lg'}>
            <BasicTabs />
            <Chat />
          </Container>
          <SocialBar />
        </ThemeProvider>
      </GlobalContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
