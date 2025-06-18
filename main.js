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
/* harmony import */ var _Piece_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Piece.js */ "./src/core/Piece.js");
/* harmony import */ var _rotation_RotationSystem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rotation/RotationSystem.js */ "./src/rotation/RotationSystem.js");
/* harmony import */ var _scoring_ScoreCalculator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scoring/ScoreCalculator.js */ "./src/scoring/ScoreCalculator.js");
 // Gameクラス
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

    // ドロップ間隔関連の初期化
    this.dropInterval = this.getDropInterval();
    this.isSoftDrop = false;

    // 回転システムとスコア計算器の初期化
    this.rotationSystem = new _rotation_RotationSystem_js__WEBPACK_IMPORTED_MODULE_4__.RotationSystem();
    this.scoreCalculator = new _scoring_ScoreCalculator_js__WEBPACK_IMPORTED_MODULE_5__.ScoreCalculator();

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
      return new _Piece_js__WEBPACK_IMPORTED_MODULE_3__.Piece(matrix, { x: x, y: y }, type);
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
      if (this.scoreCalculator.shouldLevelUp(this.lines, this.level)) {
        this.level = this.scoreCalculator.calculateLevel(this.lines);
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
      if (!this.piece || this.isGameOver) return false;

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
            boardY >= this.board.rows)
            {
              return true;
            }

            // ボード内でブロックがすでにある場合は衝突（y >= 0の場合のみ）
            if (boardY >= 0 &&
            this.board.grid[boardY] &&
            this.board.grid[boardY][boardX] !== 0) {
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

      // ゲームオーバー判定: ピースを一時的にY=0の位置に移動させて衝突判定を行う
      var originalY = this.piece.pos.y;
      this.piece.pos.y = 0; // 一時的にY座標を0に設定

      if (this.hasCollision()) {
        this.isGameOver = true;
        this.piece = null; // ゲームオーバー時にピースをボードに固定しない
      } else {
        this.piece.pos.y = originalY; // 衝突がなければ元の位置に戻す
      }
    }



    /**
     * ピースを1マス下に移動させる
     * @returns {boolean} 移動が成功したかどうか
     */ }, { key: "dropPiece", value:
    function dropPiece() {
      if (!this.piece || this.isGameOver) return false;

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

        // 新しいピースをスポーン
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
      return this.scoreCalculator.calculateLineScore(linesCleared, this.level);
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
    function rotatePiece(dir) {var _this = this;
      if (!this.piece || this.isGameOver) {
        // テスト環境では警告を出さない
        if (typeof process === 'undefined' || "development" !== 'test') {
          console.warn('No piece to rotate or game is over');
        }
        return false;
      }

      // 回転システムを使って回転を試行
      var result = this.rotationSystem.attemptRotation(
        this.piece,
        dir,
        function () {return _this.hasCollision();}
      );

      return result.success;
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
/* harmony export */   gameStateManager: () => (/* binding */ gameStateManager),
/* harmony export */   gameUI: () => (/* binding */ gameUI),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   initGame: () => (/* binding */ initGame),
/* harmony export */   playerDrop: () => (/* binding */ playerDrop),
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
      nextPiece: state.nextPiece
    };

    var nextPieceCanvas = document.getElementById('next-piece-canvas');
    renderer.render(gameData, nextPieceCanvas);
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

var exports = { init: init, initGame: initGame, playerMove: playerMove, playerRotate: playerRotate, playerDrop: playerDrop, gameUI: gameUI, gameState: gameState, gameStateManager: gameStateManager, renderer: renderer, resetGame: resetGame, update: update, setupEventListeners: setupEventListeners, draw: draw, tetrisGame: tetrisGame };
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
     * ゲーム全体を描画する
     * @param {Object} gameData - ゲームデータ
     * @param {Array<Array<number>>} gameData.boardGrid - ボードのグリッド
     * @param {Object} gameData.piece - 現在のピース
     * @param {Object} gameData.nextPiece - 次のピース
     * @param {HTMLCanvasElement} nextPieceCanvas - 次のピース用キャンバス
     */ }, { key: "render", value:
    function render(gameData) {var nextPieceCanvas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWLENBQ0Y7OztFQUNEQyxNQUFNLEVBQUU7RUFDTixTQUFTLEVBQUU7RUFDWCxTQUFTLEVBQUU7RUFDWCxTQUFTLEVBQUU7RUFDWCxTQUFTLEVBQUU7RUFDWCxTQUFTLEVBQUU7RUFDWCxTQUFTLEVBQUU7RUFDWCxTQUFTLEVBQUU7RUFDWCxTQUFTLENBQUU7RUFBQSxDQUNaO0VBQ0RDLFdBQVcsRUFBRTtJQUNYQyxJQUFJLEVBQUUsTUFBTTtJQUNaQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsTUFBTSxFQUFFLFFBQVE7SUFDaEJDLFNBQVMsRUFBRTtFQUNiO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0N2RUQ7QUFDQTs7QUFFTyxJQUFNQyxLQUFLO0VBQ2hCLFNBQUFBLE1BQUEsRUFBa0MsS0FBdEJDLElBQUksR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsRUFBRSxLQUFFRyxJQUFJLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUUsQ0FBQUksaUZBQUEsT0FBQU4sS0FBQTtJQUM5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNJLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNFLEtBQUssQ0FBQyxDQUFDO0VBQ2QsQ0FBQyxPQUFBQyw4RUFBQSxDQUFBUixLQUFBLEtBQUFTLEdBQUEsV0FBQUMsS0FBQTs7SUFFRCxTQUFBSCxLQUFLQSxDQUFBLEVBQUcsS0FBQUksS0FBQTtNQUNOLElBQUksQ0FBQ0MsSUFBSSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQyxFQUFFWCxNQUFNLEVBQUUsSUFBSSxDQUFDRSxJQUFJLENBQUMsQ0FBQyxFQUFFLG9CQUFNUSxLQUFLLENBQUNGLEtBQUksQ0FBQ1YsSUFBSSxDQUFDLENBQUNjLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQztJQUMvRSxDQUFDLE1BQUFOLEdBQUEsY0FBQUMsS0FBQTs7SUFFRCxTQUFBTSxRQUFRQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNiLE9BQU9ELENBQUMsSUFBSSxDQUFDLElBQUlBLENBQUMsR0FBRyxJQUFJLENBQUNoQixJQUFJLElBQUlpQixDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLEdBQUcsSUFBSSxDQUFDYixJQUFJO0lBQzNELENBQUMsTUFBQUksR0FBQSxhQUFBQyxLQUFBOztJQUVELFNBQUFTLE9BQU9BLENBQUNGLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ1osT0FBTyxJQUFJLENBQUNGLFFBQVEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNOLElBQUksQ0FBQ00sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckQsQ0FBQyxNQUFBUixHQUFBLGFBQUFDLEtBQUE7O0lBRUQsU0FBQVUsT0FBT0EsQ0FBQ0gsQ0FBQyxFQUFFQyxDQUFDLEVBQUVSLEtBQUssRUFBRTtNQUNuQixJQUFJLElBQUksQ0FBQ00sUUFBUSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUdQLEtBQUs7SUFDbEQsQ0FBQyxNQUFBRCxHQUFBLGFBQUFDLEtBQUE7O0lBRUQsU0FBQVcsT0FBT0EsQ0FBQ0osQ0FBQyxFQUFFQyxDQUFDLEVBQUU7TUFDWixJQUFJLENBQUMsSUFBSSxDQUFDRixRQUFRLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNOLElBQUksQ0FBQ00sQ0FBQyxDQUFDLEVBQUU7UUFDekMsT0FBTyxJQUFJO01BQ2I7TUFDQSxPQUFPLElBQUksQ0FBQ04sSUFBSSxDQUFDTSxDQUFDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsTUFBQVIsR0FBQSxXQUFBQyxLQUFBOztJQUVELFNBQUFZLEtBQUtBLENBQUNDLEtBQUssRUFBRTtNQUNYLEtBQUssSUFBSUwsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSyxLQUFLLENBQUNDLE1BQU0sQ0FBQ3JCLE1BQU0sRUFBRWUsQ0FBQyxFQUFFLEVBQUU7UUFDNUMsS0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDTixDQUFDLENBQUMsQ0FBQ2YsTUFBTSxFQUFFYyxDQUFDLEVBQUUsRUFBRTtVQUMvQyxJQUFJTSxLQUFLLENBQUNDLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDLENBQUNELENBQUMsQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQ0csT0FBTyxDQUFDRyxLQUFLLENBQUNFLEdBQUcsQ0FBQ1IsQ0FBQyxHQUFHQSxDQUFDLEVBQUVNLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUCxDQUFDLEdBQUdBLENBQUMsRUFBRUssS0FBSyxDQUFDQyxNQUFNLENBQUNOLENBQUMsQ0FBQyxDQUFDRCxDQUFDLENBQUMsQ0FBQztVQUNwRTtRQUNGO01BQ0Y7SUFDRixDQUFDLE1BQUFSLEdBQUEsZ0JBQUFDLEtBQUE7O0lBRUQsU0FBQWdCLFVBQVVBLENBQUEsRUFBRztNQUNYLElBQUksQ0FBQyxJQUFJLENBQUNkLElBQUksSUFBSSxDQUFDQyxLQUFLLENBQUNjLE9BQU8sQ0FBQyxJQUFJLENBQUNmLElBQUksQ0FBQyxFQUFFO1FBQzNDZ0IsT0FBTyxDQUFDQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDbkMsT0FBTyxDQUFDO01BQ1Y7O01BRUEsSUFBSUMsT0FBTyxHQUFHLENBQUM7TUFDZixJQUFNQyxPQUFPLEdBQUcsRUFBRTs7TUFFbEIsS0FBSyxJQUFJYixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsSUFBSSxDQUFDTixJQUFJLENBQUNULE1BQU0sRUFBRWUsQ0FBQyxFQUFFLEVBQUU7UUFDekMsSUFBTWMsR0FBRyxHQUFHLElBQUksQ0FBQ3BCLElBQUksQ0FBQ00sQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQ0wsS0FBSyxDQUFDYyxPQUFPLENBQUNLLEdBQUcsQ0FBQyxFQUFFO1VBQ3ZCSixPQUFPLENBQUNLLElBQUkseUJBQUFDLE1BQUEsQ0FBeUJoQixDQUFDLFFBQUtjLEdBQUcsQ0FBQztVQUMvQztRQUNGOztRQUVBLElBQUk7VUFDRixJQUFJQSxHQUFHLENBQUNHLEtBQUssQ0FBQyxVQUFBQyxJQUFJLFVBQUlBLElBQUksS0FBSyxDQUFDLEdBQUMsRUFBRTtZQUNqQ04sT0FBTyxFQUFFO1VBQ1gsQ0FBQyxNQUFNO1lBQ0xDLE9BQU8sQ0FBQ00sSUFBSSxDQUFBQyxvRkFBQSxDQUFLTixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDMUI7UUFDRixDQUFDLENBQUMsT0FBT0gsS0FBSyxFQUFFO1VBQ2RELE9BQU8sQ0FBQ0MsS0FBSyx5QkFBQUssTUFBQSxDQUF5QmhCLENBQUMsUUFBS1csS0FBSyxDQUFDO1VBQ2xERSxPQUFPLENBQUNNLElBQUksQ0FBQUMsb0ZBQUEsQ0FBS04sR0FBRyxDQUFDLENBQUM7UUFDeEI7TUFDRjs7TUFFQTtNQUNBLE9BQU9ELE9BQU8sQ0FBQzVCLE1BQU0sR0FBRyxJQUFJLENBQUNFLElBQUksRUFBRTtRQUNqQzBCLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQ1osSUFBSSxDQUFDLENBQUNjLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMzQzs7TUFFQSxJQUFJLENBQUNILElBQUksR0FBR21CLE9BQU87TUFDbkIsT0FBT0QsT0FBTztJQUNoQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQzlFSDtBQUNBO0FBQ21DO0FBQ0E7QUFDNEI7QUFDQzs7QUFFaEU7QUFDQSxJQUFNYSxhQUFhLEdBQUc7RUFDcEJDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUViLENBQUM7OztBQUdNLElBQU1DLElBQUk7RUFDZixTQUFBQSxLQUFBLEVBQXFELEtBQXpDbEQsSUFBSSxHQUFB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LEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVDLENBQ0Y7Ozs7QUFFTSxJQUFNQyxXQUFXLEdBQUc7QUFDekI7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQzs7QUFDRDtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzFDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDMUM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQyxDQUNGOzs7O0FBRU0sSUFBTXpLLGNBQWM7RUFDekIsU0FBQUEsZUFBQSxFQUFjLENBQUFuQyxpRkFBQSxPQUFBbUMsY0FBQTtJQUNaLElBQUksQ0FBQzBLLFFBQVEsR0FBRztNQUNkLEdBQUcsRUFBRUQsV0FBVztNQUNoQixTQUFTLEVBQUVEO0lBQ2IsQ0FBQztFQUNIOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsS0FKRSxPQUFBek0sOEVBQUEsQ0FBQWlDLGNBQUEsS0FBQWhDLEdBQUEsaUJBQUFDLEtBQUE7SUFLQSxTQUFBME0sV0FBV0EsQ0FBQ0MsU0FBUyxFQUFFO01BQ3JCLE9BQU8sSUFBSSxDQUFDRixRQUFRLENBQUNFLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQ0YsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM3RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQTFNLEdBQUEsMkJBQUFDLEtBQUE7SUFLQSxTQUFBNE0scUJBQXFCQSxDQUFDMUcsYUFBYSxFQUFFO01BQ25DLE9BQU8sT0FBT0EsYUFBYSxLQUFLLFFBQVEsSUFBSUEsYUFBYSxJQUFJLENBQUMsSUFBSUEsYUFBYSxJQUFJLENBQUM7SUFDdEY7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FORSxNQUFBbkcsR0FBQSxvQkFBQUMsS0FBQTtJQU9BLFNBQUE2TSxjQUFjQSxDQUFDRixTQUFTLEVBQUVHLHFCQUFxQixFQUFFQyxTQUFTLEVBQUU7TUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQ0gscUJBQXFCLENBQUNFLHFCQUFxQixDQUFDLEVBQUU7UUFDdEQ1TCxPQUFPLENBQUNDLEtBQUssQ0FBQyxVQUFVLEVBQUUyTCxxQkFBcUIsQ0FBQztRQUNoRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ25COztNQUVBLElBQU1MLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDO01BQzVDLElBQU1LLEtBQUssR0FBR1AsUUFBUSxDQUFDSyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7O01BRWpELElBQUksQ0FBQ0UsS0FBSyxJQUFJLENBQUM3TSxLQUFLLENBQUNjLE9BQU8sQ0FBQytMLEtBQUssQ0FBQyxFQUFFO1FBQ25DOUwsT0FBTyxDQUFDQyxLQUFLLENBQUMscUJBQXFCLEVBQUU2TCxLQUFLLEVBQUUscUJBQXFCLEVBQUVGLHFCQUFxQixDQUFDO1FBQ3pGLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbkI7O01BRUE7TUFDQSxJQUFNRyxPQUFPLEdBQUdGLFNBQVMsS0FBSyxDQUFDLEdBQUFuTCxvRkFBQTtRQUN2Qm9MLEtBQUssRUFBRTtNQUFBLEVBQ1hBLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLElBQUksRUFBSTtRQUNoQixJQUFJLENBQUNoTixLQUFLLENBQUNjLE9BQU8sQ0FBQ2tNLElBQUksQ0FBQyxJQUFJQSxJQUFJLENBQUMxTixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdDeUIsT0FBTyxDQUFDQyxLQUFLLENBQUMsMkJBQTJCLEVBQUVnTSxJQUFJLENBQUM7VUFDaEQsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZjtRQUNBLE9BQU8sQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdCLENBQUMsQ0FBQzs7TUFFTixPQUFPRixPQUFPO0lBQ2hCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkUsTUFBQWxOLEdBQUEscUJBQUFDLEtBQUE7SUFPQSxTQUFBK0YsZUFBZUEsQ0FBQ2xGLEtBQUssRUFBRWtNLFNBQVMsRUFBRUssZ0JBQWdCLEVBQUU7TUFDbEQsSUFBSSxDQUFDdk0sS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUNYLEtBQUssQ0FBQ2MsT0FBTyxDQUFDSixLQUFLLENBQUNDLE1BQU0sQ0FBQyxFQUFFO1FBQzNESSxPQUFPLENBQUNLLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztRQUMxQyxPQUFPLEVBQUV5RSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0I7O01BRUEsSUFBSSxPQUFPb0gsZ0JBQWdCLEtBQUssVUFBVSxFQUFFO1FBQzFDbE0sT0FBTyxDQUFDQyxLQUFLLENBQUMsc0NBQXNDLENBQUM7UUFDckQsT0FBTyxFQUFFNkUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQzNCOztNQUVBLElBQUk7UUFDRjtRQUNBLElBQU1xSCxXQUFXLEdBQUFwSCxhQUFBLEtBQVFwRixLQUFLLENBQUNFLEdBQUcsQ0FBRTtRQUNwQyxJQUFNdU0sY0FBYyxHQUFHek0sS0FBSyxDQUFDQyxNQUFNLENBQUNvTSxHQUFHLENBQUMsVUFBQTVMLEdBQUc7WUFDekNuQixLQUFLLENBQUNjLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLEdBQUFNLG9GQUFBLENBQU9OLEdBQUcsSUFBSSxFQUFFO1FBQ3BDLENBQUM7UUFDRCxJQUFNd0wscUJBQXFCLEdBQUdqTSxLQUFLLENBQUNxRixhQUFhOztRQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDMEcscUJBQXFCLENBQUNFLHFCQUFxQixDQUFDLEVBQUU7VUFDdEQsT0FBTyxFQUFFOUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCOztRQUVBO1FBQ0FuRixLQUFLLENBQUN1RixNQUFNLENBQUMyRyxTQUFTLENBQUM7O1FBRXZCO1FBQ0EsSUFBTVEsV0FBVyxHQUFHLElBQUksQ0FBQ1YsY0FBYyxDQUFDaE0sS0FBSyxDQUFDZ0QsSUFBSSxFQUFFaUoscUJBQXFCLEVBQUVDLFNBQVMsQ0FBQyxDQUFDLElBQUFTLFNBQUEsR0FBQUMsMEJBQUE7O1lBRXJERixXQUFXLEVBQUFHLEtBQUEsTUFBNUMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBOEMsS0FBQUMsV0FBQSxHQUFBQyxnRkFBQSxDQUFBTCxLQUFBLENBQUExTixLQUFBLEtBQWxDZ08sT0FBTyxHQUFBRixXQUFBLElBQUVHLE9BQU8sR0FBQUgsV0FBQTtZQUMxQmpOLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUixDQUFDLElBQUl5TixPQUFPO1lBQ3RCbk4sS0FBSyxDQUFDRSxHQUFHLENBQUNQLENBQUMsSUFBSXlOLE9BQU87O1lBRXRCLElBQUksQ0FBQ2IsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO2NBQ3ZCO2NBQ0EsT0FBTyxFQUFFcEgsT0FBTyxFQUFFLElBQUksRUFBRWtJLGFBQWEsRUFBQWpJLGFBQUEsS0FBT3BGLEtBQUssQ0FBQ0UsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUMzRDs7WUFFQTtZQUNBRixLQUFLLENBQUNFLEdBQUcsQ0FBQ1IsQ0FBQyxJQUFJeU4sT0FBTztZQUN0Qm5OLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUCxDQUFDLElBQUl5TixPQUFPO1VBQ3hCOztVQUVBO1FBQUEsU0FBQUUsR0FBQSxHQUFBWCxTQUFBLENBQUFZLENBQUEsQ0FBQUQsR0FBQSxhQUFBWCxTQUFBLENBQUFhLENBQUEsSUFDQXhOLEtBQUssQ0FBQ0MsTUFBTSxHQUFHd00sY0FBYztRQUM3QnpNLEtBQUssQ0FBQ3FGLGFBQWEsR0FBRzRHLHFCQUFxQjtRQUMzQ2pNLEtBQUssQ0FBQ0UsR0FBRyxHQUFBa0YsYUFBQSxLQUFRb0gsV0FBVyxDQUFFOztRQUU5QixPQUFPLEVBQUVySCxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0IsQ0FBQyxDQUFDLE9BQU83RSxLQUFLLEVBQUU7UUFDZEQsT0FBTyxDQUFDQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUVBLEtBQUssQ0FBQztRQUN0RCxPQUFPLEVBQUU2RSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0I7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUFqRyxHQUFBLHFCQUFBQyxLQUFBO0lBSUEsU0FBQXNPLGVBQWVBLENBQUEsRUFBRztNQUNoQixJQUFNQyxjQUFjLEdBQUcsQ0FBQztNQUN4QixJQUFNQyxhQUFhLEdBQUcsQ0FBQzs7TUFFdkIsU0FBQUMsRUFBQSxNQUFBQyxlQUFBLEdBQW9DNUssTUFBTSxDQUFDNkssT0FBTyxDQUFDLElBQUksQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFBZ0MsRUFBQSxHQUFBQyxlQUFBLENBQUFqUCxNQUFBLEVBQUFnUCxFQUFBLElBQUUsQ0FBOUQsSUFBQUcsa0JBQUEsR0FBQWIsZ0ZBQUEsQ0FBQVcsZUFBQSxDQUFBRCxFQUFBLE1BQU85QixTQUFTLEdBQUFpQyxrQkFBQSxJQUFFbkMsUUFBUSxHQUFBbUMsa0JBQUE7UUFDN0IsSUFBSSxDQUFDek8sS0FBSyxDQUFDYyxPQUFPLENBQUN3TCxRQUFRLENBQUMsSUFBSUEsUUFBUSxDQUFDaE4sTUFBTSxLQUFLOE8sY0FBYyxFQUFFO1VBQ2xFck4sT0FBTyxDQUFDQyxLQUFLLG9DQUFBSyxNQUFBLENBQW9DbUwsU0FBUyxpQkFBQW5MLE1BQUEsQ0FBYytNLGNBQWMsWUFBUyxDQUFDO1VBQ2hHLE9BQU8sS0FBSztRQUNkOztRQUVBLEtBQUssSUFBSXBILEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR3NGLFFBQVEsQ0FBQ2hOLE1BQU0sRUFBRTBILEtBQUssRUFBRSxFQUFFO1VBQ3BELElBQU02RixLQUFLLEdBQUdQLFFBQVEsQ0FBQ3RGLEtBQUssQ0FBQztVQUM3QixJQUFJLENBQUNoSCxLQUFLLENBQUNjLE9BQU8sQ0FBQytMLEtBQUssQ0FBQyxJQUFJQSxLQUFLLENBQUN2TixNQUFNLEtBQUsrTyxhQUFhLEVBQUU7WUFDM0R0TixPQUFPLENBQUNDLEtBQUssc0JBQUFLLE1BQUEsQ0FBc0JtTCxTQUFTLGFBQUFuTCxNQUFBLENBQVUyRixLQUFLLGlCQUFBM0YsTUFBQSxDQUFjZ04sYUFBYSxXQUFRLENBQUM7WUFDL0YsT0FBTyxLQUFLO1VBQ2Q7O1VBRUEsS0FBSyxJQUFJSyxTQUFTLEdBQUcsQ0FBQyxFQUFFQSxTQUFTLEdBQUc3QixLQUFLLENBQUN2TixNQUFNLEVBQUVvUCxTQUFTLEVBQUUsRUFBRTtZQUM3RCxJQUFNMUIsSUFBSSxHQUFHSCxLQUFLLENBQUM2QixTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDMU8sS0FBSyxDQUFDYyxPQUFPLENBQUNrTSxJQUFJLENBQUMsSUFBSUEsSUFBSSxDQUFDMU4sTUFBTSxLQUFLLENBQUM7WUFDekMsT0FBTzBOLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksT0FBT0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtjQUM5RGpNLE9BQU8sQ0FBQ0MsS0FBSyw0QkFBQUssTUFBQSxDQUE0Qm1MLFNBQVMsYUFBQW5MLE1BQUEsQ0FBVTJGLEtBQUssWUFBQTNGLE1BQUEsQ0FBU3FOLFNBQVMsQ0FBRSxDQUFDO2NBQ3RGLE9BQU8sS0FBSztZQUNkO1VBQ0Y7UUFDRjtNQUNGOztNQUVBLE9BQU8sSUFBSTtJQUNiOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQTlPLEdBQUEsbUJBQUFDLEtBQUE7SUFJQSxTQUFBOE8sYUFBYUEsQ0FBQSxFQUFHO01BQ2QsT0FBTztRQUNMQyxNQUFNLEVBQUUsNkJBQTZCO1FBQ3JDQyxlQUFlLEVBQUVsTCxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMwSSxRQUFRLENBQUM7UUFDM0N3QyxPQUFPLEVBQUUsSUFBSSxDQUFDWCxlQUFlLENBQUM7TUFDaEMsQ0FBQztJQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5JLElBQU10TSxlQUFlO0VBQzFCLFNBQUFBLGdCQUFBLEVBQWMsQ0FBQXBDLGlGQUFBLE9BQUFvQyxlQUFBO0lBQ1o7SUFDQSxJQUFJLENBQUNrTixVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7SUFFM0M7SUFDQSxJQUFJLENBQUNwTSxhQUFhLEdBQUcsRUFBRTs7SUFFdkI7SUFDQSxJQUFJLENBQUNxTSxhQUFhLEdBQUcsQ0FBQzs7SUFFdEI7SUFDQSxJQUFJLENBQUNDLGFBQWEsR0FBRyxDQUFDO0VBQ3hCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxFLE9BQUF0UCw4RUFBQSxDQUFBa0MsZUFBQSxLQUFBakMsR0FBQSx3QkFBQUMsS0FBQTtJQU1BLFNBQUF1RixrQkFBa0JBLENBQUNILFlBQVksRUFBRTVCLEtBQUssRUFBRTtNQUN0QyxJQUFJLE9BQU80QixZQUFZLEtBQUssUUFBUSxJQUFJQSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3hEbEUsT0FBTyxDQUFDSyxJQUFJLENBQUMsNkJBQTZCLEVBQUU2RCxZQUFZLENBQUM7UUFDekQsT0FBTyxDQUFDO01BQ1Y7O01BRUEsSUFBSSxPQUFPNUIsS0FBSyxLQUFLLFFBQVEsSUFBSUEsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUMxQ3RDLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDLHNCQUFzQixFQUFFaUMsS0FBSyxDQUFDO1FBQzNDLE9BQU8sQ0FBQztNQUNWOztNQUVBLElBQU1JLEtBQUssR0FBR04sSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQytMLEdBQUcsQ0FBQyxDQUFDLEVBQUUvTCxJQUFJLENBQUNVLEtBQUssQ0FBQ29CLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDOEosVUFBVSxDQUFDelAsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUN6RixPQUFPLElBQUksQ0FBQ3lQLFVBQVUsQ0FBQ3RMLEtBQUssQ0FBQyxHQUFHSixLQUFLO0lBQ3ZDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBekQsR0FBQSw0QkFBQUMsS0FBQTtJQUtBLFNBQUFzUCxzQkFBc0JBLENBQUNDLFlBQVksRUFBRTtNQUNuQyxJQUFJLE9BQU9BLFlBQVksS0FBSyxRQUFRLElBQUlBLFlBQVksR0FBRyxDQUFDLEVBQUU7UUFDeEQsT0FBTyxDQUFDO01BQ1Y7O01BRUEsT0FBT0EsWUFBWSxHQUFHLElBQUksQ0FBQ0osYUFBYTtJQUMxQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQXBQLEdBQUEsNEJBQUFDLEtBQUE7SUFLQSxTQUFBd1Asc0JBQXNCQSxDQUFDRCxZQUFZLEVBQUU7TUFDbkMsSUFBSSxPQUFPQSxZQUFZLEtBQUssUUFBUSxJQUFJQSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3hELE9BQU8sQ0FBQztNQUNWOztNQUVBLE9BQU9BLFlBQVksR0FBRyxJQUFJLENBQUNILGFBQWE7SUFDMUM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUFyUCxHQUFBLG9CQUFBQyxLQUFBO0lBS0EsU0FBQXdFLGNBQWNBLENBQUNpTCxVQUFVLEVBQUU7TUFDekIsSUFBSSxPQUFPQSxVQUFVLEtBQUssUUFBUSxJQUFJQSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ3BELE9BQU8sQ0FBQztNQUNWOztNQUVBLE9BQU9uTSxJQUFJLENBQUNVLEtBQUssQ0FBQ3lMLFVBQVUsR0FBRyxJQUFJLENBQUMzTSxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxFLE1BQUEvQyxHQUFBLG1CQUFBQyxLQUFBO0lBTUEsU0FBQXVFLGFBQWFBLENBQUNtTCxZQUFZLEVBQUVDLFlBQVksRUFBRTtNQUN4QyxJQUFNQyxRQUFRLEdBQUcsSUFBSSxDQUFDcEwsY0FBYyxDQUFDa0wsWUFBWSxDQUFDO01BQ2xELE9BQU9FLFFBQVEsR0FBR0QsWUFBWTtJQUNoQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQTVQLEdBQUEsNEJBQUFDLEtBQUE7SUFLQSxTQUFBNlAsc0JBQXNCQSxDQUFDSCxZQUFZLEVBQUU7TUFDbkMsSUFBSSxPQUFPQSxZQUFZLEtBQUssUUFBUSxJQUFJQSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDNU0sYUFBYTtNQUMzQjs7TUFFQSxJQUFNZ04saUJBQWlCLEdBQUdKLFlBQVksR0FBRyxJQUFJLENBQUM1TSxhQUFhO01BQzNELE9BQU8sSUFBSSxDQUFDQSxhQUFhLEdBQUdnTixpQkFBaUI7SUFDL0M7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkUsTUFBQS9QLEdBQUEseUJBQUFDLEtBQUE7SUFTQSxTQUFBK1AsbUJBQW1CQSxDQUFDQyxTQUFTLEVBQUU7TUFDN0IsSUFBQUMscUJBQUE7Ozs7O1FBS0lELFNBQVMsQ0FKWDVLLFlBQVksQ0FBWkEsWUFBWSxHQUFBNksscUJBQUEsY0FBRyxDQUFDLEdBQUFBLHFCQUFBLENBQUFDLGdCQUFBLEdBSWRGLFNBQVMsQ0FIWHhNLEtBQUssQ0FBTEEsS0FBSyxHQUFBME0sZ0JBQUEsY0FBRyxDQUFDLEdBQUFBLGdCQUFBLENBQUFDLHFCQUFBLEdBR1BILFNBQVMsQ0FGWEksZ0JBQWdCLENBQWhCQSxnQkFBZ0IsR0FBQUQscUJBQUEsY0FBRyxDQUFDLEdBQUFBLHFCQUFBLENBQUFFLHFCQUFBLEdBRWxCTCxTQUFTLENBRFhNLGdCQUFnQixDQUFoQkEsZ0JBQWdCLEdBQUFELHFCQUFBLGNBQUcsQ0FBQyxHQUFBQSxxQkFBQTs7TUFHdEIsSUFBTUUsU0FBUyxHQUFHLElBQUksQ0FBQ2hMLGtCQUFrQixDQUFDSCxZQUFZLEVBQUU1QixLQUFLLENBQUM7TUFDOUQsSUFBTWdOLGFBQWEsR0FBRyxJQUFJLENBQUNsQixzQkFBc0IsQ0FBQ2MsZ0JBQWdCLENBQUM7TUFDbkUsSUFBTUssYUFBYSxHQUFHLElBQUksQ0FBQ2pCLHNCQUFzQixDQUFDYyxnQkFBZ0IsQ0FBQztNQUNuRSxJQUFNSSxVQUFVLEdBQUdILFNBQVMsR0FBR0MsYUFBYSxHQUFHQyxhQUFhOztNQUU1RCxPQUFPO1FBQ0xDLFVBQVUsRUFBVkEsVUFBVTtRQUNWSCxTQUFTLEVBQVRBLFNBQVM7UUFDVEMsYUFBYSxFQUFiQSxhQUFhO1FBQ2JDLGFBQWEsRUFBYkE7TUFDRixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBFLE1BQUExUSxHQUFBLGtCQUFBQyxLQUFBO0lBUUEsU0FBQTJRLFlBQVlBLENBQUNDLE1BQU0sRUFBRTtNQUNuQixJQUFJQSxNQUFNLENBQUMxQixVQUFVLElBQUkvTyxLQUFLLENBQUNjLE9BQU8sQ0FBQzJQLE1BQU0sQ0FBQzFCLFVBQVUsQ0FBQyxFQUFFO1FBQ3pELElBQUksQ0FBQ0EsVUFBVSxHQUFBdE4sb0ZBQUEsQ0FBT2dQLE1BQU0sQ0FBQzFCLFVBQVUsQ0FBQztNQUMxQzs7TUFFQSxJQUFJLE9BQU8wQixNQUFNLENBQUM5TixhQUFhLEtBQUssUUFBUSxJQUFJOE4sTUFBTSxDQUFDOU4sYUFBYSxHQUFHLENBQUMsRUFBRTtRQUN4RSxJQUFJLENBQUNBLGFBQWEsR0FBRzhOLE1BQU0sQ0FBQzlOLGFBQWE7TUFDM0M7O01BRUEsSUFBSSxPQUFPOE4sTUFBTSxDQUFDekIsYUFBYSxLQUFLLFFBQVEsSUFBSXlCLE1BQU0sQ0FBQ3pCLGFBQWEsSUFBSSxDQUFDLEVBQUU7UUFDekUsSUFBSSxDQUFDQSxhQUFhLEdBQUd5QixNQUFNLENBQUN6QixhQUFhO01BQzNDOztNQUVBLElBQUksT0FBT3lCLE1BQU0sQ0FBQ3hCLGFBQWEsS0FBSyxRQUFRLElBQUl3QixNQUFNLENBQUN4QixhQUFhLElBQUksQ0FBQyxFQUFFO1FBQ3pFLElBQUksQ0FBQ0EsYUFBYSxHQUFHd0IsTUFBTSxDQUFDeEIsYUFBYTtNQUMzQztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQXJQLEdBQUEsZUFBQUMsS0FBQTtJQUlBLFNBQUE2USxTQUFTQSxDQUFBLEVBQUc7TUFDVixPQUFPO1FBQ0wzQixVQUFVLEVBQUF0TixvRkFBQSxDQUFNLElBQUksQ0FBQ3NOLFVBQVUsQ0FBQztRQUNoQ3BNLGFBQWEsRUFBRSxJQUFJLENBQUNBLGFBQWE7UUFDakNxTSxhQUFhLEVBQUUsSUFBSSxDQUFDQSxhQUFhO1FBQ2pDQyxhQUFhLEVBQUUsSUFBSSxDQUFDQTtNQUN0QixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEUsTUFBQXJQLEdBQUEsdUJBQUFDLEtBQUE7SUFNQSxTQUFBOFEsaUJBQWlCQSxDQUFDQyxZQUFZLEVBQUVDLFFBQVEsRUFBRTtNQUN4QyxPQUFPO1FBQ0xDLGFBQWEsRUFBRUYsWUFBWTtRQUMzQkMsUUFBUSxFQUFFRCxZQUFZLEdBQUdDLFFBQVE7UUFDakNFLFFBQVEsRUFBRUY7TUFDWixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUFqUixHQUFBLGtCQUFBQyxLQUFBO0lBS0EsU0FBQW1SLFlBQVlBLENBQUMzTixLQUFLLEVBQUU7TUFDbEIsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxJQUFJQSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQzFDQSxLQUFLLEdBQUcsQ0FBQztNQUNYOztNQUVBLE9BQU87UUFDTEEsS0FBSyxFQUFMQSxLQUFLO1FBQ0w0TixhQUFhLEVBQUU1TixLQUFLLEdBQUcsSUFBSSxDQUFDVixhQUFhO1FBQ3pDdU8sZUFBZSxFQUFFN04sS0FBSztRQUN0QjhOLFdBQVcsRUFBRSxDQUFDOU4sS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNWO01BQ2xDLENBQUM7SUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztxdUJDdk1JLElBQU02RCxnQkFBZ0I7RUFDM0IsU0FBQUEsaUJBQVloSCxJQUFJLEVBQUVKLElBQUksRUFBRSxDQUFBSyxpRkFBQSxPQUFBK0csZ0JBQUE7SUFDdEIsSUFBSSxDQUFDUSxLQUFLLEdBQUc7TUFDWHlELEdBQUcsRUFBRSxJQUFJO01BQ1RKLE1BQU0sRUFBRSxJQUFJO01BQ1o3SCxLQUFLLEVBQUUsRUFBRTtNQUNUL0QsSUFBSSxFQUFFZSxJQUFJO01BQ1ZoQixJQUFJLEVBQUVZLElBQUk7TUFDVnNCLEtBQUssRUFBRSxJQUFJO01BQ1grQixTQUFTLEVBQUUsSUFBSTtNQUNmdUIsS0FBSyxFQUFFLENBQUM7TUFDUkQsS0FBSyxFQUFFLENBQUM7TUFDUlYsS0FBSyxFQUFFLENBQUM7TUFDUm9HLFdBQVcsRUFBRSxDQUFDO01BQ2Q3RyxZQUFZLEVBQUUsSUFBSTtNQUNsQjJHLFFBQVEsRUFBRSxDQUFDO01BQ1hILFVBQVUsRUFBRSxJQUFJO01BQ2hCbkYsVUFBVSxFQUFFLEtBQUs7TUFDakJDLE1BQU0sRUFBRSxLQUFLO01BQ2JOLElBQUksRUFBRSxDQUFDLENBQUM7TUFDUmQsVUFBVSxFQUFFO0lBQ2QsQ0FBQztFQUNIOztFQUVBO0FBQ0Y7QUFDQTtBQUNBLEtBSEUsT0FBQW5ELDhFQUFBLENBQUE2RyxnQkFBQSxLQUFBNUcsR0FBQSxjQUFBQyxLQUFBO0lBSUEsU0FBQTJILFFBQVFBLENBQUEsRUFBRztNQUNULE9BQUExQixhQUFBLEtBQVksSUFBSSxDQUFDa0IsS0FBSztJQUN4Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQXBILEdBQUEsU0FBQUMsS0FBQTtJQUtBLFNBQUFvSCxHQUFHQSxDQUFDckgsR0FBRyxFQUFFO01BQ1AsT0FBTyxJQUFJLENBQUNvSCxLQUFLLENBQUNwSCxHQUFHLENBQUM7SUFDeEI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUFBLEdBQUEsU0FBQUMsS0FBQTtJQUtBLFNBQUF5SCxHQUFHQSxDQUFDMUgsR0FBRyxFQUFFQyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUNtSCxLQUFLLENBQUNwSCxHQUFHLENBQUMsR0FBR0MsS0FBSztJQUN6Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUFELEdBQUEsWUFBQUMsS0FBQTtJQUlBLFNBQUFxSixNQUFNQSxDQUFDa0ksT0FBTyxFQUFFO01BQ2R6TixNQUFNLENBQUMwTixNQUFNLENBQUMsSUFBSSxDQUFDckssS0FBSyxFQUFFb0ssT0FBTyxDQUFDO0lBQ3BDOztJQUVBO0FBQ0Y7QUFDQSxPQUZFLE1BQUF4UixHQUFBLGVBQUFDLEtBQUE7SUFHQSxTQUFBdUgsU0FBU0EsQ0FBQSxFQUFHLEtBQUF0SCxLQUFBO01BQ1YsSUFBSSxDQUFDa0gsS0FBSyxDQUFDeEUsS0FBSyxHQUFHeEMsS0FBSyxDQUFDLElBQUksQ0FBQ2dILEtBQUssQ0FBQ3ZJLElBQUksQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDNk0sR0FBRyxDQUFDLG9CQUFNL00sS0FBSyxDQUFDRixLQUFJLENBQUNrSCxLQUFLLENBQUN4SSxJQUFJLENBQUMsQ0FBQzBCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQztJQUNoRzs7SUFFQTtBQUNGO0FBQ0EsT0FGRSxNQUFBTixHQUFBLFdBQUFDLEtBQUE7SUFHQSxTQUFBb0QsS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDK0QsS0FBSyxDQUFDaEQsS0FBSyxHQUFHLENBQUM7TUFDcEIsSUFBSSxDQUFDZ0QsS0FBSyxDQUFDakQsS0FBSyxHQUFHLENBQUM7TUFDcEIsSUFBSSxDQUFDaUQsS0FBSyxDQUFDM0QsS0FBSyxHQUFHLENBQUM7TUFDcEIsSUFBSSxDQUFDMkQsS0FBSyxDQUFDL0MsVUFBVSxHQUFHLEtBQUs7TUFDN0IsSUFBSSxDQUFDK0MsS0FBSyxDQUFDOUMsTUFBTSxHQUFHLEtBQUs7TUFDekIsSUFBSSxDQUFDOEMsS0FBSyxDQUFDeUMsV0FBVyxHQUFHLENBQUM7TUFDMUIsSUFBSSxDQUFDekMsS0FBSyxDQUFDcEUsWUFBWSxHQUFHLElBQUk7TUFDOUIsSUFBSSxDQUFDb0UsS0FBSyxDQUFDdUMsUUFBUSxHQUFHLENBQUM7TUFDdkIsSUFBSSxDQUFDdkMsS0FBSyxDQUFDbEUsVUFBVSxHQUFHLEtBQUs7O01BRTdCLElBQUksSUFBSSxDQUFDa0UsS0FBSyxDQUFDb0MsVUFBVSxFQUFFO1FBQ3pCa0ksb0JBQW9CLENBQUMsSUFBSSxDQUFDdEssS0FBSyxDQUFDb0MsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ29DLFVBQVUsR0FBRyxJQUFJO01BQzlCOztNQUVBLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQXhILEdBQUEsa0JBQUFDLEtBQUE7SUFJQSxTQUFBNkksWUFBWUEsQ0FBQzZJLFlBQVksRUFBRTtNQUN6QixJQUFJLENBQUNBLFlBQVksRUFBRTs7TUFFbkIsSUFBSSxDQUFDdkssS0FBSyxDQUFDaEQsS0FBSyxHQUFHdU4sWUFBWSxDQUFDdk4sS0FBSyxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDZ0QsS0FBSyxDQUFDakQsS0FBSyxHQUFHd04sWUFBWSxDQUFDeE4sS0FBSyxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDaUQsS0FBSyxDQUFDM0QsS0FBSyxHQUFHa08sWUFBWSxDQUFDbE8sS0FBSyxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDMkQsS0FBSyxDQUFDL0MsVUFBVSxHQUFHc04sWUFBWSxDQUFDdE4sVUFBVSxJQUFJLEtBQUs7TUFDeEQsSUFBSSxDQUFDK0MsS0FBSyxDQUFDdEcsS0FBSyxHQUFHNlEsWUFBWSxDQUFDN1EsS0FBSyxJQUFJLElBQUk7TUFDN0MsSUFBSSxDQUFDc0csS0FBSyxDQUFDdkUsU0FBUyxHQUFHOE8sWUFBWSxDQUFDOU8sU0FBUyxJQUFJLElBQUk7O01BRXJELElBQUk4TyxZQUFZLENBQUMvTyxLQUFLLElBQUkrTyxZQUFZLENBQUMvTyxLQUFLLENBQUN6QyxJQUFJLEVBQUU7UUFDakQsSUFBSSxDQUFDaUgsS0FBSyxDQUFDeEUsS0FBSyxHQUFHK08sWUFBWSxDQUFDL08sS0FBSyxDQUFDekMsSUFBSTtNQUM1QztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBSCxHQUFBLG9CQUFBQyxLQUFBO0lBS0EsU0FBQTJSLGNBQWNBLENBQUM1UixHQUFHLEVBQUU2UixPQUFPLEVBQUU7TUFDM0IsSUFBSSxDQUFDekssS0FBSyxDQUFDcEQsSUFBSSxDQUFDaEUsR0FBRyxDQUFDLEdBQUc2UixPQUFPO0lBQ2hDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQTdSLEdBQUEsbUJBQUFDLEtBQUE7SUFJQSxTQUFBeUosYUFBYUEsQ0FBQ29JLEVBQUUsRUFBRTtNQUNoQixJQUFJLENBQUMxSyxLQUFLLENBQUNvQyxVQUFVLEdBQUdzSSxFQUFFO0lBQzVCOztJQUVBO0FBQ0Y7QUFDQSxPQUZFLE1BQUE5UixHQUFBLGtCQUFBQyxLQUFBO0lBR0EsU0FBQWlKLFlBQVlBLENBQUEsRUFBRztNQUNiLElBQUksSUFBSSxDQUFDOUIsS0FBSyxDQUFDb0MsVUFBVSxFQUFFO1FBQ3pCa0ksb0JBQW9CLENBQUMsSUFBSSxDQUFDdEssS0FBSyxDQUFDb0MsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ29DLFVBQVUsR0FBRyxJQUFJO01BQzlCO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBeEosR0FBQSxlQUFBQyxLQUFBO0lBSUEsU0FBQStJLFNBQVNBLENBQUEsRUFBRztNQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUM1QixLQUFLLENBQUMvQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMrQyxLQUFLLENBQUM5QyxNQUFNO0lBQ3JEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQXRFLEdBQUEsZUFBQUMsS0FBQTtJQUlBLFNBQUE4SixTQUFTQSxDQUFDekYsTUFBTSxFQUFFO01BQ2hCLElBQUksQ0FBQzhDLEtBQUssQ0FBQzlDLE1BQU0sR0FBR0EsTUFBTTtJQUM1Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUF0RSxHQUFBLHdCQUFBQyxLQUFBO0lBSUEsU0FBQThSLGtCQUFrQkEsQ0FBQ0MsUUFBUSxFQUFFO01BQzNCLElBQUksQ0FBQzVLLEtBQUssQ0FBQ3BFLFlBQVksR0FBR2dQLFFBQVE7SUFDcEM7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBaFMsR0FBQSxpQkFBQUMsS0FBQTtJQUlBLFNBQUFnUyxXQUFXQSxDQUFDL08sVUFBVSxFQUFFO01BQ3RCLElBQUksQ0FBQ2tFLEtBQUssQ0FBQ2xFLFVBQVUsR0FBR0EsVUFBVTtJQUNwQzs7SUFFQTtBQUNGO0FBQ0EsT0FGRSxNQUFBbEQsR0FBQSxjQUFBQyxLQUFBO0lBR0EsU0FBQXdILFFBQVFBLENBQUEsRUFBRztNQUNUdEcsT0FBTyxDQUFDZ0osR0FBRyxDQUFDLHFCQUFxQixFQUFFO1FBQ2pDL0YsS0FBSyxFQUFFLElBQUksQ0FBQ2dELEtBQUssQ0FBQ2hELEtBQUs7UUFDdkJELEtBQUssRUFBRSxJQUFJLENBQUNpRCxLQUFLLENBQUNqRCxLQUFLO1FBQ3ZCVixLQUFLLEVBQUUsSUFBSSxDQUFDMkQsS0FBSyxDQUFDM0QsS0FBSztRQUN2QlksVUFBVSxFQUFFLElBQUksQ0FBQytDLEtBQUssQ0FBQy9DLFVBQVU7UUFDakNDLE1BQU0sRUFBRSxJQUFJLENBQUM4QyxLQUFLLENBQUM5QyxNQUFNO1FBQ3pCeEQsS0FBSyxFQUFFLElBQUksQ0FBQ3NHLEtBQUssQ0FBQ3RHLEtBQUs7UUFDdkIrQixTQUFTLEVBQUUsSUFBSSxDQUFDdUUsS0FBSyxDQUFDdkU7TUFDeEIsQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBN0MsR0FBQSxtQkFBQUMsS0FBQTtJQUlBLFNBQUFpUyxhQUFhQSxDQUFBLEVBQUc7TUFDZCxJQUFNQyxjQUFjLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDOztNQUVsRSxTQUFBekQsRUFBQSxNQUFBMEQsZUFBQSxHQUFvQkQsY0FBYyxFQUFBekQsRUFBQSxHQUFBMEQsZUFBQSxDQUFBMVMsTUFBQSxFQUFBZ1AsRUFBQSxJQUFFLENBQS9CLElBQU0yRCxLQUFLLEdBQUFELGVBQUEsQ0FBQTFELEVBQUE7UUFDZCxJQUFJLE9BQU8sSUFBSSxDQUFDdEgsS0FBSyxDQUFDaUwsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO1VBQ3pDbFIsT0FBTyxDQUFDSyxJQUFJLHlCQUFBQyxNQUFBLENBQXlCNFEsS0FBSyxHQUFJLElBQUksQ0FBQ2pMLEtBQUssQ0FBQ2lMLEtBQUssQ0FBQyxDQUFDO1VBQ2hFLE9BQU8sS0FBSztRQUNkO01BQ0Y7O01BRUEsSUFBSSxDQUFDalMsS0FBSyxDQUFDYyxPQUFPLENBQUMsSUFBSSxDQUFDa0csS0FBSyxDQUFDeEUsS0FBSyxDQUFDLEVBQUU7UUFDcEN6QixPQUFPLENBQUNLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUNuQyxPQUFPLEtBQUs7TUFDZDs7TUFFQSxPQUFPLElBQUk7SUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1ILE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUJ4RGtGLE1BQU07RUFDekIsU0FBQUEsT0FBWVUsS0FBSyxFQUFFa0wsT0FBTyxFQUFFdEwsZ0JBQWdCLEVBQUUsQ0FBQW5ILGlGQUFBLE9BQUE2RyxNQUFBO0lBQzVDLElBQUksQ0FBQ1UsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ2tMLE9BQU8sR0FBR0EsT0FBTztJQUN0QixJQUFJLENBQUN0TCxnQkFBZ0IsR0FBR0EsZ0JBQWdCO0lBQ3hDLElBQUksQ0FBQ3FELFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQ1UsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxQyxJQUFJLENBQUNULE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU8sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQztFQUN4QyxDQUFDLE9BQUFoTCw4RUFBQSxDQUFBMkcsTUFBQSxLQUFBMUcsR0FBQSxlQUFBQyxLQUFBOztJQUVELFNBQUFvSyxTQUFTQSxDQUFDa0ksS0FBSyxFQUFFO01BQ2YsSUFBUW5MLEtBQUssR0FBYyxJQUFJLENBQXZCQSxLQUFLLENBQUVrTCxPQUFPLEdBQUssSUFBSSxDQUFoQkEsT0FBTztNQUN0QixJQUFJbEwsS0FBSyxDQUFDL0MsVUFBVSxFQUFFOztNQUV0QjtNQUNBLElBQUlrTyxLQUFLLENBQUNDLE1BQU0sSUFBSUQsS0FBSyxDQUFDdlMsR0FBRyxLQUFLLFdBQVcsRUFBRTtRQUM3QztNQUNGOztNQUVBO01BQ0EsSUFBSW9ILEtBQUssQ0FBQ3BELElBQUksQ0FBQ3VPLEtBQUssQ0FBQ3ZTLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCO01BQ0Y7TUFDQW9ILEtBQUssQ0FBQ3BELElBQUksQ0FBQ3VPLEtBQUssQ0FBQ3ZTLEdBQUcsQ0FBQyxHQUFHLElBQUk7O01BRTVCLFFBQVF1UyxLQUFLLENBQUN2UyxHQUFHO1FBQ2YsS0FBSyxXQUFXO1VBQ2RzUyxPQUFPLENBQUM1TixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDckI7UUFDRixLQUFLLFlBQVk7VUFDZjROLE9BQU8sQ0FBQzVOLFNBQVMsQ0FBQyxDQUFDLENBQUM7VUFDcEI7UUFDRixLQUFLLFdBQVc7VUFDZDROLE9BQU8sQ0FBQzVPLGFBQWEsQ0FBQyxDQUFDO1VBQ3ZCNE8sT0FBTyxDQUFDbk4sU0FBUyxDQUFDLENBQUM7VUFDbkI7UUFDRixLQUFLLFNBQVM7VUFDWm1OLE9BQU8sQ0FBQzVNLFdBQVcsQ0FBQyxDQUFDLENBQUM7VUFDdEI7UUFDRixLQUFLLEdBQUc7VUFDTjtVQUNBLElBQUkwQixLQUFLLENBQUN0RyxLQUFLLElBQUlzRyxLQUFLLENBQUN0RyxLQUFLLENBQUNFLEdBQUcsSUFBSSxPQUFPb0csS0FBSyxDQUFDdEcsS0FBSyxDQUFDRSxHQUFHLENBQUNQLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDM0UsSUFBSWdTLFNBQVMsR0FBRyxDQUFDO1lBQ2pCLElBQU1DLFFBQVEsR0FBR25QLElBQUksQ0FBQ0MsR0FBRyxDQUFDNEQsS0FBSyxDQUFDdkksSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE9BQU80VCxTQUFTLEdBQUdDLFFBQVEsSUFBSSxDQUFDdEwsS0FBSyxDQUFDL0MsVUFBVSxJQUFJK0MsS0FBSyxDQUFDdEcsS0FBSyxFQUFFO2NBQy9ELElBQU02UixRQUFRLEdBQUd2TCxLQUFLLENBQUN0RyxLQUFLLENBQUNFLEdBQUcsQ0FBQ1AsQ0FBQztjQUNsQyxJQUFJO2dCQUNGLElBQU13SSxPQUFPLEdBQUdxSixPQUFPLENBQUNuTixTQUFTLENBQUMsQ0FBQztnQkFDbkMsSUFBSSxDQUFDOEQsT0FBTyxJQUFJLENBQUM3QixLQUFLLENBQUN0RyxLQUFLLElBQUlzRyxLQUFLLENBQUN0RyxLQUFLLENBQUNFLEdBQUcsQ0FBQ1AsQ0FBQyxLQUFLa1MsUUFBUSxFQUFFO2tCQUM5RDtrQkFDQTtnQkFDRjtnQkFDQUYsU0FBUyxFQUFFO2NBQ2IsQ0FBQyxDQUFDLE9BQU9yUixLQUFLLEVBQUU7Z0JBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHlCQUF5QixFQUFFQSxLQUFLLENBQUM7Z0JBQy9DO2NBQ0Y7WUFDRjtVQUNGO1VBQ0E7UUFDRixLQUFLLEdBQUc7UUFDUixLQUFLLEdBQUc7VUFDTmtSLE9BQU8sQ0FBQ3BJLFNBQVMsQ0FBQyxDQUFDO1VBQ25CO01BQ0o7SUFDRixDQUFDLE1BQUFsSyxHQUFBLGFBQUFDLEtBQUE7O0lBRUQsU0FBQXFLLE9BQU9BLENBQUNpSSxLQUFLLEVBQUU7TUFDYixJQUFJLENBQUNuTCxLQUFLLENBQUNwRCxJQUFJLENBQUN1TyxLQUFLLENBQUN2UyxHQUFHLENBQUMsR0FBRyxLQUFLO01BQ2xDO01BQ0EsSUFBSSxJQUFJLENBQUNnSCxnQkFBZ0IsSUFBSSxJQUFJLENBQUNBLGdCQUFnQixDQUFDNEssY0FBYyxFQUFFO1FBQ2pFLElBQUksQ0FBQzVLLGdCQUFnQixDQUFDNEssY0FBYyxDQUFDVyxLQUFLLENBQUN2UyxHQUFHLEVBQUUsS0FBSyxDQUFDO01BQ3hEO01BQ0E7TUFDQSxJQUFJdVMsS0FBSyxDQUFDdlMsR0FBRyxLQUFLLFdBQVcsRUFBRTtRQUM3QixJQUFJLENBQUNzUyxPQUFPLENBQUMzTyxZQUFZLENBQUMsQ0FBQztNQUM3QjtJQUNGLENBQUMsTUFBQTNELEdBQUEseUJBQUFDLEtBQUE7O0lBRUQsU0FBQW1LLG1CQUFtQkEsQ0FBQSxFQUErRCxLQUE5RHdJLGNBQWMsR0FBQW5ULFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQzRLLFNBQVMsS0FBRXdJLFlBQVksR0FBQXBULFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQzZLLE9BQU87TUFDOUV0QyxRQUFRLENBQUM4SyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVGLGNBQWMsQ0FBQztNQUN2RDVLLFFBQVEsQ0FBQzhLLG1CQUFtQixDQUFDLE9BQU8sRUFBRUQsWUFBWSxDQUFDO01BQ25EN0ssUUFBUSxDQUFDd0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFb0ksY0FBYyxDQUFDO01BQ3BENUssUUFBUSxDQUFDd0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFcUksWUFBWSxDQUFDO0lBQ2xELENBQUM7Ozs7OztVQ25GSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNzQjs7QUFFdEI7QUFDaUM7O0FBRWpDO0FBQ0EsSUFBTUcsS0FBSyxHQUFHaEwsUUFBUSxDQUFDaUwsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM3Q0QsS0FBSyxDQUFDdkssV0FBVyxvRkFLaEI7Ozs7OztBQUNEVCxRQUFRLENBQUNrTCxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDOztBQUVoQztBQUNBaEwsUUFBUSxDQUFDd0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRDtFQUNBLElBQUksT0FBTzVFLE9BQU8sS0FBSyxXQUFXLElBQUlBLGFBQW9CLEtBQUssTUFBTSxFQUFFO0lBQ3JFekUsT0FBTyxDQUFDZ0osR0FBRyxDQUFDLDhCQUE4QixDQUFDO0VBQzdDOztFQUVBLElBQUk7SUFDRixJQUFJLE9BQU92RSxPQUFPLEtBQUssV0FBVyxJQUFJQSxhQUFvQixLQUFLLE1BQU0sRUFBRTtNQUNyRXpFLE9BQU8sQ0FBQ2dKLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztNQUMvQjtNQUNBLElBQU1NLE1BQU0sR0FBR3pDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQztNQUM5QyxJQUFJd0MsTUFBTSxFQUFFO1FBQ1Z0SixPQUFPLENBQUNnSixHQUFHLENBQUMsWUFBWSxFQUFFTSxNQUFNLENBQUNDLEtBQUssRUFBRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO1FBQzNEeEosT0FBTyxDQUFDZ0osR0FBRyxDQUFDLGdCQUFnQixFQUFFTSxNQUFNLENBQUN1SSxLQUFLLENBQUN0SSxLQUFLLEVBQUUsR0FBRyxFQUFFRCxNQUFNLENBQUN1SSxLQUFLLENBQUNySSxNQUFNLENBQUM7TUFDN0UsQ0FBQyxNQUFNO1FBQ0x4SixPQUFPLENBQUNDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztNQUNsQztJQUNGO0lBQ0E7SUFDQXdKLDhDQUFJLENBQUMsQ0FBQztFQUNSLENBQUMsQ0FBQyxPQUFPeEosS0FBSyxFQUFFO0lBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7SUFDNUMrSCxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJdkQsSUFBc0MsRUFBRTtFQUMxQzJFLE1BQU0sQ0FBQzZJLE1BQU0sR0FBRzdJLE1BQU0sQ0FBQzZJLE1BQU0sSUFBSSxDQUFDLENBQUM7RUFDbkM3SSxNQUFNLENBQUM2SSxNQUFNLENBQUN4SSxJQUFJLEdBQUdBLDBDQUFJO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb25zdGFudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9Cb2FyZC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9HYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL1BpZWNlLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9yZW5kZXJpbmcvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3JvdGF0aW9uL1JvdGF0aW9uU3lzdGVtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zY29yaW5nL1Njb3JlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3RhdGUvR2FtZVN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRob3V0SG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVSZXN0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlU3ByZWFkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5leHBvcnQgeyBfc2xpY2VkVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyDjgrLjg7zjg6Djga7lrprmlbDlrprnvqlcbmV4cG9ydCBjb25zdCBHQU1FX0NPTlNUQU5UUyA9IHtcbiAgQ09MUzogMTAsIC8vIOODleOCo+ODvOODq+ODieOBruW5he+8iOODluODreODg+OCr+aVsO+8iVxuICBST1dTOiAyMCwgLy8g44OV44Kj44O844Or44OJ44Gu6auY44GV77yI44OW44Ot44OD44Kv5pWw77yJXG4gIEJMT0NLX1NJWkU6IDIwLCAvLyAx44OW44Ot44OD44Kv44Gu44OU44Kv44K744Or44K144Kk44K6XG4gIFNDT1JFX1RBQkxFOiB7XG4gICAgMTogNDAsICAgLy8gMeihjOa2iOOBl1xuICAgIDI6IDEwMCwgIC8vIDLooYzmtojjgZdcbiAgICAzOiAzMDAsICAvLyAz6KGM5raI44GXXG4gICAgNDogMTIwMCAgLy8gNOihjOa2iOOBl++8iOODhuODiOODquOCue+8iVxuICB9LFxuICBTSEFQRVM6IFtcbiAgICAvLyBJXG4gICAgW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBPXG4gICAgW1xuICAgICAgWzIsIDJdLFxuICAgICAgWzIsIDJdXG4gICAgXSxcbiAgICAvLyBUXG4gICAgW1xuICAgICAgWzAsIDMsIDBdLFxuICAgICAgWzMsIDMsIDNdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBMXG4gICAgW1xuICAgICAgWzQsIDAsIDBdLFxuICAgICAgWzQsIDQsIDRdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBKXG4gICAgW1xuICAgICAgWzAsIDAsIDVdLFxuICAgICAgWzUsIDUsIDVdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBaXG4gICAgW1xuICAgICAgWzYsIDYsIDBdLFxuICAgICAgWzAsIDYsIDZdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBTXG4gICAgW1xuICAgICAgWzAsIDcsIDddLFxuICAgICAgWzcsIDcsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICBdLFxuICBDT0xPUlM6IFtcbiAgICAnIzAwMDAwMCcsIC8vIDA6IOepulxuICAgICcjMDBGRkZGJywgLy8gMTogSSAo44K344Ki44OzKVxuICAgICcjRkZGRjAwJywgLy8gMjogTyAo6buE6ImyKVxuICAgICcjODAwMDgwJywgLy8gMzogVCAo57SrKVxuICAgICcjRkZBNTAwJywgLy8gNDogTCAo44Kq44Os44Oz44K4KVxuICAgICcjMDAwMEZGJywgLy8gNTogSiAo6Z2SKVxuICAgICcjRkYwMDAwJywgLy8gNjogWiAo6LWkKVxuICAgICcjMDA4MDAwJyAgLy8gNzogUyAo57eRKVxuICBdLFxuICBHQU1FX1NUQVRFUzoge1xuICAgIElOSVQ6ICdJTklUJyxcbiAgICBQTEFZSU5HOiAnUExBWUlORycsXG4gICAgUEFVU0VEOiAnUEFVU0VEJyxcbiAgICBHQU1FX09WRVI6ICdHQU1FX09WRVInXG4gIH1cbn07XG4iLCIvLyBCb2FyZOOCr+ODqeOCuVxuLy8g44OG44OI44Oq44K544Gu55uk6Z2i566h55CG44Go44Ot44K444OD44Kv44KS5ouF5b2TXG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwKSB7XG4gICAgdGhpcy5jb2xzID0gY29scztcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucm93cyB9LCAoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xuICB9XG5cbiAgaXNJbnNpZGUoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuY29scyAmJiB5ID49IDAgJiYgeSA8IHRoaXMucm93cztcbiAgfVxuXG4gIGlzRW1wdHkoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpICYmIHRoaXMuZ3JpZFt5XVt4XSA9PT0gMDtcbiAgfVxuXG4gIHNldENlbGwoeCwgeSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc0luc2lkZSh4LCB5KSkgdGhpcy5ncmlkW3ldW3hdID0gdmFsdWU7XG4gIH1cblxuICBnZXRDZWxsKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuaXNJbnNpZGUoeCwgeSkgfHwgIXRoaXMuZ3JpZFt5XSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF07XG4gIH1cblxuICBtZXJnZShwaWVjZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcGllY2UubWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBpZWNlLm1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocGllY2UubWF0cml4W3ldW3hdKSB7XG4gICAgICAgICAgdGhpcy5zZXRDZWxsKHBpZWNlLnBvcy54ICsgeCwgcGllY2UucG9zLnkgKyB5LCBwaWVjZS5tYXRyaXhbeV1beF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBpZiAoIXRoaXMuZ3JpZCB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmdyaWQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGdyaWQgc3RhdGUnKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2xlYXJlZCA9IDA7XG4gICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWRbeV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm93IGF0IGluZGV4ICR7eX06YCwgcm93KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICAgIGNsZWFyZWQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdHcmlkLnB1c2goWy4uLnJvd10pOyAvLyDooYzjga7jgrPjg5Tjg7zjgpLkvZzmiJDjgZfjgablj4LnhafjgpLpgb/jgZHjgotcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByb3cgJHt5fTpgLCBlcnJvcik7XG4gICAgICAgIG5ld0dyaWQucHVzaChbLi4ucm93XSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWJiumZpOOBleOCjOOBn+ihjOOBruWIhuOBoOOBkeepuuOBruihjOOCkuS4iuOBq+i/veWKoFxuICAgIHdoaWxlIChuZXdHcmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgbmV3R3JpZC51bnNoaWZ0KEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ3JpZCA9IG5ld0dyaWQ7XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5pbXBvcnQgeyBSb3RhdGlvblN5c3RlbSB9IGZyb20gJy4uL3JvdGF0aW9uL1JvdGF0aW9uU3lzdGVtLmpzJztcbmltcG9ydCB7IFNjb3JlQ2FsY3VsYXRvciB9IGZyb20gJy4uL3Njb3JpbmcvU2NvcmVDYWxjdWxhdG9yLmpzJztcblxuLy8g44OG44OI44Ot44Of44OO44Gu5b2i54q244Go6Imy44Gu44Oe44OD44OU44Oz44KwXG5jb25zdCBURVRST01JTk9fTUFQID0ge1xuICBJOiBbXG4gICAgWzAsIDAsIDAsIDBdLFxuICAgIFsxLCAxLCAxLCAxXSxcbiAgICBbMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDBdLFxuICBdLFxuICBKOiBbXG4gICAgWzIsIDAsIDBdLFxuICAgIFsyLCAyLCAyXSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIEw6IFtcbiAgICBbMCwgMCwgM10sXG4gICAgWzMsIDMsIDNdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgTzogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNF0sXG4gIF0sXG4gIFM6IFtcbiAgICBbMCwgNSwgNV0sXG4gICAgWzUsIDUsIDBdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgVDogW1xuICAgIFswLCA2LCAwXSxcbiAgICBbNiwgNiwgNl0sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBaOiBbXG4gICAgWzcsIDcsIDBdLFxuICAgIFswLCA3LCA3XSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG59O1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjAsIHRldHJvbWlub3MgPSBudWxsKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjb2xzLCByb3dzKTtcbiAgICB0aGlzLnRldHJvbWlub3MgPSB0ZXRyb21pbm9zIHx8IFtcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1syLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgICBbWzAsIDQsIDRdLCBbNCwgNCwgMF1dLFxuICAgICAgW1s1LCA1LCAwXSwgWzAsIDUsIDVdXSxcbiAgICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgICBbWzAsIDAsIDddLCBbNywgNywgN11dLFxuICAgIF07XG4gICAgXG4gICAgLy8g54++5Zyo44Gu44OU44O844K544Go5qyh44Gu44OU44O844K5XG4gICAgdGhpcy5waWVjZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0UGllY2UgPSBudWxsO1xuICAgIFxuICAgIC8vIOODrOODmeODq+OBq+W/nOOBmOOBn+ODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgIHRoaXMubGV2ZWxTcGVlZHMgPSBbXG4gICAgICAxMDAwLCAvLyDjg6zjg5njg6sxOiAxLjDnp5JcbiAgICAgIDkwMCwgIC8vIOODrOODmeODqzI6IDAuOeenklxuICAgICAgODAwLCAgLy8g44Os44OZ44OrMzogMC4456eSXG4gICAgICA3MDAsICAvLyDjg6zjg5njg6s0OiAwLjfnp5JcbiAgICAgIDYwMCwgIC8vIOODrOODmeODqzU6IDAuNuenklxuICAgICAgNTAwLCAgLy8g44Os44OZ44OrNjogMC4156eSXG4gICAgICA0MDAsICAvLyDjg6zjg5njg6s3OiAwLjTnp5JcbiAgICAgIDMwMCwgIC8vIOODrOODmeODqzg6IDAuM+enklxuICAgICAgMjAwLCAgLy8g44Os44OZ44OrOTogMC4y56eSXG4gICAgICAxMDAgICAvLyDjg6zjg5njg6sxMOS7pemZjTogMC4x56eSXG4gICAgXTtcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarjg6njgqTjg7PmlbBcbiAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSAxMDtcbiAgICBcbiAgICAvLyDjg4njg63jg4Pjg5fplpPpmpTplqLpgKPjga7liJ3mnJ/ljJZcbiAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gICAgdGhpcy5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgXG4gICAgLy8g5Zue6Lui44K344K544OG44Og44Go44K544Kz44Ki6KiI566X5Zmo44Gu5Yid5pyf5YyWXG4gICAgdGhpcy5yb3RhdGlvblN5c3RlbSA9IG5ldyBSb3RhdGlvblN5c3RlbSgpO1xuICAgIHRoaXMuc2NvcmVDYWxjdWxhdG9yID0gbmV3IFNjb3JlQ2FsY3VsYXRvcigpO1xuICAgIFxuICAgIC8vIOWIneacn+WMluaZguOBq+acgOWIneOBruODlOODvOOCueOCkueUn+aIkFxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg6zjg5njg6vjgavlv5zjgZjjgZ/jg4njg63jg4Pjg5fplpPpmpTjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge251bWJlcn0g44OJ44Ot44OD44OX6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAqL1xuICBnZXREcm9wSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IE1hdGgubWluKHRoaXMubGV2ZWwgLSAxLCB0aGlzLmxldmVsU3BlZWRzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmxldmVsU3BlZWRzW2xldmVsSW5kZXhdO1xuICB9XG4gIFxuICAvKipcbiAgICog5LiL44Kt44O844GM5oq844GV44KM44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44CB44OJ44Ot44OD44OX6ZaT6ZqU44KS55+t57iu44GZ44KLXG4gICAqL1xuICBzdGFydFNvZnREcm9wKCkge1xuICAgIGlmICghdGhpcy5pc1NvZnREcm9wKSB7XG4gICAgICB0aGlzLmlzU29mdERyb3AgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSA1MDsgLy8g44K944OV44OI44OJ44Ot44OD44OX5pmC44Gu6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog5LiL44Kt44O844GM6Zui44GV44KM44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44CB44OJ44Ot44OD44OX6ZaT6ZqU44KS5YWD44Gr5oi744GZXG4gICAqL1xuICBzdG9wU29mdERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNTb2Z0RHJvcCkge1xuICAgICAgdGhpcy5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44KS44OB44Kn44OD44Kv44GX44CB5b+F6KaB44Gr5b+c44GY44Gm44Os44OZ44Or44KS5LiK44GS44KLXG4gICAqL1xuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS5L2c5oiQ44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOODhuODiOODreODn+ODjuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJucyB7UGllY2V9IOaWsOOBl+OBhOODlOODvOOCueOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgY3JlYXRlUGllY2UoaW5kZXgpIHtcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLnRldHJvbWlub3NbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LmtleXMoVEVUUk9NSU5PX01BUClbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTsgLy8g44OU44O844K544Gu44K/44Kk44OX44KS5Y+W5b6XXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKHRoaXMuYm9hcmQuY29scyAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgLy8g44OU44O844K544Gu5Yid5pyfWeW6p+aomeOCkuiqv+aVtOOBl+OAgeeUu+mdouWkluOBi+OCieWHuuePvuOBmeOCi+OCiOOBhuOBq+OBmeOCi1xuICAgIC8vIOODlOODvOOCueOBrumrmOOBleOBruWIhuOBoOOBkeS4iuOBq+OBmuOCieOBmVxuICAgIGNvbnN0IHkgPSAtbWF0cml4Lmxlbmd0aDtcbiAgICByZXR1cm4gbmV3IFBpZWNlKG1hdHJpeCwgeyB4LCB5IH0sIHR5cGUpO1xuICB9XG4gIFxuICAvKipcbiAgICog44Ky44O844Og44KS44Oq44K744OD44OI44GZ44KLXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XG4gICAgdGhpcy5waWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saW5lcyA9IDA7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAvLyDoh6rli5XokL3kuIvplpPpmpTjgpLjg6rjgrvjg4Pjg4hcbiAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgqLjg4Pjg5fjgpLjg4Hjgqfjg4Pjgq/jgZfjgIHlv4XopoHjgavlv5zjgZjjgabjg6zjg5njg6vjgpLkuIrjgZLjgotcbiAgICovXG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5zY29yZUNhbGN1bGF0b3Iuc2hvdWxkTGV2ZWxVcCh0aGlzLmxpbmVzLCB0aGlzLmxldmVsKSkge1xuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuc2NvcmVDYWxjdWxhdG9yLmNhbGN1bGF0ZUxldmVsKHRoaXMubGluZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkuenu+WLleOBleOBm+OCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBY5pa55ZCR44Gu56e75YuV6YePXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnp7vli5XjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIG1vdmVQaWVjZShkeCkge1xuICAgIGlmICghdGhpcy5waWVjZSB8fCB0aGlzLmlzR2FtZU92ZXIpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnBpZWNlLm1vdmUoZHgsIDApO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBq+aIu+OBmVxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoLWR4LCAwKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDooZ3nqoHliKTlrprjgpLooYzjgYZcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOihneeqgeOBl+OBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgaGFzQ29sbGlzaW9uKCkge1xuICAgIGlmICghdGhpcy5waWVjZSB8fCAhdGhpcy5waWVjZS5tYXRyaXggfHwgIXRoaXMucGllY2UucG9zKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgcGllY2UgZGF0YSBmb3IgY29sbGlzaW9uIGRldGVjdGlvbicpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHsgbWF0cml4LCBwb3MgfSA9IHRoaXMucGllY2U7XG4gICAgXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hdHJpeCkgfHwgdHlwZW9mIHBvcy54ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgcG9zLnkgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbWF0cml4IG9yIHBvc2l0aW9uIGRhdGEnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7IHkrKykge1xuICAgICAgY29uc3Qgcm93ID0gbWF0cml4W3ldO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBJbnZhbGlkIHJvdyBhdCBpbmRleCAke3l9OmAsIHJvdyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHJvdy5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocm93W3hdICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRYID0gcG9zLnggKyB4O1xuICAgICAgICAgIGNvbnN0IGJvYXJkWSA9IHBvcy55ICsgeTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyDjg5zjg7zjg4njga7lpJblgbTjgYvjgIHjgZnjgafjgavjg5bjg63jg4Pjgq/jgYzjgYLjgovloLTlkIjjga/ooZ3nqoFcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBib2FyZFggPCAwIHx8XG4gICAgICAgICAgICBib2FyZFggPj0gdGhpcy5ib2FyZC5jb2xzIHx8XG4gICAgICAgICAgICBib2FyZFkgPj0gdGhpcy5ib2FyZC5yb3dzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g44Oc44O844OJ5YaF44Gn44OW44Ot44OD44Kv44GM44GZ44Gn44Gr44GC44KL5aC05ZCI44Gv6KGd56qB77yIeSA+PSAw44Gu5aC05ZCI44Gu44G/77yJXG4gICAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIFxuICAgICAgICAgICAgICB0aGlzLmJvYXJkLmdyaWRbYm9hcmRZXSAmJiBcbiAgICAgICAgICAgICAgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV1bYm9hcmRYXSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOaWsOOBl+OBhOODlOODvOOCueOCkueUn+aIkOOBmeOCi1xuICAgKi9cbiAgc3Bhd25QaWVjZSgpIHtcbiAgICB0aGlzLnBpZWNlID0gdGhpcy5uZXh0UGllY2UgfHwgdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgdGhpcy5uZXh0UGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zliKTlrpo6IOODlOODvOOCueOCkuS4gOaZgueahOOBq1k9MOOBruS9jee9ruOBq+enu+WLleOBleOBm+OBpuihneeqgeWIpOWumuOCkuihjOOBhlxuICAgIGNvbnN0IG9yaWdpbmFsWSA9IHRoaXMucGllY2UucG9zLnk7XG4gICAgdGhpcy5waWVjZS5wb3MueSA9IDA7IC8vIOS4gOaZgueahOOBq1nluqfmqJnjgpIw44Gr6Kit5a6aXG5cbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMucGllY2UgPSBudWxsOyAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zmmYLjgavjg5Tjg7zjgrnjgpLjg5zjg7zjg4njgavlm7rlrprjgZfjgarjgYRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waWVjZS5wb3MueSA9IG9yaWdpbmFsWTsgLy8g6KGd56qB44GM44Gq44GR44KM44Gw5YWD44Gu5L2N572u44Gr5oi744GZXG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpIx44Oe44K55LiL44Gr56e75YuV44GV44Gb44KLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnp7vli5XjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIGRyb3BQaWVjZSgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UgfHwgdGhpcy5pc0dhbWVPdmVyKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5waWVjZS5tb3ZlKDAsIDEpO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBruS9jee9ruOBq+aIu+OBl+OBpuWbuuWumlxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoMCwgLTEpO1xuICAgICAgdGhpcy5tZXJnZVBpZWNlKCk7XG4gICAgICBcbiAgICAgIC8vIOODnOODvOODieOBrmNsZWFyTGluZXPjg6Hjgr3jg4Pjg4njgpLkvb/nlKhcbiAgICAgIGNvbnN0IGxpbmVzQ2xlYXJlZCA9IHRoaXMuYm9hcmQuY2xlYXJMaW5lcygpO1xuICAgICAgaWYgKGxpbmVzQ2xlYXJlZCA+IDApIHtcbiAgICAgICAgdGhpcy5saW5lcyArPSBsaW5lc0NsZWFyZWQ7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICAgICAgICB0aGlzLmNoZWNrTGV2ZWxVcCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDmlrDjgZfjgYTjg5Tjg7zjgrnjgpLjgrnjg53jg7zjg7NcbiAgICAgIHRoaXMuc3Bhd25QaWVjZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOePvuWcqOOBruODlOODvOOCueOCkuODnOODvOODieOBq+WbuuWumuOBmeOCi1xuICAgKi9cbiAgbWVyZ2VQaWVjZSgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAobWF0cml4W3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRZID0gcG9zLnkgKyB5O1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoYm9hcmRZID49IDAgJiYgYm9hcmRZIDwgdGhpcy5ib2FyZC5yb3dzICYmIGJvYXJkWCA+PSAwICYmIGJvYXJkWCA8IHRoaXMuYm9hcmQuY29scykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV1bYm9hcmRYXSA9IG1hdHJpeFt5XVt4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKipcbiAgICog44K544Kz44Ki44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICogQHJldHVybnMge251bWJlcn0g6KiI566X44GV44KM44Gf44K544Kz44KiXG4gICAqL1xuICBjYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZUNhbGN1bGF0b3IuY2FsY3VsYXRlTGluZVNjb3JlKGxpbmVzQ2xlYXJlZCwgdGhpcy5sZXZlbCk7XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICovXG4gIHVwZGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICB9XG4gIFxuICAvKipcbiAgICog44OU44O844K544KS5Zue6Lui44GV44Gb44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXIgLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOWbnui7ouOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgcm90YXRlUGllY2UoZGlyKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlIHx8IHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6K2m5ZGK44KS5Ye644GV44Gq44GEXG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBwaWVjZSB0byByb3RhdGUgb3IgZ2FtZSBpcyBvdmVyJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5Zue6Lui44K344K544OG44Og44KS5L2/44Gj44Gm5Zue6Lui44KS6Kmm6KGMXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yb3RhdGlvblN5c3RlbS5hdHRlbXB0Um90YXRpb24oXG4gICAgICB0aGlzLnBpZWNlLFxuICAgICAgZGlyLFxuICAgICAgKCkgPT4gdGhpcy5oYXNDb2xsaXNpb24oKVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnN1Y2Nlc3M7XG4gIH1cbn1cblxuIiwiLy8gUGllY2Xjgq/jg6njgrlcbi8vIOODhuODiOODreODn+ODjuOBruW9ouODu+S9jee9ruODu+Wbnui7ouOCkueuoeeQhlxuXG5leHBvcnQgY2xhc3MgUGllY2Uge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgsIHBvcyA9IHsgeDogMCwgeTogMCB9LCB0eXBlID0gJ1QnKSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5wb3MgPSB7IC4uLnBvcyB9O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vIOODlOODvOOCueOBrueorumhniAoSSwgSiwgTCwgTywgUywgVCwgWilcbiAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAwOyAvLyAwOiAw5bqmLCAxOiA5MOW6piwgMjogMTgw5bqmLCAzOiAyNzDluqZcbiAgfVxuXG4gIG1vdmUoZHgsIGR5KSB7XG4gICAgdGhpcy5wb3MueCArPSBkeDtcbiAgICB0aGlzLnBvcy55ICs9IGR5O1xuICB9XG5cbiAgcm90YXRlKGRpcikge1xuICAgIC8vIGRpcjogMT3mmYLoqIjlm57jgoosIC0xPeWPjeaZguioiOWbnuOCilxuICAgIGlmICghdGhpcy5tYXRyaXggfHwgIUFycmF5LmlzQXJyYXkodGhpcy5tYXRyaXgpIHx8ICF0aGlzLm1hdHJpeFswXSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLm1hdHJpeFswXSkpIHJldHVybjtcbiAgICBjb25zdCBOID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xuICAgIGNvbnN0IE0gPSB0aGlzLm1hdHJpeFswXS5sZW5ndGg7XG4gICAgbGV0IHJvdGF0ZWQ7XG4gICAgaWYgKGRpciA9PT0gMSkge1xuICAgICAgLy8g5pmC6KiI5Zue44KKOiDou6Lnva7jgZfjgablkITooYzjgpLlj43ou6JcbiAgICAgIHJvdGF0ZWQgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBNIH0sIChfLCB4KSA9PlxuICAgICAgICBBcnJheS5mcm9tKHsgbGVuZ3RoOiBOIH0sIChfLCB5KSA9PiAodGhpcy5tYXRyaXhbTiAtIHkgLSAxXSA/IHRoaXMubWF0cml4W04gLSB5IC0gMV1beF0gOiAwKSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIOWPjeaZguioiOWbnuOCijog6Lui572u44GX44Gm5ZCE5YiX44KS5Y+N6LuiXG4gICAgICByb3RhdGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTSB9LCAoXywgeCkgPT5cbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoXywgeSkgPT4gKHRoaXMubWF0cml4W3ldID8gdGhpcy5tYXRyaXhbeV1bTSAtIHggLSAxXSA6IDApKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5tYXRyaXggPSByb3RhdGVkO1xuICAgIC8vIOWbnui7oueKtuaFi+OCkuabtOaWsFxuICAgIHRoaXMucm90YXRpb25TdGF0ZSA9ICh0aGlzLnJvdGF0aW9uU3RhdGUgKyAoZGlyID09PSAxID8gMSA6IDMpKSAlIDQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tICcuL2NvcmUvR2FtZS5qcyc7XG5pbXBvcnQgeyBHQU1FX0NPTlNUQU5UUyB9IGZyb20gJy4vY29uc3RhbnRzL2dhbWUuanMnO1xuaW1wb3J0IEdhbWVVSSBmcm9tIFwiLi91aS9HYW1lVUkuanNcIjtcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi9yZW5kZXJpbmcvUmVuZGVyZXIuanMnO1xuaW1wb3J0IHsgR2FtZVN0YXRlTWFuYWdlciB9IGZyb20gJy4vc3RhdGUvR2FtZVN0YXRlTWFuYWdlci5qcyc7XG5cbi8vIC0tLSDjgrDjg63jg7zjg5Djg6vlpInmlbDjgajnirbmhYvnrqHnkIYgLS0tXG5leHBvcnQgbGV0IHRldHJpc0dhbWUgPSBuZXcgR2FtZSgpO1xuZXhwb3J0IGNvbnN0IGV2ZW50TWFuYWdlciA9IG5ldyBFdmVudFRhcmdldCgpO1xuZXhwb3J0IGNvbnN0IGdhbWVTdGF0ZU1hbmFnZXIgPSBuZXcgR2FtZVN0YXRlTWFuYWdlcihHQU1FX0NPTlNUQU5UUy5ST1dTLCBHQU1FX0NPTlNUQU5UUy5DT0xTKTtcbmV4cG9ydCBsZXQgcmVuZGVyZXIgPSBudWxsO1xuXG4vLyDlvozmlrnkupLmj5vmgKfjga7jgZ/jgoHjga5nYW1lU3RhdGXjg5fjg63jgq3jgrdcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGUgPSBuZXcgUHJveHkoZ2FtZVN0YXRlTWFuYWdlci5zdGF0ZSwge1xuICBnZXQodGFyZ2V0LCBwcm9wKSB7XG4gICAgaWYgKHByb3AgPT09ICdpbml0Qm9hcmQnKSB7XG4gICAgICByZXR1cm4gKCkgPT4gZ2FtZVN0YXRlTWFuYWdlci5pbml0Qm9hcmQoKTtcbiAgICB9XG4gICAgaWYgKHByb3AgPT09ICdsb2dTdGF0ZScpIHtcbiAgICAgIHJldHVybiAoKSA9PiBnYW1lU3RhdGVNYW5hZ2VyLmxvZ1N0YXRlKCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gIH0sXG4gIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQocHJvcCwgdmFsdWUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcblxuLy8gLS0tIOaPj+eUu+mWoumAoyAtLS0gXG5mdW5jdGlvbiBkcmF3KCkge1xuICBpZiAoIXJlbmRlcmVyKSB7XG4gICAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6K2m5ZGK44KS5Ye644GV44Gq44GEXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1JlbmRlcmVyIG5vdCBpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCk7XG4gICAgY29uc3QgZ2FtZURhdGEgPSB7XG4gICAgICBib2FyZEdyaWQ6IHRldHJpc0dhbWUgJiYgdGV0cmlzR2FtZS5ib2FyZCA/IHRldHJpc0dhbWUuYm9hcmQuZ3JpZCA6IG51bGwsXG4gICAgICBwaWVjZTogc3RhdGUucGllY2UsXG4gICAgICBuZXh0UGllY2U6IHN0YXRlLm5leHRQaWVjZVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGllY2UtY2FudmFzJyk7XG4gICAgcmVuZGVyZXIucmVuZGVyKGdhbWVEYXRhLCBuZXh0UGllY2VDYW52YXMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgaW4gZHJhdyBmdW5jdGlvbjonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIFVJ5pu05pawIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xuICB1cGRhdGVTY29yZURpc3BsYXkoZ2FtZVN0YXRlLnNjb3JlKTtcbiAgdXBkYXRlTGluZXNEaXNwbGF5KGdhbWVTdGF0ZS5saW5lcyk7XG4gIHVwZGF0ZUxldmVsRGlzcGxheShnYW1lU3RhdGUubGV2ZWwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2NvcmVEaXNwbGF5KHNjb3JlKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBzY29yZSAhPT0gJ251bWJlcicgfHwgaXNOYU4oc2NvcmUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgc2NvcmUgdmFsdWU6Jywgc2NvcmUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBzY29yZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbiAgICBpZiAoc2NvcmVFbGVtZW50KSB7XG4gICAgICBzY29yZUVsZW1lbnQudGV4dENvbnRlbnQgPSBzY29yZS50b1N0cmluZygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBzY29yZSBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGluZXNEaXNwbGF5KGxpbmVzKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lcyAhPT0gJ251bWJlcicgfHwgaXNOYU4obGluZXMpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGluZXMgdmFsdWU6JywgbGluZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsaW5lc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGluZXMnKTtcbiAgICBpZiAobGluZXNFbGVtZW50KSB7XG4gICAgICBsaW5lc0VsZW1lbnQudGV4dENvbnRlbnQgPSBsaW5lcy50b1N0cmluZygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsaW5lcyBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGV2ZWxEaXNwbGF5KGxldmVsKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCAhPT0gJ251bWJlcicgfHwgaXNOYU4obGV2ZWwpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGV2ZWwgdmFsdWU6JywgbGV2ZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbiAgICBpZiAobGV2ZWxFbGVtZW50KSB7XG4gICAgICBsZXZlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsZXZlbC50b1N0cmluZygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsZXZlbCBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0g44Ky44O844Og44Ot44K444OD44KvIC0tLSBcbmZ1bmN0aW9uIHVwZGF0ZUdhbWVTdGF0ZSgpIHtcbiAgZ2FtZVN0YXRlTWFuYWdlci5zeW5jV2l0aEdhbWUodGV0cmlzR2FtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICB0cnkge1xuICAgIGlmICghZ2FtZVN0YXRlTWFuYWdlci5pc1J1bm5pbmcoKSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIGlmICghdGV0cmlzR2FtZSB8fCB0eXBlb2YgdGV0cmlzR2FtZS5kcm9wUGllY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdGV0cmlzR2FtZSBvYmplY3Qgb3IgbWlzc2luZyBkcm9wUGllY2UgbWV0aG9kJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGRyb3BwZWQgPSB0ZXRyaXNHYW1lLmRyb3BQaWVjZSgpO1xuICAgIC8vIOOBvuOBmuOCsuODvOODoOOCquODvOODkOODvOWIpOWumlxuICAgIGlmICh0ZXRyaXNHYW1lLmlzR2FtZU92ZXIpIHtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdpc0dhbWVPdmVyJywgdHJ1ZSk7XG4gICAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc3RvcEdhbWVMb29wKCk7XG4gICAgICBhbGVydCgnR2FtZSBPdmVyIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDpgJrluLjmmYLjga/lkIzmnJ9cbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICByZXR1cm4gZHJvcHBlZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJEcm9wOicsIGVycm9yKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIHRyeSB7XG4gICAgaWYgKCFnYW1lU3RhdGVNYW5hZ2VyLmlzUnVubmluZygpKSByZXR1cm47XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lIHx8IHR5cGVvZiB0ZXRyaXNHYW1lLm1vdmVQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIG1vdmVQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgaWYgKHR5cGVvZiBkaXIgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZGlyZWN0aW9uIGZvciBwbGF5ZXJNb3ZlOicsIGRpcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHRldHJpc0dhbWUubW92ZVBpZWNlKGRpcik7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcGxheWVyTW92ZTonLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllclJvdGF0ZShkaXIpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWdhbWVTdGF0ZU1hbmFnZXIuaXNSdW5uaW5nKCkpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUucm90YXRlUGllY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgdGV0cmlzR2FtZSBvYmplY3Qgb3IgbWlzc2luZyByb3RhdGVQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lLnBpZWNlKSByZXR1cm47XG4gICAgXG4gICAgaWYgKHR5cGVvZiBkaXIgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZGlyZWN0aW9uIGZvciBwbGF5ZXJSb3RhdGU6JywgZGlyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGV0cmlzR2FtZS5yb3RhdGVQaWVjZShkaXIpO1xuICAgIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHBsYXllclJvdGF0ZTonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIOOCsuODvOODoOODq+ODvOODlyAtLS1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUodGltZSA9IDApIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBnYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXRHYW1lTG9vcElkKGdhbWVMb29wSWQpO1xuICAgIFxuICAgIGlmICghZ2FtZVN0YXRlTWFuYWdlci5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICAgIFxuICAgIC8vIOWIneacn+WMluaZguOBr2xhc3RUaW1l44KS6Kit5a6aXG4gICAgaWYgKCFzdGF0ZS5sYXN0VGltZSkge1xuICAgICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2xhc3RUaW1lJywgdGltZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsdGFUaW1lID0gdGltZSAtIHN0YXRlLmxhc3RUaW1lO1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdsYXN0VGltZScsIHRpbWUpO1xuICAgIFxuICAgIC8vIOeVsOW4uOOBquODh+ODq+OCv+OCv+OCpOODoOOCkuOCueOCreODg+ODl++8iOODleODrOODvOODoOioiOeul+OBruWuieWumuaAp+WQkeS4iu+8iVxuICAgIGlmIChkZWx0YVRpbWUgPiAxMDAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xhcmdlIGRlbHRhIHRpbWUgZGV0ZWN0ZWQsIHNraXBwaW5nIGZyYW1lOicsIGRlbHRhVGltZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIC8vIOODieODreODg+ODl+WHpueQhlxuICAgIGlmICh0eXBlb2Ygc3RhdGUuZHJvcENvdW50ZXIgPT09ICdudW1iZXInICYmIHR5cGVvZiB0ZXRyaXNHYW1lLmRyb3BJbnRlcnZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnN0IG5ld0Ryb3BDb3VudGVyID0gc3RhdGUuZHJvcENvdW50ZXIgKyBkZWx0YVRpbWU7XG4gICAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnZHJvcENvdW50ZXInLCBuZXdEcm9wQ291bnRlcik7XG4gICAgICBcbiAgICAgIGlmIChuZXdEcm9wQ291bnRlciA+IHRldHJpc0dhbWUuZHJvcEludGVydmFsKSB7XG4gICAgICAgIHBsYXllckRyb3AoKTtcbiAgICAgICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2Ryb3BDb3VudGVyJywgMCk7XG4gICAgICAgIC8vIOWNs+W6p+OBq+aPj+eUu+OCkuabtOaWsFxuICAgICAgICBkcmF3KCk7XG4gICAgICAgIHVwZGF0ZVVJKCk7XG4gICAgICB9IGVsc2UgaWYgKGRlbHRhVGltZSA8IDEwMCkgeyAvLyA2MEZQU+OBp+aPj+eUu+OBmeOCi+WgtOWQiOOAgTE2LjY3bXPjgZTjgajjgavmj4/nlLtcbiAgICAgICAgLy8g44K544Og44O844K644Gq44Ki44OL44Oh44O844K344On44Oz44Gu44Gf44KB44CB44OJ44Ot44OD44OX6ZaT44KC5o+P55S744KS5pu05pawXG4gICAgICAgIGRyYXcoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGRyb3BDb3VudGVyIG9yIGRyb3BJbnRlcnZhbCB2YWx1ZXMnKTtcbiAgICAgIC8vIOeEoeWKueOBqueKtuaFi+OBruWgtOWQiOOBr+aPj+eUu+OBruOBv+Wun+ihjFxuICAgICAgZHJhdygpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdHYW1lIGxvb3AgZXJyb3I6JywgZXJyb3IpO1xuICAgIC8vIOOCsuODvOODoOOCkuS4gOaZguWBnOatouOBl+OBpuOCqOODqeODvOOCkuWgseWRilxuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0UGF1c2VkKHRydWUpO1xuICAgIGNvbnNvbGUud2FybignR2FtZSBwYXVzZWQgZHVlIHRvIGVycm9yLiBQcmVzcyBSIHRvIHJlc2V0IHRoZSBnYW1lLicpO1xuICAgIFxuICAgIC8vIOOCqOODqeODvOeZuueUn+aZguOBp+OCguaPj+eUu+OBr+ippuihjOOBmeOCi1xuICAgIHRyeSB7XG4gICAgICBkcmF3KCk7XG4gICAgfSBjYXRjaCAoZHJhd0Vycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEcmF3IGVycm9yIGR1cmluZyBlcnJvciByZWNvdmVyeTonLCBkcmF3RXJyb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0g5Yid5pyf5YyW44Go44Kk44OZ44Oz44OI44OP44Oz44OJ44Oq44Oz44KwIC0tLVxuZXhwb3J0IGNvbnN0IGdhbWVVSSA9IG5ldyBHYW1lVUkoZ2FtZVN0YXRlLCB7XG4gIG1vdmVQaWVjZTogcGxheWVyTW92ZSxcbiAgZHJvcFBpZWNlOiBwbGF5ZXJEcm9wLFxuICByb3RhdGVQaWVjZTogcGxheWVyUm90YXRlLFxuICByZXNldEdhbWUsXG4gIHVwZGF0ZSxcbiAgZ2V0RHJvcEludGVydmFsOiAoKSA9PiB0ZXRyaXNHYW1lLmdldERyb3BJbnRlcnZhbCgpLFxuICBzdGFydFNvZnREcm9wOiAoKSA9PiB0ZXRyaXNHYW1lLnN0YXJ0U29mdERyb3AoKSxcbiAgc3RvcFNvZnREcm9wOiAoKSA9PiB0ZXRyaXNHYW1lLnN0b3BTb2Z0RHJvcCgpLFxufSwgZ2FtZVN0YXRlTWFuYWdlcik7XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIC8vIOeKtuaFi+euoeeQhuWZqOOCkuODquOCu+ODg+ODiFxuICBnYW1lU3RhdGVNYW5hZ2VyLnJlc2V0KCk7XG4gIFxuICAvLyDjgrLjg7zjg6Djga7jg6rjgrvjg4Pjg4hcbiAgdGV0cmlzR2FtZS5yZXNldCgpO1xuICBcbiAgLy8g44Ky44O844Og54q25oWL44Gu5pu05paw44Go5o+P55S7XG4gIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICB1cGRhdGVVSSgpO1xuICBkcmF3KCk7XG4gIFxuICAvLyDjgrLjg7zjg6Djg6vjg7zjg5fjgpLlho3plotcbiAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2xhc3RUaW1lJywgMCk7XG4gIGNvbnN0IGdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgZ2FtZVN0YXRlTWFuYWdlci5zZXRHYW1lTG9vcElkKGdhbWVMb29wSWQpO1xuICBcbiAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBjOODquOCu+ODg+ODiOOBleOCjOOBvuOBl+OBn+OAgicpO1xufVxuXG5mdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKG9uS2V5RG93biwgb25LZXlVcCkge1xuICBnYW1lVUkuc2V0dXBFdmVudExpc3RlbmVycyhvbktleURvd24sIG9uS2V5VXApO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgICAgIGRyYXcoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyDjg4bjgrnjg4jnlKjjga5zZXR1cEV2ZW50TGlzdGVuZXJz6Zai5pWw44KS44Ko44Kv44K544Od44O844OIXG5leHBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmICghY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWN0eCkge1xuICAgICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djgrnjg4bjg7zjg4jjga7liJ3mnJ/ljJZcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY3R4JywgY3R4KTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY2FudmFzJywgY2FudmFzKTtcbiAgICBcbiAgICAvLyDjg6zjg7Pjg4Djg6njg7zjga7liJ3mnJ/ljJZcbiAgICBjb25zdCB7IENPTE9SUywgQkxPQ0tfU0laRSB9ID0gR0FNRV9DT05TVEFOVFM7XG4gICAgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoY2FudmFzLCBDT0xPUlMsIEJMT0NLX1NJWkUpO1xuICAgIFxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruOCteOCpOOCuuioreWumlxuICAgIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICAgIGNhbnZhcy53aWR0aCA9IHN0YXRlLkNPTFMgKiBCTE9DS19TSVpFO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5ST1dTICogQkxPQ0tfU0laRTtcbiAgICBcbiAgICAvLyDjg5zjg7zjg4njga7liJ3mnJ/ljJZcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLmluaXRCb2FyZCgpO1xuICAgIFxuICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOBruioreWumlxuICAgIGNvbnNvbGUubG9nKCfjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZkuLi4nKTtcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKGdhbWVVSS5vbktleURvd24uYmluZChnYW1lVUkpLCBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSkpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOOBruODquOCu+ODg+ODiFxuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZkuLi4nKTtcbiAgICByZXNldEdhbWUoKTtcbiAgICBcbiAgICAvLyDliJ3mnJ/mj4/nlLtcbiAgICBjb25zb2xlLmxvZygn5Yid5pyf5o+P55S744KS5a6f6KGM44GX44G+44GZLi4uJyk7XG4gICAgZHJhdygpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOODq+ODvOODl+OCkumWi+Wni1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djg6vjg7zjg5fjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnbGFzdFRpbWUnLCAwKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnZHJvcENvdW50ZXInLCAwKTtcbiAgICBjb25zdCBnYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXRHYW1lTG9vcElkKGdhbWVMb29wSWQpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ/jgIInKTtcbiAgICBcbiAgICAvLyDjg4bjgrnjg4jnlKjjga7ov5TjgorlgKRcbiAgICByZXR1cm4ge1xuICAgICAgY2FudmFzLFxuICAgICAgZXZlbnRNYW5hZ2VyLFxuICAgICAgZ2FtZVN0YXRlOiBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCksXG4gICAgICBpbml0R2FtZTogaW5pdCxcbiAgICAgIHJlc2V0R2FtZSxcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcnM6IHNldHVwRXZlbnRMaXN0ZW5lcnMuYmluZChudWxsLCBnYW1lVUkub25LZXlEb3duLmJpbmQoZ2FtZVVJKSwgZ2FtZVVJLm9uS2V5VXAuYmluZChnYW1lVUkpKSxcbiAgICAgIHVwZGF0ZSxcbiAgICAgIGRyYXdcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gaW5pdEdhbWXplqLmlbDjga9pbml044Gu44Ko44Kk44Oq44Ki44K577yI44OG44K544OI5LqS5o+b5oCn44Gu44Gf44KB77yJXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gIGlmICghY2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcignQ2FudmFz6KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJzJE44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdjdHgnLCBjdHgpO1xuICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY2FudmFzJywgY2FudmFzKTtcbiAgY29uc3Qgc3RhdGUgPSBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCk7XG4gIGNhbnZhcy53aWR0aCA9IHN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBjYW52YXMuaGVpZ2h0ID0gc3RhdGUuUk9XUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIFxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vLyAtLS0g44Ko44Kv44K544Od44O844OI44Go44OW44Op44Km44K25a6f6KGMIC0tLVxuXG5leHBvcnQgeyBkcmF3IH07IC8vIGRyYXfplqLmlbDjgpLjgqjjgq/jgrnjg53jg7zjg4hcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRldHJpc0dhbWUobmV3R2FtZSkge1xuICB0ZXRyaXNHYW1lID0gbmV3R2FtZTtcbn1cblxuY29uc3QgZXhwb3J0cyA9IHsgaW5pdCwgaW5pdEdhbWUsIHBsYXllck1vdmUsIHBsYXllclJvdGF0ZSwgcGxheWVyRHJvcCwgZ2FtZVVJLCBnYW1lU3RhdGUsIGdhbWVTdGF0ZU1hbmFnZXIsIHJlbmRlcmVyLCByZXNldEdhbWUsIHVwZGF0ZSwgc2V0dXBFdmVudExpc3RlbmVycywgZHJhdywgdGV0cmlzR2FtZSB9O1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcbiIsImV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xuICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgIFxuICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignMkQg44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOODnuODiOODquODg+OCr+OCueOCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXRyaXggLSDmj4/nlLvjgZnjgovjg57jg4jjg6rjg4Pjgq/jgrlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9mZnNldCAtIOOCquODleOCu+ODg+ODiOW6p+aomSB7eCwgeX1cbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2xvcnMgLSDoibLjga7phY3liJfvvIjjgqrjg5fjgrfjg6fjg7PjgIHjg4fjg5Xjgqnjg6vjg4jjga8gdGhpcy5jb2xvcnPvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJsb2NrU2l6ZSAtIOODluODreODg+OCr+OCteOCpOOCuu+8iOOCquODl+OCt+ODp+ODs+OAgeODh+ODleOCqeODq+ODiOOBryB0aGlzLmJsb2NrU2l6Ze+8iVxuICAgKi9cbiAgZHJhd01hdHJpeChtYXRyaXgsIG9mZnNldCwgY29sb3JzID0gdGhpcy5jb2xvcnMsIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgaWYgKCF0aGlzLmN0eCB8fCAhbWF0cml4IHx8ICFBcnJheS5pc0FycmF5KG1hdHJpeCkgfHwgIW9mZnNldCB8fCAhY29sb3JzIHx8ICFibG9ja1NpemUpIHtcbiAgICAgIGNvbnNvbGUud2FybignZHJhd01hdHJpeDogSW52YWxpZCBwYXJhbWV0ZXJzJywgeyBcbiAgICAgICAgaGFzQ3R4OiAhIXRoaXMuY3R4LCBcbiAgICAgICAgaGFzTWF0cml4OiAhIW1hdHJpeCwgXG4gICAgICAgIGhhc09mZnNldDogISFvZmZzZXQsIFxuICAgICAgICBoYXNDb2xvcnM6ICEhY29sb3JzLCBcbiAgICAgICAgaGFzQmxvY2tTaXplOiAhIWJsb2NrU2l6ZSBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIG9mZnNldC54ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb2Zmc2V0LnkgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2RyYXdNYXRyaXg6IEludmFsaWQgb2Zmc2V0IHZhbHVlcycsIG9mZnNldCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSByZXR1cm47XG4gICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IChjb2xvcnNbdmFsdWVdICYmIHR5cGVvZiBjb2xvcnNbdmFsdWVdID09PSAnc3RyaW5nJykgPyBjb2xvcnNbdmFsdWVdIDogJyMwMDAnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoKHggKyBvZmZzZXQueCkgKiBibG9ja1NpemUsICh5ICsgb2Zmc2V0LnkpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIOODhuOCueODiOeSsOWig+OBp+OBr+ips+e0sOOCqOODqeODvOOCkuWHuuOBleOBquOBhFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRyYXdpbmcgYmxvY2sgYXQnLCB4LCB5LCAnOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCreODo+ODs+ODkOOCueOCkuOCr+ODquOCouOBl+OBpuiDjOaZr+OCkuaPj+eUu+OBmeOCi1xuICAgKi9cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5jdHggfHwgIXRoaXMuY2FudmFzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBjYW52YXMgY29udGV4dCBpbiBjbGVhckNhbnZhcycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZjBmMGYwJztcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjbGVhcmluZyBjYW52YXM6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6Djg5zjg7zjg4njgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gYm9hcmRHcmlkIC0g44Oc44O844OJ44Gu44Kw44Oq44OD44OJXG4gICAqL1xuICBkcmF3Qm9hcmQoYm9hcmRHcmlkKSB7XG4gICAgaWYgKGJvYXJkR3JpZCAmJiBBcnJheS5pc0FycmF5KGJvYXJkR3JpZCkpIHtcbiAgICAgIHRoaXMuZHJhd01hdHJpeChib2FyZEdyaWQsIHsgeDogMCwgeTogMCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44OU44O844K544KS5o+P55S744GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaWVjZSAtIOODlOODvOOCueOCquODluOCuOOCp+OCr+ODiFxuICAgKi9cbiAgZHJhd1BpZWNlKHBpZWNlKSB7XG4gICAgaWYgKHBpZWNlICYmIHBpZWNlLm1hdHJpeCAmJiBwaWVjZS5wb3MpIHtcbiAgICAgIHRoaXMuZHJhd01hdHJpeChwaWVjZS5tYXRyaXgsIHBpZWNlLnBvcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOasoeOBruODlOODvOOCueOCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBuZXh0UGllY2VDYW52YXMgLSDmrKHjga7jg5Tjg7zjgrnnlKjjgq3jg6Pjg7Pjg5DjgrlcbiAgICogQHBhcmFtIHtPYmplY3R9IG5leHRQaWVjZSAtIOasoeOBruODlOODvOOCueOCquODluOCuOOCp+OCr+ODiFxuICAgKi9cbiAgZHJhd05leHRQaWVjZShuZXh0UGllY2VDYW52YXMsIG5leHRQaWVjZSkge1xuICAgIGlmICghbmV4dFBpZWNlQ2FudmFzIHx8ICFuZXh0UGllY2UgfHwgIW5leHRQaWVjZS5tYXRyaXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV4dEN0eCA9IG5leHRQaWVjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKCFuZXh0Q3R4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGdldCAyRCBjb250ZXh0IGZvciBuZXh0IHBpZWNlIGNhbnZhcycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIG5leHRDdHguY2xlYXJSZWN0KDAsIDAsIG5leHRDdHguY2FudmFzLndpZHRoLCBuZXh0Q3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeyBtYXRyaXggfSA9IG5leHRQaWVjZTtcbiAgICAgIFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0cml4KSAmJiBtYXRyaXgubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KG1hdHJpeFswXSkpIHtcbiAgICAgICAgY29uc3QgeCA9IChuZXh0Q3R4LmNhbnZhcy53aWR0aCAvIHRoaXMuYmxvY2tTaXplIC0gbWF0cml4WzBdLmxlbmd0aCkgLyAyO1xuICAgICAgICBjb25zdCB5ID0gKG5leHRDdHguY2FudmFzLmhlaWdodCAvIHRoaXMuYmxvY2tTaXplIC0gbWF0cml4Lmxlbmd0aCkgLyAyO1xuICAgICAgICBcbiAgICAgICAgLy8g5qyh44Gu44OU44O844K555So44Gu5LiA5pmC55qE44Gq44Os44Oz44OA44Op44O844KS5L2c5oiQXG4gICAgICAgIGNvbnN0IHRlbXBSZW5kZXJlciA9IG5ldyBSZW5kZXJlcihuZXh0UGllY2VDYW52YXMsIHRoaXMuY29sb3JzLCB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgIHRlbXBSZW5kZXJlci5kcmF3TWF0cml4KG1hdHJpeCwgeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyDjg4bjgrnjg4jnkrDlooPjgafjga/oqbPntLDjgqjjg6njg7zjgpLlh7rjgZXjgarjgYQgIFxuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRyYXdpbmcgbmV4dCBwaWVjZTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOWFqOS9k+OCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEgLSDjgrLjg7zjg6Djg4fjg7zjgr9cbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZ2FtZURhdGEuYm9hcmRHcmlkIC0g44Oc44O844OJ44Gu44Kw44Oq44OD44OJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBnYW1lRGF0YS5waWVjZSAtIOePvuWcqOOBruODlOODvOOCuVxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEubmV4dFBpZWNlIC0g5qyh44Gu44OU44O844K5XG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IG5leHRQaWVjZUNhbnZhcyAtIOasoeOBruODlOODvOOCueeUqOOCreODo+ODs+ODkOOCuVxuICAgKi9cbiAgcmVuZGVyKGdhbWVEYXRhLCBuZXh0UGllY2VDYW52YXMgPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcbiAgICAgIFxuICAgICAgLy8g44Oh44Kk44Oz44Oc44O844OJ44Gu5o+P55S7XG4gICAgICBpZiAoZ2FtZURhdGEuYm9hcmRHcmlkKSB7XG4gICAgICAgIHRoaXMuZHJhd0JvYXJkKGdhbWVEYXRhLmJvYXJkR3JpZCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOePvuWcqOOBruODlOODvOOCueOBruaPj+eUu1xuICAgICAgaWYgKGdhbWVEYXRhLnBpZWNlKSB7XG4gICAgICAgIHRoaXMuZHJhd1BpZWNlKGdhbWVEYXRhLnBpZWNlKTtcbiAgICAgIH1cblxuICAgICAgLy8g5qyh44Gu44OU44O844K544Gu5o+P55S7XG4gICAgICBpZiAobmV4dFBpZWNlQ2FudmFzICYmIGdhbWVEYXRhLm5leHRQaWVjZSkge1xuICAgICAgICB0aGlzLmRyYXdOZXh0UGllY2UobmV4dFBpZWNlQ2FudmFzLCBnYW1lRGF0YS5uZXh0UGllY2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGluIHJlbmRlciBmdW5jdGlvbjonLCBlcnJvcik7XG4gICAgfVxuICB9XG59IiwiLy8gU1JT44Kt44OD44Kv44OH44O844K/44Gu5qeL6YCgOiBbc3RhdGVdW2tpY2tJbmRleF1beC95XVxuLy8gc3RhdGU6IOePvuWcqOOBruWbnui7oueKtuaFiyAoMC0zKVxuLy8ga2lja0luZGV4OiDjgq3jg4Pjgq/jg4bjgrnjg4jjga7jgqTjg7Pjg4fjg4Pjgq/jgrkgKDAtNClcbi8vIFt4L3ldOiDjgq3jg4Pjgq/jgqrjg5Xjgrvjg4Pjg4ggKHgsIHkpXG5leHBvcnQgY29uc3QgU1JTX0tJQ0tTX0pMVFNaID0gW1xuICAvLyAwIC0+IFIgKDAtPjEpXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFstMSwgLTFdLCBbMCwgMl0sIFstMSwgMl1cbiAgXSxcbiAgLy8gUiAtPiAyICgxLT4yKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFsxLCAtMV0sIFswLCAyXSwgWzEsIDJdXG4gIF0sXG4gIC8vIDIgLT4gTCAoMi0+MylcbiAgW1xuICAgIFswLCAwXSwgWzEsIDBdLCBbMSwgMV0sIFswLCAtMl0sIFsxLCAtMl1cbiAgXSxcbiAgLy8gTCAtPiAwICgzLT4wKVxuICBbXG4gICAgWzAsIDBdLCBbLTEsIDBdLCBbLTEsIDFdLCBbMCwgLTJdLCBbLTEsIC0yXVxuICBdXG5dO1xuXG5leHBvcnQgY29uc3QgU1JTX0tJQ0tTX0kgPSBbXG4gIC8vIDAgLT4gUiAoMC0+MSlcbiAgW1xuICAgIFswLCAwXSwgWy0yLCAwXSwgWzEsIDBdLCBbLTIsIC0xXSwgWzEsIDJdXG4gIF0sXG4gIC8vIFIgLT4gMiAoMS0+MilcbiAgW1xuICAgIFswLCAwXSwgWy0xLCAwXSwgWzIsIDBdLCBbLTEsIDJdLCBbMiwgLTFdXG4gIF0sXG4gIC8vIDIgLT4gTCAoMi0+MylcbiAgW1xuICAgIFswLCAwXSwgWzIsIDBdLCBbLTEsIDBdLCBbMiwgMV0sIFstMSwgLTJdXG4gIF0sXG4gIC8vIEwgLT4gMCAoMy0+MClcbiAgW1xuICAgIFswLCAwXSwgWzEsIDBdLCBbLTIsIDBdLCBbMSwgLTJdLCBbLTIsIDFdXG4gIF1cbl07XG5cbmV4cG9ydCBjbGFzcyBSb3RhdGlvblN5c3RlbSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMua2lja0RhdGEgPSB7XG4gICAgICAnSSc6IFNSU19LSUNLU19JLFxuICAgICAgJ2RlZmF1bHQnOiBTUlNfS0lDS1NfSkxUU1pcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOODlOODvOOCueOCv+OCpOODl+OBq+W/nOOBmOOBn+OCreODg+OCr+ODh+ODvOOCv+OCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGllY2VUeXBlIC0g44OU44O844K544Gu44K/44Kk44OXXG4gICAqIEByZXR1cm5zIHtBcnJheX0g44Kt44OD44Kv44OH44O844K/XG4gICAqL1xuICBnZXRLaWNrRGF0YShwaWVjZVR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5raWNrRGF0YVtwaWVjZVR5cGVdIHx8IHRoaXMua2lja0RhdGFbJ2RlZmF1bHQnXTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm57ou6LnirbmhYvjgpLmpJzoqLzjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IHJvdGF0aW9uU3RhdGUgLSDlm57ou6LnirbmhYtcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOacieWKueOBi+OBqeOBhuOBi1xuICAgKi9cbiAgdmFsaWRhdGVSb3RhdGlvblN0YXRlKHJvdGF0aW9uU3RhdGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHJvdGF0aW9uU3RhdGUgPT09ICdudW1iZXInICYmIHJvdGF0aW9uU3RhdGUgPj0gMCAmJiByb3RhdGlvblN0YXRlIDw9IDM7XG4gIH1cblxuICAvKipcbiAgICog44Kt44OD44Kv44OG44K544OI44Gu44Kq44OV44K744OD44OI44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZVR5cGUgLSDjg5Tjg7zjgrnjga7jgr/jgqTjg5dcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9yaWdpbmFsUm90YXRpb25TdGF0ZSAtIOWFg+OBruWbnui7oueKtuaFi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uIC0g5Zue6Lui5pa55ZCRICgxOiDmmYLoqIjlm57jgoosIC0xOiDlj43mmYLoqIjlm57jgoopXG4gICAqIEByZXR1cm5zIHtBcnJheTxBcnJheTxudW1iZXI+Pn0g44Kt44OD44Kv44OG44K544OI44Gu44Kq44OV44K744OD44OI6YWN5YiXXG4gICAqL1xuICBnZXRLaWNrT2Zmc2V0cyhwaWVjZVR5cGUsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLnZhbGlkYXRlUm90YXRpb25TdGF0ZShvcmlnaW5hbFJvdGF0aW9uU3RhdGUpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwi54Sh5Yq544Gq5Zue6Lui54q25oWLOlwiLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUpO1xuICAgICAgcmV0dXJuIFtbMCwgMF1dOyAvLyDjg4fjg5Xjgqnjg6vjg4jjga7jgqrjg5Xjgrvjg4Pjg4hcbiAgICB9XG5cbiAgICBjb25zdCBraWNrRGF0YSA9IHRoaXMuZ2V0S2lja0RhdGEocGllY2VUeXBlKTtcbiAgICBjb25zdCBraWNrcyA9IGtpY2tEYXRhW29yaWdpbmFsUm90YXRpb25TdGF0ZSAlIDRdO1xuICAgIFxuICAgIGlmICgha2lja3MgfHwgIUFycmF5LmlzQXJyYXkoa2lja3MpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBraWNrcyBkYXRhOlwiLCBraWNrcywgXCJmb3Igcm90YXRpb24gc3RhdGU6XCIsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSk7XG4gICAgICByZXR1cm4gW1swLCAwXV07IC8vIOODh+ODleOCqeODq+ODiOOBruOCquODleOCu+ODg+ODiFxuICAgIH1cbiAgICBcbiAgICAvLyDlj43mmYLoqIjlm57jgorjga7loLTlkIjjga/jgq3jg4Pjgq/jg4fjg7zjgr/jgpLlj43ou6JcbiAgICBjb25zdCB0ZXN0U2V0ID0gZGlyZWN0aW9uID09PSAxIFxuICAgICAgPyBbLi4ua2lja3NdIC8vIOmFjeWIl+OBruOCs+ODlOODvOOCkuS9nOaIkFxuICAgICAgOiBraWNrcy5tYXAoa2ljayA9PiB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2spIHx8IGtpY2subGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBraWNrIGRhdGEgZm9ybWF0OlwiLCBraWNrKTtcbiAgICAgICAgICAgIHJldHVybiBbMCwgMF07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbLWtpY2tbMF0sIC1raWNrWzFdXTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVzdFNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm57ou6LjgpLoqabooYzjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IHBpZWNlIC0g44OU44O844K544Kq44OW44K444Kn44Kv44OIXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb24gLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY29sbGlzaW9uQ2hlY2tGbiAtIOihneeqgeWIpOWumuOCkuihjOOBhumWouaVsFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDlm57ou6LntZDmnpwge3N1Y2Nlc3M6IGJvb2xlYW4sIGZpbmFsUG9zaXRpb24/OiB7eCwgeX19XG4gICAqL1xuICBhdHRlbXB0Um90YXRpb24ocGllY2UsIGRpcmVjdGlvbiwgY29sbGlzaW9uQ2hlY2tGbikge1xuICAgIGlmICghcGllY2UgfHwgIXBpZWNlLm1hdHJpeCB8fCAhQXJyYXkuaXNBcnJheShwaWVjZS5tYXRyaXgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgcGllY2UgZm9yIHJvdGF0aW9uJyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sbGlzaW9uQ2hlY2tGbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignQ29sbGlzaW9uIGNoZWNrIGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyDlhYPjga7nirbmhYvjgpLkv53lrZhcbiAgICAgIGNvbnN0IG9yaWdpbmFsUG9zID0geyAuLi5waWVjZS5wb3MgfTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsTWF0cml4ID0gcGllY2UubWF0cml4Lm1hcChyb3cgPT4gXG4gICAgICAgIEFycmF5LmlzQXJyYXkocm93KSA/IFsuLi5yb3ddIDogW11cbiAgICAgICk7XG4gICAgICBjb25zdCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUgPSBwaWVjZS5yb3RhdGlvblN0YXRlO1xuICAgICAgXG4gICAgICBpZiAoIXRoaXMudmFsaWRhdGVSb3RhdGlvblN0YXRlKG9yaWdpbmFsUm90YXRpb25TdGF0ZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgICAgIH1cblxuICAgICAgLy8g44OU44O844K544KS5Zue6Lui77yI5Zue6Lui54q25oWL44Gu5pu05paw44GvUGllY2Uucm90YXRl5YaF44Gn6KGM44GG77yJXG4gICAgICBwaWVjZS5yb3RhdGUoZGlyZWN0aW9uKTtcblxuICAgICAgLy8g44Kt44OD44Kv44OG44K544OI44KS5a6f6KGMXG4gICAgICBjb25zdCBraWNrT2Zmc2V0cyA9IHRoaXMuZ2V0S2lja09mZnNldHMocGllY2UudHlwZSwgb3JpZ2luYWxSb3RhdGlvblN0YXRlLCBkaXJlY3Rpb24pO1xuICAgICAgXG4gICAgICBmb3IgKGNvbnN0IFtvZmZzZXRYLCBvZmZzZXRZXSBvZiBraWNrT2Zmc2V0cykge1xuICAgICAgICBwaWVjZS5wb3MueCArPSBvZmZzZXRYO1xuICAgICAgICBwaWVjZS5wb3MueSArPSBvZmZzZXRZO1xuXG4gICAgICAgIGlmICghY29sbGlzaW9uQ2hlY2tGbigpKSB7XG4gICAgICAgICAgLy8g6KGd56qB44GM44Gq44GR44KM44Gw5Zue6Lui5oiQ5YqfXG4gICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZmluYWxQb3NpdGlvbjogeyAuLi5waWVjZS5wb3MgfSB9O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDooZ3nqoHjgZnjgovloLTlkIjjga/kvY3nva7jgpLmiLvjgZfjgabmrKHjga7jg4bjgrnjg4jjgpLoqabjgZlcbiAgICAgICAgcGllY2UucG9zLnggLT0gb2Zmc2V0WDtcbiAgICAgICAgcGllY2UucG9zLnkgLT0gb2Zmc2V0WTtcbiAgICAgIH1cblxuICAgICAgLy8g5YWo44Gm44Gu44OG44K544OI44Gn6KGd56qB44GZ44KL5aC05ZCI44CB5YWD44Gu54q25oWL44Gr5oi744GZXG4gICAgICBwaWVjZS5tYXRyaXggPSBvcmlnaW5hbE1hdHJpeDtcbiAgICAgIHBpZWNlLnJvdGF0aW9uU3RhdGUgPSBvcmlnaW5hbFJvdGF0aW9uU3RhdGU7XG4gICAgICBwaWVjZS5wb3MgPSB7IC4uLm9yaWdpbmFsUG9zIH07XG4gICAgICBcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyByb3RhdGlvbiBhdHRlbXB0OicsIGVycm9yKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNSU+ODh+ODvOOCv+OCkuaknOiovOOBmeOCi1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g44OH44O844K/44GM5pyJ5Yq544GL44Gp44GG44GLXG4gICAqL1xuICB2YWxpZGF0ZVNSU0RhdGEoKSB7XG4gICAgY29uc3QgcmVxdWlyZWRTdGF0ZXMgPSA0O1xuICAgIGNvbnN0IHJlcXVpcmVkS2lja3MgPSA1O1xuICAgIFxuICAgIGZvciAoY29uc3QgW3BpZWNlVHlwZSwga2lja0RhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMua2lja0RhdGEpKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2lja0RhdGEpIHx8IGtpY2tEYXRhLmxlbmd0aCAhPT0gcmVxdWlyZWRTdGF0ZXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBraWNrIGRhdGEgc3RydWN0dXJlIGZvciAke3BpZWNlVHlwZX06IGV4cGVjdGVkICR7cmVxdWlyZWRTdGF0ZXN9IHN0YXRlc2ApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IHN0YXRlID0gMDsgc3RhdGUgPCBraWNrRGF0YS5sZW5ndGg7IHN0YXRlKyspIHtcbiAgICAgICAgY29uc3Qga2lja3MgPSBraWNrRGF0YVtzdGF0ZV07XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShraWNrcykgfHwga2lja3MubGVuZ3RoICE9PSByZXF1aXJlZEtpY2tzKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBraWNrcyBmb3IgJHtwaWVjZVR5cGV9IHN0YXRlICR7c3RhdGV9OiBleHBlY3RlZCAke3JlcXVpcmVkS2lja3N9IGtpY2tzYCk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBraWNrSW5kZXggPSAwOyBraWNrSW5kZXggPCBraWNrcy5sZW5ndGg7IGtpY2tJbmRleCsrKSB7XG4gICAgICAgICAgY29uc3Qga2ljayA9IGtpY2tzW2tpY2tJbmRleF07XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2spIHx8IGtpY2subGVuZ3RoICE9PSAyIHx8IFxuICAgICAgICAgICAgICB0eXBlb2Yga2lja1swXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGtpY2tbMV0gIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGtpY2sgZm9ybWF0IGZvciAke3BpZWNlVHlwZX0gc3RhdGUgJHtzdGF0ZX0ga2ljayAke2tpY2tJbmRleH1gKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICog5Zue6Lui44K344K544OG44Og44Gu5oOF5aCx44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOOCt+OCueODhuODoOaDheWgsVxuICAgKi9cbiAgZ2V0U3lzdGVtSW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3lzdGVtOiAnU1JTIChTdXBlciBSb3RhdGlvbiBTeXN0ZW0pJyxcbiAgICAgIHN1cHBvcnRlZFBpZWNlczogT2JqZWN0LmtleXModGhpcy5raWNrRGF0YSksXG4gICAgICBpc1ZhbGlkOiB0aGlzLnZhbGlkYXRlU1JTRGF0YSgpXG4gICAgfTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBTY29yZUNhbGN1bGF0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyDjg6njgqTjg7PmtojljrvmlbDjgavlv5zjgZjjgZ/ln7rnpI7lvpfngrlcbiAgICB0aGlzLmxpbmVTY29yZXMgPSBbMCwgNDAsIDEwMCwgMzAwLCAxMjAwXTsgLy8gMC0044Op44Kk44Oz5raI44GX44Gf44Go44GN44Gu5Z+656SO5b6X54K5XG4gICAgXG4gICAgLy8g44Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq44Op44Kk44Oz5pWwXG4gICAgdGhpcy5saW5lc1BlckxldmVsID0gMTA7XG4gICAgXG4gICAgLy8g44K944OV44OI44OJ44Ot44OD44OX44Gu44Oc44O844OK44K5XG4gICAgdGhpcy5zb2Z0RHJvcEJvbnVzID0gMTtcbiAgICBcbiAgICAvLyDjg4/jg7zjg4njg4njg63jg4Pjg5fjga7jg5zjg7zjg4rjgrnvvIjot53pm6LjgYLjgZ/jgorvvIlcbiAgICB0aGlzLmhhcmREcm9wQm9udXMgPSAyO1xuICB9XG5cbiAgLyoqXG4gICAqIOODqeOCpOODs+a2iOWOu+OBq+OCiOOCi+OCueOCs+OCouOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gbGluZXNDbGVhcmVkIC0g5raI5Y6744GX44Gf44Op44Kk44Oz5pWwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbCAtIOePvuWcqOOBruODrOODmeODq1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDoqIjnrpfjgZXjgozjgZ/jgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZUxpbmVTY29yZShsaW5lc0NsZWFyZWQsIGxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lc0NsZWFyZWQgIT09ICdudW1iZXInIHx8IGxpbmVzQ2xlYXJlZCA8IDApIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsaW5lc0NsZWFyZWQgdmFsdWU6JywgbGluZXNDbGVhcmVkKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGxldmVsICE9PSAnbnVtYmVyJyB8fCBsZXZlbCA8IDEpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsZXZlbCB2YWx1ZTonLCBsZXZlbCk7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBNYXRoLmZsb29yKGxpbmVzQ2xlYXJlZCkpLCB0aGlzLmxpbmVTY29yZXMubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHRoaXMubGluZVNjb3Jlc1tpbmRleF0gKiBsZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjga7jgrnjgrPjgqLjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyb3BEaXN0YW5jZSAtIOODieODreODg+ODl+OBl+OBn+i3nembolxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZVNvZnREcm9wU2NvcmUoZHJvcERpc3RhbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBkcm9wRGlzdGFuY2UgIT09ICdudW1iZXInIHx8IGRyb3BEaXN0YW5jZSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZHJvcERpc3RhbmNlICogdGhpcy5zb2Z0RHJvcEJvbnVzO1xuICB9XG5cbiAgLyoqXG4gICAqIOODj+ODvOODieODieODreODg+ODl+OBruOCueOCs+OCouOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZHJvcERpc3RhbmNlIC0g44OJ44Ot44OD44OX44GX44Gf6Led6ZuiXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOODj+ODvOODieODieODreODg+ODl+OCueOCs+OColxuICAgKi9cbiAgY2FsY3VsYXRlSGFyZERyb3BTY29yZShkcm9wRGlzdGFuY2UpIHtcbiAgICBpZiAodHlwZW9mIGRyb3BEaXN0YW5jZSAhPT0gJ251bWJlcicgfHwgZHJvcERpc3RhbmNlIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkcm9wRGlzdGFuY2UgKiB0aGlzLmhhcmREcm9wQm9udXM7XG4gIH1cblxuICAvKipcbiAgICog44Os44OZ44Or44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbExpbmVzIC0g57eP44Op44Kk44Oz5pWwXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOioiOeul+OBleOCjOOBn+ODrOODmeODq1xuICAgKi9cbiAgY2FsY3VsYXRlTGV2ZWwodG90YWxMaW5lcykge1xuICAgIGlmICh0eXBlb2YgdG90YWxMaW5lcyAhPT0gJ251bWJlcicgfHwgdG90YWxMaW5lcyA8IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0b3RhbExpbmVzIC8gdGhpcy5saW5lc1BlckxldmVsKSArIDE7XG4gIH1cblxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44GM5b+F6KaB44GL44OB44Kn44OD44Kv44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50TGluZXMgLSDnj77lnKjjga7jg6njgqTjg7PmlbBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMZXZlbCAtIOePvuWcqOOBruODrOODmeODq1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g44Os44OZ44Or44Ki44OD44OX44GM5b+F6KaB44GL44Gp44GG44GLXG4gICAqL1xuICBzaG91bGRMZXZlbFVwKGN1cnJlbnRMaW5lcywgY3VycmVudExldmVsKSB7XG4gICAgY29uc3QgbmV3TGV2ZWwgPSB0aGlzLmNhbGN1bGF0ZUxldmVsKGN1cnJlbnRMaW5lcyk7XG4gICAgcmV0dXJuIG5ld0xldmVsID4gY3VycmVudExldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIOasoeOBruODrOODmeODq+OBvuOBp+OBq+W/heimgeOBquODqeOCpOODs+aVsOOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudExpbmVzIC0g54++5Zyo44Gu44Op44Kk44Oz5pWwXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOasoeOBruODrOODmeODq+OBvuOBp+OBq+W/heimgeOBquODqeOCpOODs+aVsFxuICAgKi9cbiAgZ2V0TGluZXNVbnRpbE5leHRMZXZlbChjdXJyZW50TGluZXMpIHtcbiAgICBpZiAodHlwZW9mIGN1cnJlbnRMaW5lcyAhPT0gJ251bWJlcicgfHwgY3VycmVudExpbmVzIDwgMCkge1xuICAgICAgcmV0dXJuIHRoaXMubGluZXNQZXJMZXZlbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3VycmVudExldmVsTGluZXMgPSBjdXJyZW50TGluZXMgJSB0aGlzLmxpbmVzUGVyTGV2ZWw7XG4gICAgcmV0dXJuIHRoaXMubGluZXNQZXJMZXZlbCAtIGN1cnJlbnRMZXZlbExpbmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIOikh+WQiOOCueOCs+OCouOCkuioiOeul+OBmeOCi++8iOODqeOCpOODs+a2iOWOuyArIOODieODreODg+ODl+ODnOODvOODiuOCue+8iVxuICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcmVEYXRhIC0g44K544Kz44Ki6KiI566X44OH44O844K/XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEubGluZXNDbGVhcmVkIC0g5raI5Y6744GX44Gf44Op44Kk44Oz5pWwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEubGV2ZWwgLSDnj77lnKjjga7jg6zjg5njg6tcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlRGF0YS5zb2Z0RHJvcERpc3RhbmNlIC0g44K944OV44OI44OJ44Ot44OD44OX44Gu6Led6Zui77yI44Kq44OX44K344On44Oz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEuaGFyZERyb3BEaXN0YW5jZSAtIOODj+ODvOODieODieODreODg+ODl+OBrui3nembou+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDoqIjnrpfntZDmnpwge3RvdGFsU2NvcmUsIGxpbmVTY29yZSwgc29mdERyb3BTY29yZSwgaGFyZERyb3BTY29yZX1cbiAgICovXG4gIGNhbGN1bGF0ZVRvdGFsU2NvcmUoc2NvcmVEYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGluZXNDbGVhcmVkID0gMCxcbiAgICAgIGxldmVsID0gMSxcbiAgICAgIHNvZnREcm9wRGlzdGFuY2UgPSAwLFxuICAgICAgaGFyZERyb3BEaXN0YW5jZSA9IDBcbiAgICB9ID0gc2NvcmVEYXRhO1xuXG4gICAgY29uc3QgbGluZVNjb3JlID0gdGhpcy5jYWxjdWxhdGVMaW5lU2NvcmUobGluZXNDbGVhcmVkLCBsZXZlbCk7XG4gICAgY29uc3Qgc29mdERyb3BTY29yZSA9IHRoaXMuY2FsY3VsYXRlU29mdERyb3BTY29yZShzb2Z0RHJvcERpc3RhbmNlKTtcbiAgICBjb25zdCBoYXJkRHJvcFNjb3JlID0gdGhpcy5jYWxjdWxhdGVIYXJkRHJvcFNjb3JlKGhhcmREcm9wRGlzdGFuY2UpO1xuICAgIGNvbnN0IHRvdGFsU2NvcmUgPSBsaW5lU2NvcmUgKyBzb2Z0RHJvcFNjb3JlICsgaGFyZERyb3BTY29yZTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFNjb3JlLFxuICAgICAgbGluZVNjb3JlLFxuICAgICAgc29mdERyb3BTY29yZSxcbiAgICAgIGhhcmREcm9wU2NvcmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOOCueOCs+OCouioiOeul+OBruioreWumuOCkuabtOaWsOOBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0g5paw44GX44GE6Kit5a6aXG4gICAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gY29uZmlnLmxpbmVTY29yZXMgLSDjg6njgqTjg7PmtojljrvjgrnjgrPjgqLphY3liJfvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5saW5lc1BlckxldmVsIC0g44Os44OZ44Or44GC44Gf44KK44Gu44Op44Kk44Oz5pWw77yI44Kq44OX44K344On44Oz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcuc29mdERyb3BCb251cyAtIOOCveODleODiOODieODreODg+ODl+ODnOODvOODiuOCue+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLmhhcmREcm9wQm9udXMgLSDjg4/jg7zjg4njg4njg63jg4Pjg5fjg5zjg7zjg4rjgrnvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICovXG4gIHVwZGF0ZUNvbmZpZyhjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmxpbmVTY29yZXMgJiYgQXJyYXkuaXNBcnJheShjb25maWcubGluZVNjb3JlcykpIHtcbiAgICAgIHRoaXMubGluZVNjb3JlcyA9IFsuLi5jb25maWcubGluZVNjb3Jlc107XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgY29uZmlnLmxpbmVzUGVyTGV2ZWwgPT09ICdudW1iZXInICYmIGNvbmZpZy5saW5lc1BlckxldmVsID4gMCkge1xuICAgICAgdGhpcy5saW5lc1BlckxldmVsID0gY29uZmlnLmxpbmVzUGVyTGV2ZWw7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgY29uZmlnLnNvZnREcm9wQm9udXMgPT09ICdudW1iZXInICYmIGNvbmZpZy5zb2Z0RHJvcEJvbnVzID49IDApIHtcbiAgICAgIHRoaXMuc29mdERyb3BCb251cyA9IGNvbmZpZy5zb2Z0RHJvcEJvbnVzO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5oYXJkRHJvcEJvbnVzID09PSAnbnVtYmVyJyAmJiBjb25maWcuaGFyZERyb3BCb251cyA+PSAwKSB7XG4gICAgICB0aGlzLmhhcmREcm9wQm9udXMgPSBjb25maWcuaGFyZERyb3BCb251cztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu6Kit5a6a44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOePvuWcqOOBruioreWumlxuICAgKi9cbiAgZ2V0Q29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lU2NvcmVzOiBbLi4udGhpcy5saW5lU2NvcmVzXSxcbiAgICAgIGxpbmVzUGVyTGV2ZWw6IHRoaXMubGluZXNQZXJMZXZlbCxcbiAgICAgIHNvZnREcm9wQm9udXM6IHRoaXMuc29mdERyb3BCb251cyxcbiAgICAgIGhhcmREcm9wQm9udXM6IHRoaXMuaGFyZERyb3BCb251c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki5bGl5q2044KS566h55CG44GZ44KL44Gf44KB44Gu44OY44Or44OR44O8XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50U2NvcmUgLSDnj77lnKjjga7jgrnjgrPjgqJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG5ld1Njb3JlIC0g5paw44GX44GE44K544Kz44KiXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOOCueOCs+OCouabtOaWsOaDheWgsSB7cHJldmlvdXNTY29yZSwgbmV3U2NvcmUsIGluY3JlYXNlfVxuICAgKi9cbiAgY3JlYXRlU2NvcmVVcGRhdGUoY3VycmVudFNjb3JlLCBuZXdTY29yZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcmV2aW91c1Njb3JlOiBjdXJyZW50U2NvcmUsXG4gICAgICBuZXdTY29yZTogY3VycmVudFNjb3JlICsgbmV3U2NvcmUsXG4gICAgICBpbmNyZWFzZTogbmV3U2NvcmVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODmeODq+WIpeOBrumbo+aYk+W6puaDheWgseOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDjg6zjg5njg6tcbiAgICogQHJldHVybnMge09iamVjdH0g6Zuj5piT5bqm5oOF5aCxXG4gICAqL1xuICBnZXRMZXZlbEluZm8obGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxldmVsICE9PSAnbnVtYmVyJyB8fCBsZXZlbCA8IDEpIHtcbiAgICAgIGxldmVsID0gMTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGxldmVsLFxuICAgICAgcmVxdWlyZWRMaW5lczogbGV2ZWwgKiB0aGlzLmxpbmVzUGVyTGV2ZWwsXG4gICAgICBzY29yZU11bHRpcGxpZXI6IGxldmVsLFxuICAgICAgbmV4dExldmVsQXQ6IChsZXZlbCArIDEpICogdGhpcy5saW5lc1BlckxldmVsXG4gICAgfTtcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBHYW1lU3RhdGVNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3Iocm93cywgY29scykge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdHg6IG51bGwsXG4gICAgICBjYW52YXM6IG51bGwsXG4gICAgICBib2FyZDogW10sXG4gICAgICBST1dTOiByb3dzLFxuICAgICAgQ09MUzogY29scyxcbiAgICAgIHBpZWNlOiBudWxsLFxuICAgICAgbmV4dFBpZWNlOiBudWxsLFxuICAgICAgc2NvcmU6IDAsXG4gICAgICBsaW5lczogMCxcbiAgICAgIGxldmVsOiAxLFxuICAgICAgZHJvcENvdW50ZXI6IDAsXG4gICAgICBkcm9wSW50ZXJ2YWw6IDEwMDAsXG4gICAgICBsYXN0VGltZTogMCxcbiAgICAgIGdhbWVMb29wSWQ6IG51bGwsXG4gICAgICBpc0dhbWVPdmVyOiBmYWxzZSxcbiAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICBrZXlzOiB7fSxcbiAgICAgIGlzU29mdERyb3A6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnirbmhYvjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge09iamVjdH0g54++5Zyo44Gu54q25oWLXG4gICAqL1xuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnN0YXRlIH07XG4gIH1cblxuICAvKipcbiAgICog54m55a6a44Gu54q25oWL5YCk44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDlj5blvpfjgZnjgovnirbmhYvjga7jgq3jg7xcbiAgICogQHJldHVybnMgeyp9IOeKtuaFi+WApFxuICAgKi9cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW2tleV07XG4gIH1cblxuICAvKipcbiAgICog54m55a6a44Gu54q25oWL5YCk44KS6Kit5a6a44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSDoqK3lrprjgZnjgovnirbmhYvjga7jgq3jg7xcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSAtIOioreWumuOBmeOCi+WApFxuICAgKi9cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDopIfmlbDjga7nirbmhYvlgKTjgpLkuIDluqbjgavoqK3lrprjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IHVwZGF0ZXMgLSDmm7TmlrDjgZnjgovnirbmhYvjga7jgqrjg5bjgrjjgqfjgq/jg4hcbiAgICovXG4gIHVwZGF0ZSh1cGRhdGVzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCB1cGRhdGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5zjg7zjg4njgpLliJ3mnJ/ljJbjgZnjgotcbiAgICovXG4gIGluaXRCb2FyZCgpIHtcbiAgICB0aGlzLnN0YXRlLmJvYXJkID0gQXJyYXkodGhpcy5zdGF0ZS5ST1dTKS5maWxsKG51bGwpLm1hcCgoKSA9PiBBcnJheSh0aGlzLnN0YXRlLkNPTFMpLmZpbGwoMCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOeKtuaFi+OCkuODquOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdGF0ZS5zY29yZSA9IDA7XG4gICAgdGhpcy5zdGF0ZS5saW5lcyA9IDA7XG4gICAgdGhpcy5zdGF0ZS5sZXZlbCA9IDE7XG4gICAgdGhpcy5zdGF0ZS5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgICB0aGlzLnN0YXRlLmRyb3BJbnRlcnZhbCA9IDEwMDA7XG4gICAgdGhpcy5zdGF0ZS5sYXN0VGltZSA9IDA7XG4gICAgdGhpcy5zdGF0ZS5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgXG4gICAgaWYgKHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zdGF0ZS5nYW1lTG9vcElkKTtcbiAgICAgIHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCA9IG51bGw7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuaW5pdEJvYXJkKCk7XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44Gu5Z+65pys5oOF5aCx44KS5ZCM5pyf44GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBnYW1lSW5zdGFuY2UgLSDjgrLjg7zjg6DjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIHN5bmNXaXRoR2FtZShnYW1lSW5zdGFuY2UpIHtcbiAgICBpZiAoIWdhbWVJbnN0YW5jZSkgcmV0dXJuO1xuICAgIFxuICAgIHRoaXMuc3RhdGUuc2NvcmUgPSBnYW1lSW5zdGFuY2Uuc2NvcmUgfHwgMDtcbiAgICB0aGlzLnN0YXRlLmxpbmVzID0gZ2FtZUluc3RhbmNlLmxpbmVzIHx8IDA7XG4gICAgdGhpcy5zdGF0ZS5sZXZlbCA9IGdhbWVJbnN0YW5jZS5sZXZlbCB8fCAxO1xuICAgIHRoaXMuc3RhdGUuaXNHYW1lT3ZlciA9IGdhbWVJbnN0YW5jZS5pc0dhbWVPdmVyIHx8IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUucGllY2UgPSBnYW1lSW5zdGFuY2UucGllY2UgfHwgbnVsbDtcbiAgICB0aGlzLnN0YXRlLm5leHRQaWVjZSA9IGdhbWVJbnN0YW5jZS5uZXh0UGllY2UgfHwgbnVsbDtcbiAgICBcbiAgICBpZiAoZ2FtZUluc3RhbmNlLmJvYXJkICYmIGdhbWVJbnN0YW5jZS5ib2FyZC5ncmlkKSB7XG4gICAgICB0aGlzLnN0YXRlLmJvYXJkID0gZ2FtZUluc3RhbmNlLmJvYXJkLmdyaWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCreODvOOBrueKtuaFi+OCkuabtOaWsOOBmeOCi1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g44Kt44O85ZCNXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJlc3NlZCAtIOaKvOOBleOCjOOBpuOBhOOCi+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgdXBkYXRlS2V5U3RhdGUoa2V5LCBwcmVzc2VkKSB7XG4gICAgdGhpcy5zdGF0ZS5rZXlzW2tleV0gPSBwcmVzc2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOODq+ODvOODl0lE44KS6Kit5a6a44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIOOCsuODvOODoOODq+ODvOODl0lEXG4gICAqL1xuICBzZXRHYW1lTG9vcElkKGlkKSB7XG4gICAgdGhpcy5zdGF0ZS5nYW1lTG9vcElkID0gaWQ7XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44Or44O844OX44KS5YGc5q2i44GZ44KLXG4gICAqL1xuICBzdG9wR2FtZUxvb3AoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5zdGF0ZS5nYW1lTG9vcElkKTtcbiAgICAgIHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOOBjOWun+ihjOS4reOBi+OBqeOBhuOBi+OCkuWIpOWumuOBmeOCi1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5a6f6KGM5Lit44GL44Gp44GG44GLXG4gICAqL1xuICBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuICF0aGlzLnN0YXRlLmlzR2FtZU92ZXIgJiYgIXRoaXMuc3RhdGUucGF1c2VkO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOOCkuS4gOaZguWBnOatoi/lho3plovjgZnjgotcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZWQgLSDkuIDmmYLlgZzmraLjgZnjgovjgYvjganjgYbjgYtcbiAgICovXG4gIHNldFBhdXNlZChwYXVzZWQpIHtcbiAgICB0aGlzLnN0YXRlLnBhdXNlZCA9IHBhdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4njg63jg4Pjg5fplpPpmpTjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGludGVydmFsIC0g5paw44GX44GE44OJ44Ot44OD44OX6ZaT6ZqUXG4gICAqL1xuICB1cGRhdGVEcm9wSW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLnN0YXRlLmRyb3BJbnRlcnZhbCA9IGludGVydmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCveODleODiOODieODreODg+ODl+OBrueKtuaFi+OCkuioreWumuOBmeOCi1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU29mdERyb3AgLSDjgr3jg5Xjg4jjg4njg63jg4Pjg5fkuK3jgYvjganjgYbjgYtcbiAgICovXG4gIHNldFNvZnREcm9wKGlzU29mdERyb3ApIHtcbiAgICB0aGlzLnN0YXRlLmlzU29mdERyb3AgPSBpc1NvZnREcm9wO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+ODkOODg+OCsOeUqDog54++5Zyo44Gu54q25oWL44KS44Ot44Kw44Gr5Ye65Yqb44GZ44KLXG4gICAqL1xuICBsb2dTdGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZygnQ3VycmVudCBHYW1lIFN0YXRlOicsIHtcbiAgICAgIHNjb3JlOiB0aGlzLnN0YXRlLnNjb3JlLFxuICAgICAgbGluZXM6IHRoaXMuc3RhdGUubGluZXMsXG4gICAgICBsZXZlbDogdGhpcy5zdGF0ZS5sZXZlbCxcbiAgICAgIGlzR2FtZU92ZXI6IHRoaXMuc3RhdGUuaXNHYW1lT3ZlcixcbiAgICAgIHBhdXNlZDogdGhpcy5zdGF0ZS5wYXVzZWQsXG4gICAgICBwaWVjZTogdGhpcy5zdGF0ZS5waWVjZSxcbiAgICAgIG5leHRQaWVjZTogdGhpcy5zdGF0ZS5uZXh0UGllY2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog54q25oWL44Gu5qSc6Ki844KS6KGM44GGXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnirbmhYvjgYzmnInlirnjgYvjganjgYbjgYtcbiAgICovXG4gIHZhbGlkYXRlU3RhdGUoKSB7XG4gICAgY29uc3QgcmVxdWlyZWRGaWVsZHMgPSBbJ3Njb3JlJywgJ2xpbmVzJywgJ2xldmVsJywgJ1JPV1MnLCAnQ09MUyddO1xuICAgIFxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgcmVxdWlyZWRGaWVsZHMpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5zdGF0ZVtmaWVsZF0gIT09ICdudW1iZXInKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCBzdGF0ZSBmaWVsZDogJHtmaWVsZH1gLCB0aGlzLnN0YXRlW2ZpZWxkXSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3RhdGUuYm9hcmQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgYm9hcmQgc3RhdGUnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlLCBhY3Rpb25zLCBnYW1lU3RhdGVNYW5hZ2VyKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuYWN0aW9ucyA9IGFjdGlvbnM7XG4gICAgdGhpcy5nYW1lU3RhdGVNYW5hZ2VyID0gZ2FtZVN0YXRlTWFuYWdlcjtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBjb25zdCB7IHN0YXRlLCBhY3Rpb25zIH0gPSB0aGlzO1xuICAgIGlmIChzdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG4gICAgXG4gICAgLy8g5LiL44Kt44O85Lul5aSW44Gv44Kt44O844Oq44OU44O844OI44KS54Sh6KaWXG4gICAgaWYgKGV2ZW50LnJlcGVhdCAmJiBldmVudC5rZXkgIT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8g44Kt44O844GM44GZ44Gn44Gr5oq844GV44KM44Gm44GE44KL5aC05ZCI44Gv5Yem55CG44GX44Gq44GEXG4gICAgaWYgKHN0YXRlLmtleXNbZXZlbnQua2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSB0cnVlO1xuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgIGFjdGlvbnMubW92ZVBpZWNlKC0xKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgYWN0aW9ucy5zdGFydFNvZnREcm9wKCk7XG4gICAgICAgIGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgIGFjdGlvbnMucm90YXRlUGllY2UoMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnICc6XG4gICAgICAgIC8vIOODj+ODvOODieODieODreODg+ODlzog44OU44O844K544GM552A5Zyw44GZ44KL44G+44Gn6YCj57aa44Gn6JC944Go44GZXG4gICAgICAgIGlmIChzdGF0ZS5waWVjZSAmJiBzdGF0ZS5waWVjZS5wb3MgJiYgdHlwZW9mIHN0YXRlLnBpZWNlLnBvcy55ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGxldCBkcm9wQ291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IG1heERyb3BzID0gTWF0aC5taW4oc3RhdGUuUk9XUyB8fCAyMCwgMTAwKTsgLy8g44KI44KK5a6J5YWo44Gq5LiK6ZmQ6Kit5a6aXG4gICAgICAgICAgd2hpbGUgKGRyb3BDb3VudCA8IG1heERyb3BzICYmICFzdGF0ZS5pc0dhbWVPdmVyICYmIHN0YXRlLnBpZWNlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50WSA9IHN0YXRlLnBpZWNlLnBvcy55O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZCA9IGFjdGlvbnMuZHJvcFBpZWNlKCk7XG4gICAgICAgICAgICAgIGlmICghZHJvcHBlZCB8fCAhc3RhdGUucGllY2UgfHwgc3RhdGUucGllY2UucG9zLnkgPT09IGN1cnJlbnRZKSB7XG4gICAgICAgICAgICAgICAgLy8g44OU44O844K544GM6JC944Gh44Gq44GL44Gj44Gf44CB44G+44Gf44Gv5L2N572u44GM5aSJ44KP44KJ44Gq44GL44Gj44Gf5aC05ZCI44Gv57WC5LqGXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZHJvcENvdW50Kys7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgaGFyZCBkcm9wOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICBjYXNlICdSJzpcbiAgICAgICAgYWN0aW9ucy5yZXNldEdhbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChldmVudCkge1xuICAgIHRoaXMuc3RhdGUua2V5c1tldmVudC5rZXldID0gZmFsc2U7XG4gICAgLy8gZ2FtZVN0YXRlTWFuYWdlcuOBjOOBguOCi+WgtOWQiOOBruOBv3VwZGF0ZUtleVN0YXRl44KS5ZG844Gz5Ye644GZXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXRlTWFuYWdlciAmJiB0aGlzLmdhbWVTdGF0ZU1hbmFnZXIudXBkYXRlS2V5U3RhdGUpIHtcbiAgICAgIHRoaXMuZ2FtZVN0YXRlTWFuYWdlci51cGRhdGVLZXlTdGF0ZShldmVudC5rZXksIGZhbHNlKTtcbiAgICB9XG4gICAgLy8g5LiL44Kt44O844GM6Zui44GV44KM44Gf44KJ44OJ44Ot44OD44OX6ZaT6ZqU44KS5YWD44Gr5oi744GZXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5zdG9wU29mdERyb3AoKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKGtleURvd25IYW5kbGVyID0gdGhpcy5vbktleURvd24sIGtleVVwSGFuZGxlciA9IHRoaXMub25LZXlVcCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcbiAqIOODhuODiOODquOCueOCsuODvOODoOOBruOCqOODs+ODiOODquODvOODneOCpOODs+ODiFxuICovXG5cbi8vIOOCueOCv+OCpOODq+OCt+ODvOODiOOCkuOCpOODs+ODneODvOODiFxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4vLyDjgrLjg7zjg6Djg6Ljgrjjg6Xjg7zjg6vjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2dhbWUuanMnO1xuXG4vLyDjg4fjg5Djg4PjgrDnlKjjga7jgrnjgr/jgqTjg6vjgpLov73liqBcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAjZ2FtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB9XG5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbi8vIOODieOCreODpeODoeODs+ODiOOBruiqreOBv+i+vOOBv+WujOS6huOCkuW+heOBo+OBpuOCsuODvOODoOOCkuWIneacn+WMllxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6Kmz57Sw44Ot44Kw44KS5Ye644GV44Gq44GEXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIOOCpOODmeODs+ODiOOBjOeZuueBq+OBl+OBvuOBl+OBnycpO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu54q25oWL44KS56K66KqNXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K6OicsIGNhbnZhcy53aWR0aCwgJ3gnLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCueOCv+OCpOODq+OCteOCpOOCujonLCBjYW52YXMuc3R5bGUud2lkdGgsICd4JywgY2FudmFzLnN0eWxlLmhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfjgq3jg6Pjg7Pjg5DjgrnopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g44Ky44O844Og44KS6ZaL5aeLXG4gICAgaW5pdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX0NPTlNUQU5UUyIsIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSIsIlNDT1JFX1RBQkxFIiwiU0hBUEVTIiwiQ09MT1JTIiwiR0FNRV9TVEFURVMiLCJJTklUIiwiUExBWUlORyIsIlBBVVNFRCIsIkdBTUVfT1ZFUiIsIkJvYXJkIiwiY29scyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJjbGVhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsImlzSW5zaWRlIiwieCIsInkiLCJpc0VtcHR5Iiwic2V0Q2VsbCIsImdldENlbGwiLCJtZXJnZSIsInBpZWNlIiwibWF0cml4IiwicG9zIiwiY2xlYXJMaW5lcyIsImlzQXJyYXkiLCJjb25zb2xlIiwiZXJyb3IiLCJjbGVhcmVkIiwibmV3R3JpZCIsInJvdyIsIndhcm4iLCJjb25jYXQiLCJldmVyeSIsImNlbGwiLCJwdXNoIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidW5zaGlmdCIsIlBpZWNlIiwiUm90YXRpb25TeXN0ZW0iLCJTY29yZUNhbGN1bGF0b3IiLCJURVRST01JTk9fTUFQIiwiSSIsIkoiLCJMIiwiTyIsIlMiLCJUIiwiWiIsIkdhbWUiLCJ0ZXRyb21pbm9zIiwiYm9hcmQiLCJuZXh0UGllY2UiLCJsZXZlbFNwZWVkcyIsImxpbmVzUGVyTGV2ZWwiLCJkcm9wSW50ZXJ2YWwiLCJnZXREcm9wSW50ZXJ2YWwiLCJpc1NvZnREcm9wIiwicm90YXRpb25TeXN0ZW0iLCJzY29yZUNhbGN1bGF0b3IiLCJyZXNldCIsImxldmVsSW5kZXgiLCJNYXRoIiwibWluIiwibGV2ZWwiLCJzdGFydFNvZnREcm9wIiwic3RvcFNvZnREcm9wIiwiY3JlYXRlUGllY2UiLCJpbmRleCIsInR5cGUiLCJPYmplY3QiLCJrZXlzIiwiZmxvb3IiLCJyYW5kb20iLCJsaW5lcyIsInNjb3JlIiwiaXNHYW1lT3ZlciIsInBhdXNlZCIsImNoZWNrTGV2ZWxVcCIsInNob3VsZExldmVsVXAiLCJjYWxjdWxhdGVMZXZlbCIsIm1vdmVQaWVjZSIsImR4IiwibW92ZSIsImhhc0NvbGxpc2lvbiIsIl90aGlzJHBpZWNlIiwiYm9hcmRYIiwiYm9hcmRZIiwic3Bhd25QaWVjZSIsIm9yaWdpbmFsWSIsImRyb3BQaWVjZSIsIm1lcmdlUGllY2UiLCJsaW5lc0NsZWFyZWQiLCJjYWxjdWxhdGVTY29yZSIsIl90aGlzJHBpZWNlMiIsImNhbGN1bGF0ZUxpbmVTY29yZSIsInVwZGF0ZVNjb3JlIiwicm90YXRlUGllY2UiLCJkaXIiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJyZXN1bHQiLCJhdHRlbXB0Um90YXRpb24iLCJzdWNjZXNzIiwiX29iamVjdFNwcmVhZCIsInJvdGF0aW9uU3RhdGUiLCJkeSIsInJvdGF0ZSIsIk4iLCJNIiwicm90YXRlZCIsIl8iLCJHYW1lVUkiLCJSZW5kZXJlciIsIkdhbWVTdGF0ZU1hbmFnZXIiLCJ0ZXRyaXNHYW1lIiwiZXZlbnRNYW5hZ2VyIiwiRXZlbnRUYXJnZXQiLCJnYW1lU3RhdGVNYW5hZ2VyIiwicmVuZGVyZXIiLCJnYW1lU3RhdGUiLCJQcm94eSIsInN0YXRlIiwiZ2V0IiwidGFyZ2V0IiwicHJvcCIsImluaXRCb2FyZCIsImxvZ1N0YXRlIiwic2V0IiwiZHJhdyIsImdldFN0YXRlIiwiZ2FtZURhdGEiLCJib2FyZEdyaWQiLCJuZXh0UGllY2VDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwidXBkYXRlVUkiLCJ1cGRhdGVTY29yZURpc3BsYXkiLCJ1cGRhdGVMaW5lc0Rpc3BsYXkiLCJ1cGRhdGVMZXZlbERpc3BsYXkiLCJpc05hTiIsInNjb3JlRWxlbWVudCIsInRleHRDb250ZW50IiwidG9TdHJpbmciLCJsaW5lc0VsZW1lbnQiLCJsZXZlbEVsZW1lbnQiLCJ1cGRhdGVHYW1lU3RhdGUiLCJzeW5jV2l0aEdhbWUiLCJwbGF5ZXJEcm9wIiwiaXNSdW5uaW5nIiwiZHJvcHBlZCIsInN0b3BHYW1lTG9vcCIsImFsZXJ0IiwicGxheWVyTW92ZSIsInBsYXllclJvdGF0ZSIsInVwZGF0ZSIsInRpbWUiLCJnYW1lTG9vcElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0R2FtZUxvb3BJZCIsImxhc3RUaW1lIiwiZGVsdGFUaW1lIiwiZHJvcENvdW50ZXIiLCJuZXdEcm9wQ291bnRlciIsInNldFBhdXNlZCIsImRyYXdFcnJvciIsImdhbWVVSSIsInJlc2V0R2FtZSIsImxvZyIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJvbktleURvd24iLCJvbktleVVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsImN0eCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdEdhbWUiLCJzZXRUZXRyaXNHYW1lIiwibmV3R2FtZSIsImV4cG9ydHMiLCJjb2xvcnMiLCJibG9ja1NpemUiLCJFcnJvciIsImRyYXdNYXRyaXgiLCJvZmZzZXQiLCJoYXNDdHgiLCJoYXNNYXRyaXgiLCJoYXNPZmZzZXQiLCJoYXNDb2xvcnMiLCJoYXNCbG9ja1NpemUiLCJmb3JFYWNoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbGVhckNhbnZhcyIsImNsZWFyUmVjdCIsImRyYXdCb2FyZCIsImRyYXdQaWVjZSIsImRyYXdOZXh0UGllY2UiLCJuZXh0Q3R4IiwidGVtcFJlbmRlcmVyIiwiU1JTX0tJQ0tTX0pMVFNaIiwiU1JTX0tJQ0tTX0kiLCJraWNrRGF0YSIsImdldEtpY2tEYXRhIiwicGllY2VUeXBlIiwidmFsaWRhdGVSb3RhdGlvblN0YXRlIiwiZ2V0S2lja09mZnNldHMiLCJvcmlnaW5hbFJvdGF0aW9uU3RhdGUiLCJkaXJlY3Rpb24iLCJraWNrcyIsInRlc3RTZXQiLCJtYXAiLCJraWNrIiwiY29sbGlzaW9uQ2hlY2tGbiIsIm9yaWdpbmFsUG9zIiwib3JpZ2luYWxNYXRyaXgiLCJraWNrT2Zmc2V0cyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwibiIsImRvbmUiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJmaW5hbFBvc2l0aW9uIiwiZXJyIiwiZSIsImYiLCJ2YWxpZGF0ZVNSU0RhdGEiLCJyZXF1aXJlZFN0YXRlcyIsInJlcXVpcmVkS2lja3MiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJraWNrSW5kZXgiLCJnZXRTeXN0ZW1JbmZvIiwic3lzdGVtIiwic3VwcG9ydGVkUGllY2VzIiwiaXNWYWxpZCIsImxpbmVTY29yZXMiLCJzb2Z0RHJvcEJvbnVzIiwiaGFyZERyb3BCb251cyIsIm1heCIsImNhbGN1bGF0ZVNvZnREcm9wU2NvcmUiLCJkcm9wRGlzdGFuY2UiLCJjYWxjdWxhdGVIYXJkRHJvcFNjb3JlIiwidG90YWxMaW5lcyIsImN1cnJlbnRMaW5lcyIsImN1cnJlbnRMZXZlbCIsIm5ld0xldmVsIiwiZ2V0TGluZXNVbnRpbE5leHRMZXZlbCIsImN1cnJlbnRMZXZlbExpbmVzIiwiY2FsY3VsYXRlVG90YWxTY29yZSIsInNjb3JlRGF0YSIsIl9zY29yZURhdGEkbGluZXNDbGVhciIsIl9zY29yZURhdGEkbGV2ZWwiLCJfc2NvcmVEYXRhJHNvZnREcm9wRGkiLCJzb2Z0RHJvcERpc3RhbmNlIiwiX3Njb3JlRGF0YSRoYXJkRHJvcERpIiwiaGFyZERyb3BEaXN0YW5jZSIsImxpbmVTY29yZSIsInNvZnREcm9wU2NvcmUiLCJoYXJkRHJvcFNjb3JlIiwidG90YWxTY29yZSIsInVwZGF0ZUNvbmZpZyIsImNvbmZpZyIsImdldENvbmZpZyIsImNyZWF0ZVNjb3JlVXBkYXRlIiwiY3VycmVudFNjb3JlIiwibmV3U2NvcmUiLCJwcmV2aW91c1Njb3JlIiwiaW5jcmVhc2UiLCJnZXRMZXZlbEluZm8iLCJyZXF1aXJlZExpbmVzIiwic2NvcmVNdWx0aXBsaWVyIiwibmV4dExldmVsQXQiLCJ1cGRhdGVzIiwiYXNzaWduIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJnYW1lSW5zdGFuY2UiLCJ1cGRhdGVLZXlTdGF0ZSIsInByZXNzZWQiLCJpZCIsInVwZGF0ZURyb3BJbnRlcnZhbCIsImludGVydmFsIiwic2V0U29mdERyb3AiLCJ2YWxpZGF0ZVN0YXRlIiwicmVxdWlyZWRGaWVsZHMiLCJfcmVxdWlyZWRGaWVsZHMiLCJmaWVsZCIsImFjdGlvbnMiLCJldmVudCIsInJlcGVhdCIsImRyb3BDb3VudCIsIm1heERyb3BzIiwiY3VycmVudFkiLCJrZXlEb3duSGFuZGxlciIsImtleVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZWZhdWx0Iiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwidGV0cmlzIl0sInNvdXJjZVJvb3QiOiIifQ==