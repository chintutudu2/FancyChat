module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@assets': './src/Assets',
          '@components': './src/Components',
          '@config': './src/Config',
          '@constants': './src/Constants',
          '@helpers': './src/Helpers',
          '@navigators': './src/Navigators',
          '@screens': './src/Screens',
          '@utils': './src/Utils',
        },
      },
    ],
  ],
};
