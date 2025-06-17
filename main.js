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
/* harmony export */   gameUI: () => (/* binding */ gameUI),
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
/* harmony import */ var _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/GameUI.js */ "./src/ui/GameUI.js");




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
var gameUI = new _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__["default"](gameState, {
  movePiece: tetrisGame.movePiece.bind(tetrisGame),
  dropPiece: tetrisGame.dropPiece.bind(tetrisGame),
  rotatePiece: tetrisGame.rotatePiece.bind(tetrisGame),
  update: update,
  resetGame: resetGame
});


// キーハンドラ関数
function handleKeyDown(event, gameInstance) {
  var ui = new _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__["default"](gameInstance, gameInstance);
  ui.onKeyDown(event);
}


function handleKeyUp(event, gameInstance) {
  var ui = new _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__["default"](gameInstance, gameInstance);
  ui.onKeyUp(event);
}

// イベントリスナーの設定
function setupEventListeners() {var keyDownHandler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gameUI.onKeyDown;var keyUpHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : gameUI.onKeyUp;
  gameUI.setupEventListeners(keyDownHandler, keyUpHandler);
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
    setupEventListeners();

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
  gameUI: gameUI,
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
    gameUI: gameUI,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSTtJQUNULENBQUMsRUFBRSxHQUFHLEVBQUc7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0VBQ047RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1YsQ0FDRjs7O0VBQ0RDLE1BQU0sRUFBRTtFQUNOLFNBQVMsRUFBRTtFQUNYLFNBQVMsRUFBRTtFQUNYLFNBQVMsRUFBRTtFQUNYLFNBQVMsRUFBRTtFQUNYLFNBQVMsRUFBRTtFQUNYLFNBQVMsRUFBRTtFQUNYLFNBQVMsRUFBRTtFQUNYLFNBQVMsQ0FBRTtFQUFBLENBQ1o7RUFDREMsV0FBVyxFQUFFO0lBQ1hDLElBQUksRUFBRSxNQUFNO0lBQ1pDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxNQUFNLEVBQUUsUUFBUTtJQUNoQkMsU0FBUyxFQUFFO0VBQ2I7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0NDdkVEO0FBQ0E7O0FBRU8sSUFBTUMsS0FBSztFQUNoQixTQUFBQSxNQUFBLEVBQWtDLEtBQXRCQyxJQUFJLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUUsS0FBRUcsSUFBSSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFLENBQUFJLGlGQUFBLE9BQUFOLEtBQUE7SUFDOUIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDSSxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDRSxLQUFLLENBQUMsQ0FBQztFQUNkLENBQUMsT0FBQUMsOEVBQUEsQ0FBQVIsS0FBQSxLQUFBUyxHQUFBLFdBQUFDLEtBQUE7O0lBRUQsU0FBQUgsS0FBS0EsQ0FBQSxFQUFHLEtBQUFJLEtBQUE7TUFDTixJQUFJLENBQUNDLElBQUksR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsRUFBRVgsTUFBTSxFQUFFLElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsRUFBRSxvQkFBTVEsS0FBSyxDQUFDRixLQUFJLENBQUNWLElBQUksQ0FBQyxDQUFDYyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUM7SUFDL0UsQ0FBQyxNQUFBTixHQUFBLGNBQUFDLEtBQUE7O0lBRUQsU0FBQU0sUUFBUUEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDYixPQUFPRCxDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLEdBQUcsSUFBSSxDQUFDaEIsSUFBSSxJQUFJaUIsQ0FBQyxJQUFJLENBQUMsSUFBSUEsQ0FBQyxHQUFHLElBQUksQ0FBQ2IsSUFBSTtJQUMzRCxDQUFDLE1BQUFJLEdBQUEsYUFBQUMsS0FBQTs7SUFFRCxTQUFBUyxPQUFPQSxDQUFDRixDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDTixJQUFJLENBQUNNLENBQUMsQ0FBQyxDQUFDRCxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3JELENBQUMsTUFBQVIsR0FBQSxhQUFBQyxLQUFBOztJQUVELFNBQUFVLE9BQU9BLENBQUNILENBQUMsRUFBRUMsQ0FBQyxFQUFFUixLQUFLLEVBQUU7TUFDbkIsSUFBSSxJQUFJLENBQUNNLFFBQVEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNOLElBQUksQ0FBQ00sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxHQUFHUCxLQUFLO0lBQ2xELENBQUMsTUFBQUQsR0FBQSxhQUFBQyxLQUFBOztJQUVELFNBQUFXLE9BQU9BLENBQUNKLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ1osT0FBTyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNOLElBQUksQ0FBQ00sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxHQUFHLElBQUk7SUFDckQsQ0FBQyxNQUFBUixHQUFBLFdBQUFDLEtBQUE7O0lBRUQsU0FBQVksS0FBS0EsQ0FBQ0MsS0FBSyxFQUFFO01BQ1gsS0FBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdLLEtBQUssQ0FBQ0MsTUFBTSxDQUFDckIsTUFBTSxFQUFFZSxDQUFDLEVBQUUsRUFBRTtRQUM1QyxLQUFLLElBQUlELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR00sS0FBSyxDQUFDQyxNQUFNLENBQUNOLENBQUMsQ0FBQyxDQUFDZixNQUFNLEVBQUVjLENBQUMsRUFBRSxFQUFFO1VBQy9DLElBQUlNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDTixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDRyxPQUFPLENBQUNHLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUixDQUFDLEdBQUdBLENBQUMsRUFBRU0sS0FBSyxDQUFDRSxHQUFHLENBQUNQLENBQUMsR0FBR0EsQ0FBQyxFQUFFSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxDQUFDO1VBQ3BFO1FBQ0Y7TUFDRjtJQUNGLENBQUMsTUFBQVIsR0FBQSxnQkFBQUMsS0FBQTs7SUFFRCxTQUFBZ0IsVUFBVUEsQ0FBQSxFQUFHO01BQ1gsSUFBSUMsT0FBTyxHQUFHLENBQUM7TUFDZixJQUFJLENBQUNmLElBQUksR0FBRyxJQUFJLENBQUNBLElBQUksQ0FBQ2dCLE1BQU0sQ0FBQyxVQUFBQyxHQUFHLEVBQUk7UUFDbEMsSUFBSUEsR0FBRyxDQUFDQyxLQUFLLENBQUMsVUFBQUMsSUFBSSxVQUFJQSxJQUFJLEtBQUssQ0FBQyxHQUFDLEVBQUU7VUFDakNKLE9BQU8sRUFBRTtVQUNULE9BQU8sS0FBSztRQUNkO1FBQ0EsT0FBTyxJQUFJO01BQ2IsQ0FBQyxDQUFDO01BQ0YsT0FBTyxJQUFJLENBQUNmLElBQUksQ0FBQ1QsTUFBTSxHQUFHLElBQUksQ0FBQ0UsSUFBSSxFQUFFO1FBQ25DLElBQUksQ0FBQ08sSUFBSSxDQUFDb0IsT0FBTyxDQUFDbkIsS0FBSyxDQUFDLElBQUksQ0FBQ1osSUFBSSxDQUFDLENBQUNjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUM3QztNQUNBLE9BQU9ZLE9BQU87SUFDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDckRIO0FBQ0E7QUFDbUM7QUFDQTs7QUFFNUIsSUFBTU8sSUFBSTtFQUNmLFNBQUFBLEtBQUEsRUFBcUQsS0FBekNqQyxJQUFJLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUUsS0FBRUcsSUFBSSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFLEtBQUVpQyxVQUFVLEdBQUFqQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJLENBQUFJLGlGQUFBLE9BQUE0QixJQUFBO0lBQ2pELElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUlwQyw0Q0FBSyxDQUFDQyxJQUFJLEVBQUVJLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUM4QixVQUFVLEdBQUdBLFVBQVUsSUFBSTtJQUM5QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDdkI7O0VBQ0gsQ0FBQyxPQUFBM0IsOEVBQUEsQ0FBQTBCLElBQUEsS0FBQXpCLEdBQUEsV0FBQUMsS0FBQTs7SUFFRCxTQUFBMkIsS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDRCxLQUFLLENBQUM3QixLQUFLLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUMrQixLQUFLLEdBQUcsQ0FBQztNQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7TUFDZCxJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO01BQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUcsS0FBSztNQUN2QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ25CLENBQUMsTUFBQWpDLEdBQUEsZ0JBQUFDLEtBQUE7O0lBRUQsU0FBQWdDLFVBQVVBLENBQUEsRUFBRztNQUNYLElBQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNYLFVBQVUsQ0FBQ2hDLE1BQU0sQ0FBQztNQUM5RCxJQUFJLENBQUNvQixLQUFLLEdBQUcsSUFBSVUsNENBQUssQ0FBQyxJQUFJLENBQUNFLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLEVBQUUsRUFBRTFCLENBQUMsRUFBRSxDQUFDLEVBQUVDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUMsTUFBQVQsR0FBQSxlQUFBQyxLQUFBOztJQUVELFNBQUFxQyxTQUFTQSxDQUFBLEVBQUc7TUFDVixJQUFJLENBQUN4QixLQUFLLENBQUN5QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNyQixJQUFJLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUMsRUFBRTtRQUN2QixJQUFJLENBQUMxQixLQUFLLENBQUN5QixJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQ1osS0FBSyxDQUFDZCxLQUFLLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUM7UUFDNUIsSUFBTUksT0FBTyxHQUFHLElBQUksQ0FBQ1MsS0FBSyxDQUFDVixVQUFVLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUNZLEtBQUssSUFBSSxJQUFJLENBQUNZLGNBQWMsQ0FBQ3ZCLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUNZLEtBQUssSUFBSVosT0FBTztRQUNyQixJQUFJLENBQUNlLFVBQVUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDTyxZQUFZLENBQUMsQ0FBQyxFQUFFO1VBQ3ZCLElBQUksQ0FBQ1IsVUFBVSxHQUFHLElBQUk7UUFDeEI7TUFDRjtJQUNGLENBQUMsTUFBQWhDLEdBQUEsZUFBQUMsS0FBQTs7SUFFRCxTQUFBeUMsU0FBU0EsQ0FBQ0MsRUFBRSxFQUFFO01BQ1osSUFBSSxDQUFDN0IsS0FBSyxDQUFDeUIsSUFBSSxDQUFDSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3RCLElBQUksSUFBSSxDQUFDSCxZQUFZLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQzFCLEtBQUssQ0FBQ3lCLElBQUksQ0FBQyxDQUFDSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO01BQ3pCO0lBQ0YsQ0FBQyxNQUFBM0MsR0FBQSxpQkFBQUMsS0FBQTs7SUFFRCxTQUFBMkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO01BQ2YsSUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDbkMsS0FBSyxDQUFDQyxNQUFNLENBQUMsQ0FBQztNQUN6RCxJQUFJLENBQUNELEtBQUssQ0FBQ29DLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDO01BQ3RCLElBQUksSUFBSSxDQUFDTCxZQUFZLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQzFCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHK0IsR0FBRztNQUN6QjtJQUNGLENBQUMsTUFBQTlDLEdBQUEsa0JBQUFDLEtBQUE7O0lBRUQsU0FBQXVDLFlBQVlBLENBQUEsRUFBRztNQUNiLElBQUFXLFdBQUEsR0FBd0IsSUFBSSxDQUFDckMsS0FBSyxDQUExQkMsTUFBTSxHQUFBb0MsV0FBQSxDQUFOcEMsTUFBTSxDQUFFQyxHQUFHLEdBQUFtQyxXQUFBLENBQUhuQyxHQUFHO01BQ25CLEtBQUssSUFBSVAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTSxNQUFNLENBQUNyQixNQUFNLEVBQUVlLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEtBQUssSUFBSUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTyxNQUFNLENBQUNOLENBQUMsQ0FBQyxDQUFDZixNQUFNLEVBQUVjLENBQUMsRUFBRSxFQUFFO1VBQ3pDO1VBQ0VPLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQztVQUNYLENBQUMsSUFBSSxDQUFDbUIsS0FBSyxDQUFDcEIsUUFBUSxDQUFDUyxHQUFHLENBQUNSLENBQUMsR0FBR0EsQ0FBQyxFQUFFUSxHQUFHLENBQUNQLENBQUMsR0FBR0EsQ0FBQyxDQUFDO1VBQ3pDLElBQUksQ0FBQ2tCLEtBQUssQ0FBQ2YsT0FBTyxDQUFDSSxHQUFHLENBQUNSLENBQUMsR0FBR0EsQ0FBQyxFQUFFUSxHQUFHLENBQUNQLENBQUMsR0FBR0EsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1VBQ2pEO1lBQ0EsT0FBTyxJQUFJO1VBQ2I7UUFDRjtNQUNGO01BQ0EsT0FBTyxLQUFLO0lBQ2QsQ0FBQyxNQUFBVCxHQUFBLG9CQUFBQyxLQUFBOztJQUVELFNBQUF3QyxjQUFjQSxDQUFDVyxZQUFZLEVBQUU7TUFDM0IsSUFBTUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO01BQ2hELE9BQU8sQ0FBQ0EsS0FBSyxDQUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDckIsS0FBSztJQUNoRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztzdUJDbEZIO0FBQ0E7O0FBRU8sSUFBTVAsS0FBSztFQUNoQixTQUFBQSxNQUFZVCxNQUFNLEVBQXdCLEtBQXRCQyxHQUFHLEdBQUF2QixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFZSxDQUFDLEVBQUUsQ0FBQyxFQUFFQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQVosaUZBQUEsT0FBQTJCLEtBQUE7SUFDdEMsSUFBSSxDQUFDVCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxHQUFHLEdBQUFzQyxhQUFBLEtBQVF0QyxHQUFHLENBQUU7RUFDdkIsQ0FBQyxPQUFBakIsOEVBQUEsQ0FBQXlCLEtBQUEsS0FBQXhCLEdBQUEsVUFBQUMsS0FBQTs7SUFFRCxTQUFBc0MsSUFBSUEsQ0FBQ0ksRUFBRSxFQUFFWSxFQUFFLEVBQUU7TUFDWCxJQUFJLENBQUN2QyxHQUFHLENBQUNSLENBQUMsSUFBSW1DLEVBQUU7TUFDaEIsSUFBSSxDQUFDM0IsR0FBRyxDQUFDUCxDQUFDLElBQUk4QyxFQUFFO0lBQ2xCLENBQUMsTUFBQXZELEdBQUEsWUFBQUMsS0FBQTs7SUFFRCxTQUFBaUQsTUFBTUEsQ0FBQSxFQUFVLEtBQVRMLEdBQUcsR0FBQXBELFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7TUFDWjtNQUNBLElBQU0rRCxDQUFDLEdBQUcsSUFBSSxDQUFDekMsTUFBTSxDQUFDckIsTUFBTTtNQUM1QixJQUFNK0QsTUFBTSxHQUFHckQsS0FBSyxDQUFDQyxJQUFJLENBQUMsRUFBRVgsTUFBTSxFQUFFOEQsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBTXBELEtBQUssQ0FBQ29ELENBQUMsQ0FBQyxDQUFDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFDO01BQ2hFLEtBQUssSUFBSUcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHK0MsQ0FBQyxFQUFFL0MsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsS0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdnRCxDQUFDLEVBQUVoRCxDQUFDLEVBQUUsRUFBRTtVQUMxQixJQUFJcUMsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNYWSxNQUFNLENBQUNqRCxDQUFDLENBQUMsQ0FBQ2dELENBQUMsR0FBRyxDQUFDLEdBQUcvQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNNLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQztVQUMxQyxDQUFDLE1BQU07WUFDTGlELE1BQU0sQ0FBQ0QsQ0FBQyxHQUFHLENBQUMsR0FBR2hELENBQUMsQ0FBQyxDQUFDQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNNLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQztVQUMxQztRQUNGO01BQ0Y7TUFDQSxJQUFJLENBQUNPLE1BQU0sR0FBRzBDLE1BQU07SUFDdEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJtQztBQUNlO0FBQ2pCOztBQUVwQztBQUNPLElBQU1FLFVBQVUsR0FBRyxJQUFJbEMsK0NBQUksQ0FBQyxDQUFDOztBQUVwQztBQUNPLFNBQVNtQyxJQUFJQSxDQUFDQyxHQUFHLEVBQUVsQyxLQUFLLEVBQUViLEtBQUssRUFBRWdELFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUU7RUFDcEU7RUFDQUgsR0FBRyxDQUFDSSxTQUFTLEdBQUcsU0FBUztFQUN6QkosR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXZDLEtBQUssQ0FBQ25DLElBQUksR0FBR3dFLFNBQVMsRUFBRXJDLEtBQUssQ0FBQy9CLElBQUksR0FBR29FLFNBQVMsQ0FBQzs7RUFFbEU7RUFDQUcsVUFBVSxDQUFDTixHQUFHLEVBQUVsQyxLQUFLLENBQUN4QixJQUFJLEVBQUUsRUFBRUssQ0FBQyxFQUFFLENBQUMsRUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUVzRCxNQUFNLEVBQUVDLFNBQVMsQ0FBQzs7RUFFOUQ7RUFDQSxJQUFJbEQsS0FBSyxFQUFFO0lBQ1RxRCxVQUFVLENBQUNOLEdBQUcsRUFBRS9DLEtBQUssQ0FBQ0MsTUFBTSxFQUFFRCxLQUFLLENBQUNFLEdBQUcsRUFBRStDLE1BQU0sRUFBRUMsU0FBUyxDQUFDO0VBQzdEOztFQUVBO0VBQ0EsSUFBSUYsU0FBUyxFQUFFO0lBQ2IsSUFBTU0sZUFBZSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztJQUNwRSxJQUFJRixlQUFlLEVBQUU7TUFDbkIsSUFBTUcsWUFBWSxHQUFHSCxlQUFlLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7TUFDckQsSUFBSUQsWUFBWSxFQUFFO1FBQ2hCQSxZQUFZLENBQUNFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxlQUFlLENBQUNNLEtBQUssRUFBRU4sZUFBZSxDQUFDTyxNQUFNLENBQUM7UUFDM0UsSUFBTUMsV0FBVyxHQUFHZCxTQUFTLENBQUMvQyxNQUFNO1FBQ3BDLElBQU04RCxNQUFNLEdBQUlULGVBQWUsQ0FBQ00sS0FBSyxHQUFHLENBQUMsR0FBS0UsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDbEYsTUFBTSxHQUFHc0UsU0FBUyxHQUFHLENBQUU7UUFDcEYsSUFBTWMsTUFBTSxHQUFJVixlQUFlLENBQUNPLE1BQU0sR0FBRyxDQUFDLEdBQUtDLFdBQVcsQ0FBQ2xGLE1BQU0sR0FBR3NFLFNBQVMsR0FBRyxDQUFFOztRQUVsRkcsVUFBVSxDQUFDSSxZQUFZLEVBQUVLLFdBQVcsRUFBRSxFQUFFcEUsQ0FBQyxFQUFFcUUsTUFBTSxHQUFHYixTQUFTLEVBQUV2RCxDQUFDLEVBQUVxRSxNQUFNLEdBQUdkLFNBQVMsQ0FBQyxDQUFDLEVBQUVELE1BQU0sRUFBRUMsU0FBUyxDQUFDO01BQzVHO0lBQ0Y7RUFDRjtBQUNGOztBQUVPLFNBQVNHLFVBQVVBLENBQUNOLEdBQUcsRUFBRTlDLE1BQU0sRUFBRWdFLE1BQU0sRUFBRWhCLE1BQU0sRUFBRUMsU0FBUyxFQUFFO0VBQ2pFakQsTUFBTSxDQUFDaUUsT0FBTyxDQUFDLFVBQUM1RCxHQUFHLEVBQUVYLENBQUMsRUFBSztJQUN6QlcsR0FBRyxDQUFDNEQsT0FBTyxDQUFDLFVBQUMvRSxLQUFLLEVBQUVPLENBQUMsRUFBSztNQUN4QixJQUFJUCxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2Y0RCxHQUFHLENBQUNJLFNBQVMsR0FBR0YsTUFBTSxDQUFDOUQsS0FBSyxDQUFDO1FBQzdCNEQsR0FBRyxDQUFDSyxRQUFRO1VBQ1YsQ0FBQzFELENBQUMsR0FBR3VFLE1BQU0sQ0FBQ3ZFLENBQUMsSUFBSXdELFNBQVM7VUFDMUIsQ0FBQ3ZELENBQUMsR0FBR3NFLE1BQU0sQ0FBQ3RFLENBQUMsSUFBSXVELFNBQVM7VUFDMUJBLFNBQVM7VUFDVEE7UUFDRixDQUFDO01BQ0g7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNPLFNBQVNpQixrQkFBa0JBLENBQUNwRCxLQUFLLEVBQUU7RUFDeEMsSUFBTXFELFlBQVksR0FBR2IsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQ3JELElBQUlZLFlBQVksRUFBRTtJQUNoQkEsWUFBWSxDQUFDQyxXQUFXLEdBQUd0RCxLQUFLO0VBQ2xDO0FBQ0Y7O0FBRU8sU0FBU3VELGtCQUFrQkEsQ0FBQ3RELEtBQUssRUFBRTtFQUN4QyxJQUFNdUQsWUFBWSxHQUFHaEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQ3JELElBQUllLFlBQVksRUFBRTtJQUNoQkEsWUFBWSxDQUFDRixXQUFXLEdBQUdyRCxLQUFLO0VBQ2xDO0FBQ0Y7O0FBRU8sU0FBU3dELGtCQUFrQkEsQ0FBQ3ZELEtBQUssRUFBRTtFQUN4QyxJQUFNd0QsWUFBWSxHQUFHbEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQ3JELElBQUlpQixZQUFZLEVBQUU7SUFDaEJBLFlBQVksQ0FBQ0osV0FBVyxHQUFHcEQsS0FBSztFQUNsQztBQUNGOztBQUVBO0FBQ08sSUFBTXlELFNBQVMsR0FBRztFQUN2QjtFQUNBNUcsSUFBSSxFQUFFLEVBQUU7RUFDUkMsSUFBSSxFQUFFLEVBQUU7RUFDUjRHLEtBQUssRUFBRTlHLDhEQUFjLENBQUNHLFVBQVUsRUFBRTtFQUNsQztFQUNBNkMsS0FBSyxFQUFFLEVBQUU7RUFDVGIsS0FBSyxFQUFFLElBQUk7RUFDWGdELFNBQVMsRUFBRSxJQUFJO0VBQ2ZqQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxLQUFLLEVBQUUsQ0FBQztFQUNSQyxLQUFLLEVBQUUsQ0FBQztFQUNSMkQsV0FBVyxFQUFFLENBQUM7RUFDZEMsWUFBWSxFQUFFLElBQUksRUFBRTtFQUNwQkMsUUFBUSxFQUFFLENBQUM7RUFDWEMsVUFBVSxFQUFFLElBQUk7RUFDaEI3RCxVQUFVLEVBQUUsS0FBSztFQUNqQjtFQUNBOEQsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUNSO0VBQ0FDLE1BQU0sRUFBRSxLQUFLOztFQUViO0VBQ0FDLFNBQVMsV0FBVEEsU0FBU0EsQ0FBQSxFQUFHLEtBQUE5RixLQUFBO0lBQ1YsSUFBSSxDQUFDeUIsS0FBSyxHQUFHdkIsS0FBSyxDQUFDLElBQUksQ0FBQ3ZCLElBQUksQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDMkYsR0FBRyxDQUFDLG9CQUFNN0YsS0FBSyxDQUFDRixLQUFJLENBQUN0QixJQUFJLENBQUMsQ0FBQzBCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQztFQUMzRSxDQUFDOztFQUVEO0VBQ0E0RixRQUFRLFdBQVJBLFFBQVFBLENBQUEsRUFBRztJQUNUQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRTtNQUNqQ3ZFLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJDLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJDLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJDLFVBQVUsRUFBRSxJQUFJLENBQUNBLFVBQVU7TUFDM0JsQixLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLLEdBQUcsRUFBRUMsTUFBTSxFQUFFLElBQUksQ0FBQ0QsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLEdBQUcsRUFBRSxJQUFJLENBQUNGLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJO01BQzdFOEMsU0FBUyxFQUFFLElBQUksQ0FBQ0EsU0FBUyxHQUFHLEVBQUUvQyxNQUFNLEVBQUUsSUFBSSxDQUFDK0MsU0FBUyxDQUFDL0MsTUFBTSxDQUFDLENBQUMsR0FBRztJQUNsRSxDQUFDLENBQUM7RUFDSjtBQUNGLENBQUM7O0FBRUQ7QUFDTyxJQUFNc0YsWUFBWSxHQUFHLElBQUlDLFdBQVcsQ0FBQyxDQUFDOztBQUU3QztBQUNPLFNBQVNDLFFBQVFBLENBQUEsRUFBRztFQUN6QkosT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7RUFDdEMsSUFBTUksTUFBTSxHQUFHbkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzlDLElBQUksQ0FBQ2tDLE1BQU0sRUFBRTtJQUNYTCxPQUFPLENBQUNNLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxPQUFPLElBQUk7RUFDYjtFQUNBLElBQU01QyxHQUFHLEdBQUcyQyxNQUFNLENBQUNoQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DLElBQUksQ0FBQ1gsR0FBRyxFQUFFO0lBQ1JzQyxPQUFPLENBQUNNLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxPQUFPLElBQUk7RUFDYjs7RUFFQTtFQUNBRCxNQUFNLENBQUM5QixLQUFLLEdBQUdjLFNBQVMsQ0FBQzVHLElBQUksR0FBR0QsOERBQWMsQ0FBQ0csVUFBVTtFQUN6RDBILE1BQU0sQ0FBQzdCLE1BQU0sR0FBR2EsU0FBUyxDQUFDM0csSUFBSSxHQUFHRiw4REFBYyxDQUFDRyxVQUFVOztFQUUxRDtFQUNBMEcsU0FBUyxDQUFDM0IsR0FBRyxHQUFHQSxHQUFHO0VBQ25CMkIsU0FBUyxDQUFDZ0IsTUFBTSxHQUFHQSxNQUFNOztFQUV6QkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLENBQUM7RUFDaEQsT0FBT0ksTUFBTTtBQUNmOztBQUVBO0FBQ08sU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQzFCUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztFQUNyQ3pDLFVBQVUsQ0FBQy9CLEtBQUssQ0FBQyxDQUFDO0VBQ2xCNEQsU0FBUyxDQUFDM0QsS0FBSyxHQUFHOEIsVUFBVSxDQUFDOUIsS0FBSztFQUNsQzJELFNBQVMsQ0FBQzFELEtBQUssR0FBRzZCLFVBQVUsQ0FBQzdCLEtBQUs7RUFDbEMwRCxTQUFTLENBQUN6RCxLQUFLLEdBQUc0QixVQUFVLENBQUM1QixLQUFLO0VBQ2xDeUQsU0FBUyxDQUFDeEQsVUFBVSxHQUFHMkIsVUFBVSxDQUFDM0IsVUFBVTtFQUM1Q3dELFNBQVMsQ0FBQzFFLEtBQUssR0FBRzZDLFVBQVUsQ0FBQzdDLEtBQUs7RUFDbEMwRSxTQUFTLENBQUMxQixTQUFTLEdBQUdILFVBQVUsQ0FBQ0csU0FBUztFQUMxQzBCLFNBQVMsQ0FBQzdELEtBQUssR0FBR2dDLFVBQVUsQ0FBQ2hDLEtBQUssQ0FBQ3hCLElBQUk7RUFDdkNxRixTQUFTLENBQUNFLFdBQVcsR0FBRyxDQUFDO0VBQ3pCRixTQUFTLENBQUNJLFFBQVEsR0FBRyxDQUFDO0VBQ3RCSixTQUFTLENBQUNLLFVBQVUsR0FBRyxJQUFJO0VBQzNCTCxTQUFTLENBQUNPLE1BQU0sR0FBRyxLQUFLO0VBQ3hCZCxrQkFBa0IsQ0FBQ08sU0FBUyxDQUFDM0QsS0FBSyxDQUFDO0VBQ25DdUQsa0JBQWtCLENBQUNJLFNBQVMsQ0FBQzFELEtBQUssQ0FBQztFQUNuQ3dELGtCQUFrQixDQUFDRSxTQUFTLENBQUN6RCxLQUFLLENBQUM7RUFDbkMsSUFBTTRFLFlBQVksR0FBRztJQUNuQnhHLElBQUksRUFBRXFGLFNBQVMsQ0FBQzdELEtBQUs7SUFDckJuQyxJQUFJLEVBQUVnRyxTQUFTLENBQUM1RyxJQUFJO0lBQ3BCZ0IsSUFBSSxFQUFFNEYsU0FBUyxDQUFDM0c7RUFDbEIsQ0FBQztFQUNEK0UsSUFBSSxDQUFDNEIsU0FBUyxDQUFDM0IsR0FBRyxFQUFFOEMsWUFBWSxFQUFFbkIsU0FBUyxDQUFDMUUsS0FBSyxFQUFFMEUsU0FBUyxDQUFDMUIsU0FBUyxFQUFFbkYsOERBQWMsQ0FBQ00sTUFBTSxFQUFFTiw4REFBYyxDQUFDRyxVQUFVLENBQUM7RUFDekhxSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztBQUMzQzs7QUFFQTtBQUNPLFNBQVNRLFVBQVVBLENBQUEsRUFBRztFQUMzQlQsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7RUFDdEMsSUFBSVosU0FBUyxDQUFDeEQsVUFBVSxFQUFFO0VBQzFCMkIsVUFBVSxDQUFDckIsU0FBUyxDQUFDLENBQUM7RUFDdEJrRCxTQUFTLENBQUMzRCxLQUFLLEdBQUc4QixVQUFVLENBQUM5QixLQUFLO0VBQ2xDMkQsU0FBUyxDQUFDMUQsS0FBSyxHQUFHNkIsVUFBVSxDQUFDN0IsS0FBSztFQUNsQzBELFNBQVMsQ0FBQ3hELFVBQVUsR0FBRzJCLFVBQVUsQ0FBQzNCLFVBQVU7RUFDNUN3RCxTQUFTLENBQUMxRSxLQUFLLEdBQUc2QyxVQUFVLENBQUM3QyxLQUFLO0VBQ2xDMEUsU0FBUyxDQUFDMUIsU0FBUyxHQUFHSCxVQUFVLENBQUNHLFNBQVM7RUFDMUMwQixTQUFTLENBQUM3RCxLQUFLLEdBQUdnQyxVQUFVLENBQUNoQyxLQUFLLENBQUN4QixJQUFJO0VBQ3ZDOEUsa0JBQWtCLENBQUNPLFNBQVMsQ0FBQzNELEtBQUssQ0FBQztFQUNuQ3VELGtCQUFrQixDQUFDSSxTQUFTLENBQUMxRCxLQUFLLENBQUM7RUFDbkN3RCxrQkFBa0IsQ0FBQ0UsU0FBUyxDQUFDekQsS0FBSyxDQUFDO0VBQ25DNkIsSUFBSSxDQUFDNEIsU0FBUyxDQUFDM0IsR0FBRyxFQUFFMkIsU0FBUyxDQUFDN0QsS0FBSyxFQUFFNkQsU0FBUyxDQUFDMUUsS0FBSyxFQUFFMEUsU0FBUyxDQUFDMUIsU0FBUyxFQUFFbkYsOERBQWMsQ0FBQ00sTUFBTSxFQUFFTiw4REFBYyxDQUFDRyxVQUFVLENBQUM7O0VBRTVILElBQUkwRyxTQUFTLENBQUN4RCxVQUFVLEVBQUU7SUFDeEJtRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUNuQ1MsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUNuQkMsb0JBQW9CLENBQUN0QixTQUFTLENBQUNLLFVBQVUsQ0FBQztFQUM1QztFQUNBTCxTQUFTLENBQUNFLFdBQVcsR0FBRyxDQUFDO0FBQzNCOztBQUVBO0FBQ08sU0FBU3FCLFVBQVVBLENBQUNsRSxHQUFHLEVBQUU7RUFDOUJzRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFdkQsR0FBRyxFQUFIQSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzdDLElBQUkyQyxTQUFTLENBQUN4RCxVQUFVLEVBQUU7RUFDMUIyQixVQUFVLENBQUNqQixTQUFTLENBQUNHLEdBQUcsQ0FBQztFQUN6QjJDLFNBQVMsQ0FBQzFFLEtBQUssR0FBRzZDLFVBQVUsQ0FBQzdDLEtBQUs7RUFDbEMwRSxTQUFTLENBQUM3RCxLQUFLLEdBQUdnQyxVQUFVLENBQUNoQyxLQUFLLENBQUN4QixJQUFJO0VBQ3ZDeUQsSUFBSSxDQUFDNEIsU0FBUyxDQUFDM0IsR0FBRyxFQUFFMkIsU0FBUyxDQUFDN0QsS0FBSyxFQUFFNkQsU0FBUyxDQUFDMUUsS0FBSyxFQUFFNkMsVUFBVSxDQUFDRyxTQUFTLEVBQUVuRiw4REFBYyxDQUFDTSxNQUFNLEVBQUVOLDhEQUFjLENBQUNHLFVBQVUsQ0FBQztBQUMvSDs7QUFFQTtBQUNPLFNBQVNrSSxZQUFZQSxDQUFDbkUsR0FBRyxFQUFFO0VBQ2hDc0QsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsRUFBRXZELEdBQUcsRUFBSEEsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUMvQyxJQUFJMkMsU0FBUyxDQUFDeEQsVUFBVSxFQUFFO0VBQzFCMkIsVUFBVSxDQUFDZixXQUFXLENBQUNDLEdBQUcsQ0FBQztFQUMzQjJDLFNBQVMsQ0FBQzFFLEtBQUssR0FBRzZDLFVBQVUsQ0FBQzdDLEtBQUs7RUFDbEMwRSxTQUFTLENBQUM3RCxLQUFLLEdBQUdnQyxVQUFVLENBQUNoQyxLQUFLLENBQUN4QixJQUFJO0VBQ3ZDeUQsSUFBSSxDQUFDNEIsU0FBUyxDQUFDM0IsR0FBRyxFQUFFMkIsU0FBUyxDQUFDN0QsS0FBSyxFQUFFNkQsU0FBUyxDQUFDMUUsS0FBSyxFQUFFNkMsVUFBVSxDQUFDRyxTQUFTLEVBQUVuRiw4REFBYyxDQUFDTSxNQUFNLEVBQUVOLDhEQUFjLENBQUNHLFVBQVUsQ0FBQztBQUMvSDs7QUFFQTtBQUNPLFNBQVNtSSxNQUFNQSxDQUFBLEVBQVcsS0FBVkMsSUFBSSxHQUFBekgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUM3QixJQUFJK0YsU0FBUyxDQUFDTyxNQUFNLEVBQUU7RUFDdEIsSUFBTW9CLFNBQVMsR0FBR0QsSUFBSSxHQUFHMUIsU0FBUyxDQUFDSSxRQUFRO0VBQzNDSixTQUFTLENBQUNJLFFBQVEsR0FBR3NCLElBQUk7O0VBRXpCMUIsU0FBUyxDQUFDRSxXQUFXLElBQUl5QixTQUFTO0VBQ2xDLElBQUkzQixTQUFTLENBQUNFLFdBQVcsR0FBR0YsU0FBUyxDQUFDRyxZQUFZLEVBQUU7SUFDbERpQixVQUFVLENBQUMsQ0FBQztFQUNkOztFQUVBaEQsSUFBSSxDQUFDNEIsU0FBUyxDQUFDM0IsR0FBRyxFQUFFMkIsU0FBUyxDQUFDN0QsS0FBSyxFQUFFNkQsU0FBUyxDQUFDMUUsS0FBSyxFQUFFNkMsVUFBVSxDQUFDRyxTQUFTLEVBQUVuRiw4REFBYyxDQUFDTSxNQUFNLEVBQUVOLDhEQUFjLENBQUNHLFVBQVUsQ0FBQztFQUM3SDBHLFNBQVMsQ0FBQ0ssVUFBVSxHQUFHdUIscUJBQXFCLENBQUNILE1BQU0sQ0FBQztBQUN0RDtBQUNPLElBQU1JLE1BQU0sR0FBRyxJQUFJM0QscURBQU0sQ0FBQzhCLFNBQVMsRUFBRTtFQUMxQzlDLFNBQVMsRUFBRWlCLFVBQVUsQ0FBQ2pCLFNBQVMsQ0FBQzRFLElBQUksQ0FBQzNELFVBQVUsQ0FBQztFQUNoRHJCLFNBQVMsRUFBRXFCLFVBQVUsQ0FBQ3JCLFNBQVMsQ0FBQ2dGLElBQUksQ0FBQzNELFVBQVUsQ0FBQztFQUNoRGYsV0FBVyxFQUFFZSxVQUFVLENBQUNmLFdBQVcsQ0FBQzBFLElBQUksQ0FBQzNELFVBQVUsQ0FBQztFQUNwRHNELE1BQU0sRUFBTkEsTUFBTTtFQUNOUCxTQUFTLEVBQVRBO0FBQ0YsQ0FBQyxDQUFDOzs7QUFHRjtBQUNPLFNBQVNhLGFBQWFBLENBQUNDLEtBQUssRUFBRUMsWUFBWSxFQUFFO0VBQ2pELElBQU1DLEVBQUUsR0FBRyxJQUFJaEUscURBQU0sQ0FBQytELFlBQVksRUFBRUEsWUFBWSxDQUFDO0VBQ2pEQyxFQUFFLENBQUNDLFNBQVMsQ0FBQ0gsS0FBSyxDQUFDO0FBQ3JCOzs7QUFHTyxTQUFTSSxXQUFXQSxDQUFDSixLQUFLLEVBQUVDLFlBQVksRUFBRTtFQUMvQyxJQUFNQyxFQUFFLEdBQUcsSUFBSWhFLHFEQUFNLENBQUMrRCxZQUFZLEVBQUVBLFlBQVksQ0FBQztFQUNqREMsRUFBRSxDQUFDRyxPQUFPLENBQUNMLEtBQUssQ0FBQztBQUNuQjs7QUFFQTtBQUNPLFNBQVNNLG1CQUFtQkEsQ0FBQSxFQUFtRSxLQUFsRUMsY0FBYyxHQUFBdEksU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUc0SCxNQUFNLENBQUNNLFNBQVMsS0FBRUssWUFBWSxHQUFBdkksU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUc0SCxNQUFNLENBQUNRLE9BQU87RUFDbEdSLE1BQU0sQ0FBQ1MsbUJBQW1CLENBQUNDLGNBQWMsRUFBRUMsWUFBWSxDQUFDO0FBQzFEOztBQUVBO0FBQ08sU0FBU0MsSUFBSUEsQ0FBQSxFQUFHO0VBQ3JCOUIsT0FBTyxDQUFDQyxHQUFHLENBQUMscUJBQXFCLENBQUM7O0VBRWxDLElBQUk7SUFDRjtJQUNBRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQztJQUNsQyxJQUFNSSxNQUFNLEdBQUdELFFBQVEsQ0FBQyxDQUFDOztJQUV6QixJQUFJLENBQUNDLE1BQU0sRUFBRTtNQUNYLE1BQU0sSUFBSTBCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUNyQzs7SUFFQTtJQUNBL0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7SUFDaENNLFNBQVMsQ0FBQyxDQUFDOztJQUVYO0lBQ0FsQixTQUFTLENBQUNVLFFBQVEsQ0FBQyxDQUFDOztJQUVwQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztJQUNuQzBCLG1CQUFtQixDQUFDLENBQUM7O0lBRXJCM0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7O0lBRW5DO0lBQ0EsT0FBTztNQUNMSSxNQUFNLEVBQU5BLE1BQU07TUFDTmhCLFNBQVMsRUFBVEEsU0FBUztNQUNUK0IsYUFBYSxFQUFiQSxhQUFhO01BQ2JLLFdBQVcsRUFBWEEsV0FBVztNQUNYRSxtQkFBbUIsRUFBbkJBLG1CQUFtQjtNQUNuQnpCLFlBQVksRUFBWkEsWUFBWTtNQUNaRSxRQUFRLEVBQVJBLFFBQVE7TUFDUkcsU0FBUyxFQUFUQSxTQUFTO01BQ1RPLE1BQU0sRUFBTkE7SUFDRixDQUFDO0VBQ0gsQ0FBQyxDQUFDLE9BQU9SLEtBQUssRUFBRTtJQUNkTixPQUFPLENBQUNNLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDLE9BQU8sSUFBSTtFQUNiO0FBQ0Y7O0FBRUEsSUFBTTBCLE9BQU8sR0FBRztFQUNkRixJQUFJLEVBQUpBLElBQUk7RUFDSmxCLFVBQVUsRUFBVkEsVUFBVTtFQUNWQyxZQUFZLEVBQVpBLFlBQVk7RUFDWkosVUFBVSxFQUFWQSxVQUFVO0VBQ1ZXLGFBQWEsRUFBYkEsYUFBYTtFQUNiSyxXQUFXLEVBQVhBLFdBQVc7RUFDWFAsTUFBTSxFQUFOQSxNQUFNO0VBQ05TLG1CQUFtQixFQUFuQkEsbUJBQW1CO0VBQ25CdEMsU0FBUyxFQUFUQSxTQUFTO0VBQ1RhLFlBQVksRUFBWkEsWUFBWTtFQUNaRSxRQUFRLEVBQVJBLFFBQVE7RUFDUkcsU0FBUyxFQUFUQSxTQUFTO0VBQ1RPLE1BQU0sRUFBTkE7QUFDRixDQUFDOztBQUVELGlFQUFla0IsT0FBTyxFQUFDOztBQUV2QjtBQUNBLElBQUksT0FBT0MsTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNqQ0EsTUFBTSxDQUFDQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ0QsTUFBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksR0FBRztJQUNuQkwsSUFBSSxFQUFKQSxJQUFJO0lBQ0p6QyxTQUFTLEVBQVRBLFNBQVM7SUFDVCtCLGFBQWEsRUFBRVksT0FBTyxDQUFDWixhQUFhO0lBQ3BDRixNQUFNLEVBQU5BLE1BQU07SUFDTk8sV0FBVyxFQUFYQSxXQUFXO0lBQ1h2QixZQUFZLEVBQVpBO0VBQ0YsQ0FBQztBQUNIOztBQUVBO0FBQ0EsSUFBSSxPQUFPaEMsUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPK0QsTUFBTSxLQUFLLFdBQVcsRUFBRTtFQUNwRS9ELFFBQVEsQ0FBQ2tFLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07SUFDbEQ7SUFDQSxJQUFJL0MsU0FBUyxDQUFDSyxVQUFVLEVBQUU7TUFDeEJpQixvQkFBb0IsQ0FBQ3RCLFNBQVMsQ0FBQ0ssVUFBVSxDQUFDO0lBQzVDO0lBQ0FVLFFBQVEsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBRTtFQUNMNkIsTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUN0QyxJQUFNL0IsTUFBTSxHQUFHbkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzlDLElBQUlrQyxNQUFNLElBQUloQixTQUFTLENBQUMzQixHQUFHLEVBQUU7TUFDM0I7TUFDQTJDLE1BQU0sQ0FBQzlCLEtBQUssR0FBR2MsU0FBUyxDQUFDNUcsSUFBSSxHQUFHNEcsU0FBUyxDQUFDQyxLQUFLO01BQy9DZSxNQUFNLENBQUM3QixNQUFNLEdBQUdhLFNBQVMsQ0FBQzNHLElBQUksR0FBRzJHLFNBQVMsQ0FBQ0MsS0FBSztNQUNoRDtNQUNBN0IsSUFBSSxDQUFDNEIsU0FBUyxDQUFDM0IsR0FBRyxFQUFFMkIsU0FBUyxDQUFDN0QsS0FBSyxFQUFFNkQsU0FBUyxDQUFDMUUsS0FBSyxFQUFFMEUsU0FBUyxDQUFDMUIsU0FBUyxFQUFFbkYsOERBQWMsQ0FBQ00sTUFBTSxFQUFFTiw4REFBYyxDQUFDRyxVQUFVLENBQUM7SUFDOUg7RUFDRixDQUFDLENBQUM7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlWQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQzFCeEQ0RSxNQUFNO0VBQ3pCLFNBQUFBLE9BQVk4RSxLQUFLLEVBQUVDLE9BQU8sRUFBRSxDQUFBNUksaUZBQUEsT0FBQTZELE1BQUE7SUFDMUIsSUFBSSxDQUFDOEUsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ2QsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQUksQ0FBQ08sT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3hDLENBQUMsT0FBQXZILDhFQUFBLENBQUEyRCxNQUFBLEtBQUExRCxHQUFBLGVBQUFDLEtBQUE7O0lBRUQsU0FBQTBILFNBQVNBLENBQUNILEtBQUssRUFBRTtNQUNmLElBQVFnQixLQUFLLEdBQWMsSUFBSSxDQUF2QkEsS0FBSyxDQUFFQyxPQUFPLEdBQUssSUFBSSxDQUFoQkEsT0FBTztNQUN0QixJQUFJRCxLQUFLLENBQUN4RyxVQUFVLEVBQUU7TUFDdEIsSUFBSXdGLEtBQUssQ0FBQ2tCLE1BQU0sRUFBRTtNQUNsQkYsS0FBSyxDQUFDMUMsSUFBSSxDQUFDMEIsS0FBSyxDQUFDeEgsR0FBRyxDQUFDLEdBQUcsSUFBSTs7TUFFNUIsUUFBUXdILEtBQUssQ0FBQ3hILEdBQUc7UUFDZixLQUFLLFdBQVc7VUFDZHlJLE9BQU8sQ0FBQy9GLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNyQjtRQUNGLEtBQUssWUFBWTtVQUNmK0YsT0FBTyxDQUFDL0YsU0FBUyxDQUFDLENBQUMsQ0FBQztVQUNwQjtRQUNGLEtBQUssV0FBVztVQUNkK0YsT0FBTyxDQUFDbkcsU0FBUyxDQUFDLENBQUM7VUFDbkI7UUFDRixLQUFLLFNBQVM7VUFDWm1HLE9BQU8sQ0FBQzdGLFdBQVcsQ0FBQyxDQUFDLENBQUM7VUFDdEI7UUFDRixLQUFLLEdBQUc7VUFDTixPQUFPLElBQUksRUFBRSxLQUFBK0YsWUFBQSxFQUFBQyxhQUFBO1lBQ1gsSUFBTW5JLENBQUMsSUFBQWtJLFlBQUEsR0FBR0gsS0FBSyxDQUFDMUgsS0FBSyxjQUFBNkgsWUFBQSx1QkFBWEEsWUFBQSxDQUFhM0gsR0FBRyxDQUFDUCxDQUFDO1lBQzVCZ0ksT0FBTyxDQUFDbkcsU0FBUyxDQUFDLENBQUM7WUFDbkIsSUFBSTdCLENBQUMsT0FBQW1JLGFBQUEsR0FBS0osS0FBSyxDQUFDMUgsS0FBSyxjQUFBOEgsYUFBQSx1QkFBWEEsYUFBQSxDQUFhNUgsR0FBRyxDQUFDUCxDQUFDLEtBQUkrSCxLQUFLLENBQUN4RyxVQUFVLEVBQUU7Y0FDaEQ7WUFDRjtVQUNGO1VBQ0E7UUFDRixLQUFLLEdBQUc7UUFDUixLQUFLLEdBQUc7VUFDTixJQUFJd0csS0FBSyxDQUFDM0MsVUFBVSxFQUFFO1lBQ3BCaUIsb0JBQW9CLENBQUMwQixLQUFLLENBQUMzQyxVQUFVLENBQUM7WUFDdEMyQyxLQUFLLENBQUMzQyxVQUFVLEdBQUcsSUFBSTtZQUN2QjJDLEtBQUssQ0FBQ3pDLE1BQU0sR0FBRyxJQUFJO1VBQ3JCLENBQUMsTUFBTTtZQUNMeUMsS0FBSyxDQUFDekMsTUFBTSxHQUFHLEtBQUs7WUFDcEJ5QyxLQUFLLENBQUM1QyxRQUFRLEdBQUcsQ0FBQztZQUNsQjRDLEtBQUssQ0FBQzNDLFVBQVUsR0FBR3VCLHFCQUFxQixDQUFDcUIsT0FBTyxDQUFDeEIsTUFBTSxDQUFDO1VBQzFEO1VBQ0E7UUFDRixLQUFLLEdBQUc7UUFDUixLQUFLLEdBQUc7VUFDTndCLE9BQU8sQ0FBQy9CLFNBQVMsQ0FBQyxDQUFDO1VBQ25CO01BQ0o7SUFDRixDQUFDLE1BQUExRyxHQUFBLGFBQUFDLEtBQUE7O0lBRUQsU0FBQTRILE9BQU9BLENBQUNMLEtBQUssRUFBRTtNQUNiLElBQUksQ0FBQ2dCLEtBQUssQ0FBQzFDLElBQUksQ0FBQzBCLEtBQUssQ0FBQ3hILEdBQUcsQ0FBQyxHQUFHLEtBQUs7SUFDcEMsQ0FBQyxNQUFBQSxHQUFBLHlCQUFBQyxLQUFBOztJQUVELFNBQUE2SCxtQkFBbUJBLENBQUEsRUFBK0QsS0FBOURDLGNBQWMsR0FBQXRJLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQ2tJLFNBQVMsS0FBRUssWUFBWSxHQUFBdkksU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSSxDQUFDb0ksT0FBTztNQUM5RXhELFFBQVEsQ0FBQ3dFLG1CQUFtQixDQUFDLFNBQVMsRUFBRWQsY0FBYyxDQUFDO01BQ3ZEMUQsUUFBUSxDQUFDd0UsbUJBQW1CLENBQUMsT0FBTyxFQUFFYixZQUFZLENBQUM7TUFDbkQzRCxRQUFRLENBQUNrRSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVSLGNBQWMsQ0FBQztNQUNwRDFELFFBQVEsQ0FBQ2tFLGdCQUFnQixDQUFDLE9BQU8sRUFBRVAsWUFBWSxDQUFDO0lBQ2xELENBQUM7Ozs7OztVQ2hFSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNzQjs7QUFFdEI7QUFDaUM7O0FBRWpDO0FBQ0EsSUFBTWUsS0FBSyxHQUFHMUUsUUFBUSxDQUFDMkUsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM3Q0QsS0FBSyxDQUFDNUQsV0FBVyxvRkFLaEI7Ozs7OztBQUNEZCxRQUFRLENBQUM0RSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDOztBQUVoQztBQUNBMUUsUUFBUSxDQUFDa0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRHBDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDhCQUE4QixDQUFDOztFQUUzQyxJQUFJO0lBQ0ZELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQy9CO0lBQ0EsSUFBTUksTUFBTSxHQUFHbkMsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzlDLElBQUlrQyxNQUFNLEVBQUU7TUFDVkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFSSxNQUFNLENBQUM5QixLQUFLLEVBQUUsR0FBRyxFQUFFOEIsTUFBTSxDQUFDN0IsTUFBTSxDQUFDO01BQzNEd0IsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVJLE1BQU0sQ0FBQ3VDLEtBQUssQ0FBQ3JFLEtBQUssRUFBRSxHQUFHLEVBQUU4QixNQUFNLENBQUN1QyxLQUFLLENBQUNwRSxNQUFNLENBQUM7SUFDN0UsQ0FBQyxNQUFNO01BQ0x3QixPQUFPLENBQUNNLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQztJQUNBO0lBQ0F3Qiw4Q0FBSSxDQUFDLENBQUM7RUFDUixDQUFDLENBQUMsT0FBT3hCLEtBQUssRUFBRTtJQUNkTixPQUFPLENBQUNNLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDSSxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJc0MsSUFBc0MsRUFBRTtFQUMxQ2YsTUFBTSxDQUFDQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ0QsTUFBTSxDQUFDQyxNQUFNLENBQUNKLElBQUksR0FBR0EsMENBQUk7QUFDM0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29uc3RhbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIOOCsuODvOODoOOBruWumuaVsOWumue+qVxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xuICBDT0xTOiAxMCwgLy8g44OV44Kj44O844Or44OJ44Gu5bmF77yI44OW44Ot44OD44Kv5pWw77yJXG4gIFJPV1M6IDIwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7pq5jjgZXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgQkxPQ0tfU0laRTogMjAsIC8vIDHjg5bjg63jg4Pjgq/jga7jg5Tjgq/jgrvjg6vjgrXjgqTjgrpcbiAgU0NPUkVfVEFCTEU6IHtcbiAgICAxOiA0MCwgICAvLyAx6KGM5raI44GXXG4gICAgMjogMTAwLCAgLy8gMuihjOa2iOOBl1xuICAgIDM6IDMwMCwgIC8vIDPooYzmtojjgZdcbiAgICA0OiAxMjAwICAvLyA06KGM5raI44GX77yI44OG44OI44Oq44K577yJXG4gIH0sXG4gIFNIQVBFUzogW1xuICAgIC8vIElcbiAgICBbXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIE9cbiAgICBbXG4gICAgICBbMiwgMl0sXG4gICAgICBbMiwgMl1cbiAgICBdLFxuICAgIC8vIFRcbiAgICBbXG4gICAgICBbMCwgMywgMF0sXG4gICAgICBbMywgMywgM10sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIExcbiAgICBbXG4gICAgICBbNCwgMCwgMF0sXG4gICAgICBbNCwgNCwgNF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIEpcbiAgICBbXG4gICAgICBbMCwgMCwgNV0sXG4gICAgICBbNSwgNSwgNV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFpcbiAgICBbXG4gICAgICBbNiwgNiwgMF0sXG4gICAgICBbMCwgNiwgNl0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFNcbiAgICBbXG4gICAgICBbMCwgNywgN10sXG4gICAgICBbNywgNywgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIF0sXG4gIENPTE9SUzogW1xuICAgICcjMDAwMDAwJywgLy8gMDog56m6XG4gICAgJyMwMEZGRkYnLCAvLyAxOiBJICjjgrfjgqLjg7MpXG4gICAgJyNGRkZGMDAnLCAvLyAyOiBPICjpu4ToibIpXG4gICAgJyM4MDAwODAnLCAvLyAzOiBUICjntKspXG4gICAgJyNGRkE1MDAnLCAvLyA0OiBMICjjgqrjg6zjg7PjgrgpXG4gICAgJyMwMDAwRkYnLCAvLyA1OiBKICjpnZIpXG4gICAgJyNGRjAwMDAnLCAvLyA2OiBaICjotaQpXG4gICAgJyMwMDgwMDAnICAvLyA3OiBTICjnt5EpXG4gIF0sXG4gIEdBTUVfU1RBVEVTOiB7XG4gICAgSU5JVDogJ0lOSVQnLFxuICAgIFBMQVlJTkc6ICdQTEFZSU5HJyxcbiAgICBQQVVTRUQ6ICdQQVVTRUQnLFxuICAgIEdBTUVfT1ZFUjogJ0dBTUVfT1ZFUidcbiAgfVxufTtcbiIsIi8vIEJvYXJk44Kv44Op44K5XG4vLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLnrqHnkIbjgajjg63jgrjjg4Pjgq/jgpLmi4XlvZNcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjApIHtcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gIH1cblxuICBpc0luc2lkZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5jb2xzICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ncmlkW3ldW3hdID09PSAwO1xuICB9XG5cbiAgc2V0Q2VsbCh4LCB5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzSW5zaWRlKHgsIHkpKSB0aGlzLmdyaWRbeV1beF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpID8gdGhpcy5ncmlkW3ldW3hdIDogbnVsbDtcbiAgfVxuXG4gIG1lcmdlKHBpZWNlKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcGllY2UubWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChwaWVjZS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICB0aGlzLnNldENlbGwocGllY2UucG9zLnggKyB4LCBwaWVjZS5wb3MueSArIHksIHBpZWNlLm1hdHJpeFt5XVt4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckxpbmVzKCkge1xuICAgIGxldCBjbGVhcmVkID0gMDtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdyaWQuZmlsdGVyKHJvdyA9PiB7XG4gICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gY2VsbCAhPT0gMCkpIHtcbiAgICAgICAgY2xlYXJlZCsrO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICB3aGlsZSAodGhpcy5ncmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgdGhpcy5ncmlkLnVuc2hpZnQoQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjAsIHRldHJvbWlub3MgPSBudWxsKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjb2xzLCByb3dzKTtcbiAgICB0aGlzLnRldHJvbWlub3MgPSB0ZXRyb21pbm9zIHx8IFtcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1syLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgICBbWzAsIDQsIDRdLCBbNCwgNCwgMF1dLFxuICAgICAgW1s1LCA1LCAwXSwgWzAsIDUsIDVdXSxcbiAgICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgICBbWzAsIDAsIDddLCBbNywgNywgN11dLFxuICAgIF07XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5saW5lcyA9IDA7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zcGF3blBpZWNlKCk7XG4gIH1cblxuICBzcGF3blBpZWNlKCkge1xuICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpO1xuICAgIHRoaXMucGllY2UgPSBuZXcgUGllY2UodGhpcy50ZXRyb21pbm9zW2lkeF0sIHsgeDogMywgeTogMCB9KTtcbiAgfVxuXG4gIGRyb3BQaWVjZSgpIHtcbiAgICB0aGlzLnBpZWNlLm1vdmUoMCwgMSk7XG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubW92ZSgwLCAtMSk7XG4gICAgICB0aGlzLmJvYXJkLm1lcmdlKHRoaXMucGllY2UpO1xuICAgICAgY29uc3QgY2xlYXJlZCA9IHRoaXMuYm9hcmQuY2xlYXJMaW5lcygpO1xuICAgICAgdGhpcy5zY29yZSArPSB0aGlzLmNhbGN1bGF0ZVNjb3JlKGNsZWFyZWQpO1xuICAgICAgdGhpcy5saW5lcyArPSBjbGVhcmVkO1xuICAgICAgdGhpcy5zcGF3blBpZWNlKCk7XG4gICAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVQaWVjZShkeCkge1xuICAgIHRoaXMucGllY2UubW92ZShkeCwgMCk7XG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubW92ZSgtZHgsIDApO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZVBpZWNlKGRpcikge1xuICAgIGNvbnN0IG9sZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5waWVjZS5tYXRyaXgpKTtcbiAgICB0aGlzLnBpZWNlLnJvdGF0ZShkaXIpO1xuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9sZDtcbiAgICB9XG4gIH1cblxuICBoYXNDb2xsaXNpb24oKSB7XG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1hdHJpeFt5XVt4XSAmJlxuICAgICAgICAgICghdGhpcy5ib2FyZC5pc0luc2lkZShwb3MueCArIHgsIHBvcy55ICsgeSkgfHxcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZ2V0Q2VsbChwb3MueCArIHgsIHBvcy55ICsgeSkgIT09IDApXG4gICAgICAgICkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIGNvbnN0IHRhYmxlID0geyAxOiA0MCwgMjogMTAwLCAzOiAzMDAsIDQ6IDEyMDAgfTtcbiAgICByZXR1cm4gKHRhYmxlW2xpbmVzQ2xlYXJlZF0gfHwgMCkgKiB0aGlzLmxldmVsO1xuICB9XG59XG4iLCIvLyBQaWVjZeOCr+ODqeOCuVxuLy8g44OG44OI44Ot44Of44OO44Gu5b2i44O75L2N572u44O75Zue6Lui44KS566h55CGXG5cbmV4cG9ydCBjbGFzcyBQaWVjZSB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCwgcG9zID0geyB4OiAwLCB5OiAwIH0pIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgICB0aGlzLnBvcyA9IHsgLi4ucG9zIH07XG4gIH1cblxuICBtb3ZlKGR4LCBkeSkge1xuICAgIHRoaXMucG9zLnggKz0gZHg7XG4gICAgdGhpcy5wb3MueSArPSBkeTtcbiAgfVxuXG4gIHJvdGF0ZShkaXIgPSAxKSB7XG4gICAgLy8g5pmC6KiI5Zue44KKOiBkaXI9MSwg5Y+N5pmC6KiI5Zue44KKOiBkaXI9LTFcbiAgICBjb25zdCBOID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE4gfSwgKCkgPT4gQXJyYXkoTikuZmlsbCgwKSk7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBOOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgTjsgeCsrKSB7XG4gICAgICAgIGlmIChkaXIgPiAwKSB7XG4gICAgICAgICAgcmVzdWx0W3hdW04gLSAxIC0geV0gPSB0aGlzLm1hdHJpeFt5XVt4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRbTiAtIDEgLSB4XVt5XSA9IHRoaXMubWF0cml4W3ldW3hdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubWF0cml4ID0gcmVzdWx0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jb3JlL0dhbWUuanMnO1xuaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmpzJztcbmltcG9ydCBHYW1lVUkgZnJvbSBcIi4vdWkvR2FtZVVJLmpzXCI7XG5cbi8vIOOCsuODvOODoOOBrueKtuaFi+OBqOODreOCuOODg+OCr+OCkuOCq+ODl+OCu+ODq+WMllxuZXhwb3J0IGNvbnN0IHRldHJpc0dhbWUgPSBuZXcgR2FtZSgpO1xuXG4vLyDjg6zjg7Pjg4Djg6rjg7PjgrDplqLpgKPjga7jg5jjg6vjg5Hjg7zplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBkcmF3KGN0eCwgYm9hcmQsIHBpZWNlLCBuZXh0UGllY2UsIGNvbG9ycywgYmxvY2tTaXplKSB7XG4gIC8vIOiDjOaZr+OCkuOCr+ODquOColxuICBjdHguZmlsbFN0eWxlID0gJyNmMGYwZjAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgYm9hcmQuY29scyAqIGJsb2NrU2l6ZSwgYm9hcmQucm93cyAqIGJsb2NrU2l6ZSk7XG5cbiAgLy8g44Oc44O844OJ44KS5o+P55S7XG4gIGRyYXdNYXRyaXgoY3R4LCBib2FyZC5ncmlkLCB7IHg6IDAsIHk6IDAgfSwgY29sb3JzLCBibG9ja1NpemUpO1xuXG4gIC8vIOePvuWcqOOBruODlOODvOOCueOCkuaPj+eUu1xuICBpZiAocGllY2UpIHtcbiAgICBkcmF3TWF0cml4KGN0eCwgcGllY2UubWF0cml4LCBwaWVjZS5wb3MsIGNvbG9ycywgYmxvY2tTaXplKTtcbiAgfVxuXG4gIC8vIOasoeOBruODlOODvOOCueOCkuaPj+eUu1xuICBpZiAobmV4dFBpZWNlKSB7XG4gICAgY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGllY2UtY2FudmFzJyk7XG4gICAgaWYgKG5leHRQaWVjZUNhbnZhcykge1xuICAgICAgY29uc3QgbmV4dFBpZWNlQ3R4ID0gbmV4dFBpZWNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAobmV4dFBpZWNlQ3R4KSB7XG4gICAgICAgIG5leHRQaWVjZUN0eC5jbGVhclJlY3QoMCwgMCwgbmV4dFBpZWNlQ2FudmFzLndpZHRoLCBuZXh0UGllY2VDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgcGllY2VNYXRyaXggPSBuZXh0UGllY2UubWF0cml4O1xuICAgICAgICBjb25zdCBzdGFydFggPSAobmV4dFBpZWNlQ2FudmFzLndpZHRoIC8gMikgLSAocGllY2VNYXRyaXhbMF0ubGVuZ3RoICogYmxvY2tTaXplIC8gMik7XG4gICAgICAgIGNvbnN0IHN0YXJ0WSA9IChuZXh0UGllY2VDYW52YXMuaGVpZ2h0IC8gMikgLSAocGllY2VNYXRyaXgubGVuZ3RoICogYmxvY2tTaXplIC8gMik7XG5cbiAgICAgICAgZHJhd01hdHJpeChuZXh0UGllY2VDdHgsIHBpZWNlTWF0cml4LCB7IHg6IHN0YXJ0WCAvIGJsb2NrU2l6ZSwgeTogc3RhcnRZIC8gYmxvY2tTaXplIH0sIGNvbG9ycywgYmxvY2tTaXplKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdNYXRyaXgoY3R4LCBtYXRyaXgsIG9mZnNldCwgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbdmFsdWVdO1xuICAgICAgICBjdHguZmlsbFJlY3QoXG4gICAgICAgICAgKHggKyBvZmZzZXQueCkgKiBibG9ja1NpemUsXG4gICAgICAgICAgKHkgKyBvZmZzZXQueSkgKiBibG9ja1NpemUsXG4gICAgICAgICAgYmxvY2tTaXplLFxuICAgICAgICAgIGJsb2NrU2l6ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gVUnmm7TmlrDplqLpgKPjga7jg5jjg6vjg5Hjg7zplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTY29yZURpc3BsYXkoc2NvcmUpIHtcbiAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gIGlmIChzY29yZUVsZW1lbnQpIHtcbiAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzY29yZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGluZXNEaXNwbGF5KGxpbmVzKSB7XG4gIGNvbnN0IGxpbmVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lcycpO1xuICBpZiAobGluZXNFbGVtZW50KSB7XG4gICAgbGluZXNFbGVtZW50LnRleHRDb250ZW50ID0gbGluZXM7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxldmVsRGlzcGxheShsZXZlbCkge1xuICBjb25zdCBsZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbiAgaWYgKGxldmVsRWxlbWVudCkge1xuICAgIGxldmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGxldmVsO1xuICB9XG59XG5cbi8vIOOCsuODvOODoOOBrueKtuaFi+OCkueuoeeQhuOBmeOCi+OCquODluOCuOOCp+OCr+ODiFxuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZSA9IHtcbiAgLy8g44Ky44O844Og44Gu5Z+65pys6Kit5a6aXG4gIENPTFM6IDEwLFxuICBST1dTOiAyMCxcbiAgQkxPQ0s6IEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUsIC8vIOWQhOODluODreODg+OCr+OBruOCteOCpOOCuu+8iOODlOOCr+OCu+ODq++8iVxuICAvLyDjgrLjg7zjg6Djga7nirbmhYvlpInmlbBcbiAgYm9hcmQ6IFtdLFxuICBwaWVjZTogbnVsbCxcbiAgbmV4dFBpZWNlOiBudWxsLFxuICBzY29yZTogMCxcbiAgbGluZXM6IDAsXG4gIGxldmVsOiAxLFxuICBkcm9wQ291bnRlcjogMCxcbiAgZHJvcEludGVydmFsOiAxMDAwLCAvLyDjg5Tjg7zjgrnjgYzoh6rli5XjgafokL3jgaHjgovplpPpmpTvvIjjg5/jg6rnp5LvvIlcbiAgbGFzdFRpbWU6IDAsXG4gIGdhbWVMb29wSWQ6IG51bGwsXG4gIGlzR2FtZU92ZXI6IGZhbHNlLFxuICAvLyDjgq3jg7zlhaXlipvjga7nirbmhYvnrqHnkIZcbiAga2V5czoge30sXG4gIC8vIOOCsuODvOODoOOBruS4gOaZguWBnOatoueKtuaFi1xuICBwYXVzZWQ6IGZhbHNlLFxuXG4gIC8vIOOCsuODvOODoOOBrueKtuaFi+OCkuWIneacn+WMluOBmeOCi+mWouaVsFxuICBpbml0Qm9hcmQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KHRoaXMuUk9XUykuZmlsbCgwKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5DT0xTKS5maWxsKDApKTtcbiAgfSxcblxuICAvLyDjg63jgrDlh7rlipvplqLmlbBcbiAgbG9nU3RhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgR2FtZSBTdGF0ZTonLCB7XG4gICAgICBzY29yZTogdGhpcy5zY29yZSxcbiAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBpc0dhbWVPdmVyOiB0aGlzLmlzR2FtZU92ZXIsXG4gICAgICBwaWVjZTogdGhpcy5waWVjZSA/IHsgbWF0cml4OiB0aGlzLnBpZWNlLm1hdHJpeCwgcG9zOiB0aGlzLnBpZWNlLnBvcyB9IDogbnVsbCxcbiAgICAgIG5leHRQaWVjZTogdGhpcy5uZXh0UGllY2UgPyB7IG1hdHJpeDogdGhpcy5uZXh0UGllY2UubWF0cml4IH0gOiBudWxsLFxuICAgIH0pO1xuICB9XG59O1xuXG4vLyDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7kvZzmiJBcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcblxuLy8g44Ky44O844Og44KS5Yid5pyf5YyW44GZ44KL6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gIGNvbnNvbGUubG9nKCdpbml0R2FtZTog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gIGlmICghY2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcignQ2FudmFz6KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIOOCreODo+ODs+ODkOOCueOBruOCteOCpOOCuuOCkuioreWumlxuICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG5cbiAgLy8g44Kw44Ot44O844OQ44Or44Gq44Kz44Oz44OG44Kt44K544OI44Go44Kt44Oj44Oz44OQ44K544KSZ2FtZVN0YXRl44Gr5L+d5a2YXG4gIGdhbWVTdGF0ZS5jdHggPSBjdHg7XG4gIGdhbWVTdGF0ZS5jYW52YXMgPSBjYW52YXM7XG5cbiAgY29uc29sZS5sb2coJ2luaXRHYW1lOiDjgq3jg6Pjg7Pjg5DjgrnjgajjgrPjg7Pjg4bjgq3jgrnjg4jjga7liJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ8nKTtcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLy8g44Ky44O844Og44KS44Oq44K744OD44OI44GZ44KL6Zai5pWwXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICBjb25zb2xlLmxvZygncmVzZXRHYW1lOiDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZknKTtcbiAgdGV0cmlzR2FtZS5yZXNldCgpO1xuICBnYW1lU3RhdGUuc2NvcmUgPSB0ZXRyaXNHYW1lLnNjb3JlO1xuICBnYW1lU3RhdGUubGluZXMgPSB0ZXRyaXNHYW1lLmxpbmVzO1xuICBnYW1lU3RhdGUubGV2ZWwgPSB0ZXRyaXNHYW1lLmxldmVsO1xuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IHRldHJpc0dhbWUuaXNHYW1lT3ZlcjtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gdGV0cmlzR2FtZS5waWVjZTtcbiAgZ2FtZVN0YXRlLm5leHRQaWVjZSA9IHRldHJpc0dhbWUubmV4dFBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciA9IDA7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IDA7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgZ2FtZVN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICB1cGRhdGVTY29yZURpc3BsYXkoZ2FtZVN0YXRlLnNjb3JlKTtcbiAgdXBkYXRlTGluZXNEaXNwbGF5KGdhbWVTdGF0ZS5saW5lcyk7XG4gIHVwZGF0ZUxldmVsRGlzcGxheShnYW1lU3RhdGUubGV2ZWwpO1xuICBjb25zdCBib2FyZEZvckRyYXcgPSB7XG4gICAgZ3JpZDogZ2FtZVN0YXRlLmJvYXJkLFxuICAgIGNvbHM6IGdhbWVTdGF0ZS5DT0xTLFxuICAgIHJvd3M6IGdhbWVTdGF0ZS5ST1dTXG4gIH07XG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgYm9hcmRGb3JEcmF3LCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOOCsuODvOODoOOBruODquOCu+ODg+ODiOOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xufVxuXG4vLyDjg5Tjg7zjgrnjgpLjg4njg63jg4Pjg5fjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICBjb25zb2xlLmxvZygncGxheWVyRHJvcDog44OU44O844K544KS44OJ44Ot44OD44OX44GX44G+44GZJyk7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLmRyb3BQaWVjZSgpO1xuICBnYW1lU3RhdGUuc2NvcmUgPSB0ZXRyaXNHYW1lLnNjb3JlO1xuICBnYW1lU3RhdGUubGluZXMgPSB0ZXRyaXNHYW1lLmxpbmVzO1xuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IHRldHJpc0dhbWUuaXNHYW1lT3ZlcjtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gdGV0cmlzR2FtZS5waWVjZTtcbiAgZ2FtZVN0YXRlLm5leHRQaWVjZSA9IHRldHJpc0dhbWUubmV4dFBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIHVwZGF0ZVNjb3JlRGlzcGxheShnYW1lU3RhdGUuc2NvcmUpO1xuICB1cGRhdGVMaW5lc0Rpc3BsYXkoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgdXBkYXRlTGV2ZWxEaXNwbGF5KGdhbWVTdGF0ZS5sZXZlbCk7XG4gIGRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG5cbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXllckRyb3A6IOOCsuODvOODoOOCquODvOODkOODvO+8gScpO1xuICAgIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZVN0YXRlLmdhbWVMb29wSWQpO1xuICB9XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciA9IDA7XG59XG5cbi8vIOODlOODvOOCueOCkuenu+WLleOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJNb3ZlOiDjg5Tjg7zjgrnjgpLnp7vli5XjgZfjgb7jgZknLCB7IGRpciB9KTtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG4gIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG59XG5cbi8vIOODlOODvOOCueOCkuWbnui7ouOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclJvdGF0ZShkaXIpIHtcbiAgY29uc29sZS5sb2coJ3BsYXllclJvdGF0ZTog44OU44O844K544KS5Zue6Lui44GX44G+44GZJywgeyBkaXIgfSk7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlKGRpcik7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG59XG5cbi8vIOOCsuODvOODoOODq+ODvOODl1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lID0gMCkge1xuICBpZiAoZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gZ2FtZVN0YXRlLmxhc3RUaW1lO1xuICBnYW1lU3RhdGUubGFzdFRpbWUgPSB0aW1lO1xuXG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciArPSBkZWx0YVRpbWU7XG4gIGlmIChnYW1lU3RhdGUuZHJvcENvdW50ZXIgPiBnYW1lU3RhdGUuZHJvcEludGVydmFsKSB7XG4gICAgcGxheWVyRHJvcCgpO1xuICB9XG5cbiAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG59XG5leHBvcnQgY29uc3QgZ2FtZVVJID0gbmV3IEdhbWVVSShnYW1lU3RhdGUsIHtcbiAgbW92ZVBpZWNlOiB0ZXRyaXNHYW1lLm1vdmVQaWVjZS5iaW5kKHRldHJpc0dhbWUpLFxuICBkcm9wUGllY2U6IHRldHJpc0dhbWUuZHJvcFBpZWNlLmJpbmQodGV0cmlzR2FtZSksXG4gIHJvdGF0ZVBpZWNlOiB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlLmJpbmQodGV0cmlzR2FtZSksXG4gIHVwZGF0ZSxcbiAgcmVzZXRHYW1lXG59KTtcblxuXG4vLyDjgq3jg7zjg4/jg7Pjg4njg6nplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50LCBnYW1lSW5zdGFuY2UpIHtcbiAgY29uc3QgdWkgPSBuZXcgR2FtZVVJKGdhbWVJbnN0YW5jZSwgZ2FtZUluc3RhbmNlKTtcbiAgdWkub25LZXlEb3duKGV2ZW50KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlS2V5VXAoZXZlbnQsIGdhbWVJbnN0YW5jZSkge1xuICBjb25zdCB1aSA9IG5ldyBHYW1lVUkoZ2FtZUluc3RhbmNlLCBnYW1lSW5zdGFuY2UpO1xuICB1aS5vbktleVVwKGV2ZW50KTtcbn1cblxuLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844Gu6Kit5a6aXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhrZXlEb3duSGFuZGxlciA9IGdhbWVVSS5vbktleURvd24sIGtleVVwSGFuZGxlciA9IGdhbWVVSS5vbktleVVwKSB7XG4gIGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzKGtleURvd25IYW5kbGVyLCBrZXlVcEhhbmRsZXIpO1xufVxuXG4vLyDjgrLjg7zjg6DliJ3mnJ/ljJZcbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG5cbiAgdHJ5IHtcbiAgICAvLyDjgrLjg7zjg6DnirbmhYvjgpLliJ3mnJ/ljJZcbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG4gICAgY29uc3QgY2FudmFzID0gaW5pdEdhbWUoKTtcblxuICAgIGlmICghY2FudmFzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ+OCreODo+ODs+ODkOOCueOBruWIneacn+WMluOBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgIH1cblxuICAgIC8vIOOCsuODvOODoOOCkuODquOCu+ODg+ODiFxuICAgIGNvbnNvbGUubG9nKCdpbml0OiDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZknKTtcbiAgICByZXNldEdhbWUoKTtcblxuICAgIC8vIOOCsuODvOODoOeKtuaFi+OCkuODreOCsOOBq+WHuuWKm1xuICAgIGdhbWVTdGF0ZS5sb2dTdGF0ZSgpO1xuXG4gICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG4gICAgY29uc29sZS5sb2coJ2luaXQ6IOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumuOBl+OBvuOBmScpO1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGNvbnNvbGUubG9nKCdpbml0OiDjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ8nKTtcblxuICAgIC8vIOWklumDqOOBi+OCieWPgueFp+OBp+OBjeOCi+OCiOOBhuOBq+W/heimgeOBquOCguOBruOCkui/lOOBmVxuICAgIHJldHVybiB7XG4gICAgICBjYW52YXMsXG4gICAgICBnYW1lU3RhdGUsXG4gICAgICBoYW5kbGVLZXlEb3duLFxuICAgICAgaGFuZGxlS2V5VXAsXG4gICAgICBzZXR1cEV2ZW50TGlzdGVuZXJzLFxuICAgICAgZXZlbnRNYW5hZ2VyLFxuICAgICAgaW5pdEdhbWUsXG4gICAgICByZXNldEdhbWUsXG4gICAgICB1cGRhdGUsXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmNvbnN0IGV4cG9ydHMgPSB7XG4gIGluaXQsXG4gIHBsYXllck1vdmUsXG4gIHBsYXllclJvdGF0ZSxcbiAgcGxheWVyRHJvcCxcbiAgaGFuZGxlS2V5RG93bixcbiAgaGFuZGxlS2V5VXAsXG4gIGdhbWVVSSxcbiAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgZ2FtZVN0YXRlLFxuICBldmVudE1hbmFnZXIsXG4gIGluaXRHYW1lLFxuICByZXNldEdhbWUsXG4gIHVwZGF0ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7XG5cbi8vIOODhuOCueODiOeUqOOBq+OCsOODreODvOODkOODq+OBq+WFrOmWi1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy50ZXRyaXMgPSB3aW5kb3cudGV0cmlzIHx8IHt9O1xuICB3aW5kb3cudGV0cmlzLmdhbWUgPSB7XG4gICAgaW5pdCxcbiAgICBnYW1lU3RhdGUsXG4gICAgaGFuZGxlS2V5RG93bjogZXhwb3J0cy5oYW5kbGVLZXlEb3duLFxuICAgIGdhbWVVSSxcbiAgICBoYW5kbGVLZXlVcCxcbiAgICBldmVudE1hbmFnZXIsXG4gIH07XG59XG5cbi8vIOOCsuODvOODoOOBruOCueOCv+ODvOODiO+8iOODluODqeOCpuOCtuWun+ihjOaZguOBruOBv++8iVxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyDml6LlrZjjga7jgrLjg7zjg6Djg6vjg7zjg5fjgpLjgq/jg6rjgqJcbiAgICBpZiAoZ2FtZVN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgICB9XG4gICAgaW5pdEdhbWUoKTtcbiAgfSk7ICAvLyDjgqbjgqPjg7Pjg4njgqbjg6rjgrXjgqTjgrrmmYLjga7lh6bnkIZcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmIChjYW52YXMgJiYgZ2FtZVN0YXRlLmN0eCkge1xuICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K644KS5YaN6Kit5a6aXG4gICAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIGdhbWVTdGF0ZS5CTE9DSztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIGdhbWVTdGF0ZS5CTE9DSztcbiAgICAgIC8vIOWGjeaPj+eUu1xuICAgICAgZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgZ2FtZVN0YXRlLm5leHRQaWVjZSwgR0FNRV9DT05TVEFOVFMuQ09MT1JTLCBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkge1xuICBjb25zdHJ1Y3RvcihzdGF0ZSwgYWN0aW9ucykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHRoaXM7XG4gICAgaWYgKHN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBpZiAoZXZlbnQucmVwZWF0KSByZXR1cm47XG4gICAgc3RhdGUua2V5c1tldmVudC5rZXldID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGFjdGlvbnMubW92ZVBpZWNlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGFjdGlvbnMucm90YXRlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3QgeSA9IHN0YXRlLnBpZWNlPy5wb3MueTtcbiAgICAgICAgICBhY3Rpb25zLmRyb3BQaWVjZSgpO1xuICAgICAgICAgIGlmICh5ID09PSBzdGF0ZS5waWVjZT8ucG9zLnkgfHwgc3RhdGUuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncCc6XG4gICAgICBjYXNlICdQJzpcbiAgICAgICAgaWYgKHN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShzdGF0ZS5nYW1lTG9vcElkKTtcbiAgICAgICAgICBzdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgICAgICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLmxhc3RUaW1lID0gMDtcbiAgICAgICAgICBzdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFjdGlvbnMudXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3InOlxuICAgICAgY2FzZSAnUic6XG4gICAgICAgIGFjdGlvbnMucmVzZXRHYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlLmtleXNbZXZlbnQua2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0dXBFdmVudExpc3RlbmVycyhrZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duLCBrZXlVcEhhbmRsZXIgPSB0aGlzLm9uS2V5VXApIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXG4gKiDjg4bjg4jjg6rjgrnjgrLjg7zjg6Djga7jgqjjg7Pjg4jjg6rjg7zjg53jgqTjg7Pjg4hcbiAqL1xuXG4vLyDjgrnjgr/jgqTjg6vjgrfjg7zjg4jjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLy8g44Ky44O844Og44Oi44K444Ol44O844Or44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9nYW1lLmpzJztcblxuLy8g44OH44OQ44OD44Kw55So44Gu44K544K/44Kk44Or44KS6L+95YqgXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgI2dhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuYDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4vLyDjg4njgq3jg6Xjg6Hjg7Pjg4jjga7oqq3jgb/ovrzjgb/lrozkuobjgpLlvoXjgaPjgabjgrLjg7zjg6DjgpLliJ3mnJ/ljJZcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIOOCpOODmeODs+ODiOOBjOeZuueBq+OBl+OBvuOBl+OBnycpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZLi4uJyk7XG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu54q25oWL44KS56K66KqNXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K6OicsIGNhbnZhcy53aWR0aCwgJ3gnLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnNvbGUubG9nKCfjgq3jg6Pjg7Pjg5Djgrnjga7jgrnjgr/jgqTjg6vjgrXjgqTjgro6JywgY2FudmFzLnN0eWxlLndpZHRoLCAneCcsIGNhbnZhcy5zdHlsZS5oZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfjgq3jg6Pjg7Pjg5DjgrnopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICB9XG4gICAgLy8g44Ky44O844Og44KS6ZaL5aeLXG4gICAgaW5pdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX0NPTlNUQU5UUyIsIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSIsIlNDT1JFX1RBQkxFIiwiU0hBUEVTIiwiQ09MT1JTIiwiR0FNRV9TVEFURVMiLCJJTklUIiwiUExBWUlORyIsIlBBVVNFRCIsIkdBTUVfT1ZFUiIsIkJvYXJkIiwiY29scyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJjbGVhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsImlzSW5zaWRlIiwieCIsInkiLCJpc0VtcHR5Iiwic2V0Q2VsbCIsImdldENlbGwiLCJtZXJnZSIsInBpZWNlIiwibWF0cml4IiwicG9zIiwiY2xlYXJMaW5lcyIsImNsZWFyZWQiLCJmaWx0ZXIiLCJyb3ciLCJldmVyeSIsImNlbGwiLCJ1bnNoaWZ0IiwiUGllY2UiLCJHYW1lIiwidGV0cm9taW5vcyIsImJvYXJkIiwicmVzZXQiLCJzY29yZSIsImxpbmVzIiwibGV2ZWwiLCJpc0dhbWVPdmVyIiwic3Bhd25QaWVjZSIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRyb3BQaWVjZSIsIm1vdmUiLCJoYXNDb2xsaXNpb24iLCJjYWxjdWxhdGVTY29yZSIsIm1vdmVQaWVjZSIsImR4Iiwicm90YXRlUGllY2UiLCJkaXIiLCJvbGQiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJyb3RhdGUiLCJfdGhpcyRwaWVjZSIsImxpbmVzQ2xlYXJlZCIsInRhYmxlIiwiX29iamVjdFNwcmVhZCIsImR5IiwiTiIsInJlc3VsdCIsIkdhbWVVSSIsInRldHJpc0dhbWUiLCJkcmF3IiwiY3R4IiwibmV4dFBpZWNlIiwiY29sb3JzIiwiYmxvY2tTaXplIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3TWF0cml4IiwibmV4dFBpZWNlQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5leHRQaWVjZUN0eCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInBpZWNlTWF0cml4Iiwic3RhcnRYIiwic3RhcnRZIiwib2Zmc2V0IiwiZm9yRWFjaCIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInNjb3JlRWxlbWVudCIsInRleHRDb250ZW50IiwidXBkYXRlTGluZXNEaXNwbGF5IiwibGluZXNFbGVtZW50IiwidXBkYXRlTGV2ZWxEaXNwbGF5IiwibGV2ZWxFbGVtZW50IiwiZ2FtZVN0YXRlIiwiQkxPQ0siLCJkcm9wQ291bnRlciIsImRyb3BJbnRlcnZhbCIsImxhc3RUaW1lIiwiZ2FtZUxvb3BJZCIsImtleXMiLCJwYXVzZWQiLCJpbml0Qm9hcmQiLCJtYXAiLCJsb2dTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImluaXRHYW1lIiwiY2FudmFzIiwiZXJyb3IiLCJyZXNldEdhbWUiLCJib2FyZEZvckRyYXciLCJwbGF5ZXJEcm9wIiwiYWxlcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInBsYXllck1vdmUiLCJwbGF5ZXJSb3RhdGUiLCJ1cGRhdGUiLCJ0aW1lIiwiZGVsdGFUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZ2FtZVVJIiwiYmluZCIsImhhbmRsZUtleURvd24iLCJldmVudCIsImdhbWVJbnN0YW5jZSIsInVpIiwib25LZXlEb3duIiwiaGFuZGxlS2V5VXAiLCJvbktleVVwIiwic2V0dXBFdmVudExpc3RlbmVycyIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiaW5pdCIsIkVycm9yIiwiZXhwb3J0cyIsIndpbmRvdyIsInRldHJpcyIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdGUiLCJhY3Rpb25zIiwicmVwZWF0IiwiX3N0YXRlJHBpZWNlIiwiX3N0YXRlJHBpZWNlMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIl0sInNvdXJjZVJvb3QiOiIifQ==