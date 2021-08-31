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
import { Link, useHistory } from 'react-router-dom';
import { City, CityContext } from '../contexts/cityContext';

export default function Header() {
    const classes = useStyles();
    const history = useHistory();

    const { allCities } = useContext(CityContext);

    const handleSearch = (city: City) => {
        history.push(`/${city.locality}`, city);
    };

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
                    disableClearable
                    className={classes.autocomplete}
                    forcePopupIcon={false}
                    options={allCities}
                    getOptionLabel={(city: City) =>
                        city.locality + ', ' + city.municipality
                    }
                    onChange={(event, value) => handleSearch(value)}
                    ListboxProps={{
                        style: { color: '#000000', backgroundColor: '#ffffff' },
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            className={classes.textField}
                            placeholder='Sök stad eller ort'
                            variant='outlined'
                            size='small'
                            InputProps={{
                                ...params.InputProps,
                                classes: { input: classes.input },
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
        height: '5rem',
        position: 'relative',
        zIndex: 1,
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
                '& p:hover': {
                    textDecoration: 'underline',
                },
            },
        },
    },
    autocomplete: {
        borderRadius: '5rem',
        '& .MuiFormControl-root': {
            backgroundColor: 'rgba(250, 250, 250, 0.3)',
        },
        '& fieldset': {
            border: 'none',
        },
    },
    textField: {
        borderRadius: '5rem',
        width: '15rem',
        backgroundColor: 'rgba(250, 250, 250, 0.2)',
        '& svg': {
            paddingRight: '0.3rem',
        },
    },
    input: {
        '&::placeholder': {
            opacity: '100%',
        },
    },
});
