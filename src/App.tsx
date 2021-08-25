import React from 'react';
import CityProvider from './contexts/cityContext';
import Layout from './components/Layout';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styling/theme';

function App() {
    return (
        <CityProvider>
            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
        </CityProvider>
    );
}

export default App;
