import React, { useContext } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { TemplateComponent, Card } from '../../components';
import { CityContext } from '../../contexts/cityContext';
import useStyles from './style';
import { formatToday } from '../../utils';

export default function Home() {
  const today = new Date();
  const classes = useStyles();
  const { savedCities } = useContext(CityContext);

  return (
    <Box>
      <Box className={classes.imageContainer}>
        <Box className={classes.greetingContainer}>
          <TemplateComponent>
            <Typography>Idag</Typography>
            <Typography variant="h5">{formatToday(today)}</Typography>
          </TemplateComponent>
        </Box>
        <img
          className={classes.backgroundImage}
          src={'/assets/background.jpg'}
          alt="background"
        />
      </Box>
      <TemplateComponent>
        <Grid container spacing={1}>
          {savedCities?.map((city, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card city={city} />
            </Grid>
          ))}
        </Grid>
      </TemplateComponent>
    </Box>
  );
}
