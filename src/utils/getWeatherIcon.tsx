import { IParameter } from '../contexts/weatherContext';

export default function getWeatherIcon(
  parameters: IParameter[]
): string | undefined {
  const value = parameters.find((p) => p.name === 'Wsymb2')?.values[0];
  switch (value) {
    case 1:
      return 'wi wi-day-sunny';
    case 2:
      return 'wi wi-day-cloudy';
    case 3:
      return 'wi wi-cloudy';
    case 4:
      return 'wi wi-cloudy';
    case 5:
      return 'wi wi-cloudy';
    case 6:
      return 'wi wi-cloudy';
    case 7:
      return 'wi wi-fog';
    case 8:
      return 'wi wi-showers';
    case 9:
      return 'wi wi-rain';
    case 10:
      return 'wi wi-rain';
    case 11:
      return 'wi wi-lightning';
    case 12:
      return 'wi wi-sleet';
    case 13:
      return 'wi wi-sleet';
    case 14:
      return 'wi wi-sleet';
    case 15:
      return 'wi wi-snow';
    case 16:
      return 'wi wi-snow';
    case 17:
      return 'wi wi-snow';
    case 18:
      return 'wi wi-showers';
    case 19:
      return 'wi wi-rain';
    case 20:
      return 'wi wi-rain';
    case 21:
      return 'wi wi-lightning';
    case 22:
      return 'wi wi-sleet';
    case 23:
      return 'wi wi-sleet';
    case 24:
      return 'wi wi-sleet';
    case 25:
      return 'wi wi-snow';
    case 26:
      return 'wi wi-snow';
    case 27:
      return 'wi wi-snow';
  }
}
