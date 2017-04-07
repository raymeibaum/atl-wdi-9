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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

CriminalsController.$inject = ['CriminalsService'];

function CriminalsController(CriminalsService) {
	const vm = this;

	// WHAT THIS CONTROLLER HAS / DOES THAT IS CONNECTED TO THE VIEW
	vm.criminals = [];
	vm.loading = true;

	// activate === BEST PRACTICE, ALWAYS DO IT, EVEN IF EMPTY
	activate();

	function activate() {
		loadAllCriminals();
	}

	// HOW IT DOES STUFF
	function loadAllCriminals() {
		CriminalsService.loadAll().then(function resolve(response) {
			vm.criminals = response.data.criminals;
			vm.loading = false;
		});
	}
}

module.exports = CriminalsController;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (10:0)\n\n\u001b[0m \u001b[90m  8 | \u001b[39muiRouterSetup\u001b[33m.\u001b[39m$inject \u001b[33m=\u001b[39m [\u001b[32m'$stateProvider'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'$urlRouterProvider'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m  9 | \u001b[39m\u001b[36mfunction\u001b[39m uiRouterSetup($stateProvider\u001b[33m,\u001b[39m $urlRouterProvider) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 10 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 11 | \u001b[39m  $stateProvider\n \u001b[90m 12 | \u001b[39m    \u001b[33m.\u001b[39mstate(\u001b[32m'home'\u001b[39m\u001b[33m,\u001b[39m {\n \u001b[90m 13 | \u001b[39m      url\u001b[33m:\u001b[39m \u001b[32m'/'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:0)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mconst\u001b[39m template \u001b[33m=\u001b[39m require(__dirname \u001b[33m+\u001b[39m \u001b[32m'/about.html'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m controller \u001b[33m=\u001b[39m require(__dirname \u001b[33m+\u001b[39m \u001b[32m'/about.controller.js'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:0)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mAboutController\u001b[39m() {\n \u001b[90m 3 | \u001b[39m  \u001b[36mconst\u001b[39m vm \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mconst\u001b[39m template \u001b[33m=\u001b[39m require(\u001b[32m'./criminals.new.html'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mCriminalsNewComponent\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m 6 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[36mconst\u001b[39m component \u001b[33m=\u001b[39m {\u001b[0m\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\n \u001b[90m 3 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mCriminalsNewController\u001b[39m($state\u001b[33m,\u001b[39m \u001b[33mCriminalsService\u001b[39m) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m  \u001b[36mconst\u001b[39m vm \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 6 | \u001b[39m\n \u001b[90m 7 | \u001b[39m  vm\u001b[33m.\u001b[39mnewCriminal \u001b[33m=\u001b[39m {}\u001b[0m\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mconst\u001b[39m template \u001b[33m=\u001b[39m require(\u001b[32m'./criminals.show.html'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mCriminalsShowComponent\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m 6 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[36mconst\u001b[39m component \u001b[33m=\u001b[39m {\u001b[0m\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:0)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[33mCriminalsShowController\u001b[39m\u001b[33m.\u001b[39m$inject \u001b[33m=\u001b[39m [\u001b[32m'$stateParams'\u001b[39m\u001b[33m,\u001b[39m\u001b[32m'CriminalsService'\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mCriminalsShowController\u001b[39m($stateParams\u001b[33m,\u001b[39m \u001b[33mCriminalsService\u001b[39m) {\u001b[0m\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const controller = __webpack_require__(0);
const template = __webpack_require__(12);

const component = {
	controller: controller,
	template: template
};

angular.module('criminals').component('criminals', component);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (4:0)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mconst\u001b[39m template \u001b[33m=\u001b[39m require(\u001b[32m'./home.html'\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 3 | \u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\u001b[36mconst\u001b[39m \u001b[33mHomeComponent\u001b[39m \u001b[33m=\u001b[39m {\n \u001b[90m 6 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\n \u001b[90m 7 | \u001b[39m\u001b[36mconst\u001b[39m component \u001b[33m=\u001b[39m {\u001b[0m\n");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (1:0)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\n \u001b[90m   | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mHomeController\u001b[39m() {\n \u001b[90m 3 | \u001b[39m  \u001b[36mconst\u001b[39m vm \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 4 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

angular.module('criminals').service('CriminalsService', CriminalsService);

CriminalsService.$inject = ['$http'];

function CriminalsService($http) {
	const self = this;

	self.loadAll = loadAll;
	self.loadCurrent = loadCurrent;
	self.createNewCriminal = createNewCriminal;

	// HOW IT DOES STUFF
	function createNewCriminal(criminal) {
		console.log(criminal);
		return $http.post('/api/criminals/', criminal);
	}
	function loadAll() {
		return $http.get('/api/criminals');
	}
	function loadCurrent(id) {
		return $http.get('/api/criminals/' + id);
	}
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<h1>Criminals</h1>\n<ul class=\"criminals\">\n\t<li ng-show=\"$ctrl.loading\">\n\t\t<strong>Loading...</strong>\n\t</li>\n\n  <li ng-hide=\"$ctrl.loading\" ng-repeat=\"criminal in $ctrl.criminals\">\n    <strong>{{criminal.name}}</strong>\n\n<<<<<<< HEAD\n\t\t<!-- Reference for Gerry -->\n    <!-- <em>{{criminal.crime}}</em> -->\n\n    <span ng-if=\"criminal.status\" class='status {{criminal.status | lowercase }}'>{{criminal.status | uppercase}}</span>\n\n    <a ui-sref=\"criminalsShow({ criminalId: criminal._id })\">Click to see their crime (in users#show)</a>\n=======\n    <a ui-sref=\"criminalsShow({ criminalId: criminal._id })\">Click to see their crime (in criminals#show)</a>\n>>>>>>> 190686e2a4310944f3a9498cb90e8ee3fd686497\n  </li>\n</ul>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
__webpack_require__(0);
__webpack_require__(9);
__webpack_require__(10);
module.exports = __webpack_require__(11);


/***/ })
/******/ ]);