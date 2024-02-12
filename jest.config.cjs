module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'esbuild-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
}
