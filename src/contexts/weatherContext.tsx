import { createContext } from 'react';
import { ICity } from './cityContext';

export interface IParameter {
  level: number;
  levelType: string;
  name: string;
  unit: string;
  values: number[];
}

export interface IForecast {
  validTime: string;
  parameters: IParameter[];
}
interface Props {
  children: Object;
}

interface Context {
  getTodaysForecast: (city: ICity) => Promise<IForecast[] | undefined> | void;
  getWeeklyForecasts: (city: ICity) => Promise<IForecast[] | undefined> | void;
}

export const WeatherContext = createContext<Context>({
  getTodaysForecast: () => {},
  getWeeklyForecasts: () => {},
});

function WeatherProvider(props: Props) {
  const getForecasts = async (city: ICity) => {
    try {
      const response = await fetch(
        `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${city.longitude}/lat/${city.latitude}/data.json`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const getTodaysForecast = async (city: ICity) => {
    const forecasts = await getForecasts(city);
    const firstForecast = getAccurateTimeSeries(await forecasts.timeSeries);
    const todaysForecast = get24HForecast(
      await forecasts.timeSeries,
      firstForecast
    );
    return todaysForecast;
  };

  const getWeeklyForecasts = async (city: ICity) => {
    const data = await getForecasts(city);
    const forecasts: IForecast[] = data.timeSeries;
    const weeklyForecasts: IForecast[] = [];
    for (const forecast of forecasts) {
      if (forecast.validTime.slice(11, 13) === '12') {
        weeklyForecasts.push(forecast);
      }
    }
    return weeklyForecasts;
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
    const todaysForecast: IForecast[] = [];
    for (const time in timeSeries) {
      if (Number(time) >= index && Number(time) < index + 24) {
        todaysForecast.push(timeSeries[time]);
      }
    }
    return todaysForecast;
  };

  return (
    <WeatherContext.Provider
      value={{
        getTodaysForecast,
        getWeeklyForecasts,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
