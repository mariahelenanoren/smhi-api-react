import { useContext, useEffect, useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

import useStyles from './style';
import { ICity } from '../../../contexts/cityContext';
import { CityContext } from '../../../contexts/cityContext';
import { TemplateComponent } from '../../';
import { IForecast } from '../../../contexts/weatherContext';
import getWeatherIcon from '../../../utils/getWeatherIcon';

interface IProps {
  city: ICity;
  forecast: IForecast;
}

export default function Header({ city, forecast }: IProps) {
  const { addNewCity, removeCity, savedCities } = useContext(CityContext);
  const classes = useStyles();
  const [isFavorite, setFavorite] = useState<boolean>();

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      addNewCity(city);
    } else {
      removeCity(city);
    }
  };

  /* Sets the initial favorite state of the city */
  useEffect(() => {
    if (savedCities.find((c) => c === city)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [city, savedCities]);

  return (
    <TemplateComponent>
      <Box className={classes.root}>
        <div className={classes.row}>
          <div>
            <Typography variant="h6" color="textSecondary">
              {city.municipality}
            </Typography>
            <div className={classes.localityContainer}>
              <Typography variant="h4">{city.locality}</Typography>
              <i
                className={`${getWeatherIcon(forecast.parameters)} ${
                  classes.weatherIcon
                }`}
              ></i>
            </div>
          </div>
          <div>
            {isFavorite ? (
              <IconButton
                onClick={handleToggleFavorite}
                aria-label="removeFavorite"
              >
                <Favorite fontSize="medium" className={classes.heart} />
              </IconButton>
            ) : (
              <IconButton
                onClick={handleToggleFavorite}
                aria-label="addFavorite"
              >
                <FavoriteBorder fontSize="medium" className={classes.heart} />
              </IconButton>
            )}
          </div>
        </div>
        <Divider />
      </Box>
    </TemplateComponent>
  );
}
