import { useContext, useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useStyles from './style';
import { ICity } from '../../../contexts/cityContext';
import { CityContext } from '../../../contexts/cityContext';
import TemplateComponent from '../../templateComponent/templateComponent';

interface IProps {
  city: ICity;
}

export default function Header(props: IProps) {
  const { city } = props;
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
            <Typography variant="h2">{city.locality}</Typography>
          </div>
          <div>
            {isFavorite ? (
              <FavoriteIcon
                onClick={handleToggleFavorite}
                className={classes.heart}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={handleToggleFavorite}
                className={classes.heart}
              />
            )}
          </div>
        </div>
        <Divider light className={classes.divider} />
      </Box>
    </TemplateComponent>
  );
}
