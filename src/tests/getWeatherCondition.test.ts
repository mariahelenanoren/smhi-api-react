import { getWeatherCondition } from '../utils';

test('Determines weather condition based on number', () => {
  expect(getWeatherCondition(1)).toBe('klar himmel');
});
