import { Box, Typography } from '@material-ui/core';
import { IForecast } from '../../../contexts/weatherContext';
import { getForecastDate } from '../../../functions';

interface IProps {
  forecasts: IForecast[];
}

export default function Row(props: IProps) {
  const { forecasts } = props;

  return (
    <>
      {forecasts.map((forecast, index) =>
        index < 7 ? (
          <Box>
            <Typography color="primary">{getForecastDate(index)}</Typography>
            {forecast.parameters.map((parameter) =>
              parameter.name === 't' ? (
                <Typography color="primary">
                  {parameter.values[0]}&deg;C
                </Typography>
              ) : null
            )}
          </Box>
        ) : null
      )}
    </>
  );
}
