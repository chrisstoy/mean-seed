/* Define all of the WebPack loaders */

exports.js = {
  test: /\.js$/,
  exclude: [/node_modules/, /\.spec\.js$/],
};

exports.eslint = {
  test: /\.js$/,
  loaders: ['eslint'],
  exclude: [/node_modules/],
};

exports.tslint = {
  test: /\.ts$/,
  loaders: ['tslint'],
  exclude: [/node_modules/],
};

exports.ts = {
  test: /\.ts$/,
  loaders: ['ng-annotate', 'ts'],
  exclude: [/node_modules/],
};
