import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textfield: {
    paddingRight: 2,
    paddingLeft: 2,
    borderRadius: 100,
    backgroundColor: theme.palette.divider,
  },
  input: {
    '&::placeholder': {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
}));

export default useStyles;
