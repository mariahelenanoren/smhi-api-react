import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  imageContainer: {
    position: 'relative',
    height: 350,
    width: '100%',
    marginTop: '-5rem',
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
    opacity: '0.2',
  },
});

export default useStyles;