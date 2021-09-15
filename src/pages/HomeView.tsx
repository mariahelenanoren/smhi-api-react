import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import backgroundImage from '../assets/fall.jpg';

export default function HomeView() {
  const classes = useStyles();

  return (
    <Box>
      <img
        className={classes.backgroundImage}
        src={backgroundImage}
        alt="background"
      />
      <Container maxWidth="lg">
        <Grid></Grid>
      </Container>
    </Box>
  );
}

const useStyles = makeStyles({
  backgroundImage: {
    marginTop: '-5rem',
    height: '25rem',
    width: '100%',
    objectFit: 'cover',
    opacity: '0.2',
  },
});
