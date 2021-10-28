import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 50,
    zIndex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'flex-end',
  },
  localityContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  weatherIcon: {
    marginLeft: 15,
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
  },
  heart: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
