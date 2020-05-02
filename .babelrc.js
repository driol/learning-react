module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: '> 0.5%, last 2 versions, Firefox ESR, not dead',
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: ['@babel/plugin-transform-runtime'],
};
