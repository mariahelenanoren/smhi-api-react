import React from 'react';
import { Box } from '@material-ui/core';

import Header from '../../components/header/Header';
import useStyles from './style';

interface IProps {
  children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Box className={classes.root}>{children}</Box>
    </>
  );
}
