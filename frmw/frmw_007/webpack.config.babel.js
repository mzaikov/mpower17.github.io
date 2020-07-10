const WDS_PORT = 3000;

export default {
  mode: 'development',
  devtool: 'sourcemap',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        babelrc: false,
        presets: [
          'react', ['env', {
            modules: false,
          }],
        ],
      },
    }],
  },
  devServer: {
    port: WDS_PORT,
    host: '127.0.0.1',
  },
};
