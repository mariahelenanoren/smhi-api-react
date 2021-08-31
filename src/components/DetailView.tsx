import { Box, Container } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { City } from '../contexts/cityContext';
import { Forecast, WeatherContext } from '../contexts/weatherContext';

export default function DetailView() {
    const history = useHistory();
    const { getForecast } = useContext(WeatherContext);
    const [forecast, setForecast] = useState<Forecast | void>();

    useEffect(() => {
        const city = history.location.state;
        async function fetchData() {
            const data = await getForecast(city as City);
            setForecast(data);
        }
        fetchData();
    }, [history, getForecast]);

    return (
        <Box>
            <Container maxWidth='lg'>
                <p>Hello</p>
                {forecast ? (
                    forecast.parameters.map((p) => p.name)
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </Box>
    );
}
