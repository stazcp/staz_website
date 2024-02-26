import mountains from 'assets/mountains.jpeg'

const textStyles = {
  color: '#ffffff', // white text
  fontSize: '1rem',
  textShadow:
    '0.0625rem 0 0 rgba(0, 0, 0, 1), -0.0625rem 0 0 rgba(0, 0, 0, 1), 0 0.125rem 0 rgba(0, 0, 0, 1), 0 -0.125rem 0 rgba(0, 0, 0, 1)',
}

const typographyStyles = {
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
  h1: { ...textStyles, fontSize: '1.5rem' },
  h2: { ...textStyles, fontSize: '1.25rem' },
  h6: { ...textStyles, fontSize: '1rem' },
  p: { ...textStyles },
  body1: { ...textStyles, fontSize: '1rem' },
  body2: { ...textStyles },
  ul: {
    margin: 0,
    padding: 0,
  },
}

export const APP_THEME = {
  typography: typographyStyles,
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
      contrastText: '#ffffff', // white
    },
  },
}

export const GLOBAL_STYLES = {
  ...APP_THEME.typography,
  body: {
    backgroundImage: `url(${mountains})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}
