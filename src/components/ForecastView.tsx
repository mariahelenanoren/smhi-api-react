import { Box, Container } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { City } from '../contexts/cityContext';
import { Forecast, WeatherContext } from '../contexts/weatherContext';
import ForecastDetails from './ForecastDetails';
import ForecastHeader from './ForecastHeader';

function ForecastView() {
    const history = useHistory<City>();
    const city = history.location.state;
    const { getForecast } = useContext(WeatherContext);
    const [forecast, setForecast] = useState<Forecast | void>();

    useEffect(() => {
        async function fetchData() {
            const data = await getForecast(city);
            setForecast(data);
        }
        fetchData();
    }, [getForecast, city]);

    return (
        <Box>
            <Container maxWidth='md'>
                {forecast ? (
                    <>
                        <ForecastHeader city={city} />
                        <ForecastDetails city={city} forecast={forecast} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </Box>
    );
}

export default withRouter(ForecastView);
