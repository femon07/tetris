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
/* harmony import */ var _core_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Game.js */ "./src/core/Game.js");
/* harmony import */ var _constants_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/game.js */ "./src/constants/game.js");



// ゲームの状態とロジックをカプセル化
var tetrisGame = new _core_Game_js__WEBPACK_IMPORTED_MODULE_0__.Game();

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
  BLOCK: _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE, // 各ブロックのサイズ（ピクセル）
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
  canvas.width = gameState.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = gameState.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

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
  draw(gameState.ctx, boardForDraw, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
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
  draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);

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
  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
}

// ピースを回転する関数
function playerRotate(dir) {
  console.log('playerRotate: ピースを回転します', { dir: dir });
  if (gameState.isGameOver) return;
  tetrisGame.rotatePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
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

  draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
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
    return {
      canvas: canvas,
      gameState: gameState,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      setupEventListeners: setupEventListeners,
      eventManager: eventManager,
      initGame: initGame,
      resetGame: resetGame,
      update: update
    };
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
      draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSTtJQUNULENBQUMsRUFBRSxHQUFHLEVBQUc7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0VBQ047RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNU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RUFDUixDQUFDLENBQUMsT0FBT3pCLEtBQUssRUFBRTtJQUNkTixPQUFPLENBQUNNLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDSSxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJZ0MsSUFBc0MsRUFBRTtFQUMxQ1AsTUFBTSxDQUFDQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ0QsTUFBTSxDQUFDQyxNQUFNLENBQUNMLElBQUksR0FBR0EsMENBQUk7QUFDM0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29uc3RhbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICBpZiAoIShhIGluc3RhbmNlb2YgbikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG59XG5leHBvcnQgeyBfY2xhc3NDYWxsQ2hlY2sgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgdmFyIG8gPSByW3RdO1xuICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0b1Byb3BlcnR5S2V5KG8ua2V5KSwgbyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhlLCByLCB0KSB7XG4gIHJldHVybiByICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLCByKSwgdCAmJiBfZGVmaW5lUHJvcGVydGllcyhlLCB0KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogITFcbiAgfSksIGU7XG59XG5leHBvcnQgeyBfY3JlYXRlQ2xhc3MgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gIHJldHVybiAociA9IHRvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5leHBvcnQgeyBfZGVmaW5lUHJvcGVydHkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmV4cG9ydCB7IHRvUHJpbWl0aXZlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7XG59XG5leHBvcnQgeyB0b1Byb3BlcnR5S2V5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZXhwb3J0IHsgX3R5cGVvZiBhcyBkZWZhdWx0IH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyDjgrLjg7zjg6Djga7lrprmlbDlrprnvqlcbmV4cG9ydCBjb25zdCBHQU1FX0NPTlNUQU5UUyA9IHtcbiAgQ09MUzogMTAsIC8vIOODleOCo+ODvOODq+ODieOBruW5he+8iOODluODreODg+OCr+aVsO+8iVxuICBST1dTOiAyMCwgLy8g44OV44Kj44O844Or44OJ44Gu6auY44GV77yI44OW44Ot44OD44Kv5pWw77yJXG4gIEJMT0NLX1NJWkU6IDIwLCAvLyAx44OW44Ot44OD44Kv44Gu44OU44Kv44K744Or44K144Kk44K6XG4gIFNDT1JFX1RBQkxFOiB7XG4gICAgMTogNDAsICAgLy8gMeihjOa2iOOBl1xuICAgIDI6IDEwMCwgIC8vIDLooYzmtojjgZdcbiAgICAzOiAzMDAsICAvLyAz6KGM5raI44GXXG4gICAgNDogMTIwMCAgLy8gNOihjOa2iOOBl++8iOODhuODiOODquOCue+8iVxuICB9LFxuICBTSEFQRVM6IFtcbiAgICAvLyBJXG4gICAgW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBPXG4gICAgW1xuICAgICAgWzIsIDJdLFxuICAgICAgWzIsIDJdXG4gICAgXSxcbiAgICAvLyBUXG4gICAgW1xuICAgICAgWzAsIDMsIDBdLFxuICAgICAgWzMsIDMsIDNdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBMXG4gICAgW1xuICAgICAgWzQsIDAsIDBdLFxuICAgICAgWzQsIDQsIDRdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBKXG4gICAgW1xuICAgICAgWzAsIDAsIDVdLFxuICAgICAgWzUsIDUsIDVdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBaXG4gICAgW1xuICAgICAgWzYsIDYsIDBdLFxuICAgICAgWzAsIDYsIDZdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBTXG4gICAgW1xuICAgICAgWzAsIDcsIDddLFxuICAgICAgWzcsIDcsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICBdLFxuICBDT0xPUlM6IFtcbiAgICAnIzAwMDAwMCcsIC8vIDA6IOepulxuICAgICcjMDBGRkZGJywgLy8gMTogSSAo44K344Ki44OzKVxuICAgICcjRkZGRjAwJywgLy8gMjogTyAo6buE6ImyKVxuICAgICcjODAwMDgwJywgLy8gMzogVCAo57SrKVxuICAgICcjRkZBNTAwJywgLy8gNDogTCAo44Kq44Os44Oz44K4KVxuICAgICcjMDAwMEZGJywgLy8gNTogSiAo6Z2SKVxuICAgICcjRkYwMDAwJywgLy8gNjogWiAo6LWkKVxuICAgICcjMDA4MDAwJyAgLy8gNzogUyAo57eRKVxuICBdLFxuICBHQU1FX1NUQVRFUzoge1xuICAgIElOSVQ6ICdJTklUJyxcbiAgICBQTEFZSU5HOiAnUExBWUlORycsXG4gICAgUEFVU0VEOiAnUEFVU0VEJyxcbiAgICBHQU1FX09WRVI6ICdHQU1FX09WRVInXG4gIH1cbn07XG4iLCIvLyBCb2FyZOOCr+ODqeOCuVxuLy8g44OG44OI44Oq44K544Gu55uk6Z2i566h55CG44Go44Ot44K444OD44Kv44KS5ouF5b2TXG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwKSB7XG4gICAgdGhpcy5jb2xzID0gY29scztcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucm93cyB9LCAoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xuICB9XG5cbiAgaXNJbnNpZGUoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuY29scyAmJiB5ID49IDAgJiYgeSA8IHRoaXMucm93cztcbiAgfVxuXG4gIGlzRW1wdHkoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpICYmIHRoaXMuZ3JpZFt5XVt4XSA9PT0gMDtcbiAgfVxuXG4gIHNldENlbGwoeCwgeSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc0luc2lkZSh4LCB5KSkgdGhpcy5ncmlkW3ldW3hdID0gdmFsdWU7XG4gIH1cblxuICBnZXRDZWxsKHgsIHkpIHtcbiAgICByZXR1cm4gdGhpcy5pc0luc2lkZSh4LCB5KSA/IHRoaXMuZ3JpZFt5XVt4XSA6IG51bGw7XG4gIH1cblxuICBtZXJnZShwaWVjZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcGllY2UubWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBpZWNlLm1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocGllY2UubWF0cml4W3ldW3hdKSB7XG4gICAgICAgICAgdGhpcy5zZXRDZWxsKHBpZWNlLnBvcy54ICsgeCwgcGllY2UucG9zLnkgKyB5LCBwaWVjZS5tYXRyaXhbeV1beF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBsZXQgY2xlYXJlZCA9IDA7XG4gICAgdGhpcy5ncmlkID0gdGhpcy5ncmlkLmZpbHRlcihyb3cgPT4ge1xuICAgICAgaWYgKHJvdy5ldmVyeShjZWxsID0+IGNlbGwgIT09IDApKSB7XG4gICAgICAgIGNsZWFyZWQrKztcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgd2hpbGUgKHRoaXMuZ3JpZC5sZW5ndGggPCB0aGlzLnJvd3MpIHtcbiAgICAgIHRoaXMuZ3JpZC51bnNoaWZ0KEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gICAgfVxuICAgIHJldHVybiBjbGVhcmVkO1xuICB9XG59XG4iLCIvLyBHYW1l44Kv44Op44K5XG4vLyDjgrLjg7zjg6DlhajkvZPjga7nirbmhYvnrqHnkIbjgajpgLLooYzjgpLmi4XlvZNcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9Cb2FyZC5qcyc7XG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4vUGllY2UuanMnO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwLCB0ZXRyb21pbm9zID0gbnVsbCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoY29scywgcm93cyk7XG4gICAgdGhpcy50ZXRyb21pbm9zID0gdGV0cm9taW5vcyB8fCBbXG4gICAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICAgIFtbMiwgMl0sIFsyLCAyXV0sXG4gICAgICBbWzAsIDMsIDBdLCBbMywgMywgM11dLFxuICAgICAgW1swLCA0LCA0XSwgWzQsIDQsIDBdXSxcbiAgICAgIFtbNSwgNSwgMF0sIFswLCA1LCA1XV0sXG4gICAgICBbWzYsIDAsIDBdLCBbNiwgNiwgNl1dLFxuICAgICAgW1swLCAwLCA3XSwgWzcsIDcsIDddXSxcbiAgICBdO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMubGluZXMgPSAwO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc3Bhd25QaWVjZSgpO1xuICB9XG5cbiAgc3Bhd25QaWVjZSgpIHtcbiAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKTtcbiAgICB0aGlzLnBpZWNlID0gbmV3IFBpZWNlKHRoaXMudGV0cm9taW5vc1tpZHhdLCB7IHg6IDMsIHk6IDAgfSk7XG4gIH1cblxuICBkcm9wUGllY2UoKSB7XG4gICAgdGhpcy5waWVjZS5tb3ZlKDAsIDEpO1xuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoMCwgLTEpO1xuICAgICAgdGhpcy5ib2FyZC5tZXJnZSh0aGlzLnBpZWNlKTtcbiAgICAgIGNvbnN0IGNsZWFyZWQgPSB0aGlzLmJvYXJkLmNsZWFyTGluZXMoKTtcbiAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShjbGVhcmVkKTtcbiAgICAgIHRoaXMubGluZXMgKz0gY2xlYXJlZDtcbiAgICAgIHRoaXMuc3Bhd25QaWVjZSgpO1xuICAgICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlUGllY2UoZHgpIHtcbiAgICB0aGlzLnBpZWNlLm1vdmUoZHgsIDApO1xuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoLWR4LCAwKTtcbiAgICB9XG4gIH1cblxuICByb3RhdGVQaWVjZShkaXIpIHtcbiAgICBjb25zdCBvbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucGllY2UubWF0cml4KSk7XG4gICAgdGhpcy5waWVjZS5yb3RhdGUoZGlyKTtcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tYXRyaXggPSBvbGQ7XG4gICAgfVxuICB9XG5cbiAgaGFzQ29sbGlzaW9uKCkge1xuICAgIGNvbnN0IHsgbWF0cml4LCBwb3MgfSA9IHRoaXMucGllY2U7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBtYXRyaXhbeV1beF0gJiZcbiAgICAgICAgICAoIXRoaXMuYm9hcmQuaXNJbnNpZGUocG9zLnggKyB4LCBwb3MueSArIHkpIHx8XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmdldENlbGwocG9zLnggKyB4LCBwb3MueSArIHkpICE9PSAwKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpIHtcbiAgICBjb25zdCB0YWJsZSA9IHsgMTogNDAsIDI6IDEwMCwgMzogMzAwLCA0OiAxMjAwIH07XG4gICAgcmV0dXJuICh0YWJsZVtsaW5lc0NsZWFyZWRdIHx8IDApICogdGhpcy5sZXZlbDtcbiAgfVxufVxuIiwiLy8gUGllY2Xjgq/jg6njgrlcbi8vIOODhuODiOODreODn+ODjuOBruW9ouODu+S9jee9ruODu+Wbnui7ouOCkueuoeeQhlxuXG5leHBvcnQgY2xhc3MgUGllY2Uge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHBvcyA9IHsgeDogMCwgeTogMCB9KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5wb3MgPSB7IC4uLnBvcyB9O1xuICB9XG5cbiAgbW92ZShkeCwgZHkpIHtcbiAgICB0aGlzLnBvcy54ICs9IGR4O1xuICAgIHRoaXMucG9zLnkgKz0gZHk7XG4gIH1cblxuICByb3RhdGUoZGlyID0gMSkge1xuICAgIC8vIOaZguioiOWbnuOCijogZGlyPTEsIOWPjeaZguioiOWbnuOCijogZGlyPS0xXG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBOIH0sICgpID0+IEFycmF5KE4pLmZpbGwoMCkpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTjsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE47IHgrKykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgIHJlc3VsdFt4XVtOIC0gMSAtIHldID0gdGhpcy5tYXRyaXhbeV1beF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W04gLSAxIC0geF1beV0gPSB0aGlzLm1hdHJpeFt5XVt4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hdHJpeCA9IHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY29yZS9HYW1lLmpzJztcbmltcG9ydCB7IEdBTUVfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5qcyc7XG5cbi8vIOOCsuODvOODoOOBrueKtuaFi+OBqOODreOCuOODg+OCr+OCkuOCq+ODl+OCu+ODq+WMllxuZXhwb3J0IGNvbnN0IHRldHJpc0dhbWUgPSBuZXcgR2FtZSgpO1xuXG4vLyDjg6zjg7Pjg4Djg6rjg7PjgrDplqLpgKPjga7jg5jjg6vjg5Hjg7zplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGN0eCwgYm9hcmQsIHBpZWNlLCBuZXh0UGllY2UsIGNvbG9ycywgYmxvY2tTaXplKSB7XG4gIC8vIOiDjOaZr+OCkuOCr+ODquOColxuICBjdHguZmlsbFN0eWxlID0gJyNmMGYwZjAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgYm9hcmQuY29scyAqIGJsb2NrU2l6ZSwgYm9hcmQucm93cyAqIGJsb2NrU2l6ZSk7XG5cbiAgLy8g44Oc44O844OJ44KS5o+P55S7XG4gIGRyYXdNYXRyaXgoY3R4LCBib2FyZC5ncmlkLCB7IHg6IDAsIHk6IDAgfSwgY29sb3JzLCBibG9ja1NpemUpO1xuXG4gIC8vIOePvuWcqOOBruODlOODvOOCueOCkuaPj+eUu1xuICBpZiAocGllY2UpIHtcbiAgICBkcmF3TWF0cml4KGN0eCwgcGllY2UubWF0cml4LCBwaWVjZS5wb3MsIGNvbG9ycywgYmxvY2tTaXplKTtcbiAgfVxuXG4gIC8vIOasoeOBruODlOODvOOCueOCkuaPj+eUu1xuICBpZiAobmV4dFBpZWNlKSB7XG4gICAgY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGllY2UtY2FudmFzJyk7XG4gICAgaWYgKG5leHRQaWVjZUNhbnZhcykge1xuICAgICAgY29uc3QgbmV4dFBpZWNlQ3R4ID0gbmV4dFBpZWNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAobmV4dFBpZWNlQ3R4KSB7XG4gICAgICAgIG5leHRQaWVjZUN0eC5jbGVhclJlY3QoMCwgMCwgbmV4dFBpZWNlQ2FudmFzLndpZHRoLCBuZXh0UGllY2VDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgcGllY2VNYXRyaXggPSBuZXh0UGllY2UubWF0cml4O1xuICAgICAgICBjb25zdCBzdGFydFggPSAobmV4dFBpZWNlQ2FudmFzLndpZHRoIC8gMikgLSAocGllY2VNYXRyaXhbMF0ubGVuZ3RoICogYmxvY2tTaXplIC8gMik7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IChuZXh0UGllY2VDYW52YXMuaGVpZ2h0IC8gMikgLSAocGllY2VNYXRyaXgubGVuZ3RoICogYmxvY2tTaXplIC8gMik7XG5cbiAgICAgICAgZHJhd01hdHJpeChuZXh0UGllY2VDdHgsIHBpZWNlTWF0cml4LCB7IHg6IHN0YXJ0WCAvIGJsb2NrU2l6ZSwgeTogc3RhcnRZIC8gYmxvY2tTaXplIH0sIGNvbG9ycywgYmxvY2tTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdNYXRyaXgoY3R4LCBtYXRyaXgsIG9mZnNldCwgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbdmFsdWVdO1xuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgKHggKyBvZmZzZXQueCkgKiBibG9ja1NpemUsXG4gICAgICAgICAgKHkgKyBvZmZzZXQueSkgKiBibG9ja1NpemUsXG4gICAgICAgICAgYmxvY2tTaXplLFxuICAgICAgICAgIGJsb2NrU2l6ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gVUnmm7TmlrDplqLpgKPjga7jg5jjg6vjg5Hjg7zplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTY29yZURpc3BsYXkoc2NvcmUpIHtcbiAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gIGlmIChzY29yZUVsZW1lbnQpIHtcbiAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGluZXNEaXNwbGF5KGxpbmVzKSB7XG4gIGNvbnN0IGxpbmVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lcycpO1xuICBpZiAobGluZXNFbGVtZW50KSB7XG4gICAgbGluZXNFbGVtZW50LnRleHRDb250ZW50ID0gbGluZXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxldmVsRGlzcGxheShsZXZlbCkge1xuICBjb25zdCBsZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbiAgaWYgKGxldmVsRWxlbWVudCkge1xuICAgIGxldmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGxldmVsO1xuICB9XG59XG5cbi8vIOOCsuODvOODoOOBrueKtuaFi+OCkueuoeeQhuOBmeOCi+OCquODluOCuOOCp+OCr+ODiFxuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZSA9IHtcbiAgLy8g44Ky44O844Og44Gu5Z+65pys6Kit5a6aXG4gIENPTFM6IDEwLFxuICBST1dTOiAyMCxcbiAgQkxPQ0s6IEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUsIC8vIOWQhOODluODreODg+OCr+OBruOCteOCpOOCuu+8iOODlOOCr+OCu+ODq++8iVxuICAvLyDjgrLjg7zjg6Djga7nirbmhYvlpInmlbBcbiAgYm9hcmQ6IFtdLFxuICBwaWVjZTogbnVsbCxcbiAgbmV4dFBpZWNlOiBudWxsLFxuICBzY29yZTogMCxcbiAgbGluZXM6IDAsXG4gIGxldmVsOiAxLFxuICBkcm9wQ291bnRlcjogMCxcbiAgZHJvcEludGVydmFsOiAxMDAwLCAvLyDjg5Tjg7zjgrnjgYzoh6rli5XjgafokL3jgaHjgovplpPpmpTvvIjjg5/jg6rnp5LvvIlcbiAgbGFzdFRpbWU6IDAsXG4gIGdhbWVMb29wSWQ6IG51bGwsXG4gIGlzR2FtZU92ZXI6IGZhbHNlLFxuICAvLyDjgq3jg7zlhaXlipvjga7nirbmhYvnrqHnkIZcbiAga2V5czoge30sXG4gIC8vIOOCsuODvOODoOOBruS4gOaZguWBnOatoueKtuaFi1xuICBwYXVzZWQ6IGZhbHNlLFxuXG4gIC8vIOOCsuODvOODoOOBrueKtuaFi+OCkuWIneacn+WMluOBmeOCi+mWouaVsFxuICBpbml0Qm9hcmQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KHRoaXMuUk9XUykuZmlsbCgwKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5DT0xTKS5maWxsKDApKTtcbiAgfSxcblxuICAvLyDjg63jgrDlh7rlipvplqLmlbBcbiAgbG9nU3RhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgR2FtZSBTdGF0ZTonLCB7XG4gICAgICBzY29yZTogdGhpcy5zY29yZSxcbiAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBpc0dhbWVPdmVyOiB0aGlzLmlzR2FtZU92ZXIsXG4gICAgICBwaWVjZTogdGhpcy5waWVjZSA/IHsgbWF0cml4OiB0aGlzLnBpZWNlLm1hdHJpeCwgcG9zOiB0aGlzLnBpZWNlLnBvcyB9IDogbnVsbCxcbiAgICAgIG5leHRQaWVjZTogdGhpcy5uZXh0UGllY2UgPyB7IG1hdHJpeDogdGhpcy5uZXh0UGllY2UubWF0cml4IH0gOiBudWxsLFxuICAgIH0pO1xuICB9XG59O1xuXG4vLyDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7kvZzmiJBcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcblxuLy8g44Ky44O844Og44KS5Yid5pyf5YyW44GZ44KL6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gIGNvbnNvbGUubG9nKCdpbml0R2FtZTog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gIGlmICghY2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcignQ2FudmFz6KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIOOCreODo+ODs+ODkOOCueOBruOCteOCpOOCuuOCkuioreWumlxuICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG5cbiAgLy8g44Kw44Ot44O844OQ44Or44Gq44Kz44Oz44OG44Kt44K544OI44Go44Kt44Oj44Oz44OQ44K544KSZ2FtZVN0YXRl44Gr5L+d5a2YXG4gIGdhbWVTdGF0ZS5jdHggPSBjdHg7XG4gIGdhbWVTdGF0ZS5jYW52YXMgPSBjYW52YXM7XG5cbiAgY29uc29sZS5sb2coJ2luaXRHYW1lOiDjgq3jg6Pjg7Pjg5DjgrnjgajjgrPjg7Pjg4bjgq3jgrnjg4jjga7liJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ8nKTtcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLy8g44Ky44O844Og44KS44Oq44K744OD44OI44GZ44KL6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICBjb25zb2xlLmxvZygncmVzZXRHYW1lOiDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZknKTtcbiAgdGV0cmlzR2FtZS5yZXNldCgpO1xuICBnYW1lU3RhdGUuc2NvcmUgPSB0ZXRyaXNHYW1lLnNjb3JlO1xuICBnYW1lU3RhdGUubGluZXMgPSB0ZXRyaXNHYW1lLmxpbmVzO1xuICBnYW1lU3RhdGUubGV2ZWwgPSB0ZXRyaXNHYW1lLmxldmVsO1xuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IHRldHJpc0dhbWUuaXNHYW1lT3ZlcjtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gdGV0cmlzR2FtZS5waWVjZTtcbiAgZ2FtZVN0YXRlLm5leHRQaWVjZSA9IHRldHJpc0dhbWUubmV4dFBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciA9IDA7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IDA7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgZ2FtZVN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICB1cGRhdGVTY29yZURpc3BsYXkoZ2FtZVN0YXRlLnNjb3JlKTtcbiAgdXBkYXRlTGluZXNEaXNwbGF5KGdhbWVTdGF0ZS5saW5lcyk7XG4gIHVwZGF0ZUxldmVsRGlzcGxheShnYW1lU3RhdGUubGV2ZWwpO1xuICBjb25zdCBib2FyZEZvckRyYXcgPSB7XG4gICAgZ3JpZDogZ2FtZVN0YXRlLmJvYXJkLFxuICAgIGNvbHM6IGdhbWVTdGF0ZS5DT0xTLFxuICAgIHJvd3M6IGdhbWVTdGF0ZS5ST1dTXG4gIH07XG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgYm9hcmRGb3JEcmF3LCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOOCsuODvOODoOOBruODquOCu+ODg+ODiOOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xufVxuXG4vLyDjg5Tjg7zjgrnjgpLjg4njg63jg4Pjg5fjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICBjb25zb2xlLmxvZygncGxheWVyRHJvcDog44OU44O844K544KS44OJ44Ot44OD44OX44GX44G+44GZJyk7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLmRyb3BQaWVjZSgpO1xuICBnYW1lU3RhdGUuc2NvcmUgPSB0ZXRyaXNHYW1lLnNjb3JlO1xuICBnYW1lU3RhdGUubGluZXMgPSB0ZXRyaXNHYW1lLmxpbmVzO1xuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IHRldHJpc0dhbWUuaXNHYW1lT3ZlcjtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gdGV0cmlzR2FtZS5waWVjZTtcbiAgZ2FtZVN0YXRlLm5leHRQaWVjZSA9IHRldHJpc0dhbWUubmV4dFBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIHVwZGF0ZVNjb3JlRGlzcGxheShnYW1lU3RhdGUuc2NvcmUpO1xuICB1cGRhdGVMaW5lc0Rpc3BsYXkoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgdXBkYXRlTGV2ZWxEaXNwbGF5KGdhbWVTdGF0ZS5sZXZlbCk7XG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG5cbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXllckRyb3A6IOOCsuODvOODoOOCquODvOODkOODvO+8gScpO1xuICAgIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZVN0YXRlLmdhbWVMb29wSWQpO1xuICB9XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciA9IDA7XG59XG5cbi8vIOODlOODvOOCueOCkuenu+WLleOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJNb3ZlOiDjg5Tjg7zjgrnjgpLnp7vli5XjgZfjgb7jgZknLCB7IGRpciB9KTtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG4gIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG59XG5cbi8vIOODlOODvOOCueOCkuWbnui7ouOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclJvdGF0ZShkaXIpIHtcbiAgY29uc29sZS5sb2coJ3BsYXllclJvdGF0ZTog44OU44O844K544KS5Zue6Lui44GX44G+44GZJywgeyBkaXIgfSk7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlKGRpcik7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG59XG5cbi8vIOOCsuODvOODoOODq+ODvOODl1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lID0gMCkge1xuICBpZiAoZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gZ2FtZVN0YXRlLmxhc3RUaW1lO1xuICBnYW1lU3RhdGUubGFzdFRpbWUgPSB0aW1lO1xuXG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciArPSBkZWx0YVRpbWU7XG4gIGlmIChnYW1lU3RhdGUuZHJvcENvdW50ZXIgPiBnYW1lU3RhdGUuZHJvcEludGVydmFsKSB7XG4gICAgcGxheWVyRHJvcCgpO1xuICB9XG5cbiAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG59XG5cbi8vIOOCreODvOODj+ODs+ODieODqemWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQsIGdhbWVJbnN0YW5jZSkge1xuICBpZiAoZ2FtZUluc3RhbmNlLmlzR2FtZU92ZXIpIHJldHVybjtcblxuICAvLyDjgq3jg7zjg6rjg5Tjg7zjg4jjgpLnhKHoppZcbiAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuXG4gIGdhbWVJbnN0YW5jZS5rZXlzW2V2ZW50LmtleV0gPSB0cnVlO1xuXG4gIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGdhbWVJbnN0YW5jZS5tb3ZlUGllY2UoLTEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBnYW1lSW5zdGFuY2UubW92ZVBpZWNlKDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgIGdhbWVJbnN0YW5jZS5kcm9wUGllY2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgZ2FtZUluc3RhbmNlLnJvdGF0ZVBpZWNlKDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnICc6IC8vIOOCueODmuODvOOCueOCreODvFxuICAgICAgLy8g44OP44O844OJ44OJ44Ot44OD44OXXG4gICAgICBjb25zb2xlLmxvZygnaGFuZGxlS2V5RG93bjog44OP44O844OJ44OJ44Ot44OD44OX44KS5a6f6KGM44GX44G+44GZJyk7XG4gICAgICBpZiAoIWdhbWVJbnN0YW5jZS5waWVjZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ2hhbmRsZUtleURvd246IOOCouOCr+ODhuOCo+ODluOBquODlOODvOOCueOBjOOBguOCiuOBvuOBm+OCkycpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8g44OU44O844K544KS5LiA55Wq5LiL44G+44Gn6JC944Go44GZXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb25zdCBwaWVjZVkgPSBnYW1lSW5zdGFuY2UucGllY2UucG9zLnk7XG4gICAgICAgIGdhbWVJbnN0YW5jZS5kcm9wUGllY2UoKTtcbiAgICAgICAgLy8g5L2N572u44GM5aSJ44KP44KJ44Gq44GP44Gq44Gj44Gf44KJ57WC5LqGXG4gICAgICAgIGlmIChwaWVjZVkgPT09IGdhbWVJbnN0YW5jZS5waWVjZS5wb3MueSB8fCBnYW1lSW5zdGFuY2UuaXNHYW1lT3Zlcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVLZXlEb3duOiDjg4/jg7zjg4njg4njg63jg4Pjg5flrozkuoYnLCB7IHk6IGdhbWVJbnN0YW5jZS5waWVjZT8ucG9zLnkgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3AnOlxuICAgIGNhc2UgJ1AnOlxuICAgICAgLy8g5LiA5pmC5YGc5q2iXG4gICAgICBpZiAoZ2FtZUluc3RhbmNlLmdhbWVMb29wSWQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZUluc3RhbmNlLmdhbWVMb29wSWQpO1xuICAgICAgICBnYW1lSW5zdGFuY2UuZ2FtZUxvb3BJZCA9IG51bGw7XG4gICAgICAgIGdhbWVJbnN0YW5jZS5wYXVzZWQgPSB0cnVlOyAvLyDjg53jg7zjgrrnirbmhYvjgpLoqK3lrppcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVJbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTsgLy8g44Od44O844K654q25oWL44KS6Kej6ZmkXG4gICAgICAgIGdhbWVJbnN0YW5jZS5sYXN0VGltZSA9IDA7XG4gICAgICAgIGdhbWVJbnN0YW5jZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVJbnN0YW5jZS51cGRhdGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncic6XG4gICAgY2FzZSAnUic6XG4gICAgICAvLyDjg6rjgrvjg4Pjg4hcbiAgICAgIGdhbWVJbnN0YW5jZS5yZXNldEdhbWUoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVLZXlVcChldmVudCwgZ2FtZUluc3RhbmNlKSB7XG4gIGdhbWVJbnN0YW5jZS5rZXlzW2V2ZW50LmtleV0gPSBmYWxzZTtcbn1cblxuLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844Gu6Kit5a6aXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhrZXlEb3duSGFuZGxlciwga2V5VXBIYW5kbGVyKSB7XG4gIGNvbnNvbGUubG9nKCdzZXR1cEV2ZW50TGlzdGVuZXJzOiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZknKTtcblxuICAvLyDml6LlrZjjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLliYrpmaRcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuXG4gIC8vIOaWsOOBl+OBhOOCpOODmeODs+ODiOODquOCueODiuODvOOCkui/veWKoFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG5cbiAgY29uc29sZS5sb2coJ3NldHVwRXZlbnRMaXN0ZW5lcnM6IOOCpOODmeODs+ODiOODquOCueODiuODvOOBruioreWumuOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xufVxuXG4vLyDjgrLjg7zjg6DliJ3mnJ/ljJZcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG5cbiAgdHJ5IHtcbiAgICAvLyDjgrLjg7zjg6DnirbmhYvjgpLliJ3mnJ/ljJZcbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG4gICAgY29uc3QgY2FudmFzID0gaW5pdEdhbWUoKTtcblxuICAgIGlmICghY2FudmFzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+OCreODo+ODs+ODkOOCueOBruWIneacn+WMluOBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgIH1cblxuICAgIC8vIOOCsuODvOODoOOCkuODquOCu+ODg+ODiFxuICAgIGNvbnNvbGUubG9nKCdpbml0OiDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZknKTtcbiAgICByZXNldEdhbWUoKTtcblxuICAgIC8vIOOCsuODvOODoOeKtuaFi+OCkuODreOCsOOBq+WHuuWKm1xuICAgIGdhbWVTdGF0ZS5sb2dTdGF0ZSgpO1xuXG4gICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG4gICAgY29uc29sZS5sb2coJ2luaXQ6IOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumuOBl+OBvuOBmScpO1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoXG4gICAgICAoZXZlbnQpID0+IGhhbmRsZUtleURvd24oZXZlbnQsIHtcbiAgICAgICAgaXNHYW1lT3ZlcjogZ2FtZVN0YXRlLmlzR2FtZU92ZXIsXG4gICAgICAgIGtleXM6IGdhbWVTdGF0ZS5rZXlzLFxuICAgICAgICBwaWVjZTogZ2FtZVN0YXRlLnBpZWNlLFxuICAgICAgICBnYW1lTG9vcElkOiBnYW1lU3RhdGUuZ2FtZUxvb3BJZCxcbiAgICAgICAgcGF1c2VkOiBnYW1lU3RhdGUucGF1c2VkLFxuICAgICAgICBsYXN0VGltZTogZ2FtZVN0YXRlLmxhc3RUaW1lLFxuICAgICAgICAvLyB0ZXRyaXNHYW1l44Gu44Oh44K944OD44OJ44KS55u05o6l5Y+C54WnXG4gICAgICAgIG1vdmVQaWVjZTogdGV0cmlzR2FtZS5tb3ZlUGllY2UuYmluZCh0ZXRyaXNHYW1lKSxcbiAgICAgICAgZHJvcFBpZWNlOiB0ZXRyaXNHYW1lLmRyb3BQaWVjZS5iaW5kKHRldHJpc0dhbWUpLFxuICAgICAgICByb3RhdGVQaWVjZTogdGV0cmlzR2FtZS5yb3RhdGVQaWVjZS5iaW5kKHRldHJpc0dhbWUpLFxuICAgICAgICB1cGRhdGU6IHVwZGF0ZSxcbiAgICAgICAgcmVzZXRHYW1lOiByZXNldEdhbWUsXG4gICAgICB9KSxcbiAgICAgIChldmVudCkgPT4gaGFuZGxlS2V5VXAoZXZlbnQsIHtcbiAgICAgICAga2V5czogZ2FtZVN0YXRlLmtleXMsXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44GfJyk7XG5cbiAgICAvLyDlpJbpg6jjgYvjgonlj4LnhafjgafjgY3jgovjgojjgYbjgavlv4XopoHjgarjgoLjga7jgpLov5TjgZlcbiAgICByZXR1cm4ge1xuICAgICAgY2FudmFzLFxuICAgICAgZ2FtZVN0YXRlLFxuICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgIGhhbmRsZUtleVVwLFxuICAgICAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgICAgIGV2ZW50TWFuYWdlcixcbiAgICAgIGluaXRHYW1lLFxuICAgICAgcmVzZXRHYW1lLFxuICAgICAgdXBkYXRlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jb25zdCBleHBvcnRzID0ge1xuICBpbml0LFxuICBwbGF5ZXJNb3ZlLFxuICBwbGF5ZXJSb3RhdGUsXG4gIHBsYXllckRyb3AsXG4gIGhhbmRsZUtleURvd24sXG4gIGhhbmRsZUtleVVwLFxuICBzZXR1cEV2ZW50TGlzdGVuZXJzLFxuICBnYW1lU3RhdGUsXG4gIGV2ZW50TWFuYWdlcixcbiAgaW5pdEdhbWUsXG4gIHJlc2V0R2FtZSxcbiAgdXBkYXRlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcblxuLy8g44OG44K544OI55So44Gr44Kw44Ot44O844OQ44Or44Gr5YWs6ZaLXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LnRldHJpcyA9IHdpbmRvdy50ZXRyaXMgfHwge307XG4gIHdpbmRvdy50ZXRyaXMuZ2FtZSA9IHtcbiAgICBpbml0LFxuICAgIGdhbWVTdGF0ZSxcbiAgICBoYW5kbGVLZXlEb3duOiBleHBvcnRzLmhhbmRsZUtleURvd24sXG4gICAgaGFuZGxlS2V5VXAsXG4gICAgZXZlbnRNYW5hZ2VyLFxuICB9O1xufVxuXG4vLyDjgrLjg7zjg6Djga7jgrnjgr/jg7zjg4jvvIjjg5bjg6njgqbjgrblrp/ooYzmmYLjga7jgb/vvIlcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8g5pei5a2Y44Gu44Ky44O844Og44Or44O844OX44KS44Kv44Oq44KiXG4gICAgaWYgKGdhbWVTdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgfVxuICAgIGluaXRHYW1lKCk7XG4gIH0pOyAgLy8g44Km44Kj44Oz44OJ44Km44Oq44K144Kk44K65pmC44Gu5Yem55CGXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzICYmIGdhbWVTdGF0ZS5jdHgpIHtcbiAgICAgIC8vIOOCreODo+ODs+ODkOOCueOBruOCteOCpOOCuuOCkuWGjeioreWumlxuICAgICAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBnYW1lU3RhdGUuQkxPQ0s7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBnYW1lU3RhdGUuQkxPQ0s7XG4gICAgICAvLyDlho3mj4/nlLtcbiAgICAgIGRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gICAgfVxuICB9KTtcbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXG4gKiDjg4bjg4jjg6rjgrnjgrLjg7zjg6Djga7jgqjjg7Pjg4jjg6rjg7zjg53jgqTjg7Pjg4hcbiAqL1xuXG4vLyDjgrnjgr/jgqTjg6vjgrfjg7zjg4jjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLy8g44Ky44O844Og44Oi44K444Ol44O844Or44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9nYW1lLmpzJztcblxuLy8g44OH44OQ44OD44Kw55So44Gu44K544K/44Kk44Or44KS6L+95YqgXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgI2dhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuYDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4vLyDjg4njgq3jg6Xjg6Hjg7Pjg4jjga7oqq3jgb/ovrzjgb/lrozkuobjgpLlvoXjgaPjgabjgrLjg7zjg6DjgpLliJ3mnJ/ljJZcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIOOCpOODmeODs+ODiOOBjOeZuueBq+OBl+OBvuOBl+OBnycpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZLi4uJyk7XG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu54q25oWL44KS56K66KqNXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K6OicsIGNhbnZhcy53aWR0aCwgJ3gnLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnNvbGUubG9nKCfjgq3jg6Pjg7Pjg5Djgrnjga7jgrnjgr/jgqTjg6vjgrXjgqTjgro6JywgY2FudmFzLnN0eWxlLndpZHRoLCAneCcsIGNhbnZhcy5zdHlsZS5oZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfjgq3jg6Pjg7Pjg5DjgrnopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICB9XG4gICAgLy8g44Ky44O844Og44KS6ZaL5aeLXG4gICAgaW5pdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX0NPTlNUQU5UUyIsIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSIsIlNDT1JFX1RBQkxFIiwiU0hBUEVTIiwiQ09MT1JTIiwiR0FNRV9TVEFURVMiLCJJTklUIiwiUExBWUlORyIsIlBBVVNFRCIsIkdBTUVfT1ZFUiIsIkJvYXJkIiwiY29scyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJjbGVhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsImlzSW5zaWRlIiwieCIsInkiLCJpc0VtcHR5Iiwic2V0Q2VsbCIsImdldENlbGwiLCJtZXJnZSIsInBpZWNlIiwibWF0cml4IiwicG9zIiwiY2xlYXJMaW5lcyIsImNsZWFyZWQiLCJmaWx0ZXIiLCJyb3ciLCJldmVyeSIsImNlbGwiLCJ1bnNoaWZ0IiwiUGllY2UiLCJHYW1lIiwidGV0cm9taW5vcyIsImJvYXJkIiwicmVzZXQiLCJzY29yZSIsImxpbmVzIiwibGV2ZWwiLCJpc0dhbWVPdmVyIiwic3Bhd25QaWVjZSIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRyb3BQaWVjZSIsIm1vdmUiLCJoYXNDb2xsaXNpb24iLCJjYWxjdWxhdGVTY29yZSIsIm1vdmVQaWVjZSIsImR4Iiwicm90YXRlUGllY2UiLCJkaXIiLCJvbGQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJyb3RhdGUiLCJfdGhpcyRwaWVjZSIsImxpbmVzQ2xlYXJlZCIsInRhYmxlIiwiX29iamVjdFNwcmVhZCIsImR5IiwiTiIsInJlc3VsdCIsInRldHJpc0dhbWUiLCJkcmF3IiwiY3R4IiwibmV4dFBpZWNlIiwiY29sb3JzIiwiYmxvY2tTaXplIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3TWF0cml4IiwibmV4dFBpZWNlQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5leHRQaWVjZUN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBpZWNlTWF0cml4Iiwic3RhcnRYIiwic3RhcnRZIiwib2Zmc2V0IiwiZm9yRWFjaCIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInNjb3JlRWxlbWVudCIsInRleHRDb250ZW50IiwidXBkYXRlTGluZXNEaXNwbGF5IiwibGluZXNFbGVtZW50IiwidXBkYXRlTGV2ZWxEaXNwbGF5IiwibGV2ZWxFbGVtZW50IiwiZ2FtZVN0YXRlIiwiQkxPQ0siLCJkcm9wQ291bnRlciIsImRyb3BJbnRlcnZhbCIsImxhc3RUaW1lIiwiZ2FtZUxvb3BJZCIsImtleXMiLCJwYXVzZWQiLCJpbml0Qm9hcmQiLCJtYXAiLCJsb2dTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImluaXRHYW1lIiwiY2FudmFzIiwiZXJyb3IiLCJyZXNldEdhbWUiLCJib2FyZEZvckRyYXciLCJwbGF5ZXJEcm9wIiwiYWxlcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBsYXllck1vdmUiLCJwbGF5ZXJSb3RhdGUiLCJ1cGRhdGUiLCJ0aW1lIiwiZGVsdGFUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGFuZGxlS2V5RG93biIsImV2ZW50IiwiZ2FtZUluc3RhbmNlIiwicmVwZWF0Iiwid2FybiIsInBpZWNlWSIsIl9nYW1lSW5zdGFuY2UkcGllY2UiLCJoYW5kbGVLZXlVcCIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsIkVycm9yIiwiYmluZCIsImV4cG9ydHMiLCJ3aW5kb3ciLCJ0ZXRyaXMiLCJnYW1lIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==