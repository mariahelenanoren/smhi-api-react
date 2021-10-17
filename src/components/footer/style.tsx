import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.2rem 0',
    marginTop: '4rem',
    textAlign: 'center',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
