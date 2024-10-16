// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Match .js and .jsx files
        exclude: /node_modules/, // Don't process node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile the JavaScript files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Auto-resolve file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML file to inject into
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // New 'static' option to serve content
    },
    compress: true,
    port: 3000,
    hot: true, // Enables Hot Module Replacement
    open: true, // Automatically open the app in the browser
  },
};
