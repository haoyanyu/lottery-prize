(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Prize", [], factory);
	else if(typeof exports === 'object')
		exports["Prize"] = factory();
	else
		root["Prize"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction checkNode(el) {\n  var result = el;\n\n  if (!result) {\n    return console.error('找不到当前节点', el);\n  }\n\n  if (typeof el === 'string') {\n    var domName = el;\n    result = document.querySelector(domName);\n\n    if (!result) {\n      return console.error('找不到当前节点', el);\n    }\n  } else if (_typeof(el) === 'object') {\n    if (!el.nodeName) {\n      return console.error('找不到当前节点', el);\n    }\n  }\n\n  return result;\n}\n\nvar Prize =\n/*#__PURE__*/\nfunction () {\n  function Prize(el, options) {\n    _classCallCheck(this, Prize);\n\n    this.starting = false;\n    this.prizeArr = []; // 所有奖品 \n\n    this.pageSize = options.pageSize; // 参与抽奖的奖品\n\n    this.prize_list_h = ''; // 奖品垂直排列后的高度\n\n    this.prize_init = []; // 初始停留展示的奖品数字\n\n    this.prize_list_item_h = 0; // 每个奖品容器的高度\n\n    this.initData(el, options) && this.init();\n    this.readyGame();\n    var self = this;\n\n    window.onresize = function () {\n      self.readyGame();\n    };\n  }\n\n  _createClass(Prize, [{\n    key: \"initData\",\n    value: function initData(el, options) {\n      this.el = checkNode(el);\n      if (!this.el) return;\n      this.options = this.checkOptions(options);\n\n      for (var i = 0; i < 3; i++) {\n        this.prize_init.push(Math.floor(Math.random() * this.pageSize));\n      }\n\n      return true;\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.prizeDomList = [];\n      var prizeWrap = document.createElement('div');\n      prizeWrap.className = 'prize-goods-wrap';\n      var prizeItem = document.createElement('div');\n      prizeItem.className = 'prize-goods-list';\n      prizeWrap.appendChild(prizeItem);\n\n      for (var i = 0; i < 3; i++) {\n        var prizeGood = document.createElement('div');\n        prizeGood.className = 'prize-goods';\n        prizeGood.style.background = '#fff';\n        prizeItem.appendChild(prizeGood);\n        var prizeGoodBox = document.createElement('div');\n        prizeGoodBox.className = 'prize-goods-box';\n        prizeGoodBox.setAttribute('id', \"prize\".concat(i + 1));\n        prizeGood.appendChild(prizeGoodBox);\n        var ul = document.createElement('ul');\n        ul.className = 'prize-goods-ul';\n        prizeGoodBox.appendChild(ul);\n        this.prizeDomList.push(ul);\n      }\n\n      this.el.appendChild(prizeWrap);\n      this.prizeWrap = prizeWrap; // console.log(this.prizeDomList)\n    }\n  }, {\n    key: \"readyGame\",\n    value: function readyGame() {\n      this.getPrizeHeight();\n      this.getImages();\n      this.setLi();\n    }\n  }, {\n    key: \"getPrizeHeight\",\n    value: function getPrizeHeight() {\n      this.prize_list_item_h = this.prizeWrap.clientHeight.toFixed(2);\n    }\n  }, {\n    key: \"getImages\",\n    value: function getImages() {\n      for (var i = 1; i <= this.options.pageNum; i++) {\n        for (var j = 1; j <= this.pageSize; j++) {\n          var src = \"\".concat(this.options.imageSrc, \"/\").concat(j, \".\").concat(this.options.imageType);\n          this.prizeArr.push({\n            index: j,\n            src: src\n          });\n        }\n      }\n    }\n  }, {\n    key: \"setLi\",\n    value: function setLi() {\n      var _this = this;\n\n      this.prizeDomList.forEach(function (ul, index) {\n        ul.innerHTML = '';\n\n        _this.prizeArr.forEach(function (item) {\n          var li = document.createElement('li');\n          li.style.height = _this.prize_list_item_h + 'px';\n          var img = document.createElement('img');\n          img.setAttribute('src', item.src);\n          li.appendChild(img);\n          ul.appendChild(li);\n        });\n\n        var y = _this.prize_list_item_h * _this.prize_init[index]; // console.log(this.prize_list_item_h, this.prize_init)\n\n        ul.style.transitionDuration = '0ms';\n        ul.style.transform = \"translate(0px, -\".concat(y, \"px) translateZ(0px)\");\n      });\n    }\n  }, {\n    key: \"checkOptions\",\n    value: function checkOptions(options) {\n      if (!options) {\n        return console.error('未检测到options相关参数');\n      }\n\n      var baseOptions = {\n        images: [],\n        imageType: 'png',\n        pageNum: 4,\n        pageSize: 10\n      };\n      return Object.assign({}, baseOptions, options);\n    }\n  }, {\n    key: \"start\",\n    value: function start(win, num) {\n      var _this2 = this;\n\n      if (this.starting) return;\n      this.starting = true;\n      var self = this;\n\n      function transitionListener() {\n        var num = self.prize_num || [];\n\n        for (var i = 0; i < 3; i++) {\n          var y0 = num[i] * self.prize_list_item_h;\n          self.prizeDomList[i].style.transitionDuration = '0ms';\n          self.prizeDomList[i].style.transform = \"translate(0px, -\".concat(y0, \"px) translateZ(0px)\");\n        }\n\n        self.starting = false;\n        self.prizeDomList[2].removeEventListener('webkitTransitionEnd', transitionListener);\n      }\n\n      if (win) {\n        (function () {\n          var y = (num - 1 + _this2.pageSize * (_this2.options.pageNum - 1)) * _this2.prize_list_item_h;\n\n          var _loop = function _loop(i) {\n            setTimeout(function () {\n              _this2.prizeDomList[i].style.transitionDuration = '5000ms';\n              _this2.prizeDomList[i].style.transform = \"translate(0px, -\".concat(y, \"px) translateZ(0px)\");\n            }, i * 300);\n          };\n\n          for (var i = 0; i < 3; i++) {\n            _loop(i);\n          }\n\n          _this2.prize_num = new Array(3).fill(num - 1);\n\n          _this2.prizeDomList[2].addEventListener('webkitTransitionEnd', transitionListener);\n        })();\n      } else {\n        var num_list = randNum(this.pageSize);\n\n        var _loop2 = function _loop2(i) {\n          var y = (num_list[i] + _this2.pageSize * (_this2.options.pageNum - 1)) * _this2.prize_list_item_h;\n          setTimeout(function () {\n            _this2.prizeDomList[i].style.transitionDuration = '5000ms';\n            _this2.prizeDomList[i].style.transform = \"translate(0px, -\".concat(y, \"px) translateZ(0px)\");\n          }, i * 300);\n        };\n\n        for (var i = 0; i < 3; i++) {\n          _loop2(i);\n        }\n\n        this.prize_num = num_list;\n        this.prizeDomList[2].addEventListener('webkitTransitionEnd', transitionListener);\n      }\n    }\n  }]);\n\n  return Prize;\n}();\n\nfunction randNum(pageSize) {\n  var num_list = [pageSize, pageSize, pageSize].map(function (size) {\n    return Math.floor(Math.random() * size);\n  });\n\n  if (num_list[0] === num_list[2]) {\n    num_list = randNum(pageSize);\n  }\n\n  return num_list;\n}\n\nmodule.exports = Prize;\n\n//# sourceURL=webpack://Prize/./src/main.js?");

/***/ })

/******/ });
});