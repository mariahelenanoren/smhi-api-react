import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
  },
  link: {
    textDecoration: 'underline',
    zIndex: 1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
