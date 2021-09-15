import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    divider: 'rgba(255, 255, 255, 0.5)',
    type: 'dark',
    primary: {
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    h2: {
      fontSize: '3.5rem',
    },
    overline: {
      fontSize: '1rem',
      opacity: '0.8',
    },
  },
});
