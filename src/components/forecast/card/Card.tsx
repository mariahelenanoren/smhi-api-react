import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Typography, Box, Divider, IconButton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons';
import { Skeleton } from '@material-ui/lab';

import { CityContext, ICity } from '../../../contexts/cityContext';
import { IForecast, WeatherContext } from '../../../contexts/weatherContext';
import getWeatherIcon from '../../../utils/getWeatherIcon';
import useStyles from './style';

interface IProps {
  city: ICity;
}

export default function Card({ city }: IProps) {
  const classes = useStyles();
  const router = useRouter();
  const [todaysForecast, setTodaysForecast] = useState<IForecast[] | void>();
  const { getTodaysForecast } = useContext(WeatherContext);
  const { removeCity } = useContext(CityContext);

  useEffect(() => {
    async function fetchData() {
      const forecast = await getTodaysForecast(city);
      setTodaysForecast(forecast);
    }
    fetchData();
  }, [getTodaysForecast, city]);

  const handleRemoveFavorite = () => {
    removeCity(city);
  };

  const handleClick = () => {
    router.push({
      pathname: '/[municipality]/[locality]',
      query: { municipality: city.municipality, locality: city.locality },
    });
  };

  return (
    <>
      {todaysForecast ? (
        <Box className={classes.root}>
          <>
            <div className={classes.topContainer}>
              <Typography variant="h3">
                {todaysForecast[0].parameters
                  .find((p) => p.name === 't')
                  ?.values[0].toFixed(0)}
                &deg;C
              </Typography>
              <IconButton
                onClick={handleRemoveFavorite}
                aria-label="removeFavorite"
              >
                <Favorite fontSize="medium" className={classes.heart} />
              </IconButton>
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
                <Typography color="textSecondary">
                  {city.municipality}
                </Typography>
                <Typography onClick={handleClick} className={classes.link}>
                  Läs mer
                </Typography>
              </div>
            </div>
          </>
        </Box>
      ) : (
        <Skeleton variant="rect" className={classes.skeleton} />
      )}
    </>
  );
}
