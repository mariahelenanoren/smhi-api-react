import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textfield: {
    paddingRight: 2,
    paddingLeft: 2,
    borderRadius: 100,
    backgroundColor: theme.palette.searchBar.main,
  },
  input: {
    minWidth: '0 !important',
    width: '0 !important',
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
  icon: {
    color: theme.palette.text.primary,
    cursor: 'pointer',
    margin: 0,
  },
}));

export default useStyles;
