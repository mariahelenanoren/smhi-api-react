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
      {forecasts.map((forecast) => {
        return (
          <Box className={classes.forecastBox}>
            {forecast.parameters.map((parameter) =>
              parameter.name === 't' ? (
                <Typography color="primary">{parameter.values[0]}</Typography>
              ) : null
            )}
          </Box>
        );
      })}
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowY: 'scroll',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  forecastBox: {
    marginRight: 10,
    marginLeft: 10,
  },
}));
