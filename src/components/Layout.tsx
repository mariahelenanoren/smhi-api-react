import { Box, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForecastView from './ForecastView';
import Header from './Header';
import HomeView from './HomeView';

export default function Layout() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Router>
                <Header />
                <Switch>
                    <Route path='/' exact component={HomeView} />
                    <Route path='/:locality' component={ForecastView} />
                </Switch>
            </Router>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundColor: '#7a420a',
    },
}));
