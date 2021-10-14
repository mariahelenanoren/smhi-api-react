import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    paddingTop: 30,
    paddingBottom: 60,
    zIndex: 1,
  },
  grid: {
    marginLeft: 50,
  },
}));

export default useStyles;
