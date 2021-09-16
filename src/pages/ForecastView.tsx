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
  const { getTodaysForecast } = useContext(WeatherContext);
  const [todaysForecast, setTodaysForecast] = useState<Forecast[] | void>();

  useEffect(() => {
    async function fetchData() {
      const data = await getTodaysForecast(city);
      setTodaysForecast(data);
      console.log(data);
    }
    fetchData();
  }, [getTodaysForecast, city]);

  return (
    <Box>
      <Container className={classes.root} maxWidth="lg">
        {todaysForecast ? (
          <>
            <ForecastHeader city={city} />
            <ForecastDetails city={city} forecast={todaysForecast[0]} />
            <ForecastHorizontalBar forecasts={todaysForecast} />
            <ForecastRows forecasts={todaysForecast} />
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
