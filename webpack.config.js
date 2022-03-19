const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  output: {
    //Directorio BUILD y nombre fichero
    path: path.resolve(__dirname, 'public_html/js'),
    filename: 'app.js'
  },
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    port: 3000,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    })
  ],
  resolve: {
    alias: {
      dom: path.resolve(__dirname, './src/libs/dom/dom.js'),
    }
  }
}