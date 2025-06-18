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

    // ホールド機能
    this.heldPiece = null;
    this.canHold = true; // 現在のターンでホールドできるかどうか

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
      // ホールド機能をリセット
      this.heldPiece = null;
      this.canHold = true;
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

      // 新しいピースが生成されたらホールドを再び可能にする
      this.canHold = true;

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
    }

    /**
     * 現在のピースをホールドする
     * @returns {boolean} ホールドが成功したかどうか
     */ }, { key: "holdPiece", value:
    function holdPiece() {
      // ゲームオーバーまたは一時停止中は実行しない
      if (this.isGameOver || this.paused) return false;

      // 現在のターンで既にホールドしている場合は実行しない
      if (!this.canHold) return false;

      // 現在のピースが存在しない場合は実行しない
      if (!this.piece) return false;

      // ホールドを実行したのでこのターンはもうホールドできない
      this.canHold = false;

      if (this.heldPiece === null) {
        // ホールドエリアが空の場合：現在のピースをホールドして次のピースを現在に
        this.heldPiece = this.piece;
        this.piece = this.nextPiece;
        this.nextPiece = this.createPiece(Math.floor(Math.random() * this.tetrominos.length));
      } else {
        // ホールドエリアにピースがある場合：現在のピースとホールドピースを交換
        var temp = this.piece;
        this.piece = this.heldPiece;
        this.heldPiece = temp;
      }

      // 新しい現在のピースの位置をリセット
      if (this.piece) {
        var matrix = this.piece.matrix;
        var x = Math.floor((this.board.cols - matrix[0].length) / 2);
        var y = -matrix.length;
        this.piece.pos = { x: x, y: y };

        // ゲームオーバー判定
        var originalY = this.piece.pos.y;
        this.piece.pos.y = 0;

        if (this.hasCollision()) {
          this.isGameOver = true;
          this.piece = null;
          return false;
        } else {
          this.piece.pos.y = originalY;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxnQ0FBZ0MsT0FBTztBQUN2QztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGcUQ7QUFDckQ7QUFDQSwrQkFBK0IsZ0VBQWdCO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGK0M7QUFDL0M7QUFDQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBLHdIQUF3SCw2REFBYTtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7O0FDWCtDO0FBQy9DO0FBQ0EsY0FBYyw2REFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxZQUFZLGtFQUFrRTtBQUN0RixNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZpRDtBQUNZO0FBQ1k7QUFDdEI7QUFDbkQ7QUFDQSxTQUFTLDhEQUFjLE9BQU8sb0VBQW9CLFVBQVUsMEVBQTBCLFVBQVUsK0RBQWU7QUFDL0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDSjtBQUNzQjtBQUNsQjtBQUN2RDtBQUNBLFNBQVMsaUVBQWlCLE9BQU8sK0RBQWUsT0FBTywwRUFBMEIsT0FBTyxpRUFBaUI7QUFDekc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDbEM7QUFDQSxrQkFBa0Isc0RBQU87QUFDekI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNEQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZrQztBQUNTO0FBQzNDO0FBQ0EsVUFBVSwyREFBVztBQUNyQixxQkFBcUIsc0RBQU87QUFDNUI7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUNyRDtBQUNBO0FBQ0EscUNBQXFDLGdFQUFnQjtBQUNyRCxjQUFjO0FBQ2QsK0xBQStMLGdFQUFnQjtBQUMvTTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0EsT0FBTyw4SUFBOEk7QUFDcko7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNPLElBQU1BLGNBQWMsR0FBRztFQUM1QkMsSUFBSSxFQUFFLEVBQUUsRUFBRTtFQUNWQyxJQUFJLEVBQUUsRUFBRSxFQUFFO0VBQ1ZDLFVBQVUsRUFBRSxFQUFFLEVBQUU7RUFDaEJDLFdBQVcsRUFBRTtJQUNYLENBQUMsRUFBRSxFQUFFLEVBQUk7SUFDVCxDQUFDLEVBQUUsR0FBRyxFQUFHO0lBQ1QsQ0FBQyxFQUFFLEdBQUcsRUFBRztJQUNULENBQUMsRUFBRSxJQUFJLENBQUU7RUFDWCxDQUFDO0VBQ0RDLE1BQU0sRUFBRTtFQUNOO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNiOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDUDs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEO0VBQ0E7RUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDRDtFQUNBO0VBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1Y7O0VBQ0Q7RUFDQTtFQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWLENBQ0Y7OztFQUNEQyxNQUFNLEVB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Q0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2I7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1A7O0VBQ0RDLENBQUMsRUFBRTtFQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNWOztFQUNEQyxDQUFDLEVBQUU7RUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDVjs7RUFDREMsQ0FBQyxFQUFFO0VBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUViLENBQUM7OztBQUdNLElBQU1DLElBQUk7RUFDZixTQUFBQSxLQUFBLEVBQXFELEtBQXpDbEQsSUFBSSxHQUFB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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDNUMsQ0FDRjs7OztBQUVNLElBQU1DLFdBQVcsR0FBRztBQUN6QjtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzFDOztBQUNEO0FBQ0E7QUFDRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDMUM7O0FBQ0Q7QUFDQTtBQUNFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUMxQzs7QUFDRDtBQUNBO0FBQ0UsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQzFDLENB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QUFFTSxNQUFNLENBQUN3SSxLQUFLLENBQUN2SSxLQUFLLEVBQUUsR0FBRyxFQUFFRCxNQUFNLENBQUN3SSxLQUFLLENBQUN0SSxNQUFNLENBQUM7TUFDN0UsQ0FBQyxNQUFNO1FBQ0w5SixPQUFPLENBQUNDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztNQUNsQztJQUNGO0lBQ0E7SUFDQThKLDhDQUFJLENBQUMsQ0FBQztFQUNSLENBQUMsQ0FBQyxPQUFPOUosS0FBSyxFQUFFO0lBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7SUFDNUNvSSxLQUFLLENBQUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJMUQsSUFBc0MsRUFBRTtFQUMxQytFLE1BQU0sQ0FBQzhJLE1BQU0sR0FBRzlJLE1BQU0sQ0FBQzhJLE1BQU0sSUFBSSxDQUFDLENBQUM7RUFDbkM5SSxNQUFNLENBQUM4SSxNQUFNLENBQUN6SSxJQUFJLEdBQUdBLDBDQUFJO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb25zdGFudHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9Cb2FyZC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvY29yZS9HYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9jb3JlL1BpZWNlLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9yZW5kZXJpbmcvUmVuZGVyZXIuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3JvdGF0aW9uL1JvdGF0aW9uU3lzdGVtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9zY29yaW5nL1Njb3JlQ2FsY3VsYXRvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3RhdGUvR2FtZVN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RldHJpcy8uL3NyYy91aS9HYW1lVUkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkocik7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRob3V0SG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHtcbiAgcmV0dXJuIChyID0gdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7XG4gICAgdmFsdWU6IHQsXG4gICAgZW51bWVyYWJsZTogITAsXG4gICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB3cml0YWJsZTogITBcbiAgfSkgOiBlW3JdID0gdCwgZTtcbn1cbmV4cG9ydCB7IF9kZWZpbmVQcm9wZXJ0eSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgbnVsbCAhPSByW1N5bWJvbC5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVSZXN0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlU3ByZWFkIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5leHBvcnQgeyBfc2xpY2VkVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIOOCueOCv+OCpOODq+OBr+W+jOOBp+i/veWKoCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyDjgrLjg7zjg6Djga7lrprmlbDlrprnvqlcbmV4cG9ydCBjb25zdCBHQU1FX0NPTlNUQU5UUyA9IHtcbiAgQ09MUzogMTAsIC8vIOODleOCo+ODvOODq+ODieOBruW5he+8iOODluODreODg+OCr+aVsO+8iVxuICBST1dTOiAyMCwgLy8g44OV44Kj44O844Or44OJ44Gu6auY44GV77yI44OW44Ot44OD44Kv5pWw77yJXG4gIEJMT0NLX1NJWkU6IDIwLCAvLyAx44OW44Ot44OD44Kv44Gu44OU44Kv44K744Or44K144Kk44K6XG4gIFNDT1JFX1RBQkxFOiB7XG4gICAgMTogNDAsICAgLy8gMeihjOa2iOOBl1xuICAgIDI6IDEwMCwgIC8vIDLooYzmtojjgZdcbiAgICAzOiAzMDAsICAvLyAz6KGM5raI44GXXG4gICAgNDogMTIwMCAgLy8gNOihjOa2iOOBl++8iOODhuODiOODquOCue+8iVxuICB9LFxuICBTSEFQRVM6IFtcbiAgICAvLyBJXG4gICAgW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBPXG4gICAgW1xuICAgICAgWzIsIDJdLFxuICAgICAgWzIsIDJdXG4gICAgXSxcbiAgICAvLyBUXG4gICAgW1xuICAgICAgWzAsIDMsIDBdLFxuICAgICAgWzMsIDMsIDNdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBMXG4gICAgW1xuICAgICAgWzQsIDAsIDBdLFxuICAgICAgWzQsIDQsIDRdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBKXG4gICAgW1xuICAgICAgWzAsIDAsIDVdLFxuICAgICAgWzUsIDUsIDVdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBaXG4gICAgW1xuICAgICAgWzYsIDYsIDBdLFxuICAgICAgWzAsIDYsIDZdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXSxcbiAgICAvLyBTXG4gICAgW1xuICAgICAgWzAsIDcsIDddLFxuICAgICAgWzcsIDcsIDBdLFxuICAgICAgWzAsIDAsIDBdXG4gICAgXVxuICBdLFxuICBDT0xPUlM6IFtcbiAgICAnIzAwMDAwMCcsIC8vIDA6IOepulxuICAgICcjMDBGRkZGJywgLy8gMTogSSAo44K344Ki44OzKVxuICAgICcjRkZGRjAwJywgLy8gMjogTyAo6buE6ImyKVxuICAgICcjODAwMDgwJywgLy8gMzogVCAo57SrKVxuICAgICcjRkZBNTAwJywgLy8gNDogTCAo44Kq44Os44Oz44K4KVxuICAgICcjMDAwMEZGJywgLy8gNTogSiAo6Z2SKVxuICAgICcjRkYwMDAwJywgLy8gNjogWiAo6LWkKVxuICAgICcjMDA4MDAwJyAgLy8gNzogUyAo57eRKVxuICBdLFxuICBHQU1FX1NUQVRFUzoge1xuICAgIElOSVQ6ICdJTklUJyxcbiAgICBQTEFZSU5HOiAnUExBWUlORycsXG4gICAgUEFVU0VEOiAnUEFVU0VEJyxcbiAgICBHQU1FX09WRVI6ICdHQU1FX09WRVInXG4gIH1cbn07XG4iLCIvLyBCb2FyZOOCr+ODqeOCuVxuLy8g44OG44OI44Oq44K544Gu55uk6Z2i566h55CG44Go44Ot44K444OD44Kv44KS5ouF5b2TXG5cbmV4cG9ydCBjbGFzcyBCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKGNvbHMgPSAxMCwgcm93cyA9IDIwKSB7XG4gICAgdGhpcy5jb2xzID0gY29scztcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucm93cyB9LCAoKSA9PiBBcnJheSh0aGlzLmNvbHMpLmZpbGwoMCkpO1xuICB9XG5cbiAgaXNJbnNpZGUoeCwgeSkge1xuICAgIHJldHVybiB4ID49IDAgJiYgeCA8IHRoaXMuY29scyAmJiB5ID49IDAgJiYgeSA8IHRoaXMucm93cztcbiAgfVxuXG4gIGlzRW1wdHkoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmlzSW5zaWRlKHgsIHkpICYmIHRoaXMuZ3JpZFt5XVt4XSA9PT0gMDtcbiAgfVxuXG4gIHNldENlbGwoeCwgeSwgdmFsdWUpIHtcbiAgICBpZiAodGhpcy5pc0luc2lkZSh4LCB5KSkgdGhpcy5ncmlkW3ldW3hdID0gdmFsdWU7XG4gIH1cblxuICBnZXRDZWxsKHgsIHkpIHtcbiAgICBpZiAoIXRoaXMuaXNJbnNpZGUoeCwgeSkgfHwgIXRoaXMuZ3JpZFt5XSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdyaWRbeV1beF07XG4gIH1cblxuICBtZXJnZShwaWVjZSkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgcGllY2UubWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBpZWNlLm1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAocGllY2UubWF0cml4W3ldW3hdKSB7XG4gICAgICAgICAgdGhpcy5zZXRDZWxsKHBpZWNlLnBvcy54ICsgeCwgcGllY2UucG9zLnkgKyB5LCBwaWVjZS5tYXRyaXhbeV1beF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJMaW5lcygpIHtcbiAgICBpZiAoIXRoaXMuZ3JpZCB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmdyaWQpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIGdyaWQgc3RhdGUnKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBsZXQgY2xlYXJlZCA9IDA7XG4gICAgY29uc3QgbmV3R3JpZCA9IFtdO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ncmlkLmxlbmd0aDsgeSsrKSB7XG4gICAgICBjb25zdCByb3cgPSB0aGlzLmdyaWRbeV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgcm93IGF0IGluZGV4ICR7eX06YCwgcm93KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChyb3cuZXZlcnkoY2VsbCA9PiBjZWxsICE9PSAwKSkge1xuICAgICAgICAgIGNsZWFyZWQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdHcmlkLnB1c2goWy4uLnJvd10pOyAvLyDooYzjga7jgrPjg5Tjg7zjgpLkvZzmiJDjgZfjgablj4LnhafjgpLpgb/jgZHjgotcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByb3cgJHt5fTpgLCBlcnJvcik7XG4gICAgICAgIG5ld0dyaWQucHVzaChbLi4ucm93XSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIOWJiumZpOOBleOCjOOBn+ihjOOBruWIhuOBoOOBkeepuuOBruihjOOCkuS4iuOBq+i/veWKoFxuICAgIHdoaWxlIChuZXdHcmlkLmxlbmd0aCA8IHRoaXMucm93cykge1xuICAgICAgbmV3R3JpZC51bnNoaWZ0KEFycmF5KHRoaXMuY29scykuZmlsbCgwKSk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMuZ3JpZCA9IG5ld0dyaWQ7XG4gICAgcmV0dXJuIGNsZWFyZWQ7XG4gIH1cbn1cbiIsIi8vIEdhbWXjgq/jg6njgrlcbi8vIOOCsuODvOODoOWFqOS9k+OBrueKtuaFi+euoeeQhuOBqOmAsuihjOOCkuaLheW9k1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkLmpzJztcbmltcG9ydCB7IFBpZWNlIH0gZnJvbSAnLi9QaWVjZS5qcyc7XG5pbXBvcnQgeyBSb3RhdGlvblN5c3RlbSB9IGZyb20gJy4uL3JvdGF0aW9uL1JvdGF0aW9uU3lzdGVtLmpzJztcbmltcG9ydCB7IFNjb3JlQ2FsY3VsYXRvciB9IGZyb20gJy4uL3Njb3JpbmcvU2NvcmVDYWxjdWxhdG9yLmpzJztcblxuLy8g44OG44OI44Ot44Of44OO44Gu5b2i54q244Go6Imy44Gu44Oe44OD44OU44Oz44KwXG5jb25zdCBURVRST01JTk9fTUFQID0ge1xuICBJOiBbXG4gICAgWzAsIDAsIDAsIDBdLFxuICAgIFsxLCAxLCAxLCAxXSxcbiAgICBbMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDBdLFxuICBdLFxuICBKOiBbXG4gICAgWzIsIDAsIDBdLFxuICAgIFsyLCAyLCAyXSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG4gIEw6IFtcbiAgICBbMCwgMCwgM10sXG4gICAgWzMsIDMsIDNdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgTzogW1xuICAgIFs0LCA0XSxcbiAgICBbNCwgNF0sXG4gIF0sXG4gIFM6IFtcbiAgICBbMCwgNSwgNV0sXG4gICAgWzUsIDUsIDBdLFxuICAgIFswLCAwLCAwXSxcbiAgXSxcbiAgVDogW1xuICAgIFswLCA2LCAwXSxcbiAgICBbNiwgNiwgNl0sXG4gICAgWzAsIDAsIDBdLFxuICBdLFxuICBaOiBbXG4gICAgWzcsIDcsIDBdLFxuICAgIFswLCA3LCA3XSxcbiAgICBbMCwgMCwgMF0sXG4gIF0sXG59O1xuXG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY29scyA9IDEwLCByb3dzID0gMjAsIHRldHJvbWlub3MgPSBudWxsKSB7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZChjb2xzLCByb3dzKTtcbiAgICB0aGlzLnRldHJvbWlub3MgPSB0ZXRyb21pbm9zIHx8IFtcbiAgICAgIFtbMSwgMSwgMSwgMV1dLFxuICAgICAgW1syLCAyXSwgWzIsIDJdXSxcbiAgICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgICBbWzAsIDQsIDRdLCBbNCwgNCwgMF1dLFxuICAgICAgW1s1LCA1LCAwXSwgWzAsIDUsIDVdXSxcbiAgICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgICBbWzAsIDAsIDddLCBbNywgNywgN11dLFxuICAgIF07XG4gICAgXG4gICAgLy8g54++5Zyo44Gu44OU44O844K544Go5qyh44Gu44OU44O844K5XG4gICAgdGhpcy5waWVjZSA9IG51bGw7XG4gICAgdGhpcy5uZXh0UGllY2UgPSBudWxsO1xuICAgIFxuICAgIC8vIOODm+ODvOODq+ODieapn+iDvVxuICAgIHRoaXMuaGVsZFBpZWNlID0gbnVsbDtcbiAgICB0aGlzLmNhbkhvbGQgPSB0cnVlOyAvLyDnj77lnKjjga7jgr/jg7zjg7Pjgafjg5vjg7zjg6vjg4njgafjgY3jgovjgYvjganjgYbjgYtcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgavlv5zjgZjjgZ/jg4njg63jg4Pjg5fplpPpmpTvvIjjg5/jg6rnp5LvvIlcbiAgICB0aGlzLmxldmVsU3BlZWRzID0gW1xuICAgICAgMTAwMCwgLy8g44Os44OZ44OrMTogMS4w56eSXG4gICAgICA5MDAsICAvLyDjg6zjg5njg6syOiAwLjnnp5JcbiAgICAgIDgwMCwgIC8vIOODrOODmeODqzM6IDAuOOenklxuICAgICAgNzAwLCAgLy8g44Os44OZ44OrNDogMC4356eSXG4gICAgICA2MDAsICAvLyDjg6zjg5njg6s1OiAwLjbnp5JcbiAgICAgIDUwMCwgIC8vIOODrOODmeODqzY6IDAuNeenklxuICAgICAgNDAwLCAgLy8g44Os44OZ44OrNzogMC4056eSXG4gICAgICAzMDAsICAvLyDjg6zjg5njg6s4OiAwLjPnp5JcbiAgICAgIDIwMCwgIC8vIOODrOODmeODqzk6IDAuMuenklxuICAgICAgMTAwICAgLy8g44Os44OZ44OrMTDku6XpmY06IDAuMeenklxuICAgIF07XG4gICAgXG4gICAgLy8g44Os44OZ44Or44Ki44OD44OX44Gr5b+F6KaB44Gq44Op44Kk44Oz5pWwXG4gICAgdGhpcy5saW5lc1BlckxldmVsID0gMTA7XG4gICAgXG4gICAgLy8g44OJ44Ot44OD44OX6ZaT6ZqU6Zai6YCj44Gu5Yid5pyf5YyWXG4gICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICAgIHRoaXMuaXNTb2Z0RHJvcCA9IGZhbHNlO1xuICAgIFxuICAgIC8vIOWbnui7ouOCt+OCueODhuODoOOBqOOCueOCs+OCouioiOeul+WZqOOBruWIneacn+WMllxuICAgIHRoaXMucm90YXRpb25TeXN0ZW0gPSBuZXcgUm90YXRpb25TeXN0ZW0oKTtcbiAgICB0aGlzLnNjb3JlQ2FsY3VsYXRvciA9IG5ldyBTY29yZUNhbGN1bGF0b3IoKTtcbiAgICBcbiAgICAvLyDliJ3mnJ/ljJbmmYLjgavmnIDliJ3jga7jg5Tjg7zjgrnjgpLnlJ/miJBcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44Os44OZ44Or44Gr5b+c44GY44Gf44OJ44Ot44OD44OX6ZaT6ZqU44KS5Y+W5b6X44GZ44KLXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOODieODreODg+ODl+mWk+malO+8iOODn+ODquenku+8iVxuICAgKi9cbiAgZ2V0RHJvcEludGVydmFsKCkge1xuICAgIGNvbnN0IGxldmVsSW5kZXggPSBNYXRoLm1pbih0aGlzLmxldmVsIC0gMSwgdGhpcy5sZXZlbFNwZWVkcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGhpcy5sZXZlbFNwZWVkc1tsZXZlbEluZGV4XTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOS4i+OCreODvOOBjOaKvOOBleOCjOOBn+OBqOOBjeOBq+WRvOOBs+WHuuOBleOCjOOAgeODieODreODg+ODl+mWk+malOOCkuefree4ruOBmeOCi1xuICAgKi9cbiAgc3RhcnRTb2Z0RHJvcCgpIHtcbiAgICBpZiAoIXRoaXMuaXNTb2Z0RHJvcCkge1xuICAgICAgdGhpcy5pc1NvZnREcm9wID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJvcEludGVydmFsID0gNTA7IC8vIOOCveODleODiOODieODreODg+ODl+aZguOBrumWk+malO+8iOODn+ODquenku+8iVxuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOS4i+OCreODvOOBjOmbouOBleOCjOOBn+OBqOOBjeOBq+WRvOOBs+WHuuOBleOCjOOAgeODieODreODg+ODl+mWk+malOOCkuWFg+OBq+aIu+OBmVxuICAgKi9cbiAgc3RvcFNvZnREcm9wKCkge1xuICAgIGlmICh0aGlzLmlzU29mdERyb3ApIHtcbiAgICAgIHRoaXMuaXNTb2Z0RHJvcCA9IGZhbHNlO1xuICAgICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICAgIH1cbiAgfVxuICBcbiAgLyoqXG4gICAqIOODrOODmeODq+OCouODg+ODl+OCkuODgeOCp+ODg+OCr+OBl+OAgeW/heimgeOBq+W/nOOBmOOBpuODrOODmeODq+OCkuS4iuOBkuOCi1xuICAgKi9cbiAgLyoqXG4gICAqIOaWsOOBl+OBhOODlOODvOOCueOCkuS9nOaIkOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSDjg4bjg4jjg63jg5/jg47jga7jgqTjg7Pjg4fjg4Pjgq/jgrlcbiAgICogQHJldHVybnMge1BpZWNlfSDmlrDjgZfjgYTjg5Tjg7zjgrnjgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICovXG4gIGNyZWF0ZVBpZWNlKGluZGV4KSB7XG4gICAgY29uc3QgbWF0cml4ID0gdGhpcy50ZXRyb21pbm9zW2luZGV4ICUgdGhpcy50ZXRyb21pbm9zLmxlbmd0aF07XG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5rZXlzKFRFVFJPTUlOT19NQVApW2luZGV4ICUgdGhpcy50ZXRyb21pbm9zLmxlbmd0aF07IC8vIOODlOODvOOCueOBruOCv+OCpOODl+OCkuWPluW+l1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKCh0aGlzLmJvYXJkLmNvbHMgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDIpO1xuICAgIC8vIOODlOODvOOCueOBruWIneacn1nluqfmqJnjgpLoqr/mlbTjgZfjgIHnlLvpnaLlpJbjgYvjgonlh7rnj77jgZnjgovjgojjgYbjgavjgZnjgotcbiAgICAvLyDjg5Tjg7zjgrnjga7pq5jjgZXjga7liIbjgaDjgZHkuIrjgavjgZrjgonjgZlcbiAgICBjb25zdCB5ID0gLW1hdHJpeC5sZW5ndGg7XG4gICAgcmV0dXJuIG5ldyBQaWVjZShtYXRyaXgsIHsgeCwgeSB9LCB0eXBlKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBmeOCi1xuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ib2FyZC5jbGVhcigpO1xuICAgIHRoaXMucGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB0aGlzLm5leHRQaWVjZSA9IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgIHRoaXMubGluZXMgPSAwO1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgLy8g44Ob44O844Or44OJ5qmf6IO944KS44Oq44K744OD44OIXG4gICAgdGhpcy5oZWxkUGllY2UgPSBudWxsO1xuICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgLy8g6Ieq5YuV6JC95LiL6ZaT6ZqU44KS44Oq44K744OD44OIXG4gICAgdGhpcy5kcm9wSW50ZXJ2YWwgPSB0aGlzLmdldERyb3BJbnRlcnZhbCgpO1xuICB9XG4gIFxuICAvKipcbiAgICog44Os44OZ44Or44Ki44OD44OX44KS44OB44Kn44OD44Kv44GX44CB5b+F6KaB44Gr5b+c44GY44Gm44Os44OZ44Or44KS5LiK44GS44KLXG4gICAqL1xuICBjaGVja0xldmVsVXAoKSB7XG4gICAgaWYgKHRoaXMuc2NvcmVDYWxjdWxhdG9yLnNob3VsZExldmVsVXAodGhpcy5saW5lcywgdGhpcy5sZXZlbCkpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLnNjb3JlQ2FsY3VsYXRvci5jYWxjdWxhdGVMZXZlbCh0aGlzLmxpbmVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpLnp7vli5XjgZXjgZvjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGR4IC0gWOaWueWQkeOBruenu+WLlemHj1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g56e75YuV44GM5oiQ5Yqf44GX44Gf44GL44Gp44GG44GLXG4gICAqL1xuICBtb3ZlUGllY2UoZHgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UgfHwgdGhpcy5pc0dhbWVPdmVyKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5waWVjZS5tb3ZlKGR4LCAwKTtcbiAgICBcbiAgICAvLyDooZ3nqoHjgZfjgZ/jgonlhYPjgavmiLvjgZlcbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5waWVjZS5tb3ZlKC1keCwgMCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIFxuICAvKipcbiAgICog6KGd56qB5Yik5a6a44KS6KGM44GGXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDooZ3nqoHjgZfjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICovXG4gIGhhc0NvbGxpc2lvbigpIHtcbiAgICBpZiAoIXRoaXMucGllY2UgfHwgIXRoaXMucGllY2UubWF0cml4IHx8ICF0aGlzLnBpZWNlLnBvcykge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIHBpZWNlIGRhdGEgZm9yIGNvbGxpc2lvbiBkZXRlY3Rpb24nKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIFxuICAgIGlmICghQXJyYXkuaXNBcnJheShtYXRyaXgpIHx8IHR5cGVvZiBwb3MueCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHBvcy55ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIG1hdHJpeCBvciBwb3NpdGlvbiBkYXRhJyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXRyaXgubGVuZ3RoOyB5KyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IG1hdHJpeFt5XTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3cpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgSW52YWxpZCByb3cgYXQgaW5kZXggJHt5fTpgLCByb3cpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3cubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKHJvd1t4XSAhPT0gMCkge1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBjb25zdCBib2FyZFkgPSBwb3MueSArIHk7XG4gICAgICAgICAgXG4gICAgICAgICAgLy8g44Oc44O844OJ44Gu5aSW5YG044GL44CB44GZ44Gn44Gr44OW44Ot44OD44Kv44GM44GC44KL5aC05ZCI44Gv6KGd56qBXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYm9hcmRYIDwgMCB8fFxuICAgICAgICAgICAgYm9hcmRYID49IHRoaXMuYm9hcmQuY29scyB8fFxuICAgICAgICAgICAgYm9hcmRZID49IHRoaXMuYm9hcmQucm93c1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIOODnOODvOODieWGheOBp+ODluODreODg+OCr+OBjOOBmeOBp+OBq+OBguOCi+WgtOWQiOOBr+ihneeqge+8iHkgPj0gMOOBruWgtOWQiOOBruOBv++8iVxuICAgICAgICAgIGlmIChib2FyZFkgPj0gMCAmJiBcbiAgICAgICAgICAgICAgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV0gJiYgXG4gICAgICAgICAgICAgIHRoaXMuYm9hcmQuZ3JpZFtib2FyZFldW2JvYXJkWF0gIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiDmlrDjgZfjgYTjg5Tjg7zjgrnjgpLnlJ/miJDjgZnjgotcbiAgICovXG4gIHNwYXduUGllY2UoKSB7XG4gICAgdGhpcy5waWVjZSA9IHRoaXMubmV4dFBpZWNlIHx8IHRoaXMuY3JlYXRlUGllY2UoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXRyb21pbm9zLmxlbmd0aCkpO1xuICAgIHRoaXMubmV4dFBpZWNlID0gdGhpcy5jcmVhdGVQaWVjZShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRldHJvbWlub3MubGVuZ3RoKSk7XG4gICAgXG4gICAgLy8g5paw44GX44GE44OU44O844K544GM55Sf5oiQ44GV44KM44Gf44KJ44Ob44O844Or44OJ44KS5YaN44Gz5Y+v6IO944Gr44GZ44KLXG4gICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zliKTlrpo6IOODlOODvOOCueOCkuS4gOaZgueahOOBq1k9MOOBruS9jee9ruOBq+enu+WLleOBleOBm+OBpuihneeqgeWIpOWumuOCkuihjOOBhlxuICAgIGNvbnN0IG9yaWdpbmFsWSA9IHRoaXMucGllY2UucG9zLnk7XG4gICAgdGhpcy5waWVjZS5wb3MueSA9IDA7IC8vIOS4gOaZgueahOOBq1nluqfmqJnjgpIw44Gr6Kit5a6aXG5cbiAgICBpZiAodGhpcy5oYXNDb2xsaXNpb24oKSkge1xuICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHRoaXMucGllY2UgPSBudWxsOyAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zmmYLjgavjg5Tjg7zjgrnjgpLjg5zjg7zjg4njgavlm7rlrprjgZfjgarjgYRcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5waWVjZS5wb3MueSA9IG9yaWdpbmFsWTsgLy8g6KGd56qB44GM44Gq44GR44KM44Gw5YWD44Gu5L2N572u44Gr5oi744GZXG4gICAgfVxuICB9XG4gIFxuICBcbiAgXG4gIC8qKlxuICAgKiDjg5Tjg7zjgrnjgpIx44Oe44K55LiL44Gr56e75YuV44GV44Gb44KLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDnp7vli5XjgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIGRyb3BQaWVjZSgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UgfHwgdGhpcy5pc0dhbWVPdmVyKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgdGhpcy5waWVjZS5tb3ZlKDAsIDEpO1xuICAgIFxuICAgIC8vIOihneeqgeOBl+OBn+OCieWFg+OBruS9jee9ruOBq+aIu+OBl+OBpuWbuuWumlxuICAgIGlmICh0aGlzLmhhc0NvbGxpc2lvbigpKSB7XG4gICAgICB0aGlzLnBpZWNlLm1vdmUoMCwgLTEpO1xuICAgICAgdGhpcy5tZXJnZVBpZWNlKCk7XG4gICAgICBcbiAgICAgIC8vIOODnOODvOODieOBrmNsZWFyTGluZXPjg6Hjgr3jg4Pjg4njgpLkvb/nlKhcbiAgICAgIGNvbnN0IGxpbmVzQ2xlYXJlZCA9IHRoaXMuYm9hcmQuY2xlYXJMaW5lcygpO1xuICAgICAgaWYgKGxpbmVzQ2xlYXJlZCA+IDApIHtcbiAgICAgICAgdGhpcy5saW5lcyArPSBsaW5lc0NsZWFyZWQ7XG4gICAgICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICAgICAgICB0aGlzLmNoZWNrTGV2ZWxVcCgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDmlrDjgZfjgYTjg5Tjg7zjgrnjgpLjgrnjg53jg7zjg7NcbiAgICAgIHRoaXMuc3Bhd25QaWVjZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIOePvuWcqOOBruODlOODvOOCueOCkuODnOODvOODieOBq+WbuuWumuOBmeOCi1xuICAgKi9cbiAgbWVyZ2VQaWVjZSgpIHtcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCB7IG1hdHJpeCwgcG9zIH0gPSB0aGlzLnBpZWNlO1xuICAgIFxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWF0cml4Lmxlbmd0aDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IG1hdHJpeFt5XS5sZW5ndGg7IHgrKykge1xuICAgICAgICBpZiAobWF0cml4W3ldW3hdICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYm9hcmRZID0gcG9zLnkgKyB5O1xuICAgICAgICAgIGNvbnN0IGJvYXJkWCA9IHBvcy54ICsgeDtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoYm9hcmRZID49IDAgJiYgYm9hcmRZIDwgdGhpcy5ib2FyZC5yb3dzICYmIGJvYXJkWCA+PSAwICYmIGJvYXJkWCA8IHRoaXMuYm9hcmQuY29scykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZC5ncmlkW2JvYXJkWV1bYm9hcmRYXSA9IG1hdHJpeFt5XVt4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKipcbiAgICog44K544Kz44Ki44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICogQHJldHVybnMge251bWJlcn0g6KiI566X44GV44KM44Gf44K544Kz44KiXG4gICAqL1xuICBjYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZUNhbGN1bGF0b3IuY2FsY3VsYXRlTGluZVNjb3JlKGxpbmVzQ2xlYXJlZCwgdGhpcy5sZXZlbCk7XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICovXG4gIHVwZGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgIHRoaXMuc2NvcmUgKz0gdGhpcy5jYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICB9XG4gIFxuICAvKipcbiAgICog44OU44O844K544KS5Zue6Lui44GV44Gb44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXIgLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOWbnui7ouOBjOaIkOWKn+OBl+OBn+OBi+OBqeOBhuOBi1xuICAgKi9cbiAgcm90YXRlUGllY2UoZGlyKSB7XG4gICAgaWYgKCF0aGlzLnBpZWNlIHx8IHRoaXMuaXNHYW1lT3Zlcikge1xuICAgICAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6K2m5ZGK44KS5Ye644GV44Gq44GEXG4gICAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdObyBwaWVjZSB0byByb3RhdGUgb3IgZ2FtZSBpcyBvdmVyJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5Zue6Lui44K344K544OG44Og44KS5L2/44Gj44Gm5Zue6Lui44KS6Kmm6KGMXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5yb3RhdGlvblN5c3RlbS5hdHRlbXB0Um90YXRpb24oXG4gICAgICB0aGlzLnBpZWNlLFxuICAgICAgZGlyLFxuICAgICAgKCkgPT4gdGhpcy5oYXNDb2xsaXNpb24oKVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0LnN1Y2Nlc3M7XG4gIH1cblxuICAvKipcbiAgICog54++5Zyo44Gu44OU44O844K544KS44Ob44O844Or44OJ44GZ44KLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDjg5vjg7zjg6vjg4njgYzmiJDlip/jgZfjgZ/jgYvjganjgYbjgYtcbiAgICovXG4gIGhvbGRQaWVjZSgpIHtcbiAgICAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zjgb7jgZ/jga/kuIDmmYLlgZzmraLkuK3jga/lrp/ooYzjgZfjgarjgYRcbiAgICBpZiAodGhpcy5pc0dhbWVPdmVyIHx8IHRoaXMucGF1c2VkKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgLy8g54++5Zyo44Gu44K/44O844Oz44Gn5pei44Gr44Ob44O844Or44OJ44GX44Gm44GE44KL5aC05ZCI44Gv5a6f6KGM44GX44Gq44GEXG4gICAgaWYgKCF0aGlzLmNhbkhvbGQpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICAvLyDnj77lnKjjga7jg5Tjg7zjgrnjgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/lrp/ooYzjgZfjgarjgYRcbiAgICBpZiAoIXRoaXMucGllY2UpIHJldHVybiBmYWxzZTtcbiAgICBcbiAgICAvLyDjg5vjg7zjg6vjg4njgpLlrp/ooYzjgZfjgZ/jga7jgafjgZPjga7jgr/jg7zjg7Pjga/jgoLjgYbjg5vjg7zjg6vjg4njgafjgY3jgarjgYRcbiAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcbiAgICBcbiAgICBpZiAodGhpcy5oZWxkUGllY2UgPT09IG51bGwpIHtcbiAgICAgIC8vIOODm+ODvOODq+ODieOCqOODquOCouOBjOepuuOBruWgtOWQiO+8muePvuWcqOOBruODlOODvOOCueOCkuODm+ODvOODq+ODieOBl+OBpuasoeOBruODlOODvOOCueOCkuePvuWcqOOBq1xuICAgICAgdGhpcy5oZWxkUGllY2UgPSB0aGlzLnBpZWNlO1xuICAgICAgdGhpcy5waWVjZSA9IHRoaXMubmV4dFBpZWNlO1xuICAgICAgdGhpcy5uZXh0UGllY2UgPSB0aGlzLmNyZWF0ZVBpZWNlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV0cm9taW5vcy5sZW5ndGgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g44Ob44O844Or44OJ44Ko44Oq44Ki44Gr44OU44O844K544GM44GC44KL5aC05ZCI77ya54++5Zyo44Gu44OU44O844K544Go44Ob44O844Or44OJ44OU44O844K544KS5Lqk5o+bXG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5waWVjZTtcbiAgICAgIHRoaXMucGllY2UgPSB0aGlzLmhlbGRQaWVjZTtcbiAgICAgIHRoaXMuaGVsZFBpZWNlID0gdGVtcDtcbiAgICB9XG4gICAgXG4gICAgLy8g5paw44GX44GE54++5Zyo44Gu44OU44O844K544Gu5L2N572u44KS44Oq44K744OD44OIXG4gICAgaWYgKHRoaXMucGllY2UpIHtcbiAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMucGllY2UubWF0cml4O1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoKHRoaXMuYm9hcmQuY29scyAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgICBjb25zdCB5ID0gLW1hdHJpeC5sZW5ndGg7XG4gICAgICB0aGlzLnBpZWNlLnBvcyA9IHsgeCwgeSB9O1xuICAgICAgXG4gICAgICAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zliKTlrppcbiAgICAgIGNvbnN0IG9yaWdpbmFsWSA9IHRoaXMucGllY2UucG9zLnk7XG4gICAgICB0aGlzLnBpZWNlLnBvcy55ID0gMDtcbiAgICAgIFxuICAgICAgaWYgKHRoaXMuaGFzQ29sbGlzaW9uKCkpIHtcbiAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5waWVjZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGllY2UucG9zLnkgPSBvcmlnaW5hbFk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbiIsIi8vIFBpZWNl44Kv44Op44K5XG4vLyDjg4bjg4jjg63jg5/jg47jga7lvaLjg7vkvY3nva7jg7vlm57ou6LjgpLnrqHnkIZcblxuZXhwb3J0IGNsYXNzIFBpZWNlIHtcbiAgY29uc3RydWN0b3IobWF0cml4LCBwb3MgPSB7IHg6IDAsIHk6IDAgfSwgdHlwZSA9ICdUJykge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMucG9zID0geyAuLi5wb3MgfTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAvLyDjg5Tjg7zjgrnjga7nqK7poZ4gKEksIEosIEwsIE8sIFMsIFQsIFopXG4gICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDsgLy8gMDogMOW6piwgMTogOTDluqYsIDI6IDE4MOW6piwgMzogMjcw5bqmXG4gIH1cblxuICBtb3ZlKGR4LCBkeSkge1xuICAgIHRoaXMucG9zLnggKz0gZHg7XG4gICAgdGhpcy5wb3MueSArPSBkeTtcbiAgfVxuXG4gIHJvdGF0ZShkaXIpIHtcbiAgICAvLyBkaXI6IDE95pmC6KiI5Zue44KKLCAtMT3lj43mmYLoqIjlm57jgopcbiAgICBpZiAoIXRoaXMubWF0cml4IHx8ICFBcnJheS5pc0FycmF5KHRoaXMubWF0cml4KSB8fCAhdGhpcy5tYXRyaXhbMF0gfHwgIUFycmF5LmlzQXJyYXkodGhpcy5tYXRyaXhbMF0pKSByZXR1cm47XG4gICAgY29uc3QgTiA9IHRoaXMubWF0cml4Lmxlbmd0aDtcbiAgICBjb25zdCBNID0gdGhpcy5tYXRyaXhbMF0ubGVuZ3RoO1xuICAgIGxldCByb3RhdGVkO1xuICAgIGlmIChkaXIgPT09IDEpIHtcbiAgICAgIC8vIOaZguioiOWbnuOCijog6Lui572u44GX44Gm5ZCE6KGM44KS5Y+N6LuiXG4gICAgICByb3RhdGVkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogTSB9LCAoXywgeCkgPT5cbiAgICAgICAgQXJyYXkuZnJvbSh7IGxlbmd0aDogTiB9LCAoXywgeSkgPT4gKHRoaXMubWF0cml4W04gLSB5IC0gMV0gPyB0aGlzLm1hdHJpeFtOIC0geSAtIDFdW3hdIDogMCkpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlj43mmYLoqIjlm57jgoo6IOi7oue9ruOBl+OBpuWQhOWIl+OCkuWPjei7olxuICAgICAgcm90YXRlZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IE0gfSwgKF8sIHgpID0+XG4gICAgICAgIEFycmF5LmZyb20oeyBsZW5ndGg6IE4gfSwgKF8sIHkpID0+ICh0aGlzLm1hdHJpeFt5XSA/IHRoaXMubWF0cml4W3ldW00gLSB4IC0gMV0gOiAwKSlcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMubWF0cml4ID0gcm90YXRlZDtcbiAgICAvLyDlm57ou6LnirbmhYvjgpLmm7TmlrBcbiAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAodGhpcy5yb3RhdGlvblN0YXRlICsgKGRpciA9PT0gMSA/IDEgOiAzKSkgJSA0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSAnLi9jb3JlL0dhbWUuanMnO1xuaW1wb3J0IHsgR0FNRV9DT05TVEFOVFMgfSBmcm9tICcuL2NvbnN0YW50cy9nYW1lLmpzJztcbmltcG9ydCBHYW1lVUkgZnJvbSBcIi4vdWkvR2FtZVVJLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyaW5nL1JlbmRlcmVyLmpzJztcbmltcG9ydCB7IEdhbWVTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL3N0YXRlL0dhbWVTdGF0ZU1hbmFnZXIuanMnO1xuXG4vLyAtLS0g44Kw44Ot44O844OQ44Or5aSJ5pWw44Go54q25oWL566h55CGIC0tLVxuZXhwb3J0IGxldCB0ZXRyaXNHYW1lID0gbmV3IEdhbWUoKTtcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRUYXJnZXQoKTtcbmV4cG9ydCBjb25zdCBnYW1lU3RhdGVNYW5hZ2VyID0gbmV3IEdhbWVTdGF0ZU1hbmFnZXIoR0FNRV9DT05TVEFOVFMuUk9XUywgR0FNRV9DT05TVEFOVFMuQ09MUyk7XG5leHBvcnQgbGV0IHJlbmRlcmVyID0gbnVsbDtcblxuLy8g5b6M5pa55LqS5o+b5oCn44Gu44Gf44KB44GuZ2FtZVN0YXRl44OX44Ot44Kt44K3XG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlID0gbmV3IFByb3h5KGdhbWVTdGF0ZU1hbmFnZXIuc3RhdGUsIHtcbiAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgIGlmIChwcm9wID09PSAnaW5pdEJvYXJkJykge1xuICAgICAgcmV0dXJuICgpID0+IGdhbWVTdGF0ZU1hbmFnZXIuaW5pdEJvYXJkKCk7XG4gICAgfVxuICAgIGlmIChwcm9wID09PSAnbG9nU3RhdGUnKSB7XG4gICAgICByZXR1cm4gKCkgPT4gZ2FtZVN0YXRlTWFuYWdlci5sb2dTdGF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0W3Byb3BdO1xuICB9LFxuICBzZXQodGFyZ2V0LCBwcm9wLCB2YWx1ZSkge1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KHByb3AsIHZhbHVlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbi8vIC0tLSDmj4/nlLvplqLpgKMgLS0tIFxuZnVuY3Rpb24gZHJhdygpIHtcbiAgaWYgKCFyZW5kZXJlcikge1xuICAgIC8vIOODhuOCueODiOeSsOWig+OBp+OBr+itpuWRiuOCkuWHuuOBleOBquOBhFxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc29sZS53YXJuKCdSZW5kZXJlciBub3QgaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IGdhbWVEYXRhID0ge1xuICAgICAgYm9hcmRHcmlkOiB0ZXRyaXNHYW1lICYmIHRldHJpc0dhbWUuYm9hcmQgPyB0ZXRyaXNHYW1lLmJvYXJkLmdyaWQgOiBudWxsLFxuICAgICAgcGllY2U6IHN0YXRlLnBpZWNlLFxuICAgICAgbmV4dFBpZWNlOiBzdGF0ZS5uZXh0UGllY2UsXG4gICAgICBob2xkUGllY2U6IHN0YXRlLmhvbGRQaWVjZVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgbmV4dFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGllY2UtY2FudmFzJyk7XG4gICAgY29uc3QgaG9sZFBpZWNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbGQtcGllY2UtY2FudmFzJyk7XG4gICAgcmVuZGVyZXIucmVuZGVyKGdhbWVEYXRhLCBuZXh0UGllY2VDYW52YXMsIGhvbGRQaWVjZUNhbnZhcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBpbiBkcmF3IGZ1bmN0aW9uOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0gVUnmm7TmlrAgLS0tIFxuZnVuY3Rpb24gdXBkYXRlVUkoKSB7XG4gIHVwZGF0ZVNjb3JlRGlzcGxheShnYW1lU3RhdGUuc2NvcmUpO1xuICB1cGRhdGVMaW5lc0Rpc3BsYXkoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgdXBkYXRlTGV2ZWxEaXNwbGF5KGdhbWVTdGF0ZS5sZXZlbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTY29yZURpc3BsYXkoc2NvcmUpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIHNjb3JlICE9PSAnbnVtYmVyJyB8fCBpc05hTihzY29yZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBzY29yZSB2YWx1ZTonLCBzY29yZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICAgIGlmIChzY29yZUVsZW1lbnQpIHtcbiAgICAgIHNjb3JlRWxlbWVudC50ZXh0Q29udGVudCA9IHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHNjb3JlIGRpc3BsYXk6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMaW5lc0Rpc3BsYXkobGluZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGxpbmVzICE9PSAnbnVtYmVyJyB8fCBpc05hTihsaW5lcykpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsaW5lcyB2YWx1ZTonLCBsaW5lcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxpbmVzRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaW5lcycpO1xuICAgIGlmIChsaW5lc0VsZW1lbnQpIHtcbiAgICAgIGxpbmVzRWxlbWVudC50ZXh0Q29udGVudCA9IGxpbmVzLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGxpbmVzIGRpc3BsYXk6JywgZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMZXZlbERpc3BsYXkobGV2ZWwpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGxldmVsICE9PSAnbnVtYmVyJyB8fCBpc05hTihsZXZlbCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBsZXZlbCB2YWx1ZTonLCBsZXZlbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGxldmVsRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZXZlbCcpO1xuICAgIGlmIChsZXZlbEVsZW1lbnQpIHtcbiAgICAgIGxldmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGxldmVsLnRvU3RyaW5nKCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGxldmVsIGRpc3BsYXk6JywgZXJyb3IpO1xuICB9XG59XG5cbi8vIC0tLSDjgrLjg7zjg6Djg63jgrjjg4Pjgq8gLS0tIFxuZnVuY3Rpb24gdXBkYXRlR2FtZVN0YXRlKCkge1xuICBnYW1lU3RhdGVNYW5hZ2VyLnN5bmNXaXRoR2FtZSh0ZXRyaXNHYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYXllckRyb3AoKSB7XG4gIHRyeSB7XG4gICAgaWYgKCFnYW1lU3RhdGVNYW5hZ2VyLmlzUnVubmluZygpKSByZXR1cm4gZmFsc2U7XG4gICAgXG4gICAgaWYgKCF0ZXRyaXNHYW1lIHx8IHR5cGVvZiB0ZXRyaXNHYW1lLmRyb3BQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIGRyb3BQaWVjZSBtZXRob2QnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZHJvcHBlZCA9IHRldHJpc0dhbWUuZHJvcFBpZWNlKCk7XG4gICAgLy8g44G+44Ga44Ky44O844Og44Kq44O844OQ44O85Yik5a6aXG4gICAgaWYgKHRldHJpc0dhbWUuaXNHYW1lT3Zlcikge1xuICAgICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2lzR2FtZU92ZXInLCB0cnVlKTtcbiAgICAgIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICAgICAgZ2FtZVN0YXRlTWFuYWdlci5zdG9wR2FtZUxvb3AoKTtcbiAgICAgIGFsZXJ0KCdHYW1lIE92ZXIhJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIOmAmuW4uOaZguOBr+WQjOacn1xuICAgIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICAgIHJldHVybiBkcm9wcGVkO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHBsYXllckRyb3A6JywgZXJyb3IpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZShkaXIpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWdhbWVTdGF0ZU1hbmFnZXIuaXNSdW5uaW5nKCkpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUubW92ZVBpZWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRldHJpc0dhbWUgb2JqZWN0IG9yIG1pc3NpbmcgbW92ZVBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBpZiAodHlwZW9mIGRpciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBkaXJlY3Rpb24gZm9yIHBsYXllck1vdmU6JywgZGlyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdGV0cmlzR2FtZS5tb3ZlUGllY2UoZGlyKTtcbiAgICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJNb3ZlOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyUm90YXRlKGRpcikge1xuICB0cnkge1xuICAgIGlmICghZ2FtZVN0YXRlTWFuYWdlci5pc1J1bm5pbmcoKSkgcmV0dXJuO1xuICAgIFxuICAgIGlmICghdGV0cmlzR2FtZSB8fCB0eXBlb2YgdGV0cmlzR2FtZS5yb3RhdGVQaWVjZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCB0ZXRyaXNHYW1lIG9iamVjdCBvciBtaXNzaW5nIHJvdGF0ZVBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUucGllY2UpIHJldHVybjtcbiAgICBcbiAgICBpZiAodHlwZW9mIGRpciAhPT0gJ251bWJlcicpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBkaXJlY3Rpb24gZm9yIHBsYXllclJvdGF0ZTonLCBkaXIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0ZXRyaXNHYW1lLnJvdGF0ZVBpZWNlKGRpcik7XG4gICAgdXBkYXRlR2FtZVN0YXRlKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gcGxheWVyUm90YXRlOicsIGVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVySG9sZCgpIHtcbiAgdHJ5IHtcbiAgICBpZiAoIWdhbWVTdGF0ZU1hbmFnZXIuaXNSdW5uaW5nKCkpIHJldHVybjtcbiAgICBcbiAgICBpZiAoIXRldHJpc0dhbWUgfHwgdHlwZW9mIHRldHJpc0dhbWUuaG9sZFBpZWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHRldHJpc0dhbWUgb2JqZWN0IG9yIG1pc3NpbmcgaG9sZFBpZWNlIG1ldGhvZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZXN1bHQgPSB0ZXRyaXNHYW1lLmhvbGRQaWVjZSgpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHVwZGF0ZUdhbWVTdGF0ZSgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBwbGF5ZXJIb2xkOicsIGVycm9yKTtcbiAgfVxufVxuXG4vLyAtLS0g44Ky44O844Og44Or44O844OXIC0tLVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZSh0aW1lID0gMCkge1xuICB0cnkge1xuICAgIGNvbnN0IGdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldEdhbWVMb29wSWQoZ2FtZUxvb3BJZCk7XG4gICAgXG4gICAgaWYgKCFnYW1lU3RhdGVNYW5hZ2VyLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhdGUgPSBnYW1lU3RhdGVNYW5hZ2VyLmdldFN0YXRlKCk7XG4gICAgXG4gICAgLy8g5Yid5pyf5YyW5pmC44GvbGFzdFRpbWXjgpLoqK3lrppcbiAgICBpZiAoIXN0YXRlLmxhc3RUaW1lKSB7XG4gICAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnbGFzdFRpbWUnLCB0aW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWx0YVRpbWUgPSB0aW1lIC0gc3RhdGUubGFzdFRpbWU7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2xhc3RUaW1lJywgdGltZSk7XG4gICAgXG4gICAgLy8g55Ww5bi444Gq44OH44Or44K/44K/44Kk44Og44KS44K544Kt44OD44OX77yI44OV44Os44O844Og6KiI566X44Gu5a6J5a6a5oCn5ZCR5LiK77yJXG4gICAgaWYgKGRlbHRhVGltZSA+IDEwMDApIHtcbiAgICAgIGNvbnNvbGUud2FybignTGFyZ2UgZGVsdGEgdGltZSBkZXRlY3RlZCwgc2tpcHBpbmcgZnJhbWU6JywgZGVsdGFUaW1lKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8g44OJ44Ot44OD44OX5Yem55CGXG4gICAgaWYgKHR5cGVvZiBzdGF0ZS5kcm9wQ291bnRlciA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRldHJpc0dhbWUuZHJvcEludGVydmFsID09PSAnbnVtYmVyJykge1xuICAgICAgY29uc3QgbmV3RHJvcENvdW50ZXIgPSBzdGF0ZS5kcm9wQ291bnRlciArIGRlbHRhVGltZTtcbiAgICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdkcm9wQ291bnRlcicsIG5ld0Ryb3BDb3VudGVyKTtcbiAgICAgIFxuICAgICAgaWYgKG5ld0Ryb3BDb3VudGVyID4gdGV0cmlzR2FtZS5kcm9wSW50ZXJ2YWwpIHtcbiAgICAgICAgcGxheWVyRHJvcCgpO1xuICAgICAgICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnZHJvcENvdW50ZXInLCAwKTtcbiAgICAgICAgLy8g5Y2z5bqn44Gr5o+P55S744KS5pu05pawXG4gICAgICAgIGRyYXcoKTtcbiAgICAgICAgdXBkYXRlVUkoKTtcbiAgICAgIH0gZWxzZSBpZiAoZGVsdGFUaW1lIDwgMTAwKSB7IC8vIDYwRlBT44Gn5o+P55S744GZ44KL5aC05ZCI44CBMTYuNjdtc+OBlOOBqOOBq+aPj+eUu1xuICAgICAgICAvLyDjgrnjg6Djg7zjgrrjgarjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjga7jgZ/jgoHjgIHjg4njg63jg4Pjg5fplpPjgoLmj4/nlLvjgpLmm7TmlrBcbiAgICAgICAgZHJhdygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgZHJvcENvdW50ZXIgb3IgZHJvcEludGVydmFsIHZhbHVlcycpO1xuICAgICAgLy8g54Sh5Yq544Gq54q25oWL44Gu5aC05ZCI44Gv5o+P55S744Gu44G/5a6f6KGMXG4gICAgICBkcmF3KCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dhbWUgbG9vcCBlcnJvcjonLCBlcnJvcik7XG4gICAgLy8g44Ky44O844Og44KS5LiA5pmC5YGc5q2i44GX44Gm44Ko44Op44O844KS5aCx5ZGKXG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXRQYXVzZWQodHJ1ZSk7XG4gICAgY29uc29sZS53YXJuKCdHYW1lIHBhdXNlZCBkdWUgdG8gZXJyb3IuIFByZXNzIFIgdG8gcmVzZXQgdGhlIGdhbWUuJyk7XG4gICAgXG4gICAgLy8g44Ko44Op44O855m655Sf5pmC44Gn44KC5o+P55S744Gv6Kmm6KGM44GZ44KLXG4gICAgdHJ5IHtcbiAgICAgIGRyYXcoKTtcbiAgICB9IGNhdGNoIChkcmF3RXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RyYXcgZXJyb3IgZHVyaW5nIGVycm9yIHJlY292ZXJ5OicsIGRyYXdFcnJvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLSDliJ3mnJ/ljJbjgajjgqTjg5njg7Pjg4jjg4/jg7Pjg4njg6rjg7PjgrAgLS0tXG5leHBvcnQgY29uc3QgZ2FtZVVJID0gbmV3IEdhbWVVSShnYW1lU3RhdGUsIHtcbiAgbW92ZVBpZWNlOiBwbGF5ZXJNb3ZlLFxuICBkcm9wUGllY2U6IHBsYXllckRyb3AsXG4gIHJvdGF0ZVBpZWNlOiBwbGF5ZXJSb3RhdGUsXG4gIGhvbGRQaWVjZTogcGxheWVySG9sZCxcbiAgcmVzZXRHYW1lLFxuICB1cGRhdGUsXG4gIGdldERyb3BJbnRlcnZhbDogKCkgPT4gdGV0cmlzR2FtZS5nZXREcm9wSW50ZXJ2YWwoKSxcbiAgc3RhcnRTb2Z0RHJvcDogKCkgPT4gdGV0cmlzR2FtZS5zdGFydFNvZnREcm9wKCksXG4gIHN0b3BTb2Z0RHJvcDogKCkgPT4gdGV0cmlzR2FtZS5zdG9wU29mdERyb3AoKSxcbn0sIGdhbWVTdGF0ZU1hbmFnZXIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAvLyDnirbmhYvnrqHnkIblmajjgpLjg6rjgrvjg4Pjg4hcbiAgZ2FtZVN0YXRlTWFuYWdlci5yZXNldCgpO1xuICBcbiAgLy8g44Ky44O844Og44Gu44Oq44K744OD44OIXG4gIHRldHJpc0dhbWUucmVzZXQoKTtcbiAgXG4gIC8vIOOCsuODvOODoOeKtuaFi+OBruabtOaWsOOBqOaPj+eUu1xuICB1cGRhdGVHYW1lU3RhdGUoKTtcbiAgdXBkYXRlVUkoKTtcbiAgZHJhdygpO1xuICBcbiAgLy8g44Ky44O844Og44Or44O844OX44KS5YaN6ZaLXG4gIGdhbWVTdGF0ZU1hbmFnZXIuc2V0KCdsYXN0VGltZScsIDApO1xuICBjb25zdCBnYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gIGdhbWVTdGF0ZU1hbmFnZXIuc2V0R2FtZUxvb3BJZChnYW1lTG9vcElkKTtcbiAgXG4gIGNvbnNvbGUubG9nKCfjgrLjg7zjg6DjgYzjg6rjgrvjg4Pjg4jjgZXjgozjgb7jgZfjgZ/jgIInKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBFdmVudExpc3RlbmVycyhvbktleURvd24sIG9uS2V5VXApIHtcbiAgZ2FtZVVJLnNldHVwRXZlbnRMaXN0ZW5lcnMob25LZXlEb3duLCBvbktleVVwKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9IGdhbWVTdGF0ZS5DT0xTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIEdBTUVfQ09OU1RBTlRTLkJMT0NLX1NJWkU7XG4gICAgICBkcmF3KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8g44OG44K544OI55So44Guc2V0dXBFdmVudExpc3RlbmVyc+mWouaVsOOCkuOCqOOCr+OCueODneODvOODiFxuZXhwb3J0IHsgc2V0dXBFdmVudExpc3RlbmVycyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZLi4uJyk7XG4gICAgXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgY29uc29sZS5lcnJvcignQ2FudmFz6KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKCFjdHgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJzJE44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgLy8g44Ky44O844Og44K544OG44O844OI44Gu5Yid5pyf5YyWXG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2N0eCcsIGN0eCk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2NhbnZhcycsIGNhbnZhcyk7XG4gICAgXG4gICAgLy8g44Os44Oz44OA44Op44O844Gu5Yid5pyf5YyWXG4gICAgY29uc3QgeyBDT0xPUlMsIEJMT0NLX1NJWkUgfSA9IEdBTUVfQ09OU1RBTlRTO1xuICAgIHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGNhbnZhcywgQ09MT1JTLCBCTE9DS19TSVpFKTtcbiAgICBcbiAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7jgrXjgqTjgrroqK3lrppcbiAgICBjb25zdCBzdGF0ZSA9IGdhbWVTdGF0ZU1hbmFnZXIuZ2V0U3RhdGUoKTtcbiAgICBjYW52YXMud2lkdGggPSBzdGF0ZS5DT0xTICogQkxPQ0tfU0laRTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gc3RhdGUuUk9XUyAqIEJMT0NLX1NJWkU7XG4gICAgXG4gICAgLy8g44Oc44O844OJ44Gu5Yid5pyf5YyWXG4gICAgZ2FtZVN0YXRlTWFuYWdlci5pbml0Qm9hcmQoKTtcbiAgICBcbiAgICAvLyDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjga7oqK3lrppcbiAgICBjb25zb2xlLmxvZygn44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6a44GX44G+44GZLi4uJyk7XG4gICAgc2V0dXBFdmVudExpc3RlbmVycyhnYW1lVUkub25LZXlEb3duLmJpbmQoZ2FtZVVJKSwgZ2FtZVVJLm9uS2V5VXAuYmluZChnYW1lVUkpKTtcbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djga7jg6rjgrvjg4Pjg4hcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44KS44Oq44K744OD44OI44GX44G+44GZLi4uJyk7XG4gICAgcmVzZXRHYW1lKCk7XG4gICAgXG4gICAgLy8g5Yid5pyf5o+P55S7XG4gICAgY29uc29sZS5sb2coJ+WIneacn+aPj+eUu+OCkuWun+ihjOOBl+OBvuOBmS4uLicpO1xuICAgIGRyYXcoKTtcbiAgICBcbiAgICAvLyDjgrLjg7zjg6Djg6vjg7zjg5fjgpLplovlp4tcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Or44O844OX44KS6ZaL5aeL44GX44G+44GZLi4uJyk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2xhc3RUaW1lJywgMCk7XG4gICAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2Ryb3BDb3VudGVyJywgMCk7XG4gICAgY29uc3QgZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIGdhbWVTdGF0ZU1hbmFnZXIuc2V0R2FtZUxvb3BJZChnYW1lTG9vcElkKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygn44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44Gf44CCJyk7XG4gICAgXG4gICAgLy8g44OG44K544OI55So44Gu6L+U44KK5YCkXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIGV2ZW50TWFuYWdlcixcbiAgICAgIGdhbWVTdGF0ZTogZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpLFxuICAgICAgaW5pdEdhbWU6IGluaXQsXG4gICAgICByZXNldEdhbWUsXG4gICAgICBzZXR1cEV2ZW50TGlzdGVuZXJzOiBzZXR1cEV2ZW50TGlzdGVuZXJzLmJpbmQobnVsbCwgZ2FtZVVJLm9uS2V5RG93bi5iaW5kKGdhbWVVSSksIGdhbWVVSS5vbktleVVwLmJpbmQoZ2FtZVVJKSksXG4gICAgICB1cGRhdGUsXG4gICAgICBkcmF3XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCfjgrLjg7zjg6Djga7liJ3mnJ/ljJbkuK3jgavjgqjjg6njg7zjgYznmbrnlJ/jgZfjgb7jgZfjgZ86JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIGluaXRHYW1l6Zai5pWw44GvaW5pdOOBruOCqOOCpOODquOCouOCue+8iOODhuOCueODiOS6kuaPm+aAp+OBruOBn+OCge+8iVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHYW1lKCkge1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICBpZiAoIWNhbnZhcykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhbnZhc+imgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBjb25zb2xlLmVycm9yKCcyROOCs+ODs+ODhuOCreOCueODiOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBnYW1lU3RhdGVNYW5hZ2VyLnNldCgnY3R4JywgY3R4KTtcbiAgZ2FtZVN0YXRlTWFuYWdlci5zZXQoJ2NhbnZhcycsIGNhbnZhcyk7XG4gIGNvbnN0IHN0YXRlID0gZ2FtZVN0YXRlTWFuYWdlci5nZXRTdGF0ZSgpO1xuICBjYW52YXMud2lkdGggPSBzdGF0ZS5DT0xTICogR0FNRV9DT05TVEFOVFMuQkxPQ0tfU0laRTtcbiAgY2FudmFzLmhlaWdodCA9IHN0YXRlLlJPV1MgKiBHQU1FX0NPTlNUQU5UUy5CTE9DS19TSVpFO1xuICBcbiAgcmV0dXJuIGNhbnZhcztcbn1cblxuLy8gLS0tIOOCqOOCr+OCueODneODvOODiOOBqOODluODqeOCpuOCtuWun+ihjCAtLS1cblxuZXhwb3J0IHsgZHJhdyB9OyAvLyBkcmF36Zai5pWw44KS44Ko44Kv44K544Od44O844OIXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUZXRyaXNHYW1lKG5ld0dhbWUpIHtcbiAgdGV0cmlzR2FtZSA9IG5ld0dhbWU7XG59XG5cbmNvbnN0IGV4cG9ydHMgPSB7IGluaXQsIGluaXRHYW1lLCBwbGF5ZXJNb3ZlLCBwbGF5ZXJSb3RhdGUsIHBsYXllckRyb3AsIHBsYXllckhvbGQsIGdhbWVVSSwgZ2FtZVN0YXRlLCBnYW1lU3RhdGVNYW5hZ2VyLCByZW5kZXJlciwgcmVzZXRHYW1lLCB1cGRhdGUsIHNldHVwRXZlbnRMaXN0ZW5lcnMsIGRyYXcsIHRldHJpc0dhbWUgfTtcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7XG4iLCJleHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG9ycywgYmxvY2tTaXplKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB0aGlzLmNvbG9ycyA9IGNvbG9ycztcbiAgICB0aGlzLmJsb2NrU2l6ZSA9IGJsb2NrU2l6ZTtcbiAgICBcbiAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJzJEIOOCs+ODs+ODhuOCreOCueODiOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBnycpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg57jg4jjg6rjg4Pjgq/jgrnjgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gbWF0cml4IC0g5o+P55S744GZ44KL44Oe44OI44Oq44OD44Kv44K5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvZmZzZXQgLSDjgqrjg5Xjgrvjg4Pjg4jluqfmqJkge3gsIHl9XG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gY29sb3JzIC0g6Imy44Gu6YWN5YiX77yI44Kq44OX44K344On44Oz44CB44OH44OV44Kp44Or44OI44GvIHRoaXMuY29sb3Jz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBibG9ja1NpemUgLSDjg5bjg63jg4Pjgq/jgrXjgqTjgrrvvIjjgqrjg5fjgrfjg6fjg7PjgIHjg4fjg5Xjgqnjg6vjg4jjga8gdGhpcy5ibG9ja1NpemXvvIlcbiAgICovXG4gIGRyYXdNYXRyaXgobWF0cml4LCBvZmZzZXQsIGNvbG9ycyA9IHRoaXMuY29sb3JzLCBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZSkge1xuICAgIGlmICghdGhpcy5jdHggfHwgIW1hdHJpeCB8fCAhQXJyYXkuaXNBcnJheShtYXRyaXgpIHx8ICFvZmZzZXQgfHwgIWNvbG9ycyB8fCAhYmxvY2tTaXplKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2RyYXdNYXRyaXg6IEludmFsaWQgcGFyYW1ldGVycycsIHsgXG4gICAgICAgIGhhc0N0eDogISF0aGlzLmN0eCwgXG4gICAgICAgIGhhc01hdHJpeDogISFtYXRyaXgsIFxuICAgICAgICBoYXNPZmZzZXQ6ICEhb2Zmc2V0LCBcbiAgICAgICAgaGFzQ29sb3JzOiAhIWNvbG9ycywgXG4gICAgICAgIGhhc0Jsb2NrU2l6ZTogISFibG9ja1NpemUgXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQueCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG9mZnNldC55ICE9PSAnbnVtYmVyJykge1xuICAgICAgY29uc29sZS53YXJuKCdkcmF3TWF0cml4OiBJbnZhbGlkIG9mZnNldCB2YWx1ZXMnLCBvZmZzZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICBtYXRyaXguZm9yRWFjaCgocm93LCB5KSA9PiB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm93KSkgcmV0dXJuO1xuICAgICAgcm93LmZvckVhY2goKHZhbHVlLCB4KSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAoY29sb3JzW3ZhbHVlXSAmJiB0eXBlb2YgY29sb3JzW3ZhbHVlXSA9PT0gJ3N0cmluZycpID8gY29sb3JzW3ZhbHVlXSA6ICcjMDAwJztcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KCh4ICsgb2Zmc2V0LngpICogYmxvY2tTaXplLCAoeSArIG9mZnNldC55KSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyDjg4bjgrnjg4jnkrDlooPjgafjga/oqbPntLDjgqjjg6njg7zjgpLlh7rjgZXjgarjgYRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkcmF3aW5nIGJsb2NrIGF0JywgeCwgeSwgJzonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq3jg6Pjg7Pjg5DjgrnjgpLjgq/jg6rjgqLjgZfjgabog4zmma/jgpLmj4/nlLvjgZnjgotcbiAgICovXG4gIGNsZWFyQ2FudmFzKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIXRoaXMuY3R4IHx8ICF0aGlzLmNhbnZhcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgY2FudmFzIGNvbnRleHQgaW4gY2xlYXJDYW52YXMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2YwZjBmMCc7XG4gICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY2xlYXJpbmcgY2FudmFzOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og44Oc44O844OJ44KS5o+P55S744GZ44KLXG4gICAqIEBwYXJhbSB7QXJyYXk8QXJyYXk8bnVtYmVyPj59IGJvYXJkR3JpZCAtIOODnOODvOODieOBruOCsOODquODg+ODiVxuICAgKi9cbiAgZHJhd0JvYXJkKGJvYXJkR3JpZCkge1xuICAgIGlmIChib2FyZEdyaWQgJiYgQXJyYXkuaXNBcnJheShib2FyZEdyaWQpKSB7XG4gICAgICB0aGlzLmRyYXdNYXRyaXgoYm9hcmRHcmlkLCB7IHg6IDAsIHk6IDAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOePvuWcqOOBruODlOODvOOCueOCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGllY2UgLSDjg5Tjg7zjgrnjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICovXG4gIGRyYXdQaWVjZShwaWVjZSkge1xuICAgIGlmIChwaWVjZSAmJiBwaWVjZS5tYXRyaXggJiYgcGllY2UucG9zKSB7XG4gICAgICB0aGlzLmRyYXdNYXRyaXgocGllY2UubWF0cml4LCBwaWVjZS5wb3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmrKHjga7jg5Tjg7zjgrnjgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gbmV4dFBpZWNlQ2FudmFzIC0g5qyh44Gu44OU44O844K555So44Kt44Oj44Oz44OQ44K5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXh0UGllY2UgLSDmrKHjga7jg5Tjg7zjgrnjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICovXG4gIGRyYXdOZXh0UGllY2UobmV4dFBpZWNlQ2FudmFzLCBuZXh0UGllY2UpIHtcbiAgICBpZiAoIW5leHRQaWVjZUNhbnZhcyB8fCAhbmV4dFBpZWNlIHx8ICFuZXh0UGllY2UubWF0cml4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5leHRDdHggPSBuZXh0UGllY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmICghbmV4dEN0eCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkIG5vdCBnZXQgMkQgY29udGV4dCBmb3IgbmV4dCBwaWVjZSBjYW52YXMnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICBuZXh0Q3R4LmNsZWFyUmVjdCgwLCAwLCBuZXh0Q3R4LmNhbnZhcy53aWR0aCwgbmV4dEN0eC5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGNvbnN0IHsgbWF0cml4IH0gPSBuZXh0UGllY2U7XG4gICAgICBcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdHJpeCkgJiYgbWF0cml4Lmxlbmd0aCA+IDAgJiYgQXJyYXkuaXNBcnJheShtYXRyaXhbMF0pKSB7XG4gICAgICAgIGNvbnN0IHggPSAobmV4dEN0eC5jYW52YXMud2lkdGggLyB0aGlzLmJsb2NrU2l6ZSAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMjtcbiAgICAgICAgY29uc3QgeSA9IChuZXh0Q3R4LmNhbnZhcy5oZWlnaHQgLyB0aGlzLmJsb2NrU2l6ZSAtIG1hdHJpeC5sZW5ndGgpIC8gMjtcbiAgICAgICAgXG4gICAgICAgIC8vIOasoeOBruODlOODvOOCueeUqOOBruS4gOaZgueahOOBquODrOODs+ODgOODqeODvOOCkuS9nOaIkFxuICAgICAgICBjb25zdCB0ZW1wUmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIobmV4dFBpZWNlQ2FudmFzLCB0aGlzLmNvbG9ycywgdGhpcy5ibG9ja1NpemUpO1xuICAgICAgICB0ZW1wUmVuZGVyZXIuZHJhd01hdHJpeChtYXRyaXgsIHsgeCwgeSB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6Kmz57Sw44Ko44Op44O844KS5Ye644GV44Gq44GEICBcbiAgICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkcmF3aW5nIG5leHQgcGllY2U6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjg5vjg7zjg6vjg4njg5Tjg7zjgrnjgpLmj4/nlLvjgZnjgotcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gaG9sZFBpZWNlQ2FudmFzIC0g44Ob44O844Or44OJ44OU44O844K555So44Kt44Oj44Oz44OQ44K5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBob2xkUGllY2UgLSDjg5vjg7zjg6vjg4njg5Tjg7zjgrlcbiAgICovXG4gIGRyYXdIb2xkUGllY2UoaG9sZFBpZWNlQ2FudmFzLCBob2xkUGllY2UpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFob2xkUGllY2VDYW52YXMgfHwgIWhvbGRQaWVjZSB8fCAhaG9sZFBpZWNlLm1hdHJpeCkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBtYXRyaXggPSBob2xkUGllY2UubWF0cml4O1xuICAgICAgXG4gICAgICAvLyDkuIDmmYLnmoTjgarjg6zjg7Pjg4Djg6njg7zjgpLkvZzmiJDjgZfjgabmj4/nlLtcbiAgICAgIGNvbnN0IHRlbXBSZW5kZXJlciA9IG5ldyBSZW5kZXJlcihob2xkUGllY2VDYW52YXMsIHRoaXMuY29sb3JzLCB0aGlzLmJsb2NrU2l6ZSk7XG4gICAgICBcbiAgICAgIC8vIOODm+ODvOODq+ODieOCqOODquOCouOBruOCteOCpOOCuuOCkuioreWumlxuICAgICAgaG9sZFBpZWNlQ2FudmFzLndpZHRoID0gNCAqIHRoaXMuYmxvY2tTaXplO1xuICAgICAgaG9sZFBpZWNlQ2FudmFzLmhlaWdodCA9IDQgKiB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgIFxuICAgICAgLy8g6IOM5pmv44KS44Kv44Oq44KiXG4gICAgICB0ZW1wUmVuZGVyZXIuY2xlYXJDYW52YXMoKTtcbiAgICAgIFxuICAgICAgLy8g44OU44O844K544KS44Kt44Oj44Oz44OQ44K544Gu5Lit5aSu44Gr5o+P55S7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcigoNCAtIG1hdHJpeFswXS5sZW5ndGgpIC8gMik7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcigoNCAtIG1hdHJpeC5sZW5ndGgpIC8gMik7XG4gICAgICBcbiAgICAgIHRlbXBSZW5kZXJlci5kcmF3TWF0cml4KG1hdHJpeCwgeyB4LCB5IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyDjg4bjgrnjg4jnkrDlooPjgafjga/oqbPntLDjgqjjg6njg7zjgpLlh7rjgZXjgarjgYQgIFxuICAgICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRyYXdpbmcgaG9sZCBwaWVjZTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOWFqOS9k+OCkuaPj+eUu+OBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEgLSDjgrLjg7zjg6Djg4fjg7zjgr9cbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxudW1iZXI+Pn0gZ2FtZURhdGEuYm9hcmRHcmlkIC0g44Oc44O844OJ44Gu44Kw44Oq44OD44OJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBnYW1lRGF0YS5waWVjZSAtIOePvuWcqOOBruODlOODvOOCuVxuICAgKiBAcGFyYW0ge09iamVjdH0gZ2FtZURhdGEubmV4dFBpZWNlIC0g5qyh44Gu44OU44O844K5XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBnYW1lRGF0YS5ob2xkUGllY2UgLSDjg5vjg7zjg6vjg4njg5Tjg7zjgrlcbiAgICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gbmV4dFBpZWNlQ2FudmFzIC0g5qyh44Gu44OU44O844K555So44Kt44Oj44Oz44OQ44K5XG4gICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGhvbGRQaWVjZUNhbnZhcyAtIOODm+ODvOODq+ODieODlOODvOOCueeUqOOCreODo+ODs+ODkOOCuVxuICAgKi9cbiAgcmVuZGVyKGdhbWVEYXRhLCBuZXh0UGllY2VDYW52YXMgPSBudWxsLCBob2xkUGllY2VDYW52YXMgPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY2xlYXJDYW52YXMoKTtcbiAgICAgIFxuICAgICAgLy8g44Oh44Kk44Oz44Oc44O844OJ44Gu5o+P55S7XG4gICAgICBpZiAoZ2FtZURhdGEuYm9hcmRHcmlkKSB7XG4gICAgICAgIHRoaXMuZHJhd0JvYXJkKGdhbWVEYXRhLmJvYXJkR3JpZCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIOePvuWcqOOBruODlOODvOOCueOBruaPj+eUu1xuICAgICAgaWYgKGdhbWVEYXRhLnBpZWNlKSB7XG4gICAgICAgIHRoaXMuZHJhd1BpZWNlKGdhbWVEYXRhLnBpZWNlKTtcbiAgICAgIH1cblxuICAgICAgLy8g5qyh44Gu44OU44O844K544Gu5o+P55S7XG4gICAgICBpZiAobmV4dFBpZWNlQ2FudmFzICYmIGdhbWVEYXRhLm5leHRQaWVjZSkge1xuICAgICAgICB0aGlzLmRyYXdOZXh0UGllY2UobmV4dFBpZWNlQ2FudmFzLCBnYW1lRGF0YS5uZXh0UGllY2UpO1xuICAgICAgfVxuXG4gICAgICAvLyDjg5vjg7zjg6vjg4njg5Tjg7zjgrnjga7mj4/nlLtcbiAgICAgIGlmIChob2xkUGllY2VDYW52YXMgJiYgZ2FtZURhdGEuaG9sZFBpZWNlKSB7XG4gICAgICAgIHRoaXMuZHJhd0hvbGRQaWVjZShob2xkUGllY2VDYW52YXMsIGdhbWVEYXRhLmhvbGRQaWVjZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgaW4gcmVuZGVyIGZ1bmN0aW9uOicsIGVycm9yKTtcbiAgICB9XG4gIH1cbn0iLCIvLyBTUlPjgq3jg4Pjgq/jg4fjg7zjgr/jga7mp4vpgKA6IFtzdGF0ZV1ba2lja0luZGV4XVt4L3ldXG4vLyBzdGF0ZTog54++5Zyo44Gu5Zue6Lui54q25oWLICgwLTMpXG4vLyBraWNrSW5kZXg6IOOCreODg+OCr+ODhuOCueODiOOBruOCpOODs+ODh+ODg+OCr+OCuSAoMC00KVxuLy8gW3gveV06IOOCreODg+OCr+OCquODleOCu+ODg+ODiCAoeCwgeSlcbmV4cG9ydCBjb25zdCBTUlNfS0lDS1NfSkxUU1ogPSBbXG4gIC8vIDAgLT4gUiAoMC0+MSlcbiAgW1xuICAgIFswLCAwXSwgWy0xLCAwXSwgWy0xLCAtMV0sIFswLCAyXSwgWy0xLCAyXVxuICBdLFxuICAvLyBSIC0+IDIgKDEtPjIpXG4gIFtcbiAgICBbMCwgMF0sIFsxLCAwXSwgWzEsIC0xXSwgWzAsIDJdLCBbMSwgMl1cbiAgXSxcbiAgLy8gMiAtPiBMICgyLT4zKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFsxLCAxXSwgWzAsIC0yXSwgWzEsIC0yXVxuICBdLFxuICAvLyBMIC0+IDAgKDMtPjApXG4gIFtcbiAgICBbMCwgMF0sIFstMSwgMF0sIFstMSwgMV0sIFswLCAtMl0sIFstMSwgLTJdXG4gIF1cbl07XG5cbmV4cG9ydCBjb25zdCBTUlNfS0lDS1NfSSA9IFtcbiAgLy8gMCAtPiBSICgwLT4xKVxuICBbXG4gICAgWzAsIDBdLCBbLTIsIDBdLCBbMSwgMF0sIFstMiwgLTFdLCBbMSwgMl1cbiAgXSxcbiAgLy8gUiAtPiAyICgxLT4yKVxuICBbXG4gICAgWzAsIDBdLCBbLTEsIDBdLCBbMiwgMF0sIFstMSwgMl0sIFsyLCAtMV1cbiAgXSxcbiAgLy8gMiAtPiBMICgyLT4zKVxuICBbXG4gICAgWzAsIDBdLCBbMiwgMF0sIFstMSwgMF0sIFsyLCAxXSwgWy0xLCAtMl1cbiAgXSxcbiAgLy8gTCAtPiAwICgzLT4wKVxuICBbXG4gICAgWzAsIDBdLCBbMSwgMF0sIFstMiwgMF0sIFsxLCAtMl0sIFstMiwgMV1cbiAgXVxuXTtcblxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uU3lzdGVtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5raWNrRGF0YSA9IHtcbiAgICAgICdJJzogU1JTX0tJQ0tTX0ksXG4gICAgICAnZGVmYXVsdCc6IFNSU19LSUNLU19KTFRTWlxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44OU44O844K544K/44Kk44OX44Gr5b+c44GY44Gf44Kt44OD44Kv44OH44O844K/44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwaWVjZVR5cGUgLSDjg5Tjg7zjgrnjga7jgr/jgqTjg5dcbiAgICogQHJldHVybnMge0FycmF5fSDjgq3jg4Pjgq/jg4fjg7zjgr9cbiAgICovXG4gIGdldEtpY2tEYXRhKHBpZWNlVHlwZSkge1xuICAgIHJldHVybiB0aGlzLmtpY2tEYXRhW3BpZWNlVHlwZV0gfHwgdGhpcy5raWNrRGF0YVsnZGVmYXVsdCddO1xuICB9XG5cbiAgLyoqXG4gICAqIOWbnui7oueKtuaFi+OCkuaknOiovOOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25TdGF0ZSAtIOWbnui7oueKtuaFi1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g5pyJ5Yq544GL44Gp44GG44GLXG4gICAqL1xuICB2YWxpZGF0ZVJvdGF0aW9uU3RhdGUocm90YXRpb25TdGF0ZSkge1xuICAgIHJldHVybiB0eXBlb2Ygcm90YXRpb25TdGF0ZSA9PT0gJ251bWJlcicgJiYgcm90YXRpb25TdGF0ZSA+PSAwICYmIHJvdGF0aW9uU3RhdGUgPD0gMztcbiAgfVxuXG4gIC8qKlxuICAgKiDjgq3jg4Pjgq/jg4bjgrnjg4jjga7jgqrjg5Xjgrvjg4Pjg4jjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBpZWNlVHlwZSAtIOODlOODvOOCueOBruOCv+OCpOODl1xuICAgKiBAcGFyYW0ge251bWJlcn0gb3JpZ2luYWxSb3RhdGlvblN0YXRlIC0g5YWD44Gu5Zue6Lui54q25oWLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaXJlY3Rpb24gLSDlm57ou6LmlrnlkJEgKDE6IOaZguioiOWbnuOCiiwgLTE6IOWPjeaZguioiOWbnuOCiilcbiAgICogQHJldHVybnMge0FycmF5PEFycmF5PG51bWJlcj4+fSDjgq3jg4Pjgq/jg4bjgrnjg4jjga7jgqrjg5Xjgrvjg4Pjg4jphY3liJdcbiAgICovXG4gIGdldEtpY2tPZmZzZXRzKHBpZWNlVHlwZSwgb3JpZ2luYWxSb3RhdGlvblN0YXRlLCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGVSb3RhdGlvblN0YXRlKG9yaWdpbmFsUm90YXRpb25TdGF0ZSkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLnhKHlirnjgarlm57ou6LnirbmhYs6XCIsIG9yaWdpbmFsUm90YXRpb25TdGF0ZSk7XG4gICAgICByZXR1cm4gW1swLCAwXV07IC8vIOODh+ODleOCqeODq+ODiOOBruOCquODleOCu+ODg+ODiFxuICAgIH1cblxuICAgIGNvbnN0IGtpY2tEYXRhID0gdGhpcy5nZXRLaWNrRGF0YShwaWVjZVR5cGUpO1xuICAgIGNvbnN0IGtpY2tzID0ga2lja0RhdGFbb3JpZ2luYWxSb3RhdGlvblN0YXRlICUgNF07XG4gICAgXG4gICAgaWYgKCFraWNrcyB8fCAhQXJyYXkuaXNBcnJheShraWNrcykpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGtpY2tzIGRhdGE6XCIsIGtpY2tzLCBcImZvciByb3RhdGlvbiBzdGF0ZTpcIiwgb3JpZ2luYWxSb3RhdGlvblN0YXRlKTtcbiAgICAgIHJldHVybiBbWzAsIDBdXTsgLy8g44OH44OV44Kp44Or44OI44Gu44Kq44OV44K744OD44OIXG4gICAgfVxuICAgIFxuICAgIC8vIOWPjeaZguioiOWbnuOCiuOBruWgtOWQiOOBr+OCreODg+OCr+ODh+ODvOOCv+OCkuWPjei7olxuICAgIGNvbnN0IHRlc3RTZXQgPSBkaXJlY3Rpb24gPT09IDEgXG4gICAgICA/IFsuLi5raWNrc10gLy8g6YWN5YiX44Gu44Kz44OU44O844KS5L2c5oiQXG4gICAgICA6IGtpY2tzLm1hcChraWNrID0+IHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2ljaykgfHwga2ljay5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGtpY2sgZGF0YSBmb3JtYXQ6XCIsIGtpY2spO1xuICAgICAgICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFsta2lja1swXSwgLWtpY2tbMV1dO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXN0U2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIOWbnui7ouOCkuippuihjOOBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGllY2UgLSDjg5Tjg7zjgrnjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRpcmVjdGlvbiAtIOWbnui7ouaWueWQkSAoMTog5pmC6KiI5Zue44KKLCAtMTog5Y+N5pmC6KiI5Zue44KKKVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb2xsaXNpb25DaGVja0ZuIC0g6KGd56qB5Yik5a6a44KS6KGM44GG6Zai5pWwXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOWbnui7oue1kOaenCB7c3VjY2VzczogYm9vbGVhbiwgZmluYWxQb3NpdGlvbj86IHt4LCB5fX1cbiAgICovXG4gIGF0dGVtcHRSb3RhdGlvbihwaWVjZSwgZGlyZWN0aW9uLCBjb2xsaXNpb25DaGVja0ZuKSB7XG4gICAgaWYgKCFwaWVjZSB8fCAhcGllY2UubWF0cml4IHx8ICFBcnJheS5pc0FycmF5KHBpZWNlLm1hdHJpeCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBwaWVjZSBmb3Igcm90YXRpb24nKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xsaXNpb25DaGVja0ZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdDb2xsaXNpb24gY2hlY2sgZnVuY3Rpb24gaXMgcmVxdWlyZWQnKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIOWFg+OBrueKtuaFi+OCkuS/neWtmFxuICAgICAgY29uc3Qgb3JpZ2luYWxQb3MgPSB7IC4uLnBpZWNlLnBvcyB9O1xuICAgICAgY29uc3Qgb3JpZ2luYWxNYXRyaXggPSBwaWVjZS5tYXRyaXgubWFwKHJvdyA9PiBcbiAgICAgICAgQXJyYXkuaXNBcnJheShyb3cpID8gWy4uLnJvd10gOiBbXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IG9yaWdpbmFsUm90YXRpb25TdGF0ZSA9IHBpZWNlLnJvdGF0aW9uU3RhdGU7XG4gICAgICBcbiAgICAgIGlmICghdGhpcy52YWxpZGF0ZVJvdGF0aW9uU3RhdGUob3JpZ2luYWxSb3RhdGlvblN0YXRlKSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xuICAgICAgfVxuXG4gICAgICAvLyDjg5Tjg7zjgrnjgpLlm57ou6LvvIjlm57ou6LnirbmhYvjga7mm7TmlrDjga9QaWVjZS5yb3RhdGXlhoXjgafooYzjgYbvvIlcbiAgICAgIHBpZWNlLnJvdGF0ZShkaXJlY3Rpb24pO1xuXG4gICAgICAvLyDjgq3jg4Pjgq/jg4bjgrnjg4jjgpLlrp/ooYxcbiAgICAgIGNvbnN0IGtpY2tPZmZzZXRzID0gdGhpcy5nZXRLaWNrT2Zmc2V0cyhwaWVjZS50eXBlLCBvcmlnaW5hbFJvdGF0aW9uU3RhdGUsIGRpcmVjdGlvbik7XG4gICAgICBcbiAgICAgIGZvciAoY29uc3QgW29mZnNldFgsIG9mZnNldFldIG9mIGtpY2tPZmZzZXRzKSB7XG4gICAgICAgIHBpZWNlLnBvcy54ICs9IG9mZnNldFg7XG4gICAgICAgIHBpZWNlLnBvcy55ICs9IG9mZnNldFk7XG5cbiAgICAgICAgaWYgKCFjb2xsaXNpb25DaGVja0ZuKCkpIHtcbiAgICAgICAgICAvLyDooZ3nqoHjgYzjgarjgZHjgozjgbDlm57ou6LmiJDlip9cbiAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBmaW5hbFBvc2l0aW9uOiB7IC4uLnBpZWNlLnBvcyB9IH07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOihneeqgeOBmeOCi+WgtOWQiOOBr+S9jee9ruOCkuaIu+OBl+OBpuasoeOBruODhuOCueODiOOCkuippuOBmVxuICAgICAgICBwaWVjZS5wb3MueCAtPSBvZmZzZXRYO1xuICAgICAgICBwaWVjZS5wb3MueSAtPSBvZmZzZXRZO1xuICAgICAgfVxuXG4gICAgICAvLyDlhajjgabjga7jg4bjgrnjg4jjgafooZ3nqoHjgZnjgovloLTlkIjjgIHlhYPjga7nirbmhYvjgavmiLvjgZlcbiAgICAgIHBpZWNlLm1hdHJpeCA9IG9yaWdpbmFsTWF0cml4O1xuICAgICAgcGllY2Uucm90YXRpb25TdGF0ZSA9IG9yaWdpbmFsUm90YXRpb25TdGF0ZTtcbiAgICAgIHBpZWNlLnBvcyA9IHsgLi4ub3JpZ2luYWxQb3MgfTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHJvdGF0aW9uIGF0dGVtcHQ6JywgZXJyb3IpO1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU1JT44OH44O844K/44KS5qSc6Ki844GZ44KLXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDjg4fjg7zjgr/jgYzmnInlirnjgYvjganjgYbjgYtcbiAgICovXG4gIHZhbGlkYXRlU1JTRGF0YSgpIHtcbiAgICBjb25zdCByZXF1aXJlZFN0YXRlcyA9IDQ7XG4gICAgY29uc3QgcmVxdWlyZWRLaWNrcyA9IDU7XG4gICAgXG4gICAgZm9yIChjb25zdCBbcGllY2VUeXBlLCBraWNrRGF0YV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5raWNrRGF0YSkpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShraWNrRGF0YSkgfHwga2lja0RhdGEubGVuZ3RoICE9PSByZXF1aXJlZFN0YXRlcykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGtpY2sgZGF0YSBzdHJ1Y3R1cmUgZm9yICR7cGllY2VUeXBlfTogZXhwZWN0ZWQgJHtyZXF1aXJlZFN0YXRlc30gc3RhdGVzYCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgZm9yIChsZXQgc3RhdGUgPSAwOyBzdGF0ZSA8IGtpY2tEYXRhLmxlbmd0aDsgc3RhdGUrKykge1xuICAgICAgICBjb25zdCBraWNrcyA9IGtpY2tEYXRhW3N0YXRlXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGtpY2tzKSB8fCBraWNrcy5sZW5ndGggIT09IHJlcXVpcmVkS2lja3MpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGtpY2tzIGZvciAke3BpZWNlVHlwZX0gc3RhdGUgJHtzdGF0ZX06IGV4cGVjdGVkICR7cmVxdWlyZWRLaWNrc30ga2lja3NgKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGtpY2tJbmRleCA9IDA7IGtpY2tJbmRleCA8IGtpY2tzLmxlbmd0aDsga2lja0luZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBraWNrID0ga2lja3Nba2lja0luZGV4XTtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoa2ljaykgfHwga2ljay5sZW5ndGggIT09IDIgfHwgXG4gICAgICAgICAgICAgIHR5cGVvZiBraWNrWzBdICE9PSAnbnVtYmVyJyB8fCB0eXBlb2Yga2lja1sxXSAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQga2ljayBmb3JtYXQgZm9yICR7cGllY2VUeXBlfSBzdGF0ZSAke3N0YXRlfSBraWNrICR7a2lja0luZGV4fWApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlm57ou6Ljgrfjgrnjg4bjg6Djga7mg4XloLHjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge09iamVjdH0g44K344K544OG44Og5oOF5aCxXG4gICAqL1xuICBnZXRTeXN0ZW1JbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzeXN0ZW06ICdTUlMgKFN1cGVyIFJvdGF0aW9uIFN5c3RlbSknLFxuICAgICAgc3VwcG9ydGVkUGllY2VzOiBPYmplY3Qua2V5cyh0aGlzLmtpY2tEYXRhKSxcbiAgICAgIGlzVmFsaWQ6IHRoaXMudmFsaWRhdGVTUlNEYXRhKClcbiAgICB9O1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIFNjb3JlQ2FsY3VsYXRvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIOODqeOCpOODs+a2iOWOu+aVsOOBq+W/nOOBmOOBn+WfuuekjuW+l+eCuVxuICAgIHRoaXMubGluZVNjb3JlcyA9IFswLCA0MCwgMTAwLCAzMDAsIDEyMDBdOyAvLyAwLTTjg6njgqTjg7PmtojjgZfjgZ/jgajjgY3jga7ln7rnpI7lvpfngrlcbiAgICBcbiAgICAvLyDjg6zjg5njg6vjgqLjg4Pjg5fjgavlv4XopoHjgarjg6njgqTjg7PmlbBcbiAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSAxMDtcbiAgICBcbiAgICAvLyDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjga7jg5zjg7zjg4rjgrlcbiAgICB0aGlzLnNvZnREcm9wQm9udXMgPSAxO1xuICAgIFxuICAgIC8vIOODj+ODvOODieODieODreODg+ODl+OBruODnOODvOODiuOCue+8iOi3nembouOBguOBn+OCiu+8iVxuICAgIHRoaXMuaGFyZERyb3BCb251cyA9IDI7XG4gIH1cblxuICAvKipcbiAgICog44Op44Kk44Oz5raI5Y6744Gr44KI44KL44K544Kz44Ki44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsIC0g54++5Zyo44Gu44Os44OZ44OrXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOioiOeul+OBleOCjOOBn+OCueOCs+OColxuICAgKi9cbiAgY2FsY3VsYXRlTGluZVNjb3JlKGxpbmVzQ2xlYXJlZCwgbGV2ZWwpIHtcbiAgICBpZiAodHlwZW9mIGxpbmVzQ2xlYXJlZCAhPT0gJ251bWJlcicgfHwgbGluZXNDbGVhcmVkIDwgMCkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGxpbmVzQ2xlYXJlZCB2YWx1ZTonLCBsaW5lc0NsZWFyZWQpO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgbGV2ZWwgIT09ICdudW1iZXInIHx8IGxldmVsIDwgMSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGxldmVsIHZhbHVlOicsIGxldmVsKTtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbmRleCA9IE1hdGgubWluKE1hdGgubWF4KDAsIE1hdGguZmxvb3IobGluZXNDbGVhcmVkKSksIHRoaXMubGluZVNjb3Jlcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gdGhpcy5saW5lU2NvcmVzW2luZGV4XSAqIGxldmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCveODleODiOODieODreODg+ODl+OBruOCueOCs+OCouOCkuioiOeul+OBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gZHJvcERpc3RhbmNlIC0g44OJ44Ot44OD44OX44GX44Gf6Led6ZuiXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IOOCveODleODiOODieODreODg+ODl+OCueOCs+OColxuICAgKi9cbiAgY2FsY3VsYXRlU29mdERyb3BTY29yZShkcm9wRGlzdGFuY2UpIHtcbiAgICBpZiAodHlwZW9mIGRyb3BEaXN0YW5jZSAhPT0gJ251bWJlcicgfHwgZHJvcERpc3RhbmNlIDwgMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBkcm9wRGlzdGFuY2UgKiB0aGlzLnNvZnREcm9wQm9udXM7XG4gIH1cblxuICAvKipcbiAgICog44OP44O844OJ44OJ44Ot44OD44OX44Gu44K544Kz44Ki44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcm9wRGlzdGFuY2UgLSDjg4njg63jg4Pjg5fjgZfjgZ/ot53pm6JcbiAgICogQHJldHVybnMge251bWJlcn0g44OP44O844OJ44OJ44Ot44OD44OX44K544Kz44KiXG4gICAqL1xuICBjYWxjdWxhdGVIYXJkRHJvcFNjb3JlKGRyb3BEaXN0YW5jZSkge1xuICAgIGlmICh0eXBlb2YgZHJvcERpc3RhbmNlICE9PSAnbnVtYmVyJyB8fCBkcm9wRGlzdGFuY2UgPCAwKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGRyb3BEaXN0YW5jZSAqIHRoaXMuaGFyZERyb3BCb251cztcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgpLoqIjnrpfjgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsTGluZXMgLSDnt4/jg6njgqTjg7PmlbBcbiAgICogQHJldHVybnMge251bWJlcn0g6KiI566X44GV44KM44Gf44Os44OZ44OrXG4gICAqL1xuICBjYWxjdWxhdGVMZXZlbCh0b3RhbExpbmVzKSB7XG4gICAgaWYgKHR5cGVvZiB0b3RhbExpbmVzICE9PSAnbnVtYmVyJyB8fCB0b3RhbExpbmVzIDwgMCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBNYXRoLmZsb29yKHRvdGFsTGluZXMgLyB0aGlzLmxpbmVzUGVyTGV2ZWwpICsgMTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg5njg6vjgqLjg4Pjg5fjgYzlv4XopoHjgYvjg4Hjgqfjg4Pjgq/jgZnjgotcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRMaW5lcyAtIOePvuWcqOOBruODqeOCpOODs+aVsFxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudExldmVsIC0g54++5Zyo44Gu44Os44OZ44OrXG4gICAqIEByZXR1cm5zIHtib29sZWFufSDjg6zjg5njg6vjgqLjg4Pjg5fjgYzlv4XopoHjgYvjganjgYbjgYtcbiAgICovXG4gIHNob3VsZExldmVsVXAoY3VycmVudExpbmVzLCBjdXJyZW50TGV2ZWwpIHtcbiAgICBjb25zdCBuZXdMZXZlbCA9IHRoaXMuY2FsY3VsYXRlTGV2ZWwoY3VycmVudExpbmVzKTtcbiAgICByZXR1cm4gbmV3TGV2ZWwgPiBjdXJyZW50TGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICog5qyh44Gu44Os44OZ44Or44G+44Gn44Gr5b+F6KaB44Gq44Op44Kk44Oz5pWw44KS6KiI566X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjdXJyZW50TGluZXMgLSDnj77lnKjjga7jg6njgqTjg7PmlbBcbiAgICogQHJldHVybnMge251bWJlcn0g5qyh44Gu44Os44OZ44Or44G+44Gn44Gr5b+F6KaB44Gq44Op44Kk44Oz5pWwXG4gICAqL1xuICBnZXRMaW5lc1VudGlsTmV4dExldmVsKGN1cnJlbnRMaW5lcykge1xuICAgIGlmICh0eXBlb2YgY3VycmVudExpbmVzICE9PSAnbnVtYmVyJyB8fCBjdXJyZW50TGluZXMgPCAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW5lc1BlckxldmVsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjdXJyZW50TGV2ZWxMaW5lcyA9IGN1cnJlbnRMaW5lcyAlIHRoaXMubGluZXNQZXJMZXZlbDtcbiAgICByZXR1cm4gdGhpcy5saW5lc1BlckxldmVsIC0gY3VycmVudExldmVsTGluZXM7XG4gIH1cblxuICAvKipcbiAgICog6KSH5ZCI44K544Kz44Ki44KS6KiI566X44GZ44KL77yI44Op44Kk44Oz5raI5Y67ICsg44OJ44Ot44OD44OX44Oc44O844OK44K577yJXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzY29yZURhdGEgLSDjgrnjgrPjgqLoqIjnrpfjg4fjg7zjgr9cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlRGF0YS5saW5lc0NsZWFyZWQgLSDmtojljrvjgZfjgZ/jg6njgqTjg7PmlbBcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlRGF0YS5sZXZlbCAtIOePvuWcqOOBruODrOODmeODq1xuICAgKiBAcGFyYW0ge251bWJlcn0gc2NvcmVEYXRhLnNvZnREcm9wRGlzdGFuY2UgLSDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjga7ot53pm6LvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNjb3JlRGF0YS5oYXJkRHJvcERpc3RhbmNlIC0g44OP44O844OJ44OJ44Ot44OD44OX44Gu6Led6Zui77yI44Kq44OX44K344On44Oz77yJXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IOioiOeul+e1kOaenCB7dG90YWxTY29yZSwgbGluZVNjb3JlLCBzb2Z0RHJvcFNjb3JlLCBoYXJkRHJvcFNjb3JlfVxuICAgKi9cbiAgY2FsY3VsYXRlVG90YWxTY29yZShzY29yZURhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBsaW5lc0NsZWFyZWQgPSAwLFxuICAgICAgbGV2ZWwgPSAxLFxuICAgICAgc29mdERyb3BEaXN0YW5jZSA9IDAsXG4gICAgICBoYXJkRHJvcERpc3RhbmNlID0gMFxuICAgIH0gPSBzY29yZURhdGE7XG5cbiAgICBjb25zdCBsaW5lU2NvcmUgPSB0aGlzLmNhbGN1bGF0ZUxpbmVTY29yZShsaW5lc0NsZWFyZWQsIGxldmVsKTtcbiAgICBjb25zdCBzb2Z0RHJvcFNjb3JlID0gdGhpcy5jYWxjdWxhdGVTb2Z0RHJvcFNjb3JlKHNvZnREcm9wRGlzdGFuY2UpO1xuICAgIGNvbnN0IGhhcmREcm9wU2NvcmUgPSB0aGlzLmNhbGN1bGF0ZUhhcmREcm9wU2NvcmUoaGFyZERyb3BEaXN0YW5jZSk7XG4gICAgY29uc3QgdG90YWxTY29yZSA9IGxpbmVTY29yZSArIHNvZnREcm9wU2NvcmUgKyBoYXJkRHJvcFNjb3JlO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvdGFsU2NvcmUsXG4gICAgICBsaW5lU2NvcmUsXG4gICAgICBzb2Z0RHJvcFNjb3JlLFxuICAgICAgaGFyZERyb3BTY29yZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44K544Kz44Ki6KiI566X44Gu6Kit5a6a44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSDmlrDjgZfjgYToqK3lrppcbiAgICogQHBhcmFtIHtBcnJheTxudW1iZXI+fSBjb25maWcubGluZVNjb3JlcyAtIOODqeOCpOODs+a2iOWOu+OCueOCs+OCoumFjeWIl++8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLmxpbmVzUGVyTGV2ZWwgLSDjg6zjg5njg6vjgYLjgZ/jgorjga7jg6njgqTjg7PmlbDvvIjjgqrjg5fjgrfjg6fjg7PvvIlcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy5zb2Z0RHJvcEJvbnVzIC0g44K944OV44OI44OJ44Ot44OD44OX44Oc44O844OK44K577yI44Kq44OX44K344On44Oz77yJXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcuaGFyZERyb3BCb251cyAtIOODj+ODvOODieODieODreODg+ODl+ODnOODvOODiuOCue+8iOOCquODl+OCt+ODp+ODs++8iVxuICAgKi9cbiAgdXBkYXRlQ29uZmlnKGNvbmZpZykge1xuICAgIGlmIChjb25maWcubGluZVNjb3JlcyAmJiBBcnJheS5pc0FycmF5KGNvbmZpZy5saW5lU2NvcmVzKSkge1xuICAgICAgdGhpcy5saW5lU2NvcmVzID0gWy4uLmNvbmZpZy5saW5lU2NvcmVzXTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjb25maWcubGluZXNQZXJMZXZlbCA9PT0gJ251bWJlcicgJiYgY29uZmlnLmxpbmVzUGVyTGV2ZWwgPiAwKSB7XG4gICAgICB0aGlzLmxpbmVzUGVyTGV2ZWwgPSBjb25maWcubGluZXNQZXJMZXZlbDtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBjb25maWcuc29mdERyb3BCb251cyA9PT0gJ251bWJlcicgJiYgY29uZmlnLnNvZnREcm9wQm9udXMgPj0gMCkge1xuICAgICAgdGhpcy5zb2Z0RHJvcEJvbnVzID0gY29uZmlnLnNvZnREcm9wQm9udXM7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2YgY29uZmlnLmhhcmREcm9wQm9udXMgPT09ICdudW1iZXInICYmIGNvbmZpZy5oYXJkRHJvcEJvbnVzID49IDApIHtcbiAgICAgIHRoaXMuaGFyZERyb3BCb251cyA9IGNvbmZpZy5oYXJkRHJvcEJvbnVzO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDnj77lnKjjga7oqK3lrprjgpLlj5blvpfjgZnjgotcbiAgICogQHJldHVybnMge09iamVjdH0g54++5Zyo44Gu6Kit5a6aXG4gICAqL1xuICBnZXRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmVTY29yZXM6IFsuLi50aGlzLmxpbmVTY29yZXNdLFxuICAgICAgbGluZXNQZXJMZXZlbDogdGhpcy5saW5lc1BlckxldmVsLFxuICAgICAgc29mdERyb3BCb251czogdGhpcy5zb2Z0RHJvcEJvbnVzLFxuICAgICAgaGFyZERyb3BCb251czogdGhpcy5oYXJkRHJvcEJvbnVzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrnjgrPjgqLlsaXmrbTjgpLnrqHnkIbjgZnjgovjgZ/jgoHjga7jg5jjg6vjg5Hjg7xcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRTY29yZSAtIOePvuWcqOOBruOCueOCs+OColxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3U2NvcmUgLSDmlrDjgZfjgYTjgrnjgrPjgqJcbiAgICogQHJldHVybnMge09iamVjdH0g44K544Kz44Ki5pu05paw5oOF5aCxIHtwcmV2aW91c1Njb3JlLCBuZXdTY29yZSwgaW5jcmVhc2V9XG4gICAqL1xuICBjcmVhdGVTY29yZVVwZGF0ZShjdXJyZW50U2NvcmUsIG5ld1Njb3JlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZXZpb3VzU2NvcmU6IGN1cnJlbnRTY29yZSxcbiAgICAgIG5ld1Njb3JlOiBjdXJyZW50U2NvcmUgKyBuZXdTY29yZSxcbiAgICAgIGluY3JlYXNlOiBuZXdTY29yZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog44Os44OZ44Or5Yil44Gu6Zuj5piT5bqm5oOF5aCx44KS5Y+W5b6X44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsZXZlbCAtIOODrOODmeODq1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDpm6PmmJPluqbmg4XloLFcbiAgICovXG4gIGdldExldmVsSW5mbyhsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgIT09ICdudW1iZXInIHx8IGxldmVsIDwgMSkge1xuICAgICAgbGV2ZWwgPSAxO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgbGV2ZWwsXG4gICAgICByZXF1aXJlZExpbmVzOiBsZXZlbCAqIHRoaXMubGluZXNQZXJMZXZlbCxcbiAgICAgIHNjb3JlTXVsdGlwbGllcjogbGV2ZWwsXG4gICAgICBuZXh0TGV2ZWxBdDogKGxldmVsICsgMSkgKiB0aGlzLmxpbmVzUGVyTGV2ZWxcbiAgICB9O1xuICB9XG59IiwiZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZU1hbmFnZXIge1xuICBjb25zdHJ1Y3Rvcihyb3dzLCBjb2xzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGN0eDogbnVsbCxcbiAgICAgIGNhbnZhczogbnVsbCxcbiAgICAgIGJvYXJkOiBbXSxcbiAgICAgIFJPV1M6IHJvd3MsXG4gICAgICBDT0xTOiBjb2xzLFxuICAgICAgcGllY2U6IG51bGwsXG4gICAgICBuZXh0UGllY2U6IG51bGwsXG4gICAgICBzY29yZTogMCxcbiAgICAgIGxpbmVzOiAwLFxuICAgICAgbGV2ZWw6IDEsXG4gICAgICBkcm9wQ291bnRlcjogMCxcbiAgICAgIGRyb3BJbnRlcnZhbDogMTAwMCxcbiAgICAgIGxhc3RUaW1lOiAwLFxuICAgICAgZ2FtZUxvb3BJZDogbnVsbCxcbiAgICAgIGlzR2FtZU92ZXI6IGZhbHNlLFxuICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgIGtleXM6IHt9LFxuICAgICAgaXNTb2Z0RHJvcDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOeKtuaFi+OCkuWPluW+l+OBmeOCi1xuICAgKiBAcmV0dXJucyB7T2JqZWN0fSDnj77lnKjjga7nirbmhYtcbiAgICovXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnibnlrprjga7nirbmhYvlgKTjgpLlj5blvpfjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOWPluW+l+OBmeOCi+eKtuaFi+OBruOCreODvFxuICAgKiBAcmV0dXJucyB7Kn0g54q25oWL5YCkXG4gICAqL1xuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnibnlrprjga7nirbmhYvlgKTjgpLoqK3lrprjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOioreWumuOBmeOCi+eKtuaFi+OBruOCreODvFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIC0g6Kit5a6a44GZ44KL5YCkXG4gICAqL1xuICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOikh+aVsOOBrueKtuaFi+WApOOCkuS4gOW6puOBq+ioreWumuOBmeOCi1xuICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlcyAtIOabtOaWsOOBmeOCi+eKtuaFi+OBruOCquODluOCuOOCp+OCr+ODiFxuICAgKi9cbiAgdXBkYXRlKHVwZGF0ZXMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHVwZGF0ZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODnOODvOODieOCkuWIneacn+WMluOBmeOCi1xuICAgKi9cbiAgaW5pdEJvYXJkKCkge1xuICAgIHRoaXMuc3RhdGUuYm9hcmQgPSBBcnJheSh0aGlzLnN0YXRlLlJPV1MpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KHRoaXMuc3RhdGUuQ09MUykuZmlsbCgwKSk7XG4gIH1cblxuICAvKipcbiAgICog44Ky44O844Og54q25oWL44KS44Oq44K744OD44OI44GZ44KLXG4gICAqL1xuICByZXNldCgpIHtcbiAgICB0aGlzLnN0YXRlLnNjb3JlID0gMDtcbiAgICB0aGlzLnN0YXRlLmxpbmVzID0gMDtcbiAgICB0aGlzLnN0YXRlLmxldmVsID0gMTtcbiAgICB0aGlzLnN0YXRlLmlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdGUuZHJvcENvdW50ZXIgPSAwO1xuICAgIHRoaXMuc3RhdGUuZHJvcEludGVydmFsID0gMTAwMDtcbiAgICB0aGlzLnN0YXRlLmxhc3RUaW1lID0gMDtcbiAgICB0aGlzLnN0YXRlLmlzU29mdERyb3AgPSBmYWxzZTtcbiAgICBcbiAgICBpZiAodGhpcy5zdGF0ZS5nYW1lTG9vcElkKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnN0YXRlLmdhbWVMb29wSWQpO1xuICAgICAgdGhpcy5zdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5pbml0Qm9hcmQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6Djga7ln7rmnKzmg4XloLHjgpLlkIzmnJ/jgZnjgotcbiAgICogQHBhcmFtIHtPYmplY3R9IGdhbWVJbnN0YW5jZSAtIOOCsuODvOODoOOCpOODs+OCueOCv+ODs+OCuVxuICAgKi9cbiAgc3luY1dpdGhHYW1lKGdhbWVJbnN0YW5jZSkge1xuICAgIGlmICghZ2FtZUluc3RhbmNlKSByZXR1cm47XG4gICAgXG4gICAgdGhpcy5zdGF0ZS5zY29yZSA9IGdhbWVJbnN0YW5jZS5zY29yZSB8fCAwO1xuICAgIHRoaXMuc3RhdGUubGluZXMgPSBnYW1lSW5zdGFuY2UubGluZXMgfHwgMDtcbiAgICB0aGlzLnN0YXRlLmxldmVsID0gZ2FtZUluc3RhbmNlLmxldmVsIHx8IDE7XG4gICAgdGhpcy5zdGF0ZS5pc0dhbWVPdmVyID0gZ2FtZUluc3RhbmNlLmlzR2FtZU92ZXIgfHwgZmFsc2U7XG4gICAgdGhpcy5zdGF0ZS5waWVjZSA9IGdhbWVJbnN0YW5jZS5waWVjZSB8fCBudWxsO1xuICAgIHRoaXMuc3RhdGUubmV4dFBpZWNlID0gZ2FtZUluc3RhbmNlLm5leHRQaWVjZSB8fCBudWxsO1xuICAgIHRoaXMuc3RhdGUuaG9sZFBpZWNlID0gZ2FtZUluc3RhbmNlLmhlbGRQaWVjZSB8fCBudWxsO1xuICAgIHRoaXMuc3RhdGUuY2FuSG9sZCA9IGdhbWVJbnN0YW5jZS5jYW5Ib2xkICE9PSB1bmRlZmluZWQgPyBnYW1lSW5zdGFuY2UuY2FuSG9sZCA6IHRydWU7XG4gICAgXG4gICAgaWYgKGdhbWVJbnN0YW5jZS5ib2FyZCAmJiBnYW1lSW5zdGFuY2UuYm9hcmQuZ3JpZCkge1xuICAgICAgdGhpcy5zdGF0ZS5ib2FyZCA9IGdhbWVJbnN0YW5jZS5ib2FyZC5ncmlkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgq3jg7zjga7nirbmhYvjgpLmm7TmlrDjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIOOCreODvOWQjVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHByZXNzZWQgLSDmirzjgZXjgozjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICovXG4gIHVwZGF0ZUtleVN0YXRlKGtleSwgcHJlc3NlZCkge1xuICAgIHRoaXMuc3RhdGUua2V5c1trZXldID0gcHJlc3NlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6Djg6vjg7zjg5dJROOCkuioreWumuOBmeOCi1xuICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSDjgrLjg7zjg6Djg6vjg7zjg5dJRFxuICAgKi9cbiAgc2V0R2FtZUxvb3BJZChpZCkge1xuICAgIHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCA9IGlkO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCsuODvOODoOODq+ODvOODl+OCkuWBnOatouOBmeOCi1xuICAgKi9cbiAgc3RvcEdhbWVMb29wKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgICB0aGlzLnN0YXRlLmdhbWVMb29wSWQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DjgYzlrp/ooYzkuK3jgYvjganjgYbjgYvjgpLliKTlrprjgZnjgotcbiAgICogQHJldHVybnMge2Jvb2xlYW59IOWun+ihjOS4reOBi+OBqeOBhuOBi1xuICAgKi9cbiAgaXNSdW5uaW5nKCkge1xuICAgIHJldHVybiAhdGhpcy5zdGF0ZS5pc0dhbWVPdmVyICYmICF0aGlzLnN0YXRlLnBhdXNlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrLjg7zjg6DjgpLkuIDmmYLlgZzmraIv5YaN6ZaL44GZ44KLXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGF1c2VkIC0g5LiA5pmC5YGc5q2i44GZ44KL44GL44Gp44GG44GLXG4gICAqL1xuICBzZXRQYXVzZWQocGF1c2VkKSB7XG4gICAgdGhpcy5zdGF0ZS5wYXVzZWQgPSBwYXVzZWQ7XG4gIH1cblxuICAvKipcbiAgICog44OJ44Ot44OD44OX6ZaT6ZqU44KS5pu05paw44GZ44KLXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbCAtIOaWsOOBl+OBhOODieODreODg+ODl+mWk+malFxuICAgKi9cbiAgdXBkYXRlRHJvcEludGVydmFsKGludGVydmFsKSB7XG4gICAgdGhpcy5zdGF0ZS5kcm9wSW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr3jg5Xjg4jjg4njg63jg4Pjg5fjga7nirbmhYvjgpLoqK3lrprjgZnjgotcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NvZnREcm9wIC0g44K944OV44OI44OJ44Ot44OD44OX5Lit44GL44Gp44GG44GLXG4gICAqL1xuICBzZXRTb2Z0RHJvcChpc1NvZnREcm9wKSB7XG4gICAgdGhpcy5zdGF0ZS5pc1NvZnREcm9wID0gaXNTb2Z0RHJvcDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg5Djg4PjgrDnlKg6IOePvuWcqOOBrueKtuaFi+OCkuODreOCsOOBq+WHuuWKm+OBmeOCi1xuICAgKi9cbiAgbG9nU3RhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnQgR2FtZSBTdGF0ZTonLCB7XG4gICAgICBzY29yZTogdGhpcy5zdGF0ZS5zY29yZSxcbiAgICAgIGxpbmVzOiB0aGlzLnN0YXRlLmxpbmVzLFxuICAgICAgbGV2ZWw6IHRoaXMuc3RhdGUubGV2ZWwsXG4gICAgICBpc0dhbWVPdmVyOiB0aGlzLnN0YXRlLmlzR2FtZU92ZXIsXG4gICAgICBwYXVzZWQ6IHRoaXMuc3RhdGUucGF1c2VkLFxuICAgICAgcGllY2U6IHRoaXMuc3RhdGUucGllY2UsXG4gICAgICBuZXh0UGllY2U6IHRoaXMuc3RhdGUubmV4dFBpZWNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOeKtuaFi+OBruaknOiovOOCkuihjOOBhlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0g54q25oWL44GM5pyJ5Yq544GL44Gp44GG44GLXG4gICAqL1xuICB2YWxpZGF0ZVN0YXRlKCkge1xuICAgIGNvbnN0IHJlcXVpcmVkRmllbGRzID0gWydzY29yZScsICdsaW5lcycsICdsZXZlbCcsICdST1dTJywgJ0NPTFMnXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHJlcXVpcmVkRmllbGRzKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGVbZmllbGRdICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zb2xlLndhcm4oYEludmFsaWQgc3RhdGUgZmllbGQ6ICR7ZmllbGR9YCwgdGhpcy5zdGF0ZVtmaWVsZF0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN0YXRlLmJvYXJkKSkge1xuICAgICAgY29uc29sZS53YXJuKCdJbnZhbGlkIGJvYXJkIHN0YXRlJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0cnVlO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVUkge1xuICBjb25zdHJ1Y3RvcihzdGF0ZSwgYWN0aW9ucywgZ2FtZVN0YXRlTWFuYWdlcikge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmFjdGlvbnMgPSBhY3Rpb25zO1xuICAgIHRoaXMuZ2FtZVN0YXRlTWFuYWdlciA9IGdhbWVTdGF0ZU1hbmFnZXI7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlVcCA9IHRoaXMub25LZXlVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3QgeyBzdGF0ZSwgYWN0aW9ucyB9ID0gdGhpcztcbiAgICBpZiAoc3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICAgIFxuICAgIC8vIOS4i+OCreODvOS7peWkluOBr+OCreODvOODquODlOODvOODiOOCkueEoeimllxuICAgIGlmIChldmVudC5yZXBlYXQgJiYgZXZlbnQua2V5ICE9PSAnQXJyb3dEb3duJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOOCreODvOOBjOOBmeOBp+OBq+aKvOOBleOCjOOBpuOBhOOCi+WgtOWQiOOBr+WHpueQhuOBl+OBquOBhFxuICAgIGlmIChzdGF0ZS5rZXlzW2V2ZW50LmtleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdGUua2V5c1tldmVudC5rZXldID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICBhY3Rpb25zLm1vdmVQaWVjZSgtMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgIGFjdGlvbnMubW92ZVBpZWNlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgIGFjdGlvbnMuc3RhcnRTb2Z0RHJvcCgpO1xuICAgICAgICBhY3Rpb25zLmRyb3BQaWVjZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBhY3Rpb25zLnJvdGF0ZVBpZWNlKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICAvLyDjg4/jg7zjg4njg4njg63jg4Pjg5c6IOODlOODvOOCueOBjOedgOWcsOOBmeOCi+OBvuOBp+mAo+e2muOBp+iQveOBqOOBmVxuICAgICAgICBpZiAoc3RhdGUucGllY2UgJiYgc3RhdGUucGllY2UucG9zICYmIHR5cGVvZiBzdGF0ZS5waWVjZS5wb3MueSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBsZXQgZHJvcENvdW50ID0gMDtcbiAgICAgICAgICBjb25zdCBtYXhEcm9wcyA9IE1hdGgubWluKHN0YXRlLlJPV1MgfHwgMjAsIDEwMCk7IC8vIOOCiOOCiuWuieWFqOOBquS4iumZkOioreWumlxuICAgICAgICAgIHdoaWxlIChkcm9wQ291bnQgPCBtYXhEcm9wcyAmJiAhc3RhdGUuaXNHYW1lT3ZlciAmJiBzdGF0ZS5waWVjZSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFkgPSBzdGF0ZS5waWVjZS5wb3MueTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWQgPSBhY3Rpb25zLmRyb3BQaWVjZSgpO1xuICAgICAgICAgICAgICBpZiAoIWRyb3BwZWQgfHwgIXN0YXRlLnBpZWNlIHx8IHN0YXRlLnBpZWNlLnBvcy55ID09PSBjdXJyZW50WSkge1xuICAgICAgICAgICAgICAgIC8vIOODlOODvOOCueOBjOiQveOBoeOBquOBi+OBo+OBn+OAgeOBvuOBn+OBr+S9jee9ruOBjOWkieOCj+OCieOBquOBi+OBo+OBn+WgtOWQiOOBr+e1guS6hlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRyb3BDb3VudCsrO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGhhcmQgZHJvcDonLCBlcnJvcik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgY2FzZSAnQyc6XG4gICAgICBjYXNlICdTaGlmdCc6XG4gICAgICAgIC8vIOODm+ODvOODq+ODieapn+iDvVxuICAgICAgICBpZiAoYWN0aW9ucy5ob2xkUGllY2UpIHtcbiAgICAgICAgICBhY3Rpb25zLmhvbGRQaWVjZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncic6XG4gICAgICBjYXNlICdSJzpcbiAgICAgICAgYWN0aW9ucy5yZXNldEdhbWUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgb25LZXlVcChldmVudCkge1xuICAgIHRoaXMuc3RhdGUua2V5c1tldmVudC5rZXldID0gZmFsc2U7XG4gICAgLy8gZ2FtZVN0YXRlTWFuYWdlcuOBjOOBguOCi+WgtOWQiOOBruOBv3VwZGF0ZUtleVN0YXRl44KS5ZG844Gz5Ye644GZXG4gICAgaWYgKHRoaXMuZ2FtZVN0YXRlTWFuYWdlciAmJiB0aGlzLmdhbWVTdGF0ZU1hbmFnZXIudXBkYXRlS2V5U3RhdGUpIHtcbiAgICAgIHRoaXMuZ2FtZVN0YXRlTWFuYWdlci51cGRhdGVLZXlTdGF0ZShldmVudC5rZXksIGZhbHNlKTtcbiAgICB9XG4gICAgLy8g5LiL44Kt44O844GM6Zui44GV44KM44Gf44KJ44OJ44Ot44OD44OX6ZaT6ZqU44KS5YWD44Gr5oi744GZXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIHRoaXMuYWN0aW9ucy5zdG9wU29mdERyb3AoKTtcbiAgICB9XG4gIH1cblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKGtleURvd25IYW5kbGVyID0gdGhpcy5vbktleURvd24sIGtleVVwSGFuZGxlciA9IHRoaXMub25LZXlVcCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKipcbiAqIOODhuODiOODquOCueOCsuODvOODoOOBruOCqOODs+ODiOODquODvOODneOCpOODs+ODiFxuICovXG5cbi8vIOOCueOCv+OCpOODq+OCt+ODvOODiOOCkuOCpOODs+ODneODvOODiFxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4vLyDjgrLjg7zjg6Djg6Ljgrjjg6Xjg7zjg6vjgpLjgqTjg7Pjg53jg7zjg4hcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2dhbWUuanMnO1xuXG4vLyDjg4fjg5Djg4PjgrDnlKjjga7jgrnjgr/jgqTjg6vjgpLov73liqBcbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbnN0eWxlLnRleHRDb250ZW50ID0gYFxuICAjZ2FtZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICB9XG5gO1xuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbi8vIOODieOCreODpeODoeODs+ODiOOBruiqreOBv+i+vOOBv+WujOS6huOCkuW+heOBo+OBpuOCsuODvOODoOOCkuWIneacn+WMllxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8g44OG44K544OI55Kw5aKD44Gn44Gv6Kmz57Sw44Ot44Kw44KS5Ye644GV44Gq44GEXG4gIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgIGNvbnNvbGUubG9nKCdET01Db250ZW50TG9hZGVkIOOCpOODmeODs+ODiOOBjOeZuueBq+OBl+OBvuOBl+OBnycpO1xuICB9XG4gIFxuICB0cnkge1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0Jykge1xuICAgICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu54q25oWL44KS56K66KqNXG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgICAgaWYgKGNhbnZhcykge1xuICAgICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K6OicsIGNhbnZhcy53aWR0aCwgJ3gnLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCueOCv+OCpOODq+OCteOCpOOCujonLCBjYW52YXMuc3R5bGUud2lkdGgsICd4JywgY2FudmFzLnN0eWxlLmhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfjgq3jg6Pjg7Pjg5DjgrnopoHntKDjgYzopovjgaTjgYvjgorjgb7jgZvjgpMnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g44Ky44O844Og44KS6ZaL5aeLXG4gICAgaW5pdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJHQU1FX0NPTlNUQU5UUyIsIkNPTFMiLCJST1dTIiwiQkxPQ0tfU0laRSIsIlNDT1JFX1RBQkxFIiwiU0hBUEVTIiwiQ09MT1JTIiwiR0FNRV9TVEFURVMiLCJJTklUIiwiUExBWUlORyIsIlBBVVNFRCIsIkdBTUVfT1ZFUiIsIkJvYXJkIiwiY29scyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInJvd3MiLCJfY2xhc3NDYWxsQ2hlY2siLCJjbGVhciIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJncmlkIiwiQXJyYXkiLCJmcm9tIiwiZmlsbCIsImlzSW5zaWRlIiwieCIsInkiLCJpc0VtcHR5Iiwic2V0Q2VsbCIsImdldENlbGwiLCJtZXJnZSIsInBpZWNlIiwibWF0cml4IiwicG9zIiwiY2xlYXJMaW5lcyIsImlzQXJyYXkiLCJjb25zb2xlIiwiZXJyb3IiLCJjbGVhcmVkIiwibmV3R3JpZCIsInJvdyIsIndhcm4iLCJjb25jYXQiLCJldmVyeSIsImNlbGwiLCJwdXNoIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidW5zaGlmdCIsIlBpZWNlIiwiUm90YXRpb25TeXN0ZW0iLCJTY29yZUNhbGN1bGF0b3IiLCJURVRST01JTk9fTUFQIiwiSSIsIkoiLCJMIiwiTyIsIlMiLCJUIiwiWiIsIkdhbWUiLCJ0ZXRyb21pbm9zIiwiYm9hcmQiLCJuZXh0UGllY2UiLCJoZWxkUGllY2UiLCJjYW5Ib2xkIiwibGV2ZWxTcGVlZHMiLCJsaW5lc1BlckxldmVsIiwiZHJvcEludGVydmFsIiwiZ2V0RHJvcEludGVydmFsIiwiaXNTb2Z0RHJvcCIsInJvdGF0aW9uU3lzdGVtIiwic2NvcmVDYWxjdWxhdG9yIiwicmVzZXQiLCJsZXZlbEluZGV4IiwiTWF0aCIsIm1pbiIsImxldmVsIiwic3RhcnRTb2Z0RHJvcCIsInN0b3BTb2Z0RHJvcCIsImNyZWF0ZVBpZWNlIiwiaW5kZXgiLCJ0eXBlIiwiT2JqZWN0Iiwia2V5cyIsImZsb29yIiwicmFuZG9tIiwibGluZXMiLCJzY29yZSIsImlzR2FtZU92ZXIiLCJwYXVzZWQiLCJjaGVja0xldmVsVXAiLCJzaG91bGRMZXZlbFVwIiwiY2FsY3VsYXRlTGV2ZWwiLCJtb3ZlUGllY2UiLCJkeCIsIm1vdmUiLCJoYXNDb2xsaXNpb24iLCJfdGhpcyRwaWVjZSIsImJvYXJkWCIsImJvYXJkWSIsInNwYXduUGllY2UiLCJvcmlnaW5hbFkiLCJkcm9wUGllY2UiLCJtZXJnZVBpZWNlIiwibGluZXNDbGVhcmVkIiwiY2FsY3VsYXRlU2NvcmUiLCJfdGhpcyRwaWVjZTIiLCJjYWxjdWxhdGVMaW5lU2NvcmUiLCJ1cGRhdGVTY29yZSIsInJvdGF0ZVBpZWNlIiwiZGlyIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwicmVzdWx0IiwiYXR0ZW1wdFJvdGF0aW9uIiwic3VjY2VzcyIsImhvbGRQaWVjZSIsInRlbXAiLCJfb2JqZWN0U3ByZWFkIiwicm90YXRpb25TdGF0ZSIsImR5Iiwicm90YXRlIiwiTiIsIk0iLCJyb3RhdGVkIiwiXyIsIkdhbWVVSSIsIlJlbmRlcmVyIiwiR2FtZVN0YXRlTWFuYWdlciIsInRldHJpc0dhbWUiLCJldmVudE1hbmFnZXIiLCJFdmVudFRhcmdldCIsImdhbWVTdGF0ZU1hbmFnZXIiLCJyZW5kZXJlciIsImdhbWVTdGF0ZSIsIlByb3h5Iiwic3RhdGUiLCJnZXQiLCJ0YXJnZXQiLCJwcm9wIiwiaW5pdEJvYXJkIiwibG9nU3RhdGUiLCJzZXQiLCJkcmF3IiwiZ2V0U3RhdGUiLCJnYW1lRGF0YSIsImJvYXJkR3JpZCIsIm5leHRQaWVjZUNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJob2xkUGllY2VDYW52YXMiLCJyZW5kZXIiLCJ1cGRhdGVVSSIsInVwZGF0ZVNjb3JlRGlzcGxheSIsInVwZGF0ZUxpbmVzRGlzcGxheSIsInVwZGF0ZUxldmVsRGlzcGxheSIsImlzTmFOIiwic2NvcmVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJ0b1N0cmluZyIsImxpbmVzRWxlbWVudCIsImxldmVsRWxlbWVudCIsInVwZGF0ZUdhbWVTdGF0ZSIsInN5bmNXaXRoR2FtZSIsInBsYXllckRyb3AiLCJpc1J1bm5pbmciLCJkcm9wcGVkIiwic3RvcEdhbWVMb29wIiwiYWxlcnQiLCJwbGF5ZXJNb3ZlIiwicGxheWVyUm90YXRlIiwicGxheWVySG9sZCIsInVwZGF0ZSIsInRpbWUiLCJnYW1lTG9vcElkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0R2FtZUxvb3BJZCIsImxhc3RUaW1lIiwiZGVsdGFUaW1lIiwiZHJvcENvdW50ZXIiLCJuZXdEcm9wQ291bnRlciIsInNldFBhdXNlZCIsImRyYXdFcnJvciIsImdhbWVVSSIsInJlc2V0R2FtZSIsImxvZyIsInNldHVwRXZlbnRMaXN0ZW5lcnMiLCJvbktleURvd24iLCJvbktleVVwIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiaW5pdCIsImN0eCIsImdldENvbnRleHQiLCJiaW5kIiwiaW5pdEdhbWUiLCJzZXRUZXRyaXNHYW1lIiwibmV3R2FtZSIsImV4cG9ydHMiLCJjb2xvcnMiLCJibG9ja1NpemUiLCJFcnJvciIsImRyYXdNYXRyaXgiLCJvZmZzZXQiLCJoYXNDdHgiLCJoYXNNYXRyaXgiLCJoYXNPZmZzZXQiLCJoYXNDb2xvcnMiLCJoYXNCbG9ja1NpemUiLCJmb3JFYWNoIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjbGVhckNhbnZhcyIsImNsZWFyUmVjdCIsImRyYXdCb2FyZCIsImRyYXdQaWVjZSIsImRyYXdOZXh0UGllY2UiLCJuZXh0Q3R4IiwidGVtcFJlbmRlcmVyIiwiZHJhd0hvbGRQaWVjZSIsIlNSU19LSUNLU19KTFRTWiIsIlNSU19LSUNLU19JIiwia2lja0RhdGEiLCJnZXRLaWNrRGF0YSIsInBpZWNlVHlwZSIsInZhbGlkYXRlUm90YXRpb25TdGF0ZSIsImdldEtpY2tPZmZzZXRzIiwib3JpZ2luYWxSb3RhdGlvblN0YXRlIiwiZGlyZWN0aW9uIiwia2lja3MiLCJ0ZXN0U2V0IiwibWFwIiwia2ljayIsImNvbGxpc2lvbkNoZWNrRm4iLCJvcmlnaW5hbFBvcyIsIm9yaWdpbmFsTWF0cml4Iiwia2lja09mZnNldHMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsIm9mZnNldFgiLCJvZmZzZXRZIiwiZmluYWxQb3NpdGlvbiIsImVyciIsImUiLCJmIiwidmFsaWRhdGVTUlNEYXRhIiwicmVxdWlyZWRTdGF0ZXMiLCJyZXF1aXJlZEtpY2tzIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwia2lja0luZGV4IiwiZ2V0U3lzdGVtSW5mbyIsInN5c3RlbSIsInN1cHBvcnRlZFBpZWNlcyIsImlzVmFsaWQiLCJsaW5lU2NvcmVzIiwic29mdERyb3BCb251cyIsImhhcmREcm9wQm9udXMiLCJtYXgiLCJjYWxjdWxhdGVTb2Z0RHJvcFNjb3JlIiwiZHJvcERpc3RhbmNlIiwiY2FsY3VsYXRlSGFyZERyb3BTY29yZSIsInRvdGFsTGluZXMiLCJjdXJyZW50TGluZXMiLCJjdXJyZW50TGV2ZWwiLCJuZXdMZXZlbCIsImdldExpbmVzVW50aWxOZXh0TGV2ZWwiLCJjdXJyZW50TGV2ZWxMaW5lcyIsImNhbGN1bGF0ZVRvdGFsU2NvcmUiLCJzY29yZURhdGEiLCJfc2NvcmVEYXRhJGxpbmVzQ2xlYXIiLCJfc2NvcmVEYXRhJGxldmVsIiwiX3Njb3JlRGF0YSRzb2Z0RHJvcERpIiwic29mdERyb3BEaXN0YW5jZSIsIl9zY29yZURhdGEkaGFyZERyb3BEaSIsImhhcmREcm9wRGlzdGFuY2UiLCJsaW5lU2NvcmUiLCJzb2Z0RHJvcFNjb3JlIiwiaGFyZERyb3BTY29yZSIsInRvdGFsU2NvcmUiLCJ1cGRhdGVDb25maWciLCJjb25maWciLCJnZXRDb25maWciLCJjcmVhdGVTY29yZVVwZGF0ZSIsImN1cnJlbnRTY29yZSIsIm5ld1Njb3JlIiwicHJldmlvdXNTY29yZSIsImluY3JlYXNlIiwiZ2V0TGV2ZWxJbmZvIiwicmVxdWlyZWRMaW5lcyIsInNjb3JlTXVsdGlwbGllciIsIm5leHRMZXZlbEF0IiwidXBkYXRlcyIsImFzc2lnbiIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZ2FtZUluc3RhbmNlIiwidXBkYXRlS2V5U3RhdGUiLCJwcmVzc2VkIiwiaWQiLCJ1cGRhdGVEcm9wSW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldFNvZnREcm9wIiwidmFsaWRhdGVTdGF0ZSIsInJlcXVpcmVkRmllbGRzIiwiX3JlcXVpcmVkRmllbGRzIiwiZmllbGQiLCJhY3Rpb25zIiwiZXZlbnQiLCJyZXBlYXQiLCJkcm9wQ291bnQiLCJtYXhEcm9wcyIsImN1cnJlbnRZIiwia2V5RG93bkhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVmYXVsdCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInRldHJpcyJdLCJzb3VyY2VSb290IjoiIn0=