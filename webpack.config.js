const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    buttons: './src/js/buttons.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main[contenthash].js',
    clean: true,
    // assetModuleFilename: '[name][ext]',
    assetModuleFilename: 'assets/[hash][ext][query]', //this line was added
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'devEnvironment1',
      template: './src/template.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'style[contenthash].css' }),
    // new FaviconsWebpackPlugin("./src/assets/dog.svg"),
  ],
};
//change mode to production and then
//write instead "style-loader" MiniCssExtractPlugin.loader
