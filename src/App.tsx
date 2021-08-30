import React from 'react';
import CityProvider from './contexts/cityContext';
import Layout from './components/Layout';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styling/theme';
import WeatherProvider from './contexts/weatherContext';

function App() {
    return (
        <CityProvider>
            <WeatherProvider>
                <ThemeProvider theme={theme}>
                    <Layout />
                </ThemeProvider>
            </WeatherProvider>
        </CityProvider>
    );
}

export default App;
