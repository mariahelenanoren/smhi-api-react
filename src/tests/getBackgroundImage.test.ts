import { getBackgroundImage } from '../utils';

test('Determines background image based on number', () => {
  expect(getBackgroundImage(1)).toBe('sun.jpg');
});
