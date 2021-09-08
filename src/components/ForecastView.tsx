import { Box, Container } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { City } from '../contexts/cityContext';
import { Forecast, WeatherContext } from '../contexts/weatherContext';
import ForecastDetails from './ForecastDetails';
import ForecastHeader from './ForecastHeader';
import ForecastHorizontalBar from './ForecastHorizontalBar';

function ForecastView() {
    const history = useHistory<City>();
    const city = history.location.state;
    const { getForecasts } = useContext(WeatherContext);
    const [forecasts, setForecasts] = useState<Forecast[] | void>();

    useEffect(() => {
        async function fetchData() {
            const data = await getForecasts(city);
            setForecasts(data);
        }
        fetchData();
    }, [getForecasts, city]);

    return (
        <Box>
            <Container maxWidth='md'>
                {forecasts ? (
                    <>
                        <ForecastHeader city={city} />
                        <ForecastDetails city={city} forecast={forecasts[0]} />
                        <ForecastHorizontalBar forecasts={forecasts} />
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </Container>
        </Box>
    );
}

export default withRouter(ForecastView);
