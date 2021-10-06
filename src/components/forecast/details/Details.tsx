import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import { IForecast } from '../../../contexts/weatherContext';
import {
  convertUTCTime,
  fetchSunData,
  getParameterValue,
  getApparentTemperature,
} from '../../../functions';
import { ICity } from '../../../contexts/cityContext';
import useStyles from './style';

interface IProps {
  forecast: IForecast;
  city: ICity;
}

interface ISunData {
  results: {
    sunrise: string;
    sunset: string;
  };
}

export default function Details(props: IProps) {
  const { forecast, city } = props;
  const classes = useStyles();
  const [sunData, setSunData] = useState<ISunData>();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchSunData(city.latitude, city.longitude);
      setSunData(data);
    };
    fetch();
  }, [city]);

  return (
    <Box className={classes.root}>
      <Typography variant="h2" color="primary">
        {getParameterValue('t', forecast.parameters)}
        &deg;
      </Typography>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Soluppgång</Typography>
          <Typography variant="h4" color="primary">
            {convertUTCTime(sunData?.results.sunrise)}
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Solnedgång</Typography>
          <Typography variant="h4" color="primary">
            {convertUTCTime(sunData?.results.sunset)}
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Sikt</Typography>
          <Typography variant="h4" color="primary">
            {getParameterValue('vis', forecast.parameters)} km
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Luftfuktighet</Typography>
          <Typography variant="h4" color="primary">
            {getParameterValue('r', forecast.parameters)}%
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Känns som</Typography>
          <Typography variant="h4" color="primary">
            {getApparentTemperature(forecast.parameters)}&deg;
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Vindhastighet</Typography>
          <Typography variant="h4" color="primary">
            {getParameterValue('ws', forecast.parameters)} m/s
          </Typography>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Typography color="primary">Lufttryck</Typography>
          <Typography variant="h4" color="primary">
            {getParameterValue('msl', forecast.parameters)} hPa
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
