import * as React from 'react';
import { AppContext, AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'next/app';

import CityProvider, { ICity } from '../contexts/cityContext';
import WeatherProvider from '../contexts/weatherContext';
import Layout from '../layout/layout/layout';
import '../styling/weather-icons.css';
import '../styling/index.css';
import ThemeSettingsProvider from '../contexts/themeContext';
import CustomThemeProvider from '../styling/theme/theme';

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
  const response = await fetch(
    'https://raw.githubusercontent.com/sphrak/svenska-stader/master/src/svenska-stader.csv'
  );
  const data = await response.text();
  const allCities = organizeData(data);
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, pageProps: { allCities: allCities } };
};

const organizeData = (csv: string) => {
  /* Organizes information */
  const cityList: ICity[] = [];
  const list = csv.split('\n');
  list.forEach((item, index) => {
    const i = item.split(',');
    const cityObject = {
      locality: i[0],
      municipality: i[1],
      county: i[2],
      latitude: i[3],
      longitude: i[4],
    };
    /* First item of list consist of headings */
    if (index !== 0) {
      cityList.push(cityObject);
    }
  });
  /* Sorts list alphabetically */
  const sortedCityList = cityList.sort((a, b) =>
    a.locality > b.locality ? -1 : 1
  );
  return sortedCityList;
};
