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
        color: '#000000',
        textDecoration: 'none',
        '& p:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
  autocomplete: {
    width: 270,
    '& fieldset': {
      border: 'none',
    },
  },
  textfield: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default useStyles;
