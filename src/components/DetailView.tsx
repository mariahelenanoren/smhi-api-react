import { Box, Container } from '@material-ui/core';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { City } from '../contexts/cityContext';
import { Forecast, WeatherContext } from '../contexts/weatherContext';
import CityHeader from './CityHeader';

interface Props
    extends RouteComponentProps<
        {},
        {},
        { location: { state: { city: City } } }
    > {}

function DetailView(props: Props) {
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
            <Container maxWidth='lg'>
                {forecast ? <CityHeader city={city} /> : <p>Loading...</p>}
            </Container>
        </Box>
    );
}

export default withRouter(DetailView);
