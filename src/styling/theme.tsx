import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    divider: '#f0f0f0',
    type: 'light',
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f0f0f0',
      contrastText: '#000000',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
    h2: {
      fontSize: '3.5rem',
    },
    overline: {
      fontSize: '1rem',
      opacity: '0.8',
    },
  },
});
