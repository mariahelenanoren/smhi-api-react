import { useContext, useEffect, useState } from 'react';
import { Container, Divider, Typography } from '@material-ui/core';
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
      <Container className={classes.root}>
        <div className={classes.row}>
          <div>
            <Typography variant="overline" color="primary">
              {city.municipality}
            </Typography>
            <Typography variant="h2" color="primary">
              {city.locality}
            </Typography>
          </div>
          <div>
            {isFavorite ? (
              <FavoriteIcon color="primary" onClick={handleToggleFavorite} />
            ) : (
              <FavoriteBorderIcon
                color="primary"
                onClick={handleToggleFavorite}
              />
            )}
          </div>
        </div>
        <Divider color="primary" light className={classes.divider} />
      </Container>
    </TemplateComponent>
  );
}
