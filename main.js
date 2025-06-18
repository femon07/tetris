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
      var newGrid = [];

      for (var y = 0; y < this.grid.length; y++) {
        var row = this.grid[y];
        if (row.every(function (cell) {return cell !== 0;})) {
          cleared++;
        } else {
          newGrid.push(row);
        }
      }

      // 削除された行の分だけ空の行を上に追加
      while (newGrid.length < this.rows) {
        newGrid.unshift(Array(this.cols).fill(0));
      }

      this.grid = newGrid;
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

        // ボードのclearLinesメソッドを使用
        var linesCleared = this.board.clearLines();
        if (linesCleared > 0) {
          this.lines += linesCleared;
          this.score += this.calculateScore(linesCleared);
          this.checkLevelUp();
        }

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
     * スコアを計算する
     * @param {number} linesCleared - 消去したライン数
     * @returns {number} 計算されたスコア
     */ }, { key: "calculateScore", value:
    function calculateScore(linesCleared) {
      var points = [0, 40, 100, 300, 1200]; // 0-4ライン消したときの基礎得点
      return points[Math.min(linesCleared, 4)] * this.level;
    }

    /**
     * スコアを更新する
     * @param {number} linesCleared - 消去したライン数
     */ }, { key: "updateScore", value:
    function updateScore(linesCleared) {
      this.score += this.calculateScore(linesCleared);
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




// --- グローバル変数と状態管理 ---
var tetrisGame = new _core_Game_js__WEBPACK_IMPORTED_MODULE_0__.Game();
var eventManager = new EventTarget();
var gameState = {
  ctx: null,
  board: [],
  ROWS: _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.ROWS,
  COLS: _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLS,
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

  initBoard: function initBoard() {var _this = this;
    this.board = Array(this.ROWS).fill(null).map(function () {return Array(_this.COLS).fill(0);});
  },

  logState: function logState() {
    console.log('Current Game State:', {
      score: this.score,
      lines: this.lines,
      level: this.level,
      isGameOver: this.isGameOver,
      piece: this.piece,
      nextPiece: this.nextPiece
    });
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

  drawMatrix(ctx, tetrisGame.board.grid, { x: 0, y: 0 }, COLORS, BLOCK_SIZE);
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
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
}

function updateScoreDisplay(score) {
  var scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = score.toString();
  }
}

function updateLinesDisplay(lines) {
  var linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.textContent = lines.toString();
  }
}

function updateLevelDisplay(level) {
  var levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.textContent = level.toString();
  }
}

// --- ゲームロジック --- 
function updateGameState() {
  gameState.score = tetrisGame.score;
  gameState.lines = tetrisGame.lines;
  gameState.level = tetrisGame.level;
  gameState.isGameOver = tetrisGame.isGameOver;
  gameState.piece = tetrisGame.piece;
  gameState.nextPiece = tetrisGame.nextPiece;
  gameState.board = tetrisGame.board.grid;
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
  resetGame: resetGame,
  update: update
});

function resetGame() {
  tetrisGame.reset();
  updateGameState();
  updateUI(); // UI更新を追加
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
      canvas.width = gameState.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
      canvas.height = gameState.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
      draw();
    }
  });
}

// テスト用のsetupEventListeners関数をエクスポート


function init() {
  try {
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

    gameState.ctx = ctx;
    gameState.canvas = canvas; // テストで期待されているプロパティ
    canvas.width = gameState.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
    canvas.height = gameState.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

    setupEventListeners();
    resetGame();
    console.log('ゲームの初期化が完了しました。');

    // テスト用の返り値
    return {
      canvas: canvas,
      eventManager: eventManager,
      gameState: gameState,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      initGame: init,
      resetGame: resetGame,
      setupEventListeners: setupEventListeners,
      update: update
    };
  } catch (error) {
    console.error('ゲームの初期化中にエラーが発生しました:', error);
    return null;
  }
}

// initGame関数はinitのエイリアス（テスト互換性のため）
function initGame() {
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

  gameState.ctx = ctx;
  gameState.canvas = canvas;
  canvas.width = gameState.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = gameState.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

  return canvas;
}

// --- エクスポートとブラウザ実行 ---
var handleKeyDown = gameUI.onKeyDown.bind(gameUI);
var handleKeyUp = gameUI.onKeyUp.bind(gameUI);
 // draw関数をエクスポート

function setTetrisGame(newGame) {
  tetrisGame = newGame;
}

var exports = { init: init, initGame: initGame, playerMove: playerMove, playerRotate: playerRotate, playerDrop: playerDrop, gameUI: gameUI, gameState: gameState, resetGame: resetGame, update: update, handleKeyDown: handleKeyDown, handleKeyUp: handleKeyUp, setupEventListeners: setupEventListeners, draw: draw, tetrisGame: tetrisGame };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSTtJQUNULENBQUMsRUFBRSxHQUFHLEVBQUc7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLElBQUksQ0FBRTtFQUNYLENBQUM7RUFDREMsTUFBTSxFQUFFO0VBQ047RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNQOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNU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RUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3ZCOzs7SUFFRDtJQUNBLElBQUksQ0FBQ2IsS0FBSyxHQUFHLElBQUk7SUFDakIsSUFBSSxDQUFDZSxTQUFTLEdBQUcsSUFBSTs7SUFFckI7SUFDQSxJQUFJLENBQUNDLFdBQVcsR0FBRztJQUNqQixJQUFJLEVBQUU7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLEVBQUc7SUFDTixHQUFHLENBQUc7SUFBQSxDQUNQOztJQUVEO0lBQ0EsSUFBSSxDQUFDQyxhQUFhLEdBQUcsRUFBRTs7SUFFdkI7SUFDQSxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0VBQ2Q7O0VBRUE7QUFDRjtBQUNBO0FBQ0EsS0FIRSxPQUFBakMsOEVBQUEsQ0FBQTJCLElBQUEsS0FBQTFCLEdBQUEscUJBQUFDLEtBQUE7SUFJQSxTQUFBZ0MsZUFBZUEsQ0FBQSxFQUFHO01BQ2hCLElBQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQ1AsV0FBVyxDQUFDcEMsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUN4RSxPQUFPLElBQUksQ0FBQ29DLFdBQVcsQ0FBQ0ksVUFBVSxDQUFDO0lBQ3JDOztJQUVBO0FBQ0Y7QUFDQTtJQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBbEMsR0FBQSxpQkFBQUMsS0FBQTtJQUtBLFNBQUFxQyxXQUFXQSxDQUFDQyxLQUFLLEVBQUU7TUFDakIsSUFBTXhCLE1BQU0sR0FBRyxJQUFJLENBQUNZLFVBQVUsQ0FBQ1ksS0FBSyxHQUFHLElBQUksQ0FBQ1osVUFBVSxDQUFDakMsTUFBTSxDQUFDO01BQzlELElBQU1jLENBQUMsR0FBRzJCLElBQUksQ0FBQ0ssS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDWixLQUFLLENBQUNwQyxJQUFJLEdBQUd1QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNyQixNQUFNLElBQUksQ0FBQyxDQUFDO01BQzlELE9BQU8sSUFBSStCLDRDQUFLLENBQUNWLE1BQU0sRUFBRSxFQUFFUCxDQUFDLEVBQURBLENBQUMsRUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkM7O0lBRUE7QUFDRjtBQUNBLE9BRkUsTUFBQVQsR0FBQSxXQUFBQyxLQUFBO0lBR0EsU0FBQStCLEtBQUtBLENBQUEsRUFBRztNQUNOLElBQUksQ0FBQ0osS0FBSyxDQUFDOUIsS0FBSyxDQUFDLENBQUM7TUFDbEIsSUFBSSxDQUFDZ0IsS0FBSyxHQUFHLElBQUksQ0FBQ3dCLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDSyxLQUFLLENBQUNMLElBQUksQ0FBQ00sTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNkLFVBQVUsQ0FBQ2pDLE1BQU0sQ0FBQyxDQUFDO01BQ2pGLElBQUksQ0FBQ21DLFNBQVMsR0FBRyxJQUFJLENBQUNTLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDSyxLQUFLLENBQUNMLElBQUksQ0FBQ00sTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNkLFVBQVUsQ0FBQ2pDLE1BQU0sQ0FBQyxDQUFDO01BQ3JGLElBQUksQ0FBQzJDLEtBQUssR0FBRyxDQUFDO01BQ2QsSUFBSSxDQUFDSyxLQUFLLEdBQUcsQ0FBQztNQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHLENBQUM7TUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBRyxLQUFLO01BQ3ZCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7SUFDckI7O0lBRUE7QUFDRjtBQUNBLE9BRkUsTUFBQTdDLEdBQUEsa0JBQUFDLEtBQUE7SUFHQSxTQUFBNkMsWUFBWUEsQ0FBQSxFQUFHO01BQ2IsSUFBTUMsUUFBUSxHQUFHWixJQUFJLENBQUNLLEtBQUssQ0FBQyxJQUFJLENBQUNFLEtBQUssR0FBRyxJQUFJLENBQUNYLGFBQWEsQ0FBQyxHQUFHLENBQUM7TUFDaEUsSUFBSWdCLFFBQVEsR0FBRyxJQUFJLENBQUNWLEtBQUssRUFBRTtRQUN6QixJQUFJLENBQUNBLEtBQUssR0FBR1UsUUFBUTtRQUNyQixPQUFPLElBQUk7TUFDYjtNQUNBLE9BQU8sS0FBSztJQUNkOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBL0MsR0FBQSxlQUFBQyxLQUFBO0lBS0EsU0FBQStDLFNBQVNBLENBQUNDLEVBQUUsRUFBRTtNQUNaLElBQUksQ0FBQyxJQUFJLENBQUNuQyxLQUFLLEVBQUUsT0FBTyxLQUFLOztNQUU3QixJQUFJLENBQUNBLEtBQUssQ0FBQ29DLElBQUksQ0FBQ0QsRUFBRSxFQUFFLENBQUMsQ0FBQzs7TUFFdEI7TUFDQSxJQUFJLElBQUksQ0FBQ0UsWUFBWSxDQUFDLENBQUMsRUFBRTtRQUN2QixJQUFJLENBQUNyQyxLQUFLLENBQUNvQyxJQUFJLENBQUMsQ0FBQ0QsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN2QixPQUFPLEtBQUs7TUFDZDs7TUFFQSxPQUFPLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUFqRCxHQUFBLGtCQUFBQyxLQUFBO0lBSUEsU0FBQWtELFlBQVlBLENBQUEsRUFBRztNQUNiLElBQUksQ0FBQyxJQUFJLENBQUNyQyxLQUFLLEVBQUUsT0FBTyxJQUFJOztNQUU1QixJQUFBc0MsV0FBQSxHQUF3QixJQUFJLENBQUN0QyxLQUFLLENBQTFCQyxNQUFNLEdBQUFxQyxXQUFBLENBQU5yQyxNQUFNLENBQUVDLEdBQUcsR0FBQW9DLFdBQUEsQ0FBSHBDLEdBQUc7O01BRW5CLEtBQUssSUFBSVAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTSxNQUFNLENBQUNyQixNQUFNLEVBQUVlLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEtBQUssSUFBSUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTyxNQUFNLENBQUNOLENBQUMsQ0FBQyxDQUFDZixNQUFNLEVBQUVjLENBQUMsRUFBRSxFQUFFO1VBQ3pDLElBQUlPLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFNNkMsTUFBTSxHQUFHckMsR0FBRyxDQUFDUixDQUFDLEdBQUdBLENBQUM7WUFDeEIsSUFBTThDLE1BQU0sR0FBR3RDLEdBQUcsQ0FBQ1AsQ0FBQyxHQUFHQSxDQUFDOztZQUV4QjtZQUNBO1lBQ0U0QyxNQUFNLEdBQUcsQ0FBQztZQUNWQSxNQUFNLElBQUksSUFBSSxDQUFDekIsS0FBSyxDQUFDcEMsSUFBSTtZQUN6QjhELE1BQU0sSUFBSSxJQUFJLENBQUMxQixLQUFLLENBQUNoQyxJQUFJO1lBQ3hCMEQsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMxQixLQUFLLENBQUN6QixJQUFJLENBQUNtRCxNQUFNLENBQUMsQ0FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBRTtZQUN0RDtjQUNBLE9BQU8sSUFBSTtZQUNiO1VBQ0Y7UUFDRjtNQUNGOztNQUVBLE9BQU8sS0FBSztJQUNkOztJQUVBO0FBQ0Y7QUFDQSxPQUZFLE1BQUFyRCxHQUFBLGdCQUFBQyxLQUFBO0lBR0EsU0FBQXNELFVBQVVBLENBQUEsRUFBRztNQUNYLElBQUksQ0FBQ3pDLEtBQUssR0FBRyxJQUFJLENBQUNlLFNBQVMsSUFBSSxJQUFJLENBQUNTLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDSyxLQUFLLENBQUNMLElBQUksQ0FBQ00sTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNkLFVBQVUsQ0FBQ2pDLE1BQU0sQ0FBQyxDQUFDO01BQ25HLElBQUksQ0FBQ21DLFNBQVMsR0FBRyxJQUFJLENBQUNTLFdBQVcsQ0FBQ0gsSUFBSSxDQUFDSyxLQUFLLENBQUNMLElBQUksQ0FBQ00sTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUNkLFVBQVUsQ0FBQ2pDLE1BQU0sQ0FBQyxDQUFDOztNQUVyRjtNQUNBLElBQUksSUFBSSxDQUFDeUQsWUFBWSxDQUFDLENBQUMsRUFBRTtRQUN2QixJQUFJLENBQUNQLFVBQVUsR0FBRyxJQUFJO01BQ3hCO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBNUMsR0FBQSxlQUFBQyxLQUFBO0lBSUEsU0FBQXVELFNBQVNBLENBQUEsRUFBRztNQUNWLElBQUksQ0FBQyxJQUFJLENBQUMxQyxLQUFLLEVBQUUsT0FBTyxLQUFLOztNQUU3QixJQUFJLENBQUNBLEtBQUssQ0FBQ29DLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOztNQUVyQjtNQUNBLElBQUksSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ29DLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDTyxVQUFVLENBQUMsQ0FBQzs7UUFFakI7UUFDQSxJQUFNQyxZQUFZLEdBQUcsSUFBSSxDQUFDOUIsS0FBSyxDQUFDWCxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJeUMsWUFBWSxHQUFHLENBQUMsRUFBRTtVQUNwQixJQUFJLENBQUNoQixLQUFLLElBQUlnQixZQUFZO1VBQzFCLElBQUksQ0FBQ2YsS0FBSyxJQUFJLElBQUksQ0FBQ2dCLGNBQWMsQ0FBQ0QsWUFBWSxDQUFDO1VBQy9DLElBQUksQ0FBQ1osWUFBWSxDQUFDLENBQUM7UUFDckI7O1FBRUEsSUFBSSxDQUFDUyxVQUFVLENBQUMsQ0FBQztRQUNqQixPQUFPLEtBQUs7TUFDZDs7TUFFQSxPQUFPLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0EsT0FGRSxNQUFBdkQsR0FBQSxnQkFBQUMsS0FBQTtJQUdBLFNBQUF3RCxVQUFVQSxDQUFBLEVBQUc7TUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDM0MsS0FBSyxFQUFFOztNQUVqQixJQUFBOEMsWUFBQSxHQUF3QixJQUFJLENBQUM5QyxLQUFLLENBQTFCQyxNQUFNLEdBQUE2QyxZQUFBLENBQU43QyxNQUFNLENBQUVDLEdBQUcsR0FBQTRDLFlBQUEsQ0FBSDVDLEdBQUc7O01BRW5CLEtBQUssSUFBSVAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTSxNQUFNLENBQUNyQixNQUFNLEVBQUVlLENBQUMsRUFBRSxFQUFFO1FBQ3RDLEtBQUssSUFBSUQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHTyxNQUFNLENBQUNOLENBQUMsQ0FBQyxDQUFDZixNQUFNLEVBQUVjLENBQUMsRUFBRSxFQUFFO1VBQ3pDLElBQUlPLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFNOEMsTUFBTSxHQUFHdEMsR0FBRyxDQUFDUCxDQUFDLEdBQUdBLENBQUM7WUFDeEIsSUFBTTRDLE1BQU0sR0FBR3JDLEdBQUcsQ0FBQ1IsQ0FBQyxHQUFHQSxDQUFDOztZQUV4QixJQUFJOEMsTUFBTSxJQUFJLENBQUMsSUFBSUEsTUFBTSxHQUFHLElBQUksQ0FBQzFCLEtBQUssQ0FBQ2hDLElBQUksSUFBSXlELE1BQU0sSUFBSSxDQUFDLElBQUlBLE1BQU0sR0FBRyxJQUFJLENBQUN6QixLQUFLLENBQUNwQyxJQUFJLEVBQUU7Y0FDdEYsSUFBSSxDQUFDb0MsS0FBSyxDQUFDekIsSUFBSSxDQUFDbUQsTUFBTSxDQUFDLENBQUNELE1BQU0sQ0FBQyxHQUFHdEMsTUFBTSxDQUFDTixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDO1lBQ2hEO1VBQ0Y7UUFDRjtNQUNGO0lBQ0Y7OztJQUdBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBUixHQUFBLG9CQUFBQyxLQUFBO0lBS0EsU0FBQTBELGNBQWNBLENBQUNELFlBQVksRUFBRTtNQUMzQixJQUFNRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUN4QyxPQUFPQSxNQUFNLENBQUMxQixJQUFJLENBQUNDLEdBQUcsQ0FBQ3NCLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ3JCLEtBQUs7SUFDdkQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBckMsR0FBQSxpQkFBQUMsS0FBQTtJQUlBLFNBQUE2RCxXQUFXQSxDQUFDSixZQUFZLEVBQUU7TUFDeEIsSUFBSSxDQUFDZixLQUFLLElBQUksSUFBSSxDQUFDZ0IsY0FBYyxDQUFDRCxZQUFZLENBQUM7SUFDakQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUExRCxHQUFBLGlCQUFBQyxLQUFBO0lBS0EsU0FBQThELFdBQVdBLENBQUNDLEdBQUcsRUFBRTtNQUNmLElBQUksQ0FBQyxJQUFJLENBQUNsRCxLQUFLLEVBQUUsT0FBTyxLQUFLOztNQUU3QixJQUFNbUQsU0FBUyxHQUFHLElBQUksQ0FBQ25ELEtBQUssQ0FBQ0MsTUFBTTtNQUNuQyxJQUFJLENBQUNELEtBQUssQ0FBQ29ELE1BQU0sQ0FBQ0YsR0FBRyxDQUFDOztNQUV0QjtNQUNBLElBQUksSUFBSSxDQUFDYixZQUFZLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHa0QsU0FBUztRQUM3QixPQUFPLEtBQUs7TUFDZDs7TUFFQSxPQUFPLElBQUk7SUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztzdUJDblBIO0FBQ0E7O0FBRU8sSUFBTXhDLEtBQUs7RUFDaEIsU0FBQUEsTUFBWVYsTUFBTSxFQUF3QixLQUF0QkMsR0FBRyxHQUFBdkIsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRWUsQ0FBQyxFQUFFLENBQUMsRUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUFaLGlGQUFBLE9BQUE0QixLQUFBO0lBQ3RDLElBQUksQ0FBQ1YsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsR0FBRyxHQUFBbUQsYUFBQSxLQUFRbkQsR0FBRyxDQUFFO0VBQ3ZCLENBQUMsT0FBQWpCLDhFQUFBLENBQUEwQixLQUFBLEtBQUF6QixHQUFBLFVBQUFDLEtBQUE7O0lBRUQsU0FBQWlELElBQUlBLENBQUNELEVBQUUsRUFBRW1CLEVBQUUsRUFBRTtNQUNYLElBQUksQ0FBQ3BELEdBQUcsQ0FBQ1IsQ0FBQyxJQUFJeUMsRUFBRTtNQUNoQixJQUFJLENBQUNqQyxHQUFHLENBQUNQLENBQUMsSUFBSTJELEVBQUU7SUFDbEIsQ0FBQyxNQUFBcEUsR0FBQSxZQUFBQyxLQUFBOztJQUVELFNBQUFpRSxNQUFNQSxDQUFBLEVBQVUsS0FBVEYsR0FBRyxHQUFBdkUsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztNQUNaO01BQ0EsSUFBTTRFLENBQUMsR0FBRyxJQUFJLENBQUN0RCxNQUFNLENBQUNyQixNQUFNO01BQzVCLElBQU00RSxNQUFNLEdBQUdsRSxLQUFLLENBQUNDLElBQUksQ0FBQyxFQUFFWCxNQUFNLEVBQUUyRSxDQUFDLENBQUMsQ0FBQyxFQUFFLG9CQUFNakUsS0FBSyxDQUFDaUUsQ0FBQyxDQUFDLENBQUMvRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUM7TUFDaEUsS0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc0RCxDQUFDLEVBQUU1RCxDQUFDLEVBQUUsRUFBRTtRQUMxQixLQUFLLElBQUlELENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzZELENBQUMsRUFBRTdELENBQUMsRUFBRSxFQUFFO1VBQzFCLElBQUl3RCxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1hNLE1BQU0sQ0FBQzlELENBQUMsQ0FBQyxDQUFDNkQsQ0FBQyxHQUFHLENBQUMsR0FBRzVELENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ00sTUFBTSxDQUFDTixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDO1VBQzFDLENBQUMsTUFBTTtZQUNMOEQsTUFBTSxDQUFDRCxDQUFDLEdBQUcsQ0FBQyxHQUFHN0QsQ0FBQyxDQUFDLENBQUNDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQ00sTUFBTSxDQUFDTixDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDO1VBQzFDO1FBQ0Y7TUFDRjtNQUNBLElBQUksQ0FBQ08sTUFBTSxHQUFHdUQsTUFBTTtJQUN0QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qm1DO0FBQ2U7QUFDakI7O0FBRXBDO0FBQ08sSUFBSUUsVUFBVSxHQUFHLElBQUk5QywrQ0FBSSxDQUFDLENBQUM7QUFDM0IsSUFBTStDLFlBQVksR0FBRyxJQUFJQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxJQUFNQyxTQUFTLEdBQUc7RUFDdkJDLEdBQUcsRUFBRSxJQUFJO0VBQ1RoRCxLQUFLLEVBQUUsRUFBRTtFQUNUL0MsSUFBSSxFQUFFRiw4REFBYyxDQUFDRSxJQUFJO0VBQ3pCRCxJQUFJLEVBQUVELDhEQUFjLENBQUNDLElBQUk7RUFDekJrQyxLQUFLLEVBQUUsSUFBSTtFQUNYZSxTQUFTLEVBQUUsSUFBSTtFQUNmYyxLQUFLLEVBQUUsQ0FBQztFQUNSRCxLQUFLLEVBQUUsQ0FBQztFQUNSTCxLQUFLLEVBQUUsQ0FBQztFQUNSd0MsV0FBVyxFQUFFLENBQUM7RUFDZEMsWUFBWSxFQUFFLElBQUk7RUFDbEJDLFFBQVEsRUFBRSxDQUFDO0VBQ1hDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCcEMsVUFBVSxFQUFFLEtBQUs7RUFDakJDLE1BQU0sRUFBRSxLQUFLO0VBQ2JvQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOztFQUVSQyxTQUFTLFdBQVRBLFNBQVNBLENBQUEsRUFBRyxLQUFBaEYsS0FBQTtJQUNWLElBQUksQ0FBQzBCLEtBQUssR0FBR3hCLEtBQUssQ0FBQyxJQUFJLENBQUN2QixJQUFJLENBQUMsQ0FBQ3lCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzZFLEdBQUcsQ0FBQyxvQkFBTS9FLEtBQUssQ0FBQ0YsS0FBSSxDQUFDdEIsSUFBSSxDQUFDLENBQUMwQixJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUM7RUFDOUUsQ0FBQzs7RUFFRDhFLFFBQVEsV0FBUkEsUUFBUUEsQ0FBQSxFQUFHO0lBQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFO01BQ2pDM0MsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQkQsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQkwsS0FBSyxFQUFFLElBQUksQ0FBQ0EsS0FBSztNQUNqQk8sVUFBVSxFQUFFLElBQUksQ0FBQ0EsVUFBVTtNQUMzQjlCLEtBQUssRUFBRSxJQUFJLENBQUNBLEtBQUs7TUFDakJlLFNBQVMsRUFBRSxJQUFJLENBQUNBO0lBQ2xCLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBLFNBQVMwRCxVQUFVQSxDQUFDWCxHQUFHLEVBQUU3RCxNQUFNLEVBQUV5RSxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFO0VBQzFELElBQUksQ0FBQzNFLE1BQU0sSUFBSSxDQUFDWCxLQUFLLENBQUN1RixPQUFPLENBQUM1RSxNQUFNLENBQUMsRUFBRTtFQUN2Q0EsTUFBTSxDQUFDNkUsT0FBTyxDQUFDLFVBQUN4RSxHQUFHLEVBQUVYLENBQUMsRUFBSztJQUN6QixJQUFJLENBQUNMLEtBQUssQ0FBQ3VGLE9BQU8sQ0FBQ3ZFLEdBQUcsQ0FBQyxFQUFFO0lBQ3pCQSxHQUFHLENBQUN3RSxPQUFPLENBQUMsVUFBQzNGLEtBQUssRUFBRU8sQ0FBQyxFQUFLO01BQ3hCLElBQUlQLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDZjJFLEdBQUcsQ0FBQ2lCLFNBQVMsR0FBR0osTUFBTSxDQUFDeEYsS0FBSyxDQUFDLElBQUksTUFBTTtRQUN2QzJFLEdBQUcsQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDdEYsQ0FBQyxHQUFHZ0YsTUFBTSxDQUFDaEYsQ0FBQyxJQUFJa0YsU0FBUyxFQUFFLENBQUNqRixDQUFDLEdBQUcrRSxNQUFNLENBQUMvRSxDQUFDLElBQUlpRixTQUFTLEVBQUVBLFNBQVMsRUFBRUEsU0FBUyxDQUFDO01BQzVGO0lBQ0YsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDO0FBQ0o7O0FBRUEsU0FBU0ssSUFBSUEsQ0FBQSxFQUFHO0VBQ2QsSUFBSSxDQUFDcEIsU0FBUyxDQUFDQyxHQUFHLEVBQUU7RUFDcEIsSUFBUUEsR0FBRyxHQUE4QkQsU0FBUyxDQUExQ0MsR0FBRyxDQUFFaEQsS0FBSyxHQUF1QitDLFNBQVMsQ0FBckMvQyxLQUFLLENBQUVkLEtBQUssR0FBZ0I2RCxTQUFTLENBQTlCN0QsS0FBSyxDQUFFZSxTQUFTLEdBQUs4QyxTQUFTLENBQXZCOUMsU0FBUztFQUNwQyxJQUFRNUMsTUFBTSxHQUFpQk4sOERBQWMsQ0FBckNNLE1BQU0sQ0FBRUgsVUFBVSxHQUFLSCw4REFBYyxDQUE3QkcsVUFBVTs7RUFFMUI4RixHQUFHLENBQUNvQixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRXBCLEdBQUcsQ0FBQ3FCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFdEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDRSxNQUFNLENBQUM7RUFDeER2QixHQUFHLENBQUNpQixTQUFTLEdBQUcsU0FBUztFQUN6QmpCLEdBQUcsQ0FBQ2tCLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFbEIsR0FBRyxDQUFDcUIsTUFBTSxDQUFDQyxLQUFLLEVBQUV0QixHQUFHLENBQUNxQixNQUFNLENBQUNFLE1BQU0sQ0FBQzs7RUFFdkRaLFVBQVUsQ0FBQ1gsR0FBRyxFQUFFSixVQUFVLENBQUM1QyxLQUFLLENBQUN6QixJQUFJLEVBQUUsRUFBRUssQ0FBQyxFQUFFLENBQUMsRUFBRUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUV4QixNQUFNLEVBQUVILFVBQVUsQ0FBQztFQUMxRSxJQUFJZ0MsS0FBSyxFQUFFO0lBQ1R5RSxVQUFVLENBQUNYLEdBQUcsRUFBRTlELEtBQUssQ0FBQ0MsTUFBTSxFQUFFRCxLQUFLLENBQUNFLEdBQUcsRUFBRS9CLE1BQU0sRUFBRUgsVUFBVSxDQUFDO0VBQzlEOztFQUVBO0VBQ0EsSUFBTXNILGVBQWUsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7RUFDcEUsSUFBSUYsZUFBZSxJQUFJdkUsU0FBUyxFQUFFO0lBQ2hDLElBQU0wRSxPQUFPLEdBQUdILGVBQWUsQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoREQsT0FBTyxDQUFDUCxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRU8sT0FBTyxDQUFDTixNQUFNLENBQUNDLEtBQUssRUFBRUssT0FBTyxDQUFDTixNQUFNLENBQUNFLE1BQU0sQ0FBQztJQUNwRSxJQUFRcEYsTUFBTSxHQUFLYyxTQUFTLENBQXBCZCxNQUFNO0lBQ2QsSUFBTVAsQ0FBQyxHQUFHLENBQUMrRixPQUFPLENBQUNOLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHcEgsVUFBVSxHQUFHaUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDckIsTUFBTSxJQUFJLENBQUM7SUFDcEUsSUFBTWUsQ0FBQyxHQUFHLENBQUM4RixPQUFPLENBQUNOLE1BQU0sQ0FBQ0UsTUFBTSxHQUFHckgsVUFBVSxHQUFHaUMsTUFBTSxDQUFDckIsTUFBTSxJQUFJLENBQUM7SUFDbEU2RixVQUFVLENBQUNnQixPQUFPLEVBQUV4RixNQUFNLEVBQUUsRUFBRVAsQ0FBQyxFQUFEQSxDQUFDLEVBQUVDLENBQUMsRUFBREEsQ0FBQyxDQUFDLENBQUMsRUFBRXhCLE1BQU0sRUFBRUgsVUFBVSxDQUFDO0VBQzNEO0FBQ0Y7O0FBRUE7QUFDQSxTQUFTMkgsUUFBUUEsQ0FBQSxFQUFHO0VBQ2xCQyxrQkFBa0IsQ0FBQy9CLFNBQVMsQ0FBQ2hDLEtBQUssQ0FBQztFQUNuQ2dFLGtCQUFrQixDQUFDaEMsU0FBUyxDQUFDakMsS0FBSyxDQUFDO0VBQ25Da0Usa0JBQWtCLENBQUNqQyxTQUFTLENBQUN0QyxLQUFLLENBQUM7QUFDckM7O0FBRU8sU0FBU3FFLGtCQUFrQkEsQ0FBQy9ELEtBQUssRUFBRTtFQUN4QyxJQUFNa0UsWUFBWSxHQUFHUixRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7RUFDckQsSUFBSU8sWUFBWSxFQUFFO0lBQ2hCQSxZQUFZLENBQUNDLFdBQVcsR0FBR25FLEtBQUssQ0FBQ29FLFFBQVEsQ0FBQyxDQUFDO0VBQzdDO0FBQ0Y7O0FBRU8sU0FBU0osa0JBQWtCQSxDQUFDakUsS0FBSyxFQUFFO0VBQ3hDLElBQU1zRSxZQUFZLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE9BQU8sQ0FBQztFQUNyRCxJQUFJVSxZQUFZLEVBQUU7SUFDaEJBLFlBQVksQ0FBQ0YsV0FBVyxHQUFHcEUsS0FBSyxDQUFDcUUsUUFBUSxDQUFDLENBQUM7RUFDN0M7QUFDRjs7QUFFTyxTQUFTSCxrQkFBa0JBLENBQUN2RSxLQUFLLEVBQUU7RUFDeEMsSUFBTTRFLFlBQVksR0FBR1osUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQ3JELElBQUlXLFlBQVksRUFBRTtJQUNoQkEsWUFBWSxDQUFDSCxXQUFXLEdBQUd6RSxLQUFLLENBQUMwRSxRQUFRLENBQUMsQ0FBQztFQUM3QztBQUNGOztBQUVBO0FBQ0EsU0FBU0csZUFBZUEsQ0FBQSxFQUFHO0VBQ3pCdkMsU0FBUyxDQUFDaEMsS0FBSyxHQUFHNkIsVUFBVSxDQUFDN0IsS0FBSztFQUNsQ2dDLFNBQVMsQ0FBQ2pDLEtBQUssR0FBRzhCLFVBQVUsQ0FBQzlCLEtBQUs7RUFDbENpQyxTQUFTLENBQUN0QyxLQUFLLEdBQUdtQyxVQUFVLENBQUNuQyxLQUFLO0VBQ2xDc0MsU0FBUyxDQUFDL0IsVUFBVSxHQUFHNEIsVUFBVSxDQUFDNUIsVUFBVTtFQUM1QytCLFNBQVMsQ0FBQzdELEtBQUssR0FBRzBELFVBQVUsQ0FBQzFELEtBQUs7RUFDbEM2RCxTQUFTLENBQUM5QyxTQUFTLEdBQUcyQyxVQUFVLENBQUMzQyxTQUFTO0VBQzFDOEMsU0FBUyxDQUFDL0MsS0FBSyxHQUFHNEMsVUFBVSxDQUFDNUMsS0FBSyxDQUFDekIsSUFBSTtBQUN6Qzs7QUFFTyxTQUFTZ0gsVUFBVUEsQ0FBQSxFQUFHO0VBQzNCLElBQUl4QyxTQUFTLENBQUMvQixVQUFVLElBQUkrQixTQUFTLENBQUM5QixNQUFNLEVBQUU7RUFDOUMyQixVQUFVLENBQUNoQixTQUFTLENBQUMsQ0FBQztFQUN0QjBELGVBQWUsQ0FBQyxDQUFDO0VBQ2pCLElBQUl2QyxTQUFTLENBQUMvQixVQUFVLEVBQUU7SUFDeEJ3RSxLQUFLLENBQUMsWUFBWSxDQUFDO0lBQ25CQyxvQkFBb0IsQ0FBQzFDLFNBQVMsQ0FBQ0ssVUFBVSxDQUFDO0VBQzVDO0FBQ0Y7O0FBRU8sU0FBU3NDLFVBQVVBLENBQUN0RCxHQUFHLEVBQUU7RUFDOUIsSUFBSVcsU0FBUyxDQUFDL0IsVUFBVSxJQUFJK0IsU0FBUyxDQUFDOUIsTUFBTSxFQUFFO0VBQzlDMkIsVUFBVSxDQUFDeEIsU0FBUyxDQUFDZ0IsR0FBRyxDQUFDO0VBQ3pCa0QsZUFBZSxDQUFDLENBQUM7QUFDbkI7O0FBRU8sU0FBU0ssWUFBWUEsQ0FBQ3ZELEdBQUcsRUFBRTtFQUNoQyxJQUFJVyxTQUFTLENBQUMvQixVQUFVLElBQUkrQixTQUFTLENBQUM5QixNQUFNLEVBQUU7RUFDOUMyQixVQUFVLENBQUNULFdBQVcsQ0FBQ0MsR0FBRyxDQUFDO0VBQzNCa0QsZUFBZSxDQUFDLENBQUM7QUFDbkI7O0FBRUE7QUFDTyxTQUFTTSxNQUFNQSxDQUFBLEVBQVcsS0FBVkMsSUFBSSxHQUFBaEksU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUM3QixJQUFJa0YsU0FBUyxDQUFDOUIsTUFBTSxFQUFFO0lBQ3BCNkUscUJBQXFCLENBQUNGLE1BQU0sQ0FBQztJQUM3QjtFQUNGOztFQUVBLElBQU1HLFNBQVMsR0FBR0YsSUFBSSxHQUFHOUMsU0FBUyxDQUFDSSxRQUFRO0VBQzNDSixTQUFTLENBQUNJLFFBQVEsR0FBRzBDLElBQUk7RUFDekI5QyxTQUFTLENBQUNFLFdBQVcsSUFBSThDLFNBQVM7O0VBRWxDaEQsU0FBUyxDQUFDRyxZQUFZLEdBQUdOLFVBQVUsQ0FBQ3ZDLGVBQWUsQ0FBQyxDQUFDOztFQUVyRCxJQUFJMEMsU0FBUyxDQUFDRSxXQUFXLEdBQUdGLFNBQVMsQ0FBQ0csWUFBWSxFQUFFO0lBQ2xEcUMsVUFBVSxDQUFDLENBQUM7SUFDWnhDLFNBQVMsQ0FBQ0UsV0FBVyxHQUFHLENBQUM7RUFDM0I7O0VBRUFrQixJQUFJLENBQUMsQ0FBQztFQUNOVSxRQUFRLENBQUMsQ0FBQzs7RUFFVixJQUFJLENBQUM5QixTQUFTLENBQUMvQixVQUFVLEVBQUU7SUFDekIrQixTQUFTLENBQUNLLFVBQVUsR0FBRzBDLHFCQUFxQixDQUFDRixNQUFNLENBQUM7RUFDdEQ7QUFDRjs7QUFFQTtBQUNPLElBQU1JLE1BQU0sR0FBRyxJQUFJckQscURBQU0sQ0FBQ0ksU0FBUyxFQUFFO0VBQzFDM0IsU0FBUyxFQUFFc0UsVUFBVTtFQUNyQjlELFNBQVMsRUFBRTJELFVBQVU7RUFDckJwRCxXQUFXLEVBQUV3RCxZQUFZO0VBQ3pCTSxTQUFTLEVBQVRBLFNBQVM7RUFDVEwsTUFBTSxFQUFOQTtBQUNGLENBQUMsQ0FBQzs7QUFFSyxTQUFTSyxTQUFTQSxDQUFBLEVBQUc7RUFDMUJyRCxVQUFVLENBQUN4QyxLQUFLLENBQUMsQ0FBQztFQUNsQmtGLGVBQWUsQ0FBQyxDQUFDO0VBQ2pCVCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDWjlCLFNBQVMsQ0FBQzlCLE1BQU0sR0FBRyxLQUFLO0VBQ3hCLElBQUk4QixTQUFTLENBQUNLLFVBQVUsRUFBRTtJQUN4QnFDLG9CQUFvQixDQUFDMUMsU0FBUyxDQUFDSyxVQUFVLENBQUM7RUFDNUM7RUFDQUwsU0FBUyxDQUFDSyxVQUFVLEdBQUcwQyxxQkFBcUIsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3BEbkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFDL0I7O0FBRUEsU0FBU3dDLG1CQUFtQkEsQ0FBQSxFQUFHO0VBQzdCRixNQUFNLENBQUNFLG1CQUFtQixDQUFDRixNQUFNLENBQUNHLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDSixNQUFNLENBQUMsRUFBRUEsTUFBTSxDQUFDSyxPQUFPLENBQUNELElBQUksQ0FBQ0osTUFBTSxDQUFDLENBQUM7RUFDdEZNLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07SUFDdEMsSUFBTWxDLE1BQU0sR0FBR0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzlDLElBQUlMLE1BQU0sRUFBRTtNQUNWQSxNQUFNLENBQUNDLEtBQUssR0FBR3ZCLFNBQVMsQ0FBQy9GLElBQUksR0FBR0QsOERBQWMsQ0FBQ0csVUFBVTtNQUN6RG1ILE1BQU0sQ0FBQ0UsTUFBTSxHQUFHeEIsU0FBUyxDQUFDOUYsSUFBSSxHQUFHRiw4REFBYyxDQUFDRyxVQUFVO01BQzFEaUgsSUFBSSxDQUFDLENBQUM7SUFDUjtFQUNGLENBQUMsQ0FBQztBQUNKOztBQUVBO0FBQytCOztBQUV4QixTQUFTcUMsSUFBSUEsQ0FBQSxFQUFHO0VBQ3JCLElBQUk7SUFDRixJQUFNbkMsTUFBTSxHQUFHSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDOUMsSUFBSSxDQUFDTCxNQUFNLEVBQUU7TUFDWFosT0FBTyxDQUFDZ0QsS0FBSyxDQUFDLGtCQUFrQixDQUFDO01BQ2pDLE9BQU8sSUFBSTtJQUNiOztJQUVBLElBQU16RCxHQUFHLEdBQUdxQixNQUFNLENBQUNPLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDbkMsSUFBSSxDQUFDNUIsR0FBRyxFQUFFO01BQ1JTLE9BQU8sQ0FBQ2dELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztNQUNuQyxPQUFPLElBQUk7SUFDYjs7SUFFQTFELFNBQVMsQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0lBQ25CRCxTQUFTLENBQUNzQixNQUFNLEdBQUdBLE1BQU0sQ0FBQyxDQUFDO0lBQzNCQSxNQUFNLENBQUNDLEtBQUssR0FBR3ZCLFNBQVMsQ0FBQy9GLElBQUksR0FBR0QsOERBQWMsQ0FBQ0csVUFBVTtJQUN6RG1ILE1BQU0sQ0FBQ0UsTUFBTSxHQUFHeEIsU0FBUyxDQUFDOUYsSUFBSSxHQUFHRiw4REFBYyxDQUFDRyxVQUFVOztJQUUxRGdKLG1CQUFtQixDQUFDLENBQUM7SUFDckJELFNBQVMsQ0FBQyxDQUFDO0lBQ1h4QyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQzs7SUFFOUI7SUFDQSxPQUFPO01BQ0xXLE1BQU0sRUFBTkEsTUFBTTtNQUNOeEIsWUFBWSxFQUFaQSxZQUFZO01BQ1pFLFNBQVMsRUFBVEEsU0FBUztNQUNUMkQsYUFBYSxFQUFiQSxhQUFhO01BQ2JDLFdBQVcsRUFBWEEsV0FBVztNQUNYQyxRQUFRLEVBQUVKLElBQUk7TUFDZFAsU0FBUyxFQUFUQSxTQUFTO01BQ1RDLG1CQUFtQixFQUFuQkEsbUJBQW1CO01BQ25CTixNQUFNLEVBQU5BO0lBQ0YsQ0FBQztFQUNILENBQUMsQ0FBQyxPQUFPYSxLQUFLLEVBQUU7SUFDZGhELE9BQU8sQ0FBQ2dELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDLE9BQU8sSUFBSTtFQUNiO0FBQ0Y7O0FBRUE7QUFDTyxTQUFTRyxRQUFRQSxDQUFBLEVBQUc7RUFDekIsSUFBTXZDLE1BQU0sR0FBR0ksUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzlDLElBQUksQ0FBQ0wsTUFBTSxFQUFFO0lBQ1haLE9BQU8sQ0FBQ2dELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUNqQyxPQUFPLElBQUk7RUFDYjs7RUFFQSxJQUFNekQsR0FBRyxHQUFHcUIsTUFBTSxDQUFDTyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ25DLElBQUksQ0FBQzVCLEdBQUcsRUFBRTtJQUNSUyxPQUFPLENBQUNnRCxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsT0FBTyxJQUFJO0VBQ2I7O0VBRUExRCxTQUFTLENBQUNDLEdBQUcsR0FBR0EsR0FBRztFQUNuQkQsU0FBUyxDQUFDc0IsTUFBTSxHQUFHQSxNQUFNO0VBQ3pCQSxNQUFNLENBQUNDLEtBQUssR0FBR3ZCLFNBQVMsQ0FBQy9GLElBQUksR0FBR0QsOERBQWMsQ0FBQ0csVUFBVTtFQUN6RG1ILE1BQU0sQ0FBQ0UsTUFBTSxHQUFHeEIsU0FBUyxDQUFDOUYsSUFBSSxHQUFHRiw4REFBYyxDQUFDRyxVQUFVOztFQUUxRCxPQUFPbUgsTUFBTTtBQUNmOztBQUVBO0FBQ08sSUFBTXFDLGFBQWEsR0FBR1YsTUFBTSxDQUFDRyxTQUFTLENBQUNDLElBQUksQ0FBQ0osTUFBTSxDQUFDO0FBQ25ELElBQU1XLFdBQVcsR0FBR1gsTUFBTSxDQUFDSyxPQUFPLENBQUNELElBQUksQ0FBQ0osTUFBTSxDQUFDO0FBQ3RDLENBQUM7O0FBRVYsU0FBU2EsYUFBYUEsQ0FBQ0MsT0FBTyxFQUFFO0VBQ3JDbEUsVUFBVSxHQUFHa0UsT0FBTztBQUN0Qjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsRUFBRVAsSUFBSSxFQUFKQSxJQUFJLEVBQUVJLFFBQVEsRUFBUkEsUUFBUSxFQUFFbEIsVUFBVSxFQUFWQSxVQUFVLEVBQUVDLFlBQVksRUFBWkEsWUFBWSxFQUFFSixVQUFVLEVBQVZBLFVBQVUsRUFBRVMsTUFBTSxFQUFOQSxNQUFNLEVBQUVqRCxTQUFTLEVBQVRBLFNBQVMsRUFBRWtELFNBQVMsRUFBVEEsU0FBUyxFQUFFTCxNQUFNLEVBQU5BLE1BQU0sRUFBRWMsYUFBYSxFQUFiQSxhQUFhLEVBQUVDLFdBQVcsRUFBWEEsV0FBVyxFQUFFVCxtQkFBbUIsRUFBbkJBLG1CQUFtQixFQUFFL0IsSUFBSSxFQUFKQSxJQUFJLEVBQUV2QixVQUFVLEVBQVZBLFVBQVUsQ0FBQyxDQUFDO0FBQ2pMLGlFQUFlbUUsT0FBTyxFQUFDOztBQUV2QixJQUFJLE9BQU9ULE1BQU0sS0FBSyxXQUFXLEVBQUU7RUFDakNBLE1BQU0sQ0FBQ1UsTUFBTSxHQUFHLEVBQUVDLElBQUksRUFBRUYsT0FBTyxDQUFDLENBQUM7RUFDakN0QyxRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRUMsSUFBSSxDQUFDO0FBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUJ4RDdELE1BQU07RUFDekIsU0FBQUEsT0FBWXVFLEtBQUssRUFBRUMsT0FBTyxFQUFFLENBQUFsSixpRkFBQSxPQUFBMEUsTUFBQTtJQUMxQixJQUFJLENBQUN1RSxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3hDLENBQUMsT0FBQWpJLDhFQUFBLENBQUF3RSxNQUFBLEtBQUF2RSxHQUFBLGVBQUFDLEtBQUE7O0lBRUQsU0FBQThILFNBQVNBLENBQUNpQixLQUFLLEVBQUU7TUFDZixJQUFRRixLQUFLLEdBQWMsSUFBSSxDQUF2QkEsS0FBSyxDQUFFQyxPQUFPLEdBQUssSUFBSSxDQUFoQkEsT0FBTztNQUN0QixJQUFJRCxLQUFLLENBQUNsRyxVQUFVLEVBQUU7TUFDdEIsSUFBSW9HLEtBQUssQ0FBQ0MsTUFBTSxFQUFFO01BQ2xCSCxLQUFLLENBQUM3RCxJQUFJLENBQUMrRCxLQUFLLENBQUNoSixHQUFHLENBQUMsR0FBRyxJQUFJOztNQUU1QixRQUFRZ0osS0FBSyxDQUFDaEosR0FBRztRQUNmLEtBQUssV0FBVztVQUNkK0ksT0FBTyxDQUFDL0YsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3JCO1FBQ0YsS0FBSyxZQUFZO1VBQ2YrRixPQUFPLENBQUMvRixTQUFTLENBQUMsQ0FBQyxDQUFDO1VBQ3BCO1FBQ0YsS0FBSyxXQUFXO1VBQ2QrRixPQUFPLENBQUN2RixTQUFTLENBQUMsQ0FBQztVQUNuQjtRQUNGLEtBQUssU0FBUztVQUNadUYsT0FBTyxDQUFDaEYsV0FBVyxDQUFDLENBQUMsQ0FBQztVQUN0QjtRQUNGLEtBQUssR0FBRztVQUNOLE9BQU8sSUFBSSxFQUFFLEtBQUFtRixZQUFBLEVBQUFDLGFBQUE7WUFDWCxJQUFNMUksQ0FBQyxJQUFBeUksWUFBQSxHQUFHSixLQUFLLENBQUNoSSxLQUFLLGNBQUFvSSxZQUFBLHVCQUFYQSxZQUFBLENBQWFsSSxHQUFHLENBQUNQLENBQUM7WUFDNUJzSSxPQUFPLENBQUN2RixTQUFTLENBQUMsQ0FBQztZQUNuQixJQUFJL0MsQ0FBQyxPQUFBMEksYUFBQSxHQUFLTCxLQUFLLENBQUNoSSxLQUFLLGNBQUFxSSxhQUFBLHVCQUFYQSxhQUFBLENBQWFuSSxHQUFHLENBQUNQLENBQUMsS0FBSXFJLEtBQUssQ0FBQ2xHLFVBQVUsRUFBRTtjQUNoRDtZQUNGO1VBQ0Y7VUFDQTtRQUNGLEtBQUssR0FBRztRQUNSLEtBQUssR0FBRztVQUNOLElBQUlrRyxLQUFLLENBQUM5RCxVQUFVLEVBQUU7WUFDcEJxQyxvQkFBb0IsQ0FBQ3lCLEtBQUssQ0FBQzlELFVBQVUsQ0FBQztZQUN0QzhELEtBQUssQ0FBQzlELFVBQVUsR0FBRyxJQUFJO1lBQ3ZCOEQsS0FBSyxDQUFDakcsTUFBTSxHQUFHLElBQUk7VUFDckIsQ0FBQyxNQUFNO1lBQ0xpRyxLQUFLLENBQUNqRyxNQUFNLEdBQUcsS0FBSztZQUNwQmlHLEtBQUssQ0FBQy9ELFFBQVEsR0FBRyxDQUFDO1lBQ2xCK0QsS0FBSyxDQUFDOUQsVUFBVSxHQUFHMEMscUJBQXFCLENBQUNxQixPQUFPLENBQUN2QixNQUFNLENBQUM7VUFDMUQ7VUFDQTtRQUNGLEtBQUssR0FBRztRQUNSLEtBQUssR0FBRztVQUNOdUIsT0FBTyxDQUFDbEIsU0FBUyxDQUFDLENBQUM7VUFDbkI7TUFDSjtJQUNGLENBQUMsTUFBQTdILEdBQUEsYUFBQUMsS0FBQTs7SUFFRCxTQUFBZ0ksT0FBT0EsQ0FBQ2UsS0FBSyxFQUFFO01BQ2IsSUFBSSxDQUFDRixLQUFLLENBQUM3RCxJQUFJLENBQUMrRCxLQUFLLENBQUNoSixHQUFHLENBQUMsR0FBRyxLQUFLO0lBQ3BDLENBQUMsTUFBQUEsR0FBQSx5QkFBQUMsS0FBQTs7SUFFRCxTQUFBNkgsbUJBQW1CQSxDQUFBLEVBQStELEtBQTlEc0IsY0FBYyxHQUFBM0osU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSSxDQUFDc0ksU0FBUyxLQUFFc0IsWUFBWSxHQUFBNUosU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsSUFBSSxDQUFDd0ksT0FBTztNQUM5RTVCLFFBQVEsQ0FBQ2lELG1CQUFtQixDQUFDLFNBQVMsRUFBRUYsY0FBYyxDQUFDO01BQ3ZEL0MsUUFBUSxDQUFDaUQsbUJBQW1CLENBQUMsT0FBTyxFQUFFRCxZQUFZLENBQUM7TUFDbkRoRCxRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxTQUFTLEVBQUVpQixjQUFjLENBQUM7TUFDcEQvQyxRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVrQixZQUFZLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O1VDaEVIO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVBO0FBQ3NCOztBQUV0QjtBQUNpQzs7QUFFakM7QUFDQSxJQUFNRyxLQUFLLEdBQUduRCxRQUFRLENBQUNvRCxhQUFhLENBQUMsT0FBTyxDQUFDO0FBQzdDRCxLQUFLLENBQUMxQyxXQUFXLG9GQUtoQjs7Ozs7O0FBQ0RULFFBQVEsQ0FBQ3FELElBQUksQ0FBQ0MsV0FBVyxDQUFDSCxLQUFLLENBQUM7O0FBRWhDO0FBQ0FuRCxRQUFRLENBQUM4QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2xEOUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsOEJBQThCLENBQUM7O0VBRTNDLElBQUk7SUFDRkQsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDL0I7SUFDQSxJQUFNVyxNQUFNLEdBQUdJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFJTCxNQUFNLEVBQUU7TUFDVlosT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFVyxNQUFNLENBQUNDLEtBQUssRUFBRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO01BQzNEZCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVcsTUFBTSxDQUFDdUQsS0FBSyxDQUFDdEQsS0FBSyxFQUFFLEdBQUcsRUFBRUQsTUFBTSxDQUFDdUQsS0FBSyxDQUFDckQsTUFBTSxDQUFDO0lBQzdFLENBQUMsTUFBTTtNQUNMZCxPQUFPLENBQUNnRCxLQUFLLENBQUMsaUJBQWlCLENBQUM7SUFDbEM7SUFDQTtJQUNBRCw4Q0FBSSxDQUFDLENBQUM7RUFDUixDQUFDLENBQUMsT0FBT0MsS0FBSyxFQUFFO0lBQ2RoRCxPQUFPLENBQUNnRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztJQUM1Q2pCLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztFQUM5QztBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQUl3QyxJQUFzQyxFQUFFO0VBQzFDMUIsTUFBTSxDQUFDVSxNQUFNLEdBQUdWLE1BQU0sQ0FBQ1UsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ1YsTUFBTSxDQUFDVSxNQUFNLENBQUNSLElBQUksR0FBR0EsMENBQUk7QUFDM0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29uc3RhbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIOOCsuODvOODoOOBruWumuaVsOWumue+qVxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xuICBDT0xTOiAxMCwgLy8g44OV44Kj44O844Or44OJ44Gu5bmF77yI44OW44Ot44OD44Kv5pWw77yJXG4gIFJPV1M6IDIwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7pq5jjgZXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgQkxPQ0tfU0laRTogMjAsIC8vIDHjg5bjg63jg4Pjgq/jga7jg5Tjgq/jgrvjg6vjgrXjgqTjgrpcbiAgU0NPUkVfVEFCTEU6IHtcbiAgICAxOiA0MCwgICAvLyAx6KGM5raI44GXXG4gICAgMjogMTAwLCAgLy8gMuihjOa2iOOBl1xuICAgIDM6IDMwMCwgIC8vIDPooYzmtojjgZdcbiAgICA0OiAxMjAwICAvLyA06KGM5raI44GX77yI44OG44OI44Oq44K577yJXG4gIH0sXG4gIFNIQVBFUzogW1xuICAgIC8vIElcbiAgICBbXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIE9cbiAgICBbXG4gICAgICBbMiwgMl0sXG4gICAgICBbMiwgMl1cbiAgICBdLFxuICAgIC8vIFRcbiAgICBbXG4gICAgICBbMCwgMywgMF0sXG4gICAgICBbMywgMywgM10sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIExcbiAgICBbXG4gICAgICBbNCwgMCwgMF0sXG4gICAgICBbNCwgNCwgNF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIEpcbiAgICBbXG4gICAgICBbMCwgMCwgNV0sXG4gICAgICBbNSwgNSwgNV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFpcbiAgICBbXG4gICAgICBbNiwgNiwgMF0sXG4gICAgICBbMCwgNiwgNl0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFNcbiAgICBbXG4gICAgICBbMCwgNywgN10sXG4gICAgICBbNywgNywgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIF0sXG4gIENPTE9SUzogW1xuICAgICcjMDAwMDAwJywgLy8gMDog56m6XG4gICAgJyMwMEZGRkYnLCAvLyAxOiBJICjjgrfjgqLjg7MpXG4gICAgJyNGRkZGMDAnLCAvLyAyOiBPICjpu4ToibIpXG4gICAgJyM4MDAwODAnLCAvLyAzOiBUICjntKspXG4gICAgJyNGRkE1MDAnLCAvLyA0OiBMICjjgqrjg6zjg7PjgrgpXG4gICAgJyMwMDAwRkYnLCAvLyA1OiBKICjpnZIpXG4gICAgJyNGRjAwMDAnLCAvLyA2OiBaICjotaQpXG4gICAgJyMwMDgwMDAnICAvLyA3OiBTICjnt5EpXG4gIF0sXG4gIEdBTUVfU1RBVEVTOiB7XG4gICAgSU5JVDogJ0lOSVQnLFxuICAgIFBMQVlJTkc6ICdQTEFZSU5HJyxcbiAgICBQQVVTRUQ6ICdQQVVTRUQnLFxuICAgIEdBTUVfT1ZFUjogJ0dBTUVfT1ZFUidcbiAgfVxufTtcbiIsIi8vIEJvYXJk44Kv44Op44K5XG4vLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLnrqHnkIbjgajjg63jgrjjg4Pjgq/jgpLmi4XlvZNcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjApIHtcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gIH1cblxuICBpc0luc2lkZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5jb2xzICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ncmlkW3ldW3hdID09PSAwO1xuICB9XG5cbiAgc2V0Q2VsbCh4LCB5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzSW5zaWRlKHgsIHkpKSB0aGlzLmdyaWRbeV1beF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpID8gdGhpcy5ncmlkW3ldW3hdIDogbnVsbDtcbiAgfVxuXG4gIG1lcmdlKHBpZWNlKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcGllY2UubWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChwaWVjZS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICB0aGlzLnNldENlbGwocGllY2UucG9zLnggKyB4LCBwaWVjZS5wb3MueSArIHksIHBpZWNlLm1hdHJpeFt5XVt4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckxpbmVzKCkge1xuICAgIGxldCBjbGVhcmVkID0gMDtcbiAgICBjb25zdCBuZXdHcmlkID0gW107XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XTtcbiAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICBjbGVhcmVkKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdHcmlkLnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5YmK6Zmk44GV44KM44Gf6KGM44Gu5YiG44Gg44GR56m644Gu6KGM44KS5LiK44Gr6L+95YqgXG4gICAgd2hpbGUgKG5ld0dyaWQubGVuZ3RoIDwgdGhpcy5yb3dzKSB7XG4gICAgICBuZXdHcmlkLnVuc2hpZnQoQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5ncmlkID0gbmV3R3JpZDtcbiAgICByZXR1cm4gY2xlYXJlZDtcbiAgfVxufVxuIiwiLy8gR2FtZeOCr+ODqeOCuVxuLy8g44Ky44O844Og5YWo5L2T44Gu54q25oWL566h55CG44Go6YCy6KGM44KS5ouF5b2TXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IHsgUGllY2UgfSBmcm9tICcuL1BpZWNlLmpzJztcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihjb2xzID0gMTAsIHJvd3MgPSAyMCwgdGV0cm9taW5vcyA9IG51bGwpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKGNvbHMsIHJvd3MpO1xuICAgIHRoaXMudGV0cm9taW5vcyA9IHRldHJvbWlub3MgfHwgW1xuICAgICAgW1sxLCAxLCAxLCAxXV0sXG4gICAgICBbWzIsIDJdLCBbMiwgMl1dLFxuICAgICAgW1swLCAzLCAwXSwgWzMsIDMsIDNdXSxcbiAgICAgIFtbMCwgNCwgNF0sIFs0LCA0LCAwXV0sXG4gICAgICBbWzUsIDUsIDBdLCBbMCwgNSwgNV1dLFxuICAgICAgW1s2LCAwLCAwXSwgWzYsIDYsIDZdXSxcbiAgICAgIFtbMCwgMCwgN10sIFs3LCA3LCA3XV0sXG4gICAgXTtcbiAgICBcbiAgICAvLyDnj77lnKjjga7jg5Tjg7zjgrnjgajmrKHjga7jg5Tjg7zjgrlcbiAgICB0aGlzLnBpZWNlID0gbnVsbDtcbiAgICB0aGlzLm5leHRQaWVjZSA9IG51bGw7XG4gICAgXG4gICAgLy8g44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAgdGhpcy5sZXZlbFNwZWVkcyA9IFtcbiAgICAgIDEwMDAsIC8vIOODrOODmeODqzE6IDEuMOenklxuICAgICAgOTAwLCAgLy8g44Os44OZ44OrMjogMC4556eSXG4gICAgICA4MDAsICAvLyDjg6zjg5njg6szOiAwLjjnp5JcbiAgICAgIDcwMCwgIC8vIOODrOODmeODqzQ6IDAuN+enklxuICAgICAgNjAwLCAgLy8g44Os44OZ44OrNTogMC4256eSXG4gICAgICA1MDAsICAvLyDjg6zjg5njg6s2OiAwLjXnp5JcbiAgICAgIDQwMCwgIC8vIOODrOODmeODqzc6IDAuNOenklxuICAgICAgMzAwLCAgLy8g44Os44OZ44OrODogMC4z56eSXG4gICAgICAyMDAsICAvLyDjg6zjg5njg6s5OiAwLjLnp5JcbiAgICAgIDEwMCAgIC8vIOODrOODmeODqzEw5Lul6ZmNOiAwLjHnp5JcbiAgICBdO1xuICAgIFxuICAgIC8vIOODrOODmeODq+OCouODg+ODl+OBq+W/heimgeOBquODqeOCpOODs+aVsFxuICAgIHRoaXMubGluZXNQZXJMZXZlbCA9IDEwO1xuICAgIFxuICAgIC8vIOWIneacn+WMluaZguOBq+acgOWIneOBruODlOODvOOCueOCkueUn+aIkFxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg6zjg5njg6vjgavlv5zjgZjjgZ/jg4njg63jg4Pjg5fplpPpmpTjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge251bWJlcn0g44OJ44Ot44OD44OX6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAqL1xuICBnZXREcm9wSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IE1hdGgubWluKHRoaXMubGV2ZWwgLSAxLCB0aGlzLmxldmVsU3BlZWRzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmxldmVsU3BlZWRzW2xldmVsSW5kZXhdO1xuICB9XG4gIFxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44KS44OB44Kn44OD44Kv44GX44CB5b+F6KaB44Gr5b+c44GY44Gm44Os44OZ44Or44KS5LiK44GS44KLXG4gICAqL1xuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS5L2c5oiQ44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOODhuODiOODreODn+ODjuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJucyB7UGllY2V9IOaWsOOBl+OBhOODlOODvOOCueOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgY3JlYXRlUGllY2UoaW5kZXgpIHtcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLnRldHJvbWlub3NbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigodGhpcy5ib2FyZC5jb2xzIC0gbWF0cml4WzBdLmxlbmd0aCkgLyAyKTtcbiAgICByZXR1cm4gbmV3IFBpZWNlKG1hdHJpeCwgeyB4LCB5OiAwIH0pO1xuICB9XG4gIFxuICAvKipcbiAgICog44Ky44O844Og44KS44Oq44K744OD44OI44GZ44KLXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XG4gICAgdGhpcy5waWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saW5lcyA9IDA7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr+OBl+OAgeW/heimgeOBq+W/nOOBmOOBpuODrOODmeODq+OCkuS4iuOBkuOCi1xuICAgKi9cbiAgY2hlY2tMZXZlbFVwKCkge1xuICAgIGNvbnN0IG5ld0xldmVsID0gTWF0aC5mbG9vcih0aGlzLmxpbmVzIC8gdGhpcy5saW5lc1BlckxldmVsKSArIDE7XG4gICAgaWYgKG5ld0xldmVsID4gdGhpcy5sZXZlbCkge1xuICAgICAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkuenu+WLleOBleOBm+OCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBY5pa55ZCR44Gu56e75YuV6YePXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnp7vli5XjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIG1vdmVQaWVjZShkeCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMucGllY2UubW92ZShkeCwgMCk7XG4gICAgXG4gICAgLy8g6KGd56qB44GX44Gf44KJ5YWD44Gr5oi744GZXG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubW92ZSgtZHgsIDApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOihneeqgeWIpOWumuOCkuihjOOBhlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g6KGd56qB44GX44Gm44GE44KL44GL44Gp44GG44GLXG4gICAqL1xuICBoYXNDb2xsaXNpb24oKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSByZXR1cm4gdHJ1ZTtcbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAobWF0cml4W3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRYID0gcG9zLnggKyB4O1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDjg5zjg7zjg4njga7lpJblgbTjgYvjgIHjgZnjgafjgavjg5bjg63jg4Pjgq/jgYzjgYLjgovloLTlkIjjga/ooZ3nqoFcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBib2FyZFggPCAwIHx8XG4gICAgICAgICAgICBib2FyZFggPj0gdGhpcy5ib2FyZC5jb2xzIHx8XG4gICAgICAgICAgICBib2FyZFkgPj0gdGhpcy5ib2FyZC5yb3dzIHx8XG4gICAgICAgICAgICAoYm9hcmRZID49IDAgJiYgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV1bYm9hcmRYXSAhPT0gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDmlrDjgZfjgYTjg5Tjg7zjgrnjgpLnlJ/miJDjgZnjgotcbiAgICovXG4gIHNwYXduUGllY2UoKSB7XG4gICAgdGhpcy5waWVjZSA9IHRoaXMubmV4dFBpZWNlIHx8IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgXG4gICAgLy8g5paw44GX44GE44OU44O844K544GM5pyA5Yid44GL44KJ6KGd56qB44GX44Gm44GE44Gf44KJ44Ky44O844Og44Kq44O844OQ44O8XG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog44OU44O844K544KSMeODnuOCueS4i+OBq+enu+WLleOBleOBm+OCi1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g56e75YuV44GM5oiQ5Yqf44GX44Gf44GL44Gp44GG44GLXG4gICAqL1xuICBkcm9wUGllY2UoKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5waWVjZS5tb3ZlKDAsIDEpO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBruS9jee9ruOBq+aIu+OBl+OBpuWbuuWumlxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoMCwgLTEpO1xuICAgICAgdGhpcy5tZXJnZVBpZWNlKCk7XG4gICAgICBcbiAgICAgIC8vIOODnOODvOODieOBrmNsZWFyTGluZXPjg6Hjgr3jg4Pjg4njgpLkvb/nlKhcbiAgICAgIGNvbnN0IGxpbmVzQ2xlYXJlZCA9IHRoaXMuYm9hcmQuY2xlYXJMaW5lcygpO1xuICAgICAgaWYgKGxpbmVzQ2xlYXJlZCA+IDApIHtcbiAgICAgICAgdGhpcy5saW5lcyArPSBsaW5lc0NsZWFyZWQ7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICAgICAgICB0aGlzLmNoZWNrTGV2ZWxVcCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLnNwYXduUGllY2UoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg5Tjg7zjgrnjgpLjg5zjg7zjg4njgavlm7rlrprjgZnjgotcbiAgICovXG4gIG1lcmdlUGllY2UoKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBjb25zdCBib2FyZFggPSBwb3MueCArIHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIGJvYXJkWSA8IHRoaXMuYm9hcmQucm93cyAmJiBib2FyZFggPj0gMCAmJiBib2FyZFggPCB0aGlzLmJvYXJkLmNvbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gPSBtYXRyaXhbeV1beF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgLyoqXG4gICAqIOOCueOCs+OCouOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gbGluZXNDbGVhcmVkIC0g5raI5Y6744GX44Gf44Op44Kk44Oz5pWwXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOioiOeul+OBleOCjOOBn+OCueOCs+OColxuICAgKi9cbiAgY2FsY3VsYXRlU2NvcmUobGluZXNDbGVhcmVkKSB7XG4gICAgY29uc3QgcG9pbnRzID0gWzAsIDQwLCAxMDAsIDMwMCwgMTIwMF07IC8vIDAtNOODqeOCpOODs+a2iOOBl+OBn+OBqOOBjeOBruWfuuekjuW+l+eCuVxuICAgIHJldHVybiBwb2ludHNbTWF0aC5taW4obGluZXNDbGVhcmVkLCA0KV0gKiB0aGlzLmxldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCueOCs+OCouOCkuabtOaWsOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gbGluZXNDbGVhcmVkIC0g5raI5Y6744GX44Gf44Op44Kk44Oz5pWwXG4gICAqL1xuICB1cGRhdGVTY29yZShsaW5lc0NsZWFyZWQpIHtcbiAgICB0aGlzLnNjb3JlICs9IHRoaXMuY2FsY3VsYXRlU2NvcmUobGluZXNDbGVhcmVkKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkuWbnui7ouOBleOBm+OCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyIC0g5Zue6Lui5pa55ZCRICgxOiDmmYLoqIjlm57jgoosIC0xOiDlj43mmYLoqIjlm57jgoopXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDlm57ou6LjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIHJvdGF0ZVBpZWNlKGRpcikge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGNvbnN0IG9sZE1hdHJpeCA9IHRoaXMucGllY2UubWF0cml4O1xuICAgIHRoaXMucGllY2Uucm90YXRlKGRpcik7XG4gICAgXG4gICAgLy8g6KGd56qB44GX44Gf44KJ5YWD44Gr5oi744GZXG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubWF0cml4ID0gb2xkTWF0cml4O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiLy8gUGllY2Xjgq/jg6njgrlcbi8vIOODhuODiOODreODn+ODjuOBruW9ouODu+S9jee9ruODu+Wbnui7ouOCkueuoeeQhlxuXG5leHBvcnQgY2xhc3MgUGllY2Uge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHBvcyA9IHsgeDogMCwgeTogMCB9KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5wb3MgPSB7IC4uLnBvcyB9O1xuICB9XG5cbiAgbW92ZShkeCwgZHkpIHtcbiAgICB0aGlzLnBvcy54ICs9IGR4O1xuICAgIHRoaXMucG9zLnkgKz0gZHk7XG4gIH1cblxuICByb3RhdGUoZGlyID0gMSkge1xuICAgIC8vIOaZguioiOWbnuOCijogZGlyPTEsIOWPjeaZguioiOWbnuOCijogZGlyPS0xXG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCByZXN1bHQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBOIH0sICgpID0+IEFycmF5KE4pLmZpbGwoMCkpO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgTjsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IE47IHgrKykge1xuICAgICAgICBpZiAoZGlyID4gMCkge1xuICAgICAgICAgIHJlc3VsdFt4XVtOIC0gMSAtIHldID0gdGhpcy5tYXRyaXhbeV1beF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0W04gLSAxIC0geF1beV0gPSB0aGlzLm1hdHJpeFt5XVt4XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1hdHJpeCA9IHJlc3VsdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY29yZS9HYW1lLmpzJztcbmltcG9ydCB7IEdBTUVfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5qcyc7XG5pbXBvcnQgR2FtZVVJIGZyb20gXCIuL3VpL0dhbWVVSS5qc1wiO1xuXG4vLyAtLS0g44Kw44Ot44O844OQ44Or5aSJ5pWw44Go54q25oWL566h55CGIC0tLVxuZXhwb3J0IGxldCB0ZXRyaXNHYW1lID0gbmV3IEdhbWUoKTtcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGUgPSB7XG4gIGN0eDogbnVsbCxcbiAgYm9hcmQ6IFtdLFxuICBST1dTOiBHQU1FX0NPTlNUQU5UUy5ST1dTLFxuICBDT0xTOiBHQU1FX0NPTlNUQU5UUy5DT0xTLFxuICBwaWVjZTogbnVsbCxcbiAgbmV4dFBpZWNlOiBudWxsLFxuICBzY29yZTogMCxcbiAgbGluZXM6IDAsXG4gIGxldmVsOiAxLFxuICBkcm9wQ291bnRlcjogMCxcbiAgZHJvcEludGVydmFsOiAxMDAwLFxuICBsYXN0VGltZTogMCxcbiAgZ2FtZUxvb3BJZDogbnVsbCxcbiAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gIHBhdXNlZDogZmFsc2UsXG4gIGtleXM6IHt9LFxuXG4gIGluaXRCb2FyZCgpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkodGhpcy5ST1dTKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSh0aGlzLkNPTFMpLmZpbGwoMCkpO1xuICB9LFxuXG4gIGxvZ1N0YXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IEdhbWUgU3RhdGU6Jywge1xuICAgICAgc2NvcmU6IHRoaXMuc2NvcmUsXG4gICAgICBsaW5lczogdGhpcy5saW5lcyxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgaXNHYW1lT3ZlcjogdGhpcy5pc0dhbWVPdmVyLFxuICAgICAgcGllY2U6IHRoaXMucGllY2UsXG4gICAgICBuZXh0UGllY2U6IHRoaXMubmV4dFBpZWNlLFxuICAgIH0pO1xuICB9XG59O1xuXG4vLyAtLS0g5o+P55S76Zai6YCjIC0tLSBcbmZ1bmN0aW9uIGRyYXdNYXRyaXgoY3R4LCBtYXRyaXgsIG9mZnNldCwgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgaWYgKCFtYXRyaXggfHwgIUFycmF5LmlzQXJyYXkobWF0cml4KSkgcmV0dXJuO1xuICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHJldHVybjtcbiAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW3ZhbHVlXSB8fCAnIzAwMCc7XG4gICAgICAgIGN0eC5maWxsUmVjdCgoeCArIG9mZnNldC54KSAqIGJsb2NrU2l6ZSwgKHkgKyBvZmZzZXQueSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGlmICghZ2FtZVN0YXRlLmN0eCkgcmV0dXJuO1xuICBjb25zdCB7IGN0eCwgYm9hcmQsIHBpZWNlLCBuZXh0UGllY2UgfSA9IGdhbWVTdGF0ZTtcbiAgY29uc3QgeyBDT0xPUlMsIEJMT0NLX1NJWkUgfSA9IEdBTUVfQ09OU1RBTlRTO1xuXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gJyNmMGYwZjAnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuXG4gIGRyYXdNYXRyaXgoY3R4LCB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQsIHsgeDogMCwgeTogMCB9LCBDT0xPUlMsIEJMT0NLX1NJWkUpO1xuICBpZiAocGllY2UpIHtcbiAgICBkcmF3TWF0cml4KGN0eCwgcGllY2UubWF0cml4LCBwaWVjZS5wb3MsIENPTE9SUywgQkxPQ0tfU0laRSk7XG4gIH1cblxuICAvLyDmrKHjga7jg5Tjg7zjgrnjga7mj4/nlLtcbiAgY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGllY2UtY2FudmFzJyk7XG4gIGlmIChuZXh0UGllY2VDYW52YXMgJiYgbmV4dFBpZWNlKSB7XG4gICAgY29uc3QgbmV4dEN0eCA9IG5leHRQaWVjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIG5leHRDdHguY2xlYXJSZWN0KDAsIDAsIG5leHRDdHguY2FudmFzLndpZHRoLCBuZXh0Q3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnN0IHsgbWF0cml4IH0gPSBuZXh0UGllY2U7XG4gICAgY29uc3QgeCA9IChuZXh0Q3R4LmNhbnZhcy53aWR0aCAvIEJMT0NLX1NJWkUgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDI7XG4gICAgY29uc3QgeSA9IChuZXh0Q3R4LmNhbnZhcy5oZWlnaHQgLyBCTE9DS19TSVpFIC0gbWF0cml4Lmxlbmd0aCkgLyAyO1xuICAgIGRyYXdNYXRyaXgobmV4dEN0eCwgbWF0cml4LCB7IHgsIHkgfSwgQ09MT1JTLCBCTE9DS19TSVpFKTtcbiAgfVxufVxuXG4vLyAtLS0gVUnmm7TmlrAgLS0tIFxuZnVuY3Rpb24gdXBkYXRlVUkoKSB7XG4gIHVwZGF0ZVNjb3JlRGlzcGxheShnYW1lU3RhdGUuc2NvcmUpO1xuICB1cGRhdGVMaW5lc0Rpc3BsYXkoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgdXBkYXRlTGV2ZWxEaXNwbGF5KGdhbWVTdGF0ZS5sZXZlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTY29yZURpc3BsYXkoc2NvcmUpIHtcbiAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gIGlmIChzY29yZUVsZW1lbnQpIHtcbiAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzY29yZS50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaW5lc0Rpc3BsYXkobGluZXMpIHtcbiAgY29uc3QgbGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzJyk7XG4gIGlmIChsaW5lc0VsZW1lbnQpIHtcbiAgICBsaW5lc0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lcy50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMZXZlbERpc3BsYXkobGV2ZWwpIHtcbiAgY29uc3QgbGV2ZWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XG4gIGlmIChsZXZlbEVsZW1lbnQpIHtcbiAgICBsZXZlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsZXZlbC50b1N0cmluZygpO1xuICB9XG59XG5cbi8vIC0tLSDjgrLjg7zjg6Djg63jgrjjg4Pjgq8gLS0tIFxuZnVuY3Rpb24gdXBkYXRlR2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGUuc2NvcmUgPSB0ZXRyaXNHYW1lLnNjb3JlO1xuICBnYW1lU3RhdGUubGluZXMgPSB0ZXRyaXNHYW1lLmxpbmVzO1xuICBnYW1lU3RhdGUubGV2ZWwgPSB0ZXRyaXNHYW1lLmxldmVsO1xuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IHRldHJpc0dhbWUuaXNHYW1lT3ZlcjtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gdGV0cmlzR2FtZS5waWVjZTtcbiAgZ2FtZVN0YXRlLm5leHRQaWVjZSA9IHRldHJpc0dhbWUubmV4dFBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIgfHwgZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLmRyb3BQaWVjZSgpO1xuICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyUm90YXRlKGRpcikge1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIgfHwgZ2FtZVN0YXRlLnBhdXNlZCkgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlKGRpcik7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xufVxuXG4vLyAtLS0g44Ky44O844Og44Or44O844OXIC0tLVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lID0gMCkge1xuICBpZiAoZ2FtZVN0YXRlLnBhdXNlZCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSBnYW1lU3RhdGUubGFzdFRpbWU7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IHRpbWU7XG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciArPSBkZWx0YVRpbWU7XG5cbiAgZ2FtZVN0YXRlLmRyb3BJbnRlcnZhbCA9IHRldHJpc0dhbWUuZ2V0RHJvcEludGVydmFsKCk7XG5cbiAgaWYgKGdhbWVTdGF0ZS5kcm9wQ291bnRlciA+IGdhbWVTdGF0ZS5kcm9wSW50ZXJ2YWwpIHtcbiAgICBwbGF5ZXJEcm9wKCk7XG4gICAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgfVxuXG4gIGRyYXcoKTtcbiAgdXBkYXRlVUkoKTtcblxuICBpZiAoIWdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgfVxufVxuXG4vLyAtLS0g5Yid5pyf5YyW44Go44Kk44OZ44Oz44OI44OP44Oz44OJ44Oq44Oz44KwIC0tLVxuZXhwb3J0IGNvbnN0IGdhbWVVSSA9IG5ldyBHYW1lVUkoZ2FtZVN0YXRlLCB7XG4gIG1vdmVQaWVjZTogcGxheWVyTW92ZSxcbiAgZHJvcFBpZWNlOiBwbGF5ZXJEcm9wLFxuICByb3RhdGVQaWVjZTogcGxheWVyUm90YXRlLFxuICByZXNldEdhbWUsXG4gIHVwZGF0ZVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIHRldHJpc0dhbWUucmVzZXQoKTtcbiAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIHVwZGF0ZVVJKCk7IC8vIFVJ5pu05paw44KS6L+95YqgXG4gIGdhbWVTdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgaWYgKGdhbWVTdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZ2FtZVN0YXRlLmdhbWVMb29wSWQpO1xuICB9XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gIGNvbnNvbGUubG9nKCfjgrLjg7zjg6DjgYzjg6rjgrvjg4Pjg4jjgZXjgozjgb7jgZfjgZ/jgIInKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgZ2FtZVVJLnNldHVwRXZlbnRMaXN0ZW5lcnMoZ2FtZVVJLm9uS2V5RG93bi5iaW5kKGdhbWVVSSksIGdhbWVVSS5vbktleVVwLmJpbmQoZ2FtZVVJKSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgZHJhdygpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIOODhuOCueODiOeUqOOBrnNldHVwRXZlbnRMaXN0ZW5lcnPplqLmlbDjgpLjgqjjgq/jgrnjg53jg7zjg4hcbmV4cG9ydCB7IHNldHVwRXZlbnRMaXN0ZW5lcnMgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgY29uc29sZS5lcnJvcignQ2FudmFz6KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjdHgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJzJE44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgZ2FtZVN0YXRlLmN0eCA9IGN0eDtcbiAgICBnYW1lU3RhdGUuY2FudmFzID0gY2FudmFzOyAvLyDjg4bjgrnjg4jjgafmnJ/lvoXjgZXjgozjgabjgYTjgovjg5fjg63jg5Hjg4bjgqNcbiAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcblxuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICByZXNldEdhbWUoKTtcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XG4gICAgXG4gICAgLy8g44OG44K544OI55So44Gu6L+U44KK5YCkXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIGV2ZW50TWFuYWdlcixcbiAgICAgIGdhbWVTdGF0ZSxcbiAgICAgIGhhbmRsZUtleURvd24sXG4gICAgICBoYW5kbGVLZXlVcCxcbiAgICAgIGluaXRHYW1lOiBpbml0LFxuICAgICAgcmVzZXRHYW1lLFxuICAgICAgc2V0dXBFdmVudExpc3RlbmVycyxcbiAgICAgIHVwZGF0ZVxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBpbml0R2FtZemWouaVsOOBr2luaXTjga7jgqjjgqTjg6rjgqLjgrnvvIjjg4bjgrnjg4jkupLmj5vmgKfjga7jgZ/jgoHvvIlcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgZ2FtZVN0YXRlLmN0eCA9IGN0eDtcbiAgZ2FtZVN0YXRlLmNhbnZhcyA9IGNhbnZhcztcbiAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLy8gLS0tIOOCqOOCr+OCueODneODvOODiOOBqOODluODqeOCpuOCtuWun+ihjCAtLS1cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duID0gZ2FtZVVJLm9uS2V5RG93bi5iaW5kKGdhbWVVSSk7XG5leHBvcnQgY29uc3QgaGFuZGxlS2V5VXAgPSBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSk7XG5leHBvcnQgeyBkcmF3IH07IC8vIGRyYXfplqLmlbDjgpLjgqjjgq/jgrnjg53jg7zjg4hcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRldHJpc0dhbWUobmV3R2FtZSkge1xuICB0ZXRyaXNHYW1lID0gbmV3R2FtZTtcbn1cblxuY29uc3QgZXhwb3J0cyA9IHsgaW5pdCwgaW5pdEdhbWUsIHBsYXllck1vdmUsIHBsYXllclJvdGF0ZSwgcGxheWVyRHJvcCwgZ2FtZVVJLCBnYW1lU3RhdGUsIHJlc2V0R2FtZSwgdXBkYXRlLCBoYW5kbGVLZXlEb3duLCBoYW5kbGVLZXlVcCwgc2V0dXBFdmVudExpc3RlbmVycywgZHJhdywgdGV0cmlzR2FtZSB9O1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy50ZXRyaXMgPSB7IGdhbWU6IGV4cG9ydHMgfTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xufVxuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkge1xuICBjb25zdHJ1Y3RvcihzdGF0ZSwgYWN0aW9ucykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHRoaXM7XG4gICAgaWYgKHN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBpZiAoZXZlbnQucmVwZWF0KSByZXR1cm47XG4gICAgc3RhdGUua2V5c1tldmVudC5rZXldID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGFjdGlvbnMubW92ZVBpZWNlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGFjdGlvbnMucm90YXRlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgY29uc3QgeSA9IHN0YXRlLnBpZWNlPy5wb3MueTtcbiAgICAgICAgICBhY3Rpb25zLmRyb3BQaWVjZSgpO1xuICAgICAgICAgIGlmICh5ID09PSBzdGF0ZS5waWVjZT8ucG9zLnkgfHwgc3RhdGUuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncCc6XG4gICAgICBjYXNlICdQJzpcbiAgICAgICAgaWYgKHN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShzdGF0ZS5nYW1lTG9vcElkKTtcbiAgICAgICAgICBzdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgICAgICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgIHN0YXRlLmxhc3RUaW1lID0gMDtcbiAgICAgICAgICBzdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFjdGlvbnMudXBkYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3InOlxuICAgICAgY2FzZSAnUic6XG4gICAgICAgIGFjdGlvbnMucmVzZXRHYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlLmtleXNbZXZlbnQua2V5XSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0dXBFdmVudExpc3RlbmVycyhrZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duLCBrZXlVcEhhbmRsZXIgPSB0aGlzLm9uS2V5VXApIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXG4gKiDjg4bjg4jjg6rjgrnjgrLjg7zjg6Djga7jgqjjg7Pjg4jjg6rjg7zjg53jgqTjg7Pjg4hcbiAqL1xuXG4vLyDjgrnjgr/jgqTjg6vjgrfjg7zjg4jjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLy8g44Ky44O844Og44Oi44K444Ol44O844Or44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9nYW1lLmpzJztcblxuLy8g44OH44OQ44OD44Kw55So44Gu44K544K/44Kk44Or44KS6L+95YqgXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgI2dhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuYDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4vLyDjg4njgq3jg6Xjg6Hjg7Pjg4jjga7oqq3jgb/ovrzjgb/lrozkuobjgpLlvoXjgaPjgabjgrLjg7zjg6DjgpLliJ3mnJ/ljJZcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIOOCpOODmeODs+ODiOOBjOeZuueBq+OBl+OBvuOBl+OBnycpO1xuICBcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZLi4uJyk7XG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu54q25oWL44KS56K66KqNXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K6OicsIGNhbnZhcy53aWR0aCwgJ3gnLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnNvbGUubG9nKCfjgq3jg6Pjg7Pjg5Djgrnjga7jgrnjgr/jgqTjg6vjgrXjgqTjgro6JywgY2FudmFzLnN0eWxlLndpZHRoLCAneCcsIGNhbnZhcy5zdHlsZS5oZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCfjgq3jg6Pjg7Pjg5DjgrnopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICB9XG4gICAgLy8g44Ky44O844Og44KS6ZaL5aeLXG4gICAgaW5pdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX0NPTlNUQU5UUyIsIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSIsIlNDT1JFX1RBQkxFIiwiU0hBUEVTIiwiQ09MT1JTIiwiR0FNRV9TVEFURVMiLCJJTklUIiwiUExBWUlORyIsIlBBVVNFRCIsIkdBTUVfT1ZFUiIsIkJvYXJkIiwiY29scyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJjbGVhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsImlzSW5zaWRlIiwieCIsInkiLCJpc0VtcHR5Iiwic2V0Q2VsbCIsImdldENlbGwiLCJtZXJnZSIsInBpZWNlIiwibWF0cml4IiwicG9zIiwiY2xlYXJMaW5lcyIsImNsZWFyZWQiLCJuZXdHcmlkIiwicm93IiwiZXZlcnkiLCJjZWxsIiwicHVzaCIsInVuc2hpZnQiLCJQaWVjZSIsIkdhbWUiLCJ0ZXRyb21pbm9zIiwiYm9hcmQiLCJuZXh0UGllY2UiLCJsZXZlbFNwZWVkcyIsImxpbmVzUGVyTGV2ZWwiLCJyZXNldCIsImdldERyb3BJbnRlcnZhbCIsImxldmVsSW5kZXgiLCJNYXRoIiwibWluIiwibGV2ZWwiLCJjcmVhdGVQaWVjZSIsImluZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJsaW5lcyIsInNjb3JlIiwiaXNHYW1lT3ZlciIsInBhdXNlZCIsImNoZWNrTGV2ZWxVcCIsIm5ld0xldmVsIiwibW92ZVBpZWNlIiwiZHgiLCJtb3ZlIiwiaGFzQ29sbGlzaW9uIiwiX3RoaXMkcGllY2UiLCJib2FyZFgiLCJib2FyZFkiLCJzcGF3blBpZWNlIiwiZHJvcFBpZWNlIiwibWVyZ2VQaWVjZSIsImxpbmVzQ2xlYXJlZCIsImNhbGN1bGF0ZVNjb3JlIiwiX3RoaXMkcGllY2UyIiwicG9pbnRzIiwidXBkYXRlU2NvcmUiLCJyb3RhdGVQaWVjZSIsImRpciIsIm9sZE1hdHJpeCIsInJvdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJkeSIsIk4iLCJyZXN1bHQiLCJHYW1lVUkiLCJ0ZXRyaXNHYW1lIiwiZXZlbnRNYW5hZ2VyIiwiRXZlbnRUYXJnZXQiLCJnYW1lU3RhdGUiLCJjdHgiLCJkcm9wQ291bnRlciIsImRyb3BJbnRlcnZhbCIsImxhc3RUaW1lIiwiZ2FtZUxvb3BJZCIsImtleXMiLCJpbml0Qm9hcmQiLCJtYXAiLCJsb2dTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmF3TWF0cml4Iiwib2Zmc2V0IiwiY29sb3JzIiwiYmxvY2tTaXplIiwiaXNBcnJheSIsImZvckVhY2giLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXciLCJjbGVhclJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIm5leHRQaWVjZUNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0Q3R4IiwiZ2V0Q29udGV4dCIsInVwZGF0ZVVJIiwidXBkYXRlU2NvcmVEaXNwbGF5IiwidXBkYXRlTGluZXNEaXNwbGF5IiwidXBkYXRlTGV2ZWxEaXNwbGF5Iiwic2NvcmVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJ0b1N0cmluZyIsImxpbmVzRWxlbWVudCIsImxldmVsRWxlbWVudCIsInVwZGF0ZUdhbWVTdGF0ZSIsInBsYXllckRyb3AiLCJhbGVydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicGxheWVyTW92ZSIsInBsYXllclJvdGF0ZSIsInVwZGF0ZSIsInRpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkZWx0YVRpbWUiLCJnYW1lVUkiLCJyZXNldEdhbWUiLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwib25LZXlEb3duIiwiYmluZCIsIm9uS2V5VXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImVycm9yIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiaW5pdEdhbWUiLCJzZXRUZXRyaXNHYW1lIiwibmV3R2FtZSIsImV4cG9ydHMiLCJ0ZXRyaXMiLCJnYW1lIiwic3RhdGUiLCJhY3Rpb25zIiwiZXZlbnQiLCJyZXBlYXQiLCJfc3RhdGUkcGllY2UiLCJfc3RhdGUkcGllY2UyIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVmYXVsdCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViJdLCJzb3VyY2VSb290IjoiIn0=