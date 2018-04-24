import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'ViaCep',
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include },
    ],
  },
};
