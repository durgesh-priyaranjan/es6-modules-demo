webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utility = __webpack_require__(2);
	
	console.log((0, _utility.cube)(3)); // 27
	console.log(_utility.foo); // 4.555806215962888

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var cube = exports.cube = function cube(x) {
	  return x * x * x;
	};
	
	var foo = exports.foo = Math.PI + Math.SQRT2;
	
	exports.default = { cube: cube, foo: foo };

/***/ }
]);
//# sourceMappingURL=main-437a3cdd925f074115a8.js.map