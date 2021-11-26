import React, { Dispatch, SetStateAction } from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AutocompleteRenderInputParams } from '@material-ui/lab';
import useStyles from './style';

export default function Search({
  isMobileSearchOpen,
  setMobileSearch,
  params,
}: {
  isMobileSearchOpen: boolean;
  setMobileSearch: Dispatch<SetStateAction<boolean>>;
  params: AutocompleteRenderInputParams;
}) {
  const classes = useStyles();

  return (
    <TextField
      onClick={() => setMobileSearch(!isMobileSearchOpen)}
      onBlur={() => setMobileSearch(false)}
      {...params}
      variant="outlined"
      placeholder={isMobileSearchOpen ? 'Sök stad eller ord...' : undefined}
      size="small"
      className={classes.textfield}
      InputProps={{
        ...params.InputProps,
        classes: { input: classes.input },
        endAdornment: (
          <InputAdornment position="end" className={classes.icon}>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
