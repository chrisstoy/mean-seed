require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const express = __webpack_require__(1);
	//const morgan = require('morgan');
	
	const app = express();
	const PORT = (process.env.PORT || 3000);
	
	//app.use(morgan('combined'));
	
	// create default route that matches everything for now
	app.all('/*', (req, res) => {
	  res.send(`
	    <!DOCTYPE html>
	      <html>
	        <head>
	          <title>MEAN todo App</title>
	        </head>
	        <body>
	          <h1>Hello MEAN app</h1>
	        </body>
	      </html>
	  `);
	});
	
	app.listen(PORT, () => {
	  console.log(`Server running on port: ${PORT}`);
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ }
/******/ ]);
//# sourceMappingURL=express-server.js.map