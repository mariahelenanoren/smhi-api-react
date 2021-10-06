import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    paddingRight: '8rem',
    paddingLeft: '8rem',
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: '-5rem',
    right: 0,
    left: 0,
    height: 'calc(100% + 5rem)',
    width: '100%',
    objectFit: 'cover',
    opacity: '0.2',
  },
});

export default useStyles;
