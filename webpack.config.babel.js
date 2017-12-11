import 'babel-polyfill'
import { join } from 'path'

const include = join(__dirname, 'src')

export default {
  entry: ['babel-polyfill', './src/index'],
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'anml'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        include
      }
    ]
  }
}
