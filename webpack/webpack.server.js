/* Config for ExpressJS server app */
const path = require('path');
const fs = require('fs');
const args = require('yargs').argv;
const _ = require('lodash');

const rules = require('./rules');

const host = args.host || '127.0.0.1';
const port = args.port || '3000';

// generate list of node_modules so we can tell WebPack to include them as externals
const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

function creatConfig() {
  const config = {
    entry: {
      server: './server/boot',
    },

    output: {
      path: path.resolve('./dist/server'),
      publicPath: `http://${host}:${port}/`,
      filename: '[name].js',
    },

    resolve: {
      extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    },

    module: {
      rules: _.flatten([
        rules.ts,
        rules.tslint,
        rules.eslint,
      ]),
    },

    externals: nodeModules,

    devtool: 'source-map',

  };
  return config;
}

module.exports = creatConfig();
