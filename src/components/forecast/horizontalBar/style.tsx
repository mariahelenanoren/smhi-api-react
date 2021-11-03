import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
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
    paddingTop: 15,
    paddingBottom: 15,
  },
  weatherIcon: {
    marginTop: 10,
    marginBottom: 10,
    color: theme.palette.text.primary,
  },
  bold: {
    fontWeight: 600,
  },
}));

export default useStyles;
