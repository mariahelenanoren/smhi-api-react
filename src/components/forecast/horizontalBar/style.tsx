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
    '& p': {
      marginTop: 5,
      marginBottom: 5,
    },
  },
  bold: {
    fontWeight: 600,
  },
}));

export default useStyles;
