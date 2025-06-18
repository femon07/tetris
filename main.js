/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
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
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   SRS_KICKS_JLTSZ: () => (/* binding */ SRS_KICKS_JLTSZ)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Board.js */ "./src/core/Board.js");
/* harmony import */ var _Piece_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Piece.js */ "./src/core/Piece.js");
function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t["return"] || t["return"]();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;} // Gameクラス
// ゲーム全体の状態管理と進行を担当



// テトロミノの形状と色のマッピング
var TETROMINO_MAP = {
  I: [
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0]],

  J: [
  [2, 0, 0],
  [2, 2, 2],
  [0, 0, 0]],

  L: [
  [0, 0, 3],
  [3, 3, 3],
  [0, 0, 0]],

  O: [
  [4, 4],
  [4, 4]],

  S: [
  [0, 5, 5],
  [5, 5, 0],
  [0, 0, 0]],

  T: [
  [0, 6, 0],
  [6, 6, 6],
  [0, 0, 0]],

  Z: [
  [7, 7, 0],
  [0, 7, 7],
  [0, 0, 0]]

};

// SRSキックデータの構造: [state][kickIndex][x/y]
// state: 現在の回転状態 (0-3)
// kickIndex: キックテストのインデックス (0-4)
// [x/y]: キックオフセット (x, y)
var SRS_KICKS_JLTSZ = [
// 0 -> R (0->1)
[
[0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]],

// R -> 2 (1->2)
[
[0, 0], [1, 0], [1, -1], [0, 2], [1, 2]],

// 2 -> L (2->3)
[
[0, 0], [1, 0], [1, 1], [0, -2], [1, -2]],

// L -> 0 (3->0)
[
[0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]]];



var SRS_KICKS_I = [
// 0 -> R (0->1)
[
[0, 0], [-2, 0], [1, 0], [-2, -1], [1, 2]],

// R -> 2 (1->2)
[
[0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]],

// 2 -> L (2->3)
[
[0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]],

// L -> 0 (3->0)
[
[0, 0], [1, 0], [-2, 0], [1, -2], [-2, 1]]];



var Game = /*#__PURE__*/function () {
  function Game() {var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;var tetrominos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Game);
    this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_5__.Board(cols, rows);
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

    // ドロップ間隔関連の初期化
    this.dropInterval = this.getDropInterval();
    this.isSoftDrop = false;

    // 初期化時に最初のピースを生成
    this.reset();
  }

  /**
   * 現在のレベルに応じたドロップ間隔を取得する
   * @returns {number} ドロップ間隔（ミリ秒）
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Game, [{ key: "getDropInterval", value:
    function getDropInterval() {
      var levelIndex = Math.min(this.level - 1, this.levelSpeeds.length - 1);
      return this.levelSpeeds[levelIndex];
    }

    /**
     * 下キーが押されたときに呼び出され、ドロップ間隔を短縮する
     */ }, { key: "startSoftDrop", value:
    function startSoftDrop() {
      if (!this.isSoftDrop) {
        this.isSoftDrop = true;
        this.dropInterval = 50; // ソフトドロップ時の間隔（ミリ秒）
      }
    }

    /**
     * 下キーが離されたときに呼び出され、ドロップ間隔を元に戻す
     */ }, { key: "stopSoftDrop", value:
    function stopSoftDrop() {
      if (this.isSoftDrop) {
        this.isSoftDrop = false;
        this.dropInterval = this.getDropInterval();
      }
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
      var type = Object.keys(TETROMINO_MAP)[index % this.tetrominos.length]; // ピースのタイプを取得
      var x = Math.floor((this.board.cols - matrix[0].length) / 2);
      // ピースの初期Y座標を調整し、画面外から出現するようにする
      // ピースの高さの分だけ上にずらす
      var y = -matrix.length;
      return new _Piece_js__WEBPACK_IMPORTED_MODULE_6__.Piece(matrix, { x: x, y: y }, type);
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
      // 自動落下間隔をリセット
      this.dropInterval = this.getDropInterval();
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

      var originalPos = _objectSpread({}, this.piece.pos);
      var originalMatrix = this.piece.matrix.map(function (row) {return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(row);});
      var originalRotationState = this.piece.rotationState;
      // 現在の回転状態を検証
      if (originalRotationState < 0 || originalRotationState > 3) {
        console.error("無効な回転状態:", originalRotationState);
        this.piece.matrix = originalMatrix;
        this.piece.rotationState = originalRotationState;
        return false;
      }

      // ピースを回転（回転状態の更新はPiece.rotate内で行う）
      this.piece.rotate(dir);
      var newRotationState = this.piece.rotationState;

      // SRS (Super Rotation System) の壁蹴りデータ
      // I-テトロミノとそれ以外のテトロミノで異なる
      var kickData = this.piece.type === 'I' ? SRS_KICKS_I : SRS_KICKS_JLTSZ;

      // 現在の回転状態に基づいてキックデータを取得
      var kicks = kickData[originalRotationState % 4]; // 0-3の範囲に収める

      if (!kicks || !Array.isArray(kicks)) {
        console.error("Invalid kicks data:", kicks, "for rotation state:", originalRotationState);
        // キックデータが取得できない場合は元に戻す
        this.piece.matrix = originalMatrix;
        this.piece.rotationState = originalRotationState;
        return false;
      }

      // 反時計回りの場合はキックデータを反転
      var testSet = dir === 1 ? (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(
        kicks) // 配列のコピーを作成
      : kicks.map(function (kick) {
        if (!Array.isArray(kick) || kick.length !== 2) {
          console.error("Invalid kick data format:", kick);
          return [0, 0];
        }
        return [-kick[0], -kick[1]];
      });var _iterator = _createForOfIteratorHelper(

          testSet),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _step$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),offsetX = _step$value[0],offsetY = _step$value[1];
          this.piece.pos.x += offsetX;
          this.piece.pos.y += offsetY;

          if (!this.hasCollision()) {
            // 衝突がなければ回転成功
            return true;
          }
          // 衝突する場合は位置を戻して次のテストを試す
          this.piece.pos.x -= offsetX;
          this.piece.pos.y -= offsetY;
        }

        // 全てのテストで衝突する場合、元の状態に戻す
      } catch (err) {_iterator.e(err);} finally {_iterator.f();}this.piece.matrix = originalMatrix;
      this.piece.rotationState = originalRotationState;
      this.piece.pos = _objectSpread({}, originalPos);
      return false;
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
  function Piece(matrix) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { x: 0, y: 0 };var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'T';(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Piece);
    this.matrix = matrix;
    this.pos = _objectSpread({}, pos);
    this.type = type; // ピースの種類 (I, J, L, O, S, T, Z)
    this.rotationState = 0; // 0: 0度, 1: 90度, 2: 180度, 3: 270度
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Piece, [{ key: "move", value:

    function move(dx, dy) {
      this.pos.x += dx;
      this.pos.y += dy;
    } }, { key: "rotate", value:

    function rotate(dir) {var _this = this;
      // dir: 1=時計回り, -1=反時計回り
      if (!this.matrix || !Array.isArray(this.matrix) || !this.matrix[0] || !Array.isArray(this.matrix[0])) return;
      var N = this.matrix.length;
      var M = this.matrix[0].length;
      var rotated;
      if (dir === 1) {
        // 時計回り: 転置して各行を反転
        rotated = Array.from({ length: M }, function (_, x) {return (
            Array.from({ length: N }, function (_, y) {return _this.matrix[N - y - 1] ? _this.matrix[N - y - 1][x] : 0;}));}
        );
      } else {
        // 反時計回り: 転置して各列を反転
        rotated = Array.from({ length: M }, function (_, x) {return (
            Array.from({ length: N }, function (_, y) {return _this.matrix[y] ? _this.matrix[y][M - x - 1] : 0;}));}
        );
      }
      this.matrix = rotated;
      // 回転状態を更新
      this.rotationState = (this.rotationState + (dir === 1 ? 1 : 3)) % 4;
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
  if (gameState.isGameOver || gameState.paused) return false;
  var dropped = tetrisGame.dropPiece();
  updateGameState();
  if (gameState.isGameOver) {
    alert('Game Over!');
    cancelAnimationFrame(gameState.gameLoopId);
  }
  return dropped;
}

function playerMove(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  if (!tetrisGame.piece) return;
  tetrisGame.movePiece(dir);
  updateGameState();
}

function playerRotate(dir) {
  if (gameState.isGameOver || gameState.paused) return;
  if (!tetrisGame.piece) return;
  tetrisGame.rotatePiece(dir);
  updateGameState();
}

// --- ゲームループ ---
function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  // 次のフレームをリクエスト
  gameState.gameLoopId = requestAnimationFrame(update);

  if (gameState.paused || gameState.isGameOver) {
    return;
  }

  // 初期化時はlastTimeを設定
  if (!gameState.lastTime) {
    gameState.lastTime = time;
  }

  var deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;

  // ドロップ処理
  gameState.dropCounter += deltaTime;
  if (gameState.dropCounter > tetrisGame.dropInterval) {
    playerDrop();
    gameState.dropCounter = 0;
    // 即座に描画を更新
    draw();
    updateUI();
  } else if (deltaTime < 100) {// 60FPSで描画する場合、16.67msごとに描画
    // スムーズなアニメーションのため、ドロップ間も描画を更新
    draw();
  }
}

// --- 初期化とイベントハンドリング ---
var gameUI = new _ui_GameUI_js__WEBPACK_IMPORTED_MODULE_2__["default"](gameState, {
  movePiece: playerMove,
  dropPiece: playerDrop,
  rotatePiece: playerRotate,
  resetGame: resetGame,
  update: update,
  getDropInterval: function getDropInterval() {return tetrisGame.getDropInterval();},
  startSoftDrop: function startSoftDrop() {return tetrisGame.startSoftDrop();},
  stopSoftDrop: function stopSoftDrop() {return tetrisGame.stopSoftDrop();}
});

function resetGame() {
  // ゲーム状態のリセット
  gameState.score = 0;
  gameState.lines = 0;
  gameState.level = 1;
  gameState.isGameOver = false;
  gameState.paused = false;
  gameState.dropCounter = 0;
  gameState.dropInterval = 1000;

  // ボードの初期化
  gameState.initBoard();

  // ゲームのリセット
  tetrisGame.reset();

  // ゲームループのリセット
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }

  // ゲーム状態の更新と描画
  updateGameState();
  updateUI();
  draw();

  // ゲームループを再開
  gameState.lastTime = 0;
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
    console.log('ゲームの初期化を開始します...');

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

    // ゲームステートの初期化
    gameState.ctx = ctx;
    gameState.canvas = canvas;

    // キャンバスのサイズ設定
    var blockSize = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
    canvas.width = gameState.COLS * blockSize;
    canvas.height = gameState.ROWS * blockSize;

    // ボードの初期化
    gameState.initBoard();

    // イベントリスナーの設定
    console.log('イベントリスナーを設定します...');
    gameUI.setupEventListeners();

    // ゲームのリセット
    console.log('ゲームをリセットします...');
    resetGame();

    // 初期描画
    console.log('初期描画を実行します...');
    draw();

    // ゲームループを開始
    console.log('ゲームループを開始します...');
    gameState.lastTime = 0;
    gameState.dropCounter = 0;
    gameState.gameLoopId = requestAnimationFrame(update);

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
      setupEventListeners: gameUI.setupEventListeners.bind(gameUI),
      update: update,
      draw: draw
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

      // 下キー以外はリピートを無視
      // 下キー以外はキーリピートを無視
      if (event.repeat && event.key !== 'ArrowDown') {
        return;
      }

      // キーがすでに押されている場合は処理しない
      if (state.keys[event.key]) {
        return;
      }
      state.keys[event.key] = true;

      switch (event.key) {
        case 'ArrowLeft':
          actions.movePiece(-1);
          break;
        case 'ArrowRight':
          actions.movePiece(1);
          break;
        case 'ArrowDown':
          actions.startSoftDrop(); // ドロップ間隔を短縮
          actions.dropPiece();
          break;
        case 'ArrowUp':
          actions.rotatePiece(1);
          break;
        case ' ':
          // ハードドロップ: ピースが着地するまで連続で落とす
          if (state.piece) {
            var dropCount = 0;
            var maxDrops = state.ROWS; // 無限ループ防止
            while (dropCount < maxDrops && !state.isGameOver) {
              var currentY = state.piece.pos.y;
              var dropped = actions.dropPiece();
              if (!dropped || state.piece.pos.y === currentY) {
                // ピースが落ちなかった、または位置が変わらなかった場合は終了
                break;
              }
              dropCount++;
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
      // 下キーが離されたらドロップ間隔を元に戻す
      if (event.key === 'ArrowDown') {
        this.actions.stopSoftDrop();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWLENBQ0Y7OztFQUNEQyxNQUFNLEVB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Q1Y7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRWIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLGVBQWUsR0FBRztBQUM3QjtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDM0M7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVDLENBQ0Y7Ozs7QUFFRCxJQUFNQyxXQUFXLEdBQUc7QUFDbEI7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQzs7QUFDRDtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzFDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDMUM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxF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TUFDVmhELE9BQU8sQ0FBQ3NDLEdBQUcsQ0FBQyxZQUFZLEVBQUVVLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsRUFBRUQsTUFBTSxDQUFDRSxNQUFNLENBQUM7TUFDM0RsRCxPQUFPLENBQUNzQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVVLE1BQU0sQ0FBQ3NELEtBQUssQ0FBQ3JELEtBQUssRUFBRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ3NELEtBQUssQ0FBQ3BELE1BQU0sQ0FBQztJQUM3RSxDQUFDLE1BQU07TUFDTGxELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDO0lBQ0E7SUFDQW1GLDhDQUFJLENBQUMsQ0FBQztFQUNSLENBQUMsQ0FBQyxPQUFPbkYsS0FBSyxFQUFFO0lBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7SUFDNUNtRSxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJc0MsSUFBc0MsRUFBRTtFQUMxQ3hCLE1BQU0sQ0FBQzJCLE1BQU0sR0FBRzNCLE1BQU0sQ0FBQzJCLE1BQU0sSUFBSSxDQUFDLENBQUM7RUFDbkMzQixNQUFNLENBQUMyQixNQUFNLENBQUN6QixJQUFJLEdBQUdBLDBDQUFJO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb25zdGFudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9Cb2FyZC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9HYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL1BpZWNlLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3VpL0dhbWVVSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIHI7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRoSG9sZXMgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmV4cG9ydCB7IF9hcnJheVdpdGhvdXRIb2xlcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsIG4pIHtcbiAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xufVxuZXhwb3J0IHsgX2NsYXNzQ2FsbENoZWNrIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gIGZvciAodmFyIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgIHZhciBvID0gclt0XTtcbiAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlO1xufVxuZXhwb3J0IHsgX2NyZWF0ZUNsYXNzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbmV4cG9ydCB7IF9pdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBsKSB7XG4gIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiByW1N5bWJvbC5pdGVyYXRvcl0gfHwgcltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgdSxcbiAgICAgIGEgPSBbXSxcbiAgICAgIGYgPSAhMCxcbiAgICAgIG8gPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICBpZiAoT2JqZWN0KHQpICE9PSB0KSByZXR1cm47XG4gICAgICAgIGYgPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBvID0gITAsIG4gPSByO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWYgJiYgbnVsbCAhPSB0W1wicmV0dXJuXCJdICYmICh1ID0gdFtcInJldHVyblwiXSgpLCBPYmplY3QodSkgIT09IHUpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbn1cbmV4cG9ydCB7IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmV4cG9ydCB7IF9ub25JdGVyYWJsZVJlc3QgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVTcHJlYWQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShyLCBlKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBlKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBlKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cbmV4cG9ydCB7IF9zbGljZWRUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheShyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZXhwb3J0IHsgX3RvQ29uc3VtYWJsZUFycmF5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5leHBvcnQgeyB0b1ByaW1pdGl2ZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufVxuZXhwb3J0IHsgdG9Qcm9wZXJ0eUtleSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmV4cG9ydCB7IF90eXBlb2YgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IHQgJiYgci5jb25zdHJ1Y3RvciAmJiAodCA9IHIuY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IHQgfHwgXCJTZXRcIiA9PT0gdCA/IEFycmF5LmZyb20ocikgOiBcIkFyZ3VtZW50c1wiID09PSB0IHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpID8gYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuZXhwb3J0IHsgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIOOCsuODvOODoOOBruWumuaVsOWumue+qVxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xuICBDT0xTOiAxMCwgLy8g44OV44Kj44O844Or44OJ44Gu5bmF77yI44OW44Ot44OD44Kv5pWw77yJXG4gIFJPV1M6IDIwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7pq5jjgZXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgQkxPQ0tfU0laRTogMjAsIC8vIDHjg5bjg63jg4Pjgq/jga7jg5Tjgq/jgrvjg6vjgrXjgqTjgrpcbiAgU0NPUkVfVEFCTEU6IHtcbiAgICAxOiA0MCwgICAvLyAx6KGM5raI44GXXG4gICAgMjogMTAwLCAgLy8gMuihjOa2iOOBl1xuICAgIDM6IDMwMCwgIC8vIDPooYzmtojjgZdcbiAgICA0OiAxMjAwICAvLyA06KGM5raI44GX77yI44OG44OI44Oq44K577yJXG4gIH0sXG4gIFNIQVBFUzogW1xuICAgIC8vIElcbiAgICBbXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIE9cbiAgICBbXG4gICAgICBbMiwgMl0sXG4gICAgICBbMiwgMl1cbiAgICBdLFxuICAgIC8vIFRcbiAgICBbXG4gICAgICBbMCwgMywgMF0sXG4gICAgICBbMywgMywgM10sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIExcbiAgICBbXG4gICAgICBbNCwgMCwgMF0sXG4gICAgICBbNCwgNCwgNF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIEpcbiAgICBbXG4gICAgICBbMCwgMCwgNV0sXG4gICAgICBbNSwgNSwgNV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFpcbiAgICBbXG4gICAgICBbNiwgNiwgMF0sXG4gICAgICBbMCwgNiwgNl0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFNcbiAgICBbXG4gICAgICBbMCwgNywgN10sXG4gICAgICBbNywgNywgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIF0sXG4gIENPTE9SUzogW1xuICAgICcjMDAwMDAwJywgLy8gMDog56m6XG4gICAgJyMwMEZGRkYnLCAvLyAxOiBJICjjgrfjgqLjg7MpXG4gICAgJyNGRkZGMDAnLCAvLyAyOiBPICjpu4ToibIpXG4gICAgJyM4MDAwODAnLCAvLyAzOiBUICjntKspXG4gICAgJyNGRkE1MDAnLCAvLyA0OiBMICjjgqrjg6zjg7PjgrgpXG4gICAgJyMwMDAwRkYnLCAvLyA1OiBKICjpnZIpXG4gICAgJyNGRjAwMDAnLCAvLyA2OiBaICjotaQpXG4gICAgJyMwMDgwMDAnICAvLyA3OiBTICjnt5EpXG4gIF0sXG4gIEdBTUVfU1RBVEVTOiB7XG4gICAgSU5JVDogJ0lOSVQnLFxuICAgIFBMQVlJTkc6ICdQTEFZSU5HJyxcbiAgICBQQVVTRUQ6ICdQQVVTRUQnLFxuICAgIEdBTUVfT1ZFUjogJ0dBTUVfT1ZFUidcbiAgfVxufTtcbiIsIi8vIEJvYXJk44Kv44Op44K5XG4vLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLnrqHnkIbjgajjg63jgrjjg4Pjgq/jgpLmi4XlvZNcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjApIHtcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gIH1cblxuICBpc0luc2lkZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5jb2xzICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ncmlkW3ldW3hdID09PSAwO1xuICB9XG5cbiAgc2V0Q2VsbCh4LCB5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzSW5zaWRlKHgsIHkpKSB0aGlzLmdyaWRbeV1beF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpID8gdGhpcy5ncmlkW3ldW3hdIDogbnVsbDtcbiAgfVxuXG4gIG1lcmdlKHBpZWNlKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcGllY2UubWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChwaWVjZS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICB0aGlzLnNldENlbGwocGllY2UucG9zLnggKyB4LCBwaWVjZS5wb3MueSArIHksIHBpZWNlLm1hdHJpeFt5XVt4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckxpbmVzKCkge1xuICAgIGxldCBjbGVhcmVkID0gMDtcbiAgICBjb25zdCBuZXdHcmlkID0gW107XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XTtcbiAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICBjbGVhcmVkKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdHcmlkLnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5YmK6Zmk44GV44KM44Gf6KGM44Gu5YiG44Gg44GR56m644Gu6KGM44KS5LiK44Gr6L+95YqgXG4gICAgd2hpbGUgKG5ld0dyaWQubGVuZ3RoIDwgdGhpcy5yb3dzKSB7XG4gICAgICBuZXdHcmlkLnVuc2hpZnQoQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5ncmlkID0gbmV3R3JpZDtcbiAgICByZXR1cm4gY2xlYXJlZDtcbiAgfVxufVxuIiwiLy8gR2FtZeOCr+ODqeOCuVxuLy8g44Ky44O844Og5YWo5L2T44Gu54q25oWL566h55CG44Go6YCy6KGM44KS5ouF5b2TXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQuanMnO1xuaW1wb3J0IHsgUGllY2UgfSBmcm9tICcuL1BpZWNlLmpzJztcblxuLy8g44OG44OI44Ot44Of44OO44Gu5b2i54q244Go6Imy44Gu44Oe44OD44OU44Oz44KwXG5jb25zdCBURVRST01JTk9fTUFQID0ge1xuICBJOiBbXG4gICAgWzAsIDAsIDAsIDBdLFxuICAgIFsxLCAxLCAxLCAxXSxcbiAgICBbMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDBdLFxuICBdLFxuICBKOiBbXG4gICAgWzIsIDAsIDBdLFxuICAgIFsyLCAyLCAyXSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIEw6IFtcbiAgICBbMCwgMCwgM10sXG4gICAgWzMsIDMsIDNdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgTzogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNF0sXG4gIF0sXG4gIFM6IFtcbiAgICBbMCwgNSwgNV0sXG4gICAgWzUsIDUsIDBdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgVDogW1xuICAgIFswLCA2LCAwXSxcbiAgICBbNiwgNiwgNl0sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBaOiBbXG4gICAgWzcsIDcsIDBdLFxuICAgIFswLCA3LCA3XSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG59O1xuXG4vLyBTUlPjgq3jg4Pjgq/jg4fjg7zjgr/jga7mp4vpgKA6IFtzdGF0ZV1ba2lja0luZGV4XVt4L3ldXG4vLyBzdGF0ZTog54++5Zyo44Gu5Zue6Lui54q25oWLICgwLTMpXG4vLyBraWNrSW5kZXg6IOOCreODg+OCr+ODhuOCueODiOOBruOCpOODs+ODh+ODg+OCr+OCuSAoMC00KVxuLy8gW3gveV06IOOCreODg+OCr+OCquODleOCu+ODg+ODiCAoeCwgeSlcbmV4cG9ydCBjb25zdCBTUlNfS0lDS1NfSkxUU1ogPSBbXG4gIC8vIDAgLT4gUiAoMC0+MSlcbiAgW1xuICAgIFswLCAwXSwgWy0xLCAwXSwgWy0xLCAtMV0sIFswLCAyXSwgWy0xLCAyXVxuICBdLFxuICAvLyBSIC0+IDIgKDEtPjIpXG4gIFtcbiAgICBbMCwgMF0sIFsxLCAwXSwgWzEsIC0xXSwgWzAsIDJdLCBbMSwgMl1cbiAgXSxcbiAgLy8gMiAtPiBMICgyLT4zKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFsxLCAxXSwgWzAsIC0yXSwgWzEsIC0yXVxuICBdLFxuICAvLyBMIC0+IDAgKDMtPjApXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFstMSwgMV0sIFswLCAtMl0sIFstMSwgLTJdXG4gIF1cbl07XG5cbmNvbnN0IFNSU19LSUNLU19JID0gW1xuICAvLyAwIC0+IFIgKDAtPjEpXG4gIFtcbiAgICBbMCwgMF0sIFstMiwgMF0sIFsxLCAwXSwgWy0yLCAtMV0sIFsxLCAyXVxuICBdLFxuICAvLyBSIC0+IDIgKDEtPjIpXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFsyLCAwXSwgWy0xLCAyXSwgWzIsIC0xXVxuICBdLFxuICAvLyAyIC0+IEwgKDItPjMpXG4gIFtcbiAgICBbMCwgMF0sIFsyLCAwXSwgWy0xLCAwXSwgWzIsIDFdLCBbLTEsIC0yXVxuICBdLFxuICAvLyBMIC0+IDAgKDMtPjApXG4gIFtcbiAgICBbMCwgMF0sIFsxLCAwXSwgWy0yLCAwXSwgWzEsIC0yXSwgWy0yLCAxXVxuICBdXG5dO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwLCB0ZXRyb21pbm9zID0gbnVsbCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoY29scywgcm93cyk7XG4gICAgdGhpcy50ZXRyb21pbm9zID0gdGV0cm9taW5vcyB8fCBbXG4gICAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICAgIFtbMiwgMl0sIFsyLCAyXV0sXG4gICAgICBbWzAsIDMsIDBdLCBbMywgMywgM11dLFxuICAgICAgW1swLCA0LCA0XSwgWzQsIDQsIDBdXSxcbiAgICAgIFtbNSwgNSwgMF0sIFswLCA1LCA1XV0sXG4gICAgICBbWzYsIDAsIDBdLCBbNiwgNiwgNl1dLFxuICAgICAgW1swLCAwLCA3XSwgWzcsIDcsIDddXSxcbiAgICBdO1xuICAgIFxuICAgIC8vIOePvuWcqOOBruODlOODvOOCueOBqOasoeOBruODlOODvOOCuVxuICAgIHRoaXMucGllY2UgPSBudWxsO1xuICAgIHRoaXMubmV4dFBpZWNlID0gbnVsbDtcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgavlv5zjgZjjgZ/jg4njg63jg4Pjg5fplpPpmpTvvIjjg5/jg6rnp5LvvIlcbiAgICB0aGlzLmxldmVsU3BlZWRzID0gW1xuICAgICAgMTAwMCwgLy8g44Os44OZ44OrMTogMS4w56eSXG4gICAgICA5MDAsICAvLyDjg6zjg5njg6syOiAwLjnnp5JcbiAgICAgIDgwMCwgIC8vIOODrOODmeODqzM6IDAuOOenklxuICAgICAgNzAwLCAgLy8g44Os44OZ44OrNDogMC4356eSXG4gICAgICA2MDAsICAvLyDjg6zjg5njg6s1OiAwLjbnp5JcbiAgICAgIDUwMCwgIC8vIOODrOODmeODqzY6IDAuNeenklxuICAgICAgNDAwLCAgLy8g44Os44OZ44OrNzogMC4056eSXG4gICAgICAzMDAsICAvLyDjg6zjg5njg6s4OiAwLjPnp5JcbiAgICAgIDIwMCwgIC8vIOODrOODmeODqzk6IDAuMuenklxuICAgICAgMTAwICAgLy8g44Os44OZ44OrMTDku6XpmY06IDAuMeenklxuICAgIF07XG4gICAgXG4gICAgLy8g44Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq44Op44Kk44Oz5pWwXG4gICAgdGhpcy5saW5lc1BlckxldmVsID0gMTA7XG4gICAgXG4gICAgLy8g44OJ44Ot44OD44OX6ZaT6ZqU6Zai6YCj44Gu5Yid5pyf5YyWXG4gICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICAgIHRoaXMuaXNTb2Z0RHJvcCA9IGZhbHNlO1xuICAgIFxuICAgIC8vIOWIneacn+WMluaZguOBq+acgOWIneOBruODlOODvOOCueOCkueUn+aIkFxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg6zjg5njg6vjgavlv5zjgZjjgZ/jg4njg63jg4Pjg5fplpPpmpTjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge251bWJlcn0g44OJ44Ot44OD44OX6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAqL1xuICBnZXREcm9wSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IE1hdGgubWluKHRoaXMubGV2ZWwgLSAxLCB0aGlzLmxldmVsU3BlZWRzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmxldmVsU3BlZWRzW2xldmVsSW5kZXhdO1xuICB9XG4gIFxuICAvKipcbiAgICog5LiL44Kt44O844GM5oq844GV44KM44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44CB44OJ44Ot44OD44OX6ZaT6ZqU44KS55+t57iu44GZ44KLXG4gICAqL1xuICBzdGFydFNvZnREcm9wKCkge1xuICAgIGlmICghdGhpcy5pc1NvZnREcm9wKSB7XG4gICAgICB0aGlzLmlzU29mdERyb3AgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSA1MDsgLy8g44K944OV44OI44OJ44Ot44OD44OX5pmC44Gu6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog5LiL44Kt44O844GM6Zui44GV44KM44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44CB44OJ44Ot44OD44OX6ZaT6ZqU44KS5YWD44Gr5oi744GZXG4gICAqL1xuICBzdG9wU29mdERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNTb2Z0RHJvcCkge1xuICAgICAgdGhpcy5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44KS44OB44Kn44OD44Kv44GX44CB5b+F6KaB44Gr5b+c44GY44Gm44Os44OZ44Or44KS5LiK44GS44KLXG4gICAqL1xuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS5L2c5oiQ44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOODhuODiOODreODn+ODjuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJucyB7UGllY2V9IOaWsOOBl+OBhOODlOODvOOCueOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgY3JlYXRlUGllY2UoaW5kZXgpIHtcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLnRldHJvbWlub3NbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LmtleXMoVEVUUk9NSU5PX01BUClbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTsgLy8g44OU44O844K544Gu44K/44Kk44OX44KS5Y+W5b6XXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKHRoaXMuYm9hcmQuY29scyAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgLy8g44OU44O844K544Gu5Yid5pyfWeW6p+aomeOCkuiqv+aVtOOBl+OAgeeUu+mdouWkluOBi+OCieWHuuePvuOBmeOCi+OCiOOBhuOBq+OBmeOCi1xuICAgIC8vIOODlOODvOOCueOBrumrmOOBleOBruWIhuOBoOOBkeS4iuOBq+OBmuOCieOBmVxuICAgIGNvbnN0IHkgPSAtbWF0cml4Lmxlbmd0aDtcbiAgICByZXR1cm4gbmV3IFBpZWNlKG1hdHJpeCwgeyB4LCB5IH0sIHR5cGUpO1xuICB9XG4gIFxuICAvKipcbiAgICog44Ky44O844Og44KS44Oq44K744OD44OI44GZ44KLXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XG4gICAgdGhpcy5waWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saW5lcyA9IDA7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAvLyDoh6rli5XokL3kuIvplpPpmpTjgpLjg6rjgrvjg4Pjg4hcbiAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgqLjg4Pjg5fjgpLjg4Hjgqfjg4Pjgq/jgZfjgIHlv4XopoHjgavlv5zjgZjjgabjg6zjg5njg6vjgpLkuIrjgZLjgotcbiAgICovXG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBjb25zdCBuZXdMZXZlbCA9IE1hdGguZmxvb3IodGhpcy5saW5lcyAvIHRoaXMubGluZXNQZXJMZXZlbCkgKyAxO1xuICAgIGlmIChuZXdMZXZlbCA+IHRoaXMubGV2ZWwpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpLnp7vli5XjgZXjgZvjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gWOaWueWQkeOBruenu+WLlemHj1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g56e75YuV44GM5oiQ5Yqf44GX44Gf44GL44Gp44GG44GLXG4gICAqL1xuICBtb3ZlUGllY2UoZHgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnBpZWNlLm1vdmUoZHgsIDApO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBq+aIu+OBmVxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoLWR4LCAwKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDooZ3nqoHliKTlrprjgpLooYzjgYZcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOihneeqgeOBl+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgaGFzQ29sbGlzaW9uKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIHRydWU7XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g44Oc44O844OJ44Gu5aSW5YG044GL44CB44GZ44Gn44Gr44OW44Ot44OD44Kv44GM44GC44KL5aC05ZCI44Gv6KGd56qBXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYm9hcmRYIDwgMCB8fFxuICAgICAgICAgICAgYm9hcmRYID49IHRoaXMuYm9hcmQuY29scyB8fFxuICAgICAgICAgICAgYm9hcmRZID49IHRoaXMuYm9hcmQucm93cyB8fFxuICAgICAgICAgICAgKGJvYXJkWSA+PSAwICYmIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gIT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS55Sf5oiQ44GZ44KLXG4gICAqL1xuICBzcGF3blBpZWNlKCkge1xuICAgIHRoaXMucGllY2UgPSB0aGlzLm5leHRQaWVjZSB8fCB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIFxuICAgIC8vIOaWsOOBl+OBhOODlOODvOOCueOBjOacgOWIneOBi+OCieihneeqgeOBl+OBpuOBhOOBn+OCieOCsuODvOODoOOCquODvOODkOODvFxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkjHjg57jgrnkuIvjgavnp7vli5XjgZXjgZvjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOenu+WLleOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgZHJvcFBpZWNlKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMucGllY2UubW92ZSgwLCAxKTtcbiAgICBcbiAgICAvLyDooZ3nqoHjgZfjgZ/jgonlhYPjga7kvY3nva7jgavmiLvjgZfjgablm7rlrppcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKDAsIC0xKTtcbiAgICAgIHRoaXMubWVyZ2VQaWVjZSgpO1xuICAgICAgXG4gICAgICAvLyDjg5zjg7zjg4njga5jbGVhckxpbmVz44Oh44K944OD44OJ44KS5L2/55SoXG4gICAgICBjb25zdCBsaW5lc0NsZWFyZWQgPSB0aGlzLmJvYXJkLmNsZWFyTGluZXMoKTtcbiAgICAgIGlmIChsaW5lc0NsZWFyZWQgPiAwKSB7XG4gICAgICAgIHRoaXMubGluZXMgKz0gbGluZXNDbGVhcmVkO1xuICAgICAgICB0aGlzLnNjb3JlICs9IHRoaXMuY2FsY3VsYXRlU2NvcmUobGluZXNDbGVhcmVkKTtcbiAgICAgICAgdGhpcy5jaGVja0xldmVsVXAoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5zcGF3blBpZWNlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICAvKipcbiAgICog54++5Zyo44Gu44OU44O844K544KS44Oc44O844OJ44Gr5Zu65a6a44GZ44KLXG4gICAqL1xuICBtZXJnZVBpZWNlKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHsgbWF0cml4LCBwb3MgfSA9IHRoaXMucGllY2U7XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChtYXRyaXhbeV1beF0gIT09IDApIHtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgY29uc3QgYm9hcmRYID0gcG9zLnggKyB4O1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChib2FyZFkgPj0gMCAmJiBib2FyZFkgPCB0aGlzLmJvYXJkLnJvd3MgJiYgYm9hcmRYID49IDAgJiYgYm9hcmRYIDwgdGhpcy5ib2FyZC5jb2xzKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmdyaWRbYm9hcmRZXVtib2FyZFhdID0gbWF0cml4W3ldW3hdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDoqIjnrpfjgZXjgozjgZ/jgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIGNvbnN0IHBvaW50cyA9IFswLCA0MCwgMTAwLCAzMDAsIDEyMDBdOyAvLyAwLTTjg6njgqTjg7PmtojjgZfjgZ/jgajjgY3jga7ln7rnpI7lvpfngrlcbiAgICByZXR1cm4gcG9pbnRzW01hdGgubWluKGxpbmVzQ2xlYXJlZCwgNCldICogdGhpcy5sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKi9cbiAgdXBkYXRlU2NvcmUobGluZXNDbGVhcmVkKSB7XG4gICAgdGhpcy5zY29yZSArPSB0aGlzLmNhbGN1bGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpLlm57ou6LjgZXjgZvjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpciAtIOWbnui7ouaWueWQkSAoMTog5pmC6KiI5Zue44KKLCAtMTog5Y+N5pmC6KiI5Zue44KKKVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5Zue6Lui44GM5oiQ5Yqf44GX44Gf44GL44Gp44GG44GLXG4gICAqL1xuICByb3RhdGVQaWVjZShkaXIpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUG9zID0geyAuLi50aGlzLnBpZWNlLnBvcyB9O1xuICAgIGNvbnN0IG9yaWdpbmFsTWF0cml4ID0gdGhpcy5waWVjZS5tYXRyaXgubWFwKHJvdyA9PiBbLi4ucm93XSk7XG4gICAgY29uc3Qgb3JpZ2luYWxSb3RhdGlvblN0YXRlID0gdGhpcy5waWVjZS5yb3RhdGlvblN0YXRlO1xuICAgIC8vIOePvuWcqOOBruWbnui7oueKtuaFi+OCkuaknOiovFxuICAgIGlmIChvcmlnaW5hbFJvdGF0aW9uU3RhdGUgPCAwIHx8IG9yaWdpbmFsUm90YXRpb25TdGF0ZSA+IDMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLnhKHlirnjgarlm57ou6LnirbmhYs6XCIsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSk7XG4gICAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgICAgdGhpcy5waWVjZS5yb3RhdGlvblN0YXRlID0gb3JpZ2luYWxSb3RhdGlvblN0YXRlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOODlOODvOOCueOCkuWbnui7ou+8iOWbnui7oueKtuaFi+OBruabtOaWsOOBr1BpZWNlLnJvdGF0ZeWGheOBp+ihjOOBhu+8iVxuICAgIHRoaXMucGllY2Uucm90YXRlKGRpcik7XG4gICAgY29uc3QgbmV3Um90YXRpb25TdGF0ZSA9IHRoaXMucGllY2Uucm90YXRpb25TdGF0ZTtcblxuICAgIC8vIFNSUyAoU3VwZXIgUm90YXRpb24gU3lzdGVtKSDjga7lo4HoubTjgorjg4fjg7zjgr9cbiAgICAvLyBJLeODhuODiOODreODn+ODjuOBqOOBneOCjOS7peWkluOBruODhuODiOODreODn+ODjuOBp+eVsOOBquOCi1xuICAgIGNvbnN0IGtpY2tEYXRhID0gdGhpcy5waWVjZS50eXBlID09PSAnSScgPyBTUlNfS0lDS1NfSSA6IFNSU19LSUNLU19KTFRTWjtcbiAgICBcbiAgICAvLyDnj77lnKjjga7lm57ou6LnirbmhYvjgavln7rjgaXjgYTjgabjgq3jg4Pjgq/jg4fjg7zjgr/jgpLlj5blvpdcbiAgICBjb25zdCBraWNrcyA9IGtpY2tEYXRhW29yaWdpbmFsUm90YXRpb25TdGF0ZSAlIDRdOyAvLyAwLTPjga7nr4Tlm7Ljgavlj47jgoHjgotcbiAgICBcbiAgICBpZiAoIWtpY2tzIHx8ICFBcnJheS5pc0FycmF5KGtpY2tzKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQga2lja3MgZGF0YTpcIiwga2lja3MsIFwiZm9yIHJvdGF0aW9uIHN0YXRlOlwiLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUpO1xuICAgICAgLy8g44Kt44OD44Kv44OH44O844K/44GM5Y+W5b6X44Gn44GN44Gq44GE5aC05ZCI44Gv5YWD44Gr5oi744GZXG4gICAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgICAgdGhpcy5waWVjZS5yb3RhdGlvblN0YXRlID0gb3JpZ2luYWxSb3RhdGlvblN0YXRlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICAvLyDlj43mmYLoqIjlm57jgorjga7loLTlkIjjga/jgq3jg4Pjgq/jg4fjg7zjgr/jgpLlj43ou6JcbiAgICBjb25zdCB0ZXN0U2V0ID0gZGlyID09PSAxIFxuICAgICAgPyBbLi4ua2lja3NdIC8vIOmFjeWIl+OBruOCs+ODlOODvOOCkuS9nOaIkFxuICAgICAgOiBraWNrcy5tYXAoa2ljayA9PiB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2spIHx8IGtpY2subGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBraWNrIGRhdGEgZm9ybWF0OlwiLCBraWNrKTtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbLWtpY2tbMF0sIC1raWNrWzFdXTtcbiAgICAgICAgfSk7XG5cbiAgICBmb3IgKGNvbnN0IFtvZmZzZXRYLCBvZmZzZXRZXSBvZiB0ZXN0U2V0KSB7XG4gICAgICB0aGlzLnBpZWNlLnBvcy54ICs9IG9mZnNldFg7XG4gICAgICB0aGlzLnBpZWNlLnBvcy55ICs9IG9mZnNldFk7XG5cbiAgICAgIGlmICghdGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgICAvLyDooZ3nqoHjgYzjgarjgZHjgozjgbDlm57ou6LmiJDlip9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICAvLyDooZ3nqoHjgZnjgovloLTlkIjjga/kvY3nva7jgpLmiLvjgZfjgabmrKHjga7jg4bjgrnjg4jjgpLoqabjgZlcbiAgICAgIHRoaXMucGllY2UucG9zLnggLT0gb2Zmc2V0WDtcbiAgICAgIHRoaXMucGllY2UucG9zLnkgLT0gb2Zmc2V0WTtcbiAgICB9XG5cbiAgICAvLyDlhajjgabjga7jg4bjgrnjg4jjgafooZ3nqoHjgZnjgovloLTlkIjjgIHlhYPjga7nirbmhYvjgavmiLvjgZlcbiAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgIHRoaXMucGllY2Uucm90YXRpb25TdGF0ZSA9IG9yaWdpbmFsUm90YXRpb25TdGF0ZTtcbiAgICB0aGlzLnBpZWNlLnBvcyA9IHsgLi4ub3JpZ2luYWxQb3MgfTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuIiwiLy8gUGllY2Xjgq/jg6njgrlcbi8vIOODhuODiOODreODn+ODjuOBruW9ouODu+S9jee9ruODu+Wbnui7ouOCkueuoeeQhlxuXG5leHBvcnQgY2xhc3MgUGllY2Uge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHBvcyA9IHsgeDogMCwgeTogMCB9LCB0eXBlID0gJ1QnKSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5wb3MgPSB7IC4uLnBvcyB9O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vIOODlOODvOOCueOBrueorumhniAoSSwgSiwgTCwgTywgUywgVCwgWilcbiAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAwOyAvLyAwOiAw5bqmLCAxOiA5MOW6piwgMjogMTgw5bqmLCAzOiAyNzDluqZcbiAgfVxuXG4gIG1vdmUoZHgsIGR5KSB7XG4gICAgdGhpcy5wb3MueCArPSBkeDtcbiAgICB0aGlzLnBvcy55ICs9IGR5O1xuICB9XG5cbiAgcm90YXRlKGRpcikge1xuICAgIC8vIGRpcjogMT3mmYLoqIjlm57jgoosIC0xPeWPjeaZguioiOWbnuOCilxuICAgIGlmICghdGhpcy5tYXRyaXggfHwgIUFycmF5LmlzQXJyYXkodGhpcy5tYXRyaXgpIHx8ICF0aGlzLm1hdHJpeFswXSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLm1hdHJpeFswXSkpIHJldHVybjtcbiAgICBjb25zdCBOID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xuICAgIGNvbnN0IE0gPSB0aGlzLm1hdHJpeFswXS5sZW5ndGg7XG4gICAgbGV0IHJvdGF0ZWQ7XG4gICAgaWYgKGRpciA9PT0gMSkge1xuICAgICAgLy8g5pmC6KiI5Zue44KKOiDou6Lnva7jgZfjgablkITooYzjgpLlj43ou6JcbiAgICAgIHJvdGF0ZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNIH0sIChfLCB4KSA9PlxuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBOIH0sIChfLCB5KSA9PiAodGhpcy5tYXRyaXhbTiAtIHkgLSAxXSA/IHRoaXMubWF0cml4W04gLSB5IC0gMV1beF0gOiAwKSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWPjeaZguioiOWbnuOCijog6Lui572u44GX44Gm5ZCE5YiX44KS5Y+N6LuiXG4gICAgICByb3RhdGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTSB9LCAoXywgeCkgPT5cbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoXywgeSkgPT4gKHRoaXMubWF0cml4W3ldID8gdGhpcy5tYXRyaXhbeV1bTSAtIHggLSAxXSA6IDApKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5tYXRyaXggPSByb3RhdGVkO1xuICAgIC8vIOWbnui7oueKtuaFi+OCkuabtOaWsFxuICAgIHRoaXMucm90YXRpb25TdGF0ZSA9ICh0aGlzLnJvdGF0aW9uU3RhdGUgKyAoZGlyID09PSAxID8gMSA6IDMpKSAlIDQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2NvcmUvR2FtZS5qcyc7XG5pbXBvcnQgeyBHQU1FX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuanMnO1xuaW1wb3J0IEdhbWVVSSBmcm9tIFwiLi91aS9HYW1lVUkuanNcIjtcblxuLy8gLS0tIOOCsOODreODvOODkOODq+WkieaVsOOBqOeKtuaFi+euoeeQhiAtLS1cbmV4cG9ydCBsZXQgdGV0cmlzR2FtZSA9IG5ldyBHYW1lKCk7XG5leHBvcnQgY29uc3QgZXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlID0ge1xuICBjdHg6IG51bGwsXG4gIGJvYXJkOiBbXSxcbiAgUk9XUzogR0FNRV9DT05TVEFOVFMuUk9XUyxcbiAgQ09MUzogR0FNRV9DT05TVEFOVFMuQ09MUyxcbiAgcGllY2U6IG51bGwsXG4gIG5leHRQaWVjZTogbnVsbCxcbiAgc2NvcmU6IDAsXG4gIGxpbmVzOiAwLFxuICBsZXZlbDogMSxcbiAgZHJvcENvdW50ZXI6IDAsXG4gIGRyb3BJbnRlcnZhbDogMTAwMCxcbiAgbGFzdFRpbWU6IDAsXG4gIGdhbWVMb29wSWQ6IG51bGwsXG4gIGlzR2FtZU92ZXI6IGZhbHNlLFxuICBwYXVzZWQ6IGZhbHNlLFxuICBrZXlzOiB7fSxcblxuICBpbml0Qm9hcmQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KHRoaXMuUk9XUykuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5DT0xTKS5maWxsKDApKTtcbiAgfSxcblxuICBsb2dTdGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBHYW1lIFN0YXRlOicsIHtcbiAgICAgIHNjb3JlOiB0aGlzLnNjb3JlLFxuICAgICAgbGluZXM6IHRoaXMubGluZXMsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIGlzR2FtZU92ZXI6IHRoaXMuaXNHYW1lT3ZlcixcbiAgICAgIHBpZWNlOiB0aGlzLnBpZWNlLFxuICAgICAgbmV4dFBpZWNlOiB0aGlzLm5leHRQaWVjZSxcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gLS0tIOaPj+eUu+mWoumAoyAtLS0gXG5mdW5jdGlvbiBkcmF3TWF0cml4KGN0eCwgbWF0cml4LCBvZmZzZXQsIGNvbG9ycywgYmxvY2tTaXplKSB7XG4gIGlmICghbWF0cml4IHx8ICFBcnJheS5pc0FycmF5KG1hdHJpeCkpIHJldHVybjtcbiAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSByZXR1cm47XG4gICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1t2YWx1ZV0gfHwgJyMwMDAnO1xuICAgICAgICBjdHguZmlsbFJlY3QoKHggKyBvZmZzZXQueCkgKiBibG9ja1NpemUsICh5ICsgb2Zmc2V0LnkpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICBpZiAoIWdhbWVTdGF0ZS5jdHgpIHJldHVybjtcbiAgY29uc3QgeyBjdHgsIGJvYXJkLCBwaWVjZSwgbmV4dFBpZWNlIH0gPSBnYW1lU3RhdGU7XG4gIGNvbnN0IHsgQ09MT1JTLCBCTE9DS19TSVpFIH0gPSBHQU1FX0NPTlNUQU5UUztcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgY3R4LmZpbGxTdHlsZSA9ICcjZjBmMGYwJztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcblxuICBkcmF3TWF0cml4KGN0eCwgdGV0cmlzR2FtZS5ib2FyZC5ncmlkLCB7IHg6IDAsIHk6IDAgfSwgQ09MT1JTLCBCTE9DS19TSVpFKTtcbiAgaWYgKHBpZWNlKSB7XG4gICAgZHJhd01hdHJpeChjdHgsIHBpZWNlLm1hdHJpeCwgcGllY2UucG9zLCBDT0xPUlMsIEJMT0NLX1NJWkUpO1xuICB9XG5cbiAgLy8g5qyh44Gu44OU44O844K544Gu5o+P55S7XG4gIGNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXBpZWNlLWNhbnZhcycpO1xuICBpZiAobmV4dFBpZWNlQ2FudmFzICYmIG5leHRQaWVjZSkge1xuICAgIGNvbnN0IG5leHRDdHggPSBuZXh0UGllY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBuZXh0Q3R4LmNsZWFyUmVjdCgwLCAwLCBuZXh0Q3R4LmNhbnZhcy53aWR0aCwgbmV4dEN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICBjb25zdCB7IG1hdHJpeCB9ID0gbmV4dFBpZWNlO1xuICAgIGNvbnN0IHggPSAobmV4dEN0eC5jYW52YXMud2lkdGggLyBCTE9DS19TSVpFIC0gbWF0cml4WzBdLmxlbmd0aCkgLyAyO1xuICAgIGNvbnN0IHkgPSAobmV4dEN0eC5jYW52YXMuaGVpZ2h0IC8gQkxPQ0tfU0laRSAtIG1hdHJpeC5sZW5ndGgpIC8gMjtcbiAgICBkcmF3TWF0cml4KG5leHRDdHgsIG1hdHJpeCwgeyB4LCB5IH0sIENPTE9SUywgQkxPQ0tfU0laRSk7XG4gIH1cbn1cblxuLy8gLS0tIFVJ5pu05pawIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xuICB1cGRhdGVTY29yZURpc3BsYXkoZ2FtZVN0YXRlLnNjb3JlKTtcbiAgdXBkYXRlTGluZXNEaXNwbGF5KGdhbWVTdGF0ZS5saW5lcyk7XG4gIHVwZGF0ZUxldmVsRGlzcGxheShnYW1lU3RhdGUubGV2ZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2NvcmVEaXNwbGF5KHNjb3JlKSB7XG4gIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICBpZiAoc2NvcmVFbGVtZW50KSB7XG4gICAgc2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gc2NvcmUudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGluZXNEaXNwbGF5KGxpbmVzKSB7XG4gIGNvbnN0IGxpbmVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lcycpO1xuICBpZiAobGluZXNFbGVtZW50KSB7XG4gICAgbGluZXNFbGVtZW50LnRleHRDb250ZW50ID0gbGluZXMudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGV2ZWxEaXNwbGF5KGxldmVsKSB7XG4gIGNvbnN0IGxldmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xuICBpZiAobGV2ZWxFbGVtZW50KSB7XG4gICAgbGV2ZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGV2ZWwudG9TdHJpbmcoKTtcbiAgfVxufVxuXG4vLyAtLS0g44Ky44O844Og44Ot44K444OD44KvIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZUdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlLnNjb3JlID0gdGV0cmlzR2FtZS5zY29yZTtcbiAgZ2FtZVN0YXRlLmxpbmVzID0gdGV0cmlzR2FtZS5saW5lcztcbiAgZ2FtZVN0YXRlLmxldmVsID0gdGV0cmlzR2FtZS5sZXZlbDtcbiAgZ2FtZVN0YXRlLmlzR2FtZU92ZXIgPSB0ZXRyaXNHYW1lLmlzR2FtZU92ZXI7XG4gIGdhbWVTdGF0ZS5waWVjZSA9IHRldHJpc0dhbWUucGllY2U7XG4gIGdhbWVTdGF0ZS5uZXh0UGllY2UgPSB0ZXRyaXNHYW1lLm5leHRQaWVjZTtcbiAgZ2FtZVN0YXRlLmJvYXJkID0gdGV0cmlzR2FtZS5ib2FyZC5ncmlkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyRHJvcCgpIHtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyIHx8IGdhbWVTdGF0ZS5wYXVzZWQpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgZHJvcHBlZCA9IHRldHJpc0dhbWUuZHJvcFBpZWNlKCk7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIpIHtcbiAgICBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgfVxuICByZXR1cm4gZHJvcHBlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gIGlmICghdGV0cmlzR2FtZS5waWVjZSkgcmV0dXJuO1xuICB0ZXRyaXNHYW1lLm1vdmVQaWVjZShkaXIpO1xuICB1cGRhdGVHYW1lU3RhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclJvdGF0ZShkaXIpIHtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyIHx8IGdhbWVTdGF0ZS5wYXVzZWQpIHJldHVybjtcbiAgaWYgKCF0ZXRyaXNHYW1lLnBpZWNlKSByZXR1cm47XG4gIHRldHJpc0dhbWUucm90YXRlUGllY2UoZGlyKTtcbiAgdXBkYXRlR2FtZVN0YXRlKCk7XG59XG5cbi8vIC0tLSDjgrLjg7zjg6Djg6vjg7zjg5cgLS0tXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHRpbWUgPSAwKSB7XG4gIC8vIOasoeOBruODleODrOODvOODoOOCkuODquOCr+OCqOOCueODiFxuICBnYW1lU3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICBcbiAgaWYgKGdhbWVTdGF0ZS5wYXVzZWQgfHwgZ2FtZVN0YXRlLmlzR2FtZU92ZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyDliJ3mnJ/ljJbmmYLjga9sYXN0VGltZeOCkuioreWumlxuICBpZiAoIWdhbWVTdGF0ZS5sYXN0VGltZSkge1xuICAgIGdhbWVTdGF0ZS5sYXN0VGltZSA9IHRpbWU7XG4gIH1cblxuICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gZ2FtZVN0YXRlLmxhc3RUaW1lO1xuICBnYW1lU3RhdGUubGFzdFRpbWUgPSB0aW1lO1xuICBcbiAgLy8g44OJ44Ot44OD44OX5Yem55CGXG4gIGdhbWVTdGF0ZS5kcm9wQ291bnRlciArPSBkZWx0YVRpbWU7XG4gIGlmIChnYW1lU3RhdGUuZHJvcENvdW50ZXIgPiB0ZXRyaXNHYW1lLmRyb3BJbnRlcnZhbCkge1xuICAgIHBsYXllckRyb3AoKTtcbiAgICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgPSAwO1xuICAgIC8vIOWNs+W6p+OBq+aPj+eUu+OCkuabtOaWsFxuICAgIGRyYXcoKTtcbiAgICB1cGRhdGVVSSgpO1xuICB9IGVsc2UgaWYgKGRlbHRhVGltZSA8IDEwMCkgeyAvLyA2MEZQU+OBp+aPj+eUu+OBmeOCi+WgtOWQiOOAgTE2LjY3bXPjgZTjgajjgavmj4/nlLtcbiAgICAvLyDjgrnjg6Djg7zjgrrjgarjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7jgZ/jgoHjgIHjg4njg63jg4Pjg5fplpPjgoLmj4/nlLvjgpLmm7TmlrBcbiAgICBkcmF3KCk7XG4gIH1cbn1cblxuLy8gLS0tIOWIneacn+WMluOBqOOCpOODmeODs+ODiOODj+ODs+ODieODquODs+OCsCAtLS1cbmV4cG9ydCBjb25zdCBnYW1lVUkgPSBuZXcgR2FtZVVJKGdhbWVTdGF0ZSwge1xuICBtb3ZlUGllY2U6IHBsYXllck1vdmUsXG4gIGRyb3BQaWVjZTogcGxheWVyRHJvcCxcbiAgcm90YXRlUGllY2U6IHBsYXllclJvdGF0ZSxcbiAgcmVzZXRHYW1lLFxuICB1cGRhdGUsXG4gIGdldERyb3BJbnRlcnZhbDogKCkgPT4gdGV0cmlzR2FtZS5nZXREcm9wSW50ZXJ2YWwoKSxcbiAgc3RhcnRTb2Z0RHJvcDogKCkgPT4gdGV0cmlzR2FtZS5zdGFydFNvZnREcm9wKCksXG4gIHN0b3BTb2Z0RHJvcDogKCkgPT4gdGV0cmlzR2FtZS5zdG9wU29mdERyb3AoKSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAvLyDjgrLjg7zjg6DnirbmhYvjga7jg6rjgrvjg4Pjg4hcbiAgZ2FtZVN0YXRlLnNjb3JlID0gMDtcbiAgZ2FtZVN0YXRlLmxpbmVzID0gMDtcbiAgZ2FtZVN0YXRlLmxldmVsID0gMTtcbiAgZ2FtZVN0YXRlLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgZ2FtZVN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgPSAwO1xuICBnYW1lU3RhdGUuZHJvcEludGVydmFsID0gMTAwMDtcbiAgXG4gIC8vIOODnOODvOODieOBruWIneacn+WMllxuICBnYW1lU3RhdGUuaW5pdEJvYXJkKCk7XG4gIFxuICAvLyDjgrLjg7zjg6Djga7jg6rjgrvjg4Pjg4hcbiAgdGV0cmlzR2FtZS5yZXNldCgpO1xuICBcbiAgLy8g44Ky44O844Og44Or44O844OX44Gu44Oq44K744OD44OIXG4gIGlmIChnYW1lU3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgfVxuICBcbiAgLy8g44Ky44O844Og54q25oWL44Gu5pu05paw44Go5o+P55S7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICB1cGRhdGVVSSgpO1xuICBkcmF3KCk7XG4gIFxuICAvLyDjgrLjg7zjg6Djg6vjg7zjg5fjgpLlho3plotcbiAgZ2FtZVN0YXRlLmxhc3RUaW1lID0gMDtcbiAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgXG4gIGNvbnNvbGUubG9nKCfjgrLjg7zjg6DjgYzjg6rjgrvjg4Pjg4jjgZXjgozjgb7jgZfjgZ/jgIInKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycygpIHtcbiAgZ2FtZVVJLnNldHVwRXZlbnRMaXN0ZW5lcnMoZ2FtZVVJLm9uS2V5RG93bi5iaW5kKGdhbWVVSSksIGdhbWVVSS5vbktleVVwLmJpbmQoZ2FtZVVJKSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgZHJhdygpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIOODhuOCueODiOeUqOOBrnNldHVwRXZlbnRMaXN0ZW5lcnPplqLmlbDjgpLjgqjjgq/jgrnjg53jg7zjg4hcbmV4cG9ydCB7IHNldHVwRXZlbnRMaXN0ZW5lcnMgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhc+imgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmICghY3R4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCcyROOCs+ODs+ODhuOCreOCueODiOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIC8vIOOCsuODvOODoOOCueODhuODvOODiOOBruWIneacn+WMllxuICAgIGdhbWVTdGF0ZS5jdHggPSBjdHg7XG4gICAgZ2FtZVN0YXRlLmNhbnZhcyA9IGNhbnZhcztcbiAgICBcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7jgrXjgqTjgrroqK3lrppcbiAgICBjb25zdCBibG9ja1NpemUgPSBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgIGNhbnZhcy53aWR0aCA9IGdhbWVTdGF0ZS5DT0xTICogYmxvY2tTaXplO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIGJsb2NrU2l6ZTtcbiAgICBcbiAgICAvLyDjg5zjg7zjg4njga7liJ3mnJ/ljJZcbiAgICBnYW1lU3RhdGUuaW5pdEJvYXJkKCk7XG4gICAgXG4gICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844Gu6Kit5a6aXG4gICAgY29uc29sZS5sb2coJ+OCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumuOBl+OBvuOBmS4uLicpO1xuICAgIGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgXG4gICAgLy8g44Ky44O844Og44Gu44Oq44K744OD44OIXG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOCkuODquOCu+ODg+ODiOOBl+OBvuOBmS4uLicpO1xuICAgIHJlc2V0R2FtZSgpO1xuICAgIFxuICAgIC8vIOWIneacn+aPj+eUu1xuICAgIGNvbnNvbGUubG9nKCfliJ3mnJ/mj4/nlLvjgpLlrp/ooYzjgZfjgb7jgZkuLi4nKTtcbiAgICBkcmF3KCk7XG4gICAgXG4gICAgLy8g44Ky44O844Og44Or44O844OX44KS6ZaL5aeLXG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOODq+ODvOODl+OCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIGdhbWVTdGF0ZS5sYXN0VGltZSA9IDA7XG4gICAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgICBnYW1lU3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ/jgIInKTtcbiAgICBcbiAgICAvLyDjg4bjgrnjg4jnlKjjga7ov5TjgorlgKRcbiAgICByZXR1cm4ge1xuICAgICAgY2FudmFzLFxuICAgICAgZXZlbnRNYW5hZ2VyLFxuICAgICAgZ2FtZVN0YXRlLFxuICAgICAgaGFuZGxlS2V5RG93bixcbiAgICAgIGhhbmRsZUtleVVwLFxuICAgICAgaW5pdEdhbWU6IGluaXQsXG4gICAgICByZXNldEdhbWUsXG4gICAgICBzZXR1cEV2ZW50TGlzdGVuZXJzOiBnYW1lVUkuc2V0dXBFdmVudExpc3RlbmVycy5iaW5kKGdhbWVVSSksXG4gICAgICB1cGRhdGUsXG4gICAgICBkcmF3XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIGluaXRHYW1l6Zai5pWw44GvaW5pdOOBruOCqOOCpOODquOCouOCue+8iOODhuOCueODiOS6kuaPm+aAp+OBruOBn+OCge+8iVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICBpZiAoIWNhbnZhcykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhc+imgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBjb25zb2xlLmVycm9yKCcyROOCs+ODs+ODhuOCreOCueODiOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBnYW1lU3RhdGUuY3R4ID0gY3R4O1xuICBnYW1lU3RhdGUuY2FudmFzID0gY2FudmFzO1xuICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIFxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vLyAtLS0g44Ko44Kv44K544Od44O844OI44Go44OW44Op44Km44K25a6f6KGMIC0tLVxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleURvd24gPSBnYW1lVUkub25LZXlEb3duLmJpbmQoZ2FtZVVJKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlVcCA9IGdhbWVVSS5vbktleVVwLmJpbmQoZ2FtZVVJKTtcbmV4cG9ydCB7IGRyYXcgfTsgLy8gZHJhd+mWouaVsOOCkuOCqOOCr+OCueODneODvOODiFxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGV0cmlzR2FtZShuZXdHYW1lKSB7XG4gIHRldHJpc0dhbWUgPSBuZXdHYW1lO1xufVxuXG5jb25zdCBleHBvcnRzID0geyBpbml0LCBpbml0R2FtZSwgcGxheWVyTW92ZSwgcGxheWVyUm90YXRlLCBwbGF5ZXJEcm9wLCBnYW1lVUksIGdhbWVTdGF0ZSwgcmVzZXRHYW1lLCB1cGRhdGUsIGhhbmRsZUtleURvd24sIGhhbmRsZUtleVVwLCBzZXR1cEV2ZW50TGlzdGVuZXJzLCBkcmF3LCB0ZXRyaXNHYW1lIH07XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkge1xuICBjb25zdHJ1Y3RvcihzdGF0ZSwgYWN0aW9ucykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHRoaXM7XG4gICAgaWYgKHN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBcbiAgICAvLyDkuIvjgq3jg7zku6XlpJbjga/jg6rjg5Tjg7zjg4jjgpLnhKHoppZcbiAgICAvLyDkuIvjgq3jg7zku6XlpJbjga/jgq3jg7zjg6rjg5Tjg7zjg4jjgpLnhKHoppZcbiAgICBpZiAoZXZlbnQucmVwZWF0ICYmIGV2ZW50LmtleSAhPT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDjgq3jg7zjgYzjgZnjgafjgavmirzjgZXjgozjgabjgYTjgovloLTlkIjjga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoc3RhdGUua2V5c1tldmVudC5rZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLmtleXNbZXZlbnQua2V5XSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBhY3Rpb25zLnN0YXJ0U29mdERyb3AoKTsgLy8g44OJ44Ot44OD44OX6ZaT6ZqU44KS55+t57iuXG4gICAgICAgIGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGFjdGlvbnMucm90YXRlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIOODj+ODvOODieODieODreODg+ODlzog44OU44O844K544GM552A5Zyw44GZ44KL44G+44Gn6YCj57aa44Gn6JC944Go44GZXG4gICAgICAgIGlmIChzdGF0ZS5waWVjZSkge1xuICAgICAgICAgIGxldCBkcm9wQ291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IG1heERyb3BzID0gc3RhdGUuUk9XUzsgLy8g54Sh6ZmQ44Or44O844OX6Ziy5q2iXG4gICAgICAgICAgd2hpbGUgKGRyb3BDb3VudCA8IG1heERyb3BzICYmICFzdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50WSA9IHN0YXRlLnBpZWNlLnBvcy55O1xuICAgICAgICAgICAgY29uc3QgZHJvcHBlZCA9IGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgICAgICBpZiAoIWRyb3BwZWQgfHwgc3RhdGUucGllY2UucG9zLnkgPT09IGN1cnJlbnRZKSB7XG4gICAgICAgICAgICAgIC8vIOODlOODvOOCueOBjOiQveOBoeOBquOBi+OBo+OBn+OAgeOBvuOBn+OBr+S9jee9ruOBjOWkieOCj+OCieOBquOBi+OBo+OBn+WgtOWQiOOBr+e1guS6hlxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyb3BDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3AnOlxuICAgICAgY2FzZSAnUCc6XG4gICAgICAgIGlmIChzdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgICAgICAgc3RhdGUuZ2FtZUxvb3BJZCA9IG51bGw7XG4gICAgICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICBzdGF0ZS5sYXN0VGltZSA9IDA7XG4gICAgICAgICAgc3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhY3Rpb25zLnVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyJzpcbiAgICAgIGNhc2UgJ1InOlxuICAgICAgICBhY3Rpb25zLnJlc2V0R2FtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbktleVVwKGV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSBmYWxzZTtcbiAgICAvLyDkuIvjgq3jg7zjgYzpm6LjgZXjgozjgZ/jgonjg4njg63jg4Pjg5fplpPpmpTjgpLlhYPjgavmiLvjgZlcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5hY3Rpb25zLnN0b3BTb2Z0RHJvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoa2V5RG93bkhhbmRsZXIgPSB0aGlzLm9uS2V5RG93biwga2V5VXBIYW5kbGVyID0gdGhpcy5vbktleVVwKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICog44OG44OI44Oq44K544Ky44O844Og44Gu44Ko44Oz44OI44Oq44O844Od44Kk44Oz44OIXG4gKi9cblxuLy8g44K544K/44Kk44Or44K344O844OI44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8vIOOCsuODvOODoOODouOCuOODpeODvOODq+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vZ2FtZS5qcyc7XG5cbi8vIOODh+ODkOODg+OCsOeUqOOBruOCueOCv+OCpOODq+OCkui/veWKoFxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICNnYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuLy8g44OJ44Kt44Ol44Oh44Oz44OI44Gu6Kqt44G/6L6844G/5a6M5LqG44KS5b6F44Gj44Gm44Ky44O844Og44KS5Yid5pyf5YyWXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCDjgqTjg5njg7Pjg4jjgYznmbrngavjgZfjgb7jgZfjgZ8nKTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBrueKtuaFi+OCkueiuuiqjVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCteOCpOOCujonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K544K/44Kk44Or44K144Kk44K6OicsIGNhbnZhcy5zdHlsZS53aWR0aCwgJ3gnLCBjYW52YXMuc3R5bGUuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign44Kt44Oj44Oz44OQ44K56KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgfVxuICAgIC8vIOOCsuODvOODoOOCkumWi+Wni1xuICAgIGluaXQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIGFsZXJ0KCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgrPjg7Pjgr3jg7zjg6vjgpLnorroqo3jgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgfVxufSk7XG5cbi8vIOmWi+eZuueUqDog44Kw44Ot44O844OQ44Or5ZCN5YmN56m66ZaT44Gr44Ko44Kv44K544Od44O844OIXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgd2luZG93LnRldHJpcyA9IHdpbmRvdy50ZXRyaXMgfHwge307XG4gIHdpbmRvdy50ZXRyaXMuaW5pdCA9IGluaXQ7XG59XG4iXSwibmFtZXMiOlsiR0FNRV9DT05TVEFOVFMiLCJDT0xTIiwiUk9XUyIsIkJMT0NLX1NJWkUiLCJTQ09SRV9UQUJMRSIsIlNIQVBFUyIsIkNPTE9SUyIsIkdBTUVfU1RBVEVTIiwiSU5JVCIsIlBMQVlJTkciLCJQQVVTRUQiLCJHQU1FX09WRVIiLCJCb2FyZCIsImNvbHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJyb3dzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2xlYXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJpc0luc2lkZSIsIngiLCJ5IiwiaXNFbXB0eSIsInNldENlbGwiLCJnZXRDZWxsIiwibWVyZ2UiLCJwaWVjZSIsIm1hdHJpeCIsInBvcyIsImNsZWFyTGluZXMiLCJjbGVhcmVkIiwibmV3R3JpZCIsInJvdyIsImV2ZXJ5IiwiY2VsbCIsInB1c2giLCJ1bnNoaWZ0IiwiUGllY2UiLCJURVRST01JTk9fTUFQIiwiSSIsIkoiLCJMIiwiTyIsIlMiLCJUIiwiWiIsIlNSU19LSUNLU19KTFRTWiIsIlNSU19LSUNLU19JIiwiR2FtZSIsInRldHJvbWlub3MiLCJib2FyZCIsIm5leHRQaWVjZSIsImxldmVsU3BlZWRzIiwibGluZXNQZXJMZXZlbCIsImRyb3BJbnRlcnZhbCIsImdldERyb3BJbnRlcnZhbCIsImlzU29mdERyb3AiLCJyZXNldCIsImxldmVsSW5kZXgiLCJNYXRoIiwibWluIiwibGV2ZWwiLCJzdGFydFNvZnREcm9wIiwic3RvcFNvZnREcm9wIiwiY3JlYXRlUGllY2UiLCJpbmRleCIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZmxvb3IiLCJyYW5kb20iLCJsaW5lcyIsInNjb3JlIiwiaXNHYW1lT3ZlciIsInBhdXNlZCIsImNoZWNrTGV2ZWxVcCIsIm5ld0xldmVsIiwibW92ZVBpZWNlIiwiZHgiLCJtb3ZlIiwiaGFzQ29sbGlzaW9uIiwiX3RoaXMkcGllY2UiLCJib2FyZFgiLCJib2FyZFkiLCJzcGF3blBpZWNlIiwiZHJvcFBpZWNlIiwibWVyZ2VQaWVjZSIsImxpbmVzQ2xlYXJlZCIsImNhbGN1bGF0ZVNjb3JlIiwiX3RoaXMkcGllY2UyIiwicG9pbnRzIiwidXBkYXRlU2NvcmUiLCJyb3RhdGVQaWVjZSIsImRpciIsIm9yaWdpbmFsUG9zIiwiX29iamVjdFNwcmVhZCIsIm9yaWdpbmFsTWF0cml4IiwibWFwIiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwib3JpZ2luYWxSb3RhdGlvblN0YXRlIiwicm90YXRpb25TdGF0ZSIsImNvbnNvbGUiLCJlcnJvciIsInJvdGF0ZSIsIm5ld1JvdGF0aW9uU3RhdGUiLCJraWNrRGF0YSIsImtpY2tzIiwiaXNBcnJheSIsInRlc3RTZXQiLCJraWNrIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVyciIsImUiLCJmIiwiZHkiLCJOIiwiTSIsInJvdGF0ZWQiLCJfIiwiR2FtZVVJIiwidGV0cmlzR2FtZSIsImV2ZW50TWFuYWdlciIsIkV2ZW50VGFyZ2V0IiwiZ2FtZVN0YXRlIiwiY3R4IiwiZHJvcENvdW50ZXIiLCJsYXN0VGltZSIsImdhbWVMb29wSWQiLCJpbml0Qm9hcmQiLCJsb2dTdGF0ZSIsImxvZyIsImRyYXdNYXRyaXgiLCJvZmZzZXQiLCJjb2xvcnMiLCJibG9ja1NpemUiLCJmb3JFYWNoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3IiwiY2xlYXJSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJuZXh0UGllY2VDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV4dEN0eCIsImdldENvbnRleHQiLCJ1cGRhdGVVSSIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInVwZGF0ZUxpbmVzRGlzcGxheSIsInVwZGF0ZUxldmVsRGlzcGxheSIsInNjb3JlRWxlbWVudCIsInRleHRDb250ZW50IiwidG9TdHJpbmciLCJsaW5lc0VsZW1lbnQiLCJsZXZlbEVsZW1lbnQiLCJ1cGRhdGVHYW1lU3RhdGUiLCJwbGF5ZXJEcm9wIiwiZHJvcHBlZCIsImFsZXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5ZXJNb3ZlIiwicGxheWVyUm90YXRlIiwidXBkYXRlIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlbHRhVGltZSIsImdhbWVVSSIsInJlc2V0R2FtZSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJvbktleURvd24iLCJiaW5kIiwib25LZXlVcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiaW5pdEdhbWUiLCJzZXRUZXRyaXNHYW1lIiwibmV3R2FtZSIsImV4cG9ydHMiLCJzdGF0ZSIsImFjdGlvbnMiLCJldmVudCIsInJlcGVhdCIsImRyb3BDb3VudCIsIm1heERyb3BzIiwiY3VycmVudFkiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGV0cmlzIl0sInNvdXJjZVJvb3QiOiIifQ==