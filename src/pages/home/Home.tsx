import { Box, Container, Grid } from '@material-ui/core';
import { useContext } from 'react';

import backgroundImage from '../../assets/fall.jpg';
import Card from '../../components/forecast/card/Card';
import TemplateComponent from '../../components/templateComponent/templateComponent';
import { CityContext } from '../../contexts/cityContext';
import useStyles from './style';

export default function Home() {
  const classes = useStyles();
  const { savedCities } = useContext(CityContext);

  return (
    <Box>
      <Box className={classes.backgroundImage}></Box>
      {/* <img
        className={classes.backgroundImage}
        src={backgroundImage}
        alt="background"
      /> */}
      <TemplateComponent>
        <Grid container spacing={2}>
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
