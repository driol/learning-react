const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: { import: path.join(__dirname, 'src/index.tsx') },
    // app: { import: path.join(__dirname, 'src/index.tsx'), dependOn: ['react-vendors', 'fontawesome'] },
    // 'react-vendors': ['react', 'react-dom'],
    // fontawesome: [
    //   '@fortawesome/fontawesome-svg-core',
    //   '@fortawesome/free-solid-svg-icons',
    //   '@fortawesome/react-fontawesome',
    // ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name]_[contenthash].js' : '[name].js',
    publicPath: '/',
  },
  devtool: isProd ? false : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
  ],
};
