import { ThemeProvider, createTheme, GlobalStyles } from '@mui/material'
import { APP_THEME, GLOBAL_STYLES } from 'utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from 'pages/Home'

function App() {
  const theme = createTheme(APP_THEME)

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={GLOBAL_STYLES} />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
