import { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { IForecast } from '../../../contexts/weatherContext';
import {
  convertUTCTime,
  fetchSunData,
  getParameterValue,
  getApparentTemperature,
  getWeatherCondition,
} from '../../../utils';
import { ICity } from '../../../contexts/cityContext';
import useStyles from './style';
import { TemplateComponent } from '../../';

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
    <TemplateComponent>
      <Grid container className={classes.root}>
        <Grid item md={3} sm={4} xs={12}>
          <Typography variant="h2" className={classes.temperature}>
            {getParameterValue('t', forecast.parameters)?.toFixed(0)}
            &deg;
          </Typography>
        </Grid>
        <Grid item container md={9} sm={8} xs={12} spacing={3}>
          <Grid item md={3} xs={6}>
            <Typography variant="caption">Soluppgång</Typography>
            <Typography variant="h5">
              {convertUTCTime(sunData?.results.sunrise)}
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="caption">Solnedgång</Typography>
            <Typography variant="h5">
              {convertUTCTime(sunData?.results.sunset)}
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="caption">Sikt</Typography>
            <Typography variant="h5">
              {getParameterValue('vis', forecast.parameters)} km
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="caption">Luftfuktighet</Typography>
            <Typography variant="h5">
              {getParameterValue('r', forecast.parameters)}%
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="caption">Känns som</Typography>
            <Typography variant="h5">
              {getApparentTemperature(forecast.parameters)}&deg;C
            </Typography>
          </Grid>
          <Grid item md={3} xs={6}>
            <Typography variant="caption">Vindhastighet</Typography>
            <Typography variant="h5">
              {getParameterValue('ws', forecast.parameters)} m/s
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="caption">Lufttryck</Typography>
            <Typography variant="h5">
              {getParameterValue('msl', forecast.parameters)} hPa
            </Typography>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="body2">
              {`
              Just nu: 
              ${getWeatherCondition(
                getParameterValue('Wsymb2', forecast.parameters) || 1
              )}`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </TemplateComponent>
  );
}
