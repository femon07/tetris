export default {
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '**/?(*.)+(spec|test).mjs'
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.mjs'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testEnvironmentOptions: {
    resources: 'usable'
  },
};
