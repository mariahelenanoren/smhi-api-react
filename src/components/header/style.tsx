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
    right: 60,
    '& fieldset': {
      border: 'none',
    },
  },
  open: {
    maxWidth: 270,
    width: '85%',
    [theme.breakpoints.only('xs')]: {
      maxWidth: '100%',
    },
  },
  close: {
    maxWidth: 40,
    width: 40,
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
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  icon: {
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
