import { Box, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailView from './DetailView';
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
                    <Route path='/:name?' component={DetailView} />
                </Switch>
            </Router>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.primary.dark,
    },
}));
