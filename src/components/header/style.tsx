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
    position: 'relative',
    zIndex: 100,
    width: 270,
    '& fieldset': {
      border: 'none',
    },
  },
  textfield: {
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 100,
    backgroundColor: theme.palette.divider,
  },
  input: {
    '&::placeholder': {
      color: theme.palette.common.white,
      opacity: 1,
    },
  },
}));

export default useStyles;
