import { Box, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { Forecast } from '../../contexts/weatherContext';
import { convertUTCTime } from '../../functions/convertUTCTime';

interface Props {
  forecasts: Forecast[];
}

export default function ForecastHorizontalBar(props: Props) {
  const { forecasts } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowY: 'scroll',
    paddingTop: 15,
    paddingBottom: 15,
    display: 'flex',
    borderTop: `1px solid ${theme.palette.divider}`,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  forecastBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
    '& p': {
      marginTop: 5,
      marginBottom: 5,
    },
  },
  bold: {
    fontWeight: 600,
  },
}));
