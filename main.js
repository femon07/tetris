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
      if (!this.piece) {
        console.warn('No piece to rotate');
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
/* harmony export */   handleKeyDown: () => (/* binding */ handleKeyDown),
/* harmony export */   handleKeyUp: () => (/* binding */ handleKeyUp),
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
    console.warn('Renderer not initialized');
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
    updateGameState();

    if (gameStateManager.get('isGameOver')) {
      alert('Game Over!');
      gameStateManager.stopGameLoop();
    }
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
});

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
    gameUI.setupEventListeners();

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

  gameStateManager.set('ctx', ctx);
  gameStateManager.set('canvas', canvas);
  var state = gameStateManager.getState();
  canvas.width = state.COLS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;
  canvas.height = state.ROWS * _constants_game_js__WEBPACK_IMPORTED_MODULE_1__.GAME_CONSTANTS.BLOCK_SIZE;

  return canvas;
}

// --- エクスポートとブラウザ実行 ---
var handleKeyDown = gameUI.onKeyDown.bind(gameUI);
var handleKeyUp = gameUI.onKeyUp.bind(gameUI);
 // draw関数をエクスポート

function setTetrisGame(newGame) {
  tetrisGame = newGame;
}

var exports = { init: init, initGame: initGame, playerMove: playerMove, playerRotate: playerRotate, playerDrop: playerDrop, gameUI: gameUI, gameState: gameState, gameStateManager: gameStateManager, renderer: renderer, resetGame: resetGame, update: update, handleKeyDown: handleKeyDown, handleKeyUp: handleKeyUp, setupEventListeners: setupEventListeners, draw: draw, tetrisGame: tetrisGame };
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
              console.error('Error drawing block at', x, y, ':', error);
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
        console.error('Error drawing next piece:', error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWLENBQ0Y7OztFQUNEQyxNQUFNLEVB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Q0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUViLENBQUM7OztBQUdNLElBQU1DLElBQUk7RUFDZixTQUFBQSxLQUFBLEVBQXFELEtBQXpDbEQsSUFBSSxHQUFB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QUFLLENBQUMsc0NBQXNDLEVBQUVBLEtBQUssQ0FBQztNQUM5RDtJQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzaUVDdkpIO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTWtMLGVBQWUsR0FBRztBQUM3QjtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDM0M7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3pDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVDLENBQ0Y7Ozs7QUFFTSxJQUFNQyxXQUFXLEdBQUc7QUFDekI7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQzs7QUFDRDtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzFDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDMUM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUMxQyxDQUNGOzs7O0FBRU0sSUFBTXZLLGNBQWM7RUFDekIsU0FBQUEsZUFBQSxFQUFjLENBQUFuQyxpRkFBQSxPQUFBbUMsY0FBQTtJQUNaLElBQUksQ0FBQ3dLLFFBQVEsR0FBRztNQUNkLEdBQUcsRUFBRUQsV0FBVztNQUNoQixTQUFTLEVBQUVEO0lBQ2IsQ0FBQztFQUNIOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsS0FKRSxPQUFBdk0sOEVBQUEsQ0FBQWlDLGNBQUEsS0FBQWhDLEdBQUEsaUJBQUFDLEtBQUE7SUFLQSxTQUFBd00sV0FBV0EsQ0FBQ0MsU0FBUyxFQUFFO01BQ3JCLE9BQU8sSUFBSSxDQUFDRixRQUFRLENBQUNFLFNBQVMsQ0FBQyxJQUFJLElBQUksQ0FBQ0YsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM3RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQXhNLEdBQUEsMkJBQUFDLEtBQUE7SUFLQSxTQUFBME0scUJBQXFCQSxDQUFDNUcsYUFBYSxFQUFFO01BQ25DLE9BQU8sT0FBT0EsYUFBYSxLQUFLLFFBQVEsSUFBSUEsYUFBYSxJQUFJLENBQUMsSUFBSUEsYUFBYSxJQUFJLENBQUM7SUFDdEY7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FORSxNQUFBL0YsR0FBQSxvQkFBQUMsS0FBQTtJQU9BLFNBQUEyTSxjQUFjQSxDQUFDRixTQUFTLEVBQUVHLHFCQUFxQixFQUFFQyxTQUFTLEVBQUU7TUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQ0gscUJBQXFCLENBQUNFLHFCQUFxQixDQUFDLEVBQUU7UUFDdEQxTCxPQUFPLENBQUNDLEtBQUssQ0FBQyxVQUFVLEVBQUV5TCxxQkFBcUIsQ0FBQztRQUNoRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ25COztNQUVBLElBQU1MLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDO01BQzVDLElBQU1LLEtBQUssR0FBR1AsUUFBUSxDQUFDSyxxQkFBcUIsR0FBRyxDQUFDLENBQUM7O01BRWpELElBQUksQ0FBQ0UsS0FBSyxJQUFJLENBQUMzTSxLQUFLLENBQUNjLE9BQU8sQ0FBQzZMLEtBQUssQ0FBQyxFQUFFO1FBQ25DNUwsT0FBTyxDQUFDQyxLQUFLLENBQUMscUJBQXFCLEVBQUUyTCxLQUFLLEVBQUUscUJBQXFCLEVBQUVGLHFCQUFxQixDQUFDO1FBQ3pGLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbkI7O01BRUE7TUFDQSxJQUFNRyxPQUFPLEdBQUdGLFNBQVMsS0FBSyxDQUFDLEdBQUFqTCxvRkFBQTtRQUN2QmtMLEtBQUssRUFBRTtNQUFBLEVBQ1hBLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFVBQUFDLElBQUksRUFBSTtRQUNoQixJQUFJLENBQUM5TSxLQUFLLENBQUNjLE9BQU8sQ0FBQ2dNLElBQUksQ0FBQyxJQUFJQSxJQUFJLENBQUN4TixNQUFNLEtBQUssQ0FBQyxFQUFFO1VBQzdDeUIsT0FBTyxDQUFDQyxLQUFLLENBQUMsMkJBQTJCLEVBQUU4TCxJQUFJLENBQUM7VUFDaEQsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZjtRQUNBLE9BQU8sQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdCLENBQUMsQ0FBQzs7TUFFTixPQUFPRixPQUFPO0lBQ2hCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkUsTUFBQWhOLEdBQUEscUJBQUFDLEtBQUE7SUFPQSxTQUFBMkYsZUFBZUEsQ0FBQzlFLEtBQUssRUFBRWdNLFNBQVMsRUFBRUssZ0JBQWdCLEVBQUU7TUFDbEQsSUFBSSxDQUFDck0sS0FBSyxJQUFJLENBQUNBLEtBQUssQ0FBQ0MsTUFBTSxJQUFJLENBQUNYLEtBQUssQ0FBQ2MsT0FBTyxDQUFDSixLQUFLLENBQUNDLE1BQU0sQ0FBQyxFQUFFO1FBQzNESSxPQUFPLENBQUNLLElBQUksQ0FBQyw0QkFBNEIsQ0FBQztRQUMxQyxPQUFPLEVBQUVxRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0I7O01BRUEsSUFBSSxPQUFPc0gsZ0JBQWdCLEtBQUssVUFBVSxFQUFFO1FBQzFDaE0sT0FBTyxDQUFDQyxLQUFLLENBQUMsc0NBQXNDLENBQUM7UUFDckQsT0FBTyxFQUFFeUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO01BQzNCOztNQUVBLElBQUk7UUFDRjtRQUNBLElBQU11SCxXQUFXLEdBQUF0SCxhQUFBLEtBQVFoRixLQUFLLENBQUNFLEdBQUcsQ0FBRTtRQUNwQyxJQUFNcU0sY0FBYyxHQUFHdk0sS0FBSyxDQUFDQyxNQUFNLENBQUNrTSxHQUFHLENBQUMsVUFBQTFMLEdBQUc7WUFDekNuQixLQUFLLENBQUNjLE9BQU8sQ0FBQ0ssR0FBRyxDQUFDLEdBQUFNLG9GQUFBLENBQU9OLEdBQUcsSUFBSSxFQUFFO1FBQ3BDLENBQUM7UUFDRCxJQUFNc0wscUJBQXFCLEdBQUcvTCxLQUFLLENBQUNpRixhQUFhOztRQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDNEcscUJBQXFCLENBQUNFLHFCQUFxQixDQUFDLEVBQUU7VUFDdEQsT0FBTyxFQUFFaEgsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNCOztRQUVBO1FBQ0EvRSxLQUFLLENBQUNtRixNQUFNLENBQUM2RyxTQUFTLENBQUM7O1FBRXZCO1FBQ0EsSUFBTVEsV0FBVyxHQUFHLElBQUksQ0FBQ1YsY0FBYyxDQUFDOUwsS0FBSyxDQUFDZ0QsSUFBSSxFQUFFK0kscUJBQXFCLEVBQUVDLFNBQVMsQ0FBQyxDQUFDLElBQUFTLFNBQUEsR0FBQUMsMEJBQUE7O1lBRXJERixXQUFXLEVBQUFHLEtBQUEsTUFBNUMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBSSxDQUFBLElBQUFDLElBQUEsR0FBOEMsS0FBQUMsV0FBQSxHQUFBQyxnRkFBQSxDQUFBTCxLQUFBLENBQUF4TixLQUFBLEtBQWxDOE4sT0FBTyxHQUFBRixXQUFBLElBQUVHLE9BQU8sR0FBQUgsV0FBQTtZQUMxQi9NLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUixDQUFDLElBQUl1TixPQUFPO1lBQ3RCak4sS0FBSyxDQUFDRSxHQUFHLENBQUNQLENBQUMsSUFBSXVOLE9BQU87O1lBRXRCLElBQUksQ0FBQ2IsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO2NBQ3ZCO2NBQ0EsT0FBTyxFQUFFdEgsT0FBTyxFQUFFLElBQUksRUFBRW9JLGFBQWEsRUFBQW5JLGFBQUEsS0FBT2hGLEtBQUssQ0FBQ0UsR0FBRyxDQUFFLENBQUMsQ0FBQztZQUMzRDs7WUFFQTtZQUNBRixLQUFLLENBQUNFLEdBQUcsQ0FBQ1IsQ0FBQyxJQUFJdU4sT0FBTztZQUN0QmpOLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUCxDQUFDLElBQUl1TixPQUFPO1VBQ3hCOztVQUVBO1FBQUEsU0FBQUUsR0FBQSxHQUFBWCxTQUFBLENBQUFZLENBQUEsQ0FBQUQsR0FBQSxhQUFBWCxTQUFBLENBQUFhLENBQUEsSUFDQXROLEtBQUssQ0FBQ0MsTUFBTSxHQUFHc00sY0FBYztRQUM3QnZNLEtBQUssQ0FBQ2lGLGFBQWEsR0FBRzhHLHFCQUFxQjtRQUMzQy9MLEtBQUssQ0FBQ0UsR0FBRyxHQUFBOEUsYUFBQSxLQUFRc0gsV0FBVyxDQUFFOztRQUU5QixPQUFPLEVBQUV2SCxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0IsQ0FBQyxDQUFDLE9BQU96RSxLQUFLLEVBQUU7UUFDZEQsT0FBTyxDQUFDQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUVBLEtBQUssQ0FBQztRQUN0RCxPQUFPLEVBQUV5RSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7TUFDM0I7SUFDRjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUE3RixHQUFBLHFCQUFBQyxLQUFBO0lBSUEsU0FBQW9PLGVBQWVBLENBQUEsRUFBRztNQUNoQixJQUFNQyxjQUFjLEdBQUcsQ0FBQztNQUN4QixJQUFNQyxhQUFhLEdBQUcsQ0FBQzs7TUFFdkIsU0FBQUMsRUFBQSxNQUFBQyxlQUFBLEdBQW9DMUssTUFBTSxDQUFDMkssT0FBTyxDQUFDLElBQUksQ0FBQ2xDLFFBQVEsQ0FBQyxFQUFBZ0MsRUFBQSxHQUFBQyxlQUFBLENBQUEvTyxNQUFBLEVBQUE4TyxFQUFBLElBQUUsQ0FBOUQsSUFBQUcsa0JBQUEsR0FBQWIsZ0ZBQUEsQ0FBQVcsZUFBQSxDQUFBRCxFQUFBLE1BQU85QixTQUFTLEdBQUFpQyxrQkFBQSxJQUFFbkMsUUFBUSxHQUFBbUMsa0JBQUE7UUFDN0IsSUFBSSxDQUFDdk8sS0FBSyxDQUFDYyxPQUFPLENBQUNzTCxRQUFRLENBQUMsSUFBSUEsUUFBUSxDQUFDOU0sTUFBTSxLQUFLNE8sY0FBYyxFQUFFO1VBQ2xFbk4sT0FBTyxDQUFDQyxLQUFLLG9DQUFBSyxNQUFBLENBQW9DaUwsU0FBUyxpQkFBQWpMLE1BQUEsQ0FBYzZNLGNBQWMsWUFBUyxDQUFDO1VBQ2hHLE9BQU8sS0FBSztRQUNkOztRQUVBLEtBQUssSUFBSXRILEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR3dGLFFBQVEsQ0FBQzlNLE1BQU0sRUFBRXNILEtBQUssRUFBRSxFQUFFO1VBQ3BELElBQU0rRixLQUFLLEdBQUdQLFFBQVEsQ0FBQ3hGLEtBQUssQ0FBQztVQUM3QixJQUFJLENBQUM1RyxLQUFLLENBQUNjLE9BQU8sQ0FBQzZMLEtBQUssQ0FBQyxJQUFJQSxLQUFLLENBQUNyTixNQUFNLEtBQUs2TyxhQUFhLEVBQUU7WUFDM0RwTixPQUFPLENBQUNDLEtBQUssc0JBQUFLLE1BQUEsQ0FBc0JpTCxTQUFTLGFBQUFqTCxNQUFBLENBQVV1RixLQUFLLGlCQUFBdkYsTUFBQSxDQUFjOE0sYUFBYSxXQUFRLENBQUM7WUFDL0YsT0FBTyxLQUFLO1VBQ2Q7O1VBRUEsS0FBSyxJQUFJSyxTQUFTLEdBQUcsQ0FBQyxFQUFFQSxTQUFTLEdBQUc3QixLQUFLLENBQUNyTixNQUFNLEVBQUVrUCxTQUFTLEVBQUUsRUFBRTtZQUM3RCxJQUFNMUIsSUFBSSxHQUFHSCxLQUFLLENBQUM2QixTQUFTLENBQUM7WUFDN0IsSUFBSSxDQUFDeE8sS0FBSyxDQUFDYyxPQUFPLENBQUNnTSxJQUFJLENBQUMsSUFBSUEsSUFBSSxDQUFDeE4sTUFBTSxLQUFLLENBQUM7WUFDekMsT0FBT3dOLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksT0FBT0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtjQUM5RC9MLE9BQU8sQ0FBQ0MsS0FBSyw0QkFBQUssTUFBQSxDQUE0QmlMLFNBQVMsYUFBQWpMLE1BQUEsQ0FBVXVGLEtBQUssWUFBQXZGLE1BQUEsQ0FBU21OLFNBQVMsQ0FBRSxDQUFDO2NBQ3RGLE9BQU8sS0FBSztZQUNkO1VBQ0Y7UUFDRjtNQUNGOztNQUVBLE9BQU8sSUFBSTtJQUNiOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQTVPLEdBQUEsbUJBQUFDLEtBQUE7SUFJQSxTQUFBNE8sYUFBYUEsQ0FBQSxFQUFHO01BQ2QsT0FBTztRQUNMQyxNQUFNLEVBQUUsNkJBQTZCO1FBQ3JDQyxlQUFlLEVBQUVoTCxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUN3SSxRQUFRLENBQUM7UUFDM0N3QyxPQUFPLEVBQUUsSUFBSSxDQUFDWCxlQUFlLENBQUM7TUFDaEMsQ0FBQztJQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5JLElBQU1wTSxlQUFlO0VBQzFCLFNBQUFBLGdCQUFBLEVBQWMsQ0FBQXBDLGlGQUFBLE9BQUFvQyxlQUFBO0lBQ1o7SUFDQSxJQUFJLENBQUNnTixVQUFVLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzs7SUFFM0M7SUFDQSxJQUFJLENBQUNsTSxhQUFhLEdBQUcsRUFBRTs7SUFFdkI7SUFDQSxJQUFJLENBQUNtTSxhQUFhLEdBQUcsQ0FBQzs7SUFFdEI7SUFDQSxJQUFJLENBQUNDLGFBQWEsR0FBRyxDQUFDO0VBQ3hCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxFLE9BQUFwUCw4RUFBQSxDQUFBa0MsZUFBQSxLQUFBakMsR0FBQSx3QkFBQUMsS0FBQTtJQU1BLFNBQUFzRixrQkFBa0JBLENBQUNILFlBQVksRUFBRTNCLEtBQUssRUFBRTtNQUN0QyxJQUFJLE9BQU8yQixZQUFZLEtBQUssUUFBUSxJQUFJQSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3hEakUsT0FBTyxDQUFDSyxJQUFJLENBQUMsNkJBQTZCLEVBQUU0RCxZQUFZLENBQUM7UUFDekQsT0FBTyxDQUFDO01BQ1Y7O01BRUEsSUFBSSxPQUFPM0IsS0FBSyxLQUFLLFFBQVEsSUFBSUEsS0FBSyxHQUFHLENBQUMsRUFBRTtRQUMxQ3RDLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDLHNCQUFzQixFQUFFaUMsS0FBSyxDQUFDO1FBQzNDLE9BQU8sQ0FBQztNQUNWOztNQUVBLElBQU1JLEtBQUssR0FBR04sSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksQ0FBQzZMLEdBQUcsQ0FBQyxDQUFDLEVBQUU3TCxJQUFJLENBQUNVLEtBQUssQ0FBQ21CLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDNkosVUFBVSxDQUFDdlAsTUFBTSxHQUFHLENBQUMsQ0FBQztNQUN6RixPQUFPLElBQUksQ0FBQ3VQLFVBQVUsQ0FBQ3BMLEtBQUssQ0FBQyxHQUFHSixLQUFLO0lBQ3ZDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBekQsR0FBQSw0QkFBQUMsS0FBQTtJQUtBLFNBQUFvUCxzQkFBc0JBLENBQUNDLFlBQVksRUFBRTtNQUNuQyxJQUFJLE9BQU9BLFlBQVksS0FBSyxRQUFRLElBQUlBLFlBQVksR0FBRyxDQUFDLEVBQUU7UUFDeEQsT0FBTyxDQUFDO01BQ1Y7O01BRUEsT0FBT0EsWUFBWSxHQUFHLElBQUksQ0FBQ0osYUFBYTtJQUMxQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQWxQLEdBQUEsNEJBQUFDLEtBQUE7SUFLQSxTQUFBc1Asc0JBQXNCQSxDQUFDRCxZQUFZLEVBQUU7TUFDbkMsSUFBSSxPQUFPQSxZQUFZLEtBQUssUUFBUSxJQUFJQSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3hELE9BQU8sQ0FBQztNQUNWOztNQUVBLE9BQU9BLFlBQVksR0FBRyxJQUFJLENBQUNILGFBQWE7SUFDMUM7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUFuUCxHQUFBLG9CQUFBQyxLQUFBO0lBS0EsU0FBQXdFLGNBQWNBLENBQUMrSyxVQUFVLEVBQUU7TUFDekIsSUFBSSxPQUFPQSxVQUFVLEtBQUssUUFBUSxJQUFJQSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1FBQ3BELE9BQU8sQ0FBQztNQUNWOztNQUVBLE9BQU9qTSxJQUFJLENBQUNVLEtBQUssQ0FBQ3VMLFVBQVUsR0FBRyxJQUFJLENBQUN6TSxhQUFhLENBQUMsR0FBRyxDQUFDO0lBQ3hEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxFLE1BQUEvQyxHQUFBLG1CQUFBQyxLQUFBO0lBTUEsU0FBQXVFLGFBQWFBLENBQUNpTCxZQUFZLEVBQUVDLFlBQVksRUFBRTtNQUN4QyxJQUFNQyxRQUFRLEdBQUcsSUFBSSxDQUFDbEwsY0FBYyxDQUFDZ0wsWUFBWSxDQUFDO01BQ2xELE9BQU9FLFFBQVEsR0FBR0QsWUFBWTtJQUNoQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQTFQLEdBQUEsNEJBQUFDLEtBQUE7SUFLQSxTQUFBMlAsc0JBQXNCQSxDQUFDSCxZQUFZLEVBQUU7TUFDbkMsSUFBSSxPQUFPQSxZQUFZLEtBQUssUUFBUSxJQUFJQSxZQUFZLEdBQUcsQ0FBQyxFQUFFO1FBQ3hELE9BQU8sSUFBSSxDQUFDMU0sYUFBYTtNQUMzQjs7TUFFQSxJQUFNOE0saUJBQWlCLEdBQUdKLFlBQVksR0FBRyxJQUFJLENBQUMxTSxhQUFhO01BQzNELE9BQU8sSUFBSSxDQUFDQSxhQUFhLEdBQUc4TSxpQkFBaUI7SUFDL0M7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BUkUsTUFBQTdQLEdBQUEseUJBQUFDLEtBQUE7SUFTQSxTQUFBNlAsbUJBQW1CQSxDQUFDQyxTQUFTLEVBQUU7TUFDN0IsSUFBQUMscUJBQUE7Ozs7O1FBS0lELFNBQVMsQ0FKWDNLLFlBQVksQ0FBWkEsWUFBWSxHQUFBNEsscUJBQUEsY0FBRyxDQUFDLEdBQUFBLHFCQUFBLENBQUFDLGdCQUFBLEdBSWRGLFNBQVMsQ0FIWHRNLEtBQUssQ0FBTEEsS0FBSyxHQUFBd00sZ0JBQUEsY0FBRyxDQUFDLEdBQUFBLGdCQUFBLENBQUFDLHFCQUFBLEdBR1BILFNBQVMsQ0FGWEksZ0JBQWdCLENBQWhCQSxnQkFBZ0IsR0FBQUQscUJBQUEsY0FBRyxDQUFDLEdBQUFBLHFCQUFBLENBQUFFLHFCQUFBLEdBRWxCTCxTQUFTLENBRFhNLGdCQUFnQixDQUFoQkEsZ0JBQWdCLEdBQUFELHFCQUFBLGNBQUcsQ0FBQyxHQUFBQSxxQkFBQTs7TUFHdEIsSUFBTUUsU0FBUyxHQUFHLElBQUksQ0FBQy9LLGtCQUFrQixDQUFDSCxZQUFZLEVBQUUzQixLQUFLLENBQUM7TUFDOUQsSUFBTThNLGFBQWEsR0FBRyxJQUFJLENBQUNsQixzQkFBc0IsQ0FBQ2MsZ0JBQWdCLENBQUM7TUFDbkUsSUFBTUssYUFBYSxHQUFHLElBQUksQ0FBQ2pCLHNCQUFzQixDQUFDYyxnQkFBZ0IsQ0FBQztNQUNuRSxJQUFNSSxVQUFVLEdBQUdILFNBQVMsR0FBR0MsYUFBYSxHQUFHQyxhQUFhOztNQUU1RCxPQUFPO1FBQ0xDLFVBQVUsRUFBVkEsVUFBVTtRQUNWSCxTQUFTLEVBQVRBLFNBQVM7UUFDVEMsYUFBYSxFQUFiQSxhQUFhO1FBQ2JDLGFBQWEsRUFBYkE7TUFDRixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBFLE1BQUF4USxHQUFBLGtCQUFBQyxLQUFBO0lBUUEsU0FBQXlRLFlBQVlBLENBQUNDLE1BQU0sRUFBRTtNQUNuQixJQUFJQSxNQUFNLENBQUMxQixVQUFVLElBQUk3TyxLQUFLLENBQUNjLE9BQU8sQ0FBQ3lQLE1BQU0sQ0FBQzFCLFVBQVUsQ0FBQyxFQUFFO1FBQ3pELElBQUksQ0FBQ0EsVUFBVSxHQUFBcE4sb0ZBQUEsQ0FBTzhPLE1BQU0sQ0FBQzFCLFVBQVUsQ0FBQztNQUMxQzs7TUFFQSxJQUFJLE9BQU8wQixNQUFNLENBQUM1TixhQUFhLEtBQUssUUFBUSxJQUFJNE4sTUFBTSxDQUFDNU4sYUFBYSxHQUFHLENBQUMsRUFBRTtRQUN4RSxJQUFJLENBQUNBLGFBQWEsR0FBRzROLE1BQU0sQ0FBQzVOLGFBQWE7TUFDM0M7O01BRUEsSUFBSSxPQUFPNE4sTUFBTSxDQUFDekIsYUFBYSxLQUFLLFFBQVEsSUFBSXlCLE1BQU0sQ0FBQ3pCLGFBQWEsSUFBSSxDQUFDLEVBQUU7UUFDekUsSUFBSSxDQUFDQSxhQUFhLEdBQUd5QixNQUFNLENBQUN6QixhQUFhO01BQzNDOztNQUVBLElBQUksT0FBT3lCLE1BQU0sQ0FBQ3hCLGFBQWEsS0FBSyxRQUFRLElBQUl3QixNQUFNLENBQUN4QixhQUFhLElBQUksQ0FBQyxFQUFFO1FBQ3pFLElBQUksQ0FBQ0EsYUFBYSxHQUFHd0IsTUFBTSxDQUFDeEIsYUFBYTtNQUMzQztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQW5QLEdBQUEsZUFBQUMsS0FBQTtJQUlBLFNBQUEyUSxTQUFTQSxDQUFBLEVBQUc7TUFDVixPQUFPO1FBQ0wzQixVQUFVLEVBQUFwTixvRkFBQSxDQUFNLElBQUksQ0FBQ29OLFVBQVUsQ0FBQztRQUNoQ2xNLGFBQWEsRUFBRSxJQUFJLENBQUNBLGFBQWE7UUFDakNtTSxhQUFhLEVBQUUsSUFBSSxDQUFDQSxhQUFhO1FBQ2pDQyxhQUFhLEVBQUUsSUFBSSxDQUFDQTtNQUN0QixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEUsTUFBQW5QLEdBQUEsdUJBQUFDLEtBQUE7SUFNQSxTQUFBNFEsaUJBQWlCQSxDQUFDQyxZQUFZLEVBQUVDLFFBQVEsRUFBRTtNQUN4QyxPQUFPO1FBQ0xDLGFBQWEsRUFBRUYsWUFBWTtRQUMzQkMsUUFBUSxFQUFFRCxZQUFZLEdBQUdDLFFBQVE7UUFDakNFLFFBQVEsRUFBRUY7TUFDWixDQUFDO0lBQ0g7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUEvUSxHQUFBLGtCQUFBQyxLQUFBO0lBS0EsU0FBQWlSLFlBQVlBLENBQUN6TixLQUFLLEVBQUU7TUFDbEIsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxJQUFJQSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1FBQzFDQSxLQUFLLEdBQUcsQ0FBQztNQUNYOztNQUVBLE9BQU87UUFDTEEsS0FBSyxFQUFMQSxLQUFLO1FBQ0wwTixhQUFhLEVBQUUxTixLQUFLLEdBQUcsSUFBSSxDQUFDVixhQUFhO1FBQ3pDcU8sZUFBZSxFQUFFM04sS0FBSztRQUN0QjROLFdBQVcsRUFBRSxDQUFDNU4sS0FBSyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUNWO01BQ2xDLENBQUM7SUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztxdUJDdk1JLElBQU15RCxnQkFBZ0I7RUFDM0IsU0FBQUEsaUJBQVk1RyxJQUFJLEVBQUVKLElBQUksRUFBRSxDQUFBSyxpRkFBQSxPQUFBMkcsZ0JBQUE7SUFDdEIsSUFBSSxDQUFDUSxLQUFLLEdBQUc7TUFDWDBELEdBQUcsRUFBRSxJQUFJO01BQ1RKLE1BQU0sRUFBRSxJQUFJO01BQ1oxSCxLQUFLLEVBQUUsRUFBRTtNQUNUL0QsSUFBSSxFQUFFZSxJQUFJO01BQ1ZoQixJQUFJLEVBQUVZLElBQUk7TUFDVnNCLEtBQUssRUFBRSxJQUFJO01BQ1grQixTQUFTLEVBQUUsSUFBSTtNQUNmdUIsS0FBSyxFQUFFLENBQUM7TUFDUkQsS0FBSyxFQUFFLENBQUM7TUFDUlYsS0FBSyxFQUFFLENBQUM7TUFDUmdHLFdBQVcsRUFBRSxDQUFDO01BQ2R6RyxZQUFZLEVBQUUsSUFBSTtNQUNsQnVHLFFBQVEsRUFBRSxDQUFDO01BQ1hILFVBQVUsRUFBRSxJQUFJO01BQ2hCL0UsVUFBVSxFQUFFLEtBQUs7TUFDakJDLE1BQU0sRUFBRSxLQUFLO01BQ2JOLElBQUksRUFBRSxDQUFDLENBQUM7TUFDUmQsVUFBVSxFQUFFO0lBQ2QsQ0FBQztFQUNIOztFQUVBO0FBQ0Y7QUFDQTtBQUNBLEtBSEUsT0FBQW5ELDhFQUFBLENBQUF5RyxnQkFBQSxLQUFBeEcsR0FBQSxjQUFBQyxLQUFBO0lBSUEsU0FBQXVILFFBQVFBLENBQUEsRUFBRztNQUNULE9BQUExQixhQUFBLEtBQVksSUFBSSxDQUFDa0IsS0FBSztJQUN4Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBLE9BSkUsTUFBQWhILEdBQUEsU0FBQUMsS0FBQTtJQUtBLFNBQUFnSCxHQUFHQSxDQUFDakgsR0FBRyxFQUFFO01BQ1AsT0FBTyxJQUFJLENBQUNnSCxLQUFLLENBQUNoSCxHQUFHLENBQUM7SUFDeEI7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUpFLE1BQUFBLEdBQUEsU0FBQUMsS0FBQTtJQUtBLFNBQUFxSCxHQUFHQSxDQUFDdEgsR0FBRyxFQUFFQyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUMrRyxLQUFLLENBQUNoSCxHQUFHLENBQUMsR0FBR0MsS0FBSztJQUN6Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUFELEdBQUEsWUFBQUMsS0FBQTtJQUlBLFNBQUFpSixNQUFNQSxDQUFDb0ksT0FBTyxFQUFFO01BQ2R2TixNQUFNLENBQUN3TixNQUFNLENBQUMsSUFBSSxDQUFDdkssS0FBSyxFQUFFc0ssT0FBTyxDQUFDO0lBQ3BDOztJQUVBO0FBQ0Y7QUFDQSxPQUZFLE1BQUF0UixHQUFBLGVBQUFDLEtBQUE7SUFHQSxTQUFBbUgsU0FBU0EsQ0FBQSxFQUFHLEtBQUFsSCxLQUFBO01BQ1YsSUFBSSxDQUFDOEcsS0FBSyxDQUFDcEUsS0FBSyxHQUFHeEMsS0FBSyxDQUFDLElBQUksQ0FBQzRHLEtBQUssQ0FBQ25JLElBQUksQ0FBQyxDQUFDeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDMk0sR0FBRyxDQUFDLG9CQUFNN00sS0FBSyxDQUFDRixLQUFJLENBQUM4RyxLQUFLLENBQUNwSSxJQUFJLENBQUMsQ0FBQzBCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBQztJQUNoRzs7SUFFQTtBQUNGO0FBQ0EsT0FGRSxNQUFBTixHQUFBLFdBQUFDLEtBQUE7SUFHQSxTQUFBb0QsS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDMkQsS0FBSyxDQUFDNUMsS0FBSyxHQUFHLENBQUM7TUFDcEIsSUFBSSxDQUFDNEMsS0FBSyxDQUFDN0MsS0FBSyxHQUFHLENBQUM7TUFDcEIsSUFBSSxDQUFDNkMsS0FBSyxDQUFDdkQsS0FBSyxHQUFHLENBQUM7TUFDcEIsSUFBSSxDQUFDdUQsS0FBSyxDQUFDM0MsVUFBVSxHQUFHLEtBQUs7TUFDN0IsSUFBSSxDQUFDMkMsS0FBSyxDQUFDMUMsTUFBTSxHQUFHLEtBQUs7TUFDekIsSUFBSSxDQUFDMEMsS0FBSyxDQUFDeUMsV0FBVyxHQUFHLENBQUM7TUFDMUIsSUFBSSxDQUFDekMsS0FBSyxDQUFDaEUsWUFBWSxHQUFHLElBQUk7TUFDOUIsSUFBSSxDQUFDZ0UsS0FBSyxDQUFDdUMsUUFBUSxHQUFHLENBQUM7TUFDdkIsSUFBSSxDQUFDdkMsS0FBSyxDQUFDOUQsVUFBVSxHQUFHLEtBQUs7O01BRTdCLElBQUksSUFBSSxDQUFDOEQsS0FBSyxDQUFDb0MsVUFBVSxFQUFFO1FBQ3pCb0ksb0JBQW9CLENBQUMsSUFBSSxDQUFDeEssS0FBSyxDQUFDb0MsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ29DLFVBQVUsR0FBRyxJQUFJO01BQzlCOztNQUVBLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQXBILEdBQUEsa0JBQUFDLEtBQUE7SUFJQSxTQUFBeUksWUFBWUEsQ0FBQytJLFlBQVksRUFBRTtNQUN6QixJQUFJLENBQUNBLFlBQVksRUFBRTs7TUFFbkIsSUFBSSxDQUFDekssS0FBSyxDQUFDNUMsS0FBSyxHQUFHcU4sWUFBWSxDQUFDck4sS0FBSyxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDNEMsS0FBSyxDQUFDN0MsS0FBSyxHQUFHc04sWUFBWSxDQUFDdE4sS0FBSyxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDNkMsS0FBSyxDQUFDdkQsS0FBSyxHQUFHZ08sWUFBWSxDQUFDaE8sS0FBSyxJQUFJLENBQUM7TUFDMUMsSUFBSSxDQUFDdUQsS0FBSyxDQUFDM0MsVUFBVSxHQUFHb04sWUFBWSxDQUFDcE4sVUFBVSxJQUFJLEtBQUs7TUFDeEQsSUFBSSxDQUFDMkMsS0FBSyxDQUFDbEcsS0FBSyxHQUFHMlEsWUFBWSxDQUFDM1EsS0FBSyxJQUFJLElBQUk7TUFDN0MsSUFBSSxDQUFDa0csS0FBSyxDQUFDbkUsU0FBUyxHQUFHNE8sWUFBWSxDQUFDNU8sU0FBUyxJQUFJLElBQUk7O01BRXJELElBQUk0TyxZQUFZLENBQUM3TyxLQUFLLElBQUk2TyxZQUFZLENBQUM3TyxLQUFLLENBQUN6QyxJQUFJLEVBQUU7UUFDakQsSUFBSSxDQUFDNkcsS0FBSyxDQUFDcEUsS0FBSyxHQUFHNk8sWUFBWSxDQUFDN08sS0FBSyxDQUFDekMsSUFBSTtNQUM1QztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FKRSxNQUFBSCxHQUFBLG9CQUFBQyxLQUFBO0lBS0EsU0FBQXlSLGNBQWNBLENBQUMxUixHQUFHLEVBQUUyUixPQUFPLEVBQUU7TUFDM0IsSUFBSSxDQUFDM0ssS0FBSyxDQUFDaEQsSUFBSSxDQUFDaEUsR0FBRyxDQUFDLEdBQUcyUixPQUFPO0lBQ2hDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQTNSLEdBQUEsbUJBQUFDLEtBQUE7SUFJQSxTQUFBcUosYUFBYUEsQ0FBQ3NJLEVBQUUsRUFBRTtNQUNoQixJQUFJLENBQUM1SyxLQUFLLENBQUNvQyxVQUFVLEdBQUd3SSxFQUFFO0lBQzVCOztJQUVBO0FBQ0Y7QUFDQSxPQUZFLE1BQUE1UixHQUFBLGtCQUFBQyxLQUFBO0lBR0EsU0FBQThJLFlBQVlBLENBQUEsRUFBRztNQUNiLElBQUksSUFBSSxDQUFDL0IsS0FBSyxDQUFDb0MsVUFBVSxFQUFFO1FBQ3pCb0ksb0JBQW9CLENBQUMsSUFBSSxDQUFDeEssS0FBSyxDQUFDb0MsVUFBVSxDQUFDO1FBQzNDLElBQUksQ0FBQ3BDLEtBQUssQ0FBQ29DLFVBQVUsR0FBRyxJQUFJO01BQzlCO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBcEosR0FBQSxlQUFBQyxLQUFBO0lBSUEsU0FBQTJJLFNBQVNBLENBQUEsRUFBRztNQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUM1QixLQUFLLENBQUMzQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMyQyxLQUFLLENBQUMxQyxNQUFNO0lBQ3JEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBLE9BSEUsTUFBQXRFLEdBQUEsZUFBQUMsS0FBQTtJQUlBLFNBQUEwSixTQUFTQSxDQUFDckYsTUFBTSxFQUFFO01BQ2hCLElBQUksQ0FBQzBDLEtBQUssQ0FBQzFDLE1BQU0sR0FBR0EsTUFBTTtJQUM1Qjs7SUFFQTtBQUNGO0FBQ0E7QUFDQSxPQUhFLE1BQUF0RSxHQUFBLHdCQUFBQyxLQUFBO0lBSUEsU0FBQTRSLGtCQUFrQkEsQ0FBQ0MsUUFBUSxFQUFFO01BQzNCLElBQUksQ0FBQzlLLEtBQUssQ0FBQ2hFLFlBQVksR0FBRzhPLFFBQVE7SUFDcEM7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBOVIsR0FBQSxpQkFBQUMsS0FBQTtJQUlBLFNBQUE4UixXQUFXQSxDQUFDN08sVUFBVSxFQUFFO01BQ3RCLElBQUksQ0FBQzhELEtBQUssQ0FBQzlELFVBQVUsR0FBR0EsVUFBVTtJQUNwQzs7SUFFQTtBQUNGO0FBQ0EsT0FGRSxNQUFBbEQsR0FBQSxjQUFBQyxLQUFBO0lBR0EsU0FBQW9ILFFBQVFBLENBQUEsRUFBRztNQUNUbEcsT0FBTyxDQUFDNEksR0FBRyxDQUFDLHFCQUFxQixFQUFFO1FBQ2pDM0YsS0FBSyxFQUFFLElBQUksQ0FBQzRDLEtBQUssQ0FBQzVDLEtBQUs7UUFDdkJELEtBQUssRUFBRSxJQUFJLENBQUM2QyxLQUFLLENBQUM3QyxLQUFLO1FBQ3ZCVixLQUFLLEVBQUUsSUFBSSxDQUFDdUQsS0FBSyxDQUFDdkQsS0FBSztRQUN2QlksVUFBVSxFQUFFLElBQUksQ0FBQzJDLEtBQUssQ0FBQzNDLFVBQVU7UUFDakNDLE1BQU0sRUFBRSxJQUFJLENBQUMwQyxLQUFLLENBQUMxQyxNQUFNO1FBQ3pCeEQsS0FBSyxFQUFFLElBQUksQ0FBQ2tHLEtBQUssQ0FBQ2xHLEtBQUs7UUFDdkIrQixTQUFTLEVBQUUsSUFBSSxDQUFDbUUsS0FBSyxDQUFDbkU7TUFDeEIsQ0FBQyxDQUFDO0lBQ0o7O0lBRUE7QUFDRjtBQUNBO0FBQ0EsT0FIRSxNQUFBN0MsR0FBQSxtQkFBQUMsS0FBQTtJQUlBLFNBQUErUixhQUFhQSxDQUFBLEVBQUc7TUFDZCxJQUFNQyxjQUFjLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDOztNQUVsRSxTQUFBekQsRUFBQSxNQUFBMEQsZUFBQSxHQUFvQkQsY0FBYyxFQUFBekQsRUFBQSxHQUFBMEQsZUFBQSxDQUFBeFMsTUFBQSxFQUFBOE8sRUFBQSxJQUFFLENBQS9CLElBQU0yRCxLQUFLLEdBQUFELGVBQUEsQ0FBQTFELEVBQUE7UUFDZCxJQUFJLE9BQU8sSUFBSSxDQUFDeEgsS0FBSyxDQUFDbUwsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO1VBQ3pDaFIsT0FBTyxDQUFDSyxJQUFJLHlCQUFBQyxNQUFBLENBQXlCMFEsS0FBSyxHQUFJLElBQUksQ0FBQ25MLEtBQUssQ0FBQ21MLEtBQUssQ0FBQyxDQUFDO1VBQ2hFLE9BQU8sS0FBSztRQUNkO01BQ0Y7O01BRUEsSUFBSSxDQUFDL1IsS0FBSyxDQUFDYyxPQUFPLENBQUMsSUFBSSxDQUFDOEYsS0FBSyxDQUFDcEUsS0FBSyxDQUFDLEVBQUU7UUFDcEN6QixPQUFPLENBQUNLLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUNuQyxPQUFPLEtBQUs7TUFDZDs7TUFFQSxPQUFPLElBQUk7SUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1ILE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDMUJ4RDhFLE1BQU07RUFDekIsU0FBQUEsT0FBWVUsS0FBSyxFQUFFb0wsT0FBTyxFQUFFLENBQUF2UyxpRkFBQSxPQUFBeUcsTUFBQTtJQUMxQixJQUFJLENBQUNVLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNvTCxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDbkksU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzFDLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTyxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQ3hDLENBQUMsT0FBQW5LLDhFQUFBLENBQUF1RyxNQUFBLEtBQUF0RyxHQUFBLGVBQUFDLEtBQUE7O0lBRUQsU0FBQWdLLFNBQVNBLENBQUNvSSxLQUFLLEVBQUU7TUFDZixJQUFRckwsS0FBSyxHQUFjLElBQUksQ0FBdkJBLEtBQUssQ0FBRW9MLE9BQU8sR0FBSyxJQUFJLENBQWhCQSxPQUFPO01BQ3RCLElBQUlwTCxLQUFLLENBQUMzQyxVQUFVLEVBQUU7O01BRXRCO01BQ0EsSUFBSWdPLEtBQUssQ0FBQ0MsTUFBTSxJQUFJRCxLQUFLLENBQUNyUyxHQUFHLEtBQUssV0FBVyxFQUFFO1FBQzdDO01BQ0Y7O01BRUE7TUFDQSxJQUFJZ0gsS0FBSyxDQUFDaEQsSUFBSSxDQUFDcU8sS0FBSyxDQUFDclMsR0FBRyxDQUFDLEVBQUU7UUFDekI7TUFDRjtNQUNBZ0gsS0FBSyxDQUFDaEQsSUFBSSxDQUFDcU8sS0FBSyxDQUFDclMsR0FBRyxDQUFDLEdBQUcsSUFBSTs7TUFFNUIsUUFBUXFTLEtBQUssQ0FBQ3JTLEdBQUc7UUFDZixLQUFLLFdBQVc7VUFDZG9TLE9BQU8sQ0FBQzFOLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNyQjtRQUNGLEtBQUssWUFBWTtVQUNmME4sT0FBTyxDQUFDMU4sU0FBUyxDQUFDLENBQUMsQ0FBQztVQUNwQjtRQUNGLEtBQUssV0FBVztVQUNkME4sT0FBTyxDQUFDMU8sYUFBYSxDQUFDLENBQUM7VUFDdkIwTyxPQUFPLENBQUNsTixTQUFTLENBQUMsQ0FBQztVQUNuQjtRQUNGLEtBQUssU0FBUztVQUNaa04sT0FBTyxDQUFDM00sV0FBVyxDQUFDLENBQUMsQ0FBQztVQUN0QjtRQUNGLEtBQUssR0FBRztVQUNOO1VBQ0EsSUFBSXVCLEtBQUssQ0FBQ2xHLEtBQUssSUFBSWtHLEtBQUssQ0FBQ2xHLEtBQUssQ0FBQ0UsR0FBRyxJQUFJLE9BQU9nRyxLQUFLLENBQUNsRyxLQUFLLENBQUNFLEdBQUcsQ0FBQ1AsQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMzRSxJQUFJOFIsU0FBUyxHQUFHLENBQUM7WUFDakIsSUFBTUMsUUFBUSxHQUFHalAsSUFBSSxDQUFDQyxHQUFHLENBQUN3RCxLQUFLLENBQUNuSSxJQUFJLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEQsT0FBTzBULFNBQVMsR0FBR0MsUUFBUSxJQUFJLENBQUN4TCxLQUFLLENBQUMzQyxVQUFVLElBQUkyQyxLQUFLLENBQUNsRyxLQUFLLEVBQUU7Y0FDL0QsSUFBTTJSLFFBQVEsR0FBR3pMLEtBQUssQ0FBQ2xHLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUCxDQUFDO2NBQ2xDLElBQUk7Z0JBQ0YsSUFBTW9JLE9BQU8sR0FBR3VKLE9BQU8sQ0FBQ2xOLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMyRCxPQUFPLElBQUksQ0FBQzdCLEtBQUssQ0FBQ2xHLEtBQUssSUFBSWtHLEtBQUssQ0FBQ2xHLEtBQUssQ0FBQ0UsR0FBRyxDQUFDUCxDQUFDLEtBQUtnUyxRQUFRLEVBQUU7a0JBQzlEO2tCQUNBO2dCQUNGO2dCQUNBRixTQUFTLEVBQUU7Y0FDYixDQUFDLENBQUMsT0FBT25SLEtBQUssRUFBRTtnQkFDZEQsT0FBTyxDQUFDQyxLQUFLLENBQUMseUJBQXlCLEVBQUVBLEtBQUssQ0FBQztnQkFDL0M7Y0FDRjtZQUNGO1VBQ0Y7VUFDQTtRQUNGLEtBQUssR0FBRztRQUNSLEtBQUssR0FBRztVQUNOZ1IsT0FBTyxDQUFDdEksU0FBUyxDQUFDLENBQUM7VUFDbkI7TUFDSjtJQUNGLENBQUMsTUFBQTlKLEdBQUEsYUFBQUMsS0FBQTs7SUFFRCxTQUFBa0ssT0FBT0EsQ0FBQ2tJLEtBQUssRUFBRTtNQUNiLElBQUksQ0FBQ3JMLEtBQUssQ0FBQ2hELElBQUksQ0FBQ3FPLEtBQUssQ0FBQ3JTLEdBQUcsQ0FBQyxHQUFHLEtBQUs7TUFDbEM7TUFDQSxJQUFJcVMsS0FBSyxDQUFDclMsR0FBRyxLQUFLLFdBQVcsRUFBRTtRQUM3QixJQUFJLENBQUNvUyxPQUFPLENBQUN6TyxZQUFZLENBQUMsQ0FBQztNQUM3QjtJQUNGLENBQUMsTUFBQTNELEdBQUEseUJBQUFDLEtBQUE7O0lBRUQsU0FBQStKLG1CQUFtQkEsQ0FBQSxFQUErRCxLQUE5RDBJLGNBQWMsR0FBQWpULFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQ3dLLFNBQVMsS0FBRTBJLFlBQVksR0FBQWxULFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLElBQUksQ0FBQzBLLE9BQU87TUFDOUV2QyxRQUFRLENBQUNnTCxtQkFBbUIsQ0FBQyxTQUFTLEVBQUVGLGNBQWMsQ0FBQztNQUN2RDlLLFFBQVEsQ0FBQ2dMLG1CQUFtQixDQUFDLE9BQU8sRUFBRUQsWUFBWSxDQUFDO01BQ25EL0ssUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFcUksY0FBYyxDQUFDO01BQ3BEOUssUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFc0ksWUFBWSxDQUFDO0lBQ2xELENBQUM7Ozs7OztVQzlFSDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNzQjs7QUFFdEI7QUFDaUM7O0FBRWpDO0FBQ0EsSUFBTUcsS0FBSyxHQUFHbEwsUUFBUSxDQUFDbUwsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM3Q0QsS0FBSyxDQUFDekssV0FBVyxvRkFLaEI7Ozs7OztBQUNEVCxRQUFRLENBQUNvTCxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsS0FBSyxDQUFDOztBQUVoQztBQUNBbEwsUUFBUSxDQUFDeUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsRGxKLE9BQU8sQ0FBQzRJLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQzs7RUFFM0MsSUFBSTtJQUNGNUksT0FBTyxDQUFDNEksR0FBRyxDQUFDLGtCQUFrQixDQUFDO0lBQy9CO0lBQ0EsSUFBTU8sTUFBTSxHQUFHMUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0lBQzlDLElBQUl5QyxNQUFNLEVBQUU7TUFDVm5KLE9BQU8sQ0FBQzRJLEdBQUcsQ0FBQyxZQUFZLEVBQUVPLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLEdBQUcsRUFBRUQsTUFBTSxDQUFDRSxNQUFNLENBQUM7TUFDM0RySixPQUFPLENBQUM0SSxHQUFHLENBQUMsZ0JBQWdCLEVBQUVPLE1BQU0sQ0FBQ3dJLEtBQUssQ0FBQ3ZJLEtBQUssRUFBRSxHQUFHLEVBQUVELE1BQU0sQ0FBQ3dJLEtBQUssQ0FBQ3RJLE1BQU0sQ0FBQztJQUM3RSxDQUFDLE1BQU07TUFDTHJKLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0lBQ2xDO0lBQ0E7SUFDQXFKLDhDQUFJLENBQUMsQ0FBQztFQUNSLENBQUMsQ0FBQyxPQUFPckosS0FBSyxFQUFFO0lBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7SUFDNUMwSCxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJb0ssSUFBc0MsRUFBRTtFQUMxQzlJLE1BQU0sQ0FBQ2lKLE1BQU0sR0FBR2pKLE1BQU0sQ0FBQ2lKLE1BQU0sSUFBSSxDQUFDLENBQUM7RUFDbkNqSixNQUFNLENBQUNpSixNQUFNLENBQUM1SSxJQUFJLEdBQUdBLDBDQUFJO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb25zdGFudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9Cb2FyZC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9HYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL1BpZWNlLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9yZW5kZXJpbmcvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3JvdGF0aW9uL1JvdGF0aW9uU3lzdGVtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zY29yaW5nL1Njb3JlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3RhdGUvR2FtZVN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRob3V0SG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVSZXN0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlU3ByZWFkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5leHBvcnQgeyBfc2xpY2VkVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyDjgrLjg7zjg6Djga7lrprmlbDlrprnvqlcbmV4cG9ydCBjb25zdCBHQU1FX0NPTlNUQU5UUyA9IHtcbiAgQ09MUzogMTAsIC8vIOODleOCo+ODvOODq+ODieOBruW5he+8iOODluODreODg+OCr+aVsO+8iVxuICBST1dTOiAyMCwgLy8g44OV44Kj44O844Or44OJ44Gu6auY44GV77yI44OW44Ot44OD44Kv5pWw77yJXG4gIEJMT0NLX1NJWkU6IDIwLCAvLyAx44OW44Ot44OD44Kv44Gu44OU44Kv44K744Or44K144Kk44K6XG4gIFNDT1JFX1RBQkxFOiB7XG4gICAgMTogNDAsICAgLy8gMeihjOa2iOOBl1xuICAgIDI6IDEwMCwgIC8vIDLooYzmtojjgZdcbiAgICAzOiAzMDAsICAvLyAz6KGM5raI44GXXG4gICAgNDogMTIwMCAgLy8gNOihjOa2iOOBl++8iOODhuODiOODquOCue+8iVxuICB9LFxuICBTSEFQRVM6IFtcbiAgICAvLyBJXG4gICAgW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBPXG4gICAgW1xuICAgICAgWzIsIDJdLFxuICAgICAgWzIsIDJdXG4gICAgXSxcbiAgICAvLyBUXG4gICAgW1xuICAgICAgWzAsIDMsIDBdLFxuICAgICAgWzMsIDMsIDNdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBMXG4gICAgW1xuICAgICAgWzQsIDAsIDBdLFxuICAgICAgWzQsIDQsIDRdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBKXG4gICAgW1xuICAgICAgWzAsIDAsIDVdLFxuICAgICAgWzUsIDUsIDVdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBaXG4gICAgW1xuICAgICAgWzYsIDYsIDBdLFxuICAgICAgWzAsIDYsIDZdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBTXG4gICAgW1xuICAgICAgWzAsIDcsIDddLFxuICAgICAgWzcsIDcsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICBdLFxuICBDT0xPUlM6IFtcbiAgICAnIzAwMDAwMCcsIC8vIDA6IOepulxuICAgICcjMDBGRkZGJywgLy8gMTogSSAo44K344Ki44OzKVxuICAgICcjRkZGRjAwJywgLy8gMjogTyAo6buE6ImyKVxuICAgICcjODAwMDgwJywgLy8gMzogVCAo57SrKVxuICAgICcjRkZBNTAwJywgLy8gNDogTCAo44Kq44Os44Oz44K4KVxuICAgICcjMDAwMEZGJywgLy8gNTogSiAo6Z2SKVxuICAgICcjRkYwMDAwJywgLy8gNjogWiAo6LWkKVxuICAgICcjMDA4MDAwJyAgLy8gNzogUyAo57eRKVxuICBdLFxuICBHQU1FX1NUQVRFUzoge1xuICAgIElOSVQ6ICdJTklUJyxcbiAgICBQTEFZSU5HOiAnUExBWUlORycsXG4gICAgUEFVU0VEOiAnUEFVU0VEJyxcbiAgICBHQU1FX09WRVI6ICdHQU1FX09WRVInXG4gIH1cbn07XG4iLCIvLyBCb2FyZOOCr+ODqeOCuVxuLy8g44OG44OI44Oq44K544Gu55uk6Z2i566h55CG44Go44Ot44K444OD44Kv44KS5ouF5b2TXG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwKSB7XG4gICAgdGhpcy5jb2xzID0gY29scztcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucm93cyB9LCAoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xuICB9XG5cbiAgaXNJbnNpZGUoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuY29scyAmJiB5ID49IDAgJiYgeSA8IHRoaXMucm93cztcbiAgfVxuXG4gIGlzRW1wdHkoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpICYmIHRoaXMuZ3JpZFt5XVt4XSA9PT0gMDtcbiAgfVxuXG4gIHNldENlbGwoeCwgeSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc0luc2lkZSh4LCB5KSkgdGhpcy5ncmlkW3ldW3hdID0gdmFsdWU7XG4gIH1cblxuICBnZXRDZWxsKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuaXNJbnNpZGUoeCwgeSkgfHwgIXRoaXMuZ3JpZFt5XSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF07XG4gIH1cblxuICBtZXJnZShwaWVjZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcGllY2UubWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBpZWNlLm1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocGllY2UubWF0cml4W3ldW3hdKSB7XG4gICAgICAgICAgdGhpcy5zZXRDZWxsKHBpZWNlLnBvcy54ICsgeCwgcGllY2UucG9zLnkgKyB5LCBwaWVjZS5tYXRyaXhbeV1beF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBpZiAoIXRoaXMuZ3JpZCB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmdyaWQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGdyaWQgc3RhdGUnKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2xlYXJlZCA9IDA7XG4gICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWRbeV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm93IGF0IGluZGV4ICR7eX06YCwgcm93KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICAgIGNsZWFyZWQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdHcmlkLnB1c2goWy4uLnJvd10pOyAvLyDooYzjga7jgrPjg5Tjg7zjgpLkvZzmiJDjgZfjgablj4LnhafjgpLpgb/jgZHjgotcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByb3cgJHt5fTpgLCBlcnJvcik7XG4gICAgICAgIG5ld0dyaWQucHVzaChbLi4ucm93XSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWJiumZpOOBleOCjOOBn+ihjOOBruWIhuOBoOOBkeepuuOBruihjOOCkuS4iuOBq+i/veWKoFxuICAgIHdoaWxlIChuZXdHcmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgbmV3R3JpZC51bnNoaWZ0KEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ3JpZCA9IG5ld0dyaWQ7XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5pbXBvcnQgeyBSb3RhdGlvblN5c3RlbSB9IGZyb20gJy4uL3JvdGF0aW9uL1JvdGF0aW9uU3lzdGVtLmpzJztcbmltcG9ydCB7IFNjb3JlQ2FsY3VsYXRvciB9IGZyb20gJy4uL3Njb3JpbmcvU2NvcmVDYWxjdWxhdG9yLmpzJztcblxuLy8g44OG44OI44Ot44Of44OO44Gu5b2i54q244Go6Imy44Gu44Oe44OD44OU44Oz44KwXG5jb25zdCBURVRST01JTk9fTUFQID0ge1xuICBJOiBbXG4gICAgWzAsIDAsIDAsIDBdLFxuICAgIFsxLCAxLCAxLCAxXSxcbiAgICBbMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDBdLFxuICBdLFxuICBKOiBbXG4gICAgWzIsIDAsIDBdLFxuICAgIFsyLCAyLCAyXSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIEw6IFtcbiAgICBbMCwgMCwgM10sXG4gICAgWzMsIDMsIDNdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgTzogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNF0sXG4gIF0sXG4gIFM6IFtcbiAgICBbMCwgNSwgNV0sXG4gICAgWzUsIDUsIDBdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgVDogW1xuICAgIFswLCA2LCAwXSxcbiAgICBbNiwgNiwgNl0sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBaOiBbXG4gICAgWzcsIDcsIDBdLFxuICAgIFswLCA3LCA3XSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG59O1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjAsIHRldHJvbWlub3MgPSBudWxsKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjb2xzLCByb3dzKTtcbiAgICB0aGlzLnRldHJvbWlub3MgPSB0ZXRyb21pbm9zIHx8IFtcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1syLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgICBbWzAsIDQsIDRdLCBbNCwgNCwgMF1dLFxuICAgICAgW1s1LCA1LCAwXSwgWzAsIDUsIDVdXSxcbiAgICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgICBbWzAsIDAsIDddLCBbNywgNywgN11dLFxuICAgIF07XG4gICAgXG4gICAgLy8g54++5Zyo44Gu44OU44O844K544Go5qyh44Gu44OU44O844K5XG4gICAgdGhpcy5waWVjZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0UGllY2UgPSBudWxsO1xuICAgIFxuICAgIC8vIOODrOODmeODq+OBq+W/nOOBmOOBn+ODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgIHRoaXMubGV2ZWxTcGVlZHMgPSBbXG4gICAgICAxMDAwLCAvLyDjg6zjg5njg6sxOiAxLjDnp5JcbiAgICAgIDkwMCwgIC8vIOODrOODmeODqzI6IDAuOeenklxuICAgICAgODAwLCAgLy8g44Os44OZ44OrMzogMC4456eSXG4gICAgICA3MDAsICAvLyDjg6zjg5njg6s0OiAwLjfnp5JcbiAgICAgIDYwMCwgIC8vIOODrOODmeODqzU6IDAuNuenklxuICAgICAgNTAwLCAgLy8g44Os44OZ44OrNjogMC4156eSXG4gICAgICA0MDAsICAvLyDjg6zjg5njg6s3OiAwLjTnp5JcbiAgICAgIDMwMCwgIC8vIOODrOODmeODqzg6IDAuM+enklxuICAgICAgMjAwLCAgLy8g44Os44OZ44OrOTogMC4y56eSXG4gICAgICAxMDAgICAvLyDjg6zjg5njg6sxMOS7pemZjTogMC4x56eSXG4gICAgXTtcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarjg6njgqTjg7PmlbBcbiAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSAxMDtcbiAgICBcbiAgICAvLyDjg4njg63jg4Pjg5fplpPpmpTplqLpgKPjga7liJ3mnJ/ljJZcbiAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gICAgdGhpcy5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgXG4gICAgLy8g5Zue6Lui44K344K544OG44Og44Go44K544Kz44Ki6KiI566X5Zmo44Gu5Yid5pyf5YyWXG4gICAgdGhpcy5yb3RhdGlvblN5c3RlbSA9IG5ldyBSb3RhdGlvblN5c3RlbSgpO1xuICAgIHRoaXMuc2NvcmVDYWxjdWxhdG9yID0gbmV3IFNjb3JlQ2FsY3VsYXRvcigpO1xuICAgIFxuICAgIC8vIOWIneacn+WMluaZguOBq+acgOWIneOBruODlOODvOOCueOCkueUn+aIkFxuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7jg6zjg5njg6vjgavlv5zjgZjjgZ/jg4njg63jg4Pjg5fplpPpmpTjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge251bWJlcn0g44OJ44Ot44OD44OX6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAqL1xuICBnZXREcm9wSW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgbGV2ZWxJbmRleCA9IE1hdGgubWluKHRoaXMubGV2ZWwgLSAxLCB0aGlzLmxldmVsU3BlZWRzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmxldmVsU3BlZWRzW2xldmVsSW5kZXhdO1xuICB9XG4gIFxuICAvKipcbiAgICog5LiL44Kt44O844GM5oq844GV44KM44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44CB44OJ44Ot44OD44OX6ZaT6ZqU44KS55+t57iu44GZ44KLXG4gICAqL1xuICBzdGFydFNvZnREcm9wKCkge1xuICAgIGlmICghdGhpcy5pc1NvZnREcm9wKSB7XG4gICAgICB0aGlzLmlzU29mdERyb3AgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSA1MDsgLy8g44K944OV44OI44OJ44Ot44OD44OX5pmC44Gu6ZaT6ZqU77yI44Of44Oq56eS77yJXG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog5LiL44Kt44O844GM6Zui44GV44KM44Gf44Go44GN44Gr5ZG844Gz5Ye644GV44KM44CB44OJ44Ot44OD44OX6ZaT6ZqU44KS5YWD44Gr5oi744GZXG4gICAqL1xuICBzdG9wU29mdERyb3AoKSB7XG4gICAgaWYgKHRoaXMuaXNTb2Z0RHJvcCkge1xuICAgICAgdGhpcy5pc1NvZnREcm9wID0gZmFsc2U7XG4gICAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44KS44OB44Kn44OD44Kv44GX44CB5b+F6KaB44Gr5b+c44GY44Gm44Os44OZ44Or44KS5LiK44GS44KLXG4gICAqL1xuICAvKipcbiAgICog5paw44GX44GE44OU44O844K544KS5L2c5oiQ44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIOODhuODiOODreODn+ODjuOBruOCpOODs+ODh+ODg+OCr+OCuVxuICAgKiBAcmV0dXJucyB7UGllY2V9IOaWsOOBl+OBhOODlOODvOOCueOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgY3JlYXRlUGllY2UoaW5kZXgpIHtcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLnRldHJvbWlub3NbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTtcbiAgICBjb25zdCB0eXBlID0gT2JqZWN0LmtleXMoVEVUUk9NSU5PX01BUClbaW5kZXggJSB0aGlzLnRldHJvbWlub3MubGVuZ3RoXTsgLy8g44OU44O844K544Gu44K/44Kk44OX44KS5Y+W5b6XXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKHRoaXMuYm9hcmQuY29scyAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgLy8g44OU44O844K544Gu5Yid5pyfWeW6p+aomeOCkuiqv+aVtOOBl+OAgeeUu+mdouWkluOBi+OCieWHuuePvuOBmeOCi+OCiOOBhuOBq+OBmeOCi1xuICAgIC8vIOODlOODvOOCueOBrumrmOOBleOBruWIhuOBoOOBkeS4iuOBq+OBmuOCieOBmVxuICAgIGNvbnN0IHkgPSAtbWF0cml4Lmxlbmd0aDtcbiAgICByZXR1cm4gbmV3IFBpZWNlKG1hdHJpeCwgeyB4LCB5IH0sIHR5cGUpO1xuICB9XG4gIFxuICAvKipcbiAgICog44Ky44O844Og44KS44Oq44K744OD44OI44GZ44KLXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLmJvYXJkLmNsZWFyKCk7XG4gICAgdGhpcy5waWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgdGhpcy5saW5lcyA9IDA7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICAvLyDoh6rli5XokL3kuIvplpPpmpTjgpLjg6rjgrvjg4Pjg4hcbiAgICB0aGlzLmRyb3BJbnRlcnZhbCA9IHRoaXMuZ2V0RHJvcEludGVydmFsKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgqLjg4Pjg5fjgpLjg4Hjgqfjg4Pjgq/jgZfjgIHlv4XopoHjgavlv5zjgZjjgabjg6zjg5njg6vjgpLkuIrjgZLjgotcbiAgICovXG4gIGNoZWNrTGV2ZWxVcCgpIHtcbiAgICBpZiAodGhpcy5zY29yZUNhbGN1bGF0b3Iuc2hvdWxkTGV2ZWxVcCh0aGlzLmxpbmVzLCB0aGlzLmxldmVsKSkge1xuICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuc2NvcmVDYWxjdWxhdG9yLmNhbGN1bGF0ZUxldmVsKHRoaXMubGluZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOODlOODvOOCueOCkuenu+WLleOBleOBm+OCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZHggLSBY5pa55ZCR44Gu56e75YuV6YePXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnp7vli5XjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIG1vdmVQaWVjZShkeCkge1xuICAgIGlmICghdGhpcy5waWVjZSkgcmV0dXJuIGZhbHNlO1xuICAgIFxuICAgIHRoaXMucGllY2UubW92ZShkeCwgMCk7XG4gICAgXG4gICAgLy8g6KGd56qB44GX44Gf44KJ5YWD44Gr5oi744GZXG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubW92ZSgtZHgsIDApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOihneeqgeWIpOWumuOCkuihjOOBhlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g6KGd56qB44GX44Gm44GE44KL44GL44Gp44GG44GLXG4gICAqL1xuICBoYXNDb2xsaXNpb24oKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlIHx8ICF0aGlzLnBpZWNlLm1hdHJpeCB8fCAhdGhpcy5waWVjZS5wb3MpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBwaWVjZSBkYXRhIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgeyBtYXRyaXgsIHBvcyB9ID0gdGhpcy5waWVjZTtcbiAgICBcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWF0cml4KSB8fCB0eXBlb2YgcG9zLnggIT09ICdudW1iZXInIHx8IHR5cGVvZiBwb3MueSAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBtYXRyaXggb3IgcG9zaXRpb24gZGF0YScpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBtYXRyaXhbeV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm93IGF0IGluZGV4ICR7eX06YCwgcm93KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcm93Lmxlbmd0aDsgeCsrKSB7XG4gICAgICAgIGlmIChyb3dbeF0gIT09IDApIHtcbiAgICAgICAgICBjb25zdCBib2FyZFggPSBwb3MueCArIHg7XG4gICAgICAgICAgY29uc3QgYm9hcmRZID0gcG9zLnkgKyB5O1xuICAgICAgICAgIFxuICAgICAgICAgIC8vIOODnOODvOODieOBruWkluWBtOOBi+OAgeOBmeOBp+OBq+ODluODreODg+OCr+OBjOOBguOCi+WgtOWQiOOBr+ihneeqgVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGJvYXJkWCA8IDAgfHxcbiAgICAgICAgICAgIGJvYXJkWCA+PSB0aGlzLmJvYXJkLmNvbHMgfHxcbiAgICAgICAgICAgIGJvYXJkWSA+PSB0aGlzLmJvYXJkLnJvd3MgfHxcbiAgICAgICAgICAgIChib2FyZFkgPj0gMCAmJiBcbiAgICAgICAgICAgICB0aGlzLmJvYXJkLmdyaWRbYm9hcmRZXSAmJiBcbiAgICAgICAgICAgICB0aGlzLmJvYXJkLmdyaWRbYm9hcmRZXVtib2FyZFhdICE9PSAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOaWsOOBl+OBhOODlOODvOOCueOCkueUn+aIkOOBmeOCi1xuICAgKi9cbiAgc3Bhd25QaWVjZSgpIHtcbiAgICB0aGlzLnBpZWNlID0gdGhpcy5uZXh0UGllY2UgfHwgdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgdGhpcy5uZXh0UGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICBcbiAgICAvLyDmlrDjgZfjgYTjg5Tjg7zjgrnjgYzmnIDliJ3jgYvjgonooZ3nqoHjgZfjgabjgYTjgZ/jgonjgrLjg7zjg6Djgqrjg7zjg5Djg7xcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpIx44Oe44K55LiL44Gr56e75YuV44GV44Gb44KLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnp7vli5XjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIGRyb3BQaWVjZSgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICB0aGlzLnBpZWNlLm1vdmUoMCwgMSk7XG4gICAgXG4gICAgLy8g6KGd56qB44GX44Gf44KJ5YWD44Gu5L2N572u44Gr5oi744GX44Gm5Zu65a6aXG4gICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgIHRoaXMucGllY2UubW92ZSgwLCAtMSk7XG4gICAgICB0aGlzLm1lcmdlUGllY2UoKTtcbiAgICAgIFxuICAgICAgLy8g44Oc44O844OJ44GuY2xlYXJMaW5lc+ODoeOCveODg+ODieOCkuS9v+eUqFxuICAgICAgY29uc3QgbGluZXNDbGVhcmVkID0gdGhpcy5ib2FyZC5jbGVhckxpbmVzKCk7XG4gICAgICBpZiAobGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICB0aGlzLmxpbmVzICs9IGxpbmVzQ2xlYXJlZDtcbiAgICAgICAgdGhpcy5zY29yZSArPSB0aGlzLmNhbGN1bGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCk7XG4gICAgICAgIHRoaXMuY2hlY2tMZXZlbFVwKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuc3Bhd25QaWVjZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOePvuWcqOOBruODlOODvOOCueOCkuODnOODvOODieOBq+WbuuWumuOBmeOCi1xuICAgKi9cbiAgbWVyZ2VQaWVjZSgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAobWF0cml4W3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRZID0gcG9zLnkgKyB5O1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoYm9hcmRZID49IDAgJiYgYm9hcmRZIDwgdGhpcy5ib2FyZC5yb3dzICYmIGJvYXJkWCA+PSAwICYmIGJvYXJkWCA8IHRoaXMuYm9hcmQuY29scykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV1bYm9hcmRYXSA9IG1hdHJpeFt5XVt4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKipcbiAgICog44K544Kz44Ki44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICogQHJldHVybnMge251bWJlcn0g6KiI566X44GV44KM44Gf44K544Kz44KiXG4gICAqL1xuICBjYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZUNhbGN1bGF0b3IuY2FsY3VsYXRlTGluZVNjb3JlKGxpbmVzQ2xlYXJlZCwgdGhpcy5sZXZlbCk7XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICovXG4gIHVwZGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICB9XG4gIFxuICAvKipcbiAgICog44OU44O844K544KS5Zue6Lui44GV44Gb44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXIgLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOWbnui7ouOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgcm90YXRlUGllY2UoZGlyKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ05vIHBpZWNlIHRvIHJvdGF0ZScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIOWbnui7ouOCt+OCueODhuODoOOCkuS9v+OBo+OBpuWbnui7ouOCkuippuihjFxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMucm90YXRpb25TeXN0ZW0uYXR0ZW1wdFJvdGF0aW9uKFxuICAgICAgdGhpcy5waWVjZSxcbiAgICAgIGRpcixcbiAgICAgICgpID0+IHRoaXMuaGFzQ29sbGlzaW9uKClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5zdWNjZXNzO1xuICB9XG59XG5cbiIsIi8vIFBpZWNl44Kv44Op44K5XG4vLyDjg4bjg4jjg63jg5/jg47jga7lvaLjg7vkvY3nva7jg7vlm57ou6LjgpLnrqHnkIZcblxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgdHlwZSA9ICdUJykge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMucG9zID0geyAuLi5wb3MgfTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLyDjg5Tjg7zjgrnjga7nqK7poZ4gKEksIEosIEwsIE8sIFMsIFQsIFopXG4gICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDsgLy8gMDogMOW6piwgMTogOTDluqYsIDI6IDE4MOW6piwgMzogMjcw5bqmXG4gIH1cblxuICBtb3ZlKGR4LCBkeSkge1xuICAgIHRoaXMucG9zLnggKz0gZHg7XG4gICAgdGhpcy5wb3MueSArPSBkeTtcbiAgfVxuXG4gIHJvdGF0ZShkaXIpIHtcbiAgICAvLyBkaXI6IDE95pmC6KiI5Zue44KKLCAtMT3lj43mmYLoqIjlm57jgopcbiAgICBpZiAoIXRoaXMubWF0cml4IHx8ICFBcnJheS5pc0FycmF5KHRoaXMubWF0cml4KSB8fCAhdGhpcy5tYXRyaXhbMF0gfHwgIUFycmF5LmlzQXJyYXkodGhpcy5tYXRyaXhbMF0pKSByZXR1cm47XG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCBNID0gdGhpcy5tYXRyaXhbMF0ubGVuZ3RoO1xuICAgIGxldCByb3RhdGVkO1xuICAgIGlmIChkaXIgPT09IDEpIHtcbiAgICAgIC8vIOaZguioiOWbnuOCijog6Lui572u44GX44Gm5ZCE6KGM44KS5Y+N6LuiXG4gICAgICByb3RhdGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTSB9LCAoXywgeCkgPT5cbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoXywgeSkgPT4gKHRoaXMubWF0cml4W04gLSB5IC0gMV0gPyB0aGlzLm1hdHJpeFtOIC0geSAtIDFdW3hdIDogMCkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlj43mmYLoqIjlm57jgoo6IOi7oue9ruOBl+OBpuWQhOWIl+OCkuWPjei7olxuICAgICAgcm90YXRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE0gfSwgKF8sIHgpID0+XG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IE4gfSwgKF8sIHkpID0+ICh0aGlzLm1hdHJpeFt5XSA/IHRoaXMubWF0cml4W3ldW00gLSB4IC0gMV0gOiAwKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubWF0cml4ID0gcm90YXRlZDtcbiAgICAvLyDlm57ou6LnirbmhYvjgpLmm7TmlrBcbiAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAodGhpcy5yb3RhdGlvblN0YXRlICsgKGRpciA9PT0gMSA/IDEgOiAzKSkgJSA0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jb3JlL0dhbWUuanMnO1xuaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmpzJztcbmltcG9ydCBHYW1lVUkgZnJvbSBcIi4vdWkvR2FtZVVJLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyaW5nL1JlbmRlcmVyLmpzJztcbmltcG9ydCB7IEdhbWVTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3N0YXRlL0dhbWVTdGF0ZU1hbmFnZXIuanMnO1xuXG4vLyAtLS0g44Kw44Ot44O844OQ44Or5aSJ5pWw44Go54q25oWL566h55CGIC0tLVxuZXhwb3J0IGxldCB0ZXRyaXNHYW1lID0gbmV3IEdhbWUoKTtcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGVNYW5hZ2VyID0gbmV3IEdhbWVTdGF0ZU1hbmFnZXIoR0FNRV9DT05TVEFOVFMuUk9XUywgR0FNRV9DT05TVEFOVFMuQ09MUyk7XG5leHBvcnQgbGV0IHJlbmRlcmVyID0gbnVsbDtcblxuLy8g5b6M5pa55LqS5o+b5oCn44Gu44Gf44KB44GuZ2FtZVN0YXRl44OX44Ot44Kt44K3XG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlID0gbmV3IFByb3h5KGdhbWVTdGF0ZU1hbmFnZXIuc3RhdGUsIHtcbiAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSAnaW5pdEJvYXJkJykge1xuICAgICAgcmV0dXJuICgpID0+IGdhbWVTdGF0ZU1hbmFnZXIuaW5pdEJvYXJkKCk7XG4gICAgfVxuICAgIGlmIChwcm9wID09PSAnbG9nU3RhdGUnKSB7XG4gICAgICByZXR1cm4gKCkgPT4gZ2FtZVN0YXRlTWFuYWdlci5sb2dTdGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KHByb3AsIHZhbHVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbi8vIC0tLSDmj4/nlLvplqLpgKMgLS0tIFxuZnVuY3Rpb24gZHJhdygpIHtcbiAgaWYgKCFyZW5kZXJlcikge1xuICAgIGNvbnNvbGUud2FybignUmVuZGVyZXIgbm90IGluaXRpYWxpemVkJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IGdhbWVEYXRhID0ge1xuICAgICAgYm9hcmRHcmlkOiB0ZXRyaXNHYW1lICYmIHRldHJpc0dhbWUuYm9hcmQgPyB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQgOiBudWxsLFxuICAgICAgcGllY2U6IHN0YXRlLnBpZWNlLFxuICAgICAgbmV4dFBpZWNlOiBzdGF0ZS5uZXh0UGllY2VcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IG5leHRQaWVjZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LXBpZWNlLWNhbnZhcycpO1xuICAgIHJlbmRlcmVyLnJlbmRlcihnYW1lRGF0YSwgbmV4dFBpZWNlQ2FudmFzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIGluIGRyYXcgZnVuY3Rpb246JywgZXJyb3IpO1xuICB9XG59XG5cbi8vIC0tLSBVSeabtOaWsCAtLS0gXG5mdW5jdGlvbiB1cGRhdGVVSSgpIHtcbiAgdXBkYXRlU2NvcmVEaXNwbGF5KGdhbWVTdGF0ZS5zY29yZSk7XG4gIHVwZGF0ZUxpbmVzRGlzcGxheShnYW1lU3RhdGUubGluZXMpO1xuICB1cGRhdGVMZXZlbERpc3BsYXkoZ2FtZVN0YXRlLmxldmVsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVNjb3JlRGlzcGxheShzY29yZSkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2Ygc2NvcmUgIT09ICdudW1iZXInIHx8IGlzTmFOKHNjb3JlKSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHNjb3JlIHZhbHVlOicsIHNjb3JlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG4gICAgaWYgKHNjb3JlRWxlbWVudCkge1xuICAgICAgc2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gc2NvcmUudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdTY29yZSBkaXNwbGF5IGVsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNjb3JlIGRpc3BsYXk6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaW5lc0Rpc3BsYXkobGluZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGxpbmVzICE9PSAnbnVtYmVyJyB8fCBpc05hTihsaW5lcykpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsaW5lcyB2YWx1ZTonLCBsaW5lcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lcycpO1xuICAgIGlmIChsaW5lc0VsZW1lbnQpIHtcbiAgICAgIGxpbmVzRWxlbWVudC50ZXh0Q29udGVudCA9IGxpbmVzLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignTGluZXMgZGlzcGxheSBlbGVtZW50IG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBsaW5lcyBkaXNwbGF5OicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGV2ZWxEaXNwbGF5KGxldmVsKSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCAhPT0gJ251bWJlcicgfHwgaXNOYU4obGV2ZWwpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGV2ZWwgdmFsdWU6JywgbGV2ZWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBsZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbiAgICBpZiAobGV2ZWxFbGVtZW50KSB7XG4gICAgICBsZXZlbEVsZW1lbnQudGV4dENvbnRlbnQgPSBsZXZlbC50b1N0cmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0xldmVsIGRpc3BsYXkgZWxlbWVudCBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgbGV2ZWwgZGlzcGxheTonLCBlcnJvcik7XG4gIH1cbn1cblxuLy8gLS0tIOOCsuODvOODoOODreOCuOODg+OCryAtLS0gXG5mdW5jdGlvbiB1cGRhdGVHYW1lU3RhdGUoKSB7XG4gIGdhbWVTdGF0ZU1hbmFnZXIuc3luY1dpdGhHYW1lKHRldHJpc0dhbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyRHJvcCgpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWdhbWVTdGF0ZU1hbmFnZXIuaXNSdW5uaW5nKCkpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUuZHJvcFBpZWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRldHJpc0dhbWUgb2JqZWN0IG9yIG1pc3NpbmcgZHJvcFBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkcm9wcGVkID0gdGV0cmlzR2FtZS5kcm9wUGllY2UoKTtcbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgICBcbiAgICBpZiAoZ2FtZVN0YXRlTWFuYWdlci5nZXQoJ2lzR2FtZU92ZXInKSkge1xuICAgICAgYWxlcnQoJ0dhbWUgT3ZlciEnKTtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc3RvcEdhbWVMb29wKCk7XG4gICAgfVxuICAgIHJldHVybiBkcm9wcGVkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHBsYXllckRyb3A6JywgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZShkaXIpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWdhbWVTdGF0ZU1hbmFnZXIuaXNSdW5uaW5nKCkpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUubW92ZVBpZWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRldHJpc0dhbWUgb2JqZWN0IG9yIG1pc3NpbmcgbW92ZVBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBpZiAodHlwZW9mIGRpciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBkaXJlY3Rpb24gZm9yIHBsYXllck1vdmU6JywgZGlyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGV0cmlzR2FtZS5tb3ZlUGllY2UoZGlyKTtcbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJNb3ZlOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyUm90YXRlKGRpcikge1xuICB0cnkge1xuICAgIGlmICghZ2FtZVN0YXRlTWFuYWdlci5pc1J1bm5pbmcoKSkgcmV0dXJuO1xuICAgIFxuICAgIGlmICghdGV0cmlzR2FtZSB8fCB0eXBlb2YgdGV0cmlzR2FtZS5yb3RhdGVQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIHJvdGF0ZVBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBpZiAodHlwZW9mIGRpciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBkaXJlY3Rpb24gZm9yIHBsYXllclJvdGF0ZTonLCBkaXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlKGRpcik7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcGxheWVyUm90YXRlOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0g44Ky44O844Og44Or44O844OXIC0tLVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lID0gMCkge1xuICB0cnkge1xuICAgIGNvbnN0IGdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldEdhbWVMb29wSWQoZ2FtZUxvb3BJZCk7XG4gICAgXG4gICAgaWYgKCFnYW1lU3RhdGVNYW5hZ2VyLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCk7XG4gICAgXG4gICAgLy8g5Yid5pyf5YyW5pmC44GvbGFzdFRpbWXjgpLoqK3lrppcbiAgICBpZiAoIXN0YXRlLmxhc3RUaW1lKSB7XG4gICAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnbGFzdFRpbWUnLCB0aW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gc3RhdGUubGFzdFRpbWU7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2xhc3RUaW1lJywgdGltZSk7XG4gICAgXG4gICAgLy8g55Ww5bi444Gq44OH44Or44K/44K/44Kk44Og44KS44K544Kt44OD44OX77yI44OV44Os44O844Og6KiI566X44Gu5a6J5a6a5oCn5ZCR5LiK77yJXG4gICAgaWYgKGRlbHRhVGltZSA+IDEwMDApIHtcbiAgICAgIGNvbnNvbGUud2FybignTGFyZ2UgZGVsdGEgdGltZSBkZXRlY3RlZCwgc2tpcHBpbmcgZnJhbWU6JywgZGVsdGFUaW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8g44OJ44Ot44OD44OX5Yem55CGXG4gICAgaWYgKHR5cGVvZiBzdGF0ZS5kcm9wQ291bnRlciA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRldHJpc0dhbWUuZHJvcEludGVydmFsID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgbmV3RHJvcENvdW50ZXIgPSBzdGF0ZS5kcm9wQ291bnRlciArIGRlbHRhVGltZTtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdkcm9wQ291bnRlcicsIG5ld0Ryb3BDb3VudGVyKTtcbiAgICAgIFxuICAgICAgaWYgKG5ld0Ryb3BDb3VudGVyID4gdGV0cmlzR2FtZS5kcm9wSW50ZXJ2YWwpIHtcbiAgICAgICAgcGxheWVyRHJvcCgpO1xuICAgICAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnZHJvcENvdW50ZXInLCAwKTtcbiAgICAgICAgLy8g5Y2z5bqn44Gr5o+P55S744KS5pu05pawXG4gICAgICAgIGRyYXcoKTtcbiAgICAgICAgdXBkYXRlVUkoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVsdGFUaW1lIDwgMTAwKSB7IC8vIDYwRlBT44Gn5o+P55S744GZ44KL5aC05ZCI44CBMTYuNjdtc+OBlOOBqOOBq+aPj+eUu1xuICAgICAgICAvLyDjgrnjg6Djg7zjgrrjgarjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7jgZ/jgoHjgIHjg4njg63jg4Pjg5fplpPjgoLmj4/nlLvjgpLmm7TmlrBcbiAgICAgICAgZHJhdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZHJvcENvdW50ZXIgb3IgZHJvcEludGVydmFsIHZhbHVlcycpO1xuICAgICAgLy8g54Sh5Yq544Gq54q25oWL44Gu5aC05ZCI44Gv5o+P55S744Gu44G/5a6f6KGMXG4gICAgICBkcmF3KCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dhbWUgbG9vcCBlcnJvcjonLCBlcnJvcik7XG4gICAgLy8g44Ky44O844Og44KS5LiA5pmC5YGc5q2i44GX44Gm44Ko44Op44O844KS5aCx5ZGKXG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXRQYXVzZWQodHJ1ZSk7XG4gICAgY29uc29sZS53YXJuKCdHYW1lIHBhdXNlZCBkdWUgdG8gZXJyb3IuIFByZXNzIFIgdG8gcmVzZXQgdGhlIGdhbWUuJyk7XG4gICAgXG4gICAgLy8g44Ko44Op44O855m655Sf5pmC44Gn44KC5o+P55S744Gv6Kmm6KGM44GZ44KLXG4gICAgdHJ5IHtcbiAgICAgIGRyYXcoKTtcbiAgICB9IGNhdGNoIChkcmF3RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RyYXcgZXJyb3IgZHVyaW5nIGVycm9yIHJlY292ZXJ5OicsIGRyYXdFcnJvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLSDliJ3mnJ/ljJbjgajjgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6rjg7PjgrAgLS0tXG5leHBvcnQgY29uc3QgZ2FtZVVJID0gbmV3IEdhbWVVSShnYW1lU3RhdGUsIHtcbiAgbW92ZVBpZWNlOiBwbGF5ZXJNb3ZlLFxuICBkcm9wUGllY2U6IHBsYXllckRyb3AsXG4gIHJvdGF0ZVBpZWNlOiBwbGF5ZXJSb3RhdGUsXG4gIHJlc2V0R2FtZSxcbiAgdXBkYXRlLFxuICBnZXREcm9wSW50ZXJ2YWw6ICgpID0+IHRldHJpc0dhbWUuZ2V0RHJvcEludGVydmFsKCksXG4gIHN0YXJ0U29mdERyb3A6ICgpID0+IHRldHJpc0dhbWUuc3RhcnRTb2Z0RHJvcCgpLFxuICBzdG9wU29mdERyb3A6ICgpID0+IHRldHJpc0dhbWUuc3RvcFNvZnREcm9wKCksXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgLy8g54q25oWL566h55CG5Zmo44KS44Oq44K744OD44OIXG4gIGdhbWVTdGF0ZU1hbmFnZXIucmVzZXQoKTtcbiAgXG4gIC8vIOOCsuODvOODoOOBruODquOCu+ODg+ODiFxuICB0ZXRyaXNHYW1lLnJlc2V0KCk7XG4gIFxuICAvLyDjgrLjg7zjg6DnirbmhYvjga7mm7TmlrDjgajmj4/nlLtcbiAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIHVwZGF0ZVVJKCk7XG4gIGRyYXcoKTtcbiAgXG4gIC8vIOOCsuODvOODoOODq+ODvOODl+OCkuWGjemWi1xuICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnbGFzdFRpbWUnLCAwKTtcbiAgY29uc3QgZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICBnYW1lU3RhdGVNYW5hZ2VyLnNldEdhbWVMb29wSWQoZ2FtZUxvb3BJZCk7XG4gIFxuICBjb25zb2xlLmxvZygn44Ky44O844Og44GM44Oq44K744OD44OI44GV44KM44G+44GX44Gf44CCJyk7XG59XG5cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzKGdhbWVVSS5vbktleURvd24uYmluZChnYW1lVUkpLCBnYW1lVUkub25LZXlVcC5iaW5kKGdhbWVVSSkpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY2FudmFzLndpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgICAgIGRyYXcoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyDjg4bjgrnjg4jnlKjjga5zZXR1cEV2ZW50TGlzdGVuZXJz6Zai5pWw44KS44Ko44Kv44K544Od44O844OIXG5leHBvcnQgeyBzZXR1cEV2ZW50TGlzdGVuZXJzIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmICghY2FudmFzKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDYW52YXPopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWN0eCkge1xuICAgICAgY29uc29sZS5lcnJvcignMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djgrnjg4bjg7zjg4jjga7liJ3mnJ/ljJZcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY3R4JywgY3R4KTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY2FudmFzJywgY2FudmFzKTtcbiAgICBcbiAgICAvLyDjg6zjg7Pjg4Djg6njg7zjga7liJ3mnJ/ljJZcbiAgICBjb25zdCB7IENPTE9SUywgQkxPQ0tfU0laRSB9ID0gR0FNRV9DT05TVEFOVFM7XG4gICAgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoY2FudmFzLCBDT0xPUlMsIEJMT0NLX1NJWkUpO1xuICAgIFxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruOCteOCpOOCuuioreWumlxuICAgIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICAgIGNhbnZhcy53aWR0aCA9IHN0YXRlLkNPTFMgKiBCTE9DS19TSVpFO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBzdGF0ZS5ST1dTICogQkxPQ0tfU0laRTtcbiAgICBcbiAgICAvLyDjg5zjg7zjg4njga7liJ3mnJ/ljJZcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLmluaXRCb2FyZCgpO1xuICAgIFxuICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOBruioreWumlxuICAgIGNvbnNvbGUubG9nKCfjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZkuLi4nKTtcbiAgICBnYW1lVUkuc2V0dXBFdmVudExpc3RlbmVycygpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOOBruODquOCu+ODg+ODiFxuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6DjgpLjg6rjgrvjg4Pjg4jjgZfjgb7jgZkuLi4nKTtcbiAgICByZXNldEdhbWUoKTtcbiAgICBcbiAgICAvLyDliJ3mnJ/mj4/nlLtcbiAgICBjb25zb2xlLmxvZygn5Yid5pyf5o+P55S744KS5a6f6KGM44GX44G+44GZLi4uJyk7XG4gICAgZHJhdygpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOODq+ODvOODl+OCkumWi+Wni1xuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djg6vjg7zjg5fjgpLplovlp4vjgZfjgb7jgZkuLi4nKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnbGFzdFRpbWUnLCAwKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnZHJvcENvdW50ZXInLCAwKTtcbiAgICBjb25zdCBnYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXRHYW1lTG9vcElkKGdhbWVMb29wSWQpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgYzlrozkuobjgZfjgb7jgZfjgZ/jgIInKTtcbiAgICBcbiAgICAvLyDjg4bjgrnjg4jnlKjjga7ov5TjgorlgKRcbiAgICByZXR1cm4ge1xuICAgICAgY2FudmFzLFxuICAgICAgZXZlbnRNYW5hZ2VyLFxuICAgICAgZ2FtZVN0YXRlOiBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCksXG4gICAgICBoYW5kbGVLZXlEb3duLFxuICAgICAgaGFuZGxlS2V5VXAsXG4gICAgICBpbml0R2FtZTogaW5pdCxcbiAgICAgIHJlc2V0R2FtZSxcbiAgICAgIHNldHVwRXZlbnRMaXN0ZW5lcnM6IGdhbWVVSS5zZXR1cEV2ZW50TGlzdGVuZXJzLmJpbmQoZ2FtZVVJKSxcbiAgICAgIHVwZGF0ZSxcbiAgICAgIGRyYXdcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gaW5pdEdhbWXplqLmlbDjga9pbml044Gu44Ko44Kk44Oq44Ki44K577yI44OG44K544OI5LqS5o+b5oCn44Gu44Gf44KB77yJXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gIGlmICghY2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcignQ2FudmFz6KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJzJE44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdjdHgnLCBjdHgpO1xuICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY2FudmFzJywgY2FudmFzKTtcbiAgY29uc3Qgc3RhdGUgPSBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCk7XG4gIGNhbnZhcy53aWR0aCA9IHN0YXRlLkNPTFMgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBjYW52YXMuaGVpZ2h0ID0gc3RhdGUuUk9XUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gIFxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vLyAtLS0g44Ko44Kv44K544Od44O844OI44Go44OW44Op44Km44K25a6f6KGMIC0tLVxuZXhwb3J0IGNvbnN0IGhhbmRsZUtleURvd24gPSBnYW1lVUkub25LZXlEb3duLmJpbmQoZ2FtZVVJKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVLZXlVcCA9IGdhbWVVSS5vbktleVVwLmJpbmQoZ2FtZVVJKTtcbmV4cG9ydCB7IGRyYXcgfTsgLy8gZHJhd+mWouaVsOOCkuOCqOOCr+OCueODneODvOODiFxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VGV0cmlzR2FtZShuZXdHYW1lKSB7XG4gIHRldHJpc0dhbWUgPSBuZXdHYW1lO1xufVxuXG5jb25zdCBleHBvcnRzID0geyBpbml0LCBpbml0R2FtZSwgcGxheWVyTW92ZSwgcGxheWVyUm90YXRlLCBwbGF5ZXJEcm9wLCBnYW1lVUksIGdhbWVTdGF0ZSwgZ2FtZVN0YXRlTWFuYWdlciwgcmVuZGVyZXIsIHJlc2V0R2FtZSwgdXBkYXRlLCBoYW5kbGVLZXlEb3duLCBoYW5kbGVLZXlVcCwgc2V0dXBFdmVudExpc3RlbmVycywgZHJhdywgdGV0cmlzR2FtZSB9O1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcbiIsImV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3JzLCBibG9ja1NpemUpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xuICAgIHRoaXMuYmxvY2tTaXplID0gYmxvY2tTaXplO1xuICAgIFxuICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignMkQg44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOODnuODiOODquODg+OCr+OCueOCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge0FycmF5PEFycmF5PG51bWJlcj4+fSBtYXRyaXggLSDmj4/nlLvjgZnjgovjg57jg4jjg6rjg4Pjgq/jgrlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9mZnNldCAtIOOCquODleOCu+ODg+ODiOW6p+aomSB7eCwgeX1cbiAgICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBjb2xvcnMgLSDoibLjga7phY3liJfvvIjjgqrjg5fjgrfjg6fjg7PjgIHjg4fjg5Xjgqnjg6vjg4jjga8gdGhpcy5jb2xvcnPvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJsb2NrU2l6ZSAtIOODluODreODg+OCr+OCteOCpOOCuu+8iOOCquODl+OCt+ODp+ODs+OAgeODh+ODleOCqeODq+ODiOOBryB0aGlzLmJsb2NrU2l6Ze+8iVxuICAgKi9cbiAgZHJhd01hdHJpeChtYXRyaXgsIG9mZnNldCwgY29sb3JzID0gdGhpcy5jb2xvcnMsIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgaWYgKCF0aGlzLmN0eCB8fCAhbWF0cml4IHx8ICFBcnJheS5pc0FycmF5KG1hdHJpeCkgfHwgIW9mZnNldCB8fCAhY29sb3JzIHx8ICFibG9ja1NpemUpIHtcbiAgICAgIGNvbnNvbGUud2FybignZHJhd01hdHJpeDogSW52YWxpZCBwYXJhbWV0ZXJzJywgeyBcbiAgICAgICAgaGFzQ3R4OiAhIXRoaXMuY3R4LCBcbiAgICAgICAgaGFzTWF0cml4OiAhIW1hdHJpeCwgXG4gICAgICAgIGhhc09mZnNldDogISFvZmZzZXQsIFxuICAgICAgICBoYXNDb2xvcnM6ICEhY29sb3JzLCBcbiAgICAgICAgaGFzQmxvY2tTaXplOiAhIWJsb2NrU2l6ZSBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIG9mZnNldC54ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Ygb2Zmc2V0LnkgIT09ICdudW1iZXInKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2RyYXdNYXRyaXg6IEludmFsaWQgb2Zmc2V0IHZhbHVlcycsIG9mZnNldCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSByZXR1cm47XG4gICAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IChjb2xvcnNbdmFsdWVdICYmIHR5cGVvZiBjb2xvcnNbdmFsdWVdID09PSAnc3RyaW5nJykgPyBjb2xvcnNbdmFsdWVdIDogJyMwMDAnO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoKHggKyBvZmZzZXQueCkgKiBibG9ja1NpemUsICh5ICsgb2Zmc2V0LnkpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRyYXdpbmcgYmxvY2sgYXQnLCB4LCB5LCAnOicsIGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCreODo+ODs+ODkOOCueOCkuOCr+ODquOCouOBl+OBpuiDjOaZr+OCkuaPj+eUu+OBmeOCi1xuICAgKi9cbiAgY2xlYXJDYW52YXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5jdHggfHwgIXRoaXMuY2FudmFzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBjYW52YXMgY29udGV4dCBpbiBjbGVhckNhbnZhcycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZjBmMGYwJztcbiAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjbGVhcmluZyBjYW52YXM6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6Djg5zjg7zjg4njgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gYm9hcmRHcmlkIC0g44Oc44O844OJ44Gu44Kw44Oq44OD44OJXG4gICAqL1xuICBkcmF3Qm9hcmQoYm9hcmRHcmlkKSB7XG4gICAgaWYgKGJvYXJkR3JpZCAmJiBBcnJheS5pc0FycmF5KGJvYXJkR3JpZCkpIHtcbiAgICAgIHRoaXMuZHJhd01hdHJpeChib2FyZEdyaWQsIHsgeDogMCwgeTogMCB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44OU44O844K544KS5o+P55S744GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaWVjZSAtIOODlOODvOOCueOCquODluOCuOOCp+OCr+ODiFxuICAgKi9cbiAgZHJhd1BpZWNlKHBpZWNlKSB7XG4gICAgaWYgKHBpZWNlICYmIHBpZWNlLm1hdHJpeCAmJiBwaWVjZS5wb3MpIHtcbiAgICAgIHRoaXMuZHJhd01hdHJpeChwaWVjZS5tYXRyaXgsIHBpZWNlLnBvcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOasoeOBruODlOODvOOCueOCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBuZXh0UGllY2VDYW52YXMgLSDmrKHjga7jg5Tjg7zjgrnnlKjjgq3jg6Pjg7Pjg5DjgrlcbiAgICogQHBhcmFtIHtPYmplY3R9IG5leHRQaWVjZSAtIOasoeOBruODlOODvOOCueOCquODluOCuOOCp+OCr+ODiFxuICAgKi9cbiAgZHJhd05leHRQaWVjZShuZXh0UGllY2VDYW52YXMsIG5leHRQaWVjZSkge1xuICAgIGlmICghbmV4dFBpZWNlQ2FudmFzIHx8ICFuZXh0UGllY2UgfHwgIW5leHRQaWVjZS5tYXRyaXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV4dEN0eCA9IG5leHRQaWVjZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgaWYgKCFuZXh0Q3R4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ291bGQgbm90IGdldCAyRCBjb250ZXh0IGZvciBuZXh0IHBpZWNlIGNhbnZhcycpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBcbiAgICAgIG5leHRDdHguY2xlYXJSZWN0KDAsIDAsIG5leHRDdHguY2FudmFzLndpZHRoLCBuZXh0Q3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgICAgY29uc3QgeyBtYXRyaXggfSA9IG5leHRQaWVjZTtcbiAgICAgIFxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0cml4KSAmJiBtYXRyaXgubGVuZ3RoID4gMCAmJiBBcnJheS5pc0FycmF5KG1hdHJpeFswXSkpIHtcbiAgICAgICAgY29uc3QgeCA9IChuZXh0Q3R4LmNhbnZhcy53aWR0aCAvIHRoaXMuYmxvY2tTaXplIC0gbWF0cml4WzBdLmxlbmd0aCkgLyAyO1xuICAgICAgICBjb25zdCB5ID0gKG5leHRDdHguY2FudmFzLmhlaWdodCAvIHRoaXMuYmxvY2tTaXplIC0gbWF0cml4Lmxlbmd0aCkgLyAyO1xuICAgICAgICBcbiAgICAgICAgLy8g5qyh44Gu44OU44O844K555So44Gu5LiA5pmC55qE44Gq44Os44Oz44OA44Op44O844KS5L2c5oiQXG4gICAgICAgIGNvbnN0IHRlbXBSZW5kZXJlciA9IG5ldyBSZW5kZXJlcihuZXh0UGllY2VDYW52YXMsIHRoaXMuY29sb3JzLCB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICAgIHRlbXBSZW5kZXJlci5kcmF3TWF0cml4KG1hdHJpeCwgeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkcmF3aW5nIG5leHQgcGllY2U6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DlhajkvZPjgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IGdhbWVEYXRhIC0g44Ky44O844Og44OH44O844K/XG4gICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGdhbWVEYXRhLmJvYXJkR3JpZCAtIOODnOODvOODieOBruOCsOODquODg+ODiVxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEucGllY2UgLSDnj77lnKjjga7jg5Tjg7zjgrlcbiAgICogQHBhcmFtIHtPYmplY3R9IGdhbWVEYXRhLm5leHRQaWVjZSAtIOasoeOBruODlOODvOOCuVxuICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBuZXh0UGllY2VDYW52YXMgLSDmrKHjga7jg5Tjg7zjgrnnlKjjgq3jg6Pjg7Pjg5DjgrlcbiAgICovXG4gIHJlbmRlcihnYW1lRGF0YSwgbmV4dFBpZWNlQ2FudmFzID0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XG4gICAgICBcbiAgICAgIC8vIOODoeOCpOODs+ODnOODvOODieOBruaPj+eUu1xuICAgICAgaWYgKGdhbWVEYXRhLmJvYXJkR3JpZCkge1xuICAgICAgICB0aGlzLmRyYXdCb2FyZChnYW1lRGF0YS5ib2FyZEdyaWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDnj77lnKjjga7jg5Tjg7zjgrnjga7mj4/nlLtcbiAgICAgIGlmIChnYW1lRGF0YS5waWVjZSkge1xuICAgICAgICB0aGlzLmRyYXdQaWVjZShnYW1lRGF0YS5waWVjZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIOasoeOBruODlOODvOOCueOBruaPj+eUu1xuICAgICAgaWYgKG5leHRQaWVjZUNhbnZhcyAmJiBnYW1lRGF0YS5uZXh0UGllY2UpIHtcbiAgICAgICAgdGhpcy5kcmF3TmV4dFBpZWNlKG5leHRQaWVjZUNhbnZhcywgZ2FtZURhdGEubmV4dFBpZWNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBpbiByZW5kZXIgZnVuY3Rpb246JywgZXJyb3IpO1xuICAgIH1cbiAgfVxufSIsIi8vIFNSU+OCreODg+OCr+ODh+ODvOOCv+OBruani+mAoDogW3N0YXRlXVtraWNrSW5kZXhdW3gveV1cbi8vIHN0YXRlOiDnj77lnKjjga7lm57ou6LnirbmhYsgKDAtMylcbi8vIGtpY2tJbmRleDog44Kt44OD44Kv44OG44K544OI44Gu44Kk44Oz44OH44OD44Kv44K5ICgwLTQpXG4vLyBbeC95XTog44Kt44OD44Kv44Kq44OV44K744OD44OIICh4LCB5KVxuZXhwb3J0IGNvbnN0IFNSU19LSUNLU19KTFRTWiA9IFtcbiAgLy8gMCAtPiBSICgwLT4xKVxuICBbXG4gICAgWzAsIDBdLCBbLTEsIDBdLCBbLTEsIC0xXSwgWzAsIDJdLCBbLTEsIDJdXG4gIF0sXG4gIC8vIFIgLT4gMiAoMS0+MilcbiAgW1xuICAgIFswLCAwXSwgWzEsIDBdLCBbMSwgLTFdLCBbMCwgMl0sIFsxLCAyXVxuICBdLFxuICAvLyAyIC0+IEwgKDItPjMpXG4gIFtcbiAgICBbMCwgMF0sIFsxLCAwXSwgWzEsIDFdLCBbMCwgLTJdLCBbMSwgLTJdXG4gIF0sXG4gIC8vIEwgLT4gMCAoMy0+MClcbiAgW1xuICAgIFswLCAwXSwgWy0xLCAwXSwgWy0xLCAxXSwgWzAsIC0yXSwgWy0xLCAtMl1cbiAgXVxuXTtcblxuZXhwb3J0IGNvbnN0IFNSU19LSUNLU19JID0gW1xuICAvLyAwIC0+IFIgKDAtPjEpXG4gIFtcbiAgICBbMCwgMF0sIFstMiwgMF0sIFsxLCAwXSwgWy0yLCAtMV0sIFsxLCAyXVxuICBdLFxuICAvLyBSIC0+IDIgKDEtPjIpXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFsyLCAwXSwgWy0xLCAyXSwgWzIsIC0xXVxuICBdLFxuICAvLyAyIC0+IEwgKDItPjMpXG4gIFtcbiAgICBbMCwgMF0sIFsyLCAwXSwgWy0xLCAwXSwgWzIsIDFdLCBbLTEsIC0yXVxuICBdLFxuICAvLyBMIC0+IDAgKDMtPjApXG4gIFtcbiAgICBbMCwgMF0sIFsxLCAwXSwgWy0yLCAwXSwgWzEsIC0yXSwgWy0yLCAxXVxuICBdXG5dO1xuXG5leHBvcnQgY2xhc3MgUm90YXRpb25TeXN0ZW0ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmtpY2tEYXRhID0ge1xuICAgICAgJ0knOiBTUlNfS0lDS1NfSSxcbiAgICAgICdkZWZhdWx0JzogU1JTX0tJQ0tTX0pMVFNaXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgr/jgqTjg5fjgavlv5zjgZjjgZ/jgq3jg4Pjgq/jg4fjg7zjgr/jgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBpZWNlVHlwZSAtIOODlOODvOOCueOBruOCv+OCpOODl1xuICAgKiBAcmV0dXJucyB7QXJyYXl9IOOCreODg+OCr+ODh+ODvOOCv1xuICAgKi9cbiAgZ2V0S2lja0RhdGEocGllY2VUeXBlKSB7XG4gICAgcmV0dXJuIHRoaXMua2lja0RhdGFbcGllY2VUeXBlXSB8fCB0aGlzLmtpY2tEYXRhWydkZWZhdWx0J107XG4gIH1cblxuICAvKipcbiAgICog5Zue6Lui54q25oWL44KS5qSc6Ki844GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSByb3RhdGlvblN0YXRlIC0g5Zue6Lui54q25oWLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDmnInlirnjgYvjganjgYbjgYtcbiAgICovXG4gIHZhbGlkYXRlUm90YXRpb25TdGF0ZShyb3RhdGlvblN0YXRlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiByb3RhdGlvblN0YXRlID09PSAnbnVtYmVyJyAmJiByb3RhdGlvblN0YXRlID49IDAgJiYgcm90YXRpb25TdGF0ZSA8PSAzO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCreODg+OCr+ODhuOCueODiOOBruOCquODleOCu+ODg+ODiOOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGllY2VUeXBlIC0g44OU44O844K544Gu44K/44Kk44OXXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcmlnaW5hbFJvdGF0aW9uU3RhdGUgLSDlhYPjga7lm57ou6LnirbmhYtcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpcmVjdGlvbiAtIOWbnui7ouaWueWQkSAoMTog5pmC6KiI5Zue44KKLCAtMTog5Y+N5pmC6KiI5Zue44KKKVxuICAgKiBAcmV0dXJucyB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IOOCreODg+OCr+ODhuOCueODiOOBruOCquODleOCu+ODg+ODiOmFjeWIl1xuICAgKi9cbiAgZ2V0S2lja09mZnNldHMocGllY2VUeXBlLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUsIGRpcmVjdGlvbikge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZVJvdGF0aW9uU3RhdGUob3JpZ2luYWxSb3RhdGlvblN0YXRlKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIueEoeWKueOBquWbnui7oueKtuaFizpcIiwgb3JpZ2luYWxSb3RhdGlvblN0YXRlKTtcbiAgICAgIHJldHVybiBbWzAsIDBdXTsgLy8g44OH44OV44Kp44Or44OI44Gu44Kq44OV44K744OD44OIXG4gICAgfVxuXG4gICAgY29uc3Qga2lja0RhdGEgPSB0aGlzLmdldEtpY2tEYXRhKHBpZWNlVHlwZSk7XG4gICAgY29uc3Qga2lja3MgPSBraWNrRGF0YVtvcmlnaW5hbFJvdGF0aW9uU3RhdGUgJSA0XTtcbiAgICBcbiAgICBpZiAoIWtpY2tzIHx8ICFBcnJheS5pc0FycmF5KGtpY2tzKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQga2lja3MgZGF0YTpcIiwga2lja3MsIFwiZm9yIHJvdGF0aW9uIHN0YXRlOlwiLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUpO1xuICAgICAgcmV0dXJuIFtbMCwgMF1dOyAvLyDjg4fjg5Xjgqnjg6vjg4jjga7jgqrjg5Xjgrvjg4Pjg4hcbiAgICB9XG4gICAgXG4gICAgLy8g5Y+N5pmC6KiI5Zue44KK44Gu5aC05ZCI44Gv44Kt44OD44Kv44OH44O844K/44KS5Y+N6LuiXG4gICAgY29uc3QgdGVzdFNldCA9IGRpcmVjdGlvbiA9PT0gMSBcbiAgICAgID8gWy4uLmtpY2tzXSAvLyDphY3liJfjga7jgrPjg5Tjg7zjgpLkvZzmiJBcbiAgICAgIDoga2lja3MubWFwKGtpY2sgPT4ge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShraWNrKSB8fCBraWNrLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQga2ljayBkYXRhIGZvcm1hdDpcIiwga2ljayk7XG4gICAgICAgICAgICByZXR1cm4gWzAsIDBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gWy1raWNrWzBdLCAta2lja1sxXV07XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlc3RTZXQ7XG4gIH1cblxuICAvKipcbiAgICog5Zue6Lui44KS6Kmm6KGM44GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwaWVjZSAtIOODlOODvOOCueOCquODluOCuOOCp+OCr+ODiFxuICAgKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uIC0g5Zue6Lui5pa55ZCRICgxOiDmmYLoqIjlm57jgoosIC0xOiDlj43mmYLoqIjlm57jgoopXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbGxpc2lvbkNoZWNrRm4gLSDooZ3nqoHliKTlrprjgpLooYzjgYbplqLmlbBcbiAgICogQHJldHVybnMge09iamVjdH0g5Zue6Lui57WQ5p6cIHtzdWNjZXNzOiBib29sZWFuLCBmaW5hbFBvc2l0aW9uPzoge3gsIHl9fVxuICAgKi9cbiAgYXR0ZW1wdFJvdGF0aW9uKHBpZWNlLCBkaXJlY3Rpb24sIGNvbGxpc2lvbkNoZWNrRm4pIHtcbiAgICBpZiAoIXBpZWNlIHx8ICFwaWVjZS5tYXRyaXggfHwgIUFycmF5LmlzQXJyYXkocGllY2UubWF0cml4KSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHBpZWNlIGZvciByb3RhdGlvbicpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbGxpc2lvbkNoZWNrRm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbGxpc2lvbiBjaGVjayBmdW5jdGlvbiBpcyByZXF1aXJlZCcpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8g5YWD44Gu54q25oWL44KS5L+d5a2YXG4gICAgICBjb25zdCBvcmlnaW5hbFBvcyA9IHsgLi4ucGllY2UucG9zIH07XG4gICAgICBjb25zdCBvcmlnaW5hbE1hdHJpeCA9IHBpZWNlLm1hdHJpeC5tYXAocm93ID0+IFxuICAgICAgICBBcnJheS5pc0FycmF5KHJvdykgPyBbLi4ucm93XSA6IFtdXG4gICAgICApO1xuICAgICAgY29uc3Qgb3JpZ2luYWxSb3RhdGlvblN0YXRlID0gcGllY2Uucm90YXRpb25TdGF0ZTtcbiAgICAgIFxuICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlUm90YXRpb25TdGF0ZShvcmlnaW5hbFJvdGF0aW9uU3RhdGUpKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgICB9XG5cbiAgICAgIC8vIOODlOODvOOCueOCkuWbnui7ou+8iOWbnui7oueKtuaFi+OBruabtOaWsOOBr1BpZWNlLnJvdGF0ZeWGheOBp+ihjOOBhu+8iVxuICAgICAgcGllY2Uucm90YXRlKGRpcmVjdGlvbik7XG5cbiAgICAgIC8vIOOCreODg+OCr+ODhuOCueODiOOCkuWun+ihjFxuICAgICAgY29uc3Qga2lja09mZnNldHMgPSB0aGlzLmdldEtpY2tPZmZzZXRzKHBpZWNlLnR5cGUsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSwgZGlyZWN0aW9uKTtcbiAgICAgIFxuICAgICAgZm9yIChjb25zdCBbb2Zmc2V0WCwgb2Zmc2V0WV0gb2Yga2lja09mZnNldHMpIHtcbiAgICAgICAgcGllY2UucG9zLnggKz0gb2Zmc2V0WDtcbiAgICAgICAgcGllY2UucG9zLnkgKz0gb2Zmc2V0WTtcblxuICAgICAgICBpZiAoIWNvbGxpc2lvbkNoZWNrRm4oKSkge1xuICAgICAgICAgIC8vIOihneeqgeOBjOOBquOBkeOCjOOBsOWbnui7ouaIkOWKn1xuICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGZpbmFsUG9zaXRpb246IHsgLi4ucGllY2UucG9zIH0gfTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g6KGd56qB44GZ44KL5aC05ZCI44Gv5L2N572u44KS5oi744GX44Gm5qyh44Gu44OG44K544OI44KS6Kmm44GZXG4gICAgICAgIHBpZWNlLnBvcy54IC09IG9mZnNldFg7XG4gICAgICAgIHBpZWNlLnBvcy55IC09IG9mZnNldFk7XG4gICAgICB9XG5cbiAgICAgIC8vIOWFqOOBpuOBruODhuOCueODiOOBp+ihneeqgeOBmeOCi+WgtOWQiOOAgeWFg+OBrueKtuaFi+OBq+aIu+OBmVxuICAgICAgcGllY2UubWF0cml4ID0gb3JpZ2luYWxNYXRyaXg7XG4gICAgICBwaWVjZS5yb3RhdGlvblN0YXRlID0gb3JpZ2luYWxSb3RhdGlvblN0YXRlO1xuICAgICAgcGllY2UucG9zID0geyAuLi5vcmlnaW5hbFBvcyB9O1xuICAgICAgXG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgcm90YXRpb24gYXR0ZW1wdDonLCBlcnJvcik7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTUlPjg4fjg7zjgr/jgpLmpJzoqLzjgZnjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOODh+ODvOOCv+OBjOacieWKueOBi+OBqeOBhuOBi1xuICAgKi9cbiAgdmFsaWRhdGVTUlNEYXRhKCkge1xuICAgIGNvbnN0IHJlcXVpcmVkU3RhdGVzID0gNDtcbiAgICBjb25zdCByZXF1aXJlZEtpY2tzID0gNTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IFtwaWVjZVR5cGUsIGtpY2tEYXRhXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmtpY2tEYXRhKSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2tEYXRhKSB8fCBraWNrRGF0YS5sZW5ndGggIT09IHJlcXVpcmVkU3RhdGVzKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQga2ljayBkYXRhIHN0cnVjdHVyZSBmb3IgJHtwaWVjZVR5cGV9OiBleHBlY3RlZCAke3JlcXVpcmVkU3RhdGVzfSBzdGF0ZXNgKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICBmb3IgKGxldCBzdGF0ZSA9IDA7IHN0YXRlIDwga2lja0RhdGEubGVuZ3RoOyBzdGF0ZSsrKSB7XG4gICAgICAgIGNvbnN0IGtpY2tzID0ga2lja0RhdGFbc3RhdGVdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2lja3MpIHx8IGtpY2tzLmxlbmd0aCAhPT0gcmVxdWlyZWRLaWNrcykge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQga2lja3MgZm9yICR7cGllY2VUeXBlfSBzdGF0ZSAke3N0YXRlfTogZXhwZWN0ZWQgJHtyZXF1aXJlZEtpY2tzfSBraWNrc2ApO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQga2lja0luZGV4ID0gMDsga2lja0luZGV4IDwga2lja3MubGVuZ3RoOyBraWNrSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGtpY2sgPSBraWNrc1traWNrSW5kZXhdO1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShraWNrKSB8fCBraWNrLmxlbmd0aCAhPT0gMiB8fCBcbiAgICAgICAgICAgICAgdHlwZW9mIGtpY2tbMF0gIT09ICdudW1iZXInIHx8IHR5cGVvZiBraWNrWzFdICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBraWNrIGZvcm1hdCBmb3IgJHtwaWVjZVR5cGV9IHN0YXRlICR7c3RhdGV9IGtpY2sgJHtraWNrSW5kZXh9YCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbnui7ouOCt+OCueODhuODoOOBruaDheWgseOCkuWPluW+l+OBmeOCi1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDjgrfjgrnjg4bjg6Dmg4XloLFcbiAgICovXG4gIGdldFN5c3RlbUluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN5c3RlbTogJ1NSUyAoU3VwZXIgUm90YXRpb24gU3lzdGVtKScsXG4gICAgICBzdXBwb3J0ZWRQaWVjZXM6IE9iamVjdC5rZXlzKHRoaXMua2lja0RhdGEpLFxuICAgICAgaXNWYWxpZDogdGhpcy52YWxpZGF0ZVNSU0RhdGEoKVxuICAgIH07XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgU2NvcmVDYWxjdWxhdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8g44Op44Kk44Oz5raI5Y675pWw44Gr5b+c44GY44Gf5Z+656SO5b6X54K5XG4gICAgdGhpcy5saW5lU2NvcmVzID0gWzAsIDQwLCAxMDAsIDMwMCwgMTIwMF07IC8vIDAtNOODqeOCpOODs+a2iOOBl+OBn+OBqOOBjeOBruWfuuekjuW+l+eCuVxuICAgIFxuICAgIC8vIOODrOODmeODq+OCouODg+ODl+OBq+W/heimgeOBquODqeOCpOODs+aVsFxuICAgIHRoaXMubGluZXNQZXJMZXZlbCA9IDEwO1xuICAgIFxuICAgIC8vIOOCveODleODiOODieODreODg+ODl+OBruODnOODvOODiuOCuVxuICAgIHRoaXMuc29mdERyb3BCb251cyA9IDE7XG4gICAgXG4gICAgLy8g44OP44O844OJ44OJ44Ot44OD44OX44Gu44Oc44O844OK44K577yI6Led6Zui44GC44Gf44KK77yJXG4gICAgdGhpcy5oYXJkRHJvcEJvbnVzID0gMjtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njgqTjg7PmtojljrvjgavjgojjgovjgrnjgrPjgqLjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKiBAcGFyYW0ge251bWJlcn0gbGV2ZWwgLSDnj77lnKjjga7jg6zjg5njg6tcbiAgICogQHJldHVybnMge251bWJlcn0g6KiI566X44GV44KM44Gf44K544Kz44KiXG4gICAqL1xuICBjYWxjdWxhdGVMaW5lU2NvcmUobGluZXNDbGVhcmVkLCBsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGluZXNDbGVhcmVkICE9PSAnbnVtYmVyJyB8fCBsaW5lc0NsZWFyZWQgPCAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGluZXNDbGVhcmVkIHZhbHVlOicsIGxpbmVzQ2xlYXJlZCk7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBsZXZlbCAhPT0gJ251bWJlcicgfHwgbGV2ZWwgPCAxKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgbGV2ZWwgdmFsdWU6JywgbGV2ZWwpO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoMCwgTWF0aC5mbG9vcihsaW5lc0NsZWFyZWQpKSwgdGhpcy5saW5lU2NvcmVzLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiB0aGlzLmxpbmVTY29yZXNbaW5kZXhdICogbGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICog44K944OV44OI44OJ44Ot44OD44OX44Gu44K544Kz44Ki44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcm9wRGlzdGFuY2UgLSDjg4njg63jg4Pjg5fjgZfjgZ/ot53pm6JcbiAgICogQHJldHVybnMge251bWJlcn0g44K944OV44OI44OJ44Ot44OD44OX44K544Kz44KiXG4gICAqL1xuICBjYWxjdWxhdGVTb2Z0RHJvcFNjb3JlKGRyb3BEaXN0YW5jZSkge1xuICAgIGlmICh0eXBlb2YgZHJvcERpc3RhbmNlICE9PSAnbnVtYmVyJyB8fCBkcm9wRGlzdGFuY2UgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGRyb3BEaXN0YW5jZSAqIHRoaXMuc29mdERyb3BCb251cztcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4/jg7zjg4njg4njg63jg4Pjg5fjga7jgrnjgrPjgqLjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyb3BEaXN0YW5jZSAtIOODieODreODg+ODl+OBl+OBn+i3nembolxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDjg4/jg7zjg4njg4njg63jg4Pjg5fjgrnjgrPjgqJcbiAgICovXG4gIGNhbGN1bGF0ZUhhcmREcm9wU2NvcmUoZHJvcERpc3RhbmNlKSB7XG4gICAgaWYgKHR5cGVvZiBkcm9wRGlzdGFuY2UgIT09ICdudW1iZXInIHx8IGRyb3BEaXN0YW5jZSA8IDApIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZHJvcERpc3RhbmNlICogdGhpcy5oYXJkRHJvcEJvbnVzO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODmeODq+OCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWxMaW5lcyAtIOe3j+ODqeOCpOODs+aVsFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDoqIjnrpfjgZXjgozjgZ/jg6zjg5njg6tcbiAgICovXG4gIGNhbGN1bGF0ZUxldmVsKHRvdGFsTGluZXMpIHtcbiAgICBpZiAodHlwZW9mIHRvdGFsTGluZXMgIT09ICdudW1iZXInIHx8IHRvdGFsTGluZXMgPCAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodG90YWxMaW5lcyAvIHRoaXMubGluZXNQZXJMZXZlbCkgKyAxO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODmeODq+OCouODg+ODl+OBjOW/heimgeOBi+ODgeOCp+ODg+OCr+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudExpbmVzIC0g54++5Zyo44Gu44Op44Kk44Oz5pWwXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50TGV2ZWwgLSDnj77lnKjjga7jg6zjg5njg6tcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOODrOODmeODq+OCouODg+ODl+OBjOW/heimgeOBi+OBqeOBhuOBi1xuICAgKi9cbiAgc2hvdWxkTGV2ZWxVcChjdXJyZW50TGluZXMsIGN1cnJlbnRMZXZlbCkge1xuICAgIGNvbnN0IG5ld0xldmVsID0gdGhpcy5jYWxjdWxhdGVMZXZlbChjdXJyZW50TGluZXMpO1xuICAgIHJldHVybiBuZXdMZXZlbCA+IGN1cnJlbnRMZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmrKHjga7jg6zjg5njg6vjgb7jgafjgavlv4XopoHjgarjg6njgqTjg7PmlbDjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMaW5lcyAtIOePvuWcqOOBruODqeOCpOODs+aVsFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSDmrKHjga7jg6zjg5njg6vjgb7jgafjgavlv4XopoHjgarjg6njgqTjg7PmlbBcbiAgICovXG4gIGdldExpbmVzVW50aWxOZXh0TGV2ZWwoY3VycmVudExpbmVzKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50TGluZXMgIT09ICdudW1iZXInIHx8IGN1cnJlbnRMaW5lcyA8IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmxpbmVzUGVyTGV2ZWw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGN1cnJlbnRMZXZlbExpbmVzID0gY3VycmVudExpbmVzICUgdGhpcy5saW5lc1BlckxldmVsO1xuICAgIHJldHVybiB0aGlzLmxpbmVzUGVyTGV2ZWwgLSBjdXJyZW50TGV2ZWxMaW5lcztcbiAgfVxuXG4gIC8qKlxuICAgKiDopIflkIjjgrnjgrPjgqLjgpLoqIjnrpfjgZnjgovvvIjjg6njgqTjg7PmtojljrsgKyDjg4njg63jg4Pjg5fjg5zjg7zjg4rjgrnvvIlcbiAgICogQHBhcmFtIHtPYmplY3R9IHNjb3JlRGF0YSAtIOOCueOCs+OCouioiOeul+ODh+ODvOOCv1xuICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcmVEYXRhLmxpbmVzQ2xlYXJlZCAtIOa2iOWOu+OBl+OBn+ODqeOCpOODs+aVsFxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcmVEYXRhLmxldmVsIC0g54++5Zyo44Gu44Os44OZ44OrXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY29yZURhdGEuc29mdERyb3BEaXN0YW5jZSAtIOOCveODleODiOODieODreODg+ODl+OBrui3nembou+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcmVEYXRhLmhhcmREcm9wRGlzdGFuY2UgLSDjg4/jg7zjg4njg4njg63jg4Pjg5fjga7ot53pm6LvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICogQHJldHVybnMge09iamVjdH0g6KiI566X57WQ5p6cIHt0b3RhbFNjb3JlLCBsaW5lU2NvcmUsIHNvZnREcm9wU2NvcmUsIGhhcmREcm9wU2NvcmV9XG4gICAqL1xuICBjYWxjdWxhdGVUb3RhbFNjb3JlKHNjb3JlRGF0YSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxpbmVzQ2xlYXJlZCA9IDAsXG4gICAgICBsZXZlbCA9IDEsXG4gICAgICBzb2Z0RHJvcERpc3RhbmNlID0gMCxcbiAgICAgIGhhcmREcm9wRGlzdGFuY2UgPSAwXG4gICAgfSA9IHNjb3JlRGF0YTtcblxuICAgIGNvbnN0IGxpbmVTY29yZSA9IHRoaXMuY2FsY3VsYXRlTGluZVNjb3JlKGxpbmVzQ2xlYXJlZCwgbGV2ZWwpO1xuICAgIGNvbnN0IHNvZnREcm9wU2NvcmUgPSB0aGlzLmNhbGN1bGF0ZVNvZnREcm9wU2NvcmUoc29mdERyb3BEaXN0YW5jZSk7XG4gICAgY29uc3QgaGFyZERyb3BTY29yZSA9IHRoaXMuY2FsY3VsYXRlSGFyZERyb3BTY29yZShoYXJkRHJvcERpc3RhbmNlKTtcbiAgICBjb25zdCB0b3RhbFNjb3JlID0gbGluZVNjb3JlICsgc29mdERyb3BTY29yZSArIGhhcmREcm9wU2NvcmU7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG90YWxTY29yZSxcbiAgICAgIGxpbmVTY29yZSxcbiAgICAgIHNvZnREcm9wU2NvcmUsXG4gICAgICBoYXJkRHJvcFNjb3JlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLoqIjnrpfjga7oqK3lrprjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIOaWsOOBl+OBhOioreWumlxuICAgKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGNvbmZpZy5saW5lU2NvcmVzIC0g44Op44Kk44Oz5raI5Y6744K544Kz44Ki6YWN5YiX77yI44Kq44OX44K344On44Oz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcubGluZXNQZXJMZXZlbCAtIOODrOODmeODq+OBguOBn+OCiuOBruODqeOCpOODs+aVsO+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLnNvZnREcm9wQm9udXMgLSDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjg5zjg7zjg4rjgrnvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5oYXJkRHJvcEJvbnVzIC0g44OP44O844OJ44OJ44Ot44OD44OX44Oc44O844OK44K577yI44Kq44OX44K344On44Oz77yJXG4gICAqL1xuICB1cGRhdGVDb25maWcoY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy5saW5lU2NvcmVzICYmIEFycmF5LmlzQXJyYXkoY29uZmlnLmxpbmVTY29yZXMpKSB7XG4gICAgICB0aGlzLmxpbmVTY29yZXMgPSBbLi4uY29uZmlnLmxpbmVTY29yZXNdO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5saW5lc1BlckxldmVsID09PSAnbnVtYmVyJyAmJiBjb25maWcubGluZXNQZXJMZXZlbCA+IDApIHtcbiAgICAgIHRoaXMubGluZXNQZXJMZXZlbCA9IGNvbmZpZy5saW5lc1BlckxldmVsO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5zb2Z0RHJvcEJvbnVzID09PSAnbnVtYmVyJyAmJiBjb25maWcuc29mdERyb3BCb251cyA+PSAwKSB7XG4gICAgICB0aGlzLnNvZnREcm9wQm9udXMgPSBjb25maWcuc29mdERyb3BCb251cztcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjb25maWcuaGFyZERyb3BCb251cyA9PT0gJ251bWJlcicgJiYgY29uZmlnLmhhcmREcm9wQm9udXMgPj0gMCkge1xuICAgICAgdGhpcy5oYXJkRHJvcEJvbnVzID0gY29uZmlnLmhhcmREcm9wQm9udXM7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOePvuWcqOOBruioreWumuOCkuWPluW+l+OBmeOCi1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDnj77lnKjjga7oqK3lrppcbiAgICovXG4gIGdldENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZVNjb3JlczogWy4uLnRoaXMubGluZVNjb3Jlc10sXG4gICAgICBsaW5lc1BlckxldmVsOiB0aGlzLmxpbmVzUGVyTGV2ZWwsXG4gICAgICBzb2Z0RHJvcEJvbnVzOiB0aGlzLnNvZnREcm9wQm9udXMsXG4gICAgICBoYXJkRHJvcEJvbnVzOiB0aGlzLmhhcmREcm9wQm9udXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOOCueOCs+OCouWxpeattOOCkueuoeeQhuOBmeOCi+OBn+OCgeOBruODmOODq+ODkeODvFxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudFNjb3JlIC0g54++5Zyo44Gu44K544Kz44KiXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdTY29yZSAtIOaWsOOBl+OBhOOCueOCs+OColxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDjgrnjgrPjgqLmm7TmlrDmg4XloLEge3ByZXZpb3VzU2NvcmUsIG5ld1Njb3JlLCBpbmNyZWFzZX1cbiAgICovXG4gIGNyZWF0ZVNjb3JlVXBkYXRlKGN1cnJlbnRTY29yZSwgbmV3U2NvcmUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJldmlvdXNTY29yZTogY3VycmVudFNjb3JlLFxuICAgICAgbmV3U2NvcmU6IGN1cnJlbnRTY29yZSArIG5ld1Njb3JlLFxuICAgICAgaW5jcmVhc2U6IG5ld1Njb3JlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg5njg6vliKXjga7pm6PmmJPluqbmg4XloLHjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsIC0g44Os44OZ44OrXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOmbo+aYk+W6puaDheWgsVxuICAgKi9cbiAgZ2V0TGV2ZWxJbmZvKGxldmVsKSB7XG4gICAgaWYgKHR5cGVvZiBsZXZlbCAhPT0gJ251bWJlcicgfHwgbGV2ZWwgPCAxKSB7XG4gICAgICBsZXZlbCA9IDE7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB7XG4gICAgICBsZXZlbCxcbiAgICAgIHJlcXVpcmVkTGluZXM6IGxldmVsICogdGhpcy5saW5lc1BlckxldmVsLFxuICAgICAgc2NvcmVNdWx0aXBsaWVyOiBsZXZlbCxcbiAgICAgIG5leHRMZXZlbEF0OiAobGV2ZWwgKyAxKSAqIHRoaXMubGluZXNQZXJMZXZlbFxuICAgIH07XG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgR2FtZVN0YXRlTWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHMpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3R4OiBudWxsLFxuICAgICAgY2FudmFzOiBudWxsLFxuICAgICAgYm9hcmQ6IFtdLFxuICAgICAgUk9XUzogcm93cyxcbiAgICAgIENPTFM6IGNvbHMsXG4gICAgICBwaWVjZTogbnVsbCxcbiAgICAgIG5leHRQaWVjZTogbnVsbCxcbiAgICAgIHNjb3JlOiAwLFxuICAgICAgbGluZXM6IDAsXG4gICAgICBsZXZlbDogMSxcbiAgICAgIGRyb3BDb3VudGVyOiAwLFxuICAgICAgZHJvcEludGVydmFsOiAxMDAwLFxuICAgICAgbGFzdFRpbWU6IDAsXG4gICAgICBnYW1lTG9vcElkOiBudWxsLFxuICAgICAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAga2V5czoge30sXG4gICAgICBpc1NvZnREcm9wOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog54q25oWL44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOePvuWcqOOBrueKtuaFi1xuICAgKi9cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5zdGF0ZSB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOeJueWumuOBrueKtuaFi+WApOOCkuWPluW+l+OBmeOCi1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g5Y+W5b6X44GZ44KL54q25oWL44Gu44Kt44O8XG4gICAqIEByZXR1cm5zIHsqfSDnirbmhYvlgKRcbiAgICovXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIOeJueWumuOBrueKtuaFi+WApOOCkuioreWumuOBmeOCi1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0g6Kit5a6a44GZ44KL54q25oWL44Gu44Kt44O8XG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgLSDoqK3lrprjgZnjgovlgKRcbiAgICovXG4gIHNldChrZXksIHZhbHVlKSB7XG4gICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICog6KSH5pWw44Gu54q25oWL5YCk44KS5LiA5bqm44Gr6Kit5a6a44GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGVzIC0g5pu05paw44GZ44KL54q25oWL44Gu44Kq44OW44K444Kn44Kv44OIXG4gICAqL1xuICB1cGRhdGUodXBkYXRlcykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgdXBkYXRlcyk7XG4gIH1cblxuICAvKipcbiAgICog44Oc44O844OJ44KS5Yid5pyf5YyW44GZ44KLXG4gICAqL1xuICBpbml0Qm9hcmQoKSB7XG4gICAgdGhpcy5zdGF0ZS5ib2FyZCA9IEFycmF5KHRoaXMuc3RhdGUuUk9XUykuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkodGhpcy5zdGF0ZS5DT0xTKS5maWxsKDApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DnirbmhYvjgpLjg6rjgrvjg4Pjg4jjgZnjgotcbiAgICovXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc3RhdGUuc2NvcmUgPSAwO1xuICAgIHRoaXMuc3RhdGUubGluZXMgPSAwO1xuICAgIHRoaXMuc3RhdGUubGV2ZWwgPSAxO1xuICAgIHRoaXMuc3RhdGUuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5kcm9wQ291bnRlciA9IDA7XG4gICAgdGhpcy5zdGF0ZS5kcm9wSW50ZXJ2YWwgPSAxMDAwO1xuICAgIHRoaXMuc3RhdGUubGFzdFRpbWUgPSAwO1xuICAgIHRoaXMuc3RhdGUuaXNTb2Z0RHJvcCA9IGZhbHNlO1xuICAgIFxuICAgIGlmICh0aGlzLnN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgICB0aGlzLnN0YXRlLmdhbWVMb29wSWQgPSBudWxsO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLmluaXRCb2FyZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOOBruWfuuacrOaDheWgseOCkuWQjOacn+OBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZUluc3RhbmNlIC0g44Ky44O844Og44Kk44Oz44K544K/44Oz44K5XG4gICAqL1xuICBzeW5jV2l0aEdhbWUoZ2FtZUluc3RhbmNlKSB7XG4gICAgaWYgKCFnYW1lSW5zdGFuY2UpIHJldHVybjtcbiAgICBcbiAgICB0aGlzLnN0YXRlLnNjb3JlID0gZ2FtZUluc3RhbmNlLnNjb3JlIHx8IDA7XG4gICAgdGhpcy5zdGF0ZS5saW5lcyA9IGdhbWVJbnN0YW5jZS5saW5lcyB8fCAwO1xuICAgIHRoaXMuc3RhdGUubGV2ZWwgPSBnYW1lSW5zdGFuY2UubGV2ZWwgfHwgMTtcbiAgICB0aGlzLnN0YXRlLmlzR2FtZU92ZXIgPSBnYW1lSW5zdGFuY2UuaXNHYW1lT3ZlciB8fCBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnBpZWNlID0gZ2FtZUluc3RhbmNlLnBpZWNlIHx8IG51bGw7XG4gICAgdGhpcy5zdGF0ZS5uZXh0UGllY2UgPSBnYW1lSW5zdGFuY2UubmV4dFBpZWNlIHx8IG51bGw7XG4gICAgXG4gICAgaWYgKGdhbWVJbnN0YW5jZS5ib2FyZCAmJiBnYW1lSW5zdGFuY2UuYm9hcmQuZ3JpZCkge1xuICAgICAgdGhpcy5zdGF0ZS5ib2FyZCA9IGdhbWVJbnN0YW5jZS5ib2FyZC5ncmlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgq3jg7zjga7nirbmhYvjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOOCreODvOWQjVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZXNzZWQgLSDmirzjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICovXG4gIHVwZGF0ZUtleVN0YXRlKGtleSwgcHJlc3NlZCkge1xuICAgIHRoaXMuc3RhdGUua2V5c1trZXldID0gcHJlc3NlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6Djg6vjg7zjg5dJROOCkuioreWumuOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSDjgrLjg7zjg6Djg6vjg7zjg5dJRFxuICAgKi9cbiAgc2V0R2FtZUxvb3BJZChpZCkge1xuICAgIHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCA9IGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOODq+ODvOODl+OCkuWBnOatouOBmeOCi1xuICAgKi9cbiAgc3RvcEdhbWVMb29wKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgICB0aGlzLnN0YXRlLmdhbWVMb29wSWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DjgYzlrp/ooYzkuK3jgYvjganjgYbjgYvjgpLliKTlrprjgZnjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOWun+ihjOS4reOBi+OBqeOBhuOBi1xuICAgKi9cbiAgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5pc0dhbWVPdmVyICYmICF0aGlzLnN0YXRlLnBhdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DjgpLkuIDmmYLlgZzmraIv5YaN6ZaL44GZ44KLXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkIC0g5LiA5pmC5YGc5q2i44GZ44KL44GL44Gp44GG44GLXG4gICAqL1xuICBzZXRQYXVzZWQocGF1c2VkKSB7XG4gICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSBwYXVzZWQ7XG4gIH1cblxuICAvKipcbiAgICog44OJ44Ot44OD44OX6ZaT6ZqU44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbCAtIOaWsOOBl+OBhOODieODreODg+ODl+mWk+malFxuICAgKi9cbiAgdXBkYXRlRHJvcEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5kcm9wSW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjga7nirbmhYvjgpLoqK3lrprjgZnjgotcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NvZnREcm9wIC0g44K944OV44OI44OJ44Ot44OD44OX5Lit44GL44Gp44GG44GLXG4gICAqL1xuICBzZXRTb2Z0RHJvcChpc1NvZnREcm9wKSB7XG4gICAgdGhpcy5zdGF0ZS5pc1NvZnREcm9wID0gaXNTb2Z0RHJvcDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg5Djg4PjgrDnlKg6IOePvuWcqOOBrueKtuaFi+OCkuODreOCsOOBq+WHuuWKm+OBmeOCi1xuICAgKi9cbiAgbG9nU3RhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgR2FtZSBTdGF0ZTonLCB7XG4gICAgICBzY29yZTogdGhpcy5zdGF0ZS5zY29yZSxcbiAgICAgIGxpbmVzOiB0aGlzLnN0YXRlLmxpbmVzLFxuICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICBpc0dhbWVPdmVyOiB0aGlzLnN0YXRlLmlzR2FtZU92ZXIsXG4gICAgICBwYXVzZWQ6IHRoaXMuc3RhdGUucGF1c2VkLFxuICAgICAgcGllY2U6IHRoaXMuc3RhdGUucGllY2UsXG4gICAgICBuZXh0UGllY2U6IHRoaXMuc3RhdGUubmV4dFBpZWNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOeKtuaFi+OBruaknOiovOOCkuihjOOBhlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g54q25oWL44GM5pyJ5Yq544GL44Gp44GG44GLXG4gICAqL1xuICB2YWxpZGF0ZVN0YXRlKCkge1xuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gWydzY29yZScsICdsaW5lcycsICdsZXZlbCcsICdST1dTJywgJ0NPTFMnXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHJlcXVpcmVkRmllbGRzKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGVbZmllbGRdICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgc3RhdGUgZmllbGQ6ICR7ZmllbGR9YCwgdGhpcy5zdGF0ZVtmaWVsZF0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN0YXRlLmJvYXJkKSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGJvYXJkIHN0YXRlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkge1xuICBjb25zdHJ1Y3RvcihzdGF0ZSwgYWN0aW9ucykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGNvbnN0IHsgc3RhdGUsIGFjdGlvbnMgfSA9IHRoaXM7XG4gICAgaWYgKHN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgICBcbiAgICAvLyDkuIvjgq3jg7zku6XlpJbjga/jgq3jg7zjg6rjg5Tjg7zjg4jjgpLnhKHoppZcbiAgICBpZiAoZXZlbnQucmVwZWF0ICYmIGV2ZW50LmtleSAhPT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDjgq3jg7zjgYzjgZnjgafjgavmirzjgZXjgozjgabjgYTjgovloLTlkIjjga/lh6bnkIbjgZfjgarjgYRcbiAgICBpZiAoc3RhdGUua2V5c1tldmVudC5rZXldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0YXRlLmtleXNbZXZlbnQua2V5XSA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgYWN0aW9ucy5tb3ZlUGllY2UoLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBhY3Rpb25zLnN0YXJ0U29mdERyb3AoKTtcbiAgICAgICAgYWN0aW9ucy5kcm9wUGllY2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgYWN0aW9ucy5yb3RhdGVQaWVjZSgxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcgJzpcbiAgICAgICAgLy8g44OP44O844OJ44OJ44Ot44OD44OXOiDjg5Tjg7zjgrnjgYznnYDlnLDjgZnjgovjgb7jgafpgKPntprjgafokL3jgajjgZlcbiAgICAgICAgaWYgKHN0YXRlLnBpZWNlICYmIHN0YXRlLnBpZWNlLnBvcyAmJiB0eXBlb2Ygc3RhdGUucGllY2UucG9zLnkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgbGV0IGRyb3BDb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgbWF4RHJvcHMgPSBNYXRoLm1pbihzdGF0ZS5ST1dTIHx8IDIwLCAxMDApOyAvLyDjgojjgorlronlhajjgarkuIrpmZDoqK3lrppcbiAgICAgICAgICB3aGlsZSAoZHJvcENvdW50IDwgbWF4RHJvcHMgJiYgIXN0YXRlLmlzR2FtZU92ZXIgJiYgc3RhdGUucGllY2UpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRZID0gc3RhdGUucGllY2UucG9zLnk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBjb25zdCBkcm9wcGVkID0gYWN0aW9ucy5kcm9wUGllY2UoKTtcbiAgICAgICAgICAgICAgaWYgKCFkcm9wcGVkIHx8ICFzdGF0ZS5waWVjZSB8fCBzdGF0ZS5waWVjZS5wb3MueSA9PT0gY3VycmVudFkpIHtcbiAgICAgICAgICAgICAgICAvLyDjg5Tjg7zjgrnjgYzokL3jgaHjgarjgYvjgaPjgZ/jgIHjgb7jgZ/jga/kvY3nva7jgYzlpInjgo/jgonjgarjgYvjgaPjgZ/loLTlkIjjga/ntYLkuoZcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkcm9wQ291bnQrKztcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBoYXJkIGRyb3A6JywgZXJyb3IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyJzpcbiAgICAgIGNhc2UgJ1InOlxuICAgICAgICBhY3Rpb25zLnJlc2V0R2FtZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBvbktleVVwKGV2ZW50KSB7XG4gICAgdGhpcy5zdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSBmYWxzZTtcbiAgICAvLyDkuIvjgq3jg7zjgYzpm6LjgZXjgozjgZ/jgonjg4njg63jg4Pjg5fplpPpmpTjgpLlhYPjgavmiLvjgZlcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgdGhpcy5hY3Rpb25zLnN0b3BTb2Z0RHJvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwRXZlbnRMaXN0ZW5lcnMoa2V5RG93bkhhbmRsZXIgPSB0aGlzLm9uS2V5RG93biwga2V5VXBIYW5kbGVyID0gdGhpcy5vbktleVVwKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICog44OG44OI44Oq44K544Ky44O844Og44Gu44Ko44Oz44OI44Oq44O844Od44Kk44Oz44OIXG4gKi9cblxuLy8g44K544K/44Kk44Or44K344O844OI44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8vIOOCsuODvOODoOODouOCuOODpeODvOODq+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vZ2FtZS5qcyc7XG5cbi8vIOODh+ODkOODg+OCsOeUqOOBruOCueOCv+OCpOODq+OCkui/veWKoFxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICNnYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuLy8g44OJ44Kt44Ol44Oh44Oz44OI44Gu6Kqt44G/6L6844G/5a6M5LqG44KS5b6F44Gj44Gm44Ky44O844Og44KS5Yid5pyf5YyWXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCDjgqTjg5njg7Pjg4jjgYznmbrngavjgZfjgb7jgZfjgZ8nKTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIC8vIOOCreODo+ODs+ODkOOCueOBrueKtuaFi+OCkueiuuiqjVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCteOCpOOCujonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K544K/44Kk44Or44K144Kk44K6OicsIGNhbnZhcy5zdHlsZS53aWR0aCwgJ3gnLCBjYW52YXMuc3R5bGUuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign44Kt44Oj44Oz44OQ44K56KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgfVxuICAgIC8vIOOCsuODvOODoOOCkumWi+Wni1xuICAgIGluaXQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIGFsZXJ0KCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ/jgILjgrPjg7Pjgr3jg7zjg6vjgpLnorroqo3jgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgfVxufSk7XG5cbi8vIOmWi+eZuueUqDog44Kw44Ot44O844OQ44Or5ZCN5YmN56m66ZaT44Gr44Ko44Kv44K544Od44O844OIXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgd2luZG93LnRldHJpcyA9IHdpbmRvdy50ZXRyaXMgfHwge307XG4gIHdpbmRvdy50ZXRyaXMuaW5pdCA9IGluaXQ7XG59XG4iXSwibmFtZXMiOlsiR0FNRV9DT05TVEFOVFMiLCJDT0xTIiwiUk9XUyIsIkJMT0NLX1NJWkUiLCJTQ09SRV9UQUJMRSIsIlNIQVBFUyIsIkNPTE9SUyIsIkdBTUVfU1RBVEVTIiwiSU5JVCIsIlBMQVlJTkciLCJQQVVTRUQiLCJHQU1FX09WRVIiLCJCb2FyZCIsImNvbHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJyb3dzIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2xlYXIiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIl90aGlzIiwiZ3JpZCIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJpc0luc2lkZSIsIngiLCJ5IiwiaXNFbXB0eSIsInNldENlbGwiLCJnZXRDZWxsIiwibWVyZ2UiLCJwaWVjZSIsIm1hdHJpeCIsInBvcyIsImNsZWFyTGluZXMiLCJpc0FycmF5IiwiY29uc29sZSIsImVycm9yIiwiY2xlYXJlZCIsIm5ld0dyaWQiLCJyb3ciLCJ3YXJuIiwiY29uY2F0IiwiZXZlcnkiLCJjZWxsIiwicHVzaCIsIl90b0NvbnN1bWFibGVBcnJheSIsInVuc2hpZnQiLCJQaWVjZSIsIlJvdGF0aW9uU3lzdGVtIiwiU2NvcmVDYWxjdWxhdG9yIiwiVEVUUk9NSU5PX01BUCIsIkkiLCJKIiwiTCIsIk8iLCJTIiwiVCIsIloiLCJHYW1lIiwidGV0cm9taW5vcyIsImJvYXJkIiwibmV4dFBpZWNlIiwibGV2ZWxTcGVlZHMiLCJsaW5lc1BlckxldmVsIiwiZHJvcEludGVydmFsIiwiZ2V0RHJvcEludGVydmFsIiwiaXNTb2Z0RHJvcCIsInJvdGF0aW9uU3lzdGVtIiwic2NvcmVDYWxjdWxhdG9yIiwicmVzZXQiLCJsZXZlbEluZGV4IiwiTWF0aCIsIm1pbiIsImxldmVsIiwic3RhcnRTb2Z0RHJvcCIsInN0b3BTb2Z0RHJvcCIsImNyZWF0ZVBpZWNlIiwiaW5kZXgiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImZsb29yIiwicmFuZG9tIiwibGluZXMiLCJzY29yZSIsImlzR2FtZU92ZXIiLCJwYXVzZWQiLCJjaGVja0xldmVsVXAiLCJzaG91bGRMZXZlbFVwIiwiY2FsY3VsYXRlTGV2ZWwiLCJtb3ZlUGllY2UiLCJkeCIsIm1vdmUiLCJoYXNDb2xsaXNpb24iLCJfdGhpcyRwaWVjZSIsImJvYXJkWCIsImJvYXJkWSIsInNwYXduUGllY2UiLCJkcm9wUGllY2UiLCJtZXJnZVBpZWNlIiwibGluZXNDbGVhcmVkIiwiY2FsY3VsYXRlU2NvcmUiLCJfdGhpcyRwaWVjZTIiLCJjYWxjdWxhdGVMaW5lU2NvcmUiLCJ1cGRhdGVTY29yZSIsInJvdGF0ZVBpZWNlIiwiZGlyIiwicmVzdWx0IiwiYXR0ZW1wdFJvdGF0aW9uIiwic3VjY2VzcyIsIl9vYmplY3RTcHJlYWQiLCJyb3RhdGlvblN0YXRlIiwiZHkiLCJyb3RhdGUiLCJOIiwiTSIsInJvdGF0ZWQiLCJfIiwiR2FtZVVJIiwiUmVuZGVyZXIiLCJHYW1lU3RhdGVNYW5hZ2VyIiwidGV0cmlzR2FtZSIsImV2ZW50TWFuYWdlciIsIkV2ZW50VGFyZ2V0IiwiZ2FtZVN0YXRlTWFuYWdlciIsInJlbmRlcmVyIiwiZ2FtZVN0YXRlIiwiUHJveHkiLCJzdGF0ZSIsImdldCIsInRhcmdldCIsInByb3AiLCJpbml0Qm9hcmQiLCJsb2dTdGF0ZSIsInNldCIsImRyYXciLCJnZXRTdGF0ZSIsImdhbWVEYXRhIiwiYm9hcmRHcmlkIiwibmV4dFBpZWNlQ2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInVwZGF0ZVVJIiwidXBkYXRlU2NvcmVEaXNwbGF5IiwidXBkYXRlTGluZXNEaXNwbGF5IiwidXBkYXRlTGV2ZWxEaXNwbGF5IiwiaXNOYU4iLCJzY29yZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInRvU3RyaW5nIiwibGluZXNFbGVtZW50IiwibGV2ZWxFbGVtZW50IiwidXBkYXRlR2FtZVN0YXRlIiwic3luY1dpdGhHYW1lIiwicGxheWVyRHJvcCIsImlzUnVubmluZyIsImRyb3BwZWQiLCJhbGVydCIsInN0b3BHYW1lTG9vcCIsInBsYXllck1vdmUiLCJwbGF5ZXJSb3RhdGUiLCJ1cGRhdGUiLCJ0aW1lIiwiZ2FtZUxvb3BJZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldEdhbWVMb29wSWQiLCJsYXN0VGltZSIsImRlbHRhVGltZSIsImRyb3BDb3VudGVyIiwibmV3RHJvcENvdW50ZXIiLCJzZXRQYXVzZWQiLCJkcmF3RXJyb3IiLCJnYW1lVUkiLCJyZXNldEdhbWUiLCJsb2ciLCJzZXR1cEV2ZW50TGlzdGVuZXJzIiwib25LZXlEb3duIiwiYmluZCIsIm9uS2V5VXAiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJpbml0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVLZXlVcCIsImluaXRHYW1lIiwic2V0VGV0cmlzR2FtZSIsIm5ld0dhbWUiLCJleHBvcnRzIiwiY29sb3JzIiwiYmxvY2tTaXplIiwiRXJyb3IiLCJkcmF3TWF0cml4Iiwib2Zmc2V0IiwiaGFzQ3R4IiwiaGFzTWF0cml4IiwiaGFzT2Zmc2V0IiwiaGFzQ29sb3JzIiwiaGFzQmxvY2tTaXplIiwiZm9yRWFjaCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiY2xlYXJDYW52YXMiLCJjbGVhclJlY3QiLCJkcmF3Qm9hcmQiLCJkcmF3UGllY2UiLCJkcmF3TmV4dFBpZWNlIiwibmV4dEN0eCIsInRlbXBSZW5kZXJlciIsIlNSU19LSUNLU19KTFRTWiIsIlNSU19LSUNLU19JIiwia2lja0RhdGEiLCJnZXRLaWNrRGF0YSIsInBpZWNlVHlwZSIsInZhbGlkYXRlUm90YXRpb25TdGF0ZSIsImdldEtpY2tPZmZzZXRzIiwib3JpZ2luYWxSb3RhdGlvblN0YXRlIiwiZGlyZWN0aW9uIiwia2lja3MiLCJ0ZXN0U2V0IiwibWFwIiwia2ljayIsImNvbGxpc2lvbkNoZWNrRm4iLCJvcmlnaW5hbFBvcyIsIm9yaWdpbmFsTWF0cml4Iiwia2lja09mZnNldHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZmluYWxQb3NpdGlvbiIsImVyciIsImUiLCJmIiwidmFsaWRhdGVTUlNEYXRhIiwicmVxdWlyZWRTdGF0ZXMiLCJyZXF1aXJlZEtpY2tzIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwia2lja0luZGV4IiwiZ2V0U3lzdGVtSW5mbyIsInN5c3RlbSIsInN1cHBvcnRlZFBpZWNlcyIsImlzVmFsaWQiLCJsaW5lU2NvcmVzIiwic29mdERyb3BCb251cyIsImhhcmREcm9wQm9udXMiLCJtYXgiLCJjYWxjdWxhdGVTb2Z0RHJvcFNjb3JlIiwiZHJvcERpc3RhbmNlIiwiY2FsY3VsYXRlSGFyZERyb3BTY29yZSIsInRvdGFsTGluZXMiLCJjdXJyZW50TGluZXMiLCJjdXJyZW50TGV2ZWwiLCJuZXdMZXZlbCIsImdldExpbmVzVW50aWxOZXh0TGV2ZWwiLCJjdXJyZW50TGV2ZWxMaW5lcyIsImNhbGN1bGF0ZVRvdGFsU2NvcmUiLCJzY29yZURhdGEiLCJfc2NvcmVEYXRhJGxpbmVzQ2xlYXIiLCJfc2NvcmVEYXRhJGxldmVsIiwiX3Njb3JlRGF0YSRzb2Z0RHJvcERpIiwic29mdERyb3BEaXN0YW5jZSIsIl9zY29yZURhdGEkaGFyZERyb3BEaSIsImhhcmREcm9wRGlzdGFuY2UiLCJsaW5lU2NvcmUiLCJzb2Z0RHJvcFNjb3JlIiwiaGFyZERyb3BTY29yZSIsInRvdGFsU2NvcmUiLCJ1cGRhdGVDb25maWciLCJjb25maWciLCJnZXRDb25maWciLCJjcmVhdGVTY29yZVVwZGF0ZSIsImN1cnJlbnRTY29yZSIsIm5ld1Njb3JlIiwicHJldmlvdXNTY29yZSIsImluY3JlYXNlIiwiZ2V0TGV2ZWxJbmZvIiwicmVxdWlyZWRMaW5lcyIsInNjb3JlTXVsdGlwbGllciIsIm5leHRMZXZlbEF0IiwidXBkYXRlcyIsImFzc2lnbiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUluc3RhbmNlIiwidXBkYXRlS2V5U3RhdGUiLCJwcmVzc2VkIiwiaWQiLCJ1cGRhdGVEcm9wSW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldFNvZnREcm9wIiwidmFsaWRhdGVTdGF0ZSIsInJlcXVpcmVkRmllbGRzIiwiX3JlcXVpcmVkRmllbGRzIiwiZmllbGQiLCJhY3Rpb25zIiwiZXZlbnQiLCJyZXBlYXQiLCJkcm9wQ291bnQiLCJtYXhEcm9wcyIsImN1cnJlbnRZIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVmYXVsdCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInRldHJpcyJdLCJzb3VyY2VSb290IjoiIn0=