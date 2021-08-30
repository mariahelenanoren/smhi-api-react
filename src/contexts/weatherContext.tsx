import { createContext } from 'react';
import { City } from './cityContext';

/* ("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + lon + "/lat/" + lat + "/data.json") */

interface Props {
    children: Object;
}

interface Context {
    getForecast: (city: City) => void;
}

export const WeatherContext = createContext<Context>({
    getForecast: () => {},
});

function WeatherProvider(props: Props) {
    const getForecast = async (city: City) => {
        const response = await fetch(
            `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.longitude}/lat/${city.latitude}/data.json`
        );
        const forecast = await response.json();
        console.log(forecast);
    };

    return (
        <WeatherContext.Provider
            value={{
                getForecast,
            }}
        >
            {props.children}
        </WeatherContext.Provider>
    );
}

export default WeatherProvider;
