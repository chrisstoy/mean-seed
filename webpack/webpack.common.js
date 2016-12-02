/* Configuration used by all WebPack configs */
const args = require('yargs').argv;
const path = require('path');


const host = args.host || '127.0.0.1';
const port = args.port || '8000';

module.exports = function () {
  var config = {

    entry: [

    ],
    output: {
      path: path.resolve('./dist'),
      publicPath: `http://${host}:${port}/`,
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['ng-annotate'],
          exclude: [/node_modules/, /\.spec\.js$/],
        }, {
          test: /\.js$/,
          include: [appPath, testPath],
          loaders: ['eslint'],
          exclude: [/node_modules/],
        }, {
          test: /\.ts$/,
          include: [appPath, testPath],
          loaders: ['tslint'],
          exclude: [/node_modules/],
        }, {
          test: /\.ts$/,
          loaders: ['ng-annotate', 'ts'],
          exclude: [/node_modules/],
        }
      ]
    }

  };
  return config;
} ();

