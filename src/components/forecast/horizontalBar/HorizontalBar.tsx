import { Box, Typography } from '@material-ui/core';

import { IForecast } from '../../../contexts/weatherContext';
import { convertUTCTime } from '../../../utils';
import getWeatherIcon from '../../../utils/getWeatherIcon';
import { TemplateComponent } from '../../';
import useStyles from './style';

interface IProps {
  forecasts: IForecast[];
}

export default function HorizontalBar(props: IProps) {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TemplateComponent>
        <Box className={classes.barContainer}>
          {forecasts.map((forecast, index) => {
            return (
              <Box key={index} className={classes.forecastBox}>
                {index === 0 ? (
                  <Typography className={classes.bold}>Nu</Typography>
                ) : (
                  <Typography>{convertUTCTime(forecast.validTime)}</Typography>
                )}
                <i
                  className={`${getWeatherIcon(forecast.parameters)} ${
                    classes.weatherIcon
                  }`}
                ></i>
                {forecast.parameters.map((parameter, index) =>
                  parameter.name === 't' ? (
                    <Typography key={index}>
                      {parameter.values[0].toFixed(0)}&deg;C
                    </Typography>
                  ) : null
                )}
              </Box>
            );
          })}
        </Box>
      </TemplateComponent>
    </Box>
  );
}
