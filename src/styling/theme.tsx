import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
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
