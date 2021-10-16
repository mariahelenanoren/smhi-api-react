import { Box, CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface IProps {
  children?: React.ReactNode;
}

export default function Page({ children }: IProps) {
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
      router.events.on('routeChangeComplete', handleRouteComplete);
    };
  }, [router.events]);
  return <>{loading ? <CircularProgress /> : <Box>{children}</Box>}</>;
}
