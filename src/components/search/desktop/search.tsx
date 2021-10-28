import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { AutocompleteRenderInputParams } from '@material-ui/lab';
import useStyles from './style';

export default function Search({
  params,
}: {
  params: AutocompleteRenderInputParams;
}) {
  const classes = useStyles();

  return (
    <TextField
      {...params}
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
  );
}
