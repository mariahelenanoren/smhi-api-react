import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Forecast from '../pages/forecast/Forecast';
import Header from '../components/header/Header';
import HomeView from '../pages/home/Home';
import useStyles from './style';

export default function Layout() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/:locality" component={Forecast} />
        </Switch>
      </Router>
    </Box>
  );
}
