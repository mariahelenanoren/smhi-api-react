import { Box, CircularProgress } from '@material-ui/core';
import useStyles from './style';

export default function Progress() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress />
    </Box>
  );
}
