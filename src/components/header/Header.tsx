import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { ICity, CityContext } from '../../contexts/cityContext';
import { TemplateComponent } from '../../components';
import { MobileSearch, DesktopSearch } from '../search';
import useStyles from './style';

export default function Header() {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const [isMobileSearchOpen, setMobileSearch] = useState(false);
  const extraSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));

  const { allCities } = useContext(CityContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth.toString() > theme.breakpoints.only('xs')) {
        setMobileSearch(true);
      } else {
        setMobileSearch(false);
      }
    };
    window.addEventListener('resize', handleResize, false);
  }, [theme.breakpoints]);

  const handleSearch = (city: ICity) => {
    router.push({
      pathname: '/[municipality]/[locality]',
      query: { municipality: city.municipality, locality: city.locality },
    });
  };

  return (
    <TemplateComponent>
      <Box className={classes.root}>
        <div className={isMobileSearchOpen ? classes.transparent : undefined}>
          <Typography variant="h1">Väder</Typography>
          <Link href="/">
            <Typography>Hem</Typography>
          </Link>
        </div>
        <Autocomplete
          disableClearable
          className={`${classes.autocomplete} ${
            isMobileSearchOpen
              ? classes.open
              : extraSmallScreen
              ? classes.close
              : classes.open
          }`}
          forcePopupIcon={false}
          options={allCities}
          getOptionLabel={(city: ICity) =>
            city.locality + ', ' + city.municipality
          }
          onChange={(event, value) => handleSearch(value)}
          renderInput={(params) =>
            extraSmallScreen ? (
              <MobileSearch
                params={params}
                isMobileSearchOpen={isMobileSearchOpen}
                setMobileSearch={setMobileSearch}
              />
            ) : (
              <DesktopSearch params={params} />
            )
          }
        />
      </Box>
    </TemplateComponent>
  );
}
