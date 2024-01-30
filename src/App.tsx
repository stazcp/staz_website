import { Container, ThemeProvider, createTheme } from '@mui/material'
import BasicTabs from './components/BasicTabs'
import GlobalContextProvider from './contexts/globalContext'
import { APP_THEME } from './constants'

function App() {
  const theme = createTheme(APP_THEME)

  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <Container>
          <BasicTabs />
        </Container>
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

export default App
