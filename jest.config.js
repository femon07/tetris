module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/tests/**/*.test.js'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: false, // カバレッジ収集を一時的に無効化
  testEnvironmentOptions: {
    url: 'http://localhost',
  },
  globals: {
    'process.env.NODE_ENV': 'test',
  },
};
