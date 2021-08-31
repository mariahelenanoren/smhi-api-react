import { createContext } from 'react';
import { City } from './cityContext';

export interface Parameters {
    level: number;
    levelType: string;
    name: string;
    unit: string;
    values: number[];
}

export interface Forecast {
    parameters: Parameters[];
}
interface Props {
    children: Object;
}

interface Context {
    getForecast: (city: City) => Promise<Forecast | undefined> | void;
}

export const WeatherContext = createContext<Context>({
    getForecast: () => {},
});

function WeatherProvider(props: Props) {
    const getForecast = async (city: City) => {
        try {
            const response = await fetch(
                `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.longitude}/lat/${city.latitude}/data.json`
            );
            const result = await response.json();
            const parameters: Parameters[] = await result.timeSeries[0]
                .parameters;
            return { parameters: parameters };
        } catch (error) {
            console.error(error);
        }
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
