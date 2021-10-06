import React, { ReactChild } from 'react';
import { Container } from '@material-ui/core';

import useStyles from './style';

interface IProps {
  children: ReactChild[] | ReactChild;
}

const TemplateComponent = ({ children }: IProps) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      {children}
    </Container>
  );
};
export default TemplateComponent;
