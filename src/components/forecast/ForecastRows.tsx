import { Box, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { Forecast } from '../../contexts/weatherContext';

interface Props {
  forecasts: Forecast[];
}

export default function ForecastRows(props: Props) {
  const { forecasts } = props;

  const getDate = (index: number) => {
    const today = new Date();
    const date = today.getDate() + index;
    return date;
  };

  useEffect(() => {
    console.log(forecasts);
  }, [forecasts]);

  return (
    <>
      {forecasts.map((forecast, index) =>
        index < 7 ? (
          <Box>
            <Typography color="primary">{getDate(index)}</Typography>
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
