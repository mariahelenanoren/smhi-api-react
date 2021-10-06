import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import CityProvider from './contexts/cityContext';
import Layout from './layout/Layout';
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
