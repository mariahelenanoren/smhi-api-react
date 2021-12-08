import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { TemplateComponent } from '../templateComponent';
import useStyles from './style';

export default function Footer() {
  const classes = useStyles();
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className={classes.root} data-test-id="footer">
      <TemplateComponent>
        <Typography variant="overline">{`Maria Helena Norén © ${year}`}</Typography>
      </TemplateComponent>
    </div>
  );
}
