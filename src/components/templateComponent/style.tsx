import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '80vw',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '90vw',
    },
  },
}));

export default useStyles;
