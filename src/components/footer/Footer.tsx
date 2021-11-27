import { Typography, Box } from '@material-ui/core';
import { TemplateComponent } from '../templateComponent';
import useStyles from './style';

export default function Footer() {
  const classes = useStyles();
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Box className={classes.root}>
      <TemplateComponent>
        <Typography variant="overline">{`Maria Helena Norén © ${year}`}</Typography>
      </TemplateComponent>
    </Box>
  );
}
