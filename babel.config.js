module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      [
        'module-resolver',
        {
          root: ['./src/'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json'
          ],
          alias: {
            '@assets': './src/assets',
            '@context': './src/context',
            '@data': './src/data',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
            '@pages': './src/pages',
            '@ui': './src/ui'
          }
        }
      ]
    ]
  }
}
