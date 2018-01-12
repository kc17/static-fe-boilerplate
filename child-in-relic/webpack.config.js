const path = require('path')
const config = require('./config')
const webpack = require('webpack')

module.exports = (env) => {
  const isProduction = env.NODE_ENV === 'production'

  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProduction ? '"production"' : '"development"',
      },
    }),
  ]

  return {
    entry: {
      main: './src/client.js',
    },
    output: {
      filename: '[name]-[hash].bundle.js',
      path: config.outputPath,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: path.resolve(__dirname, './src'),
        },
        {
          test: /\.(jpe?g|png|mp3)$/,
          include: [
            path.resolve(__dirname, './static'),
            path.resolve(__dirname, './src'),
          ],
          loader: 'file-loader',
          options: {
            context: path.resolve(__dirname, './static'),
            name: '[path][name].[ext]', // `[path]` is relative to `options.context`
            emitFile: isProduction,
            outputPath: 'static/', // means `webpack.config.output.path + outputPath`
            publicPath: !isProduction ? '' : `${config.baseUri}/`,
          },
        },
      ],
    },
    plugins: isProduction ? plugins.concat([
      new webpack.optimize.UglifyJsPlugin(),
    ]) : plugins.concat([
      // new BundleAnalyzerPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ]),
  }
}

