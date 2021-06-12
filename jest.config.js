module.exports = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/src/*.{js,ts,tsx}',
    '!src/**/src/{array,hash-table}.{js,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}
