import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useRouter } from 'next/router';

import useStyles from './style';
import { Progress } from '../../components';
import Head from 'next/head';
import { useTheme } from '@material-ui/core';

interface IProps {
  children?: React.ReactNode;
  title: string;
}

export default function Page({ children, title }: IProps) {
  const classes = useStyles();
  const theme = useTheme();
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
      <Head>
        <title>{title}</title>
        <meta
          name="theme-color"
          content={
            theme.palette.type === 'light'
              ? theme.palette.secondary.light
              : theme.palette.secondary.dark
          }
        />
      </Head>
      {loading ? <Progress /> : <Box className={classes.root}>{children}</Box>}
    </>
  );
}
