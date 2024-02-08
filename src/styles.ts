import mountains from './assets/mountains.jpeg'

export const APP_THEME = {
  typography: {
    fontFamily: [
      '"Press Start 2P"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      color: '#ffffff', // white text
      backgroundColor: '#000000', // black background
      padding: '10px', // space around the text
      borderRadius: '5px', // rounded corners
    },
    h2: {
      color: '#ffffff', // white text
      backgroundColor: '#000000', // black background
      padding: '10px', // space around the text
      borderRadius: '5px', // rounded corners
    },
    // Add similar styles for other typography variants (h3, h4, h5, h6, body1, body2, etc.) if needed
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#000000', // black
      contrastText: '#ffffff', // black
    },
  },
}

export const GLOBAL_STYLES = {
  ul: {
    margin: 0,
    padding: 0,
  },
  body: {
    backgroundImage: `url(${mountains})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  p: {
    textShadow:
      '2px 0 0 rgba(0, 0, 0, 1), -2px 0 0 rgba(0, 0, 0, 1), 0 2px 0 rgba(0, 0, 0, 1), 0 -2px 0 rgba(0, 0, 0, 1)',
  },
}
