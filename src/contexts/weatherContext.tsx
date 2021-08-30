import { createContext } from 'react';
import { City, CityContext } from './cityContext';

/* ("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/" + lon + "/lat/" + lat + "/data.json") */

interface Props {
    children: Object;
}

export const WeatherContext = createContext<any>({
    getForecast: (city: City) => {},
});

function WeatherProvider(props: Props) {
    const getForecast = async (city: City) => {
        const result = await fetch(
            `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.longitude}/lat/${city.latitude}/data.json`
        );
        console.log(result);
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
