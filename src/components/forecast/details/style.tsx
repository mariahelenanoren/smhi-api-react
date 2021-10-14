import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 30,
    paddingBottom: 60,
    zIndex: 1,
  },
  gridContainer: {
    flex: 1,
  },
  temperature: {
    [theme.breakpoints.only('xs')]: {
      marginTop: 20,
      marginBottom: 20,
    },
  },
}));

export default useStyles;
