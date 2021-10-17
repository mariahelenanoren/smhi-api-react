import React from 'react';
import { Box } from '@material-ui/core';

import { Header, Footer } from '../../components';
import useStyles from './style';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.main}>{children}</Box>
      <Footer />
    </Box>
  );
}
