import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';

import { ICity, CityContext } from '../../contexts/cityContext';
import useStyles from './style';
import TemplateComponent from '../templateComponent/templateComponent';

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  const { allCities } = useContext(CityContext);

  const handleSearch = (city: ICity) => {
    history.push(`/${city.municipality}+${city.locality}`, city);
  };

  return (
    <TemplateComponent>
      <Container className={classes.root}>
        <div>
          <Typography variant="h1">Väder</Typography>
          <Link to="/">
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
              className={classes.textfield}
              placeholder="Sök stad eller ort..."
              variant="outlined"
              size="small"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Container>
    </TemplateComponent>
  );
}
