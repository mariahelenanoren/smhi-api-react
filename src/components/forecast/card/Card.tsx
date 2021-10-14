import { Typography, Box, Divider } from '@material-ui/core';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CityContext, ICity } from '../../../contexts/cityContext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { IForecast, WeatherContext } from '../../../contexts/weatherContext';
import useStyles from './style';
import getWeatherIcon from '../../../utils/getWeatherIcon';

interface IProps {
  city: ICity;
}

export default function Card({ city }: IProps) {
  const classes = useStyles();
  const history = useHistory();
  const [todaysForecast, setTodaysForecast] = useState<IForecast[] | void>();
  const { getTodaysForecast } = useContext(WeatherContext);
  const { removeCity } = useContext(CityContext);

  useEffect(() => {
    async function fetchData() {
      const forecast = await getTodaysForecast(city);
      setTodaysForecast(forecast);
    }
    console.log(city);
    fetchData();
  }, [getTodaysForecast, city]);

  const handleRemoveFavorite = () => {
    removeCity(city);
  };

  const handleClick = () => {
    history.push(`/${city.municipality}+${city.locality}`, city);
  };

  return (
    <Box className={classes.root}>
      {todaysForecast ? (
        <>
          <div className={classes.topContainer}>
            <Typography variant="h3">
              {todaysForecast[0].parameters
                .find((p) => p.name === 't')
                ?.values[0].toFixed(0)}
              &deg;C
            </Typography>
            <FavoriteIcon onClick={handleRemoveFavorite} />
          </div>
          <Divider className={classes.divider} />
          <div>
            <div className={classes.localityContainer}>
              <Typography variant="h6">{city.locality}</Typography>
              <i
                className={`${getWeatherIcon(todaysForecast[0].parameters)} ${
                  classes.weatherIcon
                }`}
              ></i>
            </div>
            <div className={classes.municipalityContainer}>
              <Typography color="textSecondary">{city.municipality}</Typography>
              <Typography onClick={handleClick} className={classes.link}>
                Läs mer
              </Typography>
            </div>
          </div>
        </>
      ) : null}
    </Box>
  );
}
