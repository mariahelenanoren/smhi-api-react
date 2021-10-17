import { Box, Container, Typography, Grid } from '@material-ui/core';
import { IForecast } from '../../../contexts/weatherContext';
import getWeatherIcon from '../../../utils/getWeatherIcon';
import { TemplateComponent } from '../../';
import useStyles from './style';
import { formatDate } from '../../../utils';

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
                <Typography>{formatDate(forecast.validTime)}</Typography>
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
