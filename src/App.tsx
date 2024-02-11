import { Container, ThemeProvider, createTheme, GlobalStyles } from '@mui/material'
import BasicTabs from './components/BasicTabs'
import GlobalContextProvider from './contexts/globalContext'
import { APP_THEME, GLOBAL_STYLES } from './styles'
import SocialBar from './components/SocialBar'
import Chat from './components/Chat'

function App() {
  const theme = createTheme(APP_THEME)

  // gpt generated background
  return (
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
  )
}

export default App
