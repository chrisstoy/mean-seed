/* Root webpack config that runs correct config for target */

// const merge = require('webpack-merge');
// const commonConfig = require('./webpack/webpack.common');
const serverConfig = require('./webpack/webpack.server');
// const clientConfig = require('./webpack/webpack.client');

// let targetConfig;

// const TARGET = process.env.npm_lifecycle_event;

// switch (TARGET) {
//   case 'build':
//     targetConfig = require('./webpack/webpack.prod');
//     break;
//   case 'test':
//     targetConfig = require('./webpack/webpack.test');
//     break;
//   default:
//     targetConfig = require('./webpack/webpack.dev');
// }

// const server = merge.smart(commonConfig, serverConfig);
//const client = merge.smart(commonConfig, targetConfig, clientConfig);
// global.console.log('Common config: ' + JSON.stringify(commonConfig));
global.console.log(`Server config: ${JSON.stringify(serverConfig)} }`);

// global.console.log('Combined config: ' + JSON.stringify(server));
// export two configs, one for server, one for client.

module.exports = [serverConfig];
