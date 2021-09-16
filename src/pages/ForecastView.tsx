import { Box, Container, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { City } from '../contexts/cityContext';
import { Forecast, WeatherContext } from '../contexts/weatherContext';
import ForecastDetails from '../components/forecast/ForecastDetails';
import ForecastHeader from '../components/forecast/ForecastHeader';
import ForecastHorizontalBar from '../components/forecast/ForecastHorizontalBar';
import ForecastRows from '../components/forecast/ForecastRows';

function ForecastView() {
  const classes = useStyles();
  const history = useHistory<City>();
  const city = history.location.state;
  const { getTodaysForecast, getWeeklyForecasts } = useContext(WeatherContext);
  const [todaysForecast, setTodaysForecast] = useState<Forecast[] | void>();
  const [weeklyForecasts, setWeeklyForecasts] = useState<Forecast[] | void>();

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
      <Container className={classes.root} maxWidth="lg">
        {todaysForecast && weeklyForecasts ? (
          <>
            <ForecastHeader city={city} />
            <ForecastDetails city={city} forecast={todaysForecast[0]} />
            <ForecastHorizontalBar forecasts={todaysForecast} />
            <ForecastRows forecasts={weeklyForecasts} />
          </>
        ) : (
          <p>Loading...</p>
        )}
      </Container>
    </Box>
  );
}

export default withRouter(ForecastView);

const useStyles = makeStyles({
  root: {
    paddingRight: '8rem',
    paddingLeft: '8rem',
  },
});
