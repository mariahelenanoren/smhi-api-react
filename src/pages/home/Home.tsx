import { Box, Container, Grid } from '@material-ui/core';

import backgroundImage from '../../assets/fall.jpg';
import useStyles from './style';

export default function Home() {
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
