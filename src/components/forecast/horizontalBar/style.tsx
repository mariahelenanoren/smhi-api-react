import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    paddingTop: 15,
    paddingBottom: 15,
  },
  barContainer: {
    width: '100%',
    overflowY: 'scroll',
    display: 'flex',
  },
  forecastBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
  },
  weatherIcon: {
    marginTop: 10,
    marginBottom: 10,
    color: theme.palette.primary.main,
  },
  bold: {
    fontWeight: 600,
  },
}));

export default useStyles;
