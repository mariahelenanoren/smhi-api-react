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
  validTime: string;
  parameters: Parameters[];
}
interface Props {
  children: Object;
}

interface Context {
  getTodaysForecast: (city: City) => Promise<Forecast[] | undefined> | void;
}

export const WeatherContext = createContext<Context>({
  getTodaysForecast: () => {},
});

function WeatherProvider(props: Props) {
  const getTodaysForecast = async (city: City) => {
    try {
      const response = await fetch(
        `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.longitude}/lat/${city.latitude}/data.json`
      );
      const result = await response.json();
      const firstForecast = getAccurateTimeSeries(await result.timeSeries);
      const todaysForecast = get24HForecast(
        await result.timeSeries,
        firstForecast
      );
      return todaysForecast;
    } catch (error) {
      console.error(error);
    }
  };

  const getAccurateTimeSeries = (timeSeries: any) => {
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

  const get24HForecast = (timeSeries: any[], firstForecast: any) => {
    const index = timeSeries.indexOf(firstForecast);
    const forecasts: Forecast[] = [];
    for (const time in timeSeries) {
      if (Number(time) >= index && Number(time) < index + 24) {
        forecasts.push(timeSeries[time]);
      }
    }
    return forecasts;
  };

  return (
    <WeatherContext.Provider
      value={{
        getTodaysForecast,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
