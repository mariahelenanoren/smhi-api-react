import { Box } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

import { ICity } from '../../contexts/cityContext';
import { IForecast, WeatherContext } from '../../contexts/weatherContext';
import backgroundImage from '../../assets/fall.jpg';
import Header from '../../components/forecast/header/Header';
import HorizontalBar from '../../components/forecast/horizontalBar/HorizontalBar';
import Row from '../../components/forecast/row/Row';
import Details from '../../components/forecast/details/Details';
import useStyles from './style';

const Forecast = () => {
  const classes = useStyles();
  const history = useHistory<ICity>();
  const city = history.location.state;
  const { getTodaysForecast, getWeeklyForecasts } = useContext(WeatherContext);
  const [todaysForecast, setTodaysForecast] = useState<IForecast[] | void>();
  const [weeklyForecasts, setWeeklyForecasts] = useState<IForecast[] | void>();

  useEffect(() => {
    async function fetchData() {
      const forecast = await getTodaysForecast(city);
      setTodaysForecast(forecast);
      const forecasts = await getWeeklyForecasts(city);
      setWeeklyForecasts(forecasts);
    }
    fetchData();
  }, [getTodaysForecast, getWeeklyForecasts, city]);

  return (
    <Box>
      {todaysForecast && weeklyForecasts ? (
        <>
          <Box className={classes.imageContainer}>
            <img
              className={classes.backgroundImage}
              src={backgroundImage}
              alt="background"
            />
            <Header city={city} />
            <Details city={city} forecast={todaysForecast[0]} />
          </Box>
          <HorizontalBar forecasts={todaysForecast} />
          <Row forecasts={weeklyForecasts} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};

export default withRouter(Forecast);
