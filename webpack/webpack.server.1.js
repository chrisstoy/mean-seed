
/* Config for building the ExpressJS server */
/* see http://jlongster.com/Backend-Apps-with-Webpack--Part-I */

const merge = require('webpack-merge');
const args = require('yargs').argv;
const path = require('path');
const fs = require('fs');
const loaders = require('./loaders');

const srcPath = path.resolve('./server');

// generate list of node_modules so we can tell WebPack to ignore them when bundling
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
  });

function createConfig() {
  const config = {
    entry: {
      'express-server': './server/server',
    },
    target: 'node',
    output: {
      path: path.resolve('./dist/server'),
      publicPath: '/',
      filename: '[name].js',
    },
    externals: nodeModules,
    devtool: 'sourcemap',
    plugins: [
    ],
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loaders: ['eslint'],
          include: [srcPath],
          exclude: [/node_modules/],
        }, {
          test: /\.ts$/,
          loaders: ['tslint'],
          include: [srcPath],
          exclude: [/node_modules/],
        },
      ],
      loaders: [
        {
          test: /\.js$/,
          loaders: [],
          exclude: [/node_modules/, /\.spec\.js$/],
        },
        {
          test: /\.ts$/,
          loaders: ['ts'],
          exclude: [/node_modules/],
        },
      ],
      postLoaders: [],
    },
  };

  // add lint preloaders unless we passed --nolint
  if (!args.nolint) {
    config.module.preLoaders.push(merge.smart(loaders.eslint, { include: srcPath }));
    config.module.preLoaders.push(merge.smart(loaders.tslint, { include: srcPath }));
  }

  return config;
}

module.exports = createConfig();
