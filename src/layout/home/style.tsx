import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    height: 350,
    width: '100%',
    marginTop: '-5rem',
    backgroundColor: theme.palette.secondary.main,
  },
  greetingContainer: {
    width: '100%',
    position: 'absolute',
    bottom: '2rem',
    left: 0,
    zIndex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: '0.3',
  },
}));

export default useStyles;
