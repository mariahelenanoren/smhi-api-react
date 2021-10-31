import { useContext, useEffect, useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
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
  const theme = useTheme();
  const classes = useStyles();
  const [isFavorite, setFavorite] = useState<boolean>();
  const extraSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      addNewCity(city);
    } else {
      removeCity(city);
    }
  };

  /* Sets the initial favorite state of the city */
  useEffect(() => {
    if (
      savedCities.find(
        (c) => c.latitude === city.latitude && c.longitude === city.longitude
      )
    ) {
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
            <Typography
              className={
                city.locality === city.municipality ? classes.hidden : undefined
              }
              variant="h6"
              color="textSecondary"
            >
              {city.municipality}
            </Typography>
            <div className={classes.localityContainer}>
              <Typography variant={extraSmallScreen ? 'h5' : 'h4'}>
                {city.locality}
              </Typography>
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
