import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { Typography, Box, Divider } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';
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
  const [isFavoriteHover, setFavoriteHover] = useState(false);
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

  const handleFavoriteHover = () => {
    setFavoriteHover(!isFavoriteHover);
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
              {isFavoriteHover ? (
                <FavoriteBorder
                  className={classes.heart}
                  onMouseEnter={handleFavoriteHover}
                  onMouseLeave={handleFavoriteHover}
                  onClick={handleRemoveFavorite}
                />
              ) : (
                <Favorite
                  className={classes.heart}
                  onMouseEnter={handleFavoriteHover}
                  onMouseLeave={handleFavoriteHover}
                  onClick={handleRemoveFavorite}
                />
              )}
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
