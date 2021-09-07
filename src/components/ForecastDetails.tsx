import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { City } from '../contexts/cityContext';
import { useEffect, useState } from 'react';
import { Forecast } from '../contexts/weatherContext';

interface Props {
    forecast: Forecast;
    city: City;
}

interface SunData {
    results: {
        sunrise: string;
        sunset: string;
    };
}

export default function ForecastDetails(props: Props) {
    const { forecast, city } = props;
    const classes = useStyles();
    const [sunData, setSunData] = useState<SunData>();

    useEffect(() => {
        const fetchSunData = async () => {
            const response = await fetch(
                `https://api.sunrise-sunset.org/json?lat=${city.latitude}&lng=${city.longitude}&date=today&formatted=0`
            );
            const data = await response.json();
            setSunData(await data);
        };
        fetchSunData();
    }, [city]);

    const getParameterValue = (name: string) => {
        return forecast.parameters.find((p) => p.name === name)?.values[0];
    };

    const convertUTCTime = (utcTime: string | undefined) => {
        if (utcTime) {
            const localTime = new Date(utcTime);
            let hour = localTime.getHours().toString();
            let minutes = localTime.getMinutes().toString();

            if (hour.length < 2) {
                hour = '0' + hour;
            }

            if (minutes.length < 2) {
                minutes = '0' + minutes;
            }
            const time = hour + ':' + minutes;
            return time;
        }
    };

    const getApparentTemperature = () => {
        const t = getParameterValue('t');
        const w = getParameterValue('ws');
        if (t && w) {
            const calculation =
                13.12 +
                0.6215 * t -
                13.956 * Math.pow(w, 0.16) +
                0.48669 * t * Math.pow(w, 0.16);
            if ((w < 2 || w > 35) && (t > 10 || t < -40)) {
                return t;
            } else {
                return calculation.toFixed(1);
            }
        } else {
            return undefined;
        }
    };
    return (
        <Box className={classes.root}>
            <Typography variant='h2' color='primary'>
                {getParameterValue('t')}
                &deg;
            </Typography>
            <Grid className={classes.grid} container spacing={3}>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Soluppgång</Typography>
                    <Typography variant='h4' color='primary'>
                        {convertUTCTime(sunData?.results.sunrise)}
                    </Typography>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Solnedgång</Typography>
                    <Typography variant='h4' color='primary'>
                        {convertUTCTime(sunData?.results.sunset)}
                    </Typography>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Sikt</Typography>
                    <Typography variant='h4' color='primary'>
                        {getParameterValue('vis')} km
                    </Typography>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Luftfuktighet</Typography>
                    <Typography variant='h4' color='primary'>
                        {getParameterValue('r')}%
                    </Typography>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Känns som</Typography>
                    <Typography variant='h4' color='primary'>
                        {getApparentTemperature()}&deg;
                    </Typography>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Vindhastighet</Typography>
                    <Typography variant='h4' color='primary'>
                        {getParameterValue('ws')} m/s
                    </Typography>
                </Grid>
                <Grid item sm={3} xs={6}>
                    <Typography color='primary'>Lufttryck</Typography>
                    <Typography variant='h4' color='primary'>
                        {getParameterValue('msl')} hPa
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '2rem 0',
    },
    grid: {
        marginLeft: '3rem',
    },
}));
