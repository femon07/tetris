/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* スタイルは後で追加 */
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,cAAc","sourcesContent":["/* スタイルは後で追加 */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/constants/game.js":
/*!*******************************!*\
  !*** ./src/constants/game.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GAME_CONSTANTS: () => (/* binding */ GAME_CONSTANTS)
/* harmony export */ });
// ゲームの定数定義
var GAME_CONSTANTS = {
  COLS: 10, // フィールドの幅（ブロック数）
  ROWS: 20, // フィールドの高さ（ブロック数）
  BLOCK_SIZE: 20, // 1ブロックのピクセルサイズ
  SCORE_TABLE: {
    1: 40, // 1行消し
    2: 100, // 2行消し
    3: 300, // 3行消し
    4: 1200 // 4行消し（テトリス）
  },
  SHAPES: [
  // I
  [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  // O
  [
  [2, 2],
  [2, 2]],

  // T
  [
  [0, 3, 0],
  [3, 3, 3],
  [0, 0, 0]],

  // L
  [
  [4, 0, 0],
  [4, 4, 4],
  [0, 0, 0]],

  // J
  [
  [0, 0, 5],
  [5, 5, 5],
  [0, 0, 0]],

  // Z
  [
  [6, 6, 0],
  [0, 6, 6],
  [0, 0, 0]],

  // S
  [
  [0, 7, 7],
  [7, 7, 0],
  [0, 0, 0]]],


  COLORS: [
  '#000000', // 0: 空
  '#00FFFF', // 1: I (シアン)
  '#FFFF00', // 2: O (黄色)
  '#800080', // 3: T (紫)
  '#FFA500', // 4: L (オレンジ)
  '#0000FF', // 5: J (青)
  '#FF0000', // 6: Z (赤)
  '#008000' // 7: S (緑)
  ],
  GAME_STATES: {
    INIT: 'INIT',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED',
    GAME_OVER: 'GAME_OVER'
  }
};

/***/ }),

/***/ "./src/core/Board.js":
/*!***************************!*\
  !*** ./src/core/Board.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Board: () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
 // Boardクラス
// テトリスの盤面管理とロジックを担当

var Board = /*#__PURE__*/function () {
  function Board() {var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Board);
    this.cols = cols;
    this.rows = rows;
    this.clear();
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Board, [{ key: "clear", value:

    function clear() {var _this = this;
      this.grid = Array.from({ length: this.rows }, function () {return Array(_this.cols).fill(0);});
    } }, { key: "isInside", value:

    function isInside(x, y) {
      return x >= 0 && x < this.cols && y >= 0 && y < this.rows;
    } }, { key: "isEmpty", value:

    function isEmpty(x, y) {
      return this.isInside(x, y) && this.grid[y][x] === 0;
    } }, { key: "setCell", value:

    function setCell(x, y, value) {
      if (this.isInside(x, y)) this.grid[y][x] = value;
    } }, { key: "getCell", value:

    function getCell(x, y) {
      return this.isInside(x, y) ? this.grid[y][x] : null;
    } }, { key: "merge", value:

    function merge(piece) {
      for (var y = 0; y < piece.matrix.length; y++) {
        for (var x = 0; x < piece.matrix[y].length; x++) {
          if (piece.matrix[y][x]) {
            this.setCell(piece.pos.x + x, piece.pos.y + y, piece.matrix[y][x]);
          }
        }
      }
    } }, { key: "clearLines", value:

    function clearLines() {
      var cleared = 0;
      this.grid = this.grid.filter(function (row) {
        if (row.every(function (cell) {return cell !== 0;})) {
          cleared++;
          return false;
        }
        return true;
      });
      while (this.grid.length < this.rows) {
        this.grid.unshift(Array(this.cols).fill(0));
      }
      return cleared;
    } }]);}();

/***/ }),

/***/ "./src/core/Game.js":
/*!**************************!*\
  !*** ./src/core/Game.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.js */ "./src/core/Board.js");
/* harmony import */ var _Piece_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Piece.js */ "./src/core/Piece.js");
 // Gameクラス
// ゲーム全体の状態管理と進行を担当



var Game = /*#__PURE__*/function () {
  function Game() {var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;var tetrominos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);
    this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_2__.Board(cols, rows);
    this.tetrominos = tetrominos || [
    [[1, 1, 1, 1]],
    [[2, 2], [2, 2]],
    [[0, 3, 0], [3, 3, 3]],
    [[0, 4, 4], [4, 4, 0]],
    [[5, 5, 0], [0, 5, 5]],
    [[6, 0, 0], [6, 6, 6]],
    [[0, 0, 7], [7, 7, 7]]];

  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{ key: "reset", value:

    function reset() {
      this.board.clear();
      this.score = 0;
      this.lines = 0;
      this.level = 1;
      this.isGameOver = false;
      this.spawnPiece();
    } }, { key: "spawnPiece", value:

    function spawnPiece() {
      var idx = Math.floor(Math.random() * this.tetrominos.length);
      this.piece = new _Piece_js__WEBPACK_IMPORTED_MODULE_3__.Piece(this.tetrominos[idx], { x: 3, y: 0 });
    } }, { key: "dropPiece", value:

    function dropPiece() {
      this.piece.move(0, 1);
      if (this.hasCollision()) {
        this.piece.move(0, -1);
        this.board.merge(this.piece);
        var cleared = this.board.clearLines();
        this.score += this.calculateScore(cleared);
        this.lines += cleared;
        this.spawnPiece();
        if (this.hasCollision()) {
          this.isGameOver = true;
        }
      }
    } }, { key: "movePiece", value:

    function movePiece(dx) {
      this.piece.move(dx, 0);
      if (this.hasCollision()) {
        this.piece.move(-dx, 0);
      }
    } }, { key: "rotatePiece", value:

    function rotatePiece(dir) {
      var old = JSON.parse(JSON.stringify(this.piece.matrix));
      this.piece.rotate(dir);
      if (this.hasCollision()) {
        this.piece.matrix = old;
      }
    } }, { key: "hasCollision", value:

    function hasCollision() {
      var _this$piece = this.piece,matrix = _this$piece.matrix,pos = _this$piece.pos;
      for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          if (
          matrix[y][x] && (
          !this.board.isInside(pos.x + x, pos.y + y) ||
          this.board.getCell(pos.x + x, pos.y + y) !== 0))
          {
            return true;
          }
        }
      }
      return false;
    } }, { key: "calculateScore", value:

    function calculateScore(linesCleared) {
      var table = { 1: 40, 2: 100, 3: 300, 4: 1200 };
      return (table[linesCleared] || 0) * this.level;
    } }]);}();

/***/ }),

/***/ "./src/core/Piece.js":
/*!***************************!*\
  !*** ./src/core/Piece.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Piece: () => (/* binding */ Piece)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;} // Pieceクラス
// テトロミノの形・位置・回転を管理

var Piece = /*#__PURE__*/function () {
  function Piece(matrix) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Piece);
    this.matrix = matrix;
    this.pos = _objectSpread({}, pos);
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Piece, [{ key: "move", value:

    function move(dx, dy) {
      this.pos.x += dx;
      this.pos.y += dy;
    } }, { key: "rotate", value:

    function rotate() {var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      // 時計回り: dir=1, 反時計回り: dir=-1
      var N = this.matrix.length;
      var result = Array.from({ length: N }, function () {return Array(N).fill(0);});
      for (var y = 0; y < N; y++) {
        for (var x = 0; x < N; x++) {
          if (dir > 0) {
            result[x][N - 1 - y] = this.matrix[y][x];
          } else {
            result[N - 1 - x][y] = this.matrix[y][x];
          }
        }
      }
      this.matrix = result;
    } }]);}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   draw: () => (/* binding */ draw),
/* harmony export */   drawMatrix: () => (/* binding */ drawMatrix),
/* harmony export */   eventManager: () => (/* binding */ eventManager),
/* harmony export */   gameState: () => (/* binding */ gameState),
/* harmony export */   handleKeyDown: () => (/* binding */ handleKeyDown),
/* harmony export */   handleKeyUp: () => (/* binding */ handleKeyUp),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   playerDrop: () => (/* binding */ playerDrop),
/* harmony export */   playerMove: () => (/* binding */ playerMove),
/* harmony export */   playerRotate: () => (/* binding */ playerRotate),
/* harmony export */   resetGame: () => (/* binding */ resetGame),
/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners),
/* harmony export */   tetrisGame: () => (/* binding */ tetrisGame),
/* harmony export */   update: () => (/* binding */ update),
/* harmony export */   updateLevelDisplay: () => (/* binding */ updateLevelDisplay),
/* harmony export */   updateLinesDisplay: () => (/* binding */ updateLinesDisplay),
/* harmony export */   updateScoreDisplay: () => (/* binding */ updateScoreDisplay)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _core_Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Game.js */ "./src/core/Game.js");
/* harmony import */ var _constants_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/game.js */ "./src/constants/game.js");



// ゲームの状態とロジックをカプセル化
var tetrisGame = new _core_Game_js__WEBPACK_IMPORTED_MODULE_1__.Game();

// レンダリング関連のヘルパー関数
function draw(ctx, board, piece, nextPiece, colors, blockSize) {
  // 背景をクリア
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, board.cols * blockSize, board.rows * blockSize);

  // ボードを描画
  drawMatrix(ctx, board.grid, { x: 0, y: 0 }, colors, blockSize);

  // 現在のピースを描画
  if (piece) {
    drawMatrix(ctx, piece.matrix, piece.pos, colors, blockSize);
  }

  // 次のピースを描画
  if (nextPiece) {
    var nextPieceCanvas = document.getElementById('next-piece-canvas');
    if (nextPieceCanvas) {
      var nextPieceCtx = nextPieceCanvas.getContext('2d');
      if (nextPieceCtx) {
        nextPieceCtx.clearRect(0, 0, nextPieceCanvas.width, nextPieceCanvas.height);
        var pieceMatrix = nextPiece.matrix;
        var startX = nextPieceCanvas.width / 2 - pieceMatrix[0].length * blockSize / 2;
        var startY = nextPieceCanvas.height / 2 - pieceMatrix.length * blockSize / 2;

        drawMatrix(nextPieceCtx, pieceMatrix, { x: startX / blockSize, y: startY / blockSize }, colors, blockSize);
      }
    }
  }
}

function drawMatrix(ctx, matrix, offset, colors, blockSize) {
  matrix.forEach(function (row, y) {
    row.forEach(function (value, x) {
      if (value !== 0) {
        ctx.fillStyle = colors[value];
        ctx.fillRect(
          (x + offset.x) * blockSize,
          (y + offset.y) * blockSize,
          blockSize,
          blockSize
        );
      }
    });
  });
}

// UI更新関連のヘルパー関数
function updateScoreDisplay(score) {
  var scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = score;
  }
}

function updateLinesDisplay(lines) {
  var linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.textContent = lines;
  }
}

function updateLevelDisplay(level) {
  var levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.textContent = level;
  }
}

// ゲームの状態を管理するオブジェクト
var gameState = {
  // ゲームの基本設定
  COLS: 10,
  ROWS: 20,
  BLOCK: _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE, // 各ブロックのサイズ（ピクセル）
  // ゲームの状態変数
  board: [],
  piece: null,
  nextPiece: null,
  score: 0,
  lines: 0,
  level: 1,
  dropCounter: 0,
  dropInterval: 1000, // ピースが自動で落ちる間隔（ミリ秒）
  lastTime: 0,
  gameLoopId: null,
  isGameOver: false,
  // キー入力の状態管理
  keys: {},
  // ゲームの一時停止状態
  paused: false,

  // ゲームの状態を初期化する関数
  initBoard: function initBoard() {var _this = this;
    this.board = Array(this.ROWS).fill(0).map(function () {return Array(_this.COLS).fill(0);});
  },

  // ログ出力関数
  logState: function logState() {
    console.log('Current Game State:', {
      score: this.score,
      lines: this.lines,
      level: this.level,
      isGameOver: this.isGameOver,
      piece: this.piece ? { matrix: this.piece.matrix, pos: this.piece.pos } : null,
      nextPiece: this.nextPiece ? { matrix: this.nextPiece.matrix } : null
    });
  }
};

// イベントマネージャーの作成
var eventManager = new EventTarget();

// ゲームを初期化する関数
function initGame() {
  console.log('initGame: ゲームの初期化を開始します');
  var canvas = document.getElementById('game');
  if (!canvas) {
    console.error('Canvas要素が見つかりません');
    return null;
  }
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error('2Dコンテキストの取得に失敗しました');
    return null;
  }

  // キャンバスのサイズを設定
  canvas.width = gameState.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = gameState.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE;

  // グローバルなコンテキストとキャンバスをgameStateに保存
  gameState.ctx = ctx;
  gameState.canvas = canvas;

  console.log('initGame: キャンバスとコンテキストの初期化が完了しました');
  return canvas;
}

// ゲームをリセットする関数
function resetGame() {
  console.log('resetGame: ゲームをリセットします');
  tetrisGame.reset();
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.level = tetrisGame.level;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board = tetrisGame.board.grid;
  gameState.dropCounter = 0;
  gameState.lastTime = 0;
  gameState.gameLoopId = null;
  gameState.paused = false;
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
  var boardForDraw = {
    grid: gameState.board,
    cols: gameState.COLS,
    rows: gameState.ROWS
  };
  draw(gameState.ctx, boardForDraw, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE);
  console.log('resetGame: ゲームのリセットが完了しました');
}

// ピースをドロップする関数
function playerDrop() {
  console.log('playerDrop: ピースをドロップします');
  if (gameState.isGameOver) return;
  tetrisGame.dropPiece();
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board = tetrisGame.board.grid;
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
  draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE);

  if (gameState.isGameOver) {
    console.log('playerDrop: ゲームオーバー！');
    alert('Game Over!');
    cancelAnimationFrame(gameState.gameLoopId);
  }
  gameState.dropCounter = 0;
}

// ピースを移動する関数
function playerMove(dir) {
  console.log('playerMove: ピースを移動します', { dir: dir });
  if (gameState.isGameOver) return;
  tetrisGame.movePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE);
}

// ピースを回転する関数
function playerRotate(dir) {
  console.log('playerRotate: ピースを回転します', { dir: dir });
  if (gameState.isGameOver) return;
  tetrisGame.rotatePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE);
}

// ゲームループ
function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (gameState.paused) return;
  var deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;

  gameState.dropCounter += deltaTime;
  if (gameState.dropCounter > gameState.dropInterval) {
    playerDrop();
  }

  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE);
  gameState.gameLoopId = requestAnimationFrame(update);
}

// キーハンドラ関数
function handleKeyDown(event, gameInstance) {
  if (gameInstance.isGameOver) return;

  // キーリピートを無視
  if (event.repeat) return;

  gameInstance.keys[event.key] = true;

  switch (event.key) {
    case 'ArrowLeft':
      gameInstance.movePiece(-1);
      break;
    case 'ArrowRight':
      gameInstance.movePiece(1);
      break;
    case 'ArrowDown':
      gameInstance.dropPiece();
      break;
    case 'ArrowUp':
      gameInstance.rotatePiece(1);
      break;
    case ' ': // スペースキー
      // ハードドロップ
      console.log('handleKeyDown: ハードドロップを実行します');
      if (!gameInstance.piece) {
        console.warn('handleKeyDown: アクティブなピースがありません');
        break;
      }

      // ピースを一番下まで落とす
      while (true) {
        var pieceY = gameInstance.piece.pos.y;
        gameInstance.dropPiece();
        // 位置が変わらなくなったら終了
        if (pieceY === gameInstance.piece.pos.y || gameInstance.isGameOver) {var _gameInstance$piece;
          console.log('handleKeyDown: ハードドロップ完了', { y: (_gameInstance$piece = gameInstance.piece) === null || _gameInstance$piece === void 0 ? void 0 : _gameInstance$piece.pos.y });
          break;
        }
      }
      break;
    case 'p':
    case 'P':
      // 一時停止
      if (gameInstance.gameLoopId) {
        cancelAnimationFrame(gameInstance.gameLoopId);
        gameInstance.gameLoopId = null;
        gameInstance.paused = true; // ポーズ状態を設定
      } else {
        gameInstance.paused = false; // ポーズ状態を解除
        gameInstance.lastTime = 0;
        gameInstance.gameLoopId = requestAnimationFrame(gameInstance.update);
      }
      break;
    case 'r':
    case 'R':
      // リセット
      gameInstance.resetGame();
      break;
  }
}

function handleKeyUp(event, gameInstance) {
  gameInstance.keys[event.key] = false;
}

// イベントリスナーの設定
function setupEventListeners(keyDownHandler, keyUpHandler) {
  console.log('setupEventListeners: イベントリスナーを設定します');

  // 既存のイベントリスナーを削除
  document.removeEventListener('keydown', keyDownHandler);
  document.removeEventListener('keyup', keyUpHandler);

  // 新しいイベントリスナーを追加
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);

  console.log('setupEventListeners: イベントリスナーの設定が完了しました');
}

// ゲーム初期化
function init() {
  console.log('init: ゲームの初期化を開始します');

  try {
    // ゲーム状態を初期化
    console.log('init: ゲームの初期化を開始します');
    var canvas = initGame();

    if (!canvas) {
      throw new Error('キャンバスの初期化に失敗しました');
    }

    // ゲームをリセット
    console.log('init: ゲームをリセットします');
    resetGame();

    // ゲーム状態をログに出力
    gameState.logState();

    // イベントリスナーを設定
    console.log('init: イベントリスナーを設定します');
    setupEventListeners(
      function (event) {return handleKeyDown(event, {
          isGameOver: gameState.isGameOver,
          keys: gameState.keys,
          piece: gameState.piece,
          gameLoopId: gameState.gameLoopId,
          paused: gameState.paused,
          lastTime: gameState.lastTime,
          // tetrisGameのメソッドを直接参照
          movePiece: tetrisGame.movePiece.bind(tetrisGame),
          dropPiece: tetrisGame.dropPiece.bind(tetrisGame),
          rotatePiece: tetrisGame.rotatePiece.bind(tetrisGame),
          update: update,
          resetGame: resetGame
        });},
      function (event) {return handleKeyUp(event, {
          keys: gameState.keys
        });}
    );

    console.log('init: ゲームの初期化が完了しました');

    // 外部から参照できるように必要なものを返す
    return (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      canvas: canvas,
      gameState: gameState,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      setupEventListeners: setupEventListeners }, "gameState",
    gameState), "eventManager",
    eventManager), "initGame",
    initGame), "resetGame",
    resetGame), "update",
    update);

  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
    return null;
  }
}

var exports = {
  init: init,
  playerMove: playerMove,
  playerRotate: playerRotate,
  playerDrop: playerDrop,
  handleKeyDown: handleKeyDown,
  handleKeyUp: handleKeyUp,
  setupEventListeners: setupEventListeners,
  gameState: gameState,
  eventManager: eventManager,
  initGame: initGame,
  resetGame: resetGame,
  update: update
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exports);

// テスト用にグローバルに公開
if (typeof window !== 'undefined') {
  window.tetris = window.tetris || {};
  window.tetris.game = {
    init: init,
    gameState: gameState,
    handleKeyDown: exports.handleKeyDown,
    handleKeyUp: handleKeyUp,
    eventManager: eventManager
  };
}

// ゲームのスタート（ブラウザ実行時のみ）
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    // 既存のゲームループをクリア
    if (gameState.gameLoopId) {
      cancelAnimationFrame(gameState.gameLoopId);
    }
    initGame();
  }); // ウィンドウリサイズ時の処理
  window.addEventListener('resize', function () {
    var canvas = document.getElementById('game');
    if (canvas && gameState.ctx) {
      // キャンバスのサイズを再設定
      canvas.width = gameState.COLS * gameState.BLOCK;
      canvas.height = gameState.ROWS * gameState.BLOCK;
      // 再描画
      draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_2__.GAME_CONSTANTS.BLOCK_SIZE);
    }
  });
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/**
 * テトリスゲームのエントリーポイント
 */

// スタイルシートをインポート


// ゲームモジュールをインポート


// デバッグ用のスタイルを追加
var style = document.createElement('style');
style.textContent = "\n  #game {\n    border: 1px solid #000;\n    background-color: #f0f0f0;\n  }\n";





document.head.appendChild(style);

// ドキュメントの読み込み完了を待ってゲームを初期化
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded イベントが発火しました');

  try {
    console.log('ゲームの初期化を開始します...');
    // キャンバスの状態を確認
    var canvas = document.getElementById('game');
    if (canvas) {
      console.log('キャンバスのサイズ:', canvas.width, 'x', canvas.height);
      console.log('キャンバスのスタイルサイズ:', canvas.style.width, 'x', canvas.style.height);
    } else {
      console.error('キャンバス要素が見つかりません');
    }
  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
    alert('ゲームの初期化中にエラーが発生しました。コンソールを確認してください。');
  }
});

// 開発用: グローバル名前空間にエクスポート
if (true) {
  window.tetris = window.tetris || {};
  window.tetris.init = _game_js__WEBPACK_IMPORTED_MODULE_1__.init;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSTtJQUNULENBQUMsRUFBRSxHQUFHLEVBQUc7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0VBQ047RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNU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QUMsQ0FBQyxPQUFPQSxLQUFLLEVBQUU7SUFDZE4sT0FBTyxDQUFDTSxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztJQUM1Q0ksS0FBSyxDQUFDLHFDQUFxQyxDQUFDO0VBQzlDO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBSWlDLElBQXNDLEVBQUU7RUFDMUNQLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHRCxNQUFNLENBQUNDLE1BQU0sSUFBSSxDQUFDLENBQUM7RUFDbkNELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDTixJQUFJLEdBQUdBLDBDQUFJO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvbnN0YW50cy9nYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL0JvYXJkLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL0dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvUGllY2UuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsIG4pIHtcbiAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xufVxuZXhwb3J0IHsgX2NsYXNzQ2FsbENoZWNrIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gIGZvciAodmFyIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgIHZhciBvID0gclt0XTtcbiAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlO1xufVxuZXhwb3J0IHsgX2NyZWF0ZUNsYXNzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5leHBvcnQgeyB0b1ByaW1pdGl2ZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufVxuZXhwb3J0IHsgdG9Qcm9wZXJ0eUtleSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmV4cG9ydCB7IF90eXBlb2YgYXMgZGVmYXVsdCB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiDjgrnjgr/jgqTjg6vjga/lvozjgafov73liqAgKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBY1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiDjgrnjgr/jgqTjg6vjga/lvozjgafov73liqAgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8g44Ky44O844Og44Gu5a6a5pWw5a6a576pXG5leHBvcnQgY29uc3QgR0FNRV9DT05TVEFOVFMgPSB7XG4gIENPTFM6IDEwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7luYXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgUk9XUzogMjAsIC8vIOODleOCo+ODvOODq+ODieOBrumrmOOBle+8iOODluODreODg+OCr+aVsO+8iVxuICBCTE9DS19TSVpFOiAyMCwgLy8gMeODluODreODg+OCr+OBruODlOOCr+OCu+ODq+OCteOCpOOCulxuICBTQ09SRV9UQUJMRToge1xuICAgIDE6IDQwLCAgIC8vIDHooYzmtojjgZdcbiAgICAyOiAxMDAsICAvLyAy6KGM5raI44GXXG4gICAgMzogMzAwLCAgLy8gM+ihjOa2iOOBl1xuICAgIDQ6IDEyMDAgIC8vIDTooYzmtojjgZfvvIjjg4bjg4jjg6rjgrnvvIlcbiAgfSxcbiAgU0hBUEVTOiBbXG4gICAgLy8gSVxuICAgIFtcbiAgICAgIFswLCAwLCAwLCAwXSxcbiAgICAgIFsxLCAxLCAxLCAxXSxcbiAgICAgIFswLCAwLCAwLCAwXSxcbiAgICAgIFswLCAwLCAwLCAwXVxuICAgIF0sXG4gICAgLy8gT1xuICAgIFtcbiAgICAgIFsyLCAyXSxcbiAgICAgIFsyLCAyXVxuICAgIF0sXG4gICAgLy8gVFxuICAgIFtcbiAgICAgIFswLCAzLCAwXSxcbiAgICAgIFszLCAzLCAzXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgLy8gTFxuICAgIFtcbiAgICAgIFs0LCAwLCAwXSxcbiAgICAgIFs0LCA0LCA0XSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgLy8gSlxuICAgIFtcbiAgICAgIFswLCAwLCA1XSxcbiAgICAgIFs1LCA1LCA1XSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgLy8gWlxuICAgIFtcbiAgICAgIFs2LCA2LCAwXSxcbiAgICAgIFswLCA2LCA2XSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF0sXG4gICAgLy8gU1xuICAgIFtcbiAgICAgIFswLCA3LCA3XSxcbiAgICAgIFs3LCA3LCAwXSxcbiAgICAgIFswLCAwLCAwXVxuICAgIF1cbiAgXSxcbiAgQ09MT1JTOiBbXG4gICAgJyMwMDAwMDAnLCAvLyAwOiDnqbpcbiAgICAnIzAwRkZGRicsIC8vIDE6IEkgKOOCt+OCouODsylcbiAgICAnI0ZGRkYwMCcsIC8vIDI6IE8gKOm7hOiJsilcbiAgICAnIzgwMDA4MCcsIC8vIDM6IFQgKOe0qylcbiAgICAnI0ZGQTUwMCcsIC8vIDQ6IEwgKOOCquODrOODs+OCuClcbiAgICAnIzAwMDBGRicsIC8vIDU6IEogKOmdkilcbiAgICAnI0ZGMDAwMCcsIC8vIDY6IFogKOi1pClcbiAgICAnIzAwODAwMCcgIC8vIDc6IFMgKOe3kSlcbiAgXSxcbiAgR0FNRV9TVEFURVM6IHtcbiAgICBJTklUOiAnSU5JVCcsXG4gICAgUExBWUlORzogJ1BMQVlJTkcnLFxuICAgIFBBVVNFRDogJ1BBVVNFRCcsXG4gICAgR0FNRV9PVkVSOiAnR0FNRV9PVkVSJ1xuICB9XG59O1xuIiwiLy8gQm9hcmTjgq/jg6njgrlcbi8vIOODhuODiOODquOCueOBruebpOmdoueuoeeQhuOBqOODreOCuOODg+OCr+OCkuaLheW9k1xuXG5leHBvcnQgY2xhc3MgQm9hcmQge1xuICBjb25zdHJ1Y3Rvcihjb2xzID0gMTAsIHJvd3MgPSAyMCkge1xuICAgIHRoaXMuY29scyA9IGNvbHM7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmdyaWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLnJvd3MgfSwgKCkgPT4gQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgfVxuXG4gIGlzSW5zaWRlKHgsIHkpIHtcbiAgICByZXR1cm4geCA+PSAwICYmIHggPCB0aGlzLmNvbHMgJiYgeSA+PSAwICYmIHkgPCB0aGlzLnJvd3M7XG4gIH1cblxuICBpc0VtcHR5KHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5pc0luc2lkZSh4LCB5KSAmJiB0aGlzLmdyaWRbeV1beF0gPT09IDA7XG4gIH1cblxuICBzZXRDZWxsKHgsIHksIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaXNJbnNpZGUoeCwgeSkpIHRoaXMuZ3JpZFt5XVt4XSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0Q2VsbCh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgPyB0aGlzLmdyaWRbeV1beF0gOiBudWxsO1xuICB9XG5cbiAgbWVyZ2UocGllY2UpIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHBpZWNlLm1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBwaWVjZS5tYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKHBpZWNlLm1hdHJpeFt5XVt4XSkge1xuICAgICAgICAgIHRoaXMuc2V0Q2VsbChwaWVjZS5wb3MueCArIHgsIHBpZWNlLnBvcy55ICsgeSwgcGllY2UubWF0cml4W3ldW3hdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsZWFyTGluZXMoKSB7XG4gICAgbGV0IGNsZWFyZWQgPSAwO1xuICAgIHRoaXMuZ3JpZCA9IHRoaXMuZ3JpZC5maWx0ZXIocm93ID0+IHtcbiAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICBjbGVhcmVkKys7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIHdoaWxlICh0aGlzLmdyaWQubGVuZ3RoIDwgdGhpcy5yb3dzKSB7XG4gICAgICB0aGlzLmdyaWQudW5zaGlmdChBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xuICAgIH1cbiAgICByZXR1cm4gY2xlYXJlZDtcbiAgfVxufVxuIiwiLy8gR2FtZeOCr+ODqeOCuVxuLy8g44Ky44O844Og5YWo5L2T44Gu54q25oWL566h55CG44Go6YCy6KGM44KS5ouF5b2TXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IHsgUGllY2UgfSBmcm9tICcuL1BpZWNlLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihjb2xzID0gMTAsIHJvd3MgPSAyMCwgdGV0cm9taW5vcyA9IG51bGwpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKGNvbHMsIHJvd3MpO1xuICAgIHRoaXMudGV0cm9taW5vcyA9IHRldHJvbWlub3MgfHwgW1xuICAgICAgW1sxLCAxLCAxLCAxXV0sXG4gICAgICBbWzIsIDJdLCBbMiwgMl1dLFxuICAgICAgW1swLCAzLCAwXSwgWzMsIDMsIDNdXSxcbiAgICAgIFtbMCwgNCwgNF0sIFs0LCA0LCAwXV0sXG4gICAgICBbWzUsIDUsIDBdLCBbMCwgNSwgNV1dLFxuICAgICAgW1s2LCAwLCAwXSwgWzYsIDYsIDZdXSxcbiAgICAgIFtbMCwgMCwgN10sIFs3LCA3LCA3XV0sXG4gICAgXTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYm9hcmQuY2xlYXIoKTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmxpbmVzID0gMDtcbiAgICB0aGlzLmxldmVsID0gMTtcbiAgICB0aGlzLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnNwYXduUGllY2UoKTtcbiAgfVxuXG4gIHNwYXduUGllY2UoKSB7XG4gICAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCk7XG4gICAgdGhpcy5waWVjZSA9IG5ldyBQaWVjZSh0aGlzLnRldHJvbWlub3NbaWR4XSwgeyB4OiAzLCB5OiAwIH0pO1xuICB9XG5cbiAgZHJvcFBpZWNlKCkge1xuICAgIHRoaXMucGllY2UubW92ZSgwLCAxKTtcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKDAsIC0xKTtcbiAgICAgIHRoaXMuYm9hcmQubWVyZ2UodGhpcy5waWVjZSk7XG4gICAgICBjb25zdCBjbGVhcmVkID0gdGhpcy5ib2FyZC5jbGVhckxpbmVzKCk7XG4gICAgICB0aGlzLnNjb3JlICs9IHRoaXMuY2FsY3VsYXRlU2NvcmUoY2xlYXJlZCk7XG4gICAgICB0aGlzLmxpbmVzICs9IGNsZWFyZWQ7XG4gICAgICB0aGlzLnNwYXduUGllY2UoKTtcbiAgICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZVBpZWNlKGR4KSB7XG4gICAgdGhpcy5waWVjZS5tb3ZlKGR4LCAwKTtcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKC1keCwgMCk7XG4gICAgfVxuICB9XG5cbiAgcm90YXRlUGllY2UoZGlyKSB7XG4gICAgY29uc3Qgb2xkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBpZWNlLm1hdHJpeCkpO1xuICAgIHRoaXMucGllY2Uucm90YXRlKGRpcik7XG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubWF0cml4ID0gb2xkO1xuICAgIH1cbiAgfVxuXG4gIGhhc0NvbGxpc2lvbigpIHtcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgbWF0cml4W3ldW3hdICYmXG4gICAgICAgICAgKCF0aGlzLmJvYXJkLmlzSW5zaWRlKHBvcy54ICsgeCwgcG9zLnkgKyB5KSB8fFxuICAgICAgICAgICAgdGhpcy5ib2FyZC5nZXRDZWxsKHBvcy54ICsgeCwgcG9zLnkgKyB5KSAhPT0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2FsY3VsYXRlU2NvcmUobGluZXNDbGVhcmVkKSB7XG4gICAgY29uc3QgdGFibGUgPSB7IDE6IDQwLCAyOiAxMDAsIDM6IDMwMCwgNDogMTIwMCB9O1xuICAgIHJldHVybiAodGFibGVbbGluZXNDbGVhcmVkXSB8fCAwKSAqIHRoaXMubGV2ZWw7XG4gIH1cbn1cbiIsIi8vIFBpZWNl44Kv44Op44K5XG4vLyDjg4bjg4jjg63jg5/jg47jga7lvaLjg7vkvY3nva7jg7vlm57ou6LjgpLnrqHnkIZcblxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMucG9zID0geyAuLi5wb3MgfTtcbiAgfVxuXG4gIG1vdmUoZHgsIGR5KSB7XG4gICAgdGhpcy5wb3MueCArPSBkeDtcbiAgICB0aGlzLnBvcy55ICs9IGR5O1xuICB9XG5cbiAgcm90YXRlKGRpciA9IDEpIHtcbiAgICAvLyDmmYLoqIjlm57jgoo6IGRpcj0xLCDlj43mmYLoqIjlm57jgoo6IGRpcj0tMVxuICAgIGNvbnN0IE4gPSB0aGlzLm1hdHJpeC5sZW5ndGg7XG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoKSA9PiBBcnJheShOKS5maWxsKDApKTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IE47IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBOOyB4KyspIHtcbiAgICAgICAgaWYgKGRpciA+IDApIHtcbiAgICAgICAgICByZXN1bHRbeF1bTiAtIDEgLSB5XSA9IHRoaXMubWF0cml4W3ldW3hdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdFtOIC0gMSAtIHhdW3ldID0gdGhpcy5tYXRyaXhbeV1beF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5tYXRyaXggPSByZXN1bHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2NvcmUvR2FtZS5qcyc7XG5pbXBvcnQgeyBHQU1FX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuanMnO1xuXG4vLyDjgrLjg7zjg6Djga7nirbmhYvjgajjg63jgrjjg4Pjgq/jgpLjgqvjg5fjgrvjg6vljJZcbmV4cG9ydCBjb25zdCB0ZXRyaXNHYW1lID0gbmV3IEdhbWUoKTtcblxuLy8g44Os44Oz44OA44Oq44Oz44Kw6Zai6YCj44Gu44OY44Or44OR44O86Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gZHJhdyhjdHgsIGJvYXJkLCBwaWVjZSwgbmV4dFBpZWNlLCBjb2xvcnMsIGJsb2NrU2l6ZSkge1xuICAvLyDog4zmma/jgpLjgq/jg6rjgqJcbiAgY3R4LmZpbGxTdHlsZSA9ICcjZjBmMGYwJztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGJvYXJkLmNvbHMgKiBibG9ja1NpemUsIGJvYXJkLnJvd3MgKiBibG9ja1NpemUpO1xuXG4gIC8vIOODnOODvOODieOCkuaPj+eUu1xuICBkcmF3TWF0cml4KGN0eCwgYm9hcmQuZ3JpZCwgeyB4OiAwLCB5OiAwIH0sIGNvbG9ycywgYmxvY2tTaXplKTtcblxuICAvLyDnj77lnKjjga7jg5Tjg7zjgrnjgpLmj4/nlLtcbiAgaWYgKHBpZWNlKSB7XG4gICAgZHJhd01hdHJpeChjdHgsIHBpZWNlLm1hdHJpeCwgcGllY2UucG9zLCBjb2xvcnMsIGJsb2NrU2l6ZSk7XG4gIH1cblxuICAvLyDmrKHjga7jg5Tjg7zjgrnjgpLmj4/nlLtcbiAgaWYgKG5leHRQaWVjZSkge1xuICAgIGNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXBpZWNlLWNhbnZhcycpO1xuICAgIGlmIChuZXh0UGllY2VDYW52YXMpIHtcbiAgICAgIGNvbnN0IG5leHRQaWVjZUN0eCA9IG5leHRQaWVjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKG5leHRQaWVjZUN0eCkge1xuICAgICAgICBuZXh0UGllY2VDdHguY2xlYXJSZWN0KDAsIDAsIG5leHRQaWVjZUNhbnZhcy53aWR0aCwgbmV4dFBpZWNlQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHBpZWNlTWF0cml4ID0gbmV4dFBpZWNlLm1hdHJpeDtcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gKG5leHRQaWVjZUNhbnZhcy53aWR0aCAvIDIpIC0gKHBpZWNlTWF0cml4WzBdLmxlbmd0aCAqIGJsb2NrU2l6ZSAvIDIpO1xuICAgICAgICBjb25zdCBzdGFydFkgPSAobmV4dFBpZWNlQ2FudmFzLmhlaWdodCAvIDIpIC0gKHBpZWNlTWF0cml4Lmxlbmd0aCAqIGJsb2NrU2l6ZSAvIDIpO1xuXG4gICAgICAgIGRyYXdNYXRyaXgobmV4dFBpZWNlQ3R4LCBwaWVjZU1hdHJpeCwgeyB4OiBzdGFydFggLyBibG9ja1NpemUsIHk6IHN0YXJ0WSAvIGJsb2NrU2l6ZSB9LCBjb2xvcnMsIGJsb2NrU2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmF3TWF0cml4KGN0eCwgbWF0cml4LCBvZmZzZXQsIGNvbG9ycywgYmxvY2tTaXplKSB7XG4gIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW3ZhbHVlXTtcbiAgICAgICAgY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICh4ICsgb2Zmc2V0LngpICogYmxvY2tTaXplLFxuICAgICAgICAgICh5ICsgb2Zmc2V0LnkpICogYmxvY2tTaXplLFxuICAgICAgICAgIGJsb2NrU2l6ZSxcbiAgICAgICAgICBibG9ja1NpemVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIFVJ5pu05paw6Zai6YCj44Gu44OY44Or44OR44O86Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2NvcmVEaXNwbGF5KHNjb3JlKSB7XG4gIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICBpZiAoc2NvcmVFbGVtZW50KSB7XG4gICAgc2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gc2NvcmU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxpbmVzRGlzcGxheShsaW5lcykge1xuICBjb25zdCBsaW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXMnKTtcbiAgaWYgKGxpbmVzRWxlbWVudCkge1xuICAgIGxpbmVzRWxlbWVudC50ZXh0Q29udGVudCA9IGxpbmVzO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMZXZlbERpc3BsYXkobGV2ZWwpIHtcbiAgY29uc3QgbGV2ZWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XG4gIGlmIChsZXZlbEVsZW1lbnQpIHtcbiAgICBsZXZlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsZXZlbDtcbiAgfVxufVxuXG4vLyDjgrLjg7zjg6Djga7nirbmhYvjgpLnrqHnkIbjgZnjgovjgqrjg5bjgrjjgqfjgq/jg4hcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGUgPSB7XG4gIC8vIOOCsuODvOODoOOBruWfuuacrOioreWumlxuICBDT0xTOiAxMCxcbiAgUk9XUzogMjAsXG4gIEJMT0NLOiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFLCAvLyDlkITjg5bjg63jg4Pjgq/jga7jgrXjgqTjgrrvvIjjg5Tjgq/jgrvjg6vvvIlcbiAgLy8g44Ky44O844Og44Gu54q25oWL5aSJ5pWwXG4gIGJvYXJkOiBbXSxcbiAgcGllY2U6IG51bGwsXG4gIG5leHRQaWVjZTogbnVsbCxcbiAgc2NvcmU6IDAsXG4gIGxpbmVzOiAwLFxuICBsZXZlbDogMSxcbiAgZHJvcENvdW50ZXI6IDAsXG4gIGRyb3BJbnRlcnZhbDogMTAwMCwgLy8g44OU44O844K544GM6Ieq5YuV44Gn6JC944Gh44KL6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gIGxhc3RUaW1lOiAwLFxuICBnYW1lTG9vcElkOiBudWxsLFxuICBpc0dhbWVPdmVyOiBmYWxzZSxcbiAgLy8g44Kt44O85YWl5Yqb44Gu54q25oWL566h55CGXG4gIGtleXM6IHt9LFxuICAvLyDjgrLjg7zjg6Djga7kuIDmmYLlgZzmraLnirbmhYtcbiAgcGF1c2VkOiBmYWxzZSxcblxuICAvLyDjgrLjg7zjg6Djga7nirbmhYvjgpLliJ3mnJ/ljJbjgZnjgovplqLmlbBcbiAgaW5pdEJvYXJkKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLlJPV1MpLmZpbGwoMCkubWFwKCgpID0+IEFycmF5KHRoaXMuQ09MUykuZmlsbCgwKSk7XG4gIH0sXG5cbiAgLy8g44Ot44Kw5Ye65Yqb6Zai5pWwXG4gIGxvZ1N0YXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IEdhbWUgU3RhdGU6Jywge1xuICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXG4gICAgICBsaW5lczogdGhpcy5saW5lcyxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgaXNHYW1lT3ZlcjogdGhpcy5pc0dhbWVPdmVyLFxuICAgICAgcGllY2U6IHRoaXMucGllY2UgPyB7IG1hdHJpeDogdGhpcy5waWVjZS5tYXRyaXgsIHBvczogdGhpcy5waWVjZS5wb3MgfSA6IG51bGwsXG4gICAgICBuZXh0UGllY2U6IHRoaXMubmV4dFBpZWNlID8geyBtYXRyaXg6IHRoaXMubmV4dFBpZWNlLm1hdHJpeCB9IDogbnVsbCxcbiAgICB9KTtcbiAgfVxufTtcblxuLy8g44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu5L2c5oiQXG5leHBvcnQgY29uc3QgZXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbi8vIOOCsuODvOODoOOCkuWIneacn+WMluOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuICBjb25zb2xlLmxvZygnaW5pdEdhbWU6IOOCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmScpO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICBpZiAoIWNhbnZhcykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhc+imgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJzJE44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7jgrXjgqTjgrrjgpLoqK3lrppcbiAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuXG4gIC8vIOOCsOODreODvOODkOODq+OBquOCs+ODs+ODhuOCreOCueODiOOBqOOCreODo+ODs+ODkOOCueOCkmdhbWVTdGF0ZeOBq+S/neWtmFxuICBnYW1lU3RhdGUuY3R4ID0gY3R4O1xuICBnYW1lU3RhdGUuY2FudmFzID0gY2FudmFzO1xuXG4gIGNvbnNvbGUubG9nKCdpbml0R2FtZTog44Kt44Oj44Oz44OQ44K544Go44Kz44Oz44OG44Kt44K544OI44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44GfJyk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbi8vIOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgY29uc29sZS5sb2coJ3Jlc2V0R2FtZTog44Ky44O844Og44KS44Oq44K744OD44OI44GX44G+44GZJyk7XG4gIHRldHJpc0dhbWUucmVzZXQoKTtcbiAgZ2FtZVN0YXRlLnNjb3JlID0gdGV0cmlzR2FtZS5zY29yZTtcbiAgZ2FtZVN0YXRlLmxpbmVzID0gdGV0cmlzR2FtZS5saW5lcztcbiAgZ2FtZVN0YXRlLmxldmVsID0gdGV0cmlzR2FtZS5sZXZlbDtcbiAgZ2FtZVN0YXRlLmlzR2FtZU92ZXIgPSB0ZXRyaXNHYW1lLmlzR2FtZU92ZXI7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5uZXh0UGllY2UgPSB0ZXRyaXNHYW1lLm5leHRQaWVjZTtcbiAgZ2FtZVN0YXRlLmJvYXJkID0gdGV0cmlzR2FtZS5ib2FyZC5ncmlkO1xuICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgPSAwO1xuICBnYW1lU3RhdGUubGFzdFRpbWUgPSAwO1xuICBnYW1lU3RhdGUuZ2FtZUxvb3BJZCA9IG51bGw7XG4gIGdhbWVTdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgdXBkYXRlU2NvcmVEaXNwbGF5KGdhbWVTdGF0ZS5zY29yZSk7XG4gIHVwZGF0ZUxpbmVzRGlzcGxheShnYW1lU3RhdGUubGluZXMpO1xuICB1cGRhdGVMZXZlbERpc3BsYXkoZ2FtZVN0YXRlLmxldmVsKTtcbiAgY29uc3QgYm9hcmRGb3JEcmF3ID0ge1xuICAgIGdyaWQ6IGdhbWVTdGF0ZS5ib2FyZCxcbiAgICBjb2xzOiBnYW1lU3RhdGUuQ09MUyxcbiAgICByb3dzOiBnYW1lU3RhdGUuUk9XU1xuICB9O1xuICBkcmF3KGdhbWVTdGF0ZS5jdHgsIGJvYXJkRm9yRHJhdywgZ2FtZVN0YXRlLnBpZWNlLCBnYW1lU3RhdGUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xuICBjb25zb2xlLmxvZygncmVzZXRHYW1lOiDjgrLjg7zjg6Djga7jg6rjgrvjg4Pjg4jjgYzlrozkuobjgZfjgb7jgZfjgZ8nKTtcbn1cblxuLy8g44OU44O844K544KS44OJ44Ot44OD44OX44GZ44KL6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyRHJvcCgpIHtcbiAgY29uc29sZS5sb2coJ3BsYXllckRyb3A6IOODlOODvOOCueOCkuODieODreODg+ODl+OBl+OBvuOBmScpO1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgdGV0cmlzR2FtZS5kcm9wUGllY2UoKTtcbiAgZ2FtZVN0YXRlLnNjb3JlID0gdGV0cmlzR2FtZS5zY29yZTtcbiAgZ2FtZVN0YXRlLmxpbmVzID0gdGV0cmlzR2FtZS5saW5lcztcbiAgZ2FtZVN0YXRlLmlzR2FtZU92ZXIgPSB0ZXRyaXNHYW1lLmlzR2FtZU92ZXI7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5uZXh0UGllY2UgPSB0ZXRyaXNHYW1lLm5leHRQaWVjZTtcbiAgZ2FtZVN0YXRlLmJvYXJkID0gdGV0cmlzR2FtZS5ib2FyZC5ncmlkO1xuICB1cGRhdGVTY29yZURpc3BsYXkoZ2FtZVN0YXRlLnNjb3JlKTtcbiAgdXBkYXRlTGluZXNEaXNwbGF5KGdhbWVTdGF0ZS5saW5lcyk7XG4gIHVwZGF0ZUxldmVsRGlzcGxheShnYW1lU3RhdGUubGV2ZWwpO1xuICBkcmF3KGdhbWVTdGF0ZS5jdHgsIGdhbWVTdGF0ZS5ib2FyZCwgZ2FtZVN0YXRlLnBpZWNlLCBnYW1lU3RhdGUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xuXG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3Zlcikge1xuICAgIGNvbnNvbGUubG9nKCdwbGF5ZXJEcm9wOiDjgrLjg7zjg6Djgqrjg7zjg5Djg7zvvIEnKTtcbiAgICBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgfVxuICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgPSAwO1xufVxuXG4vLyDjg5Tjg7zjgrnjgpLnp7vli5XjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJNb3ZlKGRpcikge1xuICBjb25zb2xlLmxvZygncGxheWVyTW92ZTog44OU44O844K544KS56e75YuV44GX44G+44GZJywgeyBkaXIgfSk7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLm1vdmVQaWVjZShkaXIpO1xuICBnYW1lU3RhdGUucGllY2UgPSB0ZXRyaXNHYW1lLnBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIHRldHJpc0dhbWUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xufVxuXG4vLyDjg5Tjg7zjgrnjgpLlm57ou6LjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJSb3RhdGUoZGlyKSB7XG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJSb3RhdGU6IOODlOODvOOCueOCkuWbnui7ouOBl+OBvuOBmScsIHsgZGlyIH0pO1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgdGV0cmlzR2FtZS5yb3RhdGVQaWVjZShkaXIpO1xuICBnYW1lU3RhdGUucGllY2UgPSB0ZXRyaXNHYW1lLnBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIHRldHJpc0dhbWUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xufVxuXG4vLyDjgrLjg7zjg6Djg6vjg7zjg5dcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUodGltZSA9IDApIHtcbiAgaWYgKGdhbWVTdGF0ZS5wYXVzZWQpIHJldHVybjtcbiAgY29uc3QgZGVsdGFUaW1lID0gdGltZSAtIGdhbWVTdGF0ZS5sYXN0VGltZTtcbiAgZ2FtZVN0YXRlLmxhc3RUaW1lID0gdGltZTtcblxuICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgKz0gZGVsdGFUaW1lO1xuICBpZiAoZ2FtZVN0YXRlLmRyb3BDb3VudGVyID4gZ2FtZVN0YXRlLmRyb3BJbnRlcnZhbCkge1xuICAgIHBsYXllckRyb3AoKTtcbiAgfVxuXG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIHRldHJpc0dhbWUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xuICBnYW1lU3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufVxuXG4vLyDjgq3jg7zjg4/jg7Pjg4njg6nplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50LCBnYW1lSW5zdGFuY2UpIHtcbiAgaWYgKGdhbWVJbnN0YW5jZS5pc0dhbWVPdmVyKSByZXR1cm47XG5cbiAgLy8g44Kt44O844Oq44OU44O844OI44KS54Sh6KaWXG4gIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcblxuICBnYW1lSW5zdGFuY2Uua2V5c1tldmVudC5rZXldID0gdHJ1ZTtcblxuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICBnYW1lSW5zdGFuY2UubW92ZVBpZWNlKC0xKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgZ2FtZUluc3RhbmNlLm1vdmVQaWVjZSgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICBnYW1lSW5zdGFuY2UuZHJvcFBpZWNlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgIGdhbWVJbnN0YW5jZS5yb3RhdGVQaWVjZSgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyAnOiAvLyDjgrnjg5rjg7zjgrnjgq3jg7xcbiAgICAgIC8vIOODj+ODvOODieODieODreODg+ODl1xuICAgICAgY29uc29sZS5sb2coJ2hhbmRsZUtleURvd246IOODj+ODvOODieODieODreODg+ODl+OCkuWun+ihjOOBl+OBvuOBmScpO1xuICAgICAgaWYgKCFnYW1lSW5zdGFuY2UucGllY2UpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdoYW5kbGVLZXlEb3duOiDjgqLjgq/jg4bjgqPjg5bjgarjg5Tjg7zjgrnjgYzjgYLjgorjgb7jgZvjgpMnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIOODlOODvOOCueOCkuS4gOeVquS4i+OBvuOBp+iQveOBqOOBmVxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgcGllY2VZID0gZ2FtZUluc3RhbmNlLnBpZWNlLnBvcy55O1xuICAgICAgICBnYW1lSW5zdGFuY2UuZHJvcFBpZWNlKCk7XG4gICAgICAgIC8vIOS9jee9ruOBjOWkieOCj+OCieOBquOBj+OBquOBo+OBn+OCiee1guS6hlxuICAgICAgICBpZiAocGllY2VZID09PSBnYW1lSW5zdGFuY2UucGllY2UucG9zLnkgfHwgZ2FtZUluc3RhbmNlLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlS2V5RG93bjog44OP44O844OJ44OJ44Ot44OD44OX5a6M5LqGJywgeyB5OiBnYW1lSW5zdGFuY2UucGllY2U/LnBvcy55IH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwJzpcbiAgICBjYXNlICdQJzpcbiAgICAgIC8vIOS4gOaZguWBnOatolxuICAgICAgaWYgKGdhbWVJbnN0YW5jZS5nYW1lTG9vcElkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVJbnN0YW5jZS5nYW1lTG9vcElkKTtcbiAgICAgICAgZ2FtZUluc3RhbmNlLmdhbWVMb29wSWQgPSBudWxsO1xuICAgICAgICBnYW1lSW5zdGFuY2UucGF1c2VkID0gdHJ1ZTsgLy8g44Od44O844K654q25oWL44KS6Kit5a6aXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnYW1lSW5zdGFuY2UucGF1c2VkID0gZmFsc2U7IC8vIOODneODvOOCuueKtuaFi+OCkuino+mZpFxuICAgICAgICBnYW1lSW5zdGFuY2UubGFzdFRpbWUgPSAwO1xuICAgICAgICBnYW1lSW5zdGFuY2UuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lSW5zdGFuY2UudXBkYXRlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3InOlxuICAgIGNhc2UgJ1InOlxuICAgICAgLy8g44Oq44K744OD44OIXG4gICAgICBnYW1lSW5zdGFuY2UucmVzZXRHYW1lKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlS2V5VXAoZXZlbnQsIGdhbWVJbnN0YW5jZSkge1xuICBnYW1lSW5zdGFuY2Uua2V5c1tldmVudC5rZXldID0gZmFsc2U7XG59XG5cbi8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOBruioreWumlxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoa2V5RG93bkhhbmRsZXIsIGtleVVwSGFuZGxlcikge1xuICBjb25zb2xlLmxvZygnc2V0dXBFdmVudExpc3RlbmVyczog44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6a44GX44G+44GZJyk7XG5cbiAgLy8g5pei5a2Y44Gu44Kk44OZ44Oz44OI44Oq44K544OK44O844KS5YmK6ZmkXG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcblxuICAvLyDmlrDjgZfjgYTjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLov73liqBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuXG4gIGNvbnNvbGUubG9nKCdzZXR1cEV2ZW50TGlzdGVuZXJzOiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjga7oqK3lrprjgYzlrozkuobjgZfjgb7jgZfjgZ8nKTtcbn1cblxuLy8g44Ky44O844Og5Yid5pyf5YyWXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmScpO1xuXG4gIHRyeSB7XG4gICAgLy8g44Ky44O844Og54q25oWL44KS5Yid5pyf5YyWXG4gICAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmScpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGluaXRHYW1lKCk7XG5cbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfjgq3jg6Pjg7Pjg5Djgrnjga7liJ3mnJ/ljJbjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICB9XG5cbiAgICAvLyDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4hcbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44KS44Oq44K744OD44OI44GX44G+44GZJyk7XG4gICAgcmVzZXRHYW1lKCk7XG5cbiAgICAvLyDjgrLjg7zjg6DnirbmhYvjgpLjg63jgrDjgavlh7rliptcbiAgICBnYW1lU3RhdGUubG9nU3RhdGUoKTtcblxuICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxuICAgIGNvbnNvbGUubG9nKCdpbml0OiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZknKTtcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKFxuICAgICAgKGV2ZW50KSA9PiBoYW5kbGVLZXlEb3duKGV2ZW50LCB7XG4gICAgICAgIGlzR2FtZU92ZXI6IGdhbWVTdGF0ZS5pc0dhbWVPdmVyLFxuICAgICAgICBrZXlzOiBnYW1lU3RhdGUua2V5cyxcbiAgICAgICAgcGllY2U6IGdhbWVTdGF0ZS5waWVjZSxcbiAgICAgICAgZ2FtZUxvb3BJZDogZ2FtZVN0YXRlLmdhbWVMb29wSWQsXG4gICAgICAgIHBhdXNlZDogZ2FtZVN0YXRlLnBhdXNlZCxcbiAgICAgICAgbGFzdFRpbWU6IGdhbWVTdGF0ZS5sYXN0VGltZSxcbiAgICAgICAgLy8gdGV0cmlzR2FtZeOBruODoeOCveODg+ODieOCkuebtOaOpeWPgueFp1xuICAgICAgICBtb3ZlUGllY2U6IHRldHJpc0dhbWUubW92ZVBpZWNlLmJpbmQodGV0cmlzR2FtZSksXG4gICAgICAgIGRyb3BQaWVjZTogdGV0cmlzR2FtZS5kcm9wUGllY2UuYmluZCh0ZXRyaXNHYW1lKSxcbiAgICAgICAgcm90YXRlUGllY2U6IHRldHJpc0dhbWUucm90YXRlUGllY2UuYmluZCh0ZXRyaXNHYW1lKSxcbiAgICAgICAgdXBkYXRlOiB1cGRhdGUsXG4gICAgICAgIHJlc2V0R2FtZTogcmVzZXRHYW1lLFxuICAgICAgfSksXG4gICAgICAoZXZlbnQpID0+IGhhbmRsZUtleVVwKGV2ZW50LCB7XG4gICAgICAgIGtleXM6IGdhbWVTdGF0ZS5rZXlzLFxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOBruWIneacn+WMluOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xuXG4gICAgLy8g5aSW6YOo44GL44KJ5Y+C54Wn44Gn44GN44KL44KI44GG44Gr5b+F6KaB44Gq44KC44Gu44KS6L+U44GZXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIGdhbWVTdGF0ZSxcbiAgICAgIGhhbmRsZUtleURvd24sXG4gICAgICBoYW5kbGVLZXlVcCxcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMsXG4gICAgICBnYW1lU3RhdGUsXG4gICAgICBldmVudE1hbmFnZXIsXG4gICAgICBpbml0R2FtZSxcbiAgICAgIHJlc2V0R2FtZSxcbiAgICAgIHVwZGF0ZSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuY29uc3QgZXhwb3J0cyA9IHtcbiAgaW5pdCxcbiAgcGxheWVyTW92ZSxcbiAgcGxheWVyUm90YXRlLFxuICBwbGF5ZXJEcm9wLFxuICBoYW5kbGVLZXlEb3duLFxuICBoYW5kbGVLZXlVcCxcbiAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgZ2FtZVN0YXRlLFxuICBldmVudE1hbmFnZXIsXG4gIGluaXRHYW1lLFxuICByZXNldEdhbWUsXG4gIHVwZGF0ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7XG5cbi8vIOODhuOCueODiOeUqOOBq+OCsOODreODvOODkOODq+OBq+WFrOmWi1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy50ZXRyaXMgPSB3aW5kb3cudGV0cmlzIHx8IHt9O1xuICB3aW5kb3cudGV0cmlzLmdhbWUgPSB7XG4gICAgaW5pdCxcbiAgICBnYW1lU3RhdGUsXG4gICAgaGFuZGxlS2V5RG93bjogZXhwb3J0cy5oYW5kbGVLZXlEb3duLFxuICAgIGhhbmRsZUtleVVwLFxuICAgIGV2ZW50TWFuYWdlcixcbiAgfTtcbn1cblxuLy8g44Ky44O844Og44Gu44K544K/44O844OI77yI44OW44Op44Km44K25a6f6KGM5pmC44Gu44G/77yJXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIOaXouWtmOOBruOCsuODvOODoOODq+ODvOODl+OCkuOCr+ODquOColxuICAgIGlmIChnYW1lU3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZVN0YXRlLmdhbWVMb29wSWQpO1xuICAgIH1cbiAgICBpbml0R2FtZSgpO1xuICB9KTsgIC8vIOOCpuOCo+ODs+ODieOCpuODquOCteOCpOOCuuaZguOBruWHpueQhlxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcyAmJiBnYW1lU3RhdGUuY3R4KSB7XG4gICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7jgrXjgqTjgrrjgpLlho3oqK3lrppcbiAgICAgIGNhbnZhcy53aWR0aCA9IGdhbWVTdGF0ZS5DT0xTICogZ2FtZVN0YXRlLkJMT0NLO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogZ2FtZVN0YXRlLkJMT0NLO1xuICAgICAgLy8g5YaN5o+P55S7XG4gICAgICBkcmF3KGdhbWVTdGF0ZS5jdHgsIGdhbWVTdGF0ZS5ib2FyZCwgZ2FtZVN0YXRlLnBpZWNlLCBnYW1lU3RhdGUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICog44OG44OI44Oq44K544Ky44O844Og44Gu44Ko44Oz44OI44Oq44O844Od44Kk44Oz44OIXG4gKi9cblxuLy8g44K544K/44Kk44Or44K344O844OI44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8vIOOCsuODvOODoOODouOCuOODpeODvOODq+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vZ2FtZS5qcyc7XG5cbi8vIOODh+ODkOODg+OCsOeUqOOBruOCueOCv+OCpOODq+OCkui/veWKoFxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICNnYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuLy8g44OJ44Kt44Ol44Oh44Oz44OI44Gu6Kqt44G/6L6844G/5a6M5LqG44KS5b6F44Gj44Gm44Ky44O844Og44KS5Yid5pyf5YyWXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCDjgqTjg5njg7Pjg4jjgYznmbrngavjgZfjgb7jgZfjgZ8nKTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBrueKtuaFi+OCkueiuuiqjVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCteOCpOOCujonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K544K/44Kk44Or44K144Kk44K6OicsIGNhbnZhcy5zdHlsZS53aWR0aCwgJ3gnLCBjYW52YXMuc3R5bGUuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign44Kt44Oj44Oz44OQ44K56KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX0NPTlNUQU5UUyIsIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSIsIlNDT1JFX1RBQkxFIiwiU0hBUEVTIiwiQ09MT1JTIiwiR0FNRV9TVEFURVMiLCJJTklUIiwiUExBWUlORyIsIlBBVVNFRCIsIkdBTUVfT1ZFUiIsIkJvYXJkIiwiY29scyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJjbGVhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsImlzSW5zaWRlIiwieCIsInkiLCJpc0VtcHR5Iiwic2V0Q2VsbCIsImdldENlbGwiLCJtZXJnZSIsInBpZWNlIiwibWF0cml4IiwicG9zIiwiY2xlYXJMaW5lcyIsImNsZWFyZWQiLCJmaWx0ZXIiLCJyb3ciLCJldmVyeSIsImNlbGwiLCJ1bnNoaWZ0IiwiUGllY2UiLCJHYW1lIiwidGV0cm9taW5vcyIsImJvYXJkIiwicmVzZXQiLCJzY29yZSIsImxpbmVzIiwibGV2ZWwiLCJpc0dhbWVPdmVyIiwic3Bhd25QaWVjZSIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRyb3BQaWVjZSIsIm1vdmUiLCJoYXNDb2xsaXNpb24iLCJjYWxjdWxhdGVTY29yZSIsIm1vdmVQaWVjZSIsImR4Iiwicm90YXRlUGllY2UiLCJkaXIiLCJvbGQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJyb3RhdGUiLCJfdGhpcyRwaWVjZSIsImxpbmVzQ2xlYXJlZCIsInRhYmxlIiwiX29iamVjdFNwcmVhZCIsImR5IiwiTiIsInJlc3VsdCIsInRldHJpc0dhbWUiLCJkcmF3IiwiY3R4IiwibmV4dFBpZWNlIiwiY29sb3JzIiwiYmxvY2tTaXplIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3TWF0cml4IiwibmV4dFBpZWNlQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5leHRQaWVjZUN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBpZWNlTWF0cml4Iiwic3RhcnRYIiwic3RhcnRZIiwib2Zmc2V0IiwiZm9yRWFjaCIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInNjb3JlRWxlbWVudCIsInRleHRDb250ZW50IiwidXBkYXRlTGluZXNEaXNwbGF5IiwibGluZXNFbGVtZW50IiwidXBkYXRlTGV2ZWxEaXNwbGF5IiwibGV2ZWxFbGVtZW50IiwiZ2FtZVN0YXRlIiwiQkxPQ0siLCJkcm9wQ291bnRlciIsImRyb3BJbnRlcnZhbCIsImxhc3RUaW1lIiwiZ2FtZUxvb3BJZCIsImtleXMiLCJwYXVzZWQiLCJpbml0Qm9hcmQiLCJtYXAiLCJsb2dTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImluaXRHYW1lIiwiY2FudmFzIiwiZXJyb3IiLCJyZXNldEdhbWUiLCJib2FyZEZvckRyYXciLCJwbGF5ZXJEcm9wIiwiYWxlcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBsYXllck1vdmUiLCJwbGF5ZXJSb3RhdGUiLCJ1cGRhdGUiLCJ0aW1lIiwiZGVsdGFUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiZ2FtZUluc3RhbmNlIiwicmVwZWF0Iiwid2FybiIsInBpZWNlWSIsIl9nYW1lSW5zdGFuY2UkcGllY2UiLCJoYW5kbGVLZXlVcCIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsIkVycm9yIiwiYmluZCIsIl9kZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ3aW5kb3ciLCJ0ZXRyaXMiLCJnYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==