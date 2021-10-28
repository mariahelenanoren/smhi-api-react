import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    divider: 'rgba(255, 255, 255, 0.3)',
    type: 'dark',
    primary: {
      main: '#2C3647',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1e2430',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    h2: {
      fontWeight: 300,
      fontSize: '5.5rem',
    },
    h3: {
      fontWeight: 300,
      fontSize: '4rem',
    },
    h4: {
      fontWeight: 400,
      fontSize: '2.8rem',
    },
    h5: {
      fontWeight: 400,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 400,
    },
    overline: {
      fontSize: '1rem',
      opacity: '0.8',
    },
  },
});
