import { Box, Container, Grid } from '@material-ui/core';
import { useContext } from 'react';

import Card from '../../components/forecast/card/Card';
import TemplateComponent from '../../components/templateComponent/templateComponent';
import { CityContext } from '../../contexts/cityContext';
import useStyles from './style';

export default function Home() {
  const classes = useStyles();
  const { savedCities } = useContext(CityContext);

  return (
    <Box>
      <div className={classes.imageContainer}>
        <img
          className={classes.backgroundImage}
          src={'/assets/background.jpg'}
          alt="background"
        />
      </div>
      <TemplateComponent>
        <Grid container spacing={1}>
          {savedCities.map((city, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card city={city} />
            </Grid>
          ))}
        </Grid>
      </TemplateComponent>
    </Box>
  );
}
