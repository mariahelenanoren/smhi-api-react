import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: 50,
    zIndex: 1,
    '& svg': {
      fontSize: '2rem',
    },
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'flex-end',
  },
  heart: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  divider: {
    height: 2,
    backgroundColor: theme.palette.divider,
  },
}));

export default useStyles;
