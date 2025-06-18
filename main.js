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
/* harmony export */   setTetrisGame: () => (/* binding */ setTetrisGame),
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
function setTetrisGame(instance) {
  tetrisGame = instance;
}

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
  dropInterval: 0, // ピースが自動で落ちる間隔（ミリ秒）- 初期化時にGameインスタンスから設定
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
  global.draw(gameState.ctx, boardForDraw, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
  console.log('resetGame: ゲームのリセットが完了しました');
}

// ピースをドロップする関数
function playerDrop() {
  if (gameState.isGameOver || gameState.paused) return;
  console.log('playerDrop: ピースをドロップします');
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
  global.draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);

  if (gameState.isGameOver) {
    console.log('playerDrop: ゲームオーバー！');
    alert('Game Over!');
    cancelAnimationFrame(gameState.gameLoopId);
  }
  gameState.dropCounter = 0;
}

// ピースを移動する関数
function playerMove(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  console.log('playerMove: ピースを移動します', { dir: dir });
  if (gameState.isGameOver) return;
  tetrisGame.movePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  global.draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
}

// ピースを回転する関数
function playerRotate(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  console.log('playerRotate: ピースを回転します', { dir: dir });
  if (gameState.isGameOver) return;
  tetrisGame.rotatePiece(dir);
  gameState.piece = tetrisGame.piece;
  gameState.board = tetrisGame.board.grid;
  global.draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
}

// ゲームループ
function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (gameState.paused) return;
  var deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;

  // 現在のレベルに応じたドロップ間隔を更新
  gameState.dropInterval = tetrisGame.getDropInterval();

  gameState.dropCounter += deltaTime;
  if (gameState.dropCounter > gameState.dropInterval) {
    playerDrop();
  }

  global.draw(gameState.ctx, gameState.board, gameState.piece, tetrisGame.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
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
function handleKeyDown(event) {
  gameUI.onKeyDown(event);
}


function handleKeyUp(event) {
  gameUI.onKeyUp(event);
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
      global.draw(gameState.ctx, gameState.board, gameState.piece, gameState.nextPiece, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSTtJQUNULENBQUMsRUFBRSxHQUFHLEVBQUc7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0VBQ047RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNU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RUFBRTtJQUNkTixPQUFPLENBQUNNLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDSyxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJb0MsSUFBc0MsRUFBRTtFQUMxQ2YsTUFBTSxDQUFDQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ0QsTUFBTSxDQUFDQyxNQUFNLENBQUNKLElBQUksR0FBR0EsMENBQUk7QUFDM0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29uc3RhbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIOOCsuODvOODoOOBruWumuaVsOWumue+qVxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xuICBDT0xTOiAxMCwgLy8g44OV44Kj44O844Or44OJ44Gu5bmF77yI44OW44Ot44OD44Kv5pWw77yJXG4gIFJPV1M6IDIwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7pq5jjgZXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgQkxPQ0tfU0laRTogMjAsIC8vIDHjg5bjg63jg4Pjgq/jga7jg5Tjgq/jgrvjg6vjgrXjgqTjgrpcbiAgU0NPUkVfVEFCTEU6IHtcbiAgICAxOiA0MCwgICAvLyAx6KGM5raI44GXXG4gICAgMjogMTAwLCAgLy8gMuihjOa2iOOBl1xuICAgIDM6IDMwMCwgIC8vIDPooYzmtojjgZdcbiAgICA0OiAxMjAwICAvLyA06KGM5raI44GX77yI44OG44OI44Oq44K577yJXG4gIH0sXG4gIFNIQVBFUzogW1xuICAgIC8vIElcbiAgICBbXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIE9cbiAgICBbXG4gICAgICBbMiwgMl0sXG4gICAgICBbMiwgMl1cbiAgICBdLFxuICAgIC8vIFRcbiAgICBbXG4gICAgICBbMCwgMywgMF0sXG4gICAgICBbMywgMywgM10sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIExcbiAgICBbXG4gICAgICBbNCwgMCwgMF0sXG4gICAgICBbNCwgNCwgNF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIEpcbiAgICBbXG4gICAgICBbMCwgMCwgNV0sXG4gICAgICBbNSwgNSwgNV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFpcbiAgICBbXG4gICAgICBbNiwgNiwgMF0sXG4gICAgICBbMCwgNiwgNl0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFNcbiAgICBbXG4gICAgICBbMCwgNywgN10sXG4gICAgICBbNywgNywgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIF0sXG4gIENPTE9SUzogW1xuICAgICcjMDAwMDAwJywgLy8gMDog56m6XG4gICAgJyMwMEZGRkYnLCAvLyAxOiBJICjjgrfjgqLjg7MpXG4gICAgJyNGRkZGMDAnLCAvLyAyOiBPICjpu4ToibIpXG4gICAgJyM4MDAwODAnLCAvLyAzOiBUICjntKspXG4gICAgJyNGRkE1MDAnLCAvLyA0OiBMICjjgqrjg6zjg7PjgrgpXG4gICAgJyMwMDAwRkYnLCAvLyA1OiBKICjpnZIpXG4gICAgJyNGRjAwMDAnLCAvLyA2OiBaICjotaQpXG4gICAgJyMwMDgwMDAnICAvLyA3OiBTICjnt5EpXG4gIF0sXG4gIEdBTUVfU1RBVEVTOiB7XG4gICAgSU5JVDogJ0lOSVQnLFxuICAgIFBMQVlJTkc6ICdQTEFZSU5HJyxcbiAgICBQQVVTRUQ6ICdQQVVTRUQnLFxuICAgIEdBTUVfT1ZFUjogJ0dBTUVfT1ZFUidcbiAgfVxufTtcbiIsIi8vIEJvYXJk44Kv44Op44K5XG4vLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLnrqHnkIbjgajjg63jgrjjg4Pjgq/jgpLmi4XlvZNcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjApIHtcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gIH1cblxuICBpc0luc2lkZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5jb2xzICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ncmlkW3ldW3hdID09PSAwO1xuICB9XG5cbiAgc2V0Q2VsbCh4LCB5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzSW5zaWRlKHgsIHkpKSB0aGlzLmdyaWRbeV1beF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpID8gdGhpcy5ncmlkW3ldW3hdIDogbnVsbDtcbiAgfVxuXG4gIG1lcmdlKHBpZWNlKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcGllY2UubWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChwaWVjZS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICB0aGlzLnNldENlbGwocGllY2UucG9zLnggKyB4LCBwaWVjZS5wb3MueSArIHksIHBpZWNlLm1hdHJpeFt5XVt4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckxpbmVzKCkge1xuICAgIGxldCBjbGVhcmVkID0gMDtcbiAgICB0aGlzLmdyaWQgPSB0aGlzLmdyaWQuZmlsdGVyKHJvdyA9PiB7XG4gICAgICBpZiAocm93LmV2ZXJ5KGNlbGwgPT4gY2VsbCAhPT0gMCkpIHtcbiAgICAgICAgY2xlYXJlZCsrO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICB3aGlsZSAodGhpcy5ncmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgdGhpcy5ncmlkLnVuc2hpZnQoQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjAsIHRldHJvbWlub3MgPSBudWxsKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjb2xzLCByb3dzKTtcbiAgICB0aGlzLnRldHJvbWlub3MgPSB0ZXRyb21pbm9zIHx8IFtcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1syLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgICBbWzAsIDQsIDRdLCBbNCwgNCwgMF1dLFxuICAgICAgW1s1LCA1LCAwXSwgWzAsIDUsIDVdXSxcbiAgICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgICBbWzAsIDAsIDddLCBbNywgNywgN11dLFxuICAgIF07XG4gICAgXG4gICAgLy8g54++5Zyo44Gu44OU44O844K544Go5qyh44Gu44OU44O844K5XG4gICAgdGhpcy5waWVjZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0UGllY2UgPSBudWxsO1xuICAgIFxuICAgIC8vIOODrOODmeODq+OBq+W/nOOBmOOBn+ODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgIHRoaXMubGV2ZWxTcGVlZHMgPSBbXG4gICAgICAxMDAwLCAvLyDjg6zjg5njg6sxOiAxLjDnp5JcbiAgICAgIDkwMCwgIC8vIOODrOODmeODqzI6IDAuOeenklxuICAgICAgODAwLCAgLy8g44Os44OZ44OrMzogMC4456eSXG4gICAgICA3MDAsICAvLyDjg6zjg5njg6s0OiAwLjfnp5JcbiAgICAgIDYwMCwgIC8vIOODrOODmeODqzU6IDAuNuenklxuICAgICAgNTAwLCAgLy8g44Os44OZ44OrNjogMC4156eSXG4gICAgICA0MDAsICAvLyDjg6zjg5njg6s3OiAwLjTnp5JcbiAgICAgIDMwMCwgIC8vIOODrOODmeODqzg6IDAuM+enklxuICAgICAgMjAwLCAgLy8g44Os44OZ44OrOTogMC4y56eSXG4gICAgICAxMDAgICAvLyDjg6zjg5njg6sxMOS7pemZjTogMC4x56eSXG4gICAgXTtcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarjg6njgqTjg7PmlbBcbiAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSAxMDtcbiAgICBcbiAgICAvLyDliJ3mnJ/ljJbmmYLjgavmnIDliJ3jga7jg5Tjg7zjgrnjgpLnlJ/miJBcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgKi9cbiAgZ2V0RHJvcEludGVydmFsKCkge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBNYXRoLm1pbih0aGlzLmxldmVsIC0gMSwgdGhpcy5sZXZlbFNwZWVkcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGhpcy5sZXZlbFNwZWVkc1tsZXZlbEluZGV4XTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr+OBl+OAgeW/heimgeOBq+W/nOOBmOOBpuODrOODmeODq+OCkuS4iuOBkuOCi1xuICAgKi9cbiAgLyoqXG4gICAqIOaWsOOBl+OBhOODlOODvOOCueOCkuS9nOaIkOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDjg4bjg4jjg63jg5/jg47jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybnMge1BpZWNlfSDmlrDjgZfjgYTjg5Tjg7zjgrnjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIGNyZWF0ZVBpZWNlKGluZGV4KSB7XG4gICAgY29uc3QgbWF0cml4ID0gdGhpcy50ZXRyb21pbm9zW2luZGV4ICUgdGhpcy50ZXRyb21pbm9zLmxlbmd0aF07XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKHRoaXMuYm9hcmQuY29scyAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgcmV0dXJuIG5ldyBQaWVjZShtYXRyaXgsIHsgeCwgeTogMCB9KTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMucGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMubGluZXMgPSAwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgqLjg4Pjg5fjgpLjg4Hjgqfjg4Pjgq/jgZfjgIHlv4XopoHjgavlv5zjgZjjgabjg6zjg5njg6vjgpLkuIrjgZLjgotcbiAgICovXG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBjb25zdCBuZXdMZXZlbCA9IE1hdGguZmxvb3IodGhpcy5saW5lcyAvIHRoaXMubGluZXNQZXJMZXZlbCkgKyAxO1xuICAgIGlmIChuZXdMZXZlbCA+IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpLnp7vli5XjgZXjgZvjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gWOaWueWQkeOBruenu+WLlemHj1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g56e75YuV44GM5oiQ5Yqf44GX44Gf44GL44Gp44GG44GLXG4gICAqL1xuICBtb3ZlUGllY2UoZHgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnBpZWNlLm1vdmUoZHgsIDApO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBq+aIu+OBmVxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoLWR4LCAwKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDooZ3nqoHliKTlrprjgpLooYzjgYZcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOihneeqgeOBl+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgaGFzQ29sbGlzaW9uKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g44Oc44O844OJ44Gu5aSW5YG044GL44CB44GZ44Gn44Gr44OW44Ot44OD44Kv44GM44GC44KL5aC05ZCI44Gv6KGd56qBXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYm9hcmRYIDwgMCB8fFxuICAgICAgICAgICAgYm9hcmRYID49IHRoaXMuYm9hcmQuY29scyB8fFxuICAgICAgICAgICAgYm9hcmRZID49IHRoaXMuYm9hcmQucm93cyB8fFxuICAgICAgICAgICAgKGJvYXJkWSA+PSAwICYmIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gIT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS55Sf5oiQ44GZ44KLXG4gICAqL1xuICBzcGF3blBpZWNlKCkge1xuICAgIHRoaXMucGllY2UgPSB0aGlzLm5leHRQaWVjZSB8fCB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIFxuICAgIC8vIOaWsOOBl+OBhOODlOODvOOCueOBjOacgOWIneOBi+OCieihneeqgeOBl+OBpuOBhOOBn+OCieOCsuODvOODoOOCquODvOODkOODvFxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkjHjg57jgrnkuIvjgavnp7vli5XjgZXjgZvjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOenu+WLleOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgZHJvcFBpZWNlKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMucGllY2UubW92ZSgwLCAxKTtcbiAgICBcbiAgICAvLyDooZ3nqoHjgZfjgZ/jgonlhYPjga7kvY3nva7jgavmiLvjgZfjgablm7rlrppcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKDAsIC0xKTtcbiAgICAgIHRoaXMubWVyZ2VQaWVjZSgpO1xuICAgICAgdGhpcy5jbGVhckxpbmVzKCk7XG4gICAgICB0aGlzLnNwYXduUGllY2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg5Tjg7zjgrnjgpLjg5zjg7zjg4njgavlm7rlrprjgZnjgotcbiAgICovXG4gIG1lcmdlUGllY2UoKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBjb25zdCBib2FyZFggPSBwb3MueCArIHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIGJvYXJkWSA8IHRoaXMuYm9hcmQucm93cyAmJiBib2FyZFggPj0gMCAmJiBib2FyZFggPCB0aGlzLmJvYXJkLmNvbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gPSBtYXRyaXhbeV1beF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog5o+D44Gj44Gf44Op44Kk44Oz44KS5raI5Y6744GZ44KLXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKi9cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBsZXQgbGluZXNDbGVhcmVkID0gMDtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gdGhpcy5ib2FyZC5yb3dzIC0gMTsgeSA+PSAwOyB5LS0pIHtcbiAgICAgIC8vIOODqeOCpOODs+OBjOOBmeOBueOBpuWfi+OBvuOBo+OBpuOBhOOCi+OBi+ODgeOCp+ODg+OCr1xuICAgICAgY29uc3QgaXNMaW5lQ29tcGxldGUgPSB0aGlzLmJvYXJkLmdyaWRbeV0uZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKTtcbiAgICAgIFxuICAgICAgaWYgKGlzTGluZUNvbXBsZXRlKSB7XG4gICAgICAgIC8vIOODqeOCpOODs+OCkua2iOWOu+OBl+OBpuS4iuOBq+OBmuOCieOBmVxuICAgICAgICB0aGlzLmJvYXJkLmdyaWQuc3BsaWNlKHksIDEpO1xuICAgICAgICB0aGlzLmJvYXJkLmdyaWQudW5zaGlmdChBcnJheSh0aGlzLmJvYXJkLmNvbHMpLmZpbGwoMCkpO1xuICAgICAgICBsaW5lc0NsZWFyZWQrKztcbiAgICAgICAgdGhpcy5saW5lcysrO1xuICAgICAgICBcbiAgICAgICAgLy8g44K544Kz44Ki44KS5pu05pawXG4gICAgICAgIHRoaXMudXBkYXRlU2NvcmUobGluZXNDbGVhcmVkKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr1xuICAgICAgICB0aGlzLmNoZWNrTGV2ZWxVcCgpO1xuICAgICAgICBcbiAgICAgICAgLy8g5ZCM44GY6KGM44KS5YaN5bqm44OB44Kn44OD44Kv44GZ44KL77yIMeOBpOS4i+OBq+OBmuOCjOOBn+ihjOOCkuODgeOCp+ODg+OCr+OBmeOCi+OBn+OCge+8iVxuICAgICAgICB5Kys7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBsaW5lc0NsZWFyZWQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKi9cbiAgdXBkYXRlU2NvcmUobGluZXNDbGVhcmVkKSB7XG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDEwMCwgMzAwLCA1MDAsIDgwMF07IC8vIDEtNOODqeOCpOODs+a2iOOBl+OBn+OBqOOBjeOBruW+l+eCuVxuICAgIHRoaXMuc2NvcmUgKz0gcG9pbnRzW01hdGgubWluKGxpbmVzQ2xlYXJlZCwgNCldICogdGhpcy5sZXZlbDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkuWbnui7ouOBleOBm+OCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyIC0g5Zue6Lui5pa55ZCRICgxOiDmmYLoqIjlm57jgoosIC0xOiDlj43mmYLoqIjlm57jgoopXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDlm57ou6LjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIHJvdGF0ZVBpZWNlKGRpcikge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IG9sZE1hdHJpeCA9IHRoaXMucGllY2UubWF0cml4O1xuICAgIHRoaXMucGllY2Uucm90YXRlKGRpcik7XG4gICAgXG4gICAgLy8g6KGd56qB44GX44Gf44KJ5YWD44Gr5oi744GZXG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubWF0cml4ID0gb2xkTWF0cml4O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLy8gUGllY2Xjgq/jg6njgrlcbi8vIOODhuODiOODreODn+ODjuOBruW9ouODu+S9jee9ruODu+Wbnui7ouOCkueuoeeQhlxuXG5leHBvcnQgY2xhc3MgUGllY2Uge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHBvcyA9IHsgeDogMCwgeTogMCB9KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5wb3MgPSB7IC4uLnBvcyB9O1xuICB9XG5cbiAgbW92ZShkeCwgZHkpIHtcbiAgICB0aGlzLnBvcy54ICs9IGR4O1xuICAgIHRoaXMucG9zLnkgKz0gZHk7XG4gIH1cblxuICByb3RhdGUoZGlyID0gMSkge1xuICAgIC8vIOaZguioiOWbnuOCijogZGlyPTEsIOWPjeaZguioiOWbnuOCijogZGlyPS0xXG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBOIH0sICgpID0+IEFycmF5KE4pLmZpbGwoMCkpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTjsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE47IHgrKykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgIHJlc3VsdFt4XVtOIC0gMSAtIHldID0gdGhpcy5tYXRyaXhbeV1beF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W04gLSAxIC0geF1beV0gPSB0aGlzLm1hdHJpeFt5XVt4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hdHJpeCA9IHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY29yZS9HYW1lLmpzJztcbmltcG9ydCB7IEdBTUVfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5qcyc7XG5pbXBvcnQgR2FtZVVJIGZyb20gXCIuL3VpL0dhbWVVSS5qc1wiO1xuXG4vLyDjgrLjg7zjg6Djga7nirbmhYvjgajjg63jgrjjg4Pjgq/jgpLjgqvjg5fjgrvjg6vljJZcbmV4cG9ydCBsZXQgdGV0cmlzR2FtZSA9IG5ldyBHYW1lKCk7XG5leHBvcnQgZnVuY3Rpb24gc2V0VGV0cmlzR2FtZShpbnN0YW5jZSkge1xuICB0ZXRyaXNHYW1lID0gaW5zdGFuY2U7XG59XG5cbi8vIOODrOODs+ODgOODquODs+OCsOmWoumAo+OBruODmOODq+ODkeODvOmWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGRyYXcoY3R4LCBib2FyZCwgcGllY2UsIG5leHRQaWVjZSwgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgLy8g6IOM5pmv44KS44Kv44Oq44KiXG4gIGN0eC5maWxsU3R5bGUgPSAnI2YwZjBmMCc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBib2FyZC5jb2xzICogYmxvY2tTaXplLCBib2FyZC5yb3dzICogYmxvY2tTaXplKTtcblxuICAvLyDjg5zjg7zjg4njgpLmj4/nlLtcbiAgZHJhd01hdHJpeChjdHgsIGJvYXJkLmdyaWQsIHsgeDogMCwgeTogMCB9LCBjb2xvcnMsIGJsb2NrU2l6ZSk7XG5cbiAgLy8g54++5Zyo44Gu44OU44O844K544KS5o+P55S7XG4gIGlmIChwaWVjZSkge1xuICAgIGRyYXdNYXRyaXgoY3R4LCBwaWVjZS5tYXRyaXgsIHBpZWNlLnBvcywgY29sb3JzLCBibG9ja1NpemUpO1xuICB9XG5cbiAgLy8g5qyh44Gu44OU44O844K544KS5o+P55S7XG4gIGlmIChuZXh0UGllY2UpIHtcbiAgICBjb25zdCBuZXh0UGllY2VDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC1waWVjZS1jYW52YXMnKTtcbiAgICBpZiAobmV4dFBpZWNlQ2FudmFzKSB7XG4gICAgICBjb25zdCBuZXh0UGllY2VDdHggPSBuZXh0UGllY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmIChuZXh0UGllY2VDdHgpIHtcbiAgICAgICAgbmV4dFBpZWNlQ3R4LmNsZWFyUmVjdCgwLCAwLCBuZXh0UGllY2VDYW52YXMud2lkdGgsIG5leHRQaWVjZUNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBwaWVjZU1hdHJpeCA9IG5leHRQaWVjZS5tYXRyaXg7XG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IChuZXh0UGllY2VDYW52YXMud2lkdGggLyAyKSAtIChwaWVjZU1hdHJpeFswXS5sZW5ndGggKiBibG9ja1NpemUgLyAyKTtcbiAgICAgICAgY29uc3Qgc3RhcnRZID0gKG5leHRQaWVjZUNhbnZhcy5oZWlnaHQgLyAyKSAtIChwaWVjZU1hdHJpeC5sZW5ndGggKiBibG9ja1NpemUgLyAyKTtcblxuICAgICAgICBkcmF3TWF0cml4KG5leHRQaWVjZUN0eCwgcGllY2VNYXRyaXgsIHsgeDogc3RhcnRYIC8gYmxvY2tTaXplLCB5OiBzdGFydFkgLyBibG9ja1NpemUgfSwgY29sb3JzLCBibG9ja1NpemUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd01hdHJpeChjdHgsIG1hdHJpeCwgb2Zmc2V0LCBjb2xvcnMsIGJsb2NrU2l6ZSkge1xuICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1t2YWx1ZV07XG4gICAgICAgIGN0eC5maWxsUmVjdChcbiAgICAgICAgICAoeCArIG9mZnNldC54KSAqIGJsb2NrU2l6ZSxcbiAgICAgICAgICAoeSArIG9mZnNldC55KSAqIGJsb2NrU2l6ZSxcbiAgICAgICAgICBibG9ja1NpemUsXG4gICAgICAgICAgYmxvY2tTaXplXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBVSeabtOaWsOmWoumAo+OBruODmOODq+ODkeODvOmWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNjb3JlRGlzcGxheShzY29yZSkge1xuICBjb25zdCBzY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbiAgaWYgKHNjb3JlRWxlbWVudCkge1xuICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9IHNjb3JlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaW5lc0Rpc3BsYXkobGluZXMpIHtcbiAgY29uc3QgbGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzJyk7XG4gIGlmIChsaW5lc0VsZW1lbnQpIHtcbiAgICBsaW5lc0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGV2ZWxEaXNwbGF5KGxldmVsKSB7XG4gIGNvbnN0IGxldmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xuICBpZiAobGV2ZWxFbGVtZW50KSB7XG4gICAgbGV2ZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGV2ZWw7XG4gIH1cbn1cblxuLy8g44Ky44O844Og44Gu54q25oWL44KS566h55CG44GZ44KL44Kq44OW44K444Kn44Kv44OIXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlID0ge1xuICAvLyDjgrLjg7zjg6Djga7ln7rmnKzoqK3lrppcbiAgQ09MUzogMTAsXG4gIFJPV1M6IDIwLFxuICBCTE9DSzogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSwgLy8g5ZCE44OW44Ot44OD44Kv44Gu44K144Kk44K677yI44OU44Kv44K744Or77yJXG4gIC8vIOOCsuODvOODoOOBrueKtuaFi+WkieaVsFxuICBib2FyZDogW10sXG4gIHBpZWNlOiBudWxsLFxuICBuZXh0UGllY2U6IG51bGwsXG4gIHNjb3JlOiAwLFxuICBsaW5lczogMCxcbiAgbGV2ZWw6IDEsXG4gIGRyb3BDb3VudGVyOiAwLFxuICBkcm9wSW50ZXJ2YWw6IDAsIC8vIOODlOODvOOCueOBjOiHquWLleOBp+iQveOBoeOCi+mWk+malO+8iOODn+ODquenku+8iS0g5Yid5pyf5YyW5pmC44GrR2FtZeOCpOODs+OCueOCv+ODs+OCueOBi+OCieioreWumlxuICBsYXN0VGltZTogMCxcbiAgZ2FtZUxvb3BJZDogbnVsbCxcbiAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gIC8vIOOCreODvOWFpeWKm+OBrueKtuaFi+euoeeQhlxuICBrZXlzOiB7fSxcbiAgLy8g44Ky44O844Og44Gu5LiA5pmC5YGc5q2i54q25oWLXG4gIHBhdXNlZDogZmFsc2UsXG5cbiAgLy8g44Ky44O844Og44Gu54q25oWL44KS5Yid5pyf5YyW44GZ44KL6Zai5pWwXG4gIGluaXRCb2FyZCgpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkodGhpcy5ST1dTKS5maWxsKDApLm1hcCgoKSA9PiBBcnJheSh0aGlzLkNPTFMpLmZpbGwoMCkpO1xuICB9LFxuXG4gIC8vIOODreOCsOWHuuWKm+mWouaVsFxuICBsb2dTdGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBHYW1lIFN0YXRlOicsIHtcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlLFxuICAgICAgbGluZXM6IHRoaXMubGluZXMsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGlzR2FtZU92ZXI6IHRoaXMuaXNHYW1lT3ZlcixcbiAgICAgIHBpZWNlOiB0aGlzLnBpZWNlID8geyBtYXRyaXg6IHRoaXMucGllY2UubWF0cml4LCBwb3M6IHRoaXMucGllY2UucG9zIH0gOiBudWxsLFxuICAgICAgbmV4dFBpZWNlOiB0aGlzLm5leHRQaWVjZSA/IHsgbWF0cml4OiB0aGlzLm5leHRQaWVjZS5tYXRyaXggfSA6IG51bGwsXG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIOOCpOODmeODs+ODiOODnuODjeODvOOCuOODo+ODvOOBruS9nOaIkFxuZXhwb3J0IGNvbnN0IGV2ZW50TWFuYWdlciA9IG5ldyBFdmVudFRhcmdldCgpO1xuXG4vLyDjgrLjg7zjg6DjgpLliJ3mnJ/ljJbjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgY29uc29sZS5sb2coJ2luaXRHYW1lOiDjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZknKTtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBjb25zb2xlLmVycm9yKCcyROOCs+ODs+ODhuOCreOCueODiOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K644KS6Kit5a6aXG4gIGNhbnZhcy53aWR0aCA9IGdhbWVTdGF0ZS5DT0xTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcblxuICAvLyDjgrDjg63jg7zjg5Djg6vjgarjgrPjg7Pjg4bjgq3jgrnjg4jjgajjgq3jg6Pjg7Pjg5DjgrnjgpJnYW1lU3RhdGXjgavkv53lrZhcbiAgZ2FtZVN0YXRlLmN0eCA9IGN0eDtcbiAgZ2FtZVN0YXRlLmNhbnZhcyA9IGNhbnZhcztcblxuICBjb25zb2xlLmxvZygnaW5pdEdhbWU6IOOCreODo+ODs+ODkOOCueOBqOOCs+ODs+ODhuOCreOCueODiOOBruWIneacn+WMluOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG4vLyDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBl+OBvuOBmScpO1xuICB0ZXRyaXNHYW1lLnJlc2V0KCk7XG4gIGdhbWVTdGF0ZS5zY29yZSA9IHRldHJpc0dhbWUuc2NvcmU7XG4gIGdhbWVTdGF0ZS5saW5lcyA9IHRldHJpc0dhbWUubGluZXM7XG4gIGdhbWVTdGF0ZS5sZXZlbCA9IHRldHJpc0dhbWUubGV2ZWw7XG4gIGdhbWVTdGF0ZS5pc0dhbWVPdmVyID0gdGV0cmlzR2FtZS5pc0dhbWVPdmVyO1xuICBnYW1lU3RhdGUucGllY2UgPSB0ZXRyaXNHYW1lLnBpZWNlO1xuICBnYW1lU3RhdGUubmV4dFBpZWNlID0gdGV0cmlzR2FtZS5uZXh0UGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgZ2FtZVN0YXRlLmxhc3RUaW1lID0gMDtcbiAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSBudWxsO1xuICBnYW1lU3RhdGUucGF1c2VkID0gZmFsc2U7XG4gIHVwZGF0ZVNjb3JlRGlzcGxheShnYW1lU3RhdGUuc2NvcmUpO1xuICB1cGRhdGVMaW5lc0Rpc3BsYXkoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgdXBkYXRlTGV2ZWxEaXNwbGF5KGdhbWVTdGF0ZS5sZXZlbCk7XG4gIGNvbnN0IGJvYXJkRm9yRHJhdyA9IHtcbiAgICBncmlkOiBnYW1lU3RhdGUuYm9hcmQsXG4gICAgY29sczogZ2FtZVN0YXRlLkNPTFMsXG4gICAgcm93czogZ2FtZVN0YXRlLlJPV1NcbiAgfTtcbiAgZ2xvYmFsLmRyYXcoZ2FtZVN0YXRlLmN0eCwgYm9hcmRGb3JEcmF3LCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOOCsuODvOODoOOBruODquOCu+ODg+ODiOOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xufVxuXG4vLyDjg5Tjg7zjgrnjgpLjg4njg63jg4Pjg5fjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIgfHwgZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICBjb25zb2xlLmxvZygncGxheWVyRHJvcDog44OU44O844K544KS44OJ44Ot44OD44OX44GX44G+44GZJyk7XG4gIHRldHJpc0dhbWUuZHJvcFBpZWNlKCk7XG4gIGdhbWVTdGF0ZS5zY29yZSA9IHRldHJpc0dhbWUuc2NvcmU7XG4gIGdhbWVTdGF0ZS5saW5lcyA9IHRldHJpc0dhbWUubGluZXM7XG4gIGdhbWVTdGF0ZS5pc0dhbWVPdmVyID0gdGV0cmlzR2FtZS5pc0dhbWVPdmVyO1xuICBnYW1lU3RhdGUucGllY2UgPSB0ZXRyaXNHYW1lLnBpZWNlO1xuICBnYW1lU3RhdGUubmV4dFBpZWNlID0gdGV0cmlzR2FtZS5uZXh0UGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgdXBkYXRlU2NvcmVEaXNwbGF5KGdhbWVTdGF0ZS5zY29yZSk7XG4gIHVwZGF0ZUxpbmVzRGlzcGxheShnYW1lU3RhdGUubGluZXMpO1xuICB1cGRhdGVMZXZlbERpc3BsYXkoZ2FtZVN0YXRlLmxldmVsKTtcbiAgZ2xvYmFsLmRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIGdhbWVTdGF0ZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG5cbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXllckRyb3A6IOOCsuODvOODoOOCquODvOODkOODvO+8gScpO1xuICAgIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZVN0YXRlLmdhbWVMb29wSWQpO1xuICB9XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciA9IDA7XG59XG5cbi8vIOODlOODvOOCueOCkuenu+WLleOBmeOCi+mWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJNb3ZlOiDjg5Tjg7zjgrnjgpLnp7vli5XjgZfjgb7jgZknLCB7IGRpciB9KTtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG4gIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5ib2FyZCA9IHRldHJpc0dhbWUuYm9hcmQuZ3JpZDtcbiAgZ2xvYmFsLmRyYXcoZ2FtZVN0YXRlLmN0eCwgZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UsIHRldHJpc0dhbWUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xufVxuXG4vLyDjg5Tjg7zjgrnjgpLlm57ou6LjgZnjgovplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJSb3RhdGUoZGlyKSB7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJSb3RhdGU6IOODlOODvOOCueOCkuWbnui7ouOBl+OBvuOBmScsIHsgZGlyIH0pO1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgdGV0cmlzR2FtZS5yb3RhdGVQaWVjZShkaXIpO1xuICBnYW1lU3RhdGUucGllY2UgPSB0ZXRyaXNHYW1lLnBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG4gIGdsb2JhbC5kcmF3KGdhbWVTdGF0ZS5jdHgsIGdhbWVTdGF0ZS5ib2FyZCwgZ2FtZVN0YXRlLnBpZWNlLCB0ZXRyaXNHYW1lLm5leHRQaWVjZSwgR0FNRV9DT05TVEFOVFMuQ09MT1JTLCBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFKTtcbn1cblxuLy8g44Ky44O844Og44Or44O844OXXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHRpbWUgPSAwKSB7XG4gIGlmIChnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSBnYW1lU3RhdGUubGFzdFRpbWU7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IHRpbWU7XG5cbiAgLy8g54++5Zyo44Gu44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU44KS5pu05pawXG4gIGdhbWVTdGF0ZS5kcm9wSW50ZXJ2YWwgPSB0ZXRyaXNHYW1lLmdldERyb3BJbnRlcnZhbCgpO1xuICBcbiAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyICs9IGRlbHRhVGltZTtcbiAgaWYgKGdhbWVTdGF0ZS5kcm9wQ291bnRlciA+IGdhbWVTdGF0ZS5kcm9wSW50ZXJ2YWwpIHtcbiAgICBwbGF5ZXJEcm9wKCk7XG4gIH1cblxuICBnbG9iYWwuZHJhdyhnYW1lU3RhdGUuY3R4LCBnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSwgdGV0cmlzR2FtZS5uZXh0UGllY2UsIEdBTUVfQ09OU1RBTlRTLkNPTE9SUywgR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRSk7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG59XG5leHBvcnQgY29uc3QgZ2FtZVVJID0gbmV3IEdhbWVVSShnYW1lU3RhdGUsIHtcbiAgbW92ZVBpZWNlOiB0ZXRyaXNHYW1lLm1vdmVQaWVjZS5iaW5kKHRldHJpc0dhbWUpLFxuICBkcm9wUGllY2U6IHRldHJpc0dhbWUuZHJvcFBpZWNlLmJpbmQodGV0cmlzR2FtZSksXG4gIHJvdGF0ZVBpZWNlOiB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlLmJpbmQodGV0cmlzR2FtZSksXG4gIHVwZGF0ZSxcbiAgcmVzZXRHYW1lXG59KTtcblxuXG4vLyDjgq3jg7zjg4/jg7Pjg4njg6nplqLmlbBcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG4gIGdhbWVVSS5vbktleURvd24oZXZlbnQpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVLZXlVcChldmVudCkge1xuICBnYW1lVUkub25LZXlVcChldmVudCk7XG59XG5cbi8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOBruioreWumlxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoa2V5RG93bkhhbmRsZXIgPSBnYW1lVUkub25LZXlEb3duLCBrZXlVcEhhbmRsZXIgPSBnYW1lVUkub25LZXlVcCkge1xuICBnYW1lVUkuc2V0dXBFdmVudExpc3RlbmVycyhrZXlEb3duSGFuZGxlciwga2V5VXBIYW5kbGVyKTtcbn1cblxuLy8g44Ky44O844Og5Yid5pyf5YyWXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmScpO1xuXG4gIHRyeSB7XG4gICAgLy8g44Ky44O844Og54q25oWL44KS5Yid5pyf5YyWXG4gICAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmScpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGluaXRHYW1lKCk7XG5cbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfjgq3jg6Pjg7Pjg5Djgrnjga7liJ3mnJ/ljJbjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICB9XG5cbiAgICAvLyDjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4hcbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44KS44Oq44K744OD44OI44GX44G+44GZJyk7XG4gICAgcmVzZXRHYW1lKCk7XG5cbiAgICAvLyDjgrLjg7zjg6DnirbmhYvjgpLjg63jgrDjgavlh7rliptcbiAgICBnYW1lU3RhdGUubG9nU3RhdGUoKTtcblxuICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxuICAgIGNvbnNvbGUubG9nKCdpbml0OiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZknKTtcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44GfJyk7XG5cbiAgICAvLyDlpJbpg6jjgYvjgonlj4LnhafjgafjgY3jgovjgojjgYbjgavlv4XopoHjgarjgoLjga7jgpLov5TjgZlcbiAgICByZXR1cm4ge1xuICAgICAgY2FudmFzLFxuICAgICAgZ2FtZVN0YXRlLFxuICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgIGhhbmRsZUtleVVwLFxuICAgICAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgICAgIGV2ZW50TWFuYWdlcixcbiAgICAgIGluaXRHYW1lLFxuICAgICAgcmVzZXRHYW1lLFxuICAgICAgdXBkYXRlLFxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jb25zdCBleHBvcnRzID0ge1xuICBpbml0LFxuICBwbGF5ZXJNb3ZlLFxuICBwbGF5ZXJSb3RhdGUsXG4gIHBsYXllckRyb3AsXG4gIGhhbmRsZUtleURvd24sXG4gIGhhbmRsZUtleVVwLFxuICBnYW1lVUksXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMsXG4gIGdhbWVTdGF0ZSxcbiAgZXZlbnRNYW5hZ2VyLFxuICBpbml0R2FtZSxcbiAgcmVzZXRHYW1lLFxuICB1cGRhdGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzO1xuXG4vLyDjg4bjgrnjg4jnlKjjgavjgrDjg63jg7zjg5Djg6vjgavlhazplotcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5nYW1lID0ge1xuICAgIGluaXQsXG4gICAgZ2FtZVN0YXRlLFxuICAgIGhhbmRsZUtleURvd246IGV4cG9ydHMuaGFuZGxlS2V5RG93bixcbiAgICBnYW1lVUksXG4gICAgaGFuZGxlS2V5VXAsXG4gICAgZXZlbnRNYW5hZ2VyLFxuICB9O1xufVxuXG4vLyDjgrLjg7zjg6Djga7jgrnjgr/jg7zjg4jvvIjjg5bjg6njgqbjgrblrp/ooYzmmYLjga7jgb/vvIlcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8g5pei5a2Y44Gu44Ky44O844Og44Or44O844OX44KS44Kv44Oq44KiXG4gICAgaWYgKGdhbWVTdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgfVxuICAgIGluaXRHYW1lKCk7XG4gIH0pOyAgLy8g44Km44Kj44Oz44OJ44Km44Oq44K144Kk44K65pmC44Gu5Yem55CGXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzICYmIGdhbWVTdGF0ZS5jdHgpIHtcbiAgICAgIC8vIOOCreODo+ODs+ODkOOCueOBruOCteOCpOOCuuOCkuWGjeioreWumlxuICAgICAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBnYW1lU3RhdGUuQkxPQ0s7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBnYW1lU3RhdGUuQkxPQ0s7XG4gICAgICAvLyDlho3mj4/nlLtcbiAgICAgIGdsb2JhbC5kcmF3KGdhbWVTdGF0ZS5jdHgsIGdhbWVTdGF0ZS5ib2FyZCwgZ2FtZVN0YXRlLnBpZWNlLCBnYW1lU3RhdGUubmV4dFBpZWNlLCBHQU1FX0NPTlNUQU5UUy5DT0xPUlMsIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkUpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLCBhY3Rpb25zKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlVcCA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgYWN0aW9ucyB9ID0gdGhpcztcbiAgICBpZiAoc3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgICBzdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSB0cnVlO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGFjdGlvbnMubW92ZVBpZWNlKC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgYWN0aW9ucy5kcm9wUGllY2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgYWN0aW9ucy5yb3RhdGVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICBjb25zdCB5ID0gc3RhdGUucGllY2U/LnBvcy55O1xuICAgICAgICAgIGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgICAgaWYgKHkgPT09IHN0YXRlLnBpZWNlPy5wb3MueSB8fCBzdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdwJzpcbiAgICAgIGNhc2UgJ1AnOlxuICAgICAgICBpZiAoc3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHN0YXRlLmdhbWVMb29wSWQpO1xuICAgICAgICAgIHN0YXRlLmdhbWVMb29wSWQgPSBudWxsO1xuICAgICAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgc3RhdGUubGFzdFRpbWUgPSAwO1xuICAgICAgICAgIHN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWN0aW9ucy51cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICBjYXNlICdSJzpcbiAgICAgICAgYWN0aW9ucy5yZXNldEdhbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChldmVudCkge1xuICAgIHRoaXMuc3RhdGUua2V5c1tldmVudC5rZXldID0gZmFsc2U7XG4gIH1cblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKGtleURvd25IYW5kbGVyID0gdGhpcy5vbktleURvd24sIGtleVVwSGFuZGxlciA9IHRoaXMub25LZXlVcCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcbiAqIOODhuODiOODquOCueOCsuODvOODoOOBruOCqOODs+ODiOODquODvOODneOCpOODs+ODiFxuICovXG5cbi8vIOOCueOCv+OCpOODq+OCt+ODvOODiOOCkuOCpOODs+ODneODvOODiFxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4vLyDjgrLjg7zjg6Djg6Ljgrjjg6Xjg7zjg6vjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2dhbWUuanMnO1xuXG4vLyDjg4fjg5Djg4PjgrDnlKjjga7jgrnjgr/jgqTjg6vjgpLov73liqBcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAjZ2FtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB9XG5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbi8vIOODieOCreODpeODoeODs+ODiOOBruiqreOBv+i+vOOBv+WujOS6huOCkuW+heOBo+OBpuOCsuODvOODoOOCkuWIneacn+WMllxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQg44Kk44OZ44Oz44OI44GM55m654Gr44GX44G+44GX44GfJyk7XG4gIFxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7nirbmhYvjgpLnorroqo1cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfjgq3jg6Pjg7Pjg5Djgrnjga7jgrXjgqTjgro6JywgY2FudmFzLndpZHRoLCAneCcsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCueOCv+OCpOODq+OCteOCpOOCujonLCBjYW52YXMuc3R5bGUud2lkdGgsICd4JywgY2FudmFzLnN0eWxlLmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+OCreODo+ODs+ODkOOCueimgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgIH1cbiAgICAvLyDjgrLjg7zjg6DjgpLplovlp4tcbiAgICBpbml0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICBhbGVydCgn44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CC44Kz44Oz44K944O844Or44KS56K66KqN44GX44Gm44GP44Gg44GV44GE44CCJyk7XG4gIH1cbn0pO1xuXG4vLyDplovnmbrnlKg6IOOCsOODreODvOODkOODq+WQjeWJjeepuumWk+OBq+OCqOOCr+OCueODneODvOODiFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIHdpbmRvdy50ZXRyaXMgPSB3aW5kb3cudGV0cmlzIHx8IHt9O1xuICB3aW5kb3cudGV0cmlzLmluaXQgPSBpbml0O1xufVxuIl0sIm5hbWVzIjpbIkdBTUVfQ09OU1RBTlRTIiwiQ09MUyIsIlJPV1MiLCJCTE9DS19TSVpFIiwiU0NPUkVfVEFCTEUiLCJTSEFQRVMiLCJDT0xPUlMiLCJHQU1FX1NUQVRFUyIsIklOSVQiLCJQTEFZSU5HIiwiUEFVU0VEIiwiR0FNRV9PVkVSIiwiQm9hcmQiLCJjb2xzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsIl9jbGFzc0NhbGxDaGVjayIsImNsZWFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImdyaWQiLCJBcnJheSIsImZyb20iLCJmaWxsIiwiaXNJbnNpZGUiLCJ4IiwieSIsImlzRW1wdHkiLCJzZXRDZWxsIiwiZ2V0Q2VsbCIsIm1lcmdlIiwicGllY2UiLCJtYXRyaXgiLCJwb3MiLCJjbGVhckxpbmVzIiwiY2xlYXJlZCIsImZpbHRlciIsInJvdyIsImV2ZXJ5IiwiY2VsbCIsInVuc2hpZnQiLCJQaWVjZSIsIkdhbWUiLCJ0ZXRyb21pbm9zIiwiYm9hcmQiLCJuZXh0UGllY2UiLCJsZXZlbFNwZWVkcyIsImxpbmVzUGVyTGV2ZWwiLCJyZXNldCIsImdldERyb3BJbnRlcnZhbCIsImxldmVsSW5kZXgiLCJNYXRoIiwibWluIiwibGV2ZWwiLCJjcmVhdGVQaWVjZSIsImluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJsaW5lcyIsInNjb3JlIiwiaXNHYW1lT3ZlciIsInBhdXNlZCIsImNoZWNrTGV2ZWxVcCIsIm5ld0xldmVsIiwibW92ZVBpZWNlIiwiZHgiLCJtb3ZlIiwiaGFzQ29sbGlzaW9uIiwiX3RoaXMkcGllY2UiLCJib2FyZFgiLCJib2FyZFkiLCJzcGF3blBpZWNlIiwiZHJvcFBpZWNlIiwibWVyZ2VQaWVjZSIsIl90aGlzJHBpZWNlMiIsImxpbmVzQ2xlYXJlZCIsImlzTGluZUNvbXBsZXRlIiwic3BsaWNlIiwidXBkYXRlU2NvcmUiLCJwb2ludHMiLCJyb3RhdGVQaWVjZSIsImRpciIsIm9sZE1hdHJpeCIsInJvdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJkeSIsIk4iLCJyZXN1bHQiLCJHYW1lVUkiLCJ0ZXRyaXNHYW1lIiwic2V0VGV0cmlzR2FtZSIsImluc3RhbmNlIiwiZHJhdyIsImN0eCIsImNvbG9ycyIsImJsb2NrU2l6ZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd01hdHJpeCIsIm5leHRQaWVjZUNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0UGllY2VDdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJwaWVjZU1hdHJpeCIsInN0YXJ0WCIsInN0YXJ0WSIsIm9mZnNldCIsImZvckVhY2giLCJ1cGRhdGVTY29yZURpc3BsYXkiLCJzY29yZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUxpbmVzRGlzcGxheSIsImxpbmVzRWxlbWVudCIsInVwZGF0ZUxldmVsRGlzcGxheSIsImxldmVsRWxlbWVudCIsImdhbWVTdGF0ZSIsIkJMT0NLIiwiZHJvcENvdW50ZXIiLCJkcm9wSW50ZXJ2YWwiLCJsYXN0VGltZSIsImdhbWVMb29wSWQiLCJrZXlzIiwiaW5pdEJvYXJkIiwibWFwIiwibG9nU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRNYW5hZ2VyIiwiRXZlbnRUYXJnZXQiLCJpbml0R2FtZSIsImNhbnZhcyIsImVycm9yIiwicmVzZXRHYW1lIiwiYm9hcmRGb3JEcmF3IiwiZ2xvYmFsIiwicGxheWVyRHJvcCIsImFsZXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5ZXJNb3ZlIiwicGxheWVyUm90YXRlIiwidXBkYXRlIiwidGltZSIsImRlbHRhVGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVVSSIsImJpbmQiLCJoYW5kbGVLZXlEb3duIiwiZXZlbnQiLCJvbktleURvd24iLCJoYW5kbGVLZXlVcCIsIm9uS2V5VXAiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJpbml0IiwiRXJyb3IiLCJleHBvcnRzIiwid2luZG93IiwidGV0cmlzIiwiZ2FtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0ZSIsImFjdGlvbnMiLCJyZXBlYXQiLCJfc3RhdGUkcGllY2UiLCJfc3RhdGUkcGllY2UyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlZmF1bHQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9