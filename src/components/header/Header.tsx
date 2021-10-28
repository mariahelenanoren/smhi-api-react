import { useContext } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  InputAdornment,
  TextField,
  Typography,
  Link,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';

import { ICity, CityContext } from '../../contexts/cityContext';
import useStyles from './style';
import { TemplateComponent } from '../../components';

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  const { allCities } = useContext(CityContext);

  const handleSearch = (city: ICity) => {
    router.push({
      pathname: '/[municipality]/[locality]',
      query: { municipality: city.municipality, locality: city.locality },
    });
  };

  return (
    <TemplateComponent>
      <Box className={classes.root}>
        <div>
          <Typography variant="h1">Väder</Typography>
          <Link href="/">
            <Typography>Hem</Typography>
          </Link>
        </div>
        <Autocomplete
          disableClearable
          className={classes.autocomplete}
          forcePopupIcon={false}
          options={allCities}
          getOptionLabel={(city: ICity) =>
            city.locality + ', ' + city.municipality
          }
          onChange={(event, value) => handleSearch(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              placeholder="Sök stad eller ort..."
              variant="outlined"
              size="small"
              className={classes.textfield}
              InputProps={{
                ...params.InputProps,
                classes: { input: classes.input },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Box>
    </TemplateComponent>
  );
}
