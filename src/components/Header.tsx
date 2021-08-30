import {
    Container,
    InputAdornment,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { City, CityContext } from '../contexts/cityContext';

export default function Header() {
    const classes = useStyles();
    const { allCities } = useContext(CityContext);

    return (
        <Container className={classes.root} maxWidth='md'>
            <div>
                <Typography variant='h1' color='textPrimary'>
                    Väder
                </Typography>
                <Link to='/'>
                    <Typography color='textPrimary'>Hem</Typography>
                </Link>
            </div>
            <div>
                <Autocomplete
                    freeSolo
                    disableClearable
                    forcePopupIcon={false}
                    options={allCities}
                    getOptionLabel={(city: City) =>
                        city.locality + ', ' + city.municipality
                    }
                    ListboxProps={{
                        style: { color: '#000000', backgroundColor: '#ffffff' },
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            className={classes.textField}
                            label='Sök stad eller ort'
                            variant='outlined'
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                />
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
    textField: {
        width: '15rem',
        paddingRight: '0 !important',
    },
});
