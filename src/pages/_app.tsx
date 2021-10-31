import * as React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';

import CityProvider from '../contexts/cityContext';
import WeatherProvider from '../contexts/weatherContext';
import Layout from '../layout/layout/layout';
import '../styling/weather-icons.css';
import '../styling/index.css';
import ThemeSettingsProvider from '../contexts/themeContext';
import CustomThemeProvider from '../styling/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CityProvider>
      <WeatherProvider>
        <ThemeSettingsProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CustomThemeProvider>
        </ThemeSettingsProvider>
      </WeatherProvider>
    </CityProvider>
  );
}
