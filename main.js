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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
 // Boardクラス
// テトリスの盤面管理とロジックを担当

var Board = /*#__PURE__*/function () {
  function Board() {var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Board);
    this.cols = cols;
    this.rows = rows;
    this.clear();
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Board, [{ key: "clear", value:

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
      if (!this.isInside(x, y) || !this.grid[y]) {
        return null;
      }
      return this.grid[y][x];
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
      if (!this.grid || !Array.isArray(this.grid)) {
        console.error('Invalid grid state');
        return 0;
      }

      var cleared = 0;
      var newGrid = [];

      for (var y = 0; y < this.grid.length; y++) {
        var row = this.grid[y];
        if (!Array.isArray(row)) {
          console.warn("Invalid row at index ".concat(y, ":"), row);
          continue;
        }

        try {
          if (row.every(function (cell) {return cell !== 0;})) {
            cleared++;
          } else {
            newGrid.push((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(row)); // 行のコピーを作成して参照を避ける
          }
        } catch (error) {
          console.error("Error processing row ".concat(y, ":"), error);
          newGrid.push((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(row));
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
      if (!this.piece || !this.piece.matrix || !this.piece.pos) {
        console.warn('Invalid piece data for collision detection');
        return true;
      }

      var _this$piece = this.piece,matrix = _this$piece.matrix,pos = _this$piece.pos;

      if (!Array.isArray(matrix) || typeof pos.x !== 'number' || typeof pos.y !== 'number') {
        console.warn('Invalid matrix or position data');
        return true;
      }

      for (var y = 0; y < matrix.length; y++) {
        var row = matrix[y];
        if (!Array.isArray(row)) {
          console.warn("Invalid row at index ".concat(y, ":"), row);
          continue;
        }

        for (var x = 0; x < row.length; x++) {
          if (row[x] !== 0) {
            var boardX = pos.x + x;
            var boardY = pos.y + y;

            // ボードの外側か、すでにブロックがある場合は衝突
            if (
            boardX < 0 ||
            boardX >= this.board.cols ||
            boardY >= this.board.rows ||
            boardY >= 0 &&
            this.board.grid[boardY] &&
            this.board.grid[boardY][boardX] !== 0)
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
      if (typeof linesCleared !== 'number' || linesCleared < 0) {
        console.warn('Invalid linesCleared value:', linesCleared);
        return 0;
      }

      if (typeof this.level !== 'number' || this.level < 1) {
        console.warn('Invalid level value:', this.level);
        return 0;
      }

      var points = [0, 40, 100, 300, 1200]; // 0-4ライン消したときの基礎得点
      var index = Math.min(Math.max(0, Math.floor(linesCleared)), points.length - 1);
      return points[index] * this.level;
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
      if (!this.piece || !this.piece.matrix || !Array.isArray(this.piece.matrix)) {
        console.warn('Invalid piece for rotation');
        return false;
      }

      try {
        var originalPos = _objectSpread({}, this.piece.pos);
        var originalMatrix = this.piece.matrix.map(function (row) {return (
            Array.isArray(row) ? (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(row) : []);}
        );
        var originalRotationState = this.piece.rotationState;

        // 現在の回転状態を検証
        if (typeof originalRotationState !== 'number' || originalRotationState < 0 || originalRotationState > 3) {
          console.error("無効な回転状態:", originalRotationState);
          this.piece.matrix = originalMatrix;
          this.piece.rotationState = originalRotationState;
          return false;
        }

        // ピースを回転（回転状態の更新はPiece.rotate内で行う）
        this.piece.rotate(dir);

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
      } catch (error) {
        console.error('Error during piece rotation:', error);
        return false;
      }
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
  if (!ctx || !matrix || !Array.isArray(matrix) || !offset || !colors || !blockSize) {
    console.warn('drawMatrix: Invalid parameters', {
      hasCtx: !!ctx,
      hasMatrix: !!matrix,
      hasOffset: !!offset,
      hasColors: !!colors,
      hasBlockSize: !!blockSize
    });
    return;
  }

  // offset の有効性をチェック
  if (typeof offset.x !== 'number' || typeof offset.y !== 'number') {
    console.warn('drawMatrix: Invalid offset values', offset);
    return;
  }

  matrix.forEach(function (row, y) {
    if (!Array.isArray(row)) return;
    row.forEach(function (value, x) {
      if (value !== 0) {
        try {
          // colors配列の境界チェック
          ctx.fillStyle = colors[value] && typeof colors[value] === 'string' ? colors[value] : '#000';
          ctx.fillRect((x + offset.x) * blockSize, (y + offset.y) * blockSize, blockSize, blockSize);
        } catch (error) {
          console.error('Error drawing block at', x, y, ':', error);
        }
      }
    });
  });
}

function draw() {
  try {
    if (!gameState.ctx || !gameState.ctx.canvas) {
      console.warn('Invalid canvas context in draw function');
      return;
    }

    var ctx = gameState.ctx,piece = gameState.piece,nextPiece = gameState.nextPiece;
    var COLORS = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS,BLOCK_SIZE = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

    // キャンバスのクリアと背景描画
    try {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = '#f0f0f0';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    } catch (error) {
      console.error('Error clearing/filling canvas:', error);
      return;
    }

    // メインボードの描画
    if (tetrisGame && tetrisGame.board && tetrisGame.board.grid) {
      drawMatrix(ctx, tetrisGame.board.grid, { x: 0, y: 0 }, COLORS, BLOCK_SIZE);
    }

    // 現在のピースの描画
    if (piece && piece.matrix && piece.pos) {
      drawMatrix(ctx, piece.matrix, piece.pos, COLORS, BLOCK_SIZE);
    }

    // 次のピースの描画
    var nextPieceCanvas = document.getElementById('next-piece-canvas');
    if (nextPieceCanvas && nextPiece && nextPiece.matrix) {
      try {
        var nextCtx = nextPieceCanvas.getContext('2d');
        if (!nextCtx) {
          console.warn('Could not get 2D context for next piece canvas');
          return;
        }

        nextCtx.clearRect(0, 0, nextCtx.canvas.width, nextCtx.canvas.height);
        var matrix = nextPiece.matrix;

        // マトリクスが有効かチェック
        if (Array.isArray(matrix) && matrix.length > 0 && Array.isArray(matrix[0])) {
          var x = (nextCtx.canvas.width / BLOCK_SIZE - matrix[0].length) / 2;
          var y = (nextCtx.canvas.height / BLOCK_SIZE - matrix.length) / 2;
          drawMatrix(nextCtx, matrix, { x: x, y: y }, COLORS, BLOCK_SIZE);
        }
      } catch (error) {
        console.error('Error drawing next piece:', error);
      }
    }
  } catch (error) {
    console.error('Unexpected error in draw function:', error);
  }
}

// --- UI更新 --- 
function updateUI() {
  updateScoreDisplay(gameState.score);
  updateLinesDisplay(gameState.lines);
  updateLevelDisplay(gameState.level);
}

function updateScoreDisplay(score) {
  try {
    if (typeof score !== 'number' || isNaN(score)) {
      console.warn('Invalid score value:', score);
      return;
    }

    var scoreElement = document.getElementById('score');
    if (scoreElement) {
      scoreElement.textContent = score.toString();
    } else {
      console.warn('Score display element not found');
    }
  } catch (error) {
    console.error('Error updating score display:', error);
  }
}

function updateLinesDisplay(lines) {
  try {
    if (typeof lines !== 'number' || isNaN(lines)) {
      console.warn('Invalid lines value:', lines);
      return;
    }

    var linesElement = document.getElementById('lines');
    if (linesElement) {
      linesElement.textContent = lines.toString();
    } else {
      console.warn('Lines display element not found');
    }
  } catch (error) {
    console.error('Error updating lines display:', error);
  }
}

function updateLevelDisplay(level) {
  try {
    if (typeof level !== 'number' || isNaN(level)) {
      console.warn('Invalid level value:', level);
      return;
    }

    var levelElement = document.getElementById('level');
    if (levelElement) {
      levelElement.textContent = level.toString();
    } else {
      console.warn('Level display element not found');
    }
  } catch (error) {
    console.error('Error updating level display:', error);
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
  try {
    if (gameState.isGameOver || gameState.paused) return false;

    if (!tetrisGame || typeof tetrisGame.dropPiece !== 'function') {
      console.error('Invalid tetrisGame object or missing dropPiece method');
      return false;
    }

    var dropped = tetrisGame.dropPiece();
    updateGameState();

    if (gameState.isGameOver) {
      alert('Game Over!');
      if (gameState.gameLoopId) {
        cancelAnimationFrame(gameState.gameLoopId);
        gameState.gameLoopId = null;
      }
    }
    return dropped;
  } catch (error) {
    console.error('Error in playerDrop:', error);
    return false;
  }
}

function playerMove(dir) {
  try {
    if (gameState.isGameOver || gameState.paused) return;

    if (!tetrisGame || typeof tetrisGame.movePiece !== 'function') {
      console.error('Invalid tetrisGame object or missing movePiece method');
      return;
    }

    if (!tetrisGame.piece) return;

    if (typeof dir !== 'number') {
      console.warn('Invalid direction for playerMove:', dir);
      return;
    }

    tetrisGame.movePiece(dir);
    updateGameState();
  } catch (error) {
    console.error('Error in playerMove:', error);
  }
}

function playerRotate(dir) {
  try {
    if (gameState.isGameOver || gameState.paused) return;

    if (!tetrisGame || typeof tetrisGame.rotatePiece !== 'function') {
      console.error('Invalid tetrisGame object or missing rotatePiece method');
      return;
    }

    if (!tetrisGame.piece) return;

    if (typeof dir !== 'number') {
      console.warn('Invalid direction for playerRotate:', dir);
      return;
    }

    tetrisGame.rotatePiece(dir);
    updateGameState();
  } catch (error) {
    console.error('Error in playerRotate:', error);
  }
}

// --- ゲームループ ---
function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  try {
    gameState.gameLoopId = requestAnimationFrame(update);

    if (gameState.isGameOver || gameState.paused) {
      return;
    }

    // 初期化時はlastTimeを設定
    if (!gameState.lastTime) {
      gameState.lastTime = time;
    }

    var deltaTime = time - gameState.lastTime;
    gameState.lastTime = time;

    // 異常なデルタタイムをスキップ（フレーム計算の安定性向上）
    if (deltaTime > 1000) {
      console.warn('Large delta time detected, skipping frame:', deltaTime);
      return;
    }

    // ドロップ処理
    if (typeof gameState.dropCounter === 'number' && typeof tetrisGame.dropInterval === 'number') {
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
    } else {
      console.warn('Invalid dropCounter or dropInterval values');
      // 無効な状態の場合は描画のみ実行
      draw();
    }
  } catch (error) {
    console.error('Game loop error:', error);
    // ゲームを一時停止してエラーを報告
    gameState.paused = true;
    console.warn('Game paused due to error. Press R to reset the game.');

    // エラー発生時でも描画は試行する
    try {
      draw();
    } catch (drawError) {
      console.error('Draw error during error recovery:', drawError);
    }
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
          actions.startSoftDrop();
          actions.dropPiece();
          break;
        case 'ArrowUp':
          actions.rotatePiece(1);
          break;
        case ' ':
          // ハードドロップ: ピースが着地するまで連続で落とす
          if (state.piece && state.piece.pos && typeof state.piece.pos.y === 'number') {
            var dropCount = 0;
            var maxDrops = Math.min(state.ROWS || 20, 100); // より安全な上限設定
            while (dropCount < maxDrops && !state.isGameOver && state.piece) {
              var currentY = state.piece.pos.y;
              try {
                var dropped = actions.dropPiece();
                if (!dropped || !state.piece || state.piece.pos.y === currentY) {
                  // ピースが落ちなかった、または位置が変わらなかった場合は終了
                  break;
                }
                dropCount++;
              } catch (error) {
                console.error('Error during hard drop:', error);
                break;
              }
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWLENBQ0Y7OztFQUNEQyxNQUFNLEVB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QUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDYjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRWIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLGVBQWUsR0FBRztBQUM3QjtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDM0M7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVDLENBQ0Y7Ozs7QUFFRCxJQUFNQyxXQUFXLEdBQUc7QUFDbEI7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQzs7QUFDRDtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzFDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDMUM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQyxDQUNGOzs7O0FBRU0sSUFBTUMsSUFBSTtFQUNmLFNBQUFBLEtBQUEsRUFBcUQsS0FBekNsRCxJQUFJLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUUsS0FBRUcsSUFBSSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFLEtBQUVrRCxVQUFVLEdBQUFsRCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxJQUFJLENBQUFJLGlGQUFBLE9BQUE2QyxJQUFBO0lBQ2pELElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUlyRCw0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LGtCQUFrQixDQUFDO0lBQy9CO0lBQ0EsSUFBTWMsTUFBTSxHQUFHSyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDOUMsSUFBSU4sTUFBTSxFQUFFO01BQ1Y1SCxPQUFPLENBQUM4RyxHQUFHLENBQUMsWUFBWSxFQUFFYyxNQUFNLENBQUNFLEtBQUssRUFBRSxHQUFHLEVBQUVGLE1BQU0sQ0FBQ0csTUFBTSxDQUFDO01BQzNEL0gsT0FBTyxDQUFDOEcsR0FBRyxDQUFDLGdCQUFnQixFQUFFYyxNQUFNLENBQUN5RCxLQUFLLENBQUN2RCxLQUFLLEVBQUUsR0FBRyxFQUFFRixNQUFNLENBQUN5RCxLQUFLLENBQUN0RCxNQUFNLENBQUM7SUFDN0UsQ0FBQyxNQUFNO01BQ0wvSCxPQUFPLENBQUNDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQztJQUNBO0lBQ0FrSyw4Q0FBSSxDQUFDLENBQUM7RUFDUixDQUFDLENBQUMsT0FBT2xLLEtBQUssRUFBRTtJQUNkRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO0lBQzVDaUosS0FBSyxDQUFDLHFDQUFxQyxDQUFDO0VBQzlDO0FBQ0YsQ0FBQyxDQUFDOztBQUVGO0FBQ0EsSUFBSXVDLElBQXNDLEVBQUU7RUFDMUN4QixNQUFNLENBQUMyQixNQUFNLEdBQUczQixNQUFNLENBQUMyQixNQUFNLElBQUksQ0FBQyxDQUFDO0VBQ25DM0IsTUFBTSxDQUFDMkIsTUFBTSxDQUFDekIsSUFBSSxHQUFHQSwwQ0FBSTtBQUMzQixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29uc3RhbnRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRob3V0SG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVSZXN0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlU3ByZWFkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5leHBvcnQgeyBfc2xpY2VkVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyDjgrLjg7zjg6Djga7lrprmlbDlrprnvqlcbmV4cG9ydCBjb25zdCBHQU1FX0NPTlNUQU5UUyA9IHtcbiAgQ09MUzogMTAsIC8vIOODleOCo+ODvOODq+ODieOBruW5he+8iOODluODreODg+OCr+aVsO+8iVxuICBST1dTOiAyMCwgLy8g44OV44Kj44O844Or44OJ44Gu6auY44GV77yI44OW44Ot44OD44Kv5pWw77yJXG4gIEJMT0NLX1NJWkU6IDIwLCAvLyAx44OW44Ot44OD44Kv44Gu44OU44Kv44K744Or44K144Kk44K6XG4gIFNDT1JFX1RBQkxFOiB7XG4gICAgMTogNDAsICAgLy8gMeihjOa2iOOBl1xuICAgIDI6IDEwMCwgIC8vIDLooYzmtojjgZdcbiAgICAzOiAzMDAsICAvLyAz6KGM5raI44GXXG4gICAgNDogMTIwMCAgLy8gNOihjOa2iOOBl++8iOODhuODiOODquOCue+8iVxuICB9LFxuICBTSEFQRVM6IFtcbiAgICAvLyBJXG4gICAgW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBPXG4gICAgW1xuICAgICAgWzIsIDJdLFxuICAgICAgWzIsIDJdXG4gICAgXSxcbiAgICAvLyBUXG4gICAgW1xuICAgICAgWzAsIDMsIDBdLFxuICAgICAgWzMsIDMsIDNdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBMXG4gICAgW1xuICAgICAgWzQsIDAsIDBdLFxuICAgICAgWzQsIDQsIDRdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBKXG4gICAgW1xuICAgICAgWzAsIDAsIDVdLFxuICAgICAgWzUsIDUsIDVdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBaXG4gICAgW1xuICAgICAgWzYsIDYsIDBdLFxuICAgICAgWzAsIDYsIDZdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBTXG4gICAgW1xuICAgICAgWzAsIDcsIDddLFxuICAgICAgWzcsIDcsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICBdLFxuICBDT0xPUlM6IFtcbiAgICAnIzAwMDAwMCcsIC8vIDA6IOepulxuICAgICcjMDBGRkZGJywgLy8gMTogSSAo44K344Ki44OzKVxuICAgICcjRkZGRjAwJywgLy8gMjogTyAo6buE6ImyKVxuICAgICcjODAwMDgwJywgLy8gMzogVCAo57SrKVxuICAgICcjRkZBNTAwJywgLy8gNDogTCAo44Kq44Os44Oz44K4KVxuICAgICcjMDAwMEZGJywgLy8gNTogSiAo6Z2SKVxuICAgICcjRkYwMDAwJywgLy8gNjogWiAo6LWkKVxuICAgICcjMDA4MDAwJyAgLy8gNzogUyAo57eRKVxuICBdLFxuICBHQU1FX1NUQVRFUzoge1xuICAgIElOSVQ6ICdJTklUJyxcbiAgICBQTEFZSU5HOiAnUExBWUlORycsXG4gICAgUEFVU0VEOiAnUEFVU0VEJyxcbiAgICBHQU1FX09WRVI6ICdHQU1FX09WRVInXG4gIH1cbn07XG4iLCIvLyBCb2FyZOOCr+ODqeOCuVxuLy8g44OG44OI44Oq44K544Gu55uk6Z2i566h55CG44Go44Ot44K444OD44Kv44KS5ouF5b2TXG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwKSB7XG4gICAgdGhpcy5jb2xzID0gY29scztcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucm93cyB9LCAoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xuICB9XG5cbiAgaXNJbnNpZGUoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuY29scyAmJiB5ID49IDAgJiYgeSA8IHRoaXMucm93cztcbiAgfVxuXG4gIGlzRW1wdHkoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpICYmIHRoaXMuZ3JpZFt5XVt4XSA9PT0gMDtcbiAgfVxuXG4gIHNldENlbGwoeCwgeSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc0luc2lkZSh4LCB5KSkgdGhpcy5ncmlkW3ldW3hdID0gdmFsdWU7XG4gIH1cblxuICBnZXRDZWxsKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuaXNJbnNpZGUoeCwgeSkgfHwgIXRoaXMuZ3JpZFt5XSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF07XG4gIH1cblxuICBtZXJnZShwaWVjZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcGllY2UubWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBpZWNlLm1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocGllY2UubWF0cml4W3ldW3hdKSB7XG4gICAgICAgICAgdGhpcy5zZXRDZWxsKHBpZWNlLnBvcy54ICsgeCwgcGllY2UucG9zLnkgKyB5LCBwaWVjZS5tYXRyaXhbeV1beF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBpZiAoIXRoaXMuZ3JpZCB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmdyaWQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGdyaWQgc3RhdGUnKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2xlYXJlZCA9IDA7XG4gICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWRbeV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm93IGF0IGluZGV4ICR7eX06YCwgcm93KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICAgIGNsZWFyZWQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdHcmlkLnB1c2goWy4uLnJvd10pOyAvLyDooYzjga7jgrPjg5Tjg7zjgpLkvZzmiJDjgZfjgablj4LnhafjgpLpgb/jgZHjgotcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByb3cgJHt5fTpgLCBlcnJvcik7XG4gICAgICAgIG5ld0dyaWQucHVzaChbLi4ucm93XSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWJiumZpOOBleOCjOOBn+ihjOOBruWIhuOBoOOBkeepuuOBruihjOOCkuS4iuOBq+i/veWKoFxuICAgIHdoaWxlIChuZXdHcmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgbmV3R3JpZC51bnNoaWZ0KEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ3JpZCA9IG5ld0dyaWQ7XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5cbi8vIOODhuODiOODreODn+ODjuOBruW9oueKtuOBqOiJsuOBruODnuODg+ODlOODs+OCsFxuY29uc3QgVEVUUk9NSU5PX01BUCA9IHtcbiAgSTogW1xuICAgIFswLCAwLCAwLCAwXSxcbiAgICBbMSwgMSwgMSwgMV0sXG4gICAgWzAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwXSxcbiAgXSxcbiAgSjogW1xuICAgIFsyLCAwLCAwXSxcbiAgICBbMiwgMiwgMl0sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBMOiBbXG4gICAgWzAsIDAsIDNdLFxuICAgIFszLCAzLCAzXSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIE86IFtcbiAgICBbNCwgNF0sXG4gICAgWzQsIDRdLFxuICBdLFxuICBTOiBbXG4gICAgWzAsIDUsIDVdLFxuICAgIFs1LCA1LCAwXSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIFQ6IFtcbiAgICBbMCwgNiwgMF0sXG4gICAgWzYsIDYsIDZdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgWjogW1xuICAgIFs3LCA3LCAwXSxcbiAgICBbMCwgNywgN10sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxufTtcblxuLy8gU1JT44Kt44OD44Kv44OH44O844K/44Gu5qeL6YCgOiBbc3RhdGVdW2tpY2tJbmRleF1beC95XVxuLy8gc3RhdGU6IOePvuWcqOOBruWbnui7oueKtuaFiyAoMC0zKVxuLy8ga2lja0luZGV4OiDjgq3jg4Pjgq/jg4bjgrnjg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrkgKDAtNClcbi8vIFt4L3ldOiDjgq3jg4Pjgq/jgqrjg5Xjgrvjg4Pjg4ggKHgsIHkpXG5leHBvcnQgY29uc3QgU1JTX0tJQ0tTX0pMVFNaID0gW1xuICAvLyAwIC0+IFIgKDAtPjEpXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFstMSwgLTFdLCBbMCwgMl0sIFstMSwgMl1cbiAgXSxcbiAgLy8gUiAtPiAyICgxLT4yKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFsxLCAtMV0sIFswLCAyXSwgWzEsIDJdXG4gIF0sXG4gIC8vIDIgLT4gTCAoMi0+MylcbiAgW1xuICAgIFswLCAwXSwgWzEsIDBdLCBbMSwgMV0sIFswLCAtMl0sIFsxLCAtMl1cbiAgXSxcbiAgLy8gTCAtPiAwICgzLT4wKVxuICBbXG4gICAgWzAsIDBdLCBbLTEsIDBdLCBbLTEsIDFdLCBbMCwgLTJdLCBbLTEsIC0yXVxuICBdXG5dO1xuXG5jb25zdCBTUlNfS0lDS1NfSSA9IFtcbiAgLy8gMCAtPiBSICgwLT4xKVxuICBbXG4gICAgWzAsIDBdLCBbLTIsIDBdLCBbMSwgMF0sIFstMiwgLTFdLCBbMSwgMl1cbiAgXSxcbiAgLy8gUiAtPiAyICgxLT4yKVxuICBbXG4gICAgWzAsIDBdLCBbLTEsIDBdLCBbMiwgMF0sIFstMSwgMl0sIFsyLCAtMV1cbiAgXSxcbiAgLy8gMiAtPiBMICgyLT4zKVxuICBbXG4gICAgWzAsIDBdLCBbMiwgMF0sIFstMSwgMF0sIFsyLCAxXSwgWy0xLCAtMl1cbiAgXSxcbiAgLy8gTCAtPiAwICgzLT4wKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFstMiwgMF0sIFsxLCAtMl0sIFstMiwgMV1cbiAgXVxuXTtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihjb2xzID0gMTAsIHJvd3MgPSAyMCwgdGV0cm9taW5vcyA9IG51bGwpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKGNvbHMsIHJvd3MpO1xuICAgIHRoaXMudGV0cm9taW5vcyA9IHRldHJvbWlub3MgfHwgW1xuICAgICAgW1sxLCAxLCAxLCAxXV0sXG4gICAgICBbWzIsIDJdLCBbMiwgMl1dLFxuICAgICAgW1swLCAzLCAwXSwgWzMsIDMsIDNdXSxcbiAgICAgIFtbMCwgNCwgNF0sIFs0LCA0LCAwXV0sXG4gICAgICBbWzUsIDUsIDBdLCBbMCwgNSwgNV1dLFxuICAgICAgW1s2LCAwLCAwXSwgWzYsIDYsIDZdXSxcbiAgICAgIFtbMCwgMCwgN10sIFs3LCA3LCA3XV0sXG4gICAgXTtcbiAgICBcbiAgICAvLyDnj77lnKjjga7jg5Tjg7zjgrnjgajmrKHjga7jg5Tjg7zjgrlcbiAgICB0aGlzLnBpZWNlID0gbnVsbDtcbiAgICB0aGlzLm5leHRQaWVjZSA9IG51bGw7XG4gICAgXG4gICAgLy8g44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAgdGhpcy5sZXZlbFNwZWVkcyA9IFtcbiAgICAgIDEwMDAsIC8vIOODrOODmeODqzE6IDEuMOenklxuICAgICAgOTAwLCAgLy8g44Os44OZ44OrMjogMC4556eSXG4gICAgICA4MDAsICAvLyDjg6zjg5njg6szOiAwLjjnp5JcbiAgICAgIDcwMCwgIC8vIOODrOODmeODqzQ6IDAuN+enklxuICAgICAgNjAwLCAgLy8g44Os44OZ44OrNTogMC4256eSXG4gICAgICA1MDAsICAvLyDjg6zjg5njg6s2OiAwLjXnp5JcbiAgICAgIDQwMCwgIC8vIOODrOODmeODqzc6IDAuNOenklxuICAgICAgMzAwLCAgLy8g44Os44OZ44OrODogMC4z56eSXG4gICAgICAyMDAsICAvLyDjg6zjg5njg6s5OiAwLjLnp5JcbiAgICAgIDEwMCAgIC8vIOODrOODmeODqzEw5Lul6ZmNOiAwLjHnp5JcbiAgICBdO1xuICAgIFxuICAgIC8vIOODrOODmeODq+OCouODg+ODl+OBq+W/heimgeOBquODqeOCpOODs+aVsFxuICAgIHRoaXMubGluZXNQZXJMZXZlbCA9IDEwO1xuICAgIFxuICAgIC8vIOODieODreODg+ODl+mWk+malOmWoumAo+OBruWIneacn+WMllxuICAgIHRoaXMuZHJvcEludGVydmFsID0gdGhpcy5nZXREcm9wSW50ZXJ2YWwoKTtcbiAgICB0aGlzLmlzU29mdERyb3AgPSBmYWxzZTtcbiAgICBcbiAgICAvLyDliJ3mnJ/ljJbmmYLjgavmnIDliJ3jga7jg5Tjg7zjgrnjgpLnlJ/miJBcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgKi9cbiAgZ2V0RHJvcEludGVydmFsKCkge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBNYXRoLm1pbih0aGlzLmxldmVsIC0gMSwgdGhpcy5sZXZlbFNwZWVkcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGhpcy5sZXZlbFNwZWVkc1tsZXZlbEluZGV4XTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOS4i+OCreODvOOBjOaKvOOBleOCjOOBn+OBqOOBjeOBq+WRvOOBs+WHuuOBleOCjOOAgeODieODreODg+ODl+mWk+malOOCkuefree4ruOBmeOCi1xuICAgKi9cbiAgc3RhcnRTb2Z0RHJvcCgpIHtcbiAgICBpZiAoIXRoaXMuaXNTb2Z0RHJvcCkge1xuICAgICAgdGhpcy5pc1NvZnREcm9wID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJvcEludGVydmFsID0gNTA7IC8vIOOCveODleODiOODieODreODg+ODl+aZguOBrumWk+malO+8iOODn+ODquenku+8iVxuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOS4i+OCreODvOOBjOmbouOBleOCjOOBn+OBqOOBjeOBq+WRvOOBs+WHuuOBleOCjOOAgeODieODreODg+ODl+mWk+malOOCkuWFg+OBq+aIu+OBmVxuICAgKi9cbiAgc3RvcFNvZnREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzU29mdERyb3ApIHtcbiAgICAgIHRoaXMuaXNTb2Z0RHJvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr+OBl+OAgeW/heimgeOBq+W/nOOBmOOBpuODrOODmeODq+OCkuS4iuOBkuOCi1xuICAgKi9cbiAgLyoqXG4gICAqIOaWsOOBl+OBhOODlOODvOOCueOCkuS9nOaIkOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDjg4bjg4jjg63jg5/jg47jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybnMge1BpZWNlfSDmlrDjgZfjgYTjg5Tjg7zjgrnjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIGNyZWF0ZVBpZWNlKGluZGV4KSB7XG4gICAgY29uc3QgbWF0cml4ID0gdGhpcy50ZXRyb21pbm9zW2luZGV4ICUgdGhpcy50ZXRyb21pbm9zLmxlbmd0aF07XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5rZXlzKFRFVFJPTUlOT19NQVApW2luZGV4ICUgdGhpcy50ZXRyb21pbm9zLmxlbmd0aF07IC8vIOODlOODvOOCueOBruOCv+OCpOODl+OCkuWPluW+l1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKCh0aGlzLmJvYXJkLmNvbHMgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDIpO1xuICAgIC8vIOODlOODvOOCueOBruWIneacn1nluqfmqJnjgpLoqr/mlbTjgZfjgIHnlLvpnaLlpJbjgYvjgonlh7rnj77jgZnjgovjgojjgYbjgavjgZnjgotcbiAgICAvLyDjg5Tjg7zjgrnjga7pq5jjgZXjga7liIbjgaDjgZHkuIrjgavjgZrjgonjgZlcbiAgICBjb25zdCB5ID0gLW1hdHJpeC5sZW5ndGg7XG4gICAgcmV0dXJuIG5ldyBQaWVjZShtYXRyaXgsIHsgeCwgeSB9LCB0eXBlKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMucGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMubGluZXMgPSAwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgLy8g6Ieq5YuV6JC95LiL6ZaT6ZqU44KS44Oq44K744OD44OIXG4gICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICB9XG4gIFxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44KS44OB44Kn44OD44Kv44GX44CB5b+F6KaB44Gr5b+c44GY44Gm44Os44OZ44Or44KS5LiK44GS44KLXG4gICAqL1xuICBjaGVja0xldmVsVXAoKSB7XG4gICAgY29uc3QgbmV3TGV2ZWwgPSBNYXRoLmZsb29yKHRoaXMubGluZXMgLyB0aGlzLmxpbmVzUGVyTGV2ZWwpICsgMTtcbiAgICBpZiAobmV3TGV2ZWwgPiB0aGlzLmxldmVsKSB7XG4gICAgICB0aGlzLmxldmVsID0gbmV3TGV2ZWw7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKipcbiAgICog44OU44O844K544KS56e75YuV44GV44Gb44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkeCAtIFjmlrnlkJHjga7np7vli5Xph49cbiAgICogQHJldHVybnMge2Jvb2xlYW59IOenu+WLleOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgbW92ZVBpZWNlKGR4KSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5waWVjZS5tb3ZlKGR4LCAwKTtcbiAgICBcbiAgICAvLyDooZ3nqoHjgZfjgZ/jgonlhYPjgavmiLvjgZlcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKC1keCwgMCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICAvKipcbiAgICog6KGd56qB5Yik5a6a44KS6KGM44GGXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDooZ3nqoHjgZfjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICovXG4gIGhhc0NvbGxpc2lvbigpIHtcbiAgICBpZiAoIXRoaXMucGllY2UgfHwgIXRoaXMucGllY2UubWF0cml4IHx8ICF0aGlzLnBpZWNlLnBvcykge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHBpZWNlIGRhdGEgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIFxuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXRyaXgpIHx8IHR5cGVvZiBwb3MueCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHBvcy55ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIG1hdHJpeCBvciBwb3NpdGlvbiBkYXRhJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IG1hdHJpeFt5XTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3cgYXQgaW5kZXggJHt5fTpgLCByb3cpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3cubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKHJvd1t4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g44Oc44O844OJ44Gu5aSW5YG044GL44CB44GZ44Gn44Gr44OW44Ot44OD44Kv44GM44GC44KL5aC05ZCI44Gv6KGd56qBXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYm9hcmRYIDwgMCB8fFxuICAgICAgICAgICAgYm9hcmRYID49IHRoaXMuYm9hcmQuY29scyB8fFxuICAgICAgICAgICAgYm9hcmRZID49IHRoaXMuYm9hcmQucm93cyB8fFxuICAgICAgICAgICAgKGJvYXJkWSA+PSAwICYmIFxuICAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldICYmIFxuICAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gIT09IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIFxuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS55Sf5oiQ44GZ44KLXG4gICAqL1xuICBzcGF3blBpZWNlKCkge1xuICAgIHRoaXMucGllY2UgPSB0aGlzLm5leHRQaWVjZSB8fCB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIFxuICAgIC8vIOaWsOOBl+OBhOODlOODvOOCueOBjOacgOWIneOBi+OCieihneeqgeOBl+OBpuOBhOOBn+OCieOCsuODvOODoOOCquODvOODkOODvFxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkjHjg57jgrnkuIvjgavnp7vli5XjgZXjgZvjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOenu+WLleOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgZHJvcFBpZWNlKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMucGllY2UubW92ZSgwLCAxKTtcbiAgICBcbiAgICAvLyDooZ3nqoHjgZfjgZ/jgonlhYPjga7kvY3nva7jgavmiLvjgZfjgablm7rlrppcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKDAsIC0xKTtcbiAgICAgIHRoaXMubWVyZ2VQaWVjZSgpO1xuICAgICAgXG4gICAgICAvLyDjg5zjg7zjg4njga5jbGVhckxpbmVz44Oh44K944OD44OJ44KS5L2/55SoXG4gICAgICBjb25zdCBsaW5lc0NsZWFyZWQgPSB0aGlzLmJvYXJkLmNsZWFyTGluZXMoKTtcbiAgICAgIGlmIChsaW5lc0NsZWFyZWQgPiAwKSB7XG4gICAgICAgIHRoaXMubGluZXMgKz0gbGluZXNDbGVhcmVkO1xuICAgICAgICB0aGlzLnNjb3JlICs9IHRoaXMuY2FsY3VsYXRlU2NvcmUobGluZXNDbGVhcmVkKTtcbiAgICAgICAgdGhpcy5jaGVja0xldmVsVXAoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5zcGF3blBpZWNlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICAvKipcbiAgICog54++5Zyo44Gu44OU44O844K544KS44Oc44O844OJ44Gr5Zu65a6a44GZ44KLXG4gICAqL1xuICBtZXJnZVBpZWNlKCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuO1xuICAgIFxuICAgIGNvbnN0IHsgbWF0cml4LCBwb3MgfSA9IHRoaXMucGllY2U7XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChtYXRyaXhbeV1beF0gIT09IDApIHtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgY29uc3QgYm9hcmRYID0gcG9zLnggKyB4O1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChib2FyZFkgPj0gMCAmJiBib2FyZFkgPCB0aGlzLmJvYXJkLnJvd3MgJiYgYm9hcmRYID49IDAgJiYgYm9hcmRYIDwgdGhpcy5ib2FyZC5jb2xzKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkLmdyaWRbYm9hcmRZXVtib2FyZFhdID0gbWF0cml4W3ldW3hdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDoqIjnrpfjgZXjgozjgZ/jgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIGlmICh0eXBlb2YgbGluZXNDbGVhcmVkICE9PSAnbnVtYmVyJyB8fCBsaW5lc0NsZWFyZWQgPCAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGluZXNDbGVhcmVkIHZhbHVlOicsIGxpbmVzQ2xlYXJlZCk7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiB0aGlzLmxldmVsICE9PSAnbnVtYmVyJyB8fCB0aGlzLmxldmVsIDwgMSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGxldmVsIHZhbHVlOicsIHRoaXMubGV2ZWwpO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHBvaW50cyA9IFswLCA0MCwgMTAwLCAzMDAsIDEyMDBdOyAvLyAwLTTjg6njgqTjg7PmtojjgZfjgZ/jgajjgY3jga7ln7rnpI7lvpfngrlcbiAgICBjb25zdCBpbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIE1hdGguZmxvb3IobGluZXNDbGVhcmVkKSksIHBvaW50cy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gcG9pbnRzW2luZGV4XSAqIHRoaXMubGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICovXG4gIHVwZGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICB9XG4gIFxuICAvKipcbiAgICog44OU44O844K544KS5Zue6Lui44GV44Gb44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXIgLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOWbnui7ouOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgcm90YXRlUGllY2UoZGlyKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlIHx8ICF0aGlzLnBpZWNlLm1hdHJpeCB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLnBpZWNlLm1hdHJpeCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBwaWVjZSBmb3Igcm90YXRpb24nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgb3JpZ2luYWxQb3MgPSB7IC4uLnRoaXMucGllY2UucG9zIH07XG4gICAgICBjb25zdCBvcmlnaW5hbE1hdHJpeCA9IHRoaXMucGllY2UubWF0cml4Lm1hcChyb3cgPT4gXG4gICAgICAgIEFycmF5LmlzQXJyYXkocm93KSA/IFsuLi5yb3ddIDogW11cbiAgICAgICk7XG4gICAgICBjb25zdCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUgPSB0aGlzLnBpZWNlLnJvdGF0aW9uU3RhdGU7XG4gICAgICBcbiAgICAgIC8vIOePvuWcqOOBruWbnui7oueKtuaFi+OCkuaknOiovFxuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFJvdGF0aW9uU3RhdGUgIT09ICdudW1iZXInIHx8IG9yaWdpbmFsUm90YXRpb25TdGF0ZSA8IDAgfHwgb3JpZ2luYWxSb3RhdGlvblN0YXRlID4gMykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwi54Sh5Yq544Gq5Zue6Lui54q25oWLOlwiLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUpO1xuICAgICAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgICAgICB0aGlzLnBpZWNlLnJvdGF0aW9uU3RhdGUgPSBvcmlnaW5hbFJvdGF0aW9uU3RhdGU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8g44OU44O844K544KS5Zue6Lui77yI5Zue6Lui54q25oWL44Gu5pu05paw44GvUGllY2Uucm90YXRl5YaF44Gn6KGM44GG77yJXG4gICAgICB0aGlzLnBpZWNlLnJvdGF0ZShkaXIpO1xuXG4gICAgICAvLyBTUlMgKFN1cGVyIFJvdGF0aW9uIFN5c3RlbSkg44Gu5aOB6Lm044KK44OH44O844K/XG4gICAgICAvLyBJLeODhuODiOODreODn+ODjuOBqOOBneOCjOS7peWkluOBruODhuODiOODreODn+ODjuOBp+eVsOOBquOCi1xuICAgICAgY29uc3Qga2lja0RhdGEgPSB0aGlzLnBpZWNlLnR5cGUgPT09ICdJJyA/IFNSU19LSUNLU19JIDogU1JTX0tJQ0tTX0pMVFNaO1xuICAgICAgXG4gICAgICAvLyDnj77lnKjjga7lm57ou6LnirbmhYvjgavln7rjgaXjgYTjgabjgq3jg4Pjgq/jg4fjg7zjgr/jgpLlj5blvpdcbiAgICAgIGNvbnN0IGtpY2tzID0ga2lja0RhdGFbb3JpZ2luYWxSb3RhdGlvblN0YXRlICUgNF07IC8vIDAtM+OBruevhOWbsuOBq+WPjuOCgeOCi1xuICAgICAgXG4gICAgICBpZiAoIWtpY2tzIHx8ICFBcnJheS5pc0FycmF5KGtpY2tzKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBraWNrcyBkYXRhOlwiLCBraWNrcywgXCJmb3Igcm90YXRpb24gc3RhdGU6XCIsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSk7XG4gICAgICAgIC8vIOOCreODg+OCr+ODh+ODvOOCv+OBjOWPluW+l+OBp+OBjeOBquOBhOWgtOWQiOOBr+WFg+OBq+aIu+OBmVxuICAgICAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgICAgICB0aGlzLnBpZWNlLnJvdGF0aW9uU3RhdGUgPSBvcmlnaW5hbFJvdGF0aW9uU3RhdGU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8g5Y+N5pmC6KiI5Zue44KK44Gu5aC05ZCI44Gv44Kt44OD44Kv44OH44O844K/44KS5Y+N6LuiXG4gICAgICBjb25zdCB0ZXN0U2V0ID0gZGlyID09PSAxIFxuICAgICAgICA/IFsuLi5raWNrc10gLy8g6YWN5YiX44Gu44Kz44OU44O844KS5L2c5oiQXG4gICAgICAgIDoga2lja3MubWFwKGtpY2sgPT4ge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2spIHx8IGtpY2subGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGtpY2sgZGF0YSBmb3JtYXQ6XCIsIGtpY2spO1xuICAgICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFsta2lja1swXSwgLWtpY2tbMV1dO1xuICAgICAgICAgIH0pO1xuXG4gICAgICBmb3IgKGNvbnN0IFtvZmZzZXRYLCBvZmZzZXRZXSBvZiB0ZXN0U2V0KSB7XG4gICAgICAgIHRoaXMucGllY2UucG9zLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgdGhpcy5waWVjZS5wb3MueSArPSBvZmZzZXRZO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgICAgIC8vIOihneeqgeOBjOOBquOBkeOCjOOBsOWbnui7ouaIkOWKn1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOihneeqgeOBmeOCi+WgtOWQiOOBr+S9jee9ruOCkuaIu+OBl+OBpuasoeOBruODhuOCueODiOOCkuippuOBmVxuICAgICAgICB0aGlzLnBpZWNlLnBvcy54IC09IG9mZnNldFg7XG4gICAgICAgIHRoaXMucGllY2UucG9zLnkgLT0gb2Zmc2V0WTtcbiAgICAgIH1cblxuICAgICAgLy8g5YWo44Gm44Gu44OG44K544OI44Gn6KGd56qB44GZ44KL5aC05ZCI44CB5YWD44Gu54q25oWL44Gr5oi744GZXG4gICAgICB0aGlzLnBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgICAgdGhpcy5waWVjZS5yb3RhdGlvblN0YXRlID0gb3JpZ2luYWxSb3RhdGlvblN0YXRlO1xuICAgICAgdGhpcy5waWVjZS5wb3MgPSB7IC4uLm9yaWdpbmFsUG9zIH07XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBwaWVjZSByb3RhdGlvbjonLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbiIsIi8vIFBpZWNl44Kv44Op44K5XG4vLyDjg4bjg4jjg63jg5/jg47jga7lvaLjg7vkvY3nva7jg7vlm57ou6LjgpLnrqHnkIZcblxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgdHlwZSA9ICdUJykge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMucG9zID0geyAuLi5wb3MgfTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLyDjg5Tjg7zjgrnjga7nqK7poZ4gKEksIEosIEwsIE8sIFMsIFQsIFopXG4gICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDsgLy8gMDogMOW6piwgMTogOTDluqYsIDI6IDE4MOW6piwgMzogMjcw5bqmXG4gIH1cblxuICBtb3ZlKGR4LCBkeSkge1xuICAgIHRoaXMucG9zLnggKz0gZHg7XG4gICAgdGhpcy5wb3MueSArPSBkeTtcbiAgfVxuXG4gIHJvdGF0ZShkaXIpIHtcbiAgICAvLyBkaXI6IDE95pmC6KiI5Zue44KKLCAtMT3lj43mmYLoqIjlm57jgopcbiAgICBpZiAoIXRoaXMubWF0cml4IHx8ICFBcnJheS5pc0FycmF5KHRoaXMubWF0cml4KSB8fCAhdGhpcy5tYXRyaXhbMF0gfHwgIUFycmF5LmlzQXJyYXkodGhpcy5tYXRyaXhbMF0pKSByZXR1cm47XG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCBNID0gdGhpcy5tYXRyaXhbMF0ubGVuZ3RoO1xuICAgIGxldCByb3RhdGVkO1xuICAgIGlmIChkaXIgPT09IDEpIHtcbiAgICAgIC8vIOaZguioiOWbnuOCijog6Lui572u44GX44Gm5ZCE6KGM44KS5Y+N6LuiXG4gICAgICByb3RhdGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTSB9LCAoXywgeCkgPT5cbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoXywgeSkgPT4gKHRoaXMubWF0cml4W04gLSB5IC0gMV0gPyB0aGlzLm1hdHJpeFtOIC0geSAtIDFdW3hdIDogMCkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlj43mmYLoqIjlm57jgoo6IOi7oue9ruOBl+OBpuWQhOWIl+OCkuWPjei7olxuICAgICAgcm90YXRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE0gfSwgKF8sIHgpID0+XG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IE4gfSwgKF8sIHkpID0+ICh0aGlzLm1hdHJpeFt5XSA/IHRoaXMubWF0cml4W3ldW00gLSB4IC0gMV0gOiAwKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubWF0cml4ID0gcm90YXRlZDtcbiAgICAvLyDlm57ou6LnirbmhYvjgpLmm7TmlrBcbiAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAodGhpcy5yb3RhdGlvblN0YXRlICsgKGRpciA9PT0gMSA/IDEgOiAzKSkgJSA0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jb3JlL0dhbWUuanMnO1xuaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmpzJztcbmltcG9ydCBHYW1lVUkgZnJvbSBcIi4vdWkvR2FtZVVJLmpzXCI7XG5cbi8vIC0tLSDjgrDjg63jg7zjg5Djg6vlpInmlbDjgajnirbmhYvnrqHnkIYgLS0tXG5leHBvcnQgbGV0IHRldHJpc0dhbWUgPSBuZXcgR2FtZSgpO1xuZXhwb3J0IGNvbnN0IGV2ZW50TWFuYWdlciA9IG5ldyBFdmVudFRhcmdldCgpO1xuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZSA9IHtcbiAgY3R4OiBudWxsLFxuICBib2FyZDogW10sXG4gIFJPV1M6IEdBTUVfQ09OU1RBTlRTLlJPV1MsXG4gIENPTFM6IEdBTUVfQ09OU1RBTlRTLkNPTFMsXG4gIHBpZWNlOiBudWxsLFxuICBuZXh0UGllY2U6IG51bGwsXG4gIHNjb3JlOiAwLFxuICBsaW5lczogMCxcbiAgbGV2ZWw6IDEsXG4gIGRyb3BDb3VudGVyOiAwLFxuICBkcm9wSW50ZXJ2YWw6IDEwMDAsXG4gIGxhc3RUaW1lOiAwLFxuICBnYW1lTG9vcElkOiBudWxsLFxuICBpc0dhbWVPdmVyOiBmYWxzZSxcbiAga2V5czoge30sXG5cbiAgaW5pdEJvYXJkKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSh0aGlzLlJPV1MpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KHRoaXMuQ09MUykuZmlsbCgwKSk7XG4gIH0sXG5cbiAgbG9nU3RhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgR2FtZSBTdGF0ZTonLCB7XG4gICAgICBzY29yZTogdGhpcy5zY29yZSxcbiAgICAgIGxpbmVzOiB0aGlzLmxpbmVzLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBpc0dhbWVPdmVyOiB0aGlzLmlzR2FtZU92ZXIsXG4gICAgICBwaWVjZTogdGhpcy5waWVjZSxcbiAgICAgIG5leHRQaWVjZTogdGhpcy5uZXh0UGllY2UsXG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIC0tLSDmj4/nlLvplqLpgKMgLS0tIFxuZnVuY3Rpb24gZHJhd01hdHJpeChjdHgsIG1hdHJpeCwgb2Zmc2V0LCBjb2xvcnMsIGJsb2NrU2l6ZSkge1xuICBpZiAoIWN0eCB8fCAhbWF0cml4IHx8ICFBcnJheS5pc0FycmF5KG1hdHJpeCkgfHwgIW9mZnNldCB8fCAhY29sb3JzIHx8ICFibG9ja1NpemUpIHtcbiAgICBjb25zb2xlLndhcm4oJ2RyYXdNYXRyaXg6IEludmFsaWQgcGFyYW1ldGVycycsIHsgXG4gICAgICBoYXNDdHg6ICEhY3R4LCBcbiAgICAgIGhhc01hdHJpeDogISFtYXRyaXgsIFxuICAgICAgaGFzT2Zmc2V0OiAhIW9mZnNldCwgXG4gICAgICBoYXNDb2xvcnM6ICEhY29sb3JzLCBcbiAgICAgIGhhc0Jsb2NrU2l6ZTogISFibG9ja1NpemUgXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICAvLyBvZmZzZXQg44Gu5pyJ5Yq55oCn44KS44OB44Kn44OD44KvXG4gIGlmICh0eXBlb2Ygb2Zmc2V0LnggIT09ICdudW1iZXInIHx8IHR5cGVvZiBvZmZzZXQueSAhPT0gJ251bWJlcicpIHtcbiAgICBjb25zb2xlLndhcm4oJ2RyYXdNYXRyaXg6IEludmFsaWQgb2Zmc2V0IHZhbHVlcycsIG9mZnNldCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHJldHVybjtcbiAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGNvbG9yc+mFjeWIl+OBruWig+eVjOODgeOCp+ODg+OCr1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAoY29sb3JzW3ZhbHVlXSAmJiB0eXBlb2YgY29sb3JzW3ZhbHVlXSA9PT0gJ3N0cmluZycpID8gY29sb3JzW3ZhbHVlXSA6ICcjMDAwJztcbiAgICAgICAgICBjdHguZmlsbFJlY3QoKHggKyBvZmZzZXQueCkgKiBibG9ja1NpemUsICh5ICsgb2Zmc2V0LnkpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHJhd2luZyBibG9jayBhdCcsIHgsIHksICc6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkcmF3KCkge1xuICB0cnkge1xuICAgIGlmICghZ2FtZVN0YXRlLmN0eCB8fCAhZ2FtZVN0YXRlLmN0eC5jYW52YXMpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBjYW52YXMgY29udGV4dCBpbiBkcmF3IGZ1bmN0aW9uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHsgY3R4LCBwaWVjZSwgbmV4dFBpZWNlIH0gPSBnYW1lU3RhdGU7XG4gICAgY29uc3QgeyBDT0xPUlMsIEJMT0NLX1NJWkUgfSA9IEdBTUVfQ09OU1RBTlRTO1xuXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu44Kv44Oq44Ki44Go6IOM5pmv5o+P55S7XG4gICAgdHJ5IHtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZjBmMGYwJztcbiAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNsZWFyaW5nL2ZpbGxpbmcgY2FudmFzOicsIGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDjg6HjgqTjg7Pjg5zjg7zjg4njga7mj4/nlLtcbiAgICBpZiAodGV0cmlzR2FtZSAmJiB0ZXRyaXNHYW1lLmJvYXJkICYmIHRldHJpc0dhbWUuYm9hcmQuZ3JpZCkge1xuICAgICAgZHJhd01hdHJpeChjdHgsIHRldHJpc0dhbWUuYm9hcmQuZ3JpZCwgeyB4OiAwLCB5OiAwIH0sIENPTE9SUywgQkxPQ0tfU0laRSk7XG4gICAgfVxuICAgIFxuICAgIC8vIOePvuWcqOOBruODlOODvOOCueOBruaPj+eUu1xuICAgIGlmIChwaWVjZSAmJiBwaWVjZS5tYXRyaXggJiYgcGllY2UucG9zKSB7XG4gICAgICBkcmF3TWF0cml4KGN0eCwgcGllY2UubWF0cml4LCBwaWVjZS5wb3MsIENPTE9SUywgQkxPQ0tfU0laRSk7XG4gICAgfVxuXG4gICAgLy8g5qyh44Gu44OU44O844K544Gu5o+P55S7XG4gICAgY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGllY2UtY2FudmFzJyk7XG4gICAgaWYgKG5leHRQaWVjZUNhbnZhcyAmJiBuZXh0UGllY2UgJiYgbmV4dFBpZWNlLm1hdHJpeCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbmV4dEN0eCA9IG5leHRQaWVjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBpZiAoIW5leHRDdHgpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBnZXQgMkQgY29udGV4dCBmb3IgbmV4dCBwaWVjZSBjYW52YXMnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG5leHRDdHguY2xlYXJSZWN0KDAsIDAsIG5leHRDdHguY2FudmFzLndpZHRoLCBuZXh0Q3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCB7IG1hdHJpeCB9ID0gbmV4dFBpZWNlO1xuICAgICAgICBcbiAgICAgICAgLy8g44Oe44OI44Oq44Kv44K544GM5pyJ5Yq544GL44OB44Kn44OD44KvXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdHJpeCkgJiYgbWF0cml4Lmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheShtYXRyaXhbMF0pKSB7XG4gICAgICAgICAgY29uc3QgeCA9IChuZXh0Q3R4LmNhbnZhcy53aWR0aCAvIEJMT0NLX1NJWkUgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDI7XG4gICAgICAgICAgY29uc3QgeSA9IChuZXh0Q3R4LmNhbnZhcy5oZWlnaHQgLyBCTE9DS19TSVpFIC0gbWF0cml4Lmxlbmd0aCkgLyAyO1xuICAgICAgICAgIGRyYXdNYXRyaXgobmV4dEN0eCwgbWF0cml4LCB7IHgsIHkgfSwgQ09MT1JTLCBCTE9DS19TSVpFKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHJhd2luZyBuZXh0IHBpZWNlOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBpbiBkcmF3IGZ1bmN0aW9uOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0gVUnmm7TmlrAgLS0tIFxuZnVuY3Rpb24gdXBkYXRlVUkoKSB7XG4gIHVwZGF0ZVNjb3JlRGlzcGxheShnYW1lU3RhdGUuc2NvcmUpO1xuICB1cGRhdGVMaW5lc0Rpc3BsYXkoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgdXBkYXRlTGV2ZWxEaXNwbGF5KGdhbWVTdGF0ZS5sZXZlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTY29yZURpc3BsYXkoc2NvcmUpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHNjb3JlICE9PSAnbnVtYmVyJyB8fCBpc05hTihzY29yZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBzY29yZSB2YWx1ZTonLCBzY29yZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICAgIGlmIChzY29yZUVsZW1lbnQpIHtcbiAgICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9IHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignU2NvcmUgZGlzcGxheSBlbGVtZW50IG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzY29yZSBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGluZXNEaXNwbGF5KGxpbmVzKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lcyAhPT0gJ251bWJlcicgfHwgaXNOYU4obGluZXMpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGluZXMgdmFsdWU6JywgbGluZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXMnKTtcbiAgICBpZiAobGluZXNFbGVtZW50KSB7XG4gICAgICBsaW5lc0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lcy50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xpbmVzIGRpc3BsYXkgZWxlbWVudCBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgbGluZXMgZGlzcGxheTonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxldmVsRGlzcGxheShsZXZlbCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgIT09ICdudW1iZXInIHx8IGlzTmFOKGxldmVsKSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGxldmVsIHZhbHVlOicsIGxldmVsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbGV2ZWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xldmVsJyk7XG4gICAgaWYgKGxldmVsRWxlbWVudCkge1xuICAgICAgbGV2ZWxFbGVtZW50LnRleHRDb250ZW50ID0gbGV2ZWwudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdMZXZlbCBkaXNwbGF5IGVsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGxldmVsIGRpc3BsYXk6JywgZXJyb3IpO1xuICB9XG59XG5cbi8vIC0tLSDjgrLjg7zjg6Djg63jgrjjg4Pjgq8gLS0tIFxuZnVuY3Rpb24gdXBkYXRlR2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGUuc2NvcmUgPSB0ZXRyaXNHYW1lLnNjb3JlO1xuICBnYW1lU3RhdGUubGluZXMgPSB0ZXRyaXNHYW1lLmxpbmVzO1xuICBnYW1lU3RhdGUubGV2ZWwgPSB0ZXRyaXNHYW1lLmxldmVsO1xuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IHRldHJpc0dhbWUuaXNHYW1lT3ZlcjtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gdGV0cmlzR2FtZS5waWVjZTtcbiAgZ2FtZVN0YXRlLm5leHRQaWVjZSA9IHRldHJpc0dhbWUubmV4dFBpZWNlO1xuICBnYW1lU3RhdGUuYm9hcmQgPSB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICB0cnkge1xuICAgIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lIHx8IHR5cGVvZiB0ZXRyaXNHYW1lLmRyb3BQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIGRyb3BQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZHJvcHBlZCA9IHRldHJpc0dhbWUuZHJvcFBpZWNlKCk7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gICAgXG4gICAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgICBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgICAgaWYgKGdhbWVTdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgICAgICAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZHJvcHBlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJEcm9wOicsIGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIHRyeSB7XG4gICAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyIHx8IGdhbWVTdGF0ZS5wYXVzZWQpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUubW92ZVBpZWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRldHJpc0dhbWUgb2JqZWN0IG9yIG1pc3NpbmcgbW92ZVBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBpZiAodHlwZW9mIGRpciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBkaXJlY3Rpb24gZm9yIHBsYXllck1vdmU6JywgZGlyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGV0cmlzR2FtZS5tb3ZlUGllY2UoZGlyKTtcbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJNb3ZlOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyUm90YXRlKGRpcikge1xuICB0cnkge1xuICAgIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlciB8fCBnYW1lU3RhdGUucGF1c2VkKSByZXR1cm47XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lIHx8IHR5cGVvZiB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRldHJpc0dhbWUgb2JqZWN0IG9yIG1pc3Npbmcgcm90YXRlUGllY2UgbWV0aG9kJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmICghdGV0cmlzR2FtZS5waWVjZSkgcmV0dXJuO1xuICAgIFxuICAgIGlmICh0eXBlb2YgZGlyICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGRpcmVjdGlvbiBmb3IgcGxheWVyUm90YXRlOicsIGRpcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRldHJpc0dhbWUucm90YXRlUGllY2UoZGlyKTtcbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJSb3RhdGU6JywgZXJyb3IpO1xuICB9XG59XG5cbi8vIC0tLSDjgrLjg7zjg6Djg6vjg7zjg5cgLS0tXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlKHRpbWUgPSAwKSB7XG4gIHRyeSB7XG4gICAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICBcbiAgICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIgfHwgZ2FtZVN0YXRlLnBhdXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOWIneacn+WMluaZguOBr2xhc3RUaW1l44KS6Kit5a6aXG4gICAgaWYgKCFnYW1lU3RhdGUubGFzdFRpbWUpIHtcbiAgICAgIGdhbWVTdGF0ZS5sYXN0VGltZSA9IHRpbWU7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGFUaW1lID0gdGltZSAtIGdhbWVTdGF0ZS5sYXN0VGltZTtcbiAgICBnYW1lU3RhdGUubGFzdFRpbWUgPSB0aW1lO1xuICAgIFxuICAgIC8vIOeVsOW4uOOBquODh+ODq+OCv+OCv+OCpOODoOOCkuOCueOCreODg+ODl++8iOODleODrOODvOODoOioiOeul+OBruWuieWumuaAp+WQkeS4iu+8iVxuICAgIGlmIChkZWx0YVRpbWUgPiAxMDAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xhcmdlIGRlbHRhIHRpbWUgZGV0ZWN0ZWQsIHNraXBwaW5nIGZyYW1lOicsIGRlbHRhVGltZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIOODieODreODg+ODl+WHpueQhlxuICAgIGlmICh0eXBlb2YgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGV0cmlzR2FtZS5kcm9wSW50ZXJ2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgKz0gZGVsdGFUaW1lO1xuICAgICAgaWYgKGdhbWVTdGF0ZS5kcm9wQ291bnRlciA+IHRldHJpc0dhbWUuZHJvcEludGVydmFsKSB7XG4gICAgICAgIHBsYXllckRyb3AoKTtcbiAgICAgICAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgICAgICAgLy8g5Y2z5bqn44Gr5o+P55S744KS5pu05pawXG4gICAgICAgIGRyYXcoKTtcbiAgICAgICAgdXBkYXRlVUkoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVsdGFUaW1lIDwgMTAwKSB7IC8vIDYwRlBT44Gn5o+P55S744GZ44KL5aC05ZCI44CBMTYuNjdtc+OBlOOBqOOBq+aPj+eUu1xuICAgICAgICAvLyDjgrnjg6Djg7zjgrrjgarjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7jgZ/jgoHjgIHjg4njg63jg4Pjg5fplpPjgoLmj4/nlLvjgpLmm7TmlrBcbiAgICAgICAgZHJhdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZHJvcENvdW50ZXIgb3IgZHJvcEludGVydmFsIHZhbHVlcycpO1xuICAgICAgLy8g54Sh5Yq544Gq54q25oWL44Gu5aC05ZCI44Gv5o+P55S744Gu44G/5a6f6KGMXG4gICAgICBkcmF3KCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dhbWUgbG9vcCBlcnJvcjonLCBlcnJvcik7XG4gICAgLy8g44Ky44O844Og44KS5LiA5pmC5YGc5q2i44GX44Gm44Ko44Op44O844KS5aCx5ZGKXG4gICAgZ2FtZVN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgY29uc29sZS53YXJuKCdHYW1lIHBhdXNlZCBkdWUgdG8gZXJyb3IuIFByZXNzIFIgdG8gcmVzZXQgdGhlIGdhbWUuJyk7XG4gICAgXG4gICAgLy8g44Ko44Op44O855m655Sf5pmC44Gn44KC5o+P55S744Gv6Kmm6KGM44GZ44KLXG4gICAgdHJ5IHtcbiAgICAgIGRyYXcoKTtcbiAgICB9IGNhdGNoIChkcmF3RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RyYXcgZXJyb3IgZHVyaW5nIGVycm9yIHJlY292ZXJ5OicsIGRyYXdFcnJvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLSDliJ3mnJ/ljJbjgajjgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6rjg7PjgrAgLS0tXG5leHBvcnQgY29uc3QgZ2FtZVVJID0gbmV3IEdhbWVVSShnYW1lU3RhdGUsIHtcbiAgbW92ZVBpZWNlOiBwbGF5ZXJNb3ZlLFxuICBkcm9wUGllY2U6IHBsYXllckRyb3AsXG4gIHJvdGF0ZVBpZWNlOiBwbGF5ZXJSb3RhdGUsXG4gIHJlc2V0R2FtZSxcbiAgdXBkYXRlLFxuICBnZXREcm9wSW50ZXJ2YWw6ICgpID0+IHRldHJpc0dhbWUuZ2V0RHJvcEludGVydmFsKCksXG4gIHN0YXJ0U29mdERyb3A6ICgpID0+IHRldHJpc0dhbWUuc3RhcnRTb2Z0RHJvcCgpLFxuICBzdG9wU29mdERyb3A6ICgpID0+IHRldHJpc0dhbWUuc3RvcFNvZnREcm9wKCksXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgLy8g44Ky44O844Og54q25oWL44Gu44Oq44K744OD44OIXG4gIGdhbWVTdGF0ZS5zY29yZSA9IDA7XG4gIGdhbWVTdGF0ZS5saW5lcyA9IDA7XG4gIGdhbWVTdGF0ZS5sZXZlbCA9IDE7XG4gIGdhbWVTdGF0ZS5pc0dhbWVPdmVyID0gZmFsc2U7XG4gIGdhbWVTdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgZ2FtZVN0YXRlLmRyb3BJbnRlcnZhbCA9IDEwMDA7XG4gIFxuICAvLyDjg5zjg7zjg4njga7liJ3mnJ/ljJZcbiAgZ2FtZVN0YXRlLmluaXRCb2FyZCgpO1xuICBcbiAgLy8g44Ky44O844Og44Gu44Oq44K744OD44OIXG4gIHRldHJpc0dhbWUucmVzZXQoKTtcbiAgXG4gIC8vIOOCsuODvOODoOODq+ODvOODl+OBruODquOCu+ODg+ODiFxuICBpZiAoZ2FtZVN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gIH1cbiAgXG4gIC8vIOOCsuODvOODoOeKtuaFi+OBruabtOaWsOOBqOaPj+eUu1xuICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgdXBkYXRlVUkoKTtcbiAgZHJhdygpO1xuICBcbiAgLy8g44Ky44O844Og44Or44O844OX44KS5YaN6ZaLXG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IDA7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gIFxuICBjb25zb2xlLmxvZygn44Ky44O844Og44GM44Oq44K744OD44OI44GV44KM44G+44GX44Gf44CCJyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzKGdhbWVVSS5vbktleURvd24uYmluZChnYW1lVUkpLCBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSkpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgICAgIGRyYXcoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyDjg4bjgrnjg4jnlKjjga5zZXR1cEV2ZW50TGlzdGVuZXJz6Zai5pWw44KS44Ko44Kv44K544Od44O844OIXG5leHBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmICghY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWN0eCkge1xuICAgICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djgrnjg4bjg7zjg4jjga7liJ3mnJ/ljJZcbiAgICBnYW1lU3RhdGUuY3R4ID0gY3R4O1xuICAgIGdhbWVTdGF0ZS5jYW52YXMgPSBjYW52YXM7XG4gICAgXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K66Kit5a6aXG4gICAgY29uc3QgYmxvY2tTaXplID0gR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIGJsb2NrU2l6ZTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBibG9ja1NpemU7XG4gICAgXG4gICAgLy8g44Oc44O844OJ44Gu5Yid5pyf5YyWXG4gICAgZ2FtZVN0YXRlLmluaXRCb2FyZCgpO1xuICAgIFxuICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOBruioreWumlxuICAgIGNvbnNvbGUubG9nKCfjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZkuLi4nKTtcbiAgICBnYW1lVUkuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOOBruODquOCu+ODg+ODiFxuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZkuLi4nKTtcbiAgICByZXNldEdhbWUoKTtcbiAgICBcbiAgICAvLyDliJ3mnJ/mj4/nlLtcbiAgICBjb25zb2xlLmxvZygn5Yid5pyf5o+P55S744KS5a6f6KGM44GX44G+44GZLi4uJyk7XG4gICAgZHJhdygpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOODq+ODvOODl+OCkumWi+Wni1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djg6vjg7zjg5fjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICBnYW1lU3RhdGUubGFzdFRpbWUgPSAwO1xuICAgIGdhbWVTdGF0ZS5kcm9wQ291bnRlciA9IDA7XG4gICAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XG4gICAgXG4gICAgLy8g44OG44K544OI55So44Gu6L+U44KK5YCkXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIGV2ZW50TWFuYWdlcixcbiAgICAgIGdhbWVTdGF0ZSxcbiAgICAgIGhhbmRsZUtleURvd24sXG4gICAgICBoYW5kbGVLZXlVcCxcbiAgICAgIGluaXRHYW1lOiBpbml0LFxuICAgICAgcmVzZXRHYW1lLFxuICAgICAgc2V0dXBFdmVudExpc3RlbmVyczogZ2FtZVVJLnNldHVwRXZlbnRMaXN0ZW5lcnMuYmluZChnYW1lVUkpLFxuICAgICAgdXBkYXRlLFxuICAgICAgZHJhd1xuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBpbml0R2FtZemWouaVsOOBr2luaXTjga7jgqjjgqTjg6rjgqLjgrnvvIjjg4bjgrnjg4jkupLmj5vmgKfjga7jgZ/jgoHvvIlcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgZ2FtZVN0YXRlLmN0eCA9IGN0eDtcbiAgZ2FtZVN0YXRlLmNhbnZhcyA9IGNhbnZhcztcbiAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLy8gLS0tIOOCqOOCr+OCueODneODvOODiOOBqOODluODqeOCpuOCtuWun+ihjCAtLS1cbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlEb3duID0gZ2FtZVVJLm9uS2V5RG93bi5iaW5kKGdhbWVVSSk7XG5leHBvcnQgY29uc3QgaGFuZGxlS2V5VXAgPSBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSk7XG5leHBvcnQgeyBkcmF3IH07IC8vIGRyYXfplqLmlbDjgpLjgqjjgq/jgrnjg53jg7zjg4hcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRldHJpc0dhbWUobmV3R2FtZSkge1xuICB0ZXRyaXNHYW1lID0gbmV3R2FtZTtcbn1cblxuY29uc3QgZXhwb3J0cyA9IHsgaW5pdCwgaW5pdEdhbWUsIHBsYXllck1vdmUsIHBsYXllclJvdGF0ZSwgcGxheWVyRHJvcCwgZ2FtZVVJLCBnYW1lU3RhdGUsIHJlc2V0R2FtZSwgdXBkYXRlLCBoYW5kbGVLZXlEb3duLCBoYW5kbGVLZXlVcCwgc2V0dXBFdmVudExpc3RlbmVycywgZHJhdywgdGV0cmlzR2FtZSB9O1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIHtcbiAgY29uc3RydWN0b3Ioc3RhdGUsIGFjdGlvbnMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSB0aGlzO1xuICAgIGlmIChzdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgXG4gICAgLy8g5LiL44Kt44O85Lul5aSW44Gv44Kt44O844Oq44OU44O844OI44KS54Sh6KaWXG4gICAgaWYgKGV2ZW50LnJlcGVhdCAmJiBldmVudC5rZXkgIT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g44Kt44O844GM44GZ44Gn44Gr5oq844GV44KM44Gm44GE44KL5aC05ZCI44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKHN0YXRlLmtleXNbZXZlbnQua2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSB0cnVlO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGFjdGlvbnMubW92ZVBpZWNlKC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgYWN0aW9ucy5zdGFydFNvZnREcm9wKCk7XG4gICAgICAgIGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGFjdGlvbnMucm90YXRlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIOODj+ODvOODieODieODreODg+ODlzog44OU44O844K544GM552A5Zyw44GZ44KL44G+44Gn6YCj57aa44Gn6JC944Go44GZXG4gICAgICAgIGlmIChzdGF0ZS5waWVjZSAmJiBzdGF0ZS5waWVjZS5wb3MgJiYgdHlwZW9mIHN0YXRlLnBpZWNlLnBvcy55ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGxldCBkcm9wQ291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IG1heERyb3BzID0gTWF0aC5taW4oc3RhdGUuUk9XUyB8fCAyMCwgMTAwKTsgLy8g44KI44KK5a6J5YWo44Gq5LiK6ZmQ6Kit5a6aXG4gICAgICAgICAgd2hpbGUgKGRyb3BDb3VudCA8IG1heERyb3BzICYmICFzdGF0ZS5pc0dhbWVPdmVyICYmIHN0YXRlLnBpZWNlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50WSA9IHN0YXRlLnBpZWNlLnBvcy55O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZCA9IGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgICAgICAgIGlmICghZHJvcHBlZCB8fCAhc3RhdGUucGllY2UgfHwgc3RhdGUucGllY2UucG9zLnkgPT09IGN1cnJlbnRZKSB7XG4gICAgICAgICAgICAgICAgLy8g44OU44O844K544GM6JC944Gh44Gq44GL44Gj44Gf44CB44G+44Gf44Gv5L2N572u44GM5aSJ44KP44KJ44Gq44GL44Gj44Gf5aC05ZCI44Gv57WC5LqGXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZHJvcENvdW50Kys7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgaGFyZCBkcm9wOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICBjYXNlICdSJzpcbiAgICAgICAgYWN0aW9ucy5yZXNldEdhbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChldmVudCkge1xuICAgIHRoaXMuc3RhdGUua2V5c1tldmVudC5rZXldID0gZmFsc2U7XG4gICAgLy8g5LiL44Kt44O844GM6Zui44GV44KM44Gf44KJ44OJ44Ot44OD44OX6ZaT6ZqU44KS5YWD44Gr5oi744GZXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5zdG9wU29mdERyb3AoKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKGtleURvd25IYW5kbGVyID0gdGhpcy5vbktleURvd24sIGtleVVwSGFuZGxlciA9IHRoaXMub25LZXlVcCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcbiAqIOODhuODiOODquOCueOCsuODvOODoOOBruOCqOODs+ODiOODquODvOODneOCpOODs+ODiFxuICovXG5cbi8vIOOCueOCv+OCpOODq+OCt+ODvOODiOOCkuOCpOODs+ODneODvOODiFxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4vLyDjgrLjg7zjg6Djg6Ljgrjjg6Xjg7zjg6vjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2dhbWUuanMnO1xuXG4vLyDjg4fjg5Djg4PjgrDnlKjjga7jgrnjgr/jgqTjg6vjgpLov73liqBcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAjZ2FtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB9XG5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbi8vIOODieOCreODpeODoeODs+ODiOOBruiqreOBv+i+vOOBv+WujOS6huOCkuW+heOBo+OBpuOCsuODvOODoOOCkuWIneacn+WMllxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ0RPTUNvbnRlbnRMb2FkZWQg44Kk44OZ44Oz44OI44GM55m654Gr44GX44G+44GX44GfJyk7XG4gIFxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7nirbmhYvjgpLnorroqo1cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfjgq3jg6Pjg7Pjg5Djgrnjga7jgrXjgqTjgro6JywgY2FudmFzLndpZHRoLCAneCcsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCueOCv+OCpOODq+OCteOCpOOCujonLCBjYW52YXMuc3R5bGUud2lkdGgsICd4JywgY2FudmFzLnN0eWxlLmhlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ+OCreODo+ODs+ODkOOCueimgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgIH1cbiAgICAvLyDjgrLjg7zjg6DjgpLplovlp4tcbiAgICBpbml0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICBhbGVydCgn44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44Gf44CC44Kz44Oz44K944O844Or44KS56K66KqN44GX44Gm44GP44Gg44GV44GE44CCJyk7XG4gIH1cbn0pO1xuXG4vLyDplovnmbrnlKg6IOOCsOODreODvOODkOODq+WQjeWJjeepuumWk+OBq+OCqOOCr+OCueODneODvOODiFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIHdpbmRvdy50ZXRyaXMgPSB3aW5kb3cudGV0cmlzIHx8IHt9O1xuICB3aW5kb3cudGV0cmlzLmluaXQgPSBpbml0O1xufVxuIl0sIm5hbWVzIjpbIkdBTUVfQ09OU1RBTlRTIiwiQ09MUyIsIlJPV1MiLCJCTE9DS19TSVpFIiwiU0NPUkVfVEFCTEUiLCJTSEFQRVMiLCJDT0xPUlMiLCJHQU1FX1NUQVRFUyIsIklOSVQiLCJQTEFZSU5HIiwiUEFVU0VEIiwiR0FNRV9PVkVSIiwiQm9hcmQiLCJjb2xzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicm93cyIsIl9jbGFzc0NhbGxDaGVjayIsImNsZWFyIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsImdyaWQiLCJBcnJheSIsImZyb20iLCJmaWxsIiwiaXNJbnNpZGUiLCJ4IiwieSIsImlzRW1wdHkiLCJzZXRDZWxsIiwiZ2V0Q2VsbCIsIm1lcmdlIiwicGllY2UiLCJtYXRyaXgiLCJwb3MiLCJjbGVhckxpbmVzIiwiaXNBcnJheSIsImNvbnNvbGUiLCJlcnJvciIsImNsZWFyZWQiLCJuZXdHcmlkIiwicm93Iiwid2FybiIsImNvbmNhdCIsImV2ZXJ5IiwiY2VsbCIsInB1c2giLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ1bnNoaWZ0IiwiUGllY2UiLCJURVRST01JTk9fTUFQIiwiSSIsIkoiLCJMIiwiTyIsIlMiLCJUIiwiWiIsIlNSU19LSUNLU19KTFRTWiIsIlNSU19LSUNLU19JIiwiR2FtZSIsInRldHJvbWlub3MiLCJib2FyZCIsIm5leHRQaWVjZSIsImxldmVsU3BlZWRzIiwibGluZXNQZXJMZXZlbCIsImRyb3BJbnRlcnZhbCIsImdldERyb3BJbnRlcnZhbCIsImlzU29mdERyb3AiLCJyZXNldCIsImxldmVsSW5kZXgiLCJNYXRoIiwibWluIiwibGV2ZWwiLCJzdGFydFNvZnREcm9wIiwic3RvcFNvZnREcm9wIiwiY3JlYXRlUGllY2UiLCJpbmRleCIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZmxvb3IiLCJyYW5kb20iLCJsaW5lcyIsInNjb3JlIiwiaXNHYW1lT3ZlciIsInBhdXNlZCIsImNoZWNrTGV2ZWxVcCIsIm5ld0xldmVsIiwibW92ZVBpZWNlIiwiZHgiLCJtb3ZlIiwiaGFzQ29sbGlzaW9uIiwiX3RoaXMkcGllY2UiLCJib2FyZFgiLCJib2FyZFkiLCJzcGF3blBpZWNlIiwiZHJvcFBpZWNlIiwibWVyZ2VQaWVjZSIsImxpbmVzQ2xlYXJlZCIsImNhbGN1bGF0ZVNjb3JlIiwiX3RoaXMkcGllY2UyIiwicG9pbnRzIiwibWF4IiwidXBkYXRlU2NvcmUiLCJyb3RhdGVQaWVjZSIsImRpciIsIm9yaWdpbmFsUG9zIiwiX29iamVjdFNwcmVhZCIsIm9yaWdpbmFsTWF0cml4IiwibWFwIiwib3JpZ2luYWxSb3RhdGlvblN0YXRlIiwicm90YXRpb25TdGF0ZSIsInJvdGF0ZSIsImtpY2tEYXRhIiwia2lja3MiLCJ0ZXN0U2V0Iiwia2ljayIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlcnIiLCJlIiwiZiIsImR5IiwiTiIsIk0iLCJyb3RhdGVkIiwiXyIsIkdhbWVVSSIsInRldHJpc0dhbWUiLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImdhbWVTdGF0ZSIsImN0eCIsImRyb3BDb3VudGVyIiwibGFzdFRpbWUiLCJnYW1lTG9vcElkIiwiaW5pdEJvYXJkIiwibG9nU3RhdGUiLCJsb2ciLCJkcmF3TWF0cml4Iiwib2Zmc2V0IiwiY29sb3JzIiwiYmxvY2tTaXplIiwiaGFzQ3R4IiwiaGFzTWF0cml4IiwiaGFzT2Zmc2V0IiwiaGFzQ29sb3JzIiwiaGFzQmxvY2tTaXplIiwiZm9yRWFjaCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhdyIsImNhbnZhcyIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwibmV4dFBpZWNlQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5leHRDdHgiLCJnZXRDb250ZXh0IiwidXBkYXRlVUkiLCJ1cGRhdGVTY29yZURpc3BsYXkiLCJ1cGRhdGVMaW5lc0Rpc3BsYXkiLCJ1cGRhdGVMZXZlbERpc3BsYXkiLCJpc05hTiIsInNjb3JlRWxlbWVudCIsInRleHRDb250ZW50IiwidG9TdHJpbmciLCJsaW5lc0VsZW1lbnQiLCJsZXZlbEVsZW1lbnQiLCJ1cGRhdGVHYW1lU3RhdGUiLCJwbGF5ZXJEcm9wIiwiZHJvcHBlZCIsImFsZXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJwbGF5ZXJNb3ZlIiwicGxheWVyUm90YXRlIiwidXBkYXRlIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlbHRhVGltZSIsImRyYXdFcnJvciIsImdhbWVVSSIsInJlc2V0R2FtZSIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJvbktleURvd24iLCJiaW5kIiwib25LZXlVcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0IiwiaGFuZGxlS2V5RG93biIsImhhbmRsZUtleVVwIiwiaW5pdEdhbWUiLCJzZXRUZXRyaXNHYW1lIiwibmV3R2FtZSIsImV4cG9ydHMiLCJzdGF0ZSIsImFjdGlvbnMiLCJldmVudCIsInJlcGVhdCIsImRyb3BDb3VudCIsIm1heERyb3BzIiwiY3VycmVudFkiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwidGV0cmlzIl0sInNvdXJjZVJvb3QiOiIifQ==