import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    divider: '#000000',
    type: 'light',
    primary: {
      main: '#ffffff',
      contrastText: '#000000',
    },
    secondary: {
      main: '#f5f6f7',
      contrastText: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: 'rgba(000, 000, 000, 0.5)',
    },
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
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
