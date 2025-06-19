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
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.js */ "./src/core/Board.js");
/* harmony import */ var _GameStateManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameStateManager.js */ "./src/core/GameStateManager.js");
/* harmony import */ var _PieceManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PieceManager.js */ "./src/core/PieceManager.js");
/* harmony import */ var _HoldManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HoldManager.js */ "./src/core/HoldManager.js");






var Game = /*#__PURE__*/function () {
  function Game() {var cols = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Game);
    this.board = new _Board_js__WEBPACK_IMPORTED_MODULE_2__.Board(cols, rows);
    this.gameState = new _GameStateManager_js__WEBPACK_IMPORTED_MODULE_3__.GameStatistics();
    this.pieceManager = new _PieceManager_js__WEBPACK_IMPORTED_MODULE_4__.PieceManager(cols, rows);
    this.holdManager = new _HoldManager_js__WEBPACK_IMPORTED_MODULE_5__.HoldManager(this.pieceManager);

    this.reset();
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Game, [{ key: "dropInterval", get:

    function get() {
      return this.gameState.dropInterval;
    } }, { key: "level", get:

    function get() {
      return this.gameState.level;
    } }, { key: "lines", get:

    function get() {
      return this.gameState.lines;
    } }, { key: "score", get:

    function get() {
      return this.gameState.score;
    } }, { key: "isGameOver", get:

    function get() {
      return this.gameState.isGameOver;
    } }, { key: "paused", get:

    function get() {
      return this.gameState.paused;
    } }, { key: "piece", get:

    function get() {
      return this.pieceManager.getCurrentPiece();
    } }, { key: "nextPiece", get:

    function get() {
      return this.pieceManager.getNextPiece();
    } }, { key: "heldPiece", get:

    function get() {
      return this.holdManager.getHeldPiece();
    } }, { key: "canHold", get:

    function get() {
      return this.holdManager.canHoldPiece();
    } }, { key: "startSoftDrop", value:

    function startSoftDrop() {
      this.gameState.startSoftDrop();
    } }, { key: "stopSoftDrop", value:

    function stopSoftDrop() {
      this.gameState.stopSoftDrop();
    } }, { key: "reset", value:

    function reset() {
      this.board.clear();
      this.gameState.reset();
      this.pieceManager.reset();
      this.holdManager.reset();
    } }, { key: "movePiece", value:


    function movePiece(dx) {var _this = this;
      if (this.isGameOver) return false;
      return this.pieceManager.movePiece(dx, function () {return _this.hasCollision();});
    }

    /**
     * 衝突判定を行う
     * @returns {boolean} 衝突しているかどうか
     */ }, { key: "hasCollision", value:
    function hasCollision() {
      var piece = this.pieceManager.getCurrentPiece();
      if (!piece || !piece.matrix || !piece.pos) {
        console.warn('Invalid piece data for collision detection');
        return true;
      }

      var matrix = piece.matrix,pos = piece.pos;

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

            if (
            boardX < 0 ||
            boardX >= this.board.cols ||
            boardY >= this.board.rows)
            {
              return true;
            }

            if (boardY >= 0 &&
            this.board.grid[boardY] &&
            this.board.grid[boardY][boardX] !== 0) {
              return true;
            }
          }
        }
      }

      return false;
    } }, { key: "spawnPiece", value:

    function spawnPiece() {
      this.pieceManager.spawnNewPiece();
      this.holdManager.enableHold();

      var piece = this.pieceManager.getCurrentPiece();
      if (piece) {
        var originalY = piece.pos.y;
        piece.pos.y = 0;

        if (this.hasCollision()) {
          this.gameState.setGameOver();
          this.pieceManager.clearCurrentPiece();
        } else {
          piece.pos.y = originalY;
        }
      }
    } }, { key: "dropPiece", value:



    function dropPiece() {var _this2 = this;
      if (this.isGameOver) return false;

      var dropped = this.pieceManager.dropPiece(function () {return _this2.hasCollision();});

      if (!dropped) {
        this.mergePiece();

        var linesCleared = this.board.clearLines();
        if (linesCleared > 0) {
          this.gameState.addLines(linesCleared);
        }

        this.spawnPiece();
        return false;
      }

      return true;
    } }, { key: "mergePiece", value:

    function mergePiece() {
      var piece = this.pieceManager.getCurrentPiece();
      if (!piece) return;

      var matrix = piece.matrix,pos = piece.pos;

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
    } }, { key: "rotatePiece", value:



    function rotatePiece(dir) {var _this3 = this;
      if (this.isGameOver) return false;
      return this.pieceManager.rotatePiece(dir, function () {return _this3.hasCollision();});
    } }, { key: "holdPiece", value:

    function holdPiece() {
      var success = this.holdManager.holdPiece(this.isGameOver, this.paused);

      if (success) {
        var piece = this.pieceManager.getCurrentPiece();
        if (piece) {
          var originalY = piece.pos.y;
          piece.pos.y = 0;

          if (this.hasCollision()) {
            this.gameState.setGameOver();
            this.pieceManager.clearCurrentPiece();
            return false;
          } else {
            piece.pos.y = originalY;
          }
        }
      }

      return success;
    } }]);}();

/***/ }),

/***/ "./src/core/GameStateManager.js":
/*!**************************************!*\
  !*** ./src/core/GameStateManager.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameStatistics: () => (/* binding */ GameStatistics)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _scoring_ScoreCalculator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scoring/ScoreCalculator.js */ "./src/scoring/ScoreCalculator.js");


var GameStatistics = /*#__PURE__*/function () {
  function GameStatistics() {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameStatistics);
    this.scoreCalculator = new _scoring_ScoreCalculator_js__WEBPACK_IMPORTED_MODULE_2__.ScoreCalculator();
    this.reset();
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(GameStatistics, [{ key: "reset", value:

    function reset() {
      this.level = 1;
      this.lines = 0;
      this.score = 0;
      this.isGameOver = false;
      this.paused = false;

      this.levelSpeeds = [
      1000, 900, 800, 700, 600,
      500, 400, 300, 200, 100];

      this.linesPerLevel = 10;
      this.dropInterval = this.getDropInterval();
      this.isSoftDrop = false;
    } }, { key: "getDropInterval", value:

    function getDropInterval() {
      var levelIndex = Math.min(this.level - 1, this.levelSpeeds.length - 1);
      return this.levelSpeeds[levelIndex];
    } }, { key: "startSoftDrop", value:

    function startSoftDrop() {
      if (!this.isSoftDrop) {
        this.isSoftDrop = true;
        this.dropInterval = 50;
      }
    } }, { key: "stopSoftDrop", value:

    function stopSoftDrop() {
      if (this.isSoftDrop) {
        this.isSoftDrop = false;
        this.dropInterval = this.getDropInterval();
      }
    } }, { key: "addLines", value:

    function addLines(linesCleared) {
      this.lines += linesCleared;
      this.score += this.scoreCalculator.calculateLineScore(linesCleared, this.level);
      return this.checkLevelUp();
    } }, { key: "checkLevelUp", value:

    function checkLevelUp() {
      if (this.scoreCalculator.shouldLevelUp(this.lines, this.level)) {
        this.level = this.scoreCalculator.calculateLevel(this.lines);
        this.dropInterval = this.getDropInterval();
        return true;
      }
      return false;
    } }, { key: "setGameOver", value:

    function setGameOver() {
      this.isGameOver = true;
    } }, { key: "pause", value:

    function pause() {
      this.paused = true;
    } }, { key: "unpause", value:

    function unpause() {
      this.paused = false;
    } }]);}();

/***/ }),

/***/ "./src/core/HoldManager.js":
/*!*********************************!*\
  !*** ./src/core/HoldManager.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HoldManager: () => (/* binding */ HoldManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
var HoldManager = /*#__PURE__*/function () {
  function HoldManager(pieceManager) {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HoldManager);
    this.pieceManager = pieceManager;
    this.reset();
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HoldManager, [{ key: "reset", value:

    function reset() {
      this.heldPiece = null;
      this.canHold = true;
    } }, { key: "holdPiece", value:

    function holdPiece(isGameOver, isPaused) {
      if (isGameOver || isPaused) return false;

      if (!this.canHold) return false;

      var currentPiece = this.pieceManager.getCurrentPiece();
      if (!currentPiece) return false;

      this.canHold = false;

      if (this.heldPiece === null) {
        this.heldPiece = currentPiece;
        this.pieceManager.spawnNewPiece();
      } else {
        var temp = currentPiece;
        this.pieceManager.currentPiece = this.heldPiece;
        this.heldPiece = temp;
      }

      var newPiece = this.pieceManager.getCurrentPiece();
      if (newPiece) {
        var matrix = newPiece.matrix;
        var x = Math.floor((this.pieceManager.boardCols - matrix[0].length) / 2);
        var y = -matrix.length;
        newPiece.pos = { x: x, y: y };
      }

      return true;
    } }, { key: "enableHold", value:

    function enableHold() {
      this.canHold = true;
    } }, { key: "getHeldPiece", value:

    function getHeldPiece() {
      return this.heldPiece;
    } }, { key: "canHoldPiece", value:

    function canHoldPiece() {
      return this.canHold;
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

/***/ "./src/core/PieceManager.js":
/*!**********************************!*\
  !*** ./src/core/PieceManager.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PieceManager: () => (/* binding */ PieceManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Piece_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Piece.js */ "./src/core/Piece.js");
/* harmony import */ var _rotation_RotationSystem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rotation/RotationSystem.js */ "./src/rotation/RotationSystem.js");



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

var PieceManager = /*#__PURE__*/function () {
  function PieceManager(boardCols, boardRows) {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PieceManager);
    this.boardCols = boardCols;
    this.boardRows = boardRows;
    this.rotationSystem = new _rotation_RotationSystem_js__WEBPACK_IMPORTED_MODULE_3__.RotationSystem();

    this.tetrominos = [
    [[1, 1, 1, 1]],
    [[2, 2], [2, 2]],
    [[0, 3, 0], [3, 3, 3]],
    [[0, 4, 4], [4, 4, 0]],
    [[5, 5, 0], [0, 5, 5]],
    [[6, 0, 0], [6, 6, 6]],
    [[0, 0, 7], [7, 7, 7]]];


    this.currentPiece = null;
    this.nextPiece = null;
    this.reset();
  }return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PieceManager, [{ key: "reset", value:

    function reset() {
      this.currentPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
    } }, { key: "createPiece", value:

    function createPiece(index) {
      var matrix = this.tetrominos[index % this.tetrominos.length];
      var type = Object.keys(TETROMINO_MAP)[index % this.tetrominos.length];
      var x = Math.floor((this.boardCols - matrix[0].length) / 2);
      var y = -matrix.length;
      return new _Piece_js__WEBPACK_IMPORTED_MODULE_2__.Piece(matrix, { x: x, y: y }, type);
    } }, { key: "spawnNewPiece", value:

    function spawnNewPiece() {
      this.currentPiece = this.nextPiece || this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      return this.currentPiece;
    } }, { key: "movePiece", value:

    function movePiece(dx, collisionChecker) {
      if (!this.currentPiece) return false;

      this.currentPiece.move(dx, 0);

      if (collisionChecker()) {
        this.currentPiece.move(-dx, 0);
        return false;
      }

      return true;
    } }, { key: "dropPiece", value:

    function dropPiece(collisionChecker) {
      if (!this.currentPiece) return false;

      this.currentPiece.move(0, 1);

      if (collisionChecker()) {
        this.currentPiece.move(0, -1);
        return false;
      }

      return true;
    } }, { key: "rotatePiece", value:

    function rotatePiece(dir, collisionChecker) {
      if (!this.currentPiece) {
        if (typeof process === 'undefined' || "development" !== 'test') {
          console.warn('No piece to rotate');
        }
        return false;
      }

      var result = this.rotationSystem.attemptRotation(
        this.currentPiece,
        dir,
        collisionChecker
      );

      return result.success;
    } }, { key: "getCurrentPiece", value:

    function getCurrentPiece() {
      return this.currentPiece;
    } }, { key: "getNextPiece", value:

    function getNextPiece() {
      return this.nextPiece;
    } }, { key: "clearCurrentPiece", value:

    function clearCurrentPiece() {
      this.currentPiece = null;
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
/* harmony export */   gameStateManager: () => (/* binding */ gameStateManager),
/* harmony export */   gameUI: () => (/* binding */ gameUI),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   playerDrop: () => (/* binding */ playerDrop),
/* harmony export */   playerHold: () => (/* binding */ playerHold),
/* harmony export */   playerMove: () => (/* binding */ playerMove),
/* harmony export */   playerRotate: () => (/* binding */ playerRotate),
/* harmony export */   renderer: () => (/* binding */ renderer),
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
/* harmony import */ var _rendering_Renderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rendering/Renderer.js */ "./src/rendering/Renderer.js");
/* harmony import */ var _state_GameStateManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/GameStateManager.js */ "./src/state/GameStateManager.js");






// --- グローバル変数と状態管理 ---
var tetrisGame = new _core_Game_js__WEBPACK_IMPORTED_MODULE_0__.Game();
var eventManager = new EventTarget();
var gameStateManager = new _state_GameStateManager_js__WEBPACK_IMPORTED_MODULE_4__.GameStateManager(_constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.ROWS, _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLS);
var renderer = null;

// 後方互換性のためのgameStateプロキシ
var gameState = new Proxy(gameStateManager.state, {
  get: function get(target, prop) {
    if (prop === 'initBoard') {
      return function () {return gameStateManager.initBoard();};
    }
    if (prop === 'logState') {
      return function () {return gameStateManager.logState();};
    }
    return target[prop];
  },
  set: function set(target, prop, value) {
    gameStateManager.set(prop, value);
    return true;
  }
});

// --- 描画関連 --- 
function draw() {
  if (!renderer) {
    // テスト環境では警告を出さない
    if (typeof process === 'undefined' || "development" !== 'test') {
      console.warn('Renderer not initialized');
    }
    return;
  }

  try {
    var state = gameStateManager.getState();
    var gameData = {
      boardGrid: tetrisGame && tetrisGame.board ? tetrisGame.board.grid : null,
      piece: state.piece,
      nextPiece: state.nextPiece,
      holdPiece: state.holdPiece
    };

    var nextPieceCanvas = document.getElementById('next-piece-canvas');
    var holdPieceCanvas = document.getElementById('hold-piece-canvas');
    renderer.render(gameData, nextPieceCanvas, holdPieceCanvas);
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
    }
  } catch (error) {
    console.error('Error updating level display:', error);
  }
}

// --- ゲームロジック --- 
function updateGameState() {
  gameStateManager.syncWithGame(tetrisGame);
}

function playerDrop() {
  try {
    if (!gameStateManager.isRunning()) return false;

    if (!tetrisGame || typeof tetrisGame.dropPiece !== 'function') {
      console.error('Invalid tetrisGame object or missing dropPiece method');
      return false;
    }

    var dropped = tetrisGame.dropPiece();
    // まずゲームオーバー判定
    if (tetrisGame.isGameOver) {
      gameStateManager.set('isGameOver', true);
      updateGameState();
      gameStateManager.stopGameLoop();
      alert('Game Over!');
      return false;
    }
    // 通常時は同期
    updateGameState();
    return dropped;
  } catch (error) {
    console.error('Error in playerDrop:', error);
    return false;
  }
}

function playerMove(dir) {
  try {
    if (!gameStateManager.isRunning()) return;

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
    if (!gameStateManager.isRunning()) return;

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

function playerHold() {
  try {
    if (!gameStateManager.isRunning()) return;

    if (!tetrisGame || typeof tetrisGame.holdPiece !== 'function') {
      console.error('Invalid tetrisGame object or missing holdPiece method');
      return;
    }

    var result = tetrisGame.holdPiece();
    if (result) {
      updateGameState();
    }
  } catch (error) {
    console.error('Error in playerHold:', error);
  }
}

// --- ゲームループ ---
function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  try {
    var gameLoopId = requestAnimationFrame(update);
    gameStateManager.setGameLoopId(gameLoopId);

    if (!gameStateManager.isRunning()) {
      return;
    }

    var state = gameStateManager.getState();

    // 初期化時はlastTimeを設定
    if (!state.lastTime) {
      gameStateManager.set('lastTime', time);
    }

    var deltaTime = time - state.lastTime;
    gameStateManager.set('lastTime', time);

    // 異常なデルタタイムをスキップ（フレーム計算の安定性向上）
    if (deltaTime > 1000) {
      console.warn('Large delta time detected, skipping frame:', deltaTime);
      return;
    }

    // ドロップ処理
    if (typeof state.dropCounter === 'number' && typeof tetrisGame.dropInterval === 'number') {
      var newDropCounter = state.dropCounter + deltaTime;
      gameStateManager.set('dropCounter', newDropCounter);

      if (newDropCounter > tetrisGame.dropInterval) {
        playerDrop();
        gameStateManager.set('dropCounter', 0);
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
    gameStateManager.setPaused(true);
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
  holdPiece: playerHold,
  resetGame: resetGame,
  update: update,
  getDropInterval: function getDropInterval() {return tetrisGame.getDropInterval();},
  startSoftDrop: function startSoftDrop() {return tetrisGame.startSoftDrop();},
  stopSoftDrop: function stopSoftDrop() {return tetrisGame.stopSoftDrop();}
}, gameStateManager);

function resetGame() {
  // 状態管理器をリセット
  gameStateManager.reset();

  // ゲームのリセット
  tetrisGame.reset();

  // ゲーム状態の更新と描画
  updateGameState();
  updateUI();
  draw();

  // ゲームループを再開
  gameStateManager.set('lastTime', 0);
  var gameLoopId = requestAnimationFrame(update);
  gameStateManager.setGameLoopId(gameLoopId);

  console.log('ゲームがリセットされました。');
}

function setupEventListeners(onKeyDown, onKeyUp) {
  gameUI.setupEventListeners(onKeyDown, onKeyUp);
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
    gameStateManager.set('ctx', ctx);
    gameStateManager.set('canvas', canvas);

    // レンダラーの初期化
    var COLORS = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.COLORS,BLOCK_SIZE = _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
    renderer = new _rendering_Renderer_js__WEBPACK_IMPORTED_MODULE_3__.Renderer(canvas, COLORS, BLOCK_SIZE);

    // キャンバスのサイズ設定
    var state = gameStateManager.getState();
    canvas.width = state.COLS * BLOCK_SIZE;
    canvas.height = state.ROWS * BLOCK_SIZE;

    // ボードの初期化
    gameStateManager.initBoard();

    // イベントリスナーの設定
    console.log('イベントリスナーを設定します...');
    setupEventListeners(gameUI.onKeyDown.bind(gameUI), gameUI.onKeyUp.bind(gameUI));

    // ゲームのリセット
    console.log('ゲームをリセットします...');
    resetGame();

    // 初期描画
    console.log('初期描画を実行します...');
    draw();

    // ゲームループを開始
    console.log('ゲームループを開始します...');
    gameStateManager.set('lastTime', 0);
    gameStateManager.set('dropCounter', 0);
    var gameLoopId = requestAnimationFrame(update);
    gameStateManager.setGameLoopId(gameLoopId);

    console.log('ゲームの初期化が完了しました。');

    // テスト用の返り値
    return {
      canvas: canvas,
      eventManager: eventManager,
      gameState: gameStateManager.getState(),
      initGame: init,
      resetGame: resetGame,
      setupEventListeners: setupEventListeners.bind(null, gameUI.onKeyDown.bind(gameUI), gameUI.onKeyUp.bind(gameUI)),
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

  gameStateManager.set('ctx', ctx);
  gameStateManager.set('canvas', canvas);
  var state = gameStateManager.getState();
  canvas.width = state.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = state.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

  return canvas;
}

// --- エクスポートとブラウザ実行 ---

 // draw関数をエクスポート

function setTetrisGame(newGame) {
  tetrisGame = newGame;
}

var exports = { init: init, initGame: initGame, playerMove: playerMove, playerRotate: playerRotate, playerDrop: playerDrop, playerHold: playerHold, gameUI: gameUI, gameState: gameState, gameStateManager: gameStateManager, renderer: renderer, resetGame: resetGame, update: update, setupEventListeners: setupEventListeners, draw: draw, tetrisGame: tetrisGame };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exports);

/***/ }),

/***/ "./src/rendering/Renderer.js":
/*!***********************************!*\
  !*** ./src/rendering/Renderer.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Renderer: () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
var Renderer = /*#__PURE__*/function () {
  function Renderer(canvas, colors, blockSize) {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Renderer);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.colors = colors;
    this.blockSize = blockSize;

    if (!this.ctx) {
      throw new Error('2D コンテキストの取得に失敗しました');
    }
  }

  /**
   * マトリックスを描画する
   * @param {Array<Array<number>>} matrix - 描画するマトリックス
   * @param {Object} offset - オフセット座標 {x, y}
   * @param {Array<string>} colors - 色の配列（オプション、デフォルトは this.colors）
   * @param {number} blockSize - ブロックサイズ（オプション、デフォルトは this.blockSize）
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Renderer, [{ key: "drawMatrix", value:
    function drawMatrix(matrix, offset) {var _this = this;var colors = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.colors;var blockSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.blockSize;
      if (!this.ctx || !matrix || !Array.isArray(matrix) || !offset || !colors || !blockSize) {
        console.warn('drawMatrix: Invalid parameters', {
          hasCtx: !!this.ctx,
          hasMatrix: !!matrix,
          hasOffset: !!offset,
          hasColors: !!colors,
          hasBlockSize: !!blockSize
        });
        return;
      }

      if (typeof offset.x !== 'number' || typeof offset.y !== 'number') {
        console.warn('drawMatrix: Invalid offset values', offset);
        return;
      }

      matrix.forEach(function (row, y) {
        if (!Array.isArray(row)) return;
        row.forEach(function (value, x) {
          if (value !== 0) {
            try {
              _this.ctx.fillStyle = colors[value] && typeof colors[value] === 'string' ? colors[value] : '#000';
              _this.ctx.fillRect((x + offset.x) * blockSize, (y + offset.y) * blockSize, blockSize, blockSize);
            } catch (error) {
              // テスト環境では詳細エラーを出さない
              if (typeof process === 'undefined' || "development" !== 'test') {
                console.error('Error drawing block at', x, y, ':', error);
              }
            }
          }
        });
      });
    }

    /**
     * キャンバスをクリアして背景を描画する
     */ }, { key: "clearCanvas", value:
    function clearCanvas() {
      try {
        if (!this.ctx || !this.canvas) {
          console.warn('Invalid canvas context in clearCanvas');
          return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      } catch (error) {
        console.error('Error clearing canvas:', error);
      }
    }

    /**
     * ゲームボードを描画する
     * @param {Array<Array<number>>} boardGrid - ボードのグリッド
     */ }, { key: "drawBoard", value:
    function drawBoard(boardGrid) {
      if (boardGrid && Array.isArray(boardGrid)) {
        this.drawMatrix(boardGrid, { x: 0, y: 0 });
      }
    }

    /**
     * 現在のピースを描画する
     * @param {Object} piece - ピースオブジェクト
     */ }, { key: "drawPiece", value:
    function drawPiece(piece) {
      if (piece && piece.matrix && piece.pos) {
        this.drawMatrix(piece.matrix, piece.pos);
      }
    }

    /**
     * 次のピースを描画する
     * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
     * @param {Object} nextPiece - 次のピースオブジェクト
     */ }, { key: "drawNextPiece", value:
    function drawNextPiece(nextPieceCanvas, nextPiece) {
      if (!nextPieceCanvas || !nextPiece || !nextPiece.matrix) {
        return;
      }

      try {
        var nextCtx = nextPieceCanvas.getContext('2d');
        if (!nextCtx) {
          console.warn('Could not get 2D context for next piece canvas');
          return;
        }

        nextCtx.clearRect(0, 0, nextCtx.canvas.width, nextCtx.canvas.height);
        var matrix = nextPiece.matrix;

        if (Array.isArray(matrix) && matrix.length > 0 && Array.isArray(matrix[0])) {
          var x = (nextCtx.canvas.width / this.blockSize - matrix[0].length) / 2;
          var y = (nextCtx.canvas.height / this.blockSize - matrix.length) / 2;

          // 次のピース用の一時的なレンダラーを作成
          var tempRenderer = new Renderer(nextPieceCanvas, this.colors, this.blockSize);
          tempRenderer.drawMatrix(matrix, { x: x, y: y });
        }
      } catch (error) {
        // テスト環境では詳細エラーを出さない  
        if (typeof process === 'undefined' || "development" !== 'test') {
          console.error('Error drawing next piece:', error);
        }
      }
    }

    /**
     * ホールドピースを描画する
     * @param {HTMLCanvasElement} holdPieceCanvas - ホールドピース用キャンバス
     * @param {Object} holdPiece - ホールドピース
     */ }, { key: "drawHoldPiece", value:
    function drawHoldPiece(holdPieceCanvas, holdPiece) {
      try {
        if (!holdPieceCanvas || !holdPiece || !holdPiece.matrix) return;

        var matrix = holdPiece.matrix;

        // 一時的なレンダラーを作成して描画
        var tempRenderer = new Renderer(holdPieceCanvas, this.colors, this.blockSize);

        // ホールドエリアのサイズを設定
        holdPieceCanvas.width = 4 * this.blockSize;
        holdPieceCanvas.height = 4 * this.blockSize;

        // 背景をクリア
        tempRenderer.clearCanvas();

        // ピースをキャンバスの中央に描画
        var x = Math.floor((4 - matrix[0].length) / 2);
        var y = Math.floor((4 - matrix.length) / 2);

        tempRenderer.drawMatrix(matrix, { x: x, y: y });
      } catch (error) {
        // テスト環境では詳細エラーを出さない  
        if (typeof process === 'undefined' || "development" !== 'test') {
          console.error('Error drawing hold piece:', error);
        }
      }
    }

    /**
     * ゲーム全体を描画する
     * @param {Object} gameData - ゲームデータ
     * @param {Array<Array<number>>} gameData.boardGrid - ボードのグリッド
     * @param {Object} gameData.piece - 現在のピース
     * @param {Object} gameData.nextPiece - 次のピース
     * @param {Object} gameData.holdPiece - ホールドピース
     * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
     * @param {HTMLCanvasElement} holdPieceCanvas - ホールドピース用キャンバス
     */ }, { key: "render", value:
    function render(gameData) {var nextPieceCanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;var holdPieceCanvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      try {
        this.clearCanvas();

        // メインボードの描画
        if (gameData.boardGrid) {
          this.drawBoard(gameData.boardGrid);
        }

        // 現在のピースの描画
        if (gameData.piece) {
          this.drawPiece(gameData.piece);
        }

        // 次のピースの描画
        if (nextPieceCanvas && gameData.nextPiece) {
          this.drawNextPiece(nextPieceCanvas, gameData.nextPiece);
        }

        // ホールドピースの描画
        if (holdPieceCanvas && gameData.holdPiece) {
          this.drawHoldPiece(holdPieceCanvas, gameData.holdPiece);
        }
      } catch (error) {
        console.error('Unexpected error in render function:', error);
      }
    } }]);}();

/***/ }),

/***/ "./src/rotation/RotationSystem.js":
/*!****************************************!*\
  !*** ./src/rotation/RotationSystem.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RotationSystem: () => (/* binding */ RotationSystem),
/* harmony export */   SRS_KICKS_I: () => (/* binding */ SRS_KICKS_I),
/* harmony export */   SRS_KICKS_JLTSZ: () => (/* binding */ SRS_KICKS_JLTSZ)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t["return"] || t["return"]();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;} // SRSキックデータの構造: [state][kickIndex][x/y]
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



var RotationSystem = /*#__PURE__*/function () {
  function RotationSystem() {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RotationSystem);
    this.kickData = {
      'I': SRS_KICKS_I,
      'default': SRS_KICKS_JLTSZ
    };
  }

  /**
   * ピースタイプに応じたキックデータを取得する
   * @param {string} pieceType - ピースのタイプ
   * @returns {Array} キックデータ
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RotationSystem, [{ key: "getKickData", value:
    function getKickData(pieceType) {
      return this.kickData[pieceType] || this.kickData['default'];
    }

    /**
     * 回転状態を検証する
     * @param {number} rotationState - 回転状態
     * @returns {boolean} 有効かどうか
     */ }, { key: "validateRotationState", value:
    function validateRotationState(rotationState) {
      return typeof rotationState === 'number' && rotationState >= 0 && rotationState <= 3;
    }

    /**
     * キックテストのオフセットを計算する
     * @param {string} pieceType - ピースのタイプ
     * @param {number} originalRotationState - 元の回転状態
     * @param {number} direction - 回転方向 (1: 時計回り, -1: 反時計回り)
     * @returns {Array<Array<number>>} キックテストのオフセット配列
     */ }, { key: "getKickOffsets", value:
    function getKickOffsets(pieceType, originalRotationState, direction) {
      if (!this.validateRotationState(originalRotationState)) {
        console.error("無効な回転状態:", originalRotationState);
        return [[0, 0]]; // デフォルトのオフセット
      }

      var kickData = this.getKickData(pieceType);
      var kicks = kickData[originalRotationState % 4];

      if (!kicks || !Array.isArray(kicks)) {
        console.error("Invalid kicks data:", kicks, "for rotation state:", originalRotationState);
        return [[0, 0]]; // デフォルトのオフセット
      }

      // 反時計回りの場合はキックデータを反転
      var testSet = direction === 1 ? (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(
        kicks) // 配列のコピーを作成
      : kicks.map(function (kick) {
        if (!Array.isArray(kick) || kick.length !== 2) {
          console.error("Invalid kick data format:", kick);
          return [0, 0];
        }
        return [-kick[0], -kick[1]];
      });

      return testSet;
    }

    /**
     * 回転を試行する
     * @param {Object} piece - ピースオブジェクト
     * @param {number} direction - 回転方向 (1: 時計回り, -1: 反時計回り)
     * @param {Function} collisionCheckFn - 衝突判定を行う関数
     * @returns {Object} 回転結果 {success: boolean, finalPosition?: {x, y}}
     */ }, { key: "attemptRotation", value:
    function attemptRotation(piece, direction, collisionCheckFn) {
      if (!piece || !piece.matrix || !Array.isArray(piece.matrix)) {
        console.warn('Invalid piece for rotation');
        return { success: false };
      }

      if (typeof collisionCheckFn !== 'function') {
        console.error('Collision check function is required');
        return { success: false };
      }

      try {
        // 元の状態を保存
        var originalPos = _objectSpread({}, piece.pos);
        var originalMatrix = piece.matrix.map(function (row) {return (
            Array.isArray(row) ? (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(row) : []);}
        );
        var originalRotationState = piece.rotationState;

        if (!this.validateRotationState(originalRotationState)) {
          return { success: false };
        }

        // ピースを回転（回転状態の更新はPiece.rotate内で行う）
        piece.rotate(direction);

        // キックテストを実行
        var kickOffsets = this.getKickOffsets(piece.type, originalRotationState, direction);var _iterator = _createForOfIteratorHelper(

            kickOffsets),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _step$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 2),offsetX = _step$value[0],offsetY = _step$value[1];
            piece.pos.x += offsetX;
            piece.pos.y += offsetY;

            if (!collisionCheckFn()) {
              // 衝突がなければ回転成功
              return { success: true, finalPosition: _objectSpread({}, piece.pos) };
            }

            // 衝突する場合は位置を戻して次のテストを試す
            piece.pos.x -= offsetX;
            piece.pos.y -= offsetY;
          }

          // 全てのテストで衝突する場合、元の状態に戻す
        } catch (err) {_iterator.e(err);} finally {_iterator.f();}piece.matrix = originalMatrix;
        piece.rotationState = originalRotationState;
        piece.pos = _objectSpread({}, originalPos);

        return { success: false };
      } catch (error) {
        console.error('Error during rotation attempt:', error);
        return { success: false };
      }
    }

    /**
     * SRSデータを検証する
     * @returns {boolean} データが有効かどうか
     */ }, { key: "validateSRSData", value:
    function validateSRSData() {
      var requiredStates = 4;
      var requiredKicks = 5;

      for (var _i = 0, _Object$entries = Object.entries(this.kickData); _i < _Object$entries.length; _i++) {var _Object$entries$_i = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),pieceType = _Object$entries$_i[0],kickData = _Object$entries$_i[1];
        if (!Array.isArray(kickData) || kickData.length !== requiredStates) {
          console.error("Invalid kick data structure for ".concat(pieceType, ": expected ").concat(requiredStates, " states"));
          return false;
        }

        for (var state = 0; state < kickData.length; state++) {
          var kicks = kickData[state];
          if (!Array.isArray(kicks) || kicks.length !== requiredKicks) {
            console.error("Invalid kicks for ".concat(pieceType, " state ").concat(state, ": expected ").concat(requiredKicks, " kicks"));
            return false;
          }

          for (var kickIndex = 0; kickIndex < kicks.length; kickIndex++) {
            var kick = kicks[kickIndex];
            if (!Array.isArray(kick) || kick.length !== 2 ||
            typeof kick[0] !== 'number' || typeof kick[1] !== 'number') {
              console.error("Invalid kick format for ".concat(pieceType, " state ").concat(state, " kick ").concat(kickIndex));
              return false;
            }
          }
        }
      }

      return true;
    }

    /**
     * 回転システムの情報を取得する
     * @returns {Object} システム情報
     */ }, { key: "getSystemInfo", value:
    function getSystemInfo() {
      return {
        system: 'SRS (Super Rotation System)',
        supportedPieces: Object.keys(this.kickData),
        isValid: this.validateSRSData()
      };
    } }]);}();

/***/ }),

/***/ "./src/scoring/ScoreCalculator.js":
/*!****************************************!*\
  !*** ./src/scoring/ScoreCalculator.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScoreCalculator: () => (/* binding */ ScoreCalculator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
var ScoreCalculator = /*#__PURE__*/function () {
  function ScoreCalculator() {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScoreCalculator);
    // ライン消去数に応じた基礎得点
    this.lineScores = [0, 40, 100, 300, 1200]; // 0-4ライン消したときの基礎得点

    // レベルアップに必要なライン数
    this.linesPerLevel = 10;

    // ソフトドロップのボーナス
    this.softDropBonus = 1;

    // ハードドロップのボーナス（距離あたり）
    this.hardDropBonus = 2;
  }

  /**
   * ライン消去によるスコアを計算する
   * @param {number} linesCleared - 消去したライン数
   * @param {number} level - 現在のレベル
   * @returns {number} 計算されたスコア
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ScoreCalculator, [{ key: "calculateLineScore", value:
    function calculateLineScore(linesCleared, level) {
      if (typeof linesCleared !== 'number' || linesCleared < 0) {
        console.warn('Invalid linesCleared value:', linesCleared);
        return 0;
      }

      if (typeof level !== 'number' || level < 1) {
        console.warn('Invalid level value:', level);
        return 0;
      }

      var index = Math.min(Math.max(0, Math.floor(linesCleared)), this.lineScores.length - 1);
      return this.lineScores[index] * level;
    }

    /**
     * ソフトドロップのスコアを計算する
     * @param {number} dropDistance - ドロップした距離
     * @returns {number} ソフトドロップスコア
     */ }, { key: "calculateSoftDropScore", value:
    function calculateSoftDropScore(dropDistance) {
      if (typeof dropDistance !== 'number' || dropDistance < 0) {
        return 0;
      }

      return dropDistance * this.softDropBonus;
    }

    /**
     * ハードドロップのスコアを計算する
     * @param {number} dropDistance - ドロップした距離
     * @returns {number} ハードドロップスコア
     */ }, { key: "calculateHardDropScore", value:
    function calculateHardDropScore(dropDistance) {
      if (typeof dropDistance !== 'number' || dropDistance < 0) {
        return 0;
      }

      return dropDistance * this.hardDropBonus;
    }

    /**
     * レベルを計算する
     * @param {number} totalLines - 総ライン数
     * @returns {number} 計算されたレベル
     */ }, { key: "calculateLevel", value:
    function calculateLevel(totalLines) {
      if (typeof totalLines !== 'number' || totalLines < 0) {
        return 1;
      }

      return Math.floor(totalLines / this.linesPerLevel) + 1;
    }

    /**
     * レベルアップが必要かチェックする
     * @param {number} currentLines - 現在のライン数
     * @param {number} currentLevel - 現在のレベル
     * @returns {boolean} レベルアップが必要かどうか
     */ }, { key: "shouldLevelUp", value:
    function shouldLevelUp(currentLines, currentLevel) {
      var newLevel = this.calculateLevel(currentLines);
      return newLevel > currentLevel;
    }

    /**
     * 次のレベルまでに必要なライン数を計算する
     * @param {number} currentLines - 現在のライン数
     * @returns {number} 次のレベルまでに必要なライン数
     */ }, { key: "getLinesUntilNextLevel", value:
    function getLinesUntilNextLevel(currentLines) {
      if (typeof currentLines !== 'number' || currentLines < 0) {
        return this.linesPerLevel;
      }

      var currentLevelLines = currentLines % this.linesPerLevel;
      return this.linesPerLevel - currentLevelLines;
    }

    /**
     * 複合スコアを計算する（ライン消去 + ドロップボーナス）
     * @param {Object} scoreData - スコア計算データ
     * @param {number} scoreData.linesCleared - 消去したライン数
     * @param {number} scoreData.level - 現在のレベル
     * @param {number} scoreData.softDropDistance - ソフトドロップの距離（オプション）
     * @param {number} scoreData.hardDropDistance - ハードドロップの距離（オプション）
     * @returns {Object} 計算結果 {totalScore, lineScore, softDropScore, hardDropScore}
     */ }, { key: "calculateTotalScore", value:
    function calculateTotalScore(scoreData) {
      var _scoreData$linesClear =




        scoreData.linesCleared,linesCleared = _scoreData$linesClear === void 0 ? 0 : _scoreData$linesClear,_scoreData$level = scoreData.level,level = _scoreData$level === void 0 ? 1 : _scoreData$level,_scoreData$softDropDi = scoreData.softDropDistance,softDropDistance = _scoreData$softDropDi === void 0 ? 0 : _scoreData$softDropDi,_scoreData$hardDropDi = scoreData.hardDropDistance,hardDropDistance = _scoreData$hardDropDi === void 0 ? 0 : _scoreData$hardDropDi;

      var lineScore = this.calculateLineScore(linesCleared, level);
      var softDropScore = this.calculateSoftDropScore(softDropDistance);
      var hardDropScore = this.calculateHardDropScore(hardDropDistance);
      var totalScore = lineScore + softDropScore + hardDropScore;

      return {
        totalScore: totalScore,
        lineScore: lineScore,
        softDropScore: softDropScore,
        hardDropScore: hardDropScore
      };
    }

    /**
     * スコア計算の設定を更新する
     * @param {Object} config - 新しい設定
     * @param {Array<number>} config.lineScores - ライン消去スコア配列（オプション）
     * @param {number} config.linesPerLevel - レベルあたりのライン数（オプション）
     * @param {number} config.softDropBonus - ソフトドロップボーナス（オプション）
     * @param {number} config.hardDropBonus - ハードドロップボーナス（オプション）
     */ }, { key: "updateConfig", value:
    function updateConfig(config) {
      if (config.lineScores && Array.isArray(config.lineScores)) {
        this.lineScores = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(config.lineScores);
      }

      if (typeof config.linesPerLevel === 'number' && config.linesPerLevel > 0) {
        this.linesPerLevel = config.linesPerLevel;
      }

      if (typeof config.softDropBonus === 'number' && config.softDropBonus >= 0) {
        this.softDropBonus = config.softDropBonus;
      }

      if (typeof config.hardDropBonus === 'number' && config.hardDropBonus >= 0) {
        this.hardDropBonus = config.hardDropBonus;
      }
    }

    /**
     * 現在の設定を取得する
     * @returns {Object} 現在の設定
     */ }, { key: "getConfig", value:
    function getConfig() {
      return {
        lineScores: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.lineScores),
        linesPerLevel: this.linesPerLevel,
        softDropBonus: this.softDropBonus,
        hardDropBonus: this.hardDropBonus
      };
    }

    /**
     * スコア履歴を管理するためのヘルパー
     * @param {number} currentScore - 現在のスコア
     * @param {number} newScore - 新しいスコア
     * @returns {Object} スコア更新情報 {previousScore, newScore, increase}
     */ }, { key: "createScoreUpdate", value:
    function createScoreUpdate(currentScore, newScore) {
      return {
        previousScore: currentScore,
        newScore: currentScore + newScore,
        increase: newScore
      };
    }

    /**
     * レベル別の難易度情報を取得する
     * @param {number} level - レベル
     * @returns {Object} 難易度情報
     */ }, { key: "getLevelInfo", value:
    function getLevelInfo(level) {
      if (typeof level !== 'number' || level < 1) {
        level = 1;
      }

      return {
        level: level,
        requiredLines: level * this.linesPerLevel,
        scoreMultiplier: level,
        nextLevelAt: (level + 1) * this.linesPerLevel
      };
    } }]);}();

/***/ }),

/***/ "./src/state/GameStateManager.js":
/*!***************************************!*\
  !*** ./src/state/GameStateManager.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameStateManager: () => (/* binding */ GameStateManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}var GameStateManager = /*#__PURE__*/function () {
  function GameStateManager(rows, cols) {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GameStateManager);
    this.state = {
      ctx: null,
      canvas: null,
      board: [],
      ROWS: rows,
      COLS: cols,
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
      isSoftDrop: false
    };
  }

  /**
   * 状態を取得する
   * @returns {Object} 現在の状態
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(GameStateManager, [{ key: "getState", value:
    function getState() {
      return _objectSpread({}, this.state);
    }

    /**
     * 特定の状態値を取得する
     * @param {string} key - 取得する状態のキー
     * @returns {*} 状態値
     */ }, { key: "get", value:
    function get(key) {
      return this.state[key];
    }

    /**
     * 特定の状態値を設定する
     * @param {string} key - 設定する状態のキー
     * @param {*} value - 設定する値
     */ }, { key: "set", value:
    function set(key, value) {
      this.state[key] = value;
    }

    /**
     * 複数の状態値を一度に設定する
     * @param {Object} updates - 更新する状態のオブジェクト
     */ }, { key: "update", value:
    function update(updates) {
      Object.assign(this.state, updates);
    }

    /**
     * ボードを初期化する
     */ }, { key: "initBoard", value:
    function initBoard() {var _this = this;
      this.state.board = Array(this.state.ROWS).fill(null).map(function () {return Array(_this.state.COLS).fill(0);});
    }

    /**
     * ゲーム状態をリセットする
     */ }, { key: "reset", value:
    function reset() {
      this.state.score = 0;
      this.state.lines = 0;
      this.state.level = 1;
      this.state.isGameOver = false;
      this.state.paused = false;
      this.state.dropCounter = 0;
      this.state.dropInterval = 1000;
      this.state.lastTime = 0;
      this.state.isSoftDrop = false;

      if (this.state.gameLoopId) {
        cancelAnimationFrame(this.state.gameLoopId);
        this.state.gameLoopId = null;
      }

      this.initBoard();
    }

    /**
     * ゲームの基本情報を同期する
     * @param {Object} gameInstance - ゲームインスタンス
     */ }, { key: "syncWithGame", value:
    function syncWithGame(gameInstance) {
      if (!gameInstance) return;

      this.state.score = gameInstance.score || 0;
      this.state.lines = gameInstance.lines || 0;
      this.state.level = gameInstance.level || 1;
      this.state.isGameOver = gameInstance.isGameOver || false;
      this.state.piece = gameInstance.piece || null;
      this.state.nextPiece = gameInstance.nextPiece || null;
      this.state.holdPiece = gameInstance.heldPiece || null;
      this.state.canHold = gameInstance.canHold !== undefined ? gameInstance.canHold : true;

      if (gameInstance.board && gameInstance.board.grid) {
        this.state.board = gameInstance.board.grid;
      }
    }

    /**
     * キーの状態を更新する
     * @param {string} key - キー名
     * @param {boolean} pressed - 押されているかどうか
     */ }, { key: "updateKeyState", value:
    function updateKeyState(key, pressed) {
      this.state.keys[key] = pressed;
    }

    /**
     * ゲームループIDを設定する
     * @param {number} id - ゲームループID
     */ }, { key: "setGameLoopId", value:
    function setGameLoopId(id) {
      this.state.gameLoopId = id;
    }

    /**
     * ゲームループを停止する
     */ }, { key: "stopGameLoop", value:
    function stopGameLoop() {
      if (this.state.gameLoopId) {
        cancelAnimationFrame(this.state.gameLoopId);
        this.state.gameLoopId = null;
      }
    }

    /**
     * ゲームが実行中かどうかを判定する
     * @returns {boolean} 実行中かどうか
     */ }, { key: "isRunning", value:
    function isRunning() {
      return !this.state.isGameOver && !this.state.paused;
    }

    /**
     * ゲームを一時停止/再開する
     * @param {boolean} paused - 一時停止するかどうか
     */ }, { key: "setPaused", value:
    function setPaused(paused) {
      this.state.paused = paused;
    }

    /**
     * ドロップ間隔を更新する
     * @param {number} interval - 新しいドロップ間隔
     */ }, { key: "updateDropInterval", value:
    function updateDropInterval(interval) {
      this.state.dropInterval = interval;
    }

    /**
     * ソフトドロップの状態を設定する
     * @param {boolean} isSoftDrop - ソフトドロップ中かどうか
     */ }, { key: "setSoftDrop", value:
    function setSoftDrop(isSoftDrop) {
      this.state.isSoftDrop = isSoftDrop;
    }

    /**
     * デバッグ用: 現在の状態をログに出力する
     */ }, { key: "logState", value:
    function logState() {
      console.log('Current Game State:', {
        score: this.state.score,
        lines: this.state.lines,
        level: this.state.level,
        isGameOver: this.state.isGameOver,
        paused: this.state.paused,
        piece: this.state.piece,
        nextPiece: this.state.nextPiece
      });
    }

    /**
     * 状態の検証を行う
     * @returns {boolean} 状態が有効かどうか
     */ }, { key: "validateState", value:
    function validateState() {
      var requiredFields = ['score', 'lines', 'level', 'ROWS', 'COLS'];

      for (var _i = 0, _requiredFields = requiredFields; _i < _requiredFields.length; _i++) {var field = _requiredFields[_i];
        if (typeof this.state[field] !== 'number') {
          console.warn("Invalid state field: ".concat(field), this.state[field]);
          return false;
        }
      }

      if (!Array.isArray(this.state.board)) {
        console.warn('Invalid board state');
        return false;
      }

      return true;
    } }]);}();

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
  function GameUI(state, actions, gameStateManager) {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GameUI);
    this.state = state;
    this.actions = actions;
    this.gameStateManager = gameStateManager;
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
        case 'c':
        case 'C':
        case 'Shift':
          // ホールド機能
          if (actions.holdPiece) {
            actions.holdPiece();
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
      // gameStateManagerがある場合のみupdateKeyStateを呼び出す
      if (this.gameStateManager && this.gameStateManager.updateKeyState) {
        this.gameStateManager.updateKeyState(event.key, false);
      }
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
  // テスト環境では詳細ログを出さない
  if (typeof process === 'undefined' || "development" !== 'test') {
    console.log('DOMContentLoaded イベントが発火しました');
  }

  try {
    if (typeof process === 'undefined' || "development" !== 'test') {
      console.log('ゲームの初期化を開始します...');
      // キャンバスの状態を確認
      var canvas = document.getElementById('game');
      if (canvas) {
        console.log('キャンバスのサイズ:', canvas.width, 'x', canvas.height);
        console.log('キャンバスのスタイルサイズ:', canvas.style.width, 'x', canvas.style.height);
      } else {
        console.error('キャンバス要素が見つかりません');
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWLENBQ0Y7OztFQUNEQyxNQUFNLEVB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RUFBRUEsS0FBSyxDQUFDO01BQzlEO0lBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NpRUN0TUg7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNK00sZUFBZSxHQUFHO0FBQzdCO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMzQzs7QUFDRDtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDeEM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDekM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDNUMsQ0FDRjs7OztBQUVNLElBQU1DLFdBQVcsR0FBRztBQUN6QjtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUs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QUU7SUFDZEQsT0FBTyxDQUFDQyxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztJQUM1Q3dKLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQztFQUM5QztBQUNGLENBQUMsQ0FBQzs7QUFFRjtBQUNBLElBQUk1QyxJQUFzQyxFQUFFO0VBQzFDaUUsTUFBTSxDQUFDOEksTUFBTSxHQUFHOUksTUFBTSxDQUFDOEksTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQzlJLE1BQU0sQ0FBQzhJLE1BQU0sQ0FBQ3pJLElBQUksR0FBR0EsMENBQUk7QUFDM0IsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvbnN0YW50cy9nYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL0JvYXJkLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL0dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2NvcmUvR2FtZVN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9Ib2xkTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9QaWVjZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3JlbmRlcmluZy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvcm90YXRpb24vUm90YXRpb25TeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3Njb3JpbmcvU2NvcmVDYWxjdWxhdG9yLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdGF0ZS9HYW1lU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3VpL0dhbWVVSS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIHI7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRoSG9sZXMgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmV4cG9ydCB7IF9hcnJheVdpdGhvdXRIb2xlcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGEsIG4pIHtcbiAgaWYgKCEoYSBpbnN0YW5jZW9mIG4pKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xufVxuZXhwb3J0IHsgX2NsYXNzQ2FsbENoZWNrIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gIGZvciAodmFyIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgIHZhciBvID0gclt0XTtcbiAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlO1xufVxuZXhwb3J0IHsgX2NyZWF0ZUNsYXNzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbmV4cG9ydCB7IF9pdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBsKSB7XG4gIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiByW1N5bWJvbC5pdGVyYXRvcl0gfHwgcltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgdSxcbiAgICAgIGEgPSBbXSxcbiAgICAgIGYgPSAhMCxcbiAgICAgIG8gPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICBpZiAoT2JqZWN0KHQpICE9PSB0KSByZXR1cm47XG4gICAgICAgIGYgPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBvID0gITAsIG4gPSByO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWYgJiYgbnVsbCAhPSB0W1wicmV0dXJuXCJdICYmICh1ID0gdFtcInJldHVyblwiXSgpLCBPYmplY3QodSkgIT09IHUpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbn1cbmV4cG9ydCB7IF9pdGVyYWJsZVRvQXJyYXlMaW1pdCBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmV4cG9ydCB7IF9ub25JdGVyYWJsZVJlc3QgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVTcHJlYWQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShyLCBlKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBlKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBlKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn1cbmV4cG9ydCB7IF9zbGljZWRUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheShyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZXhwb3J0IHsgX3RvQ29uc3VtYWJsZUFycmF5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5leHBvcnQgeyB0b1ByaW1pdGl2ZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufVxuZXhwb3J0IHsgdG9Qcm9wZXJ0eUtleSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmV4cG9ydCB7IF90eXBlb2YgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IHQgJiYgci5jb25zdHJ1Y3RvciAmJiAodCA9IHIuY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IHQgfHwgXCJTZXRcIiA9PT0gdCA/IEFycmF5LmZyb20ocikgOiBcIkFyZ3VtZW50c1wiID09PSB0IHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpID8gYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuZXhwb3J0IHsgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyog44K544K/44Kk44Or44Gv5b6M44Gn6L+95YqgICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIOOCsuODvOODoOOBruWumuaVsOWumue+qVxuZXhwb3J0IGNvbnN0IEdBTUVfQ09OU1RBTlRTID0ge1xuICBDT0xTOiAxMCwgLy8g44OV44Kj44O844Or44OJ44Gu5bmF77yI44OW44Ot44OD44Kv5pWw77yJXG4gIFJPV1M6IDIwLCAvLyDjg5XjgqPjg7zjg6vjg4njga7pq5jjgZXvvIjjg5bjg63jg4Pjgq/mlbDvvIlcbiAgQkxPQ0tfU0laRTogMjAsIC8vIDHjg5bjg63jg4Pjgq/jga7jg5Tjgq/jgrvjg6vjgrXjgqTjgrpcbiAgU0NPUkVfVEFCTEU6IHtcbiAgICAxOiA0MCwgICAvLyAx6KGM5raI44GXXG4gICAgMjogMTAwLCAgLy8gMuihjOa2iOOBl1xuICAgIDM6IDMwMCwgIC8vIDPooYzmtojjgZdcbiAgICA0OiAxMjAwICAvLyA06KGM5raI44GX77yI44OG44OI44Oq44K577yJXG4gIH0sXG4gIFNIQVBFUzogW1xuICAgIC8vIElcbiAgICBbXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMSwgMSwgMSwgMV0sXG4gICAgICBbMCwgMCwgMCwgMF0sXG4gICAgICBbMCwgMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIE9cbiAgICBbXG4gICAgICBbMiwgMl0sXG4gICAgICBbMiwgMl1cbiAgICBdLFxuICAgIC8vIFRcbiAgICBbXG4gICAgICBbMCwgMywgMF0sXG4gICAgICBbMywgMywgM10sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIExcbiAgICBbXG4gICAgICBbNCwgMCwgMF0sXG4gICAgICBbNCwgNCwgNF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIEpcbiAgICBbXG4gICAgICBbMCwgMCwgNV0sXG4gICAgICBbNSwgNSwgNV0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFpcbiAgICBbXG4gICAgICBbNiwgNiwgMF0sXG4gICAgICBbMCwgNiwgNl0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdLFxuICAgIC8vIFNcbiAgICBbXG4gICAgICBbMCwgNywgN10sXG4gICAgICBbNywgNywgMF0sXG4gICAgICBbMCwgMCwgMF1cbiAgICBdXG4gIF0sXG4gIENPTE9SUzogW1xuICAgICcjMDAwMDAwJywgLy8gMDog56m6XG4gICAgJyMwMEZGRkYnLCAvLyAxOiBJICjjgrfjgqLjg7MpXG4gICAgJyNGRkZGMDAnLCAvLyAyOiBPICjpu4ToibIpXG4gICAgJyM4MDAwODAnLCAvLyAzOiBUICjntKspXG4gICAgJyNGRkE1MDAnLCAvLyA0OiBMICjjgqrjg6zjg7PjgrgpXG4gICAgJyMwMDAwRkYnLCAvLyA1OiBKICjpnZIpXG4gICAgJyNGRjAwMDAnLCAvLyA2OiBaICjotaQpXG4gICAgJyMwMDgwMDAnICAvLyA3OiBTICjnt5EpXG4gIF0sXG4gIEdBTUVfU1RBVEVTOiB7XG4gICAgSU5JVDogJ0lOSVQnLFxuICAgIFBMQVlJTkc6ICdQTEFZSU5HJyxcbiAgICBQQVVTRUQ6ICdQQVVTRUQnLFxuICAgIEdBTUVfT1ZFUjogJ0dBTUVfT1ZFUidcbiAgfVxufTtcbiIsIi8vIEJvYXJk44Kv44Op44K5XG4vLyDjg4bjg4jjg6rjgrnjga7nm6TpnaLnrqHnkIbjgajjg63jgrjjg4Pjgq/jgpLmi4XlvZNcblxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjApIHtcbiAgICB0aGlzLmNvbHMgPSBjb2xzO1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jbGVhcigpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5ncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdGhpcy5yb3dzIH0sICgpID0+IEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gIH1cblxuICBpc0luc2lkZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPj0gMCAmJiB4IDwgdGhpcy5jb2xzICYmIHkgPj0gMCAmJiB5IDwgdGhpcy5yb3dzO1xuICB9XG5cbiAgaXNFbXB0eSh4LCB5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbnNpZGUoeCwgeSkgJiYgdGhpcy5ncmlkW3ldW3hdID09PSAwO1xuICB9XG5cbiAgc2V0Q2VsbCh4LCB5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlzSW5zaWRlKHgsIHkpKSB0aGlzLmdyaWRbeV1beF0gPSB2YWx1ZTtcbiAgfVxuXG4gIGdldENlbGwoeCwgeSkge1xuICAgIGlmICghdGhpcy5pc0luc2lkZSh4LCB5KSB8fCAhdGhpcy5ncmlkW3ldKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ3JpZFt5XVt4XTtcbiAgfVxuXG4gIG1lcmdlKHBpZWNlKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcGllY2UubWF0cml4W3ldLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChwaWVjZS5tYXRyaXhbeV1beF0pIHtcbiAgICAgICAgICB0aGlzLnNldENlbGwocGllY2UucG9zLnggKyB4LCBwaWVjZS5wb3MueSArIHksIHBpZWNlLm1hdHJpeFt5XVt4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhckxpbmVzKCkge1xuICAgIGlmICghdGhpcy5ncmlkIHx8ICFBcnJheS5pc0FycmF5KHRoaXMuZ3JpZCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgZ3JpZCBzdGF0ZScpO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIGxldCBjbGVhcmVkID0gMDtcbiAgICBjb25zdCBuZXdHcmlkID0gW107XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmdyaWQubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMuZ3JpZFt5XTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3cgYXQgaW5kZXggJHt5fTpgLCByb3cpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHJvdy5ldmVyeShjZWxsID0+IGNlbGwgIT09IDApKSB7XG4gICAgICAgICAgY2xlYXJlZCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0dyaWQucHVzaChbLi4ucm93XSk7IC8vIOihjOOBruOCs+ODlOODvOOCkuS9nOaIkOOBl+OBpuWPgueFp+OCkumBv+OBkeOCi1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwcm9jZXNzaW5nIHJvdyAke3l9OmAsIGVycm9yKTtcbiAgICAgICAgbmV3R3JpZC5wdXNoKFsuLi5yb3ddKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8g5YmK6Zmk44GV44KM44Gf6KGM44Gu5YiG44Gg44GR56m644Gu6KGM44KS5LiK44Gr6L+95YqgXG4gICAgd2hpbGUgKG5ld0dyaWQubGVuZ3RoIDwgdGhpcy5yb3dzKSB7XG4gICAgICBuZXdHcmlkLnVuc2hpZnQoQXJyYXkodGhpcy5jb2xzKS5maWxsKDApKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5ncmlkID0gbmV3R3JpZDtcbiAgICByZXR1cm4gY2xlYXJlZDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IEdhbWVTdGF0aXN0aWNzIH0gZnJvbSAnLi9HYW1lU3RhdGVNYW5hZ2VyLmpzJztcbmltcG9ydCB7IFBpZWNlTWFuYWdlciB9IGZyb20gJy4vUGllY2VNYW5hZ2VyLmpzJztcbmltcG9ydCB7IEhvbGRNYW5hZ2VyIH0gZnJvbSAnLi9Ib2xkTWFuYWdlci5qcyc7XG5cblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcihjb2xzID0gMTAsIHJvd3MgPSAyMCkge1xuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoY29scywgcm93cyk7XG4gICAgdGhpcy5nYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRpc3RpY3MoKTtcbiAgICB0aGlzLnBpZWNlTWFuYWdlciA9IG5ldyBQaWVjZU1hbmFnZXIoY29scywgcm93cyk7XG4gICAgdGhpcy5ob2xkTWFuYWdlciA9IG5ldyBIb2xkTWFuYWdlcih0aGlzLnBpZWNlTWFuYWdlcik7XG4gICAgXG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgZ2V0IGRyb3BJbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lU3RhdGUuZHJvcEludGVydmFsO1xuICB9XG5cbiAgZ2V0IGxldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVTdGF0ZS5sZXZlbDtcbiAgfVxuXG4gIGdldCBsaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lU3RhdGUubGluZXM7XG4gIH1cblxuICBnZXQgc2NvcmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVN0YXRlLnNjb3JlO1xuICB9XG5cbiAgZ2V0IGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZVN0YXRlLmlzR2FtZU92ZXI7XG4gIH1cblxuICBnZXQgcGF1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVTdGF0ZS5wYXVzZWQ7XG4gIH1cblxuICBnZXQgcGllY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucGllY2VNYW5hZ2VyLmdldEN1cnJlbnRQaWVjZSgpO1xuICB9XG5cbiAgZ2V0IG5leHRQaWVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5waWVjZU1hbmFnZXIuZ2V0TmV4dFBpZWNlKCk7XG4gIH1cblxuICBnZXQgaGVsZFBpZWNlKCkge1xuICAgIHJldHVybiB0aGlzLmhvbGRNYW5hZ2VyLmdldEhlbGRQaWVjZSgpO1xuICB9XG5cbiAgZ2V0IGNhbkhvbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaG9sZE1hbmFnZXIuY2FuSG9sZFBpZWNlKCk7XG4gIH1cblxuICBzdGFydFNvZnREcm9wKCkge1xuICAgIHRoaXMuZ2FtZVN0YXRlLnN0YXJ0U29mdERyb3AoKTtcbiAgfVxuXG4gIHN0b3BTb2Z0RHJvcCgpIHtcbiAgICB0aGlzLmdhbWVTdGF0ZS5zdG9wU29mdERyb3AoKTtcbiAgfVxuICBcbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMuZ2FtZVN0YXRlLnJlc2V0KCk7XG4gICAgdGhpcy5waWVjZU1hbmFnZXIucmVzZXQoKTtcbiAgICB0aGlzLmhvbGRNYW5hZ2VyLnJlc2V0KCk7XG4gIH1cbiAgXG4gIFxuICBtb3ZlUGllY2UoZHgpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucGllY2VNYW5hZ2VyLm1vdmVQaWVjZShkeCwgKCkgPT4gdGhpcy5oYXNDb2xsaXNpb24oKSk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDooZ3nqoHliKTlrprjgpLooYzjgYZcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOihneeqgeOBl+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgaGFzQ29sbGlzaW9uKCkge1xuICAgIGNvbnN0IHBpZWNlID0gdGhpcy5waWVjZU1hbmFnZXIuZ2V0Q3VycmVudFBpZWNlKCk7XG4gICAgaWYgKCFwaWVjZSB8fCAhcGllY2UubWF0cml4IHx8ICFwaWVjZS5wb3MpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBwaWVjZSBkYXRhIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gcGllY2U7XG4gICAgXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hdHJpeCkgfHwgdHlwZW9mIHBvcy54ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgcG9zLnkgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbWF0cml4IG9yIHBvc2l0aW9uIGRhdGEnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3Qgcm93ID0gbWF0cml4W3ldO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIHJvdyBhdCBpbmRleCAke3l9OmAsIHJvdyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHJvdy5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocm93W3hdICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRYID0gcG9zLnggKyB4O1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBib2FyZFggPCAwIHx8XG4gICAgICAgICAgICBib2FyZFggPj0gdGhpcy5ib2FyZC5jb2xzIHx8XG4gICAgICAgICAgICBib2FyZFkgPj0gdGhpcy5ib2FyZC5yb3dzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIFxuICAgICAgICAgICAgICB0aGlzLmJvYXJkLmdyaWRbYm9hcmRZXSAmJiBcbiAgICAgICAgICAgICAgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV1bYm9hcmRYXSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgc3Bhd25QaWVjZSgpIHtcbiAgICB0aGlzLnBpZWNlTWFuYWdlci5zcGF3bk5ld1BpZWNlKCk7XG4gICAgdGhpcy5ob2xkTWFuYWdlci5lbmFibGVIb2xkKCk7XG4gICAgXG4gICAgY29uc3QgcGllY2UgPSB0aGlzLnBpZWNlTWFuYWdlci5nZXRDdXJyZW50UGllY2UoKTtcbiAgICBpZiAocGllY2UpIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsWSA9IHBpZWNlLnBvcy55O1xuICAgICAgcGllY2UucG9zLnkgPSAwO1xuXG4gICAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgICB0aGlzLmdhbWVTdGF0ZS5zZXRHYW1lT3ZlcigpO1xuICAgICAgICB0aGlzLnBpZWNlTWFuYWdlci5jbGVhckN1cnJlbnRQaWVjZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGllY2UucG9zLnkgPSBvcmlnaW5hbFk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gIGRyb3BQaWVjZSgpIHtcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgZHJvcHBlZCA9IHRoaXMucGllY2VNYW5hZ2VyLmRyb3BQaWVjZSgoKSA9PiB0aGlzLmhhc0NvbGxpc2lvbigpKTtcbiAgICBcbiAgICBpZiAoIWRyb3BwZWQpIHtcbiAgICAgIHRoaXMubWVyZ2VQaWVjZSgpO1xuICAgICAgXG4gICAgICBjb25zdCBsaW5lc0NsZWFyZWQgPSB0aGlzLmJvYXJkLmNsZWFyTGluZXMoKTtcbiAgICAgIGlmIChsaW5lc0NsZWFyZWQgPiAwKSB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlLmFkZExpbmVzKGxpbmVzQ2xlYXJlZCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuc3Bhd25QaWVjZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgbWVyZ2VQaWVjZSgpIHtcbiAgICBjb25zdCBwaWVjZSA9IHRoaXMucGllY2VNYW5hZ2VyLmdldEN1cnJlbnRQaWVjZSgpO1xuICAgIGlmICghcGllY2UpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSBwaWVjZTtcbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXRyaXhbeV0ubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKG1hdHJpeFt5XVt4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBjb25zdCBib2FyZFggPSBwb3MueCArIHg7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIGJvYXJkWSA8IHRoaXMuYm9hcmQucm93cyAmJiBib2FyZFggPj0gMCAmJiBib2FyZFggPCB0aGlzLmJvYXJkLmNvbHMpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gPSBtYXRyaXhbeV1beF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gIHJvdGF0ZVBpZWNlKGRpcikge1xuICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5waWVjZU1hbmFnZXIucm90YXRlUGllY2UoZGlyLCAoKSA9PiB0aGlzLmhhc0NvbGxpc2lvbigpKTtcbiAgfVxuXG4gIGhvbGRQaWVjZSgpIHtcbiAgICBjb25zdCBzdWNjZXNzID0gdGhpcy5ob2xkTWFuYWdlci5ob2xkUGllY2UodGhpcy5pc0dhbWVPdmVyLCB0aGlzLnBhdXNlZCk7XG4gICAgXG4gICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgIGNvbnN0IHBpZWNlID0gdGhpcy5waWVjZU1hbmFnZXIuZ2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICBpZiAocGllY2UpIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxZID0gcGllY2UucG9zLnk7XG4gICAgICAgIHBpZWNlLnBvcy55ID0gMDtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICAgICAgdGhpcy5nYW1lU3RhdGUuc2V0R2FtZU92ZXIoKTtcbiAgICAgICAgICB0aGlzLnBpZWNlTWFuYWdlci5jbGVhckN1cnJlbnRQaWVjZSgpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwaWVjZS5wb3MueSA9IG9yaWdpbmFsWTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc3VjY2VzcztcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBTY29yZUNhbGN1bGF0b3IgfSBmcm9tICcuLi9zY29yaW5nL1Njb3JlQ2FsY3VsYXRvci5qcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGlzdGljcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2NvcmVDYWxjdWxhdG9yID0gbmV3IFNjb3JlQ2FsY3VsYXRvcigpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMubGluZXMgPSAwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5sZXZlbFNwZWVkcyA9IFtcbiAgICAgIDEwMDAsIDkwMCwgODAwLCA3MDAsIDYwMCxcbiAgICAgIDUwMCwgNDAwLCAzMDAsIDIwMCwgMTAwXG4gICAgXTtcbiAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSAxMDtcbiAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gICAgdGhpcy5pc1NvZnREcm9wID0gZmFsc2U7XG4gIH1cblxuICBnZXREcm9wSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IE1hdGgubWluKHRoaXMubGV2ZWwgLSAxLCB0aGlzLmxldmVsU3BlZWRzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmxldmVsU3BlZWRzW2xldmVsSW5kZXhdO1xuICB9XG5cbiAgc3RhcnRTb2Z0RHJvcCgpIHtcbiAgICBpZiAoIXRoaXMuaXNTb2Z0RHJvcCkge1xuICAgICAgdGhpcy5pc1NvZnREcm9wID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJvcEludGVydmFsID0gNTA7XG4gICAgfVxuICB9XG5cbiAgc3RvcFNvZnREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzU29mdERyb3ApIHtcbiAgICAgIHRoaXMuaXNTb2Z0RHJvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExpbmVzKGxpbmVzQ2xlYXJlZCkge1xuICAgIHRoaXMubGluZXMgKz0gbGluZXNDbGVhcmVkO1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5zY29yZUNhbGN1bGF0b3IuY2FsY3VsYXRlTGluZVNjb3JlKGxpbmVzQ2xlYXJlZCwgdGhpcy5sZXZlbCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tMZXZlbFVwKCk7XG4gIH1cblxuICBjaGVja0xldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmVDYWxjdWxhdG9yLnNob3VsZExldmVsVXAodGhpcy5saW5lcywgdGhpcy5sZXZlbCkpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLnNjb3JlQ2FsY3VsYXRvci5jYWxjdWxhdGVMZXZlbCh0aGlzLmxpbmVzKTtcbiAgICAgIHRoaXMuZHJvcEludGVydmFsID0gdGhpcy5nZXREcm9wSW50ZXJ2YWwoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRHYW1lT3ZlcigpIHtcbiAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSB0cnVlO1xuICB9XG5cbiAgdW5wYXVzZSgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIEhvbGRNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IocGllY2VNYW5hZ2VyKSB7XG4gICAgdGhpcy5waWVjZU1hbmFnZXIgPSBwaWVjZU1hbmFnZXI7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5oZWxkUGllY2UgPSBudWxsO1xuICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gIH1cblxuICBob2xkUGllY2UoaXNHYW1lT3ZlciwgaXNQYXVzZWQpIHtcbiAgICBpZiAoaXNHYW1lT3ZlciB8fCBpc1BhdXNlZCkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGlmICghdGhpcy5jYW5Ib2xkKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgY29uc3QgY3VycmVudFBpZWNlID0gdGhpcy5waWVjZU1hbmFnZXIuZ2V0Q3VycmVudFBpZWNlKCk7XG4gICAgaWYgKCFjdXJyZW50UGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcbiAgICBcbiAgICBpZiAodGhpcy5oZWxkUGllY2UgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVsZFBpZWNlID0gY3VycmVudFBpZWNlO1xuICAgICAgdGhpcy5waWVjZU1hbmFnZXIuc3Bhd25OZXdQaWVjZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZW1wID0gY3VycmVudFBpZWNlO1xuICAgICAgdGhpcy5waWVjZU1hbmFnZXIuY3VycmVudFBpZWNlID0gdGhpcy5oZWxkUGllY2U7XG4gICAgICB0aGlzLmhlbGRQaWVjZSA9IHRlbXA7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG5ld1BpZWNlID0gdGhpcy5waWVjZU1hbmFnZXIuZ2V0Q3VycmVudFBpZWNlKCk7XG4gICAgaWYgKG5ld1BpZWNlKSB7XG4gICAgICBjb25zdCBtYXRyaXggPSBuZXdQaWVjZS5tYXRyaXg7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigodGhpcy5waWVjZU1hbmFnZXIuYm9hcmRDb2xzIC0gbWF0cml4WzBdLmxlbmd0aCkgLyAyKTtcbiAgICAgIGNvbnN0IHkgPSAtbWF0cml4Lmxlbmd0aDtcbiAgICAgIG5ld1BpZWNlLnBvcyA9IHsgeCwgeSB9O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGVuYWJsZUhvbGQoKSB7XG4gICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldEhlbGRQaWVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWxkUGllY2U7XG4gIH1cblxuICBjYW5Ib2xkUGllY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FuSG9sZDtcbiAgfVxufSIsIi8vIFBpZWNl44Kv44Op44K5XG4vLyDjg4bjg4jjg63jg5/jg47jga7lvaLjg7vkvY3nva7jg7vlm57ou6LjgpLnrqHnkIZcblxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgdHlwZSA9ICdUJykge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMucG9zID0geyAuLi5wb3MgfTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLyDjg5Tjg7zjgrnjga7nqK7poZ4gKEksIEosIEwsIE8sIFMsIFQsIFopXG4gICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDsgLy8gMDogMOW6piwgMTogOTDluqYsIDI6IDE4MOW6piwgMzogMjcw5bqmXG4gIH1cblxuICBtb3ZlKGR4LCBkeSkge1xuICAgIHRoaXMucG9zLnggKz0gZHg7XG4gICAgdGhpcy5wb3MueSArPSBkeTtcbiAgfVxuXG4gIHJvdGF0ZShkaXIpIHtcbiAgICAvLyBkaXI6IDE95pmC6KiI5Zue44KKLCAtMT3lj43mmYLoqIjlm57jgopcbiAgICBpZiAoIXRoaXMubWF0cml4IHx8ICFBcnJheS5pc0FycmF5KHRoaXMubWF0cml4KSB8fCAhdGhpcy5tYXRyaXhbMF0gfHwgIUFycmF5LmlzQXJyYXkodGhpcy5tYXRyaXhbMF0pKSByZXR1cm47XG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCBNID0gdGhpcy5tYXRyaXhbMF0ubGVuZ3RoO1xuICAgIGxldCByb3RhdGVkO1xuICAgIGlmIChkaXIgPT09IDEpIHtcbiAgICAgIC8vIOaZguioiOWbnuOCijog6Lui572u44GX44Gm5ZCE6KGM44KS5Y+N6LuiXG4gICAgICByb3RhdGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTSB9LCAoXywgeCkgPT5cbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoXywgeSkgPT4gKHRoaXMubWF0cml4W04gLSB5IC0gMV0gPyB0aGlzLm1hdHJpeFtOIC0geSAtIDFdW3hdIDogMCkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlj43mmYLoqIjlm57jgoo6IOi7oue9ruOBl+OBpuWQhOWIl+OCkuWPjei7olxuICAgICAgcm90YXRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE0gfSwgKF8sIHgpID0+XG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IE4gfSwgKF8sIHkpID0+ICh0aGlzLm1hdHJpeFt5XSA/IHRoaXMubWF0cml4W3ldW00gLSB4IC0gMV0gOiAwKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubWF0cml4ID0gcm90YXRlZDtcbiAgICAvLyDlm57ou6LnirbmhYvjgpLmm7TmlrBcbiAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAodGhpcy5yb3RhdGlvblN0YXRlICsgKGRpciA9PT0gMSA/IDEgOiAzKSkgJSA0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4vUGllY2UuanMnO1xuaW1wb3J0IHsgUm90YXRpb25TeXN0ZW0gfSBmcm9tICcuLi9yb3RhdGlvbi9Sb3RhdGlvblN5c3RlbS5qcyc7XG5cbmNvbnN0IFRFVFJPTUlOT19NQVAgPSB7XG4gIEk6IFtcbiAgICBbMCwgMCwgMCwgMF0sXG4gICAgWzEsIDEsIDEsIDFdLFxuICAgIFswLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMF0sXG4gIF0sXG4gIEo6IFtcbiAgICBbMiwgMCwgMF0sXG4gICAgWzIsIDIsIDJdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgTDogW1xuICAgIFswLCAwLCAzXSxcbiAgICBbMywgMywgM10sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBPOiBbXG4gICAgWzQsIDRdLFxuICAgIFs0LCA0XSxcbiAgXSxcbiAgUzogW1xuICAgIFswLCA1LCA1XSxcbiAgICBbNSwgNSwgMF0sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBUOiBbXG4gICAgWzAsIDYsIDBdLFxuICAgIFs2LCA2LCA2XSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIFo6IFtcbiAgICBbNywgNywgMF0sXG4gICAgWzAsIDcsIDddLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjbGFzcyBQaWVjZU1hbmFnZXIge1xuICBjb25zdHJ1Y3Rvcihib2FyZENvbHMsIGJvYXJkUm93cykge1xuICAgIHRoaXMuYm9hcmRDb2xzID0gYm9hcmRDb2xzO1xuICAgIHRoaXMuYm9hcmRSb3dzID0gYm9hcmRSb3dzO1xuICAgIHRoaXMucm90YXRpb25TeXN0ZW0gPSBuZXcgUm90YXRpb25TeXN0ZW0oKTtcbiAgICBcbiAgICB0aGlzLnRldHJvbWlub3MgPSBbXG4gICAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICAgIFtbMiwgMl0sIFsyLCAyXV0sXG4gICAgICBbWzAsIDMsIDBdLCBbMywgMywgM11dLFxuICAgICAgW1swLCA0LCA0XSwgWzQsIDQsIDBdXSxcbiAgICAgIFtbNSwgNSwgMF0sIFswLCA1LCA1XV0sXG4gICAgICBbWzYsIDAsIDBdLCBbNiwgNiwgNl1dLFxuICAgICAgW1swLCAwLCA3XSwgWzcsIDcsIDddXSxcbiAgICBdO1xuICAgIFxuICAgIHRoaXMuY3VycmVudFBpZWNlID0gbnVsbDtcbiAgICB0aGlzLm5leHRQaWVjZSA9IG51bGw7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICB9XG5cbiAgY3JlYXRlUGllY2UoaW5kZXgpIHtcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLnRldHJvbWlub3NbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LmtleXMoVEVUUk9NSU5PX01BUClbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigodGhpcy5ib2FyZENvbHMgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDIpO1xuICAgIGNvbnN0IHkgPSAtbWF0cml4Lmxlbmd0aDtcbiAgICByZXR1cm4gbmV3IFBpZWNlKG1hdHJpeCwgeyB4LCB5IH0sIHR5cGUpO1xuICB9XG5cbiAgc3Bhd25OZXdQaWVjZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMubmV4dFBpZWNlIHx8IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFBpZWNlO1xuICB9XG5cbiAgbW92ZVBpZWNlKGR4LCBjb2xsaXNpb25DaGVja2VyKSB7XG4gICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZHgsIDApO1xuICAgIFxuICAgIGlmIChjb2xsaXNpb25DaGVja2VyKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoLWR4LCAwKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBkcm9wUGllY2UoY29sbGlzaW9uQ2hlY2tlcikge1xuICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKDAsIDEpO1xuICAgIFxuICAgIGlmIChjb2xsaXNpb25DaGVja2VyKCkpIHtcbiAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoMCwgLTEpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJvdGF0ZVBpZWNlKGRpciwgY29sbGlzaW9uQ2hlY2tlcikge1xuICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UpIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ05vIHBpZWNlIHRvIHJvdGF0ZScpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucm90YXRpb25TeXN0ZW0uYXR0ZW1wdFJvdGF0aW9uKFxuICAgICAgdGhpcy5jdXJyZW50UGllY2UsXG4gICAgICBkaXIsXG4gICAgICBjb2xsaXNpb25DaGVja2VyXG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQuc3VjY2VzcztcbiAgfVxuXG4gIGdldEN1cnJlbnRQaWVjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGllY2U7XG4gIH1cblxuICBnZXROZXh0UGllY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFBpZWNlO1xuICB9XG5cbiAgY2xlYXJDdXJyZW50UGllY2UoKSB7XG4gICAgdGhpcy5jdXJyZW50UGllY2UgPSBudWxsO1xuICB9XG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vY29yZS9HYW1lLmpzJztcbmltcG9ydCB7IEdBTUVfQ09OU1RBTlRTIH0gZnJvbSAnLi9jb25zdGFudHMvZ2FtZS5qcyc7XG5pbXBvcnQgR2FtZVVJIGZyb20gXCIuL3VpL0dhbWVVSS5qc1wiO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3JlbmRlcmluZy9SZW5kZXJlci5qcyc7XG5pbXBvcnQgeyBHYW1lU3RhdGVNYW5hZ2VyIH0gZnJvbSAnLi9zdGF0ZS9HYW1lU3RhdGVNYW5hZ2VyLmpzJztcblxuLy8gLS0tIOOCsOODreODvOODkOODq+WkieaVsOOBqOeKtuaFi+euoeeQhiAtLS1cbmV4cG9ydCBsZXQgdGV0cmlzR2FtZSA9IG5ldyBHYW1lKCk7XG5leHBvcnQgY29uc3QgZXZlbnRNYW5hZ2VyID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlTWFuYWdlciA9IG5ldyBHYW1lU3RhdGVNYW5hZ2VyKEdBTUVfQ09OU1RBTlRTLlJPV1MsIEdBTUVfQ09OU1RBTlRTLkNPTFMpO1xuZXhwb3J0IGxldCByZW5kZXJlciA9IG51bGw7XG5cbi8vIOW+jOaWueS6kuaPm+aAp+OBruOBn+OCgeOBrmdhbWVTdGF0ZeODl+ODreOCreOCt1xuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZSA9IG5ldyBQcm94eShnYW1lU3RhdGVNYW5hZ2VyLnN0YXRlLCB7XG4gIGdldCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAocHJvcCA9PT0gJ2luaXRCb2FyZCcpIHtcbiAgICAgIHJldHVybiAoKSA9PiBnYW1lU3RhdGVNYW5hZ2VyLmluaXRCb2FyZCgpO1xuICAgIH1cbiAgICBpZiAocHJvcCA9PT0gJ2xvZ1N0YXRlJykge1xuICAgICAgcmV0dXJuICgpID0+IGdhbWVTdGF0ZU1hbmFnZXIubG9nU3RhdGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgfSxcbiAgc2V0KHRhcmdldCwgcHJvcCwgdmFsdWUpIHtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldChwcm9wLCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0pO1xuXG4vLyAtLS0g5o+P55S76Zai6YCjIC0tLSBcbmZ1bmN0aW9uIGRyYXcoKSB7XG4gIGlmICghcmVuZGVyZXIpIHtcbiAgICAvLyDjg4bjgrnjg4jnkrDlooPjgafjga/orablkYrjgpLlh7rjgZXjgarjgYRcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgIGNvbnNvbGUud2FybignUmVuZGVyZXIgbm90IGluaXRpYWxpemVkJyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWVTdGF0ZU1hbmFnZXIuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCBnYW1lRGF0YSA9IHtcbiAgICAgIGJvYXJkR3JpZDogdGV0cmlzR2FtZSAmJiB0ZXRyaXNHYW1lLmJvYXJkID8gdGV0cmlzR2FtZS5ib2FyZC5ncmlkIDogbnVsbCxcbiAgICAgIHBpZWNlOiBzdGF0ZS5waWVjZSxcbiAgICAgIG5leHRQaWVjZTogc3RhdGUubmV4dFBpZWNlLFxuICAgICAgaG9sZFBpZWNlOiBzdGF0ZS5ob2xkUGllY2VcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXBpZWNlLWNhbnZhcycpO1xuICAgIGNvbnN0IGhvbGRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob2xkLXBpZWNlLWNhbnZhcycpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihnYW1lRGF0YSwgbmV4dFBpZWNlQ2FudmFzLCBob2xkUGllY2VDYW52YXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgaW4gZHJhdyBmdW5jdGlvbjonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIFVJ5pu05pawIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xuICB1cGRhdGVTY29yZURpc3BsYXkoZ2FtZVN0YXRlLnNjb3JlKTtcbiAgdXBkYXRlTGluZXNEaXNwbGF5KGdhbWVTdGF0ZS5saW5lcyk7XG4gIHVwZGF0ZUxldmVsRGlzcGxheShnYW1lU3RhdGUubGV2ZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2NvcmVEaXNwbGF5KHNjb3JlKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBzY29yZSAhPT0gJ251bWJlcicgfHwgaXNOYU4oc2NvcmUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgc2NvcmUgdmFsdWU6Jywgc2NvcmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbiAgICBpZiAoc2NvcmVFbGVtZW50KSB7XG4gICAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzY29yZS50b1N0cmluZygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzY29yZSBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGluZXNEaXNwbGF5KGxpbmVzKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lcyAhPT0gJ251bWJlcicgfHwgaXNOYU4obGluZXMpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGluZXMgdmFsdWU6JywgbGluZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXMnKTtcbiAgICBpZiAobGluZXNFbGVtZW50KSB7XG4gICAgICBsaW5lc0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lcy50b1N0cmluZygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsaW5lcyBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGV2ZWxEaXNwbGF5KGxldmVsKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCAhPT0gJ251bWJlcicgfHwgaXNOYU4obGV2ZWwpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGV2ZWwgdmFsdWU6JywgbGV2ZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbiAgICBpZiAobGV2ZWxFbGVtZW50KSB7XG4gICAgICBsZXZlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsZXZlbC50b1N0cmluZygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsZXZlbCBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0g44Ky44O844Og44Ot44K444OD44KvIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZUdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlTWFuYWdlci5zeW5jV2l0aEdhbWUodGV0cmlzR2FtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICB0cnkge1xuICAgIGlmICghZ2FtZVN0YXRlTWFuYWdlci5pc1J1bm5pbmcoKSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGlmICghdGV0cmlzR2FtZSB8fCB0eXBlb2YgdGV0cmlzR2FtZS5kcm9wUGllY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdGV0cmlzR2FtZSBvYmplY3Qgb3IgbWlzc2luZyBkcm9wUGllY2UgbWV0aG9kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRyb3BwZWQgPSB0ZXRyaXNHYW1lLmRyb3BQaWVjZSgpO1xuICAgIC8vIOOBvuOBmuOCsuODvOODoOOCquODvOODkOODvOWIpOWumlxuICAgIGlmICh0ZXRyaXNHYW1lLmlzR2FtZU92ZXIpIHtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdpc0dhbWVPdmVyJywgdHJ1ZSk7XG4gICAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc3RvcEdhbWVMb29wKCk7XG4gICAgICBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpgJrluLjmmYLjga/lkIzmnJ9cbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICByZXR1cm4gZHJvcHBlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJEcm9wOicsIGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIHRyeSB7XG4gICAgaWYgKCFnYW1lU3RhdGVNYW5hZ2VyLmlzUnVubmluZygpKSByZXR1cm47XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lIHx8IHR5cGVvZiB0ZXRyaXNHYW1lLm1vdmVQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIG1vdmVQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgaWYgKHR5cGVvZiBkaXIgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZGlyZWN0aW9uIGZvciBwbGF5ZXJNb3ZlOicsIGRpcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcGxheWVyTW92ZTonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclJvdGF0ZShkaXIpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWdhbWVTdGF0ZU1hbmFnZXIuaXNSdW5uaW5nKCkpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUucm90YXRlUGllY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdGV0cmlzR2FtZSBvYmplY3Qgb3IgbWlzc2luZyByb3RhdGVQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgaWYgKHR5cGVvZiBkaXIgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZGlyZWN0aW9uIGZvciBwbGF5ZXJSb3RhdGU6JywgZGlyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGV0cmlzR2FtZS5yb3RhdGVQaWVjZShkaXIpO1xuICAgIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHBsYXllclJvdGF0ZTonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckhvbGQoKSB7XG4gIHRyeSB7XG4gICAgaWYgKCFnYW1lU3RhdGVNYW5hZ2VyLmlzUnVubmluZygpKSByZXR1cm47XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lIHx8IHR5cGVvZiB0ZXRyaXNHYW1lLmhvbGRQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIGhvbGRQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVzdWx0ID0gdGV0cmlzR2FtZS5ob2xkUGllY2UoKTtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcGxheWVySG9sZDonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIOOCsuODvOODoOODq+ODvOODlyAtLS1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUodGltZSA9IDApIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBnYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXRHYW1lTG9vcElkKGdhbWVMb29wSWQpO1xuICAgIFxuICAgIGlmICghZ2FtZVN0YXRlTWFuYWdlci5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIC8vIOWIneacn+WMluaZguOBr2xhc3RUaW1l44KS6Kit5a6aXG4gICAgaWYgKCFzdGF0ZS5sYXN0VGltZSkge1xuICAgICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2xhc3RUaW1lJywgdGltZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGFUaW1lID0gdGltZSAtIHN0YXRlLmxhc3RUaW1lO1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdsYXN0VGltZScsIHRpbWUpO1xuICAgIFxuICAgIC8vIOeVsOW4uOOBquODh+ODq+OCv+OCv+OCpOODoOOCkuOCueOCreODg+ODl++8iOODleODrOODvOODoOioiOeul+OBruWuieWumuaAp+WQkeS4iu+8iVxuICAgIGlmIChkZWx0YVRpbWUgPiAxMDAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xhcmdlIGRlbHRhIHRpbWUgZGV0ZWN0ZWQsIHNraXBwaW5nIGZyYW1lOicsIGRlbHRhVGltZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIOODieODreODg+ODl+WHpueQhlxuICAgIGlmICh0eXBlb2Ygc3RhdGUuZHJvcENvdW50ZXIgPT09ICdudW1iZXInICYmIHR5cGVvZiB0ZXRyaXNHYW1lLmRyb3BJbnRlcnZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IG5ld0Ryb3BDb3VudGVyID0gc3RhdGUuZHJvcENvdW50ZXIgKyBkZWx0YVRpbWU7XG4gICAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnZHJvcENvdW50ZXInLCBuZXdEcm9wQ291bnRlcik7XG4gICAgICBcbiAgICAgIGlmIChuZXdEcm9wQ291bnRlciA+IHRldHJpc0dhbWUuZHJvcEludGVydmFsKSB7XG4gICAgICAgIHBsYXllckRyb3AoKTtcbiAgICAgICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2Ryb3BDb3VudGVyJywgMCk7XG4gICAgICAgIC8vIOWNs+W6p+OBq+aPj+eUu+OCkuabtOaWsFxuICAgICAgICBkcmF3KCk7XG4gICAgICAgIHVwZGF0ZVVJKCk7XG4gICAgICB9IGVsc2UgaWYgKGRlbHRhVGltZSA8IDEwMCkgeyAvLyA2MEZQU+OBp+aPj+eUu+OBmeOCi+WgtOWQiOOAgTE2LjY3bXPjgZTjgajjgavmj4/nlLtcbiAgICAgICAgLy8g44K544Og44O844K644Gq44Ki44OL44Oh44O844K344On44Oz44Gu44Gf44KB44CB44OJ44Ot44OD44OX6ZaT44KC5o+P55S744KS5pu05pawXG4gICAgICAgIGRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGRyb3BDb3VudGVyIG9yIGRyb3BJbnRlcnZhbCB2YWx1ZXMnKTtcbiAgICAgIC8vIOeEoeWKueOBqueKtuaFi+OBruWgtOWQiOOBr+aPj+eUu+OBruOBv+Wun+ihjFxuICAgICAgZHJhdygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdHYW1lIGxvb3AgZXJyb3I6JywgZXJyb3IpO1xuICAgIC8vIOOCsuODvOODoOOCkuS4gOaZguWBnOatouOBl+OBpuOCqOODqeODvOOCkuWgseWRilxuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0UGF1c2VkKHRydWUpO1xuICAgIGNvbnNvbGUud2FybignR2FtZSBwYXVzZWQgZHVlIHRvIGVycm9yLiBQcmVzcyBSIHRvIHJlc2V0IHRoZSBnYW1lLicpO1xuICAgIFxuICAgIC8vIOOCqOODqeODvOeZuueUn+aZguOBp+OCguaPj+eUu+OBr+ippuihjOOBmeOCi1xuICAgIHRyeSB7XG4gICAgICBkcmF3KCk7XG4gICAgfSBjYXRjaCAoZHJhd0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEcmF3IGVycm9yIGR1cmluZyBlcnJvciByZWNvdmVyeTonLCBkcmF3RXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0g5Yid5pyf5YyW44Go44Kk44OZ44Oz44OI44OP44Oz44OJ44Oq44Oz44KwIC0tLVxuZXhwb3J0IGNvbnN0IGdhbWVVSSA9IG5ldyBHYW1lVUkoZ2FtZVN0YXRlLCB7XG4gIG1vdmVQaWVjZTogcGxheWVyTW92ZSxcbiAgZHJvcFBpZWNlOiBwbGF5ZXJEcm9wLFxuICByb3RhdGVQaWVjZTogcGxheWVyUm90YXRlLFxuICBob2xkUGllY2U6IHBsYXllckhvbGQsXG4gIHJlc2V0R2FtZSxcbiAgdXBkYXRlLFxuICBnZXREcm9wSW50ZXJ2YWw6ICgpID0+IHRldHJpc0dhbWUuZ2V0RHJvcEludGVydmFsKCksXG4gIHN0YXJ0U29mdERyb3A6ICgpID0+IHRldHJpc0dhbWUuc3RhcnRTb2Z0RHJvcCgpLFxuICBzdG9wU29mdERyb3A6ICgpID0+IHRldHJpc0dhbWUuc3RvcFNvZnREcm9wKCksXG59LCBnYW1lU3RhdGVNYW5hZ2VyKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgLy8g54q25oWL566h55CG5Zmo44KS44Oq44K744OD44OIXG4gIGdhbWVTdGF0ZU1hbmFnZXIucmVzZXQoKTtcbiAgXG4gIC8vIOOCsuODvOODoOOBruODquOCu+ODg+ODiFxuICB0ZXRyaXNHYW1lLnJlc2V0KCk7XG4gIFxuICAvLyDjgrLjg7zjg6DnirbmhYvjga7mm7TmlrDjgajmj4/nlLtcbiAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIHVwZGF0ZVVJKCk7XG4gIGRyYXcoKTtcbiAgXG4gIC8vIOOCsuODvOODoOODq+ODvOODl+OCkuWGjemWi1xuICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnbGFzdFRpbWUnLCAwKTtcbiAgY29uc3QgZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICBnYW1lU3RhdGVNYW5hZ2VyLnNldEdhbWVMb29wSWQoZ2FtZUxvb3BJZCk7XG4gIFxuICBjb25zb2xlLmxvZygn44Ky44O844Og44GM44Oq44K744OD44OI44GV44KM44G+44GX44Gf44CCJyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMob25LZXlEb3duLCBvbktleVVwKSB7XG4gIGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzKG9uS2V5RG93biwgb25LZXlVcCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoY2FudmFzKSB7XG4gICAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gZ2FtZVN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgZHJhdygpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIOODhuOCueODiOeUqOOBrnNldHVwRXZlbnRMaXN0ZW5lcnPplqLmlbDjgpLjgqjjgq/jgrnjg53jg7zjg4hcbmV4cG9ydCB7IHNldHVwRXZlbnRMaXN0ZW5lcnMgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIFxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKCFjYW52YXMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhc+imgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmICghY3R4KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCcyROOCs+ODs+ODhuOCreOCueODiOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIC8vIOOCsuODvOODoOOCueODhuODvOODiOOBruWIneacn+WMllxuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdjdHgnLCBjdHgpO1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdjYW52YXMnLCBjYW52YXMpO1xuICAgIFxuICAgIC8vIOODrOODs+ODgOODqeODvOOBruWIneacn+WMllxuICAgIGNvbnN0IHsgQ09MT1JTLCBCTE9DS19TSVpFIH0gPSBHQU1FX0NPTlNUQU5UUztcbiAgICByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihjYW52YXMsIENPTE9SUywgQkxPQ0tfU0laRSk7XG4gICAgXG4gICAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K66Kit5a6aXG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCk7XG4gICAgY2FudmFzLndpZHRoID0gc3RhdGUuQ09MUyAqIEJMT0NLX1NJWkU7XG4gICAgY2FudmFzLmhlaWdodCA9IHN0YXRlLlJPV1MgKiBCTE9DS19TSVpFO1xuICAgIFxuICAgIC8vIOODnOODvOODieOBruWIneacn+WMllxuICAgIGdhbWVTdGF0ZU1hbmFnZXIuaW5pdEJvYXJkKCk7XG4gICAgXG4gICAgLy8g44Kk44OZ44Oz44OI44Oq44K544OK44O844Gu6Kit5a6aXG4gICAgY29uc29sZS5sb2coJ+OCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumuOBl+OBvuOBmS4uLicpO1xuICAgIHNldHVwRXZlbnRMaXN0ZW5lcnMoZ2FtZVVJLm9uS2V5RG93bi5iaW5kKGdhbWVVSSksIGdhbWVVSS5vbktleVVwLmJpbmQoZ2FtZVVJKSk7XG4gICAgXG4gICAgLy8g44Ky44O844Og44Gu44Oq44K744OD44OIXG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOCkuODquOCu+ODg+ODiOOBl+OBvuOBmS4uLicpO1xuICAgIHJlc2V0R2FtZSgpO1xuICAgIFxuICAgIC8vIOWIneacn+aPj+eUu1xuICAgIGNvbnNvbGUubG9nKCfliJ3mnJ/mj4/nlLvjgpLlrp/ooYzjgZfjgb7jgZkuLi4nKTtcbiAgICBkcmF3KCk7XG4gICAgXG4gICAgLy8g44Ky44O844Og44Or44O844OX44KS6ZaL5aeLXG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOODq+ODvOODl+OCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdsYXN0VGltZScsIDApO1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdkcm9wQ291bnRlcicsIDApO1xuICAgIGNvbnN0IGdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldEdhbWVMb29wSWQoZ2FtZUxvb3BJZCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOBjOWujOS6huOBl+OBvuOBl+OBn+OAgicpO1xuICAgIFxuICAgIC8vIOODhuOCueODiOeUqOOBrui/lOOCiuWApFxuICAgIHJldHVybiB7XG4gICAgICBjYW52YXMsXG4gICAgICBldmVudE1hbmFnZXIsXG4gICAgICBnYW1lU3RhdGU6IGdhbWVTdGF0ZU1hbmFnZXIuZ2V0U3RhdGUoKSxcbiAgICAgIGluaXRHYW1lOiBpbml0LFxuICAgICAgcmVzZXRHYW1lLFxuICAgICAgc2V0dXBFdmVudExpc3RlbmVyczogc2V0dXBFdmVudExpc3RlbmVycy5iaW5kKG51bGwsIGdhbWVVSS5vbktleURvd24uYmluZChnYW1lVUkpLCBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSkpLFxuICAgICAgdXBkYXRlLFxuICAgICAgZHJhd1xuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vLyBpbml0R2FtZemWouaVsOOBr2luaXTjga7jgqjjgqTjg6rjgqLjgrnvvIjjg4bjgrnjg4jkupLmj5vmgKfjga7jgZ/jgoHvvIlcbmV4cG9ydCBmdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgaWYgKCFjYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBcbiAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2N0eCcsIGN0eCk7XG4gIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdjYW52YXMnLCBjYW52YXMpO1xuICBjb25zdCBzdGF0ZSA9IGdhbWVTdGF0ZU1hbmFnZXIuZ2V0U3RhdGUoKTtcbiAgY2FudmFzLndpZHRoID0gc3RhdGUuQ09MUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5ST1dTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgXG4gIHJldHVybiBjYW52YXM7XG59XG5cbi8vIC0tLSDjgqjjgq/jgrnjg53jg7zjg4jjgajjg5bjg6njgqbjgrblrp/ooYwgLS0tXG5cbmV4cG9ydCB7IGRyYXcgfTsgLy8gZHJhd+mWouaVsOOCkuOCqOOCr+OCueODneODvOODiFxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGV0cmlzR2FtZShuZXdHYW1lKSB7XG4gIHRldHJpc0dhbWUgPSBuZXdHYW1lO1xufVxuXG5jb25zdCBleHBvcnRzID0geyBpbml0LCBpbml0R2FtZSwgcGxheWVyTW92ZSwgcGxheWVyUm90YXRlLCBwbGF5ZXJEcm9wLCBwbGF5ZXJIb2xkLCBnYW1lVUksIGdhbWVTdGF0ZSwgZ2FtZVN0YXRlTWFuYWdlciwgcmVuZGVyZXIsIHJlc2V0R2FtZSwgdXBkYXRlLCBzZXR1cEV2ZW50TGlzdGVuZXJzLCBkcmF3LCB0ZXRyaXNHYW1lIH07XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzO1xuIiwiZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvcnMsIGJsb2NrU2l6ZSkge1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jb2xvcnMgPSBjb2xvcnM7XG4gICAgdGhpcy5ibG9ja1NpemUgPSBibG9ja1NpemU7XG4gICAgXG4gICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCcyRCDjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Oe44OI44Oq44OD44Kv44K544KS5o+P55S744GZ44KLXG4gICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IG1hdHJpeCAtIOaPj+eUu+OBmeOCi+ODnuODiOODquODg+OCr+OCuVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2Zmc2V0IC0g44Kq44OV44K744OD44OI5bqn5qiZIHt4LCB5fVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IGNvbG9ycyAtIOiJsuOBrumFjeWIl++8iOOCquODl+OCt+ODp+ODs+OAgeODh+ODleOCqeODq+ODiOOBryB0aGlzLmNvbG9yc++8iVxuICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tTaXplIC0g44OW44Ot44OD44Kv44K144Kk44K677yI44Kq44OX44K344On44Oz44CB44OH44OV44Kp44Or44OI44GvIHRoaXMuYmxvY2tTaXpl77yJXG4gICAqL1xuICBkcmF3TWF0cml4KG1hdHJpeCwgb2Zmc2V0LCBjb2xvcnMgPSB0aGlzLmNvbG9ycywgYmxvY2tTaXplID0gdGhpcy5ibG9ja1NpemUpIHtcbiAgICBpZiAoIXRoaXMuY3R4IHx8ICFtYXRyaXggfHwgIUFycmF5LmlzQXJyYXkobWF0cml4KSB8fCAhb2Zmc2V0IHx8ICFjb2xvcnMgfHwgIWJsb2NrU2l6ZSkge1xuICAgICAgY29uc29sZS53YXJuKCdkcmF3TWF0cml4OiBJbnZhbGlkIHBhcmFtZXRlcnMnLCB7IFxuICAgICAgICBoYXNDdHg6ICEhdGhpcy5jdHgsIFxuICAgICAgICBoYXNNYXRyaXg6ICEhbWF0cml4LCBcbiAgICAgICAgaGFzT2Zmc2V0OiAhIW9mZnNldCwgXG4gICAgICAgIGhhc0NvbG9yczogISFjb2xvcnMsIFxuICAgICAgICBoYXNCbG9ja1NpemU6ICEhYmxvY2tTaXplIFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0LnggIT09ICdudW1iZXInIHx8IHR5cGVvZiBvZmZzZXQueSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignZHJhd01hdHJpeDogSW52YWxpZCBvZmZzZXQgdmFsdWVzJywgb2Zmc2V0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgbWF0cml4LmZvckVhY2goKHJvdywgeSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHJldHVybjtcbiAgICAgIHJvdy5mb3JFYWNoKCh2YWx1ZSwgeCkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gKGNvbG9yc1t2YWx1ZV0gJiYgdHlwZW9mIGNvbG9yc1t2YWx1ZV0gPT09ICdzdHJpbmcnKSA/IGNvbG9yc1t2YWx1ZV0gOiAnIzAwMCc7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgoeCArIG9mZnNldC54KSAqIGJsb2NrU2l6ZSwgKHkgKyBvZmZzZXQueSkgKiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6Kmz57Sw44Ko44Op44O844KS5Ye644GV44Gq44GEXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHJhd2luZyBibG9jayBhdCcsIHgsIHksICc6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog44Kt44Oj44Oz44OQ44K544KS44Kv44Oq44Ki44GX44Gm6IOM5pmv44KS5o+P55S744GZ44KLXG4gICAqL1xuICBjbGVhckNhbnZhcygpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCF0aGlzLmN0eCB8fCAhdGhpcy5jYW52YXMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGNhbnZhcyBjb250ZXh0IGluIGNsZWFyQ2FudmFzJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyNmMGYwZjAnO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNsZWFyaW5nIGNhbnZhczonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOODnOODvOODieOCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBib2FyZEdyaWQgLSDjg5zjg7zjg4njga7jgrDjg6rjg4Pjg4lcbiAgICovXG4gIGRyYXdCb2FyZChib2FyZEdyaWQpIHtcbiAgICBpZiAoYm9hcmRHcmlkICYmIEFycmF5LmlzQXJyYXkoYm9hcmRHcmlkKSkge1xuICAgICAgdGhpcy5kcmF3TWF0cml4KGJvYXJkR3JpZCwgeyB4OiAwLCB5OiAwIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg5Tjg7zjgrnjgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpZWNlIC0g44OU44O844K544Kq44OW44K444Kn44Kv44OIXG4gICAqL1xuICBkcmF3UGllY2UocGllY2UpIHtcbiAgICBpZiAocGllY2UgJiYgcGllY2UubWF0cml4ICYmIHBpZWNlLnBvcykge1xuICAgICAgdGhpcy5kcmF3TWF0cml4KHBpZWNlLm1hdHJpeCwgcGllY2UucG9zKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5qyh44Gu44OU44O844K544KS5o+P55S744GZ44KLXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IG5leHRQaWVjZUNhbnZhcyAtIOasoeOBruODlOODvOOCueeUqOOCreODo+ODs+ODkOOCuVxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV4dFBpZWNlIC0g5qyh44Gu44OU44O844K544Kq44OW44K444Kn44Kv44OIXG4gICAqL1xuICBkcmF3TmV4dFBpZWNlKG5leHRQaWVjZUNhbnZhcywgbmV4dFBpZWNlKSB7XG4gICAgaWYgKCFuZXh0UGllY2VDYW52YXMgfHwgIW5leHRQaWVjZSB8fCAhbmV4dFBpZWNlLm1hdHJpeCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBuZXh0Q3R4ID0gbmV4dFBpZWNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoIW5leHRDdHgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDb3VsZCBub3QgZ2V0IDJEIGNvbnRleHQgZm9yIG5leHQgcGllY2UgY2FudmFzJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbmV4dEN0eC5jbGVhclJlY3QoMCwgMCwgbmV4dEN0eC5jYW52YXMud2lkdGgsIG5leHRDdHguY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zdCB7IG1hdHJpeCB9ID0gbmV4dFBpZWNlO1xuICAgICAgXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRyaXgpICYmIG1hdHJpeC5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkobWF0cml4WzBdKSkge1xuICAgICAgICBjb25zdCB4ID0gKG5leHRDdHguY2FudmFzLndpZHRoIC8gdGhpcy5ibG9ja1NpemUgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDI7XG4gICAgICAgIGNvbnN0IHkgPSAobmV4dEN0eC5jYW52YXMuaGVpZ2h0IC8gdGhpcy5ibG9ja1NpemUgLSBtYXRyaXgubGVuZ3RoKSAvIDI7XG4gICAgICAgIFxuICAgICAgICAvLyDmrKHjga7jg5Tjg7zjgrnnlKjjga7kuIDmmYLnmoTjgarjg6zjg7Pjg4Djg6njg7zjgpLkvZzmiJBcbiAgICAgICAgY29uc3QgdGVtcFJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKG5leHRQaWVjZUNhbnZhcywgdGhpcy5jb2xvcnMsIHRoaXMuYmxvY2tTaXplKTtcbiAgICAgICAgdGVtcFJlbmRlcmVyLmRyYXdNYXRyaXgobWF0cml4LCB7IHgsIHkgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIOODhuOCueODiOeSsOWig+OBp+OBr+ips+e0sOOCqOODqeODvOOCkuWHuuOBleOBquOBhCAgXG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHJhd2luZyBuZXh0IHBpZWNlOicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Ob44O844Or44OJ44OU44O844K544KS5o+P55S744GZ44KLXG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGhvbGRQaWVjZUNhbnZhcyAtIOODm+ODvOODq+ODieODlOODvOOCueeUqOOCreODo+ODs+ODkOOCuVxuICAgKiBAcGFyYW0ge09iamVjdH0gaG9sZFBpZWNlIC0g44Ob44O844Or44OJ44OU44O844K5XG4gICAqL1xuICBkcmF3SG9sZFBpZWNlKGhvbGRQaWVjZUNhbnZhcywgaG9sZFBpZWNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghaG9sZFBpZWNlQ2FudmFzIHx8ICFob2xkUGllY2UgfHwgIWhvbGRQaWVjZS5tYXRyaXgpIHJldHVybjtcblxuICAgICAgY29uc3QgbWF0cml4ID0gaG9sZFBpZWNlLm1hdHJpeDtcbiAgICAgIFxuICAgICAgLy8g5LiA5pmC55qE44Gq44Os44Oz44OA44Op44O844KS5L2c5oiQ44GX44Gm5o+P55S7XG4gICAgICBjb25zdCB0ZW1wUmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoaG9sZFBpZWNlQ2FudmFzLCB0aGlzLmNvbG9ycywgdGhpcy5ibG9ja1NpemUpO1xuICAgICAgXG4gICAgICAvLyDjg5vjg7zjg6vjg4njgqjjg6rjgqLjga7jgrXjgqTjgrrjgpLoqK3lrppcbiAgICAgIGhvbGRQaWVjZUNhbnZhcy53aWR0aCA9IDQgKiB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgIGhvbGRQaWVjZUNhbnZhcy5oZWlnaHQgPSA0ICogdGhpcy5ibG9ja1NpemU7XG4gICAgICBcbiAgICAgIC8vIOiDjOaZr+OCkuOCr+ODquOColxuICAgICAgdGVtcFJlbmRlcmVyLmNsZWFyQ2FudmFzKCk7XG4gICAgICBcbiAgICAgIC8vIOODlOODvOOCueOCkuOCreODo+ODs+ODkOOCueOBruS4reWkruOBq+aPj+eUu1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKDQgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDIpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoKDQgLSBtYXRyaXgubGVuZ3RoKSAvIDIpO1xuICAgICAgXG4gICAgICB0ZW1wUmVuZGVyZXIuZHJhd01hdHJpeChtYXRyaXgsIHsgeCwgeSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6Kmz57Sw44Ko44Op44O844KS5Ye644GV44Gq44GEICBcbiAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkcmF3aW5nIGhvbGQgcGllY2U6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DlhajkvZPjgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IGdhbWVEYXRhIC0g44Ky44O844Og44OH44O844K/XG4gICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGdhbWVEYXRhLmJvYXJkR3JpZCAtIOODnOODvOODieOBruOCsOODquODg+ODiVxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEucGllY2UgLSDnj77lnKjjga7jg5Tjg7zjgrlcbiAgICogQHBhcmFtIHtPYmplY3R9IGdhbWVEYXRhLm5leHRQaWVjZSAtIOasoeOBruODlOODvOOCuVxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEuaG9sZFBpZWNlIC0g44Ob44O844Or44OJ44OU44O844K5XG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IG5leHRQaWVjZUNhbnZhcyAtIOasoeOBruODlOODvOOCueeUqOOCreODo+ODs+ODkOOCuVxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBob2xkUGllY2VDYW52YXMgLSDjg5vjg7zjg6vjg4njg5Tjg7zjgrnnlKjjgq3jg6Pjg7Pjg5DjgrlcbiAgICovXG4gIHJlbmRlcihnYW1lRGF0YSwgbmV4dFBpZWNlQ2FudmFzID0gbnVsbCwgaG9sZFBpZWNlQ2FudmFzID0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XG4gICAgICBcbiAgICAgIC8vIOODoeOCpOODs+ODnOODvOODieOBruaPj+eUu1xuICAgICAgaWYgKGdhbWVEYXRhLmJvYXJkR3JpZCkge1xuICAgICAgICB0aGlzLmRyYXdCb2FyZChnYW1lRGF0YS5ib2FyZEdyaWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDnj77lnKjjga7jg5Tjg7zjgrnjga7mj4/nlLtcbiAgICAgIGlmIChnYW1lRGF0YS5waWVjZSkge1xuICAgICAgICB0aGlzLmRyYXdQaWVjZShnYW1lRGF0YS5waWVjZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIOasoeOBruODlOODvOOCueOBruaPj+eUu1xuICAgICAgaWYgKG5leHRQaWVjZUNhbnZhcyAmJiBnYW1lRGF0YS5uZXh0UGllY2UpIHtcbiAgICAgICAgdGhpcy5kcmF3TmV4dFBpZWNlKG5leHRQaWVjZUNhbnZhcywgZ2FtZURhdGEubmV4dFBpZWNlKTtcbiAgICAgIH1cblxuICAgICAgLy8g44Ob44O844Or44OJ44OU44O844K544Gu5o+P55S7XG4gICAgICBpZiAoaG9sZFBpZWNlQ2FudmFzICYmIGdhbWVEYXRhLmhvbGRQaWVjZSkge1xuICAgICAgICB0aGlzLmRyYXdIb2xkUGllY2UoaG9sZFBpZWNlQ2FudmFzLCBnYW1lRGF0YS5ob2xkUGllY2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGluIHJlbmRlciBmdW5jdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG59IiwiLy8gU1JT44Kt44OD44Kv44OH44O844K/44Gu5qeL6YCgOiBbc3RhdGVdW2tpY2tJbmRleF1beC95XVxuLy8gc3RhdGU6IOePvuWcqOOBruWbnui7oueKtuaFiyAoMC0zKVxuLy8ga2lja0luZGV4OiDjgq3jg4Pjgq/jg4bjgrnjg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrkgKDAtNClcbi8vIFt4L3ldOiDjgq3jg4Pjgq/jgqrjg5Xjgrvjg4Pjg4ggKHgsIHkpXG5leHBvcnQgY29uc3QgU1JTX0tJQ0tTX0pMVFNaID0gW1xuICAvLyAwIC0+IFIgKDAtPjEpXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFstMSwgLTFdLCBbMCwgMl0sIFstMSwgMl1cbiAgXSxcbiAgLy8gUiAtPiAyICgxLT4yKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFsxLCAtMV0sIFswLCAyXSwgWzEsIDJdXG4gIF0sXG4gIC8vIDIgLT4gTCAoMi0+MylcbiAgW1xuICAgIFswLCAwXSwgWzEsIDBdLCBbMSwgMV0sIFswLCAtMl0sIFsxLCAtMl1cbiAgXSxcbiAgLy8gTCAtPiAwICgzLT4wKVxuICBbXG4gICAgWzAsIDBdLCBbLTEsIDBdLCBbLTEsIDFdLCBbMCwgLTJdLCBbLTEsIC0yXVxuICBdXG5dO1xuXG5leHBvcnQgY29uc3QgU1JTX0tJQ0tTX0kgPSBbXG4gIC8vIDAgLT4gUiAoMC0+MSlcbiAgW1xuICAgIFswLCAwXSwgWy0yLCAwXSwgWzEsIDBdLCBbLTIsIC0xXSwgWzEsIDJdXG4gIF0sXG4gIC8vIFIgLT4gMiAoMS0+MilcbiAgW1xuICAgIFswLCAwXSwgWy0xLCAwXSwgWzIsIDBdLCBbLTEsIDJdLCBbMiwgLTFdXG4gIF0sXG4gIC8vIDIgLT4gTCAoMi0+MylcbiAgW1xuICAgIFswLCAwXSwgWzIsIDBdLCBbLTEsIDBdLCBbMiwgMV0sIFstMSwgLTJdXG4gIF0sXG4gIC8vIEwgLT4gMCAoMy0+MClcbiAgW1xuICAgIFswLCAwXSwgWzEsIDBdLCBbLTIsIDBdLCBbMSwgLTJdLCBbLTIsIDFdXG4gIF1cbl07XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGlvblN5c3RlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMua2lja0RhdGEgPSB7XG4gICAgICAnSSc6IFNSU19LSUNLU19JLFxuICAgICAgJ2RlZmF1bHQnOiBTUlNfS0lDS1NfSkxUU1pcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOODlOODvOOCueOCv+OCpOODl+OBq+W/nOOBmOOBn+OCreODg+OCr+ODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGllY2VUeXBlIC0g44OU44O844K544Gu44K/44Kk44OXXG4gICAqIEByZXR1cm5zIHtBcnJheX0g44Kt44OD44Kv44OH44O844K/XG4gICAqL1xuICBnZXRLaWNrRGF0YShwaWVjZVR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5raWNrRGF0YVtwaWVjZVR5cGVdIHx8IHRoaXMua2lja0RhdGFbJ2RlZmF1bHQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm57ou6LnirbmhYvjgpLmpJzoqLzjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uU3RhdGUgLSDlm57ou6LnirbmhYtcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOacieWKueOBi+OBqeOBhuOBi1xuICAgKi9cbiAgdmFsaWRhdGVSb3RhdGlvblN0YXRlKHJvdGF0aW9uU3RhdGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHJvdGF0aW9uU3RhdGUgPT09ICdudW1iZXInICYmIHJvdGF0aW9uU3RhdGUgPj0gMCAmJiByb3RhdGlvblN0YXRlIDw9IDM7XG4gIH1cblxuICAvKipcbiAgICog44Kt44OD44Kv44OG44K544OI44Gu44Kq44OV44K744OD44OI44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZVR5cGUgLSDjg5Tjg7zjgrnjga7jgr/jgqTjg5dcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWdpbmFsUm90YXRpb25TdGF0ZSAtIOWFg+OBruWbnui7oueKtuaFi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uIC0g5Zue6Lui5pa55ZCRICgxOiDmmYLoqIjlm57jgoosIC0xOiDlj43mmYLoqIjlm57jgoopXG4gICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTxudW1iZXI+Pn0g44Kt44OD44Kv44OG44K544OI44Gu44Kq44OV44K744OD44OI6YWN5YiXXG4gICAqL1xuICBnZXRLaWNrT2Zmc2V0cyhwaWVjZVR5cGUsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlUm90YXRpb25TdGF0ZShvcmlnaW5hbFJvdGF0aW9uU3RhdGUpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi54Sh5Yq544Gq5Zue6Lui54q25oWLOlwiLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUpO1xuICAgICAgcmV0dXJuIFtbMCwgMF1dOyAvLyDjg4fjg5Xjgqnjg6vjg4jjga7jgqrjg5Xjgrvjg4Pjg4hcbiAgICB9XG5cbiAgICBjb25zdCBraWNrRGF0YSA9IHRoaXMuZ2V0S2lja0RhdGEocGllY2VUeXBlKTtcbiAgICBjb25zdCBraWNrcyA9IGtpY2tEYXRhW29yaWdpbmFsUm90YXRpb25TdGF0ZSAlIDRdO1xuICAgIFxuICAgIGlmICgha2lja3MgfHwgIUFycmF5LmlzQXJyYXkoa2lja3MpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBraWNrcyBkYXRhOlwiLCBraWNrcywgXCJmb3Igcm90YXRpb24gc3RhdGU6XCIsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSk7XG4gICAgICByZXR1cm4gW1swLCAwXV07IC8vIOODh+ODleOCqeODq+ODiOOBruOCquODleOCu+ODg+ODiFxuICAgIH1cbiAgICBcbiAgICAvLyDlj43mmYLoqIjlm57jgorjga7loLTlkIjjga/jgq3jg4Pjgq/jg4fjg7zjgr/jgpLlj43ou6JcbiAgICBjb25zdCB0ZXN0U2V0ID0gZGlyZWN0aW9uID09PSAxIFxuICAgICAgPyBbLi4ua2lja3NdIC8vIOmFjeWIl+OBruOCs+ODlOODvOOCkuS9nOaIkFxuICAgICAgOiBraWNrcy5tYXAoa2ljayA9PiB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2spIHx8IGtpY2subGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBraWNrIGRhdGEgZm9ybWF0OlwiLCBraWNrKTtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbLWtpY2tbMF0sIC1raWNrWzFdXTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVzdFNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm57ou6LjgpLoqabooYzjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpZWNlIC0g44OU44O844K544Kq44OW44K444Kn44Kv44OIXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb24gLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29sbGlzaW9uQ2hlY2tGbiAtIOihneeqgeWIpOWumuOCkuihjOOBhumWouaVsFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDlm57ou6LntZDmnpwge3N1Y2Nlc3M6IGJvb2xlYW4sIGZpbmFsUG9zaXRpb24/OiB7eCwgeX19XG4gICAqL1xuICBhdHRlbXB0Um90YXRpb24ocGllY2UsIGRpcmVjdGlvbiwgY29sbGlzaW9uQ2hlY2tGbikge1xuICAgIGlmICghcGllY2UgfHwgIXBpZWNlLm1hdHJpeCB8fCAhQXJyYXkuaXNBcnJheShwaWVjZS5tYXRyaXgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgcGllY2UgZm9yIHJvdGF0aW9uJyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sbGlzaW9uQ2hlY2tGbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignQ29sbGlzaW9uIGNoZWNrIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyDlhYPjga7nirbmhYvjgpLkv53lrZhcbiAgICAgIGNvbnN0IG9yaWdpbmFsUG9zID0geyAuLi5waWVjZS5wb3MgfTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTWF0cml4ID0gcGllY2UubWF0cml4Lm1hcChyb3cgPT4gXG4gICAgICAgIEFycmF5LmlzQXJyYXkocm93KSA/IFsuLi5yb3ddIDogW11cbiAgICAgICk7XG4gICAgICBjb25zdCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUgPSBwaWVjZS5yb3RhdGlvblN0YXRlO1xuICAgICAgXG4gICAgICBpZiAoIXRoaXMudmFsaWRhdGVSb3RhdGlvblN0YXRlKG9yaWdpbmFsUm90YXRpb25TdGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgICAgIH1cblxuICAgICAgLy8g44OU44O844K544KS5Zue6Lui77yI5Zue6Lui54q25oWL44Gu5pu05paw44GvUGllY2Uucm90YXRl5YaF44Gn6KGM44GG77yJXG4gICAgICBwaWVjZS5yb3RhdGUoZGlyZWN0aW9uKTtcblxuICAgICAgLy8g44Kt44OD44Kv44OG44K544OI44KS5a6f6KGMXG4gICAgICBjb25zdCBraWNrT2Zmc2V0cyA9IHRoaXMuZ2V0S2lja09mZnNldHMocGllY2UudHlwZSwgb3JpZ2luYWxSb3RhdGlvblN0YXRlLCBkaXJlY3Rpb24pO1xuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IFtvZmZzZXRYLCBvZmZzZXRZXSBvZiBraWNrT2Zmc2V0cykge1xuICAgICAgICBwaWVjZS5wb3MueCArPSBvZmZzZXRYO1xuICAgICAgICBwaWVjZS5wb3MueSArPSBvZmZzZXRZO1xuXG4gICAgICAgIGlmICghY29sbGlzaW9uQ2hlY2tGbigpKSB7XG4gICAgICAgICAgLy8g6KGd56qB44GM44Gq44GR44KM44Gw5Zue6Lui5oiQ5YqfXG4gICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmluYWxQb3NpdGlvbjogeyAuLi5waWVjZS5wb3MgfSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDooZ3nqoHjgZnjgovloLTlkIjjga/kvY3nva7jgpLmiLvjgZfjgabmrKHjga7jg4bjgrnjg4jjgpLoqabjgZlcbiAgICAgICAgcGllY2UucG9zLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgcGllY2UucG9zLnkgLT0gb2Zmc2V0WTtcbiAgICAgIH1cblxuICAgICAgLy8g5YWo44Gm44Gu44OG44K544OI44Gn6KGd56qB44GZ44KL5aC05ZCI44CB5YWD44Gu54q25oWL44Gr5oi744GZXG4gICAgICBwaWVjZS5tYXRyaXggPSBvcmlnaW5hbE1hdHJpeDtcbiAgICAgIHBpZWNlLnJvdGF0aW9uU3RhdGUgPSBvcmlnaW5hbFJvdGF0aW9uU3RhdGU7XG4gICAgICBwaWVjZS5wb3MgPSB7IC4uLm9yaWdpbmFsUG9zIH07XG4gICAgICBcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyByb3RhdGlvbiBhdHRlbXB0OicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNSU+ODh+ODvOOCv+OCkuaknOiovOOBmeOCi1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g44OH44O844K/44GM5pyJ5Yq544GL44Gp44GG44GLXG4gICAqL1xuICB2YWxpZGF0ZVNSU0RhdGEoKSB7XG4gICAgY29uc3QgcmVxdWlyZWRTdGF0ZXMgPSA0O1xuICAgIGNvbnN0IHJlcXVpcmVkS2lja3MgPSA1O1xuICAgIFxuICAgIGZvciAoY29uc3QgW3BpZWNlVHlwZSwga2lja0RhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMua2lja0RhdGEpKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2lja0RhdGEpIHx8IGtpY2tEYXRhLmxlbmd0aCAhPT0gcmVxdWlyZWRTdGF0ZXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBraWNrIGRhdGEgc3RydWN0dXJlIGZvciAke3BpZWNlVHlwZX06IGV4cGVjdGVkICR7cmVxdWlyZWRTdGF0ZXN9IHN0YXRlc2ApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IHN0YXRlID0gMDsgc3RhdGUgPCBraWNrRGF0YS5sZW5ndGg7IHN0YXRlKyspIHtcbiAgICAgICAgY29uc3Qga2lja3MgPSBraWNrRGF0YVtzdGF0ZV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShraWNrcykgfHwga2lja3MubGVuZ3RoICE9PSByZXF1aXJlZEtpY2tzKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBraWNrcyBmb3IgJHtwaWVjZVR5cGV9IHN0YXRlICR7c3RhdGV9OiBleHBlY3RlZCAke3JlcXVpcmVkS2lja3N9IGtpY2tzYCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBraWNrSW5kZXggPSAwOyBraWNrSW5kZXggPCBraWNrcy5sZW5ndGg7IGtpY2tJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3Qga2ljayA9IGtpY2tzW2tpY2tJbmRleF07XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2spIHx8IGtpY2subGVuZ3RoICE9PSAyIHx8IFxuICAgICAgICAgICAgICB0eXBlb2Yga2lja1swXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGtpY2tbMV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGtpY2sgZm9ybWF0IGZvciAke3BpZWNlVHlwZX0gc3RhdGUgJHtzdGF0ZX0ga2ljayAke2tpY2tJbmRleH1gKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICog5Zue6Lui44K344K544OG44Og44Gu5oOF5aCx44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOOCt+OCueODhuODoOaDheWgsVxuICAgKi9cbiAgZ2V0U3lzdGVtSW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3lzdGVtOiAnU1JTIChTdXBlciBSb3RhdGlvbiBTeXN0ZW0pJyxcbiAgICAgIHN1cHBvcnRlZFBpZWNlczogT2JqZWN0LmtleXModGhpcy5raWNrRGF0YSksXG4gICAgICBpc1ZhbGlkOiB0aGlzLnZhbGlkYXRlU1JTRGF0YSgpXG4gICAgfTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBTY29yZUNhbGN1bGF0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDjg6njgqTjg7PmtojljrvmlbDjgavlv5zjgZjjgZ/ln7rnpI7lvpfngrlcbiAgICB0aGlzLmxpbmVTY29yZXMgPSBbMCwgNDAsIDEwMCwgMzAwLCAxMjAwXTsgLy8gMC0044Op44Kk44Oz5raI44GX44Gf44Go44GN44Gu5Z+656SO5b6X54K5XG4gICAgXG4gICAgLy8g44Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq44Op44Kk44Oz5pWwXG4gICAgdGhpcy5saW5lc1BlckxldmVsID0gMTA7XG4gICAgXG4gICAgLy8g44K944OV44OI44OJ44Ot44OD44OX44Gu44Oc44O844OK44K5XG4gICAgdGhpcy5zb2Z0RHJvcEJvbnVzID0gMTtcbiAgICBcbiAgICAvLyDjg4/jg7zjg4njg4njg63jg4Pjg5fjga7jg5zjg7zjg4rjgrnvvIjot53pm6LjgYLjgZ/jgorvvIlcbiAgICB0aGlzLmhhcmREcm9wQm9udXMgPSAyO1xuICB9XG5cbiAgLyoqXG4gICAqIOODqeOCpOODs+a2iOWOu+OBq+OCiOOCi+OCueOCs+OCouOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gbGluZXNDbGVhcmVkIC0g5raI5Y6744GX44Gf44Op44Kk44Oz5pWwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbCAtIOePvuWcqOOBruODrOODmeODq1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDoqIjnrpfjgZXjgozjgZ/jgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZUxpbmVTY29yZShsaW5lc0NsZWFyZWQsIGxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lc0NsZWFyZWQgIT09ICdudW1iZXInIHx8IGxpbmVzQ2xlYXJlZCA8IDApIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsaW5lc0NsZWFyZWQgdmFsdWU6JywgbGluZXNDbGVhcmVkKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGxldmVsICE9PSAnbnVtYmVyJyB8fCBsZXZlbCA8IDEpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsZXZlbCB2YWx1ZTonLCBsZXZlbCk7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBNYXRoLmZsb29yKGxpbmVzQ2xlYXJlZCkpLCB0aGlzLmxpbmVTY29yZXMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHRoaXMubGluZVNjb3Jlc1tpbmRleF0gKiBsZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjga7jgrnjgrPjgqLjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyb3BEaXN0YW5jZSAtIOODieODreODg+ODl+OBl+OBn+i3nembolxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZVNvZnREcm9wU2NvcmUoZHJvcERpc3RhbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBkcm9wRGlzdGFuY2UgIT09ICdudW1iZXInIHx8IGRyb3BEaXN0YW5jZSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZHJvcERpc3RhbmNlICogdGhpcy5zb2Z0RHJvcEJvbnVzO1xuICB9XG5cbiAgLyoqXG4gICAqIOODj+ODvOODieODieODreODg+ODl+OBruOCueOCs+OCouOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZHJvcERpc3RhbmNlIC0g44OJ44Ot44OD44OX44GX44Gf6Led6ZuiXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOODj+ODvOODieODieODreODg+ODl+OCueOCs+OColxuICAgKi9cbiAgY2FsY3VsYXRlSGFyZERyb3BTY29yZShkcm9wRGlzdGFuY2UpIHtcbiAgICBpZiAodHlwZW9mIGRyb3BEaXN0YW5jZSAhPT0gJ251bWJlcicgfHwgZHJvcERpc3RhbmNlIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkcm9wRGlzdGFuY2UgKiB0aGlzLmhhcmREcm9wQm9udXM7XG4gIH1cblxuICAvKipcbiAgICog44Os44OZ44Or44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbExpbmVzIC0g57eP44Op44Kk44Oz5pWwXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOioiOeul+OBleOCjOOBn+ODrOODmeODq1xuICAgKi9cbiAgY2FsY3VsYXRlTGV2ZWwodG90YWxMaW5lcykge1xuICAgIGlmICh0eXBlb2YgdG90YWxMaW5lcyAhPT0gJ251bWJlcicgfHwgdG90YWxMaW5lcyA8IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0b3RhbExpbmVzIC8gdGhpcy5saW5lc1BlckxldmVsKSArIDE7XG4gIH1cblxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44GM5b+F6KaB44GL44OB44Kn44OD44Kv44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50TGluZXMgLSDnj77lnKjjga7jg6njgqTjg7PmlbBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMZXZlbCAtIOePvuWcqOOBruODrOODmeODq1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g44Os44OZ44Or44Ki44OD44OX44GM5b+F6KaB44GL44Gp44GG44GLXG4gICAqL1xuICBzaG91bGRMZXZlbFVwKGN1cnJlbnRMaW5lcywgY3VycmVudExldmVsKSB7XG4gICAgY29uc3QgbmV3TGV2ZWwgPSB0aGlzLmNhbGN1bGF0ZUxldmVsKGN1cnJlbnRMaW5lcyk7XG4gICAgcmV0dXJuIG5ld0xldmVsID4gY3VycmVudExldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIOasoeOBruODrOODmeODq+OBvuOBp+OBq+W/heimgeOBquODqeOCpOODs+aVsOOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudExpbmVzIC0g54++5Zyo44Gu44Op44Kk44Oz5pWwXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOasoeOBruODrOODmeODq+OBvuOBp+OBq+W/heimgeOBquODqeOCpOODs+aVsFxuICAgKi9cbiAgZ2V0TGluZXNVbnRpbE5leHRMZXZlbChjdXJyZW50TGluZXMpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRMaW5lcyAhPT0gJ251bWJlcicgfHwgY3VycmVudExpbmVzIDwgMCkge1xuICAgICAgcmV0dXJuIHRoaXMubGluZXNQZXJMZXZlbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3VycmVudExldmVsTGluZXMgPSBjdXJyZW50TGluZXMgJSB0aGlzLmxpbmVzUGVyTGV2ZWw7XG4gICAgcmV0dXJuIHRoaXMubGluZXNQZXJMZXZlbCAtIGN1cnJlbnRMZXZlbExpbmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIOikh+WQiOOCueOCs+OCouOCkuioiOeul+OBmeOCi++8iOODqeOCpOODs+a2iOWOuyArIOODieODreODg+ODl+ODnOODvOODiuOCue+8iVxuICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcmVEYXRhIC0g44K544Kz44Ki6KiI566X44OH44O844K/XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEubGluZXNDbGVhcmVkIC0g5raI5Y6744GX44Gf44Op44Kk44Oz5pWwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEubGV2ZWwgLSDnj77lnKjjga7jg6zjg5njg6tcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlRGF0YS5zb2Z0RHJvcERpc3RhbmNlIC0g44K944OV44OI44OJ44Ot44OD44OX44Gu6Led6Zui77yI44Kq44OX44K344On44Oz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEuaGFyZERyb3BEaXN0YW5jZSAtIOODj+ODvOODieODieODreODg+ODl+OBrui3nembou+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDoqIjnrpfntZDmnpwge3RvdGFsU2NvcmUsIGxpbmVTY29yZSwgc29mdERyb3BTY29yZSwgaGFyZERyb3BTY29yZX1cbiAgICovXG4gIGNhbGN1bGF0ZVRvdGFsU2NvcmUoc2NvcmVEYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGluZXNDbGVhcmVkID0gMCxcbiAgICAgIGxldmVsID0gMSxcbiAgICAgIHNvZnREcm9wRGlzdGFuY2UgPSAwLFxuICAgICAgaGFyZERyb3BEaXN0YW5jZSA9IDBcbiAgICB9ID0gc2NvcmVEYXRhO1xuXG4gICAgY29uc3QgbGluZVNjb3JlID0gdGhpcy5jYWxjdWxhdGVMaW5lU2NvcmUobGluZXNDbGVhcmVkLCBsZXZlbCk7XG4gICAgY29uc3Qgc29mdERyb3BTY29yZSA9IHRoaXMuY2FsY3VsYXRlU29mdERyb3BTY29yZShzb2Z0RHJvcERpc3RhbmNlKTtcbiAgICBjb25zdCBoYXJkRHJvcFNjb3JlID0gdGhpcy5jYWxjdWxhdGVIYXJkRHJvcFNjb3JlKGhhcmREcm9wRGlzdGFuY2UpO1xuICAgIGNvbnN0IHRvdGFsU2NvcmUgPSBsaW5lU2NvcmUgKyBzb2Z0RHJvcFNjb3JlICsgaGFyZERyb3BTY29yZTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFNjb3JlLFxuICAgICAgbGluZVNjb3JlLFxuICAgICAgc29mdERyb3BTY29yZSxcbiAgICAgIGhhcmREcm9wU2NvcmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOOCueOCs+OCouioiOeul+OBruioreWumuOCkuabtOaWsOOBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0g5paw44GX44GE6Kit5a6aXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29uZmlnLmxpbmVTY29yZXMgLSDjg6njgqTjg7PmtojljrvjgrnjgrPjgqLphY3liJfvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5saW5lc1BlckxldmVsIC0g44Os44OZ44Or44GC44Gf44KK44Gu44Op44Kk44Oz5pWw77yI44Kq44OX44K344On44Oz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcuc29mdERyb3BCb251cyAtIOOCveODleODiOODieODreODg+ODl+ODnOODvOODiuOCue+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLmhhcmREcm9wQm9udXMgLSDjg4/jg7zjg4njg4njg63jg4Pjg5fjg5zjg7zjg4rjgrnvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICovXG4gIHVwZGF0ZUNvbmZpZyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmxpbmVTY29yZXMgJiYgQXJyYXkuaXNBcnJheShjb25maWcubGluZVNjb3JlcykpIHtcbiAgICAgIHRoaXMubGluZVNjb3JlcyA9IFsuLi5jb25maWcubGluZVNjb3Jlc107XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgY29uZmlnLmxpbmVzUGVyTGV2ZWwgPT09ICdudW1iZXInICYmIGNvbmZpZy5saW5lc1BlckxldmVsID4gMCkge1xuICAgICAgdGhpcy5saW5lc1BlckxldmVsID0gY29uZmlnLmxpbmVzUGVyTGV2ZWw7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgY29uZmlnLnNvZnREcm9wQm9udXMgPT09ICdudW1iZXInICYmIGNvbmZpZy5zb2Z0RHJvcEJvbnVzID49IDApIHtcbiAgICAgIHRoaXMuc29mdERyb3BCb251cyA9IGNvbmZpZy5zb2Z0RHJvcEJvbnVzO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5oYXJkRHJvcEJvbnVzID09PSAnbnVtYmVyJyAmJiBjb25maWcuaGFyZERyb3BCb251cyA+PSAwKSB7XG4gICAgICB0aGlzLmhhcmREcm9wQm9udXMgPSBjb25maWcuaGFyZERyb3BCb251cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu6Kit5a6a44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOePvuWcqOOBruioreWumlxuICAgKi9cbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lU2NvcmVzOiBbLi4udGhpcy5saW5lU2NvcmVzXSxcbiAgICAgIGxpbmVzUGVyTGV2ZWw6IHRoaXMubGluZXNQZXJMZXZlbCxcbiAgICAgIHNvZnREcm9wQm9udXM6IHRoaXMuc29mdERyb3BCb251cyxcbiAgICAgIGhhcmREcm9wQm9udXM6IHRoaXMuaGFyZERyb3BCb251c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki5bGl5q2044KS566h55CG44GZ44KL44Gf44KB44Gu44OY44Or44OR44O8XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50U2NvcmUgLSDnj77lnKjjga7jgrnjgrPjgqJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1Njb3JlIC0g5paw44GX44GE44K544Kz44KiXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOOCueOCs+OCouabtOaWsOaDheWgsSB7cHJldmlvdXNTY29yZSwgbmV3U2NvcmUsIGluY3JlYXNlfVxuICAgKi9cbiAgY3JlYXRlU2NvcmVVcGRhdGUoY3VycmVudFNjb3JlLCBuZXdTY29yZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmV2aW91c1Njb3JlOiBjdXJyZW50U2NvcmUsXG4gICAgICBuZXdTY29yZTogY3VycmVudFNjb3JlICsgbmV3U2NvcmUsXG4gICAgICBpbmNyZWFzZTogbmV3U2NvcmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODmeODq+WIpeOBrumbo+aYk+W6puaDheWgseOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDjg6zjg5njg6tcbiAgICogQHJldHVybnMge09iamVjdH0g6Zuj5piT5bqm5oOF5aCxXG4gICAqL1xuICBnZXRMZXZlbEluZm8obGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsICE9PSAnbnVtYmVyJyB8fCBsZXZlbCA8IDEpIHtcbiAgICAgIGxldmVsID0gMTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGxldmVsLFxuICAgICAgcmVxdWlyZWRMaW5lczogbGV2ZWwgKiB0aGlzLmxpbmVzUGVyTGV2ZWwsXG4gICAgICBzY29yZU11bHRpcGxpZXI6IGxldmVsLFxuICAgICAgbmV4dExldmVsQXQ6IChsZXZlbCArIDEpICogdGhpcy5saW5lc1BlckxldmVsXG4gICAgfTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBHYW1lU3RhdGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3Iocm93cywgY29scykge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdHg6IG51bGwsXG4gICAgICBjYW52YXM6IG51bGwsXG4gICAgICBib2FyZDogW10sXG4gICAgICBST1dTOiByb3dzLFxuICAgICAgQ09MUzogY29scyxcbiAgICAgIHBpZWNlOiBudWxsLFxuICAgICAgbmV4dFBpZWNlOiBudWxsLFxuICAgICAgc2NvcmU6IDAsXG4gICAgICBsaW5lczogMCxcbiAgICAgIGxldmVsOiAxLFxuICAgICAgZHJvcENvdW50ZXI6IDAsXG4gICAgICBkcm9wSW50ZXJ2YWw6IDEwMDAsXG4gICAgICBsYXN0VGltZTogMCxcbiAgICAgIGdhbWVMb29wSWQ6IG51bGwsXG4gICAgICBpc0dhbWVPdmVyOiBmYWxzZSxcbiAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICBrZXlzOiB7fSxcbiAgICAgIGlzU29mdERyb3A6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnirbmhYvjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge09iamVjdH0g54++5Zyo44Gu54q25oWLXG4gICAqL1xuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XG4gIH1cblxuICAvKipcbiAgICog54m55a6a44Gu54q25oWL5YCk44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDlj5blvpfjgZnjgovnirbmhYvjga7jgq3jg7xcbiAgICogQHJldHVybnMgeyp9IOeKtuaFi+WApFxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gIH1cblxuICAvKipcbiAgICog54m55a6a44Gu54q25oWL5YCk44KS6Kit5a6a44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDoqK3lrprjgZnjgovnirbmhYvjga7jgq3jg7xcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIOioreWumuOBmeOCi+WApFxuICAgKi9cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDopIfmlbDjga7nirbmhYvlgKTjgpLkuIDluqbjgavoqK3lrprjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZXMgLSDmm7TmlrDjgZnjgovnirbmhYvjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgICovXG4gIHVwZGF0ZSh1cGRhdGVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB1cGRhdGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5zjg7zjg4njgpLliJ3mnJ/ljJbjgZnjgotcbiAgICovXG4gIGluaXRCb2FyZCgpIHtcbiAgICB0aGlzLnN0YXRlLmJvYXJkID0gQXJyYXkodGhpcy5zdGF0ZS5ST1dTKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSh0aGlzLnN0YXRlLkNPTFMpLmZpbGwoMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOeKtuaFi+OCkuODquOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdGF0ZS5zY29yZSA9IDA7XG4gICAgdGhpcy5zdGF0ZS5saW5lcyA9IDA7XG4gICAgdGhpcy5zdGF0ZS5sZXZlbCA9IDE7XG4gICAgdGhpcy5zdGF0ZS5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgICB0aGlzLnN0YXRlLmRyb3BJbnRlcnZhbCA9IDEwMDA7XG4gICAgdGhpcy5zdGF0ZS5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGF0ZS5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zdGF0ZS5nYW1lTG9vcElkKTtcbiAgICAgIHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuaW5pdEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44Gu5Z+65pys5oOF5aCx44KS5ZCM5pyf44GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBnYW1lSW5zdGFuY2UgLSDjgrLjg7zjg6DjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHN5bmNXaXRoR2FtZShnYW1lSW5zdGFuY2UpIHtcbiAgICBpZiAoIWdhbWVJbnN0YW5jZSkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuc3RhdGUuc2NvcmUgPSBnYW1lSW5zdGFuY2Uuc2NvcmUgfHwgMDtcbiAgICB0aGlzLnN0YXRlLmxpbmVzID0gZ2FtZUluc3RhbmNlLmxpbmVzIHx8IDA7XG4gICAgdGhpcy5zdGF0ZS5sZXZlbCA9IGdhbWVJbnN0YW5jZS5sZXZlbCB8fCAxO1xuICAgIHRoaXMuc3RhdGUuaXNHYW1lT3ZlciA9IGdhbWVJbnN0YW5jZS5pc0dhbWVPdmVyIHx8IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUucGllY2UgPSBnYW1lSW5zdGFuY2UucGllY2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0YXRlLm5leHRQaWVjZSA9IGdhbWVJbnN0YW5jZS5uZXh0UGllY2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0YXRlLmhvbGRQaWVjZSA9IGdhbWVJbnN0YW5jZS5oZWxkUGllY2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0YXRlLmNhbkhvbGQgPSBnYW1lSW5zdGFuY2UuY2FuSG9sZCAhPT0gdW5kZWZpbmVkID8gZ2FtZUluc3RhbmNlLmNhbkhvbGQgOiB0cnVlO1xuICAgIFxuICAgIGlmIChnYW1lSW5zdGFuY2UuYm9hcmQgJiYgZ2FtZUluc3RhbmNlLmJvYXJkLmdyaWQpIHtcbiAgICAgIHRoaXMuc3RhdGUuYm9hcmQgPSBnYW1lSW5zdGFuY2UuYm9hcmQuZ3JpZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Kt44O844Gu54q25oWL44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDjgq3jg7zlkI1cbiAgICogQHBhcmFtIHtib29sZWFufSBwcmVzc2VkIC0g5oq844GV44KM44Gm44GE44KL44GL44Gp44GG44GLXG4gICAqL1xuICB1cGRhdGVLZXlTdGF0ZShrZXksIHByZXNzZWQpIHtcbiAgICB0aGlzLnN0YXRlLmtleXNba2V5XSA9IHByZXNzZWQ7XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44Or44O844OXSUTjgpLoqK3lrprjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0g44Ky44O844Og44Or44O844OXSURcbiAgICovXG4gIHNldEdhbWVMb29wSWQoaWQpIHtcbiAgICB0aGlzLnN0YXRlLmdhbWVMb29wSWQgPSBpZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6Djg6vjg7zjg5fjgpLlgZzmraLjgZnjgotcbiAgICovXG4gIHN0b3BHYW1lTG9vcCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnN0YXRlLmdhbWVMb29wSWQpO1xuICAgICAgdGhpcy5zdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44GM5a6f6KGM5Lit44GL44Gp44GG44GL44KS5Yik5a6a44GZ44KLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDlrp/ooYzkuK3jgYvjganjgYbjgYtcbiAgICovXG4gIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gIXRoaXMuc3RhdGUuaXNHYW1lT3ZlciAmJiAhdGhpcy5zdGF0ZS5wYXVzZWQ7XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44KS5LiA5pmC5YGc5q2iL+WGjemWi+OBmeOCi1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHBhdXNlZCAtIOS4gOaZguWBnOatouOBmeOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgc2V0UGF1c2VkKHBhdXNlZCkge1xuICAgIHRoaXMuc3RhdGUucGF1c2VkID0gcGF1c2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIOODieODreODg+ODl+mWk+malOOCkuabtOaWsOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJ2YWwgLSDmlrDjgZfjgYTjg4njg63jg4Pjg5fplpPpmpRcbiAgICovXG4gIHVwZGF0ZURyb3BJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgIHRoaXMuc3RhdGUuZHJvcEludGVydmFsID0gaW50ZXJ2YWw7XG4gIH1cblxuICAvKipcbiAgICog44K944OV44OI44OJ44Ot44OD44OX44Gu54q25oWL44KS6Kit5a6a44GZ44KLXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTb2Z0RHJvcCAtIOOCveODleODiOODieODreODg+ODl+S4reOBi+OBqeOBhuOBi1xuICAgKi9cbiAgc2V0U29mdERyb3AoaXNTb2Z0RHJvcCkge1xuICAgIHRoaXMuc3RhdGUuaXNTb2Z0RHJvcCA9IGlzU29mdERyb3A7XG4gIH1cblxuICAvKipcbiAgICog44OH44OQ44OD44Kw55SoOiDnj77lnKjjga7nirbmhYvjgpLjg63jgrDjgavlh7rlipvjgZnjgotcbiAgICovXG4gIGxvZ1N0YXRlKCkge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50IEdhbWUgU3RhdGU6Jywge1xuICAgICAgc2NvcmU6IHRoaXMuc3RhdGUuc2NvcmUsXG4gICAgICBsaW5lczogdGhpcy5zdGF0ZS5saW5lcyxcbiAgICAgIGxldmVsOiB0aGlzLnN0YXRlLmxldmVsLFxuICAgICAgaXNHYW1lT3ZlcjogdGhpcy5zdGF0ZS5pc0dhbWVPdmVyLFxuICAgICAgcGF1c2VkOiB0aGlzLnN0YXRlLnBhdXNlZCxcbiAgICAgIHBpZWNlOiB0aGlzLnN0YXRlLnBpZWNlLFxuICAgICAgbmV4dFBpZWNlOiB0aGlzLnN0YXRlLm5leHRQaWVjZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnirbmhYvjga7mpJzoqLzjgpLooYzjgYZcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOeKtuaFi+OBjOacieWKueOBi+OBqeOBhuOBi1xuICAgKi9cbiAgdmFsaWRhdGVTdGF0ZSgpIHtcbiAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IFsnc2NvcmUnLCAnbGluZXMnLCAnbGV2ZWwnLCAnUk9XUycsICdDT0xTJ107XG4gICAgXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiByZXF1aXJlZEZpZWxkcykge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnN0YXRlW2ZpZWxkXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIHN0YXRlIGZpZWxkOiAke2ZpZWxkfWAsIHRoaXMuc3RhdGVbZmllbGRdKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdGF0ZS5ib2FyZCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBib2FyZCBzdGF0ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIHtcbiAgY29uc3RydWN0b3Ioc3RhdGUsIGFjdGlvbnMsIGdhbWVTdGF0ZU1hbmFnZXIpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICB0aGlzLmdhbWVTdGF0ZU1hbmFnZXIgPSBnYW1lU3RhdGVNYW5hZ2VyO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHRoaXM7XG4gICAgaWYgKHN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBcbiAgICAvLyDkuIvjgq3jg7zku6XlpJbjga/jgq3jg7zjg6rjg5Tjg7zjg4jjgpLnhKHoppZcbiAgICBpZiAoZXZlbnQucmVwZWF0ICYmIGV2ZW50LmtleSAhPT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDjgq3jg7zjgYzjgZnjgafjgavmirzjgZXjgozjgabjgYTjgovloLTlkIjjga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoc3RhdGUua2V5c1tldmVudC5rZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLmtleXNbZXZlbnQua2V5XSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBhY3Rpb25zLnN0YXJ0U29mdERyb3AoKTtcbiAgICAgICAgYWN0aW9ucy5kcm9wUGllY2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgYWN0aW9ucy5yb3RhdGVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgLy8g44OP44O844OJ44OJ44Ot44OD44OXOiDjg5Tjg7zjgrnjgYznnYDlnLDjgZnjgovjgb7jgafpgKPntprjgafokL3jgajjgZlcbiAgICAgICAgaWYgKHN0YXRlLnBpZWNlICYmIHN0YXRlLnBpZWNlLnBvcyAmJiB0eXBlb2Ygc3RhdGUucGllY2UucG9zLnkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgbGV0IGRyb3BDb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgbWF4RHJvcHMgPSBNYXRoLm1pbihzdGF0ZS5ST1dTIHx8IDIwLCAxMDApOyAvLyDjgojjgorlronlhajjgarkuIrpmZDoqK3lrppcbiAgICAgICAgICB3aGlsZSAoZHJvcENvdW50IDwgbWF4RHJvcHMgJiYgIXN0YXRlLmlzR2FtZU92ZXIgJiYgc3RhdGUucGllY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZID0gc3RhdGUucGllY2UucG9zLnk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBkcm9wcGVkID0gYWN0aW9ucy5kcm9wUGllY2UoKTtcbiAgICAgICAgICAgICAgaWYgKCFkcm9wcGVkIHx8ICFzdGF0ZS5waWVjZSB8fCBzdGF0ZS5waWVjZS5wb3MueSA9PT0gY3VycmVudFkpIHtcbiAgICAgICAgICAgICAgICAvLyDjg5Tjg7zjgrnjgYzokL3jgaHjgarjgYvjgaPjgZ/jgIHjgb7jgZ/jga/kvY3nva7jgYzlpInjgo/jgonjgarjgYvjgaPjgZ/loLTlkIjjga/ntYLkuoZcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkcm9wQ291bnQrKztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBoYXJkIGRyb3A6JywgZXJyb3IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjJzpcbiAgICAgIGNhc2UgJ0MnOlxuICAgICAgY2FzZSAnU2hpZnQnOlxuICAgICAgICAvLyDjg5vjg7zjg6vjg4nmqZ/og71cbiAgICAgICAgaWYgKGFjdGlvbnMuaG9sZFBpZWNlKSB7XG4gICAgICAgICAgYWN0aW9ucy5ob2xkUGllY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3InOlxuICAgICAgY2FzZSAnUic6XG4gICAgICAgIGFjdGlvbnMucmVzZXRHYW1lKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICB0aGlzLnN0YXRlLmtleXNbZXZlbnQua2V5XSA9IGZhbHNlO1xuICAgIC8vIGdhbWVTdGF0ZU1hbmFnZXLjgYzjgYLjgovloLTlkIjjga7jgb91cGRhdGVLZXlTdGF0ZeOCkuWRvOOBs+WHuuOBmVxuICAgIGlmICh0aGlzLmdhbWVTdGF0ZU1hbmFnZXIgJiYgdGhpcy5nYW1lU3RhdGVNYW5hZ2VyLnVwZGF0ZUtleVN0YXRlKSB7XG4gICAgICB0aGlzLmdhbWVTdGF0ZU1hbmFnZXIudXBkYXRlS2V5U3RhdGUoZXZlbnQua2V5LCBmYWxzZSk7XG4gICAgfVxuICAgIC8vIOS4i+OCreODvOOBjOmbouOBleOCjOOBn+OCieODieODreODg+ODl+mWk+malOOCkuWFg+OBq+aIu+OBmVxuICAgIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICB0aGlzLmFjdGlvbnMuc3RvcFNvZnREcm9wKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBFdmVudExpc3RlbmVycyhrZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duLCBrZXlVcEhhbmRsZXIgPSB0aGlzLm9uS2V5VXApIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXG4gKiDjg4bjg4jjg6rjgrnjgrLjg7zjg6Djga7jgqjjg7Pjg4jjg6rjg7zjg53jgqTjg7Pjg4hcbiAqL1xuXG4vLyDjgrnjgr/jgqTjg6vjgrfjg7zjg4jjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuLy8g44Ky44O844Og44Oi44K444Ol44O844Or44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9nYW1lLmpzJztcblxuLy8g44OH44OQ44OD44Kw55So44Gu44K544K/44Kk44Or44KS6L+95YqgXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgI2dhbWUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgfVxuYDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4vLyDjg4njgq3jg6Xjg6Hjg7Pjg4jjga7oqq3jgb/ovrzjgb/lrozkuobjgpLlvoXjgaPjgabjgrLjg7zjg6DjgpLliJ3mnJ/ljJZcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIOODhuOCueODiOeSsOWig+OBp+OBr+ips+e0sOODreOCsOOCkuWHuuOBleOBquOBhFxuICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCDjgqTjg5njg7Pjg4jjgYznmbrngavjgZfjgb7jgZfjgZ8nKTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICAgIC8vIOOCreODo+ODs+ODkOOCueOBrueKtuaFi+OCkueiuuiqjVxuICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICAgIGlmIChjYW52YXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCteOCpOOCujonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCfjgq3jg6Pjg7Pjg5Djgrnjga7jgrnjgr/jgqTjg6vjgrXjgqTjgro6JywgY2FudmFzLnN0eWxlLndpZHRoLCAneCcsIGNhbnZhcy5zdHlsZS5oZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign44Kt44Oj44Oz44OQ44K56KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIOOCsuODvOODoOOCkumWi+Wni1xuICAgIGluaXQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIGFsZXJ0KCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgrPjg7Pjgr3jg7zjg6vjgpLnorroqo3jgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgfVxufSk7XG5cbi8vIOmWi+eZuueUqDog44Kw44Ot44O844OQ44Or5ZCN5YmN56m66ZaT44Gr44Ko44Kv44K544Od44O844OIXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgd2luZG93LnRldHJpcyA9IHdpbmRvdy50ZXRyaXMgfHwge307XG4gIHdpbmRvdy50ZXRyaXMuaW5pdCA9IGluaXQ7XG59XG4iXSwibmFtZXMiOlsiR0FNRV9DT05TVEFOVFMiLCJDT0xTIiwiUk9XUyIsIkJMT0NLX1NJWkUiLCJTQ09SRV9UQUJMRSIsIlNIQVBFUyIsIkNPTE9SUyIsIkdBTUVfU1RBVEVTIiwiSU5JVCIsIlBMQVlJTkciLCJQQVVTRUQiLCJHQU1FX09WRVIiLCJCb2FyZCIsImNvbHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJyb3dzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2xlYXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJpc0luc2lkZSIsIngiLCJ5IiwiaXNFbXB0eSIsInNldENlbGwiLCJnZXRDZWxsIiwibWVyZ2UiLCJwaWVjZSIsIm1hdHJpeCIsInBvcyIsImNsZWFyTGluZXMiLCJpc0FycmF5IiwiY29uc29sZSIsImVycm9yIiwiY2xlYXJlZCIsIm5ld0dyaWQiLCJyb3ciLCJ3YXJuIiwiY29uY2F0IiwiZXZlcnkiLCJjZWxsIiwicHVzaCIsIl90b0NvbnN1bWFibGVBcnJheSIsInVuc2hpZnQiLCJHYW1lU3RhdGlzdGljcyIsIlBpZWNlTWFuYWdlciIsIkhvbGRNYW5hZ2VyIiwiR2FtZSIsImJvYXJkIiwiZ2FtZVN0YXRlIiwicGllY2VNYW5hZ2VyIiwiaG9sZE1hbmFnZXIiLCJyZXNldCIsImdldCIsImRyb3BJbnRlcnZhbCIsImxldmVsIiwibGluZXMiLCJzY29yZSIsImlzR2FtZU92ZXIiLCJwYXVzZWQiLCJnZXRDdXJyZW50UGllY2UiLCJnZXROZXh0UGllY2UiLCJnZXRIZWxkUGllY2UiLCJjYW5Ib2xkUGllY2UiLCJzdGFydFNvZnREcm9wIiwic3RvcFNvZnREcm9wIiwibW92ZVBpZWNlIiwiZHgiLCJoYXNDb2xsaXNpb24iLCJib2FyZFgiLCJib2FyZFkiLCJzcGF3blBpZWNlIiwic3Bhd25OZXdQaWVjZSIsImVuYWJsZUhvbGQiLCJvcmlnaW5hbFkiLCJzZXRHYW1lT3ZlciIsImNsZWFyQ3VycmVudFBpZWNlIiwiZHJvcFBpZWNlIiwiX3RoaXMyIiwiZHJvcHBlZCIsIm1lcmdlUGllY2UiLCJsaW5lc0NsZWFyZWQiLCJhZGRMaW5lcyIsInJvdGF0ZVBpZWNlIiwiZGlyIiwiX3RoaXMzIiwiaG9sZFBpZWNlIiwic3VjY2VzcyIsIlNjb3JlQ2FsY3VsYXRvciIsInNjb3JlQ2FsY3VsYXRvciIsImxldmVsU3BlZWRzIiwibGluZXNQZXJMZXZlbCIsImdldERyb3BJbnRlcnZhbCIsImlzU29mdERyb3AiLCJsZXZlbEluZGV4IiwiTWF0aCIsIm1pbiIsImNhbGN1bGF0ZUxpbmVTY29yZSIsImNoZWNrTGV2ZWxVcCIsInNob3VsZExldmVsVXAiLCJjYWxjdWxhdGVMZXZlbCIsInBhdXNlIiwidW5wYXVzZSIsImhlbGRQaWVjZSIsImNhbkhvbGQiLCJpc1BhdXNlZCIsImN1cnJlbnRQaWVjZSIsInRlbXAiLCJuZXdQaWVjZSIsImZsb29yIiwiYm9hcmRDb2xzIiwiUGllY2UiLCJ0eXBlIiwiX29iamVjdFNwcmVhZCIsInJvdGF0aW9uU3RhdGUiLCJtb3ZlIiwiZHkiLCJyb3RhdGUiLCJOIiwiTSIsInJvdGF0ZWQiLCJfIiwiUm90YXRpb25TeXN0ZW0iLCJURVRST01JTk9fTUFQIiwiSSIsIkoiLCJMIiwiTyIsIlMiLCJUIiwiWiIsImJvYXJkUm93cyIsInJvdGF0aW9uU3lzdGVtIiwidGV0cm9taW5vcyIsIm5leHRQaWVjZSIsImNyZWF0ZVBpZWNlIiwicmFuZG9tIiwiaW5kZXgiLCJPYmplY3QiLCJrZXlzIiwiY29sbGlzaW9uQ2hlY2tlciIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInJlc3VsdCIsImF0dGVtcHRSb3RhdGlvbiIsIkdhbWVVSSIsIlJlbmRlcmVyIiwiR2FtZVN0YXRlTWFuYWdlciIsInRldHJpc0dhbWUiLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImdhbWVTdGF0ZU1hbmFnZXIiLCJyZW5kZXJlciIsIlByb3h5Iiwic3RhdGUiLCJ0YXJnZXQiLCJwcm9wIiwiaW5pdEJvYXJkIiwibG9nU3RhdGUiLCJzZXQiLCJkcmF3IiwiZ2V0U3RhdGUiLCJnYW1lRGF0YSIsImJvYXJkR3JpZCIsIm5leHRQaWVjZUNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob2xkUGllY2VDYW52YXMiLCJyZW5kZXIiLCJ1cGRhdGVVSSIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInVwZGF0ZUxpbmVzRGlzcGxheSIsInVwZGF0ZUxldmVsRGlzcGxheSIsImlzTmFOIiwic2NvcmVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJ0b1N0cmluZyIsImxpbmVzRWxlbWVudCIsImxldmVsRWxlbWVudCIsInVwZGF0ZUdhbWVTdGF0ZSIsInN5bmNXaXRoR2FtZSIsInBsYXllckRyb3AiLCJpc1J1bm5pbmciLCJzdG9wR2FtZUxvb3AiLCJhbGVydCIsInBsYXllck1vdmUiLCJwbGF5ZXJSb3RhdGUiLCJwbGF5ZXJIb2xkIiwidXBkYXRlIiwidGltZSIsImdhbWVMb29wSWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRHYW1lTG9vcElkIiwibGFzdFRpbWUiLCJkZWx0YVRpbWUiLCJkcm9wQ291bnRlciIsIm5ld0Ryb3BDb3VudGVyIiwic2V0UGF1c2VkIiwiZHJhd0Vycm9yIiwiZ2FtZVVJIiwicmVzZXRHYW1lIiwibG9nIiwic2V0dXBFdmVudExpc3RlbmVycyIsIm9uS2V5RG93biIsIm9uS2V5VXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImJpbmQiLCJpbml0R2FtZSIsInNldFRldHJpc0dhbWUiLCJuZXdHYW1lIiwiZXhwb3J0cyIsImNvbG9ycyIsImJsb2NrU2l6ZSIsIkVycm9yIiwiZHJhd01hdHJpeCIsIm9mZnNldCIsImhhc0N0eCIsImhhc01hdHJpeCIsImhhc09mZnNldCIsImhhc0NvbG9ycyIsImhhc0Jsb2NrU2l6ZSIsImZvckVhY2giLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImNsZWFyQ2FudmFzIiwiY2xlYXJSZWN0IiwiZHJhd0JvYXJkIiwiZHJhd1BpZWNlIiwiZHJhd05leHRQaWVjZSIsIm5leHRDdHgiLCJ0ZW1wUmVuZGVyZXIiLCJkcmF3SG9sZFBpZWNlIiwiU1JTX0tJQ0tTX0pMVFNaIiwiU1JTX0tJQ0tTX0kiLCJraWNrRGF0YSIsImdldEtpY2tEYXRhIiwicGllY2VUeXBlIiwidmFsaWRhdGVSb3RhdGlvblN0YXRlIiwiZ2V0S2lja09mZnNldHMiLCJvcmlnaW5hbFJvdGF0aW9uU3RhdGUiLCJkaXJlY3Rpb24iLCJraWNrcyIsInRlc3RTZXQiLCJtYXAiLCJraWNrIiwiY29sbGlzaW9uQ2hlY2tGbiIsIm9yaWdpbmFsUG9zIiwib3JpZ2luYWxNYXRyaXgiLCJraWNrT2Zmc2V0cyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJmaW5hbFBvc2l0aW9uIiwiZXJyIiwiZSIsImYiLCJ2YWxpZGF0ZVNSU0RhdGEiLCJyZXF1aXJlZFN0YXRlcyIsInJlcXVpcmVkS2lja3MiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJraWNrSW5kZXgiLCJnZXRTeXN0ZW1JbmZvIiwic3lzdGVtIiwic3VwcG9ydGVkUGllY2VzIiwiaXNWYWxpZCIsImxpbmVTY29yZXMiLCJzb2Z0RHJvcEJvbnVzIiwiaGFyZERyb3BCb251cyIsIm1heCIsImNhbGN1bGF0ZVNvZnREcm9wU2NvcmUiLCJkcm9wRGlzdGFuY2UiLCJjYWxjdWxhdGVIYXJkRHJvcFNjb3JlIiwidG90YWxMaW5lcyIsImN1cnJlbnRMaW5lcyIsImN1cnJlbnRMZXZlbCIsIm5ld0xldmVsIiwiZ2V0TGluZXNVbnRpbE5leHRMZXZlbCIsImN1cnJlbnRMZXZlbExpbmVzIiwiY2FsY3VsYXRlVG90YWxTY29yZSIsInNjb3JlRGF0YSIsIl9zY29yZURhdGEkbGluZXNDbGVhciIsIl9zY29yZURhdGEkbGV2ZWwiLCJfc2NvcmVEYXRhJHNvZnREcm9wRGkiLCJzb2Z0RHJvcERpc3RhbmNlIiwiX3Njb3JlRGF0YSRoYXJkRHJvcERpIiwiaGFyZERyb3BEaXN0YW5jZSIsImxpbmVTY29yZSIsInNvZnREcm9wU2NvcmUiLCJoYXJkRHJvcFNjb3JlIiwidG90YWxTY29yZSIsInVwZGF0ZUNvbmZpZyIsImNvbmZpZyIsImdldENvbmZpZyIsImNyZWF0ZVNjb3JlVXBkYXRlIiwiY3VycmVudFNjb3JlIiwibmV3U2NvcmUiLCJwcmV2aW91c1Njb3JlIiwiaW5jcmVhc2UiLCJnZXRMZXZlbEluZm8iLCJyZXF1aXJlZExpbmVzIiwic2NvcmVNdWx0aXBsaWVyIiwibmV4dExldmVsQXQiLCJ1cGRhdGVzIiwiYXNzaWduIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJnYW1lSW5zdGFuY2UiLCJ1cGRhdGVLZXlTdGF0ZSIsInByZXNzZWQiLCJpZCIsInVwZGF0ZURyb3BJbnRlcnZhbCIsImludGVydmFsIiwic2V0U29mdERyb3AiLCJ2YWxpZGF0ZVN0YXRlIiwicmVxdWlyZWRGaWVsZHMiLCJfcmVxdWlyZWRGaWVsZHMiLCJmaWVsZCIsImFjdGlvbnMiLCJldmVudCIsInJlcGVhdCIsImRyb3BDb3VudCIsIm1heERyb3BzIiwiY3VycmVudFkiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwidGV0cmlzIl0sInNvdXJjZVJvb3QiOiIifQ==