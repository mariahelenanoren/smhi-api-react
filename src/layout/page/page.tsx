import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';

import useStyles from './style';
import { Progress } from '../../components';

interface IProps {
  children?: React.ReactNode;
}

export default function Page({ children }: IProps) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
    };

    const handleRouteComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);
  return (
    <>
      {loading ? <Progress /> : <Box className={classes.root}>{children}</Box>}
    </>
  );
}
