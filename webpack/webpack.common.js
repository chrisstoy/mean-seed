/* Configuration used by all WebPack configs */
const args = require('yargs').argv;
const path = require('path');
const loaders = require('./loaders');

const appPath = path.resolve('./app');
const testPath = path.resolve('./test');

const host = args.host || '127.0.0.1';
const port = args.port || '8000';

function configFunction() {
  const config = {
    entry: [

    ],
    output: {
      path: path.resolve('./dist'),
      publicPath: `http://${host}:${port}/`,
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    module: {
      loaders: [loaders]
    }

  };
  return config;
}

module.exports = configFunction();


