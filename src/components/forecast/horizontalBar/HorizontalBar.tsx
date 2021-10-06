import { Box, Container, Typography } from '@material-ui/core';

import { IForecast } from '../../../contexts/weatherContext';
import { convertUTCTime } from '../../../functions';
import TemplateComponent from '../../templateComponent/templateComponent';
import useStyles from './style';

interface IProps {
  forecasts: IForecast[];
}

export default function HorizontalBar(props: IProps) {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <TemplateComponent>
      <Container className={classes.root}>
        {forecasts.map((forecast, index) => {
          return (
            <Box className={classes.forecastBox}>
              {index === 0 ? (
                <Typography className={classes.bold} color="primary">
                  Nu
                </Typography>
              ) : (
                <Typography color="primary">
                  {convertUTCTime(forecast.validTime)}
                </Typography>
              )}
              {forecast.parameters.map((parameter) =>
                parameter.name === 't' ? (
                  <Typography color="primary">
                    {parameter.values[0]}&deg;C
                  </Typography>
                ) : null
              )}
            </Box>
          );
        })}
      </Container>
    </TemplateComponent>
  );
}
