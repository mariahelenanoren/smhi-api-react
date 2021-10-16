import { Box, Container, Typography, Grid } from '@material-ui/core';
import { IForecast } from '../../../contexts/weatherContext';
import { getForecastDate } from '../../../utils';
import getWeatherIcon from '../../../utils/getWeatherIcon';
import TemplateComponent from '../../templateComponent/templateComponent';
import useStyles from './style';

interface IProps {
  forecasts: IForecast[];
}

export default function Row(props: IProps) {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <TemplateComponent>
        <Grid container direction="column">
          {forecasts.map((forecast, index) =>
            index < 7 ? (
              <Box key={index} className={classes.row}>
                <Typography>{getForecastDate(index)}</Typography>
                <div className={classes.forecastContainer}>
                  {forecast.parameters.map((parameter, index) =>
                    parameter.name === 't' ? (
                      <Typography key={index}>
                        {parameter.values[0].toFixed(0)}&deg;C
                      </Typography>
                    ) : null
                  )}
                  <i
                    className={`${getWeatherIcon(forecast.parameters)} ${
                      classes.weatherIcon
                    }`}
                  ></i>
                </div>
              </Box>
            ) : null
          )}
        </Grid>
      </TemplateComponent>
    </Container>
  );
}
