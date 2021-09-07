import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { City } from '../contexts/cityContext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useState } from 'react';

interface Props {
    city: City;
}

export default function CityHeader(props: Props) {
    const { city } = props;
    const classes = useStyles();
    const [isFavorite, setFavorite] = useState<boolean>(false);

    const handleToggleFavorite = () => {
        setFavorite(!isFavorite);
    };

    return (
        <Box className={classes.root}>
            <div className={classes.row}>
                <div>
                    <Typography variant='overline' color='primary'>
                        {city.county}
                    </Typography>
                    <Typography variant='h2' color='primary'>
                        {city.locality}
                    </Typography>
                </div>
                <div>
                    {isFavorite ? (
                        <FavoriteIcon
                            color='primary'
                            onClick={handleToggleFavorite}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            color='primary'
                            onClick={handleToggleFavorite}
                        />
                    )}
                </div>
            </div>
            <Divider color='primary' light className={classes.divider} />
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
        '& svg': {
            fontSize: '2rem',
        },
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1rem 0',
        alignItems: 'flex-end',
    },
    divider: {
        height: '0.1rem',
        backgroundColor: theme.palette.primary.main,
    },
}));
