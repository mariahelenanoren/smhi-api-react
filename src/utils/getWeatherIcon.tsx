import { ReactElement } from 'react';

export default function getWeatherIcon(
  value: number | undefined
): ReactElement | undefined {
  switch (value) {
    case 1:
      return <i className="wi wi-day-sunny"></i>;
    case 2:
      return <i className="wi wi-day-cloudy"></i>;
    case 3:
      return <i className="wi wi-cloudy"></i>;
    case 4:
      return <i className="wi wi-cloudy"></i>;
    case 5:
      return <i className="wi wi-cloudy"></i>;
    case 6:
      return <i className="wi wi-cloudy"></i>;
    case 7:
      return <i className="wi wi-fog"></i>;
    case 8:
      return <i className="wi wi-showers"></i>;
    case 9:
      return <i className="wi wi-rain"></i>;
    case 10:
      return <i className="wi wi-rain"></i>;
    case 11:
      return <i className="wi wi-lightning"></i>;
    case 12:
      return <i className="wi wi-sleet"></i>;
    case 13:
      return <i className="wi wi-sleet"></i>;
    case 14:
      return <i className="wi wi-sleet"></i>;
    case 15:
      return <i className="wi wi-snow"></i>;
    case 16:
      return <i className="wi wi-snow"></i>;
    case 17:
      return <i className="wi wi-snow"></i>;
    case 18:
      return <i className="wi wi-showers"></i>;
    case 19:
      return <i className="wi wi-rain"></i>;
    case 20:
      return <i className="wi wi-rain"></i>;
    case 21:
      return <i className="wi wi-lightning"></i>;
    case 22:
      return <i className="wi wi-sleet"></i>;
    case 23:
      return <i className="wi wi-sleet"></i>;
    case 24:
      return <i className="wi wi-sleet"></i>;
    case 25:
      return <i className="wi wi-snow"></i>;
    case 26:
      return <i className="wi wi-snow"></i>;
    case 27:
      return <i className="wi wi-snow"></i>;
  }
}
