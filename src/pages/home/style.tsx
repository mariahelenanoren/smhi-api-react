import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  imageContainer: {
    position: 'relative',
    height: 350,
    width: '100%',
    marginTop: '-5rem',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    objectFit: 'cover',
    objectPosition: 'center',
    opacity: '0.5',
  },
});

export default useStyles;
