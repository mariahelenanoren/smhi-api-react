import React from 'react';
import { AppContext, AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'next/app';

import CityProvider from '../contexts/cityContext';
import WeatherProvider from '../contexts/weatherContext';
import Layout from '../layout/layout/layout';
import '../styling/weather-icons.css';
import '../styling/index.css';
import ThemeSettingsProvider from '../contexts/themeContext';
import CustomThemeProvider from '../styling/theme/theme';
import { getAllCities } from '../utils';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CityProvider>
      <WeatherProvider>
        <ThemeSettingsProvider>
          <CustomThemeProvider>
            <CssBaseline />
            <Layout allCities={pageProps.allCities}>
              <Component {...pageProps} />
            </Layout>
          </CustomThemeProvider>
        </ThemeSettingsProvider>
      </WeatherProvider>
    </CityProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const allCities = await getAllCities();
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, pageProps: { allCities: allCities } };
};
