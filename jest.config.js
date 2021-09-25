const { defaults } = require('jest-config');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      'tsconfig': '<rootDir>/tsconfig.json'
    }
  },
  testMatch: [
    '<rootDir>/tests/**/*.test.ts'
  ],
  clearMocks: true
};
