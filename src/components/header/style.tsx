import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '5rem',
    position: 'relative',
    zIndex: 1,
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
    /* borderRadius: '5rem', */
    '& .MuiFormControl-root': {
      /* paddingRight: '0.5rem',
              paddingLeft: '0.5rem', */
      backgroundColor: 'rgba(250, 250, 250, 0.3)',
    },
    '& fieldset': {
      border: 'none',
    },
  },
  textField: {
    /* borderRadius: '5rem', */
    width: '15rem',
    backgroundColor: 'rgba(250, 250, 250, 0.2)',
  },
  input: {
    '&::placeholder': {
      opacity: '100%',
    },
  },
});

export default useStyles;
