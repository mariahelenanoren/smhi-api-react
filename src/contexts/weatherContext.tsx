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
            const forecast = getAccurateTimeSeries(await result.timeSeries);
            return { parameters: forecast.parameters };
        } catch (error) {
            console.error(error);
        }
    };

    const getAccurateTimeSeries = (timeSeries: any) => {
        console.log(timeSeries);
        const today = new Date();
        let date = today.getDate().toString();
        if (date.length < 2) {
            date = '0' + date;
        }
        let hour = today.getHours().toString();
        if (hour.length < 2) {
            hour = '0' + hour;
        }
        for (const time of timeSeries) {
            const validDate = time.validTime.slice(8, 10);
            const validHour = time.validTime.slice(11, 13);
            if (validDate === date && validHour === hour) {
                return time;
            }
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
