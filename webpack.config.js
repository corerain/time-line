const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'timeline.js',
    library: {
      type: "module"
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    host: 'localhost',
    port: 9999,
    hot: true
  }
}