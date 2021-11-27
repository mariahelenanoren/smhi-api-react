import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 'calc(40px + 5rem)',
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
    marginTop: 10,
  },
  weatherIcon: {
    marginLeft: 15,
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
  },
  heart: {
    color: theme.palette.text.secondary,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  hidden: {
    opacity: 0,
  },
}));

export default useStyles;
