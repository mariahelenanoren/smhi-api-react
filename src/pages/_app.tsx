import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import CityProvider from '../contexts/cityContext';
import WeatherProvider from '../contexts/weatherContext';
import { theme } from '../styling/theme';
import Layout from '../layout/layout/layout';
import '../styling/weather-icons.css';
import '../styling/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CityProvider>
      <WeatherProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </WeatherProvider>
    </CityProvider>
  );
}
