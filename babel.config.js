module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.json'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@mocks': './src/mocks',
            '@storage': './src/storage',
            '@hooks': './src/hooks'
          }
        }
      ]
    ]
  }
}
