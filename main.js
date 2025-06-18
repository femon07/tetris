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


    // 現在のピースと次のピース
    this.piece = null;
    this.nextPiece = null;

    // レベルに応じたドロップ間隔（ミリ秒）
    this.levelSpeeds = [
    1000, // レベル1: 1.0秒
    900, // レベル2: 0.9秒
    800, // レベル3: 0.8秒
    700, // レベル4: 0.7秒
    600, // レベル5: 0.6秒
    500, // レベル6: 0.5秒
    400, // レベル7: 0.4秒
    300, // レベル8: 0.3秒
    200, // レベル9: 0.2秒
    100 // レベル10以降: 0.1秒
    ];

    // レベルアップに必要なライン数
    this.linesPerLevel = 10;

    // 初期化時に最初のピースを生成
    this.reset();
  }

  /**
   * 現在のレベルに応じたドロップ間隔を取得する
   * @returns {number} ドロップ間隔（ミリ秒）
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{ key: "getDropInterval", value:
    function getDropInterval() {
      var levelIndex = Math.min(this.level - 1, this.levelSpeeds.length - 1);
      return this.levelSpeeds[levelIndex];
    }

    /**
     * レベルアップをチェックし、必要に応じてレベルを上げる
     */
    /**
     * 新しいピースを作成する
     * @param {number} index - テトロミノのインデックス
     * @returns {Piece} 新しいピースインスタンス
     */ }, { key: "createPiece", value:
    function createPiece(index) {
      var matrix = this.tetrominos[index % this.tetrominos.length];
      var x = Math.floor((this.board.cols - matrix[0].length) / 2);
      return new _Piece_js__WEBPACK_IMPORTED_MODULE_3__.Piece(matrix, { x: x, y: 0 });
    }

    /**
     * ゲームをリセットする
     */ }, { key: "reset", value:
    function reset() {
      this.board.clear();
      this.piece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      this.level = 1;
      this.lines = 0;
      this.score = 0;
      this.isGameOver = false;
      this.paused = false;
    }

    /**
     * レベルアップをチェックし、必要に応じてレベルを上げる
     */ }, { key: "checkLevelUp", value:
    function checkLevelUp() {
      var newLevel = Math.floor(this.lines / this.linesPerLevel) + 1;
      if (newLevel > this.level) {
        this.level = newLevel;
        return true;
      }
      return false;
    }

    /**
     * ピースを移動させる
     * @param {number} dx - X方向の移動量
     * @returns {boolean} 移動が成功したかどうか
     */ }, { key: "movePiece", value:
    function movePiece(dx) {
      if (!this.piece) return false;

      this.piece.move(dx, 0);

      // 衝突したら元に戻す
      if (this.hasCollision()) {
        this.piece.move(-dx, 0);
        return false;
      }

      return true;
    }

    /**
     * 衝突判定を行う
     * @returns {boolean} 衝突しているかどうか
     */ }, { key: "hasCollision", value:
    function hasCollision() {
      if (!this.piece) return true;

      var _this$piece = this.piece,matrix = _this$piece.matrix,pos = _this$piece.pos;

      for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] !== 0) {
            var boardX = pos.x + x;
            var boardY = pos.y + y;

            // ボードの外側か、すでにブロックがある場合は衝突
            if (
            boardX < 0 ||
            boardX >= this.board.cols ||
            boardY >= this.board.rows ||
            boardY >= 0 && this.board.grid[boardY][boardX] !== 0)
            {
              return true;
            }
          }
        }
      }

      return false;
    }

    /**
     * 新しいピースを生成する
     */ }, { key: "spawnPiece", value:
    function spawnPiece() {
      this.piece = this.nextPiece || this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));

      // 新しいピースが最初から衝突していたらゲームオーバー
      if (this.hasCollision()) {
        this.isGameOver = true;
      }
    }

    /**
     * ピースを1マス下に移動させる
     * @returns {boolean} 移動が成功したかどうか
     */ }, { key: "dropPiece", value:
    function dropPiece() {
      if (!this.piece) return false;

      this.piece.move(0, 1);

      // 衝突したら元の位置に戻して固定
      if (this.hasCollision()) {
        this.piece.move(0, -1);
        this.mergePiece();
        this.clearLines();
        this.spawnPiece();
        return false;
      }

      return true;
    }

    /**
     * 現在のピースをボードに固定する
     */ }, { key: "mergePiece", value:
    function mergePiece() {
      if (!this.piece) return;

      var _this$piece2 = this.piece,matrix = _this$piece2.matrix,pos = _this$piece2.pos;

      for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] !== 0) {
            var boardY = pos.y + y;
            var boardX = pos.x + x;

            if (boardY >= 0 && boardY < this.board.rows && boardX >= 0 && boardX < this.board.cols) {
              this.board.grid[boardY][boardX] = matrix[y][x];
            }
          }
        }
      }
    }

    /**
     * 揃ったラインを消去する
     * @returns {number} 消去したライン数
     */ }, { key: "clearLines", value:
    function clearLines() {
      var linesCleared = 0;

      for (var y = this.board.rows - 1; y >= 0; y--) {
        // ラインがすべて埋まっているかチェック
        var isLineComplete = this.board.grid[y].every(function (cell) {return cell !== 0;});

        if (isLineComplete) {
          // ラインを消去して上にずらす
          this.board.grid.splice(y, 1);
          this.board.grid.unshift(Array(this.board.cols).fill(0));
          linesCleared++;
          this.lines++;

          // スコアを更新
          this.updateScore(linesCleared);

          // レベルアップをチェック
          this.checkLevelUp();

          // 同じ行を再度チェックする（1つ下にずれた行をチェックするため）
          y++;
        }
      }

      return linesCleared;
    }

    /**
     * スコアを更新する
     * @param {number} linesCleared - 消去したライン数
     */ }, { key: "updateScore", value:
    function updateScore(linesCleared) {
      var points = [0, 100, 300, 500, 800]; // 1-4ライン消したときの得点
      this.score += points[Math.min(linesCleared, 4)] * this.level;
    }

    /**
     * ピースを回転させる
     * @param {number} dir - 回転方向 (1: 時計回り, -1: 反時計回り)
     * @returns {boolean} 回転が成功したかどうか
     */ }, { key: "rotatePiece", value:
    function rotatePiece(dir) {
      if (!this.piece) return false;

      var oldMatrix = this.piece.matrix;
      this.piece.rotate(dir);

      // 衝突したら元に戻す
      if (this.hasCollision()) {
        this.piece.matrix = oldMatrix;
        return false;
      }

      return true;
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
/* harmony export */   eventManager: () => (/* binding */ eventManager),
/* harmony export */   gameState: () => (/* binding */ gameState),
/* harmony export */   gameUI: () => (/* binding */ gameUI),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   playerDrop: () => (/* binding */ playerDrop),
/* harmony export */   playerMove: () => (/* binding */ playerMove),
/* harmony export */   playerRotate: () => (/* binding */ playerRotate),
/* harmony export */   resetGame: () => (/* binding */ resetGame),
/* harmony export */   tetrisGame: () => (/* binding */ tetrisGame),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _core_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Game.js */ "./src/core/Game.js");
/* harmony import */ var _constants_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/game.js */ "./src/constants/game.js");
/* harmony import */ var _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/GameUI.js */ "./src/ui/GameUI.js");




// --- グローバル変数と状態管理 ---
var tetrisGame = new _core_Game_js__WEBPACK_IMPORTED_MODULE_0__.Game();
var eventManager = new EventTarget();
var gameState = {
  ctx: null,
  board: { grid: [], rows: _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.ROWS, cols: _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLS },
  piece: null,
  nextPiece: null,
  score: 0,
  lines: 0,
  level: 1,
  dropCounter: 0,
  dropInterval: 1000,
  lastTime: 0,
  gameLoopId: null,
  isGameOver: false,
  paused: false,
  keys: {},

  logState: function logState() {
    console.log('--- 現在のゲーム状態 ---');
    console.log("\u30B9\u30B3\u30A2: ".concat(this.score, ", \u30E9\u30A4\u30F3: ").concat(this.lines, ", \u30EC\u30D9\u30EB: ").concat(this.level));
    console.log("\u30B2\u30FC\u30E0\u30AA\u30FC\u30D0\u30FC: ".concat(this.isGameOver, ", \u4E00\u6642\u505C\u6B62: ").concat(this.paused));
    console.log('--------------------');
  }
};

// --- 描画関連 --- 
function drawMatrix(ctx, matrix, offset, colors, blockSize) {
  if (!matrix || !Array.isArray(matrix)) return;
  matrix.forEach(function (row, y) {
    if (!Array.isArray(row)) return;
    row.forEach(function (value, x) {
      if (value !== 0) {
        ctx.fillStyle = colors[value] || '#000';
        ctx.fillRect((x + offset.x) * blockSize, (y + offset.y) * blockSize, blockSize, blockSize);
      }
    });
  });
}

function draw() {
  if (!gameState.ctx) return;
  var ctx = gameState.ctx,board = gameState.board,piece = gameState.piece,nextPiece = gameState.nextPiece;
  var COLORS = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS,BLOCK_SIZE = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  drawMatrix(ctx, board.grid, { x: 0, y: 0 }, COLORS, BLOCK_SIZE);
  if (piece) {
    drawMatrix(ctx, piece.matrix, piece.pos, COLORS, BLOCK_SIZE);
  }

  // 次のピースの描画
  var nextPieceCanvas = document.getElementById('next-piece-canvas');
  if (nextPieceCanvas && nextPiece) {
    var nextCtx = nextPieceCanvas.getContext('2d');
    nextCtx.clearRect(0, 0, nextCtx.canvas.width, nextCtx.canvas.height);
    var matrix = nextPiece.matrix;
    var x = (nextCtx.canvas.width / BLOCK_SIZE - matrix[0].length) / 2;
    var y = (nextCtx.canvas.height / BLOCK_SIZE - matrix.length) / 2;
    drawMatrix(nextCtx, matrix, { x: x, y: y }, COLORS, BLOCK_SIZE);
  }
}

// --- UI更新 --- 
function updateUI() {
  document.getElementById('score').textContent = gameState.score;
  document.getElementById('lines').textContent = gameState.lines;
  document.getElementById('level').textContent = gameState.level;
}

// --- ゲームロジック --- 
function updateGameState() {
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.level = tetrisGame.level;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board.grid = tetrisGame.board.grid;
}

function playerDrop() {
  if (gameState.isGameOver || gameState.paused) return;
  tetrisGame.dropPiece();
  updateGameState();
  if (gameState.isGameOver) {
    alert('Game Over!');
    cancelAnimationFrame(gameState.gameLoopId);
  }
}

function playerMove(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  tetrisGame.movePiece(dir);
  updateGameState();
}

function playerRotate(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  tetrisGame.rotatePiece(dir);
  updateGameState();
}

// --- ゲームループ ---
function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (gameState.paused) {
    requestAnimationFrame(update);
    return;
  }

  var deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;
  gameState.dropCounter += deltaTime;

  gameState.dropInterval = tetrisGame.getDropInterval();

  if (gameState.dropCounter > gameState.dropInterval) {
    playerDrop();
    gameState.dropCounter = 0;
  }

  draw();
  updateUI();

  if (!gameState.isGameOver) {
    gameState.gameLoopId = requestAnimationFrame(update);
  }
}

// --- 初期化とイベントハンドリング ---
var gameUI = new _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__["default"](gameState, {
  movePiece: playerMove,
  dropPiece: playerDrop,
  rotatePiece: playerRotate,
  resetGame: resetGame
});

function resetGame() {
  tetrisGame.reset();
  updateGameState();
  gameState.paused = false;
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }
  gameState.gameLoopId = requestAnimationFrame(update);
  console.log('ゲームがリセットされました。');
}

function setupEventListeners() {
  gameUI.setupEventListeners(gameUI.onKeyDown.bind(gameUI), gameUI.onKeyUp.bind(gameUI));
  window.addEventListener('resize', function () {
    var canvas = document.getElementById('game');
    if (canvas) {
      canvas.width = gameState.board.cols * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
      canvas.height = gameState.board.rows * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
      draw();
    }
  });
}

function init() {
  try {
    var canvas = document.getElementById('game');
    gameState.ctx = canvas.getContext('2d');
    canvas.width = gameState.board.cols * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
    canvas.height = gameState.board.rows * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

    setupEventListeners();
    resetGame();
    console.log('ゲームの初期化が完了しました。');
  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
  }
}

// --- エクスポートとブラウザ実行 ---
var exports = { init: init, playerMove: playerMove, playerRotate: playerRotate, playerDrop: playerDrop, gameUI: gameUI, gameState: gameState, resetGame: resetGame, update: update };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exports);

if (typeof window !== 'undefined') {
  window.tetris = { game: exports };
  document.addEventListener('DOMContentLoaded', init);
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


/***/ }),

/***/ "./src/ui/GameUI.js":
/*!**************************!*\
  !*** ./src/ui/GameUI.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameUI)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
var GameUI = /*#__PURE__*/function () {
  function GameUI(state, actions) {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameUI);
    this.state = state;
    this.actions = actions;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameUI, [{ key: "onKeyDown", value:

    function onKeyDown(event) {
      var state = this.state,actions = this.actions;
      if (state.isGameOver) return;
      if (event.repeat) return;
      state.keys[event.key] = true;

      switch (event.key) {
        case 'ArrowLeft':
          actions.movePiece(-1);
          break;
        case 'ArrowRight':
          actions.movePiece(1);
          break;
        case 'ArrowDown':
          actions.dropPiece();
          break;
        case 'ArrowUp':
          actions.rotatePiece(1);
          break;
        case ' ':
          while (true) {var _state$piece, _state$piece2;
            var y = (_state$piece = state.piece) === null || _state$piece === void 0 ? void 0 : _state$piece.pos.y;
            actions.dropPiece();
            if (y === ((_state$piece2 = state.piece) === null || _state$piece2 === void 0 ? void 0 : _state$piece2.pos.y) || state.isGameOver) {
              break;
            }
          }
          break;
        case 'p':
        case 'P':
          if (state.gameLoopId) {
            cancelAnimationFrame(state.gameLoopId);
            state.gameLoopId = null;
            state.paused = true;
          } else {
            state.paused = false;
            state.lastTime = 0;
            state.gameLoopId = requestAnimationFrame(actions.update);
          }
          break;
        case 'r':
        case 'R':
          actions.resetGame();
          break;
      }
    } }, { key: "onKeyUp", value:

    function onKeyUp(event) {
      this.state.keys[event.key] = false;
    } }, { key: "setupEventListeners", value:

    function setupEventListeners() {var keyDownHandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.onKeyDown;var keyUpHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.onKeyUp;
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('keyup', keyUpHandler);
      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('keyup', keyUpHandler);
    } }]);}();

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
    // ゲームを開始
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.init)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSTtJQUNULENBQUMsRUFBRSxHQUFHLEVBQUc7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0VBQ047RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNU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QUFNLEdBQUdJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFJTCxNQUFNLEVBQUU7TUFDVmIsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFWSxNQUFNLENBQUNDLEtBQUssRUFBRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO01BQzNEZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVksTUFBTSxDQUFDMkMsS0FBSyxDQUFDMUMsS0FBSyxFQUFFLEdBQUcsRUFBRUQsTUFBTSxDQUFDMkMsS0FBSyxDQUFDekMsTUFBTSxDQUFDO0lBQzdFLENBQUMsTUFBTTtNQUNMZixPQUFPLENBQUMwQyxLQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDbEM7SUFDQTtJQUNBRCw4Q0FBSSxDQUFDLENBQUM7RUFDUixDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO0lBQ2QxQyxPQUFPLENBQUMwQyxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztJQUM1Q2pCLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztFQUM5QztBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQUltQyxJQUFzQyxFQUFFO0VBQzFDckIsTUFBTSxDQUFDSyxNQUFNLEdBQUdMLE1BQU0sQ0FBQ0ssTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ0wsTUFBTSxDQUFDSyxNQUFNLENBQUNILElBQUksR0FBR0EsMENBQUk7QUFDM0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29uc3RhbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIOOCsuODvOODoOOBruWumuaVsOWumue+qVxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xuICBDT0xTOiAxMCwgLy8g44OV44Kj44O844Or44OJ44Gu5bmF77yI44OW44Ot44OD44Kv5pWw77yJXG4gIFJPV1M6IDIwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7pq5jjgZXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgQkxPQ0tfU0laRTogMjAsIC8vIDHjg5bjg63jg4Pjgq/jga7jg5Tjgq/jgrvjg6vjgrXjgqTjgrpcbiAgU0NPUkVfVEFCTEU6IHtcbiAgICAxOiA0MCwgICAvLyAx6KGM5raI44GXXG4gICAgMjogMTAwLCAgLy8gMuihjOa2iOOBl1xuICAgIDM6IDMwMCwgIC8vIDPooYzmtojjgZdcbiAgICA0OiAxMjAwICAvLyA06KGM5raI44GX77yI44OG44OI44Oq44K577yJXG4gIH0sXG4gIFNIQVBFUzogW1xuICAgIC8vIElcbiAgICBbXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIE9cbiAgICBbXG4gICAgICBbMiwgMl0sXG4gICAgICBbMiwgMl1cbiAgICBdLFxuICAgIC8vIFRcbiAgICBbXG4gICAgICBbMCwgMywgMF0sXG4gICAgICBbMywgMywgM10sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIExcbiAgICBbXG4gICAgICBbNCwgMCwgMF0sXG4gICAgICBbNCwgNCwgNF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIEpcbiAgICBbXG4gICAgICBbMCwgMCwgNV0sXG4gICAgICBbNSwgNSwgNV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFpcbiAgICBbXG4gICAgICBbNiwgNiwgMF0sXG4gICAgICBbMCwgNiwgNl0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFNcbiAgICBbXG4gICAgICBbMCwgNywgN10sXG4gICAgICBbNywgNywgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIF0sXG4gIENPTE9SUzogW1xuICAgICcjMDAwMDAwJywgLy8gMDog56m6XG4gICAgJyMwMEZGRkYnLCAvLyAxOiBJICjjgrfjgqLjg7MpXG4gICAgJyNGRkZGMDAnLCAvLyAyOiBPICjpu4ToibIpXG4gICAgJyM4MDAwODAnLCAvLyAzOiBUICjntKspXG4gICAgJyNGRkE1MDAnLCAvLyA0OiBMICjjgqrjg6zjg7PjgrgpXG4gICAgJyMwMDAwRkYnLCAvLyA1OiBKICjpnZIpXG4gICAgJyNGRjAwMDAnLCAvLyA2OiBaICjotaQpXG4gICAgJyMwMDgwMDAnICAvLyA3OiBTICjnt5EpXG4gIF0sXG4gIEdBTUVfU1RBVEVTOiB7XG4gICAgSU5JVDogJ0lOSVQnLFxuICAgIFBMQVlJTkc6ICdQTEFZSU5HJyxcbiAgICBQQVVTRUQ6ICdQQVVTRUQnLFxuICAgIEdBTUVfT1ZFUjogJ0dBTUVfT1ZFUidcbiAgfVxufTtcbiIsIi8vIEJvYXJk44Kv44Op44K5XG4vLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLnrqHnkIbjgajjg63jgrjjg4Pjgq/jgpLmi4XlvZNcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjApIHtcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gIH1cblxuICBpc0luc2lkZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5jb2xzICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ncmlkW3ldW3hdID09PSAwO1xuICB9XG5cbiAgc2V0Q2VsbCh4LCB5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzSW5zaWRlKHgsIHkpKSB0aGlzLmdyaWRbeV1beF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpID8gdGhpcy5ncmlkW3ldW3hdIDogbnVsbDtcbiAgfVxuXG4gIG1lcmdlKHBpZWNlKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcGllY2UubWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChwaWVjZS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICB0aGlzLnNldENlbGwocGllY2UucG9zLnggKyB4LCBwaWVjZS5wb3MueSArIHksIHBpZWNlLm1hdHJpeFt5XVt4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckxpbmVzKCkge1xuICAgIGxldCBjbGVhcmVkID0gMDtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdyaWQuZmlsdGVyKHJvdyA9PiB7XG4gICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gY2VsbCAhPT0gMCkpIHtcbiAgICAgICAgY2xlYXJlZCsrO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICB3aGlsZSAodGhpcy5ncmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgdGhpcy5ncmlkLnVuc2hpZnQoQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjAsIHRldHJvbWlub3MgPSBudWxsKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjb2xzLCByb3dzKTtcbiAgICB0aGlzLnRldHJvbWlub3MgPSB0ZXRyb21pbm9zIHx8IFtcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1syLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgICBbWzAsIDQsIDRdLCBbNCwgNCwgMF1dLFxuICAgICAgW1s1LCA1LCAwXSwgWzAsIDUsIDVdXSxcbiAgICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgICBbWzAsIDAsIDddLCBbNywgNywgN11dLFxuICAgIF07XG4gICAgXG4gICAgLy8g54++5Zyo44Gu44OU44O844K544Go5qyh44Gu44OU44O844K5XG4gICAgdGhpcy5waWVjZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0UGllY2UgPSBudWxsO1xuICAgIFxuICAgIC8vIOODrOODmeODq+OBq+W/nOOBmOOBn+ODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgIHRoaXMubGV2ZWxTcGVlZHMgPSBbXG4gICAgICAxMDAwLCAvLyDjg6zjg5njg6sxOiAxLjDnp5JcbiAgICAgIDkwMCwgIC8vIOODrOODmeODqzI6IDAuOeenklxuICAgICAgODAwLCAgLy8g44Os44OZ44OrMzogMC4456eSXG4gICAgICA3MDAsICAvLyDjg6zjg5njg6s0OiAwLjfnp5JcbiAgICAgIDYwMCwgIC8vIOODrOODmeODqzU6IDAuNuenklxuICAgICAgNTAwLCAgLy8g44Os44OZ44OrNjogMC4156eSXG4gICAgICA0MDAsICAvLyDjg6zjg5njg6s3OiAwLjTnp5JcbiAgICAgIDMwMCwgIC8vIOODrOODmeODqzg6IDAuM+enklxuICAgICAgMjAwLCAgLy8g44Os44OZ44OrOTogMC4y56eSXG4gICAgICAxMDAgICAvLyDjg6zjg5njg6sxMOS7pemZjTogMC4x56eSXG4gICAgXTtcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarjg6njgqTjg7PmlbBcbiAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSAxMDtcbiAgICBcbiAgICAvLyDliJ3mnJ/ljJbmmYLjgavmnIDliJ3jga7jg5Tjg7zjgrnjgpLnlJ/miJBcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgKi9cbiAgZ2V0RHJvcEludGVydmFsKCkge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBNYXRoLm1pbih0aGlzLmxldmVsIC0gMSwgdGhpcy5sZXZlbFNwZWVkcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGhpcy5sZXZlbFNwZWVkc1tsZXZlbEluZGV4XTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr+OBl+OAgeW/heimgeOBq+W/nOOBmOOBpuODrOODmeODq+OCkuS4iuOBkuOCi1xuICAgKi9cbiAgLyoqXG4gICAqIOaWsOOBl+OBhOODlOODvOOCueOCkuS9nOaIkOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDjg4bjg4jjg63jg5/jg47jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybnMge1BpZWNlfSDmlrDjgZfjgYTjg5Tjg7zjgrnjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIGNyZWF0ZVBpZWNlKGluZGV4KSB7XG4gICAgY29uc3QgbWF0cml4ID0gdGhpcy50ZXRyb21pbm9zW2luZGV4ICUgdGhpcy50ZXRyb21pbm9zLmxlbmd0aF07XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKHRoaXMuYm9hcmQuY29scyAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgcmV0dXJuIG5ldyBQaWVjZShtYXRyaXgsIHsgeCwgeTogMCB9KTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMucGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMubGluZXMgPSAwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgqLjg4Pjg5fjgpLjg4Hjgqfjg4Pjgq/jgZfjgIHlv4XopoHjgavlv5zjgZjjgabjg6zjg5njg6vjgpLkuIrjgZLjgotcbiAgICovXG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBjb25zdCBuZXdMZXZlbCA9IE1hdGguZmxvb3IodGhpcy5saW5lcyAvIHRoaXMubGluZXNQZXJMZXZlbCkgKyAxO1xuICAgIGlmIChuZXdMZXZlbCA+IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpLnp7vli5XjgZXjgZvjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gWOaWueWQkeOBruenu+WLlemHj1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g56e75YuV44GM5oiQ5Yqf44GX44Gf44GL44Gp44GG44GLXG4gICAqL1xuICBtb3ZlUGllY2UoZHgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnBpZWNlLm1vdmUoZHgsIDApO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBq+aIu+OBmVxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoLWR4LCAwKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDooZ3nqoHliKTlrprjgpLooYzjgYZcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOihneeqgeOBl+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgaGFzQ29sbGlzaW9uKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g44Oc44O844OJ44Gu5aSW5YG044GL44CB44GZ44Gn44Gr44OW44Ot44OD44Kv44GM44GC44KL5aC05ZCI44Gv6KGd56qBXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYm9hcmRYIDwgMCB8fFxuICAgICAgICAgICAgYm9hcmRYID49IHRoaXMuYm9hcmQuY29scyB8fFxuICAgICAgICAgICAgYm9hcmRZID49IHRoaXMuYm9hcmQucm93cyB8fFxuICAgICAgICAgICAgKGJvYXJkWSA+PSAwICYmIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gIT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS55Sf5oiQ44GZ44KLXG4gICAqL1xuICBzcGF3blBpZWNlKCkge1xuICAgIHRoaXMucGllY2UgPSB0aGlzLm5leHRQaWVjZSB8fCB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIFxuICAgIC8vIOaWsOOBl+OBhOODlOODvOOCueOBjOacgOWIneOBi+OCieihneeqgeOBl+OBpuOBhOOBn+OCieOCsuODvOODoOOCquODvOODkOODvFxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkjHjg57jgrnkuIvjgavnp7vli5XjgZXjgZvjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOenu+WLleOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgZHJvcFBpZWNlKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMucGllY2UubW92ZSgwLCAxKTtcbiAgICBcbiAgICAvLyDooZ3nqoHjgZfjgZ/jgonlhYPjga7kvY3nva7jgavmiLvjgZfjgablm7rlrppcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKDAsIC0xKTtcbiAgICAgIHRoaXMubWVyZ2VQaWVjZSgpO1xuICAgICAgdGhpcy5jbGVhckxpbmVzKCk7XG4gICAgICB0aGlzLnNwYXduUGllY2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg5Tjg7zjgrnjgpLjg5zjg7zjg4njgavlm7rlrprjgZnjgotcbiAgICovXG4gIG1lcmdlUGllY2UoKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBjb25zdCBib2FyZFggPSBwb3MueCArIHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIGJvYXJkWSA8IHRoaXMuYm9hcmQucm93cyAmJiBib2FyZFggPj0gMCAmJiBib2FyZFggPCB0aGlzLmJvYXJkLmNvbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gPSBtYXRyaXhbeV1beF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog5o+D44Gj44Gf44Op44Kk44Oz44KS5raI5Y6744GZ44KLXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKi9cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBsZXQgbGluZXNDbGVhcmVkID0gMDtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gdGhpcy5ib2FyZC5yb3dzIC0gMTsgeSA+PSAwOyB5LS0pIHtcbiAgICAgIC8vIOODqeOCpOODs+OBjOOBmeOBueOBpuWfi+OBvuOBo+OBpuOBhOOCi+OBi+ODgeOCp+ODg+OCr1xuICAgICAgY29uc3QgaXNMaW5lQ29tcGxldGUgPSB0aGlzLmJvYXJkLmdyaWRbeV0uZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKTtcbiAgICAgIFxuICAgICAgaWYgKGlzTGluZUNvbXBsZXRlKSB7XG4gICAgICAgIC8vIOODqeOCpOODs+OCkua2iOWOu+OBl+OBpuS4iuOBq+OBmuOCieOBmVxuICAgICAgICB0aGlzLmJvYXJkLmdyaWQuc3BsaWNlKHksIDEpO1xuICAgICAgICB0aGlzLmJvYXJkLmdyaWQudW5zaGlmdChBcnJheSh0aGlzLmJvYXJkLmNvbHMpLmZpbGwoMCkpO1xuICAgICAgICBsaW5lc0NsZWFyZWQrKztcbiAgICAgICAgdGhpcy5saW5lcysrO1xuICAgICAgICBcbiAgICAgICAgLy8g44K544Kz44Ki44KS5pu05pawXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUobGluZXNDbGVhcmVkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr1xuICAgICAgICB0aGlzLmNoZWNrTGV2ZWxVcCgpO1xuICAgICAgICBcbiAgICAgICAgLy8g5ZCM44GY6KGM44KS5YaN5bqm44OB44Kn44OD44Kv44GZ44KL77yIMeOBpOS4i+OBq+OBmuOCjOOBn+ihjOOCkuODgeOCp+ODg+OCr+OBmeOCi+OBn+OCge+8iVxuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsaW5lc0NsZWFyZWQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKi9cbiAgdXBkYXRlU2NvcmUobGluZXNDbGVhcmVkKSB7XG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDEwMCwgMzAwLCA1MDAsIDgwMF07IC8vIDEtNOODqeOCpOODs+a2iOOBl+OBn+OBqOOBjeOBruW+l+eCuVxuICAgIHRoaXMuc2NvcmUgKz0gcG9pbnRzW01hdGgubWluKGxpbmVzQ2xlYXJlZCwgNCldICogdGhpcy5sZXZlbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkuWbnui7ouOBleOBm+OCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyIC0g5Zue6Lui5pa55ZCRICgxOiDmmYLoqIjlm57jgoosIC0xOiDlj43mmYLoqIjlm57jgoopXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDlm57ou6LjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIHJvdGF0ZVBpZWNlKGRpcikge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IG9sZE1hdHJpeCA9IHRoaXMucGllY2UubWF0cml4O1xuICAgIHRoaXMucGllY2Uucm90YXRlKGRpcik7XG4gICAgXG4gICAgLy8g6KGd56qB44GX44Gf44KJ5YWD44Gr5oi744GZXG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubWF0cml4ID0gb2xkTWF0cml4O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLy8gUGllY2Xjgq/jg6njgrlcbi8vIOODhuODiOODreODn+ODjuOBruW9ouODu+S9jee9ruODu+Wbnui7ouOCkueuoeeQhlxuXG5leHBvcnQgY2xhc3MgUGllY2Uge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHBvcyA9IHsgeDogMCwgeTogMCB9KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5wb3MgPSB7IC4uLnBvcyB9O1xuICB9XG5cbiAgbW92ZShkeCwgZHkpIHtcbiAgICB0aGlzLnBvcy54ICs9IGR4O1xuICAgIHRoaXMucG9zLnkgKz0gZHk7XG4gIH1cblxuICByb3RhdGUoZGlyID0gMSkge1xuICAgIC8vIOaZguioiOWbnuOCijogZGlyPTEsIOWPjeaZguioiOWbnuOCijogZGlyPS0xXG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBOIH0sICgpID0+IEFycmF5KE4pLmZpbGwoMCkpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTjsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE47IHgrKykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgIHJlc3VsdFt4XVtOIC0gMSAtIHldID0gdGhpcy5tYXRyaXhbeV1beF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W04gLSAxIC0geF1beV0gPSB0aGlzLm1hdHJpeFt5XVt4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hdHJpeCA9IHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY29yZS9HYW1lLmpzJztcbmltcG9ydCB7IEdBTUVfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5qcyc7XG5pbXBvcnQgR2FtZVVJIGZyb20gXCIuL3VpL0dhbWVVSS5qc1wiO1xuXG4vLyAtLS0g44Kw44Ot44O844OQ44Or5aSJ5pWw44Go54q25oWL566h55CGIC0tLVxuZXhwb3J0IGxldCB0ZXRyaXNHYW1lID0gbmV3IEdhbWUoKTtcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGUgPSB7XG4gIGN0eDogbnVsbCxcbiAgYm9hcmQ6IHsgZ3JpZDogW10sIHJvd3M6IEdBTUVfQ09OU1RBTlRTLlJPV1MsIGNvbHM6IEdBTUVfQ09OU1RBTlRTLkNPTFMgfSxcbiAgcGllY2U6IG51bGwsXG4gIG5leHRQaWVjZTogbnVsbCxcbiAgc2NvcmU6IDAsXG4gIGxpbmVzOiAwLFxuICBsZXZlbDogMSxcbiAgZHJvcENvdW50ZXI6IDAsXG4gIGRyb3BJbnRlcnZhbDogMTAwMCxcbiAgbGFzdFRpbWU6IDAsXG4gIGdhbWVMb29wSWQ6IG51bGwsXG4gIGlzR2FtZU92ZXI6IGZhbHNlLFxuICBwYXVzZWQ6IGZhbHNlLFxuICBrZXlzOiB7fSxcblxuICBsb2dTdGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnLS0tIOePvuWcqOOBruOCsuODvOODoOeKtuaFiyAtLS0nKTtcbiAgICBjb25zb2xlLmxvZyhg44K544Kz44KiOiAke3RoaXMuc2NvcmV9LCDjg6njgqTjg7M6ICR7dGhpcy5saW5lc30sIOODrOODmeODqzogJHt0aGlzLmxldmVsfWApO1xuICAgIGNvbnNvbGUubG9nKGDjgrLjg7zjg6Djgqrjg7zjg5Djg7w6ICR7dGhpcy5pc0dhbWVPdmVyfSwg5LiA5pmC5YGc5q2iOiAke3RoaXMucGF1c2VkfWApO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuICB9XG59O1xuXG4vLyAtLS0g5o+P55S76Zai6YCjIC0tLSBcbmZ1bmN0aW9uIGRyYXdNYXRyaXgoY3R4LCBtYXRyaXgsIG9mZnNldCwgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgaWYgKCFtYXRyaXggfHwgIUFycmF5LmlzQXJyYXkobWF0cml4KSkgcmV0dXJuO1xuICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHJldHVybjtcbiAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW3ZhbHVlXSB8fCAnIzAwMCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgoeCArIG9mZnNldC54KSAqIGJsb2NrU2l6ZSwgKHkgKyBvZmZzZXQueSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGlmICghZ2FtZVN0YXRlLmN0eCkgcmV0dXJuO1xuICBjb25zdCB7IGN0eCwgYm9hcmQsIHBpZWNlLCBuZXh0UGllY2UgfSA9IGdhbWVTdGF0ZTtcbiAgY29uc3QgeyBDT0xPUlMsIEJMT0NLX1NJWkUgfSA9IEdBTUVfQ09OU1RBTlRTO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gJyNmMGYwZjAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gIGRyYXdNYXRyaXgoY3R4LCBib2FyZC5ncmlkLCB7IHg6IDAsIHk6IDAgfSwgQ09MT1JTLCBCTE9DS19TSVpFKTtcbiAgaWYgKHBpZWNlKSB7XG4gICAgZHJhd01hdHJpeChjdHgsIHBpZWNlLm1hdHJpeCwgcGllY2UucG9zLCBDT0xPUlMsIEJMT0NLX1NJWkUpO1xuICB9XG5cbiAgLy8g5qyh44Gu44OU44O844K544Gu5o+P55S7XG4gIGNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXBpZWNlLWNhbnZhcycpO1xuICBpZiAobmV4dFBpZWNlQ2FudmFzICYmIG5leHRQaWVjZSkge1xuICAgIGNvbnN0IG5leHRDdHggPSBuZXh0UGllY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBuZXh0Q3R4LmNsZWFyUmVjdCgwLCAwLCBuZXh0Q3R4LmNhbnZhcy53aWR0aCwgbmV4dEN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gbmV4dFBpZWNlO1xuICAgIGNvbnN0IHggPSAobmV4dEN0eC5jYW52YXMud2lkdGggLyBCTE9DS19TSVpFIC0gbWF0cml4WzBdLmxlbmd0aCkgLyAyO1xuICAgIGNvbnN0IHkgPSAobmV4dEN0eC5jYW52YXMuaGVpZ2h0IC8gQkxPQ0tfU0laRSAtIG1hdHJpeC5sZW5ndGgpIC8gMjtcbiAgICBkcmF3TWF0cml4KG5leHRDdHgsIG1hdHJpeCwgeyB4LCB5IH0sIENPTE9SUywgQkxPQ0tfU0laRSk7XG4gIH1cbn1cblxuLy8gLS0tIFVJ5pu05pawIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKS50ZXh0Q29udGVudCA9IGdhbWVTdGF0ZS5zY29yZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzJykudGV4dENvbnRlbnQgPSBnYW1lU3RhdGUubGluZXM7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpLnRleHRDb250ZW50ID0gZ2FtZVN0YXRlLmxldmVsO1xufVxuXG4vLyAtLS0g44Ky44O844Og44Ot44K444OD44KvIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZUdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlLnNjb3JlID0gdGV0cmlzR2FtZS5zY29yZTtcbiAgZ2FtZVN0YXRlLmxpbmVzID0gdGV0cmlzR2FtZS5saW5lcztcbiAgZ2FtZVN0YXRlLmxldmVsID0gdGV0cmlzR2FtZS5sZXZlbDtcbiAgZ2FtZVN0YXRlLmlzR2FtZU92ZXIgPSB0ZXRyaXNHYW1lLmlzR2FtZU92ZXI7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5uZXh0UGllY2UgPSB0ZXRyaXNHYW1lLm5leHRQaWVjZTtcbiAgZ2FtZVN0YXRlLmJvYXJkLmdyaWQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIgfHwgZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLmRyb3BQaWVjZSgpO1xuICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyUm90YXRlKGRpcikge1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIgfHwgZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlKGRpcik7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xufVxuXG4vLyAtLS0g44Ky44O844Og44Or44O844OXIC0tLVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lID0gMCkge1xuICBpZiAoZ2FtZVN0YXRlLnBhdXNlZCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSBnYW1lU3RhdGUubGFzdFRpbWU7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IHRpbWU7XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciArPSBkZWx0YVRpbWU7XG5cbiAgZ2FtZVN0YXRlLmRyb3BJbnRlcnZhbCA9IHRldHJpc0dhbWUuZ2V0RHJvcEludGVydmFsKCk7XG5cbiAgaWYgKGdhbWVTdGF0ZS5kcm9wQ291bnRlciA+IGdhbWVTdGF0ZS5kcm9wSW50ZXJ2YWwpIHtcbiAgICBwbGF5ZXJEcm9wKCk7XG4gICAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgfVxuXG4gIGRyYXcoKTtcbiAgdXBkYXRlVUkoKTtcblxuICBpZiAoIWdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgfVxufVxuXG4vLyAtLS0g5Yid5pyf5YyW44Go44Kk44OZ44Oz44OI44OP44Oz44OJ44Oq44Oz44KwIC0tLVxuZXhwb3J0IGNvbnN0IGdhbWVVSSA9IG5ldyBHYW1lVUkoZ2FtZVN0YXRlLCB7XG4gIG1vdmVQaWVjZTogcGxheWVyTW92ZSxcbiAgZHJvcFBpZWNlOiBwbGF5ZXJEcm9wLFxuICByb3RhdGVQaWVjZTogcGxheWVyUm90YXRlLFxuICByZXNldEdhbWVcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICB0ZXRyaXNHYW1lLnJlc2V0KCk7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICBnYW1lU3RhdGUucGF1c2VkID0gZmFsc2U7XG4gIGlmIChnYW1lU3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgfVxuICBnYW1lU3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICBjb25zb2xlLmxvZygn44Ky44O844Og44GM44Oq44K744OD44OI44GV44KM44G+44GX44Gf44CCJyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzKGdhbWVVSS5vbktleURvd24uYmluZChnYW1lVUkpLCBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSkpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLmJvYXJkLmNvbHMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ib2FyZC5yb3dzICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgICAgIGRyYXcoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGdhbWVTdGF0ZS5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuYm9hcmQuY29scyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ib2FyZC5yb3dzICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcblxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXNldEdhbWUoKTtcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0g44Ko44Kv44K544Od44O844OI44Go44OW44Op44Km44K25a6f6KGMIC0tLVxuY29uc3QgZXhwb3J0cyA9IHsgaW5pdCwgcGxheWVyTW92ZSwgcGxheWVyUm90YXRlLCBwbGF5ZXJEcm9wLCBnYW1lVUksIGdhbWVTdGF0ZSwgcmVzZXRHYW1lLCB1cGRhdGUgfTtcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cudGV0cmlzID0geyBnYW1lOiBleHBvcnRzIH07XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIHtcbiAgY29uc3RydWN0b3Ioc3RhdGUsIGFjdGlvbnMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSB0aGlzO1xuICAgIGlmIChzdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICAgIHN0YXRlLmtleXNbZXZlbnQua2V5XSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBhY3Rpb25zLmRyb3BQaWVjZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBhY3Rpb25zLnJvdGF0ZVBpZWNlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHkgPSBzdGF0ZS5waWVjZT8ucG9zLnk7XG4gICAgICAgICAgYWN0aW9ucy5kcm9wUGllY2UoKTtcbiAgICAgICAgICBpZiAoeSA9PT0gc3RhdGUucGllY2U/LnBvcy55IHx8IHN0YXRlLmlzR2FtZU92ZXIpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3AnOlxuICAgICAgY2FzZSAnUCc6XG4gICAgICAgIGlmIChzdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgICAgICAgc3RhdGUuZ2FtZUxvb3BJZCA9IG51bGw7XG4gICAgICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5sYXN0VGltZSA9IDA7XG4gICAgICAgICAgc3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhY3Rpb25zLnVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyJzpcbiAgICAgIGNhc2UgJ1InOlxuICAgICAgICBhY3Rpb25zLnJlc2V0R2FtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbktleVVwKGV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSBmYWxzZTtcbiAgfVxuXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoa2V5RG93bkhhbmRsZXIgPSB0aGlzLm9uS2V5RG93biwga2V5VXBIYW5kbGVyID0gdGhpcy5vbktleVVwKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICog44OG44OI44Oq44K544Ky44O844Og44Gu44Ko44Oz44OI44Oq44O844Od44Kk44Oz44OIXG4gKi9cblxuLy8g44K544K/44Kk44Or44K344O844OI44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8vIOOCsuODvOODoOODouOCuOODpeODvOODq+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vZ2FtZS5qcyc7XG5cbi8vIOODh+ODkOODg+OCsOeUqOOBruOCueOCv+OCpOODq+OCkui/veWKoFxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICNnYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuLy8g44OJ44Kt44Ol44Oh44Oz44OI44Gu6Kqt44G/6L6844G/5a6M5LqG44KS5b6F44Gj44Gm44Ky44O844Og44KS5Yid5pyf5YyWXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCDjgqTjg5njg7Pjg4jjgYznmbrngavjgZfjgb7jgZfjgZ8nKTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBrueKtuaFi+OCkueiuuiqjVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCteOCpOOCujonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K544K/44Kk44Or44K144Kk44K6OicsIGNhbnZhcy5zdHlsZS53aWR0aCwgJ3gnLCBjYW52YXMuc3R5bGUuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign44Kt44Oj44Oz44OQ44K56KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgfVxuICAgIC8vIOOCsuODvOODoOOCkumWi+Wni1xuICAgIGluaXQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIGFsZXJ0KCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgrPjg7Pjgr3jg7zjg6vjgpLnorroqo3jgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgfVxufSk7XG5cbi8vIOmWi+eZuueUqDog44Kw44Ot44O844OQ44Or5ZCN5YmN56m66ZaT44Gr44Ko44Kv44K544Od44O844OIXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgd2luZG93LnRldHJpcyA9IHdpbmRvdy50ZXRyaXMgfHwge307XG4gIHdpbmRvdy50ZXRyaXMuaW5pdCA9IGluaXQ7XG59XG4iXSwibmFtZXMiOlsiR0FNRV9DT05TVEFOVFMiLCJDT0xTIiwiUk9XUyIsIkJMT0NLX1NJWkUiLCJTQ09SRV9UQUJMRSIsIlNIQVBFUyIsIkNPTE9SUyIsIkdBTUVfU1RBVEVTIiwiSU5JVCIsIlBMQVlJTkciLCJQQVVTRUQiLCJHQU1FX09WRVIiLCJCb2FyZCIsImNvbHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJyb3dzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2xlYXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJpc0luc2lkZSIsIngiLCJ5IiwiaXNFbXB0eSIsInNldENlbGwiLCJnZXRDZWxsIiwibWVyZ2UiLCJwaWVjZSIsIm1hdHJpeCIsInBvcyIsImNsZWFyTGluZXMiLCJjbGVhcmVkIiwiZmlsdGVyIiwicm93IiwiZXZlcnkiLCJjZWxsIiwidW5zaGlmdCIsIlBpZWNlIiwiR2FtZSIsInRldHJvbWlub3MiLCJib2FyZCIsIm5leHRQaWVjZSIsImxldmVsU3BlZWRzIiwibGluZXNQZXJMZXZlbCIsInJlc2V0IiwiZ2V0RHJvcEludGVydmFsIiwibGV2ZWxJbmRleCIsIk1hdGgiLCJtaW4iLCJsZXZlbCIsImNyZWF0ZVBpZWNlIiwiaW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImxpbmVzIiwic2NvcmUiLCJpc0dhbWVPdmVyIiwicGF1c2VkIiwiY2hlY2tMZXZlbFVwIiwibmV3TGV2ZWwiLCJtb3ZlUGllY2UiLCJkeCIsIm1vdmUiLCJoYXNDb2xsaXNpb24iLCJfdGhpcyRwaWVjZSIsImJvYXJkWCIsImJvYXJkWSIsInNwYXduUGllY2UiLCJkcm9wUGllY2UiLCJtZXJnZVBpZWNlIiwiX3RoaXMkcGllY2UyIiwibGluZXNDbGVhcmVkIiwiaXNMaW5lQ29tcGxldGUiLCJzcGxpY2UiLCJ1cGRhdGVTY29yZSIsInBvaW50cyIsInJvdGF0ZVBpZWNlIiwiZGlyIiwib2xkTWF0cml4Iiwicm90YXRlIiwiX29iamVjdFNwcmVhZCIsImR5IiwiTiIsInJlc3VsdCIsIkdhbWVVSSIsInRldHJpc0dhbWUiLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImdhbWVTdGF0ZSIsImN0eCIsImRyb3BDb3VudGVyIiwiZHJvcEludGVydmFsIiwibGFzdFRpbWUiLCJnYW1lTG9vcElkIiwia2V5cyIsImxvZ1N0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImRyYXdNYXRyaXgiLCJvZmZzZXQiLCJjb2xvcnMiLCJibG9ja1NpemUiLCJpc0FycmF5IiwiZm9yRWFjaCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhdyIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwibmV4dFBpZWNlQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5leHRDdHgiLCJnZXRDb250ZXh0IiwidXBkYXRlVUkiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUdhbWVTdGF0ZSIsInBsYXllckRyb3AiLCJhbGVydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicGxheWVyTW92ZSIsInBsYXllclJvdGF0ZSIsInVwZGF0ZSIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWx0YVRpbWUiLCJnYW1lVUkiLCJyZXNldEdhbWUiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwib25LZXlEb3duIiwiYmluZCIsIm9uS2V5VXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImVycm9yIiwiZXhwb3J0cyIsInRldHJpcyIsImdhbWUiLCJzdGF0ZSIsImFjdGlvbnMiLCJldmVudCIsInJlcGVhdCIsIl9zdGF0ZSRwaWVjZSIsIl9zdGF0ZSRwaWVjZTIiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==