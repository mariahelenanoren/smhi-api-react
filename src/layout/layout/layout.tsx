import React from 'react';
import { Box } from '@material-ui/core';

import { Header, Footer } from '../../components';
import useStyles from './style';
import { ICity } from '../../contexts/cityContext';

interface IProps {
  children: React.ReactNode;
  allCities: ICity[];
}

export default function Layout({ children, allCities }: IProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header allCities={allCities} />
      <Box className={classes.main}>{children}</Box>
      <Footer />
    </Box>
  );
}
