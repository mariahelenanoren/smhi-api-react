import React, { useState, useContext, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';

import { CityContext } from '../../contexts/cityContext';
import { IForecast, WeatherContext } from '../../contexts/weatherContext';
import {
  ForecastHeader,
  HorizontalBar,
  Row,
  Details,
  Progress,
} from '../../components';
import useStyles from './style';

export default function Forecast() {
  const classes = useStyles();
  const router = useRouter();
  const { getTodaysForecast, getWeeklyForecasts } = useContext(WeatherContext);
  const { allCities } = useContext(CityContext);
  const city = allCities.find(
    (c) =>
      c.municipality === router.query.municipality &&
      c.locality === router.query.locality
  );
  const [todaysForecast, setTodaysForecast] = useState<IForecast[] | void>();
  const [weeklyForecasts, setWeeklyForecasts] = useState<IForecast[] | void>();

  useEffect(() => {
    async function fetchData() {
      const forecast = await getTodaysForecast(city!);
      setTodaysForecast(forecast);
      const forecasts = await getWeeklyForecasts(city!);
      setWeeklyForecasts(forecasts);
    }
    if (city) {
      fetchData();
    }
  }, [getTodaysForecast, getWeeklyForecasts, city]);

  return (
    <>
      {todaysForecast && weeklyForecasts && city ? (
        <>
          <Box className={classes.imageContainer}>
            <img
              className={classes.backgroundImage}
              src={'/assets/background.jpg'}
              alt="background"
            />
            <ForecastHeader city={city} forecast={todaysForecast[0]} />
            <Details city={city} forecast={todaysForecast[0]} />
          </Box>
          <HorizontalBar forecasts={todaysForecast} />
          <Row forecasts={weeklyForecasts} />
        </>
      ) : (
        <Progress />
      )}
    </>
  );
}
