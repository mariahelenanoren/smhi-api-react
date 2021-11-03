import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 'calc(100% + 5rem)',
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    marginTop: '-5rem',
  },
  backgroundImage: {
    position: 'absolute',
    right: 0,
    left: 0,
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    opacity: '0.2',
  },
}));

export default useStyles;
