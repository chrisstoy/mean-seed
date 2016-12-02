/* Root webpack config that runs correct config for target */
'use strict';
var merge = require('webpack-merge');
var commonConfig = require('./webpack/webpack.common');
var targetConfig;

var TARGET = process.env.npm_lifecycle_event;

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


module.exports = merge.smart(commonConfig, targetConfig);
