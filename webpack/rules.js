/* Define all of the WebPack loaders */

// define common rules for all build types
function createRules() {
  return [
    {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    },
    {
      enforce: 'pre',
      test: /\.tsx?$/,
      use: 'source-map-loader',
    },
    {
      test: /\.ts$/,
      loaders: ['ng-annotate', 'ts'],
      exclude: [/node_modules/],
    },
  ];
}

module.exports = createRules();
