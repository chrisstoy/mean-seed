/* Root webpack config that runs correct config for target */

let merge = require('webpack-merge');
let commonConfig = require('./webpack/webpack.common');
let serverConfig = require('./webpack/webpack.server');
let targetConfig;

const TARGET = process.env.npm_lifecycle_event;

switch (TARGET) {
  case 'build':
    targetConfig = require('./webpack/webpack.prod');
    break;
  case 'test':
    targetConfig = require('./webpack/webpack.test');
    break;
  default:
    targetConfig = require('./webpack/webpack.dev');
}

// module.exports = [merge.smart(commonConfig, targetConfig), serverConfig];
module.exports = [serverConfig];
