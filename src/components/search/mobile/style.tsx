import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textfield: {
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 100,
    backgroundColor: theme.palette.divider,
  },
  input: {
    minWidth: '0 !important',
    width: '0 !important',
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
    '&::placeholder': {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  icon: {
    margin: 0,
  },
}));

export default useStyles;
