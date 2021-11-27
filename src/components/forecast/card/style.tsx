import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    padding: 20,
    boxShadow: theme.shadows[1],
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  heart: {
    color: theme.palette.text.secondary,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  divider: {
    marginBottom: 10,
    marginTop: 10,
  },
  weatherIcon: {
    marginLeft: 10,
    fontSize: '1.2rem',
    color: theme.palette.text.primary,
  },
  localityContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  municipalityContainer: {
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
  skeleton: {
    height: 190,
  },
}));

export default useStyles;
