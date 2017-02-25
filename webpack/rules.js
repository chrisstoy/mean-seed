/* Define all of the WebPack rules */

// define common rules for all build types
exports.js = {
  test: /\.js$/,
  use: 'ts-loader',
};

exports.ts = {
  test: /\.ts$/,
  use: 'ts-loader',
};

