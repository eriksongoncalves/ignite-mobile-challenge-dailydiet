module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios', '.expo'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  modulePaths: ['<rootDir>/src/']
}
