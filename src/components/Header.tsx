import { Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Header() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth='md'>
            <div>
                <h1>Väder</h1>
                <Link to='/'>Hem</Link>
            </div>
        </Container>
    );
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            '& h1': {
                fontSize: '1rem',
                marginRight: '3rem',
                fontWeight: '600',
            },
            '& a': {
                fontSize: '1rem',
                fontWeight: '400',
                color: '#000000',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        },
    },
});
