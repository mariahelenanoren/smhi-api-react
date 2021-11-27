import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 20,
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.secondary.main,
  },
  forecastContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  weatherIcon: {
    marginLeft: 10,
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
