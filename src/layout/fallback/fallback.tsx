import React from 'react';
import Link from 'next/link';
import { Box, Button, Typography } from '@material-ui/core';

import { TemplateComponent } from '../../components';
import useStyles from './style';

export default function Fallback() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TemplateComponent>
        <Typography variant="h1">404</Typography>
        <Typography variant="h6">Sidan kunde inte hittas</Typography>
        <Link href="/">
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Gå tillbaka till startsidan
          </Button>
        </Link>
      </TemplateComponent>
    </Box>
  );
}
