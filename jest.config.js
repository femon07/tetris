module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json', 'node'],
  // テスト対象のファイルを指定
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
  ],
};
