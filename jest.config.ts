import type { Config } from '@jest/types';
import { defaults } from 'jest-config';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testEnvironment: 'jsdom',
};
export default config;
