import { Box, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { Forecast } from '../../contexts/weatherContext';

interface Props {
  forecasts: Forecast[];
}

export default function ForecastHorizontalBar(props: Props) {
  const { forecasts } = props;
  const classes = useStyles();

  useEffect(() => {
    console.log(forecasts);
  }, [forecasts]);

  return (
    <Box className={classes.root}>
      {forecasts.map((forecast) =>
        forecast.parameters.map((parameter) =>
          parameter.name === 't' ? (
            <Typography>{parameter.values[0]}</Typography>
          ) : null
        )
      )}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));
