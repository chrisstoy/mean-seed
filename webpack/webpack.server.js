/* Config for ExpressJS server app */
const path = require('path');
const args = require('yargs').argv;
const fs = require('fs');
const _ = require('lodash');

const rules = require('./rules');

const host = args.host || '127.0.0.1';
const port = args.port || '8000';

// generate list of node_modules so we can tell WebPack to ignore them when bundling
const nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(x => ['.bin'].indexOf(x) === -1)
//   .forEach((mod) => {
//     nodeModules[mod] = `commonjs ${mod}`;
//   });

function creatConfig() {
  const config = {
    entry: {
      'express-server': './server/server',
    },

    output: {
      path: path.resolve('./dist/server'),
      publicPath: `http://${host}:${port}/`,
      filename: '[name].js',
    },

    module: {
      rules: _.flatten([
        rules.js,
        rules.ts,
      ]),
    },

    externals: nodeModules,

    devtool: 'source-map',

  };
  return config;
}

module.exports = creatConfig();
