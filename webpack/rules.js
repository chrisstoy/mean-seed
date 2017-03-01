/* Define all of the WebPack rules */
const path = require('path');

const serverPath = path.resolve('./server');

// define common rules for all build types
exports.eslint = {
  test: /\.js$/,
  use: [
    {
      loader: 'eslint-loader',
      options: {
        failOnError: true,
      },
    },
  ],
  include: [serverPath],
  exclude: [/node_modules/],
  enforce: 'pre',
};

exports.tslint = {
  test: /\.ts$/,
  use: [
    {
      loader: 'tslint-loader',
      options: {
        emitErrors: true,
        failOnHint: true,
      },
    },
  ],
  include: [serverPath],
  exclude: [/node_modules/],
  enforce: 'pre',
};

exports.ts = {
  test: /\.ts$/,
  use: 'ts-loader',
};
