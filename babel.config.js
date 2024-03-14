module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@constants': './src/Constants',
          '@utils': './src/Utils',
          '@screens': './src/Screens',
          '@components': './src/Components',
        },
      },
    ],
  ],
};
