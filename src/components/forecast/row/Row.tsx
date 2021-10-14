import { Box, Container, Typography } from '@material-ui/core';
import { IForecast } from '../../../contexts/weatherContext';
import { getForecastDate } from '../../../functions';
import TemplateComponent from '../../templateComponent/templateComponent';
import useStyles from './style';

interface IProps {
  forecasts: IForecast[];
}

export default function Row(props: IProps) {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <TemplateComponent>
      <Container className={classes.root}>
        {forecasts.map((forecast, index) =>
          index < 7 ? (
            <Box className={classes.row}>
              <Typography>{getForecastDate(index)}</Typography>
              {forecast.parameters.map((parameter) =>
                parameter.name === 't' ? (
                  <Typography>{parameter.values[0]}&deg;C</Typography>
                ) : null
              )}
            </Box>
          ) : null
        )}
      </Container>
    </TemplateComponent>
  );
}
