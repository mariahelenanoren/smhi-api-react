import { capitalize } from '../utils';

test('Capitalized strings', () => {
  expect(capitalize('test')).toBe('Test');
});
