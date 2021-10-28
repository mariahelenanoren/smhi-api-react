import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '5rem',
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div': {
      transition: 'all 0.2s',
      display: 'flex',
      alignItems: 'center',
      '& h1': {
        fontSize: '1rem',
        marginRight: '3rem',
        fontWeight: '600',
      },
      '& a': {
        fontSize: '1rem',
        fontWeight: '400',
        color: theme.palette.text.primary,
        textDecoration: 'none',
        '& p:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
  autocomplete: {
    position: 'absolute',
    right: 0,
    '& fieldset': {
      border: 'none',
    },
  },
  open: {
    maxWidth: 270,
    width: '100%',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '100%',
    },
  },
  close: {
    maxWidth: 46,
    width: 46,
  },
  input: {
    '&::placeholder': {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
  transparent: {
    opacity: 0,
  },
}));

export default useStyles;
