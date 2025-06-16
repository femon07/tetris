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

/***/ "./src/event/EventManager.js":
/*!***********************************!*\
  !*** ./src/event/EventManager.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventManager: () => (/* binding */ EventManager),
/* harmony export */   eventManager: () => (/* binding */ eventManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
function _createForOfIteratorHelper(r, e) {var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (!t) {if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {t && (r = t);var _n = 0,F = function F() {};return { s: F, n: function n() {return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] };}, e: function e(r) {throw r;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var o,a = !0,u = !1;return { s: function s() {t = t.call(r);}, n: function n() {var r = t.next();return a = r.done, r;}, e: function e(r) {u = !0, o = r;}, f: function f() {try {a || null == t["return"] || t["return"]();} finally {if (u) throw o;}} };}function _unsupportedIterableToArray(r, a) {if (r) {if ("string" == typeof r) return _arrayLikeToArray(r, a);var t = {}.toString.call(r).slice(8, -1);return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;}}function _arrayLikeToArray(r, a) {(null == a || a > r.length) && (a = r.length);for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];return n;} /**
 * イベントリスナーを管理するクラス
 * テスト時にモックに差し替え可能なインターフェースを提供します
 */var
EventManager = /*#__PURE__*/function () {
  function EventManager() {(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EventManager);
    this.eventHandlers = new Map();
  }

  /**
   * イベントリスナーを登録する
   * @param {string} eventType - イベントタイプ（例: 'keydown', 'keyup'）
   * @param {Function} handler - イベントハンドラ関数
   * @returns {Function} 登録解除用の関数
   */return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(EventManager, [{ key: "addEventListener", value:
    function addEventListener(eventType, handler) {var _this = this;
      if (!this.eventHandlers.has(eventType)) {
        this.eventHandlers.set(eventType, new Set());
      }

      var handlers = this.eventHandlers.get(eventType);
      handlers.add(handler);

      // 実際のイベントリスナーを登録（初回のみ）
      if (handlers.size === 1) {
        document.addEventListener(eventType, this.createEventHandler(eventType));
      }

      // 登録解除用の関数を返す
      return function () {return _this.removeEventListener(eventType, handler);};
    }

    /**
     * イベントリスナーを削除する
     * @param {string} eventType - イベントタイプ
     * @param {Function} handler - 削除するハンドラ関数
     */ }, { key: "removeEventListener", value:
    function removeEventListener(eventType, handler) {
      if (!this.eventHandlers.has(eventType)) return;

      var handlers = this.eventHandlers.get(eventType);
      handlers["delete"](handler);

      // ハンドラが空になったら実際のイベントリスナーも削除
      if (handlers.size === 0) {
        document.removeEventListener(eventType, this.createEventHandler(eventType));
        this.eventHandlers["delete"](eventType);
      }
    }

    /**
     * すべてのイベントリスナーを削除する
     */ }, { key: "removeAllEventListeners", value:
    function removeAllEventListeners() {var _iterator = _createForOfIteratorHelper(
          this.eventHandlers),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _step$value = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_step.value, 1),eventType = _step$value[0];
          document.removeEventListener(eventType, this.createEventHandler(eventType));
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}
      this.eventHandlers.clear();
    }

    /**
     * イベントハンドラを生成する
     * @private
     */ }, { key: "createEventHandler", value:
    function createEventHandler(eventType) {var _this2 = this;
      return function (event) {
        if (!_this2.eventHandlers.has(eventType)) return;

        var handlers = _this2.eventHandlers.get(eventType);
        handlers.forEach(function (handler) {
          try {
            handler(event);
          } catch (error) {
            console.error("Error in ".concat(eventType, " handler:"), error);
          }
        });
      };
    }

    /**
     * テスト用にイベントを発火させる
     * @param {string} eventType - イベントタイプ
     * @param {Object} eventProps - イベントのプロパティ
     */ }, { key: "triggerEvent", value:
    function triggerEvent(eventType) {var eventProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.eventHandlers.has(eventType)) return;

      var event = new Event(eventType, { bubbles: true, cancelable: true });
      Object.assign(event, eventProps);

      var handlers = this.eventHandlers.get(eventType);
      handlers.forEach(function (handler) {
        try {
          handler(event);
        } catch (error) {
          console.error("Error in test ".concat(eventType, " handler:"), error);
        }
      });
    } }]);}();


// シングルトンインスタンスをエクスポート
var eventManager = new EventManager();

// テスト用にクラスもエクスポート


// テスト時にモックに差し替え可能にする
if (typeof window !== 'undefined') {
  window.tetris = window.tetris || {};
  window.tetris.eventManager = eventManager;
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   gameState: () => (/* binding */ gameState),
/* harmony export */   handleKeyDown: () => (/* binding */ handleKeyDown),
/* harmony export */   handleKeyUp: () => (/* binding */ handleKeyUp),
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _event_EventManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event/EventManager.js */ "./src/event/EventManager.js");


// ゲームの状態を管理するオブジェクト
var gameState = {
  // デバッグモード
  debug: true,

  // キー入力を管理するオブジェクト
  keys: {},
  COLS: 10,
  ROWS: 20,
  BLOCK: 20,
  colors: ['#000', '#0ff', '#f0f', '#0f0', '#ff0', '#f00', '#00f', '#ffa500'],
  tetrominos: [
  [[1, 1, 1, 1]],
  [[2, 2], [2, 2]],
  [[0, 3, 0], [3, 3, 3]],
  [[0, 4, 4], [4, 4, 0]],
  [[5, 5, 0], [0, 5, 5]],
  [[6, 0, 0], [6, 6, 6]],
  [[0, 0, 7], [7, 7, 7]]],

  board: [],
  piece: null,
  nextPiece: null,
  ctx: null,
  dropCounter: 0,
  dropInterval: 1000, // ミリ秒
  lastTime: 0,
  isGameOver: false,
  score: 0,
  lines: 0,
  level: 1,
  gameLoopId: null,

  // デバッグ用メソッド
  logState: function logState() {
    console.log('=== ゲーム状態 ===');
    console.log("\u30D4\u30FC\u30B9: ".concat(this.piece ? 'あり' : 'なし'));
    console.log("\u30B9\u30B3\u30A2: ".concat(this.score));
    console.log("\u30E9\u30A4\u30F3: ".concat(this.lines));
    console.log("\u30EC\u30D9\u30EB: ".concat(this.level));
    console.log("\u30B2\u30FC\u30E0\u30AA\u30FC\u30D0\u30FC: ".concat(this.isGameOver));
    console.log('================');
  }
};

// ユーティリティ関数
function calculateScore(linesCleared) {var currentScore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var scoreTable = { 1: 40, 2: 100, 3: 300, 4: 1200 };
  return currentScore + (scoreTable[linesCleared] || 0) * gameState.level;
}

function calculateLevel(totalLines) {var linesPerLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return Math.floor(totalLines / linesPerLevel) + 1;
}

function initGame() {
  console.log('initGame: ゲームの初期化を開始します');

  var canvas = document.getElementById('game');
  if (!canvas) {
    console.error('initGame: キャンバス要素が見つかりません');
    return null;
  }

  // キャンバスのサイズを設定
  var width = gameState.COLS * gameState.BLOCK;
  var height = gameState.ROWS * gameState.BLOCK;

  console.log("initGame: \u30AD\u30E3\u30F3\u30D0\u30B9\u30B5\u30A4\u30BA\u3092\u8A2D\u5B9A\u3057\u307E\u3059 (".concat(width, "x").concat(height, ")"));

  // canvas要素のサイズを設定
  canvas.width = width;
  canvas.height = height;

  // スタイルも設定（高解像度ディスプレイ対応）
  canvas.style.width = "".concat(width, "px");
  canvas.style.height = "".concat(height, "px");
  canvas.style.display = 'block';
  canvas.style.margin = '0 auto';

  // コンテキストを取得
  try {
    console.log('initGame: 2Dコンテキストを取得します');
    gameState.ctx = canvas.getContext('2d');
    if (gameState.ctx) {
      console.log('initGame: 2Dコンテキストの取得に成功しました');
      // 高解像度ディスプレイ対応
      var dpr = window.devicePixelRatio || 1;
      console.log("initGame: \u30C7\u30D0\u30A4\u30B9\u30D4\u30AF\u30BB\u30EB\u6BD4: ".concat(dpr));
      gameState.ctx.scale(dpr, dpr);

      // キャンバスをクリア
      gameState.ctx.fillStyle = '#f0f0f0';
      gameState.ctx.fillRect(0, 0, canvas.width, canvas.height);
      gameState.ctx.strokeStyle = '#000';
      gameState.ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }
  } catch (e) {
    console.error('initGame: 2Dコンテキストの作成に失敗しました:', e);
    return null;
  }

  if (!gameState.ctx) {
    console.error('initGame: 2Dコンテキストが利用できません');
    return null;
  }

  // ゲームの初期化
  console.log('initGame: ゲーム状態をリセットします');
  resetGame();



  // ゲームループを開始
  console.log('initGame: ゲームループを開始します');
  gameState.lastTime = 0;
  gameState.gameLoopId = requestAnimationFrame(update);

  console.log('initGame: 初期化が完了しました');
  return canvas;
}

function resetGame() {
  console.log('resetGame: ゲーム状態をリセットします');

  // ボードを初期化
  gameState.board = Array.from({ length: gameState.ROWS }, function () {return Array(gameState.COLS).fill(0);});

  // ゲーム状態をリセット
  console.log('resetGame: 新しいピースを作成します');
  gameState.piece = createPiece();

  if (!gameState.piece) {
    console.error('resetGame: ピースの作成に失敗しました');
    return;
  }

  console.log('resetGame: 新しいピースを作成しました', gameState.piece);

  // ゲーム状態のプロパティを初期化
  gameState.dropCounter = 0;
  gameState.lastTime = performance.now(); // 現在時刻で初期化
  gameState.isGameOver = false;
  gameState.dropInterval = 1000; // 1秒ごとに自動落下
  gameState.score = 0;
  gameState.lines = 0;
  gameState.level = 1;

  // スコア表示を更新（仮の実装）
  var scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = "Score: ".concat(gameState.score);
  }

  var levelElement = document.getElementById('level');
  if (levelElement) {
    levelElement.textContent = "Level: ".concat(gameState.level);
  }

  var linesElement = document.getElementById('lines');
  if (linesElement) {
    linesElement.textContent = "Lines: ".concat(gameState.lines);
  }

  // ゲームループを開始
  if (gameState.gameLoopId) {
    cancelAnimationFrame(gameState.gameLoopId);
  }

  // ゲームループを開始
  gameState.lastTime = performance.now();
  gameState.gameLoopId = requestAnimationFrame(update);

  console.log('resetGame: ゲーム状態のリセットが完了しました');
  // 新しいピースが配置可能か確認
  if (collide(gameState.board, gameState.piece)) {
    // ゲーム開始時に配置できない場合はゲームオーバー
    gameOver();
  }
}

function gameOver() {
  gameState.isGameOver = true;
  if (confirm('ゲームオーバー！\nもう一度プレイしますか？')) {
    resetGame();
    // ゲームループを再開
    gameState.gameLoopId = requestAnimationFrame(update);
  }
}

function createPiece() {
  var matrix = JSON.parse(
    JSON.stringify(
      gameState.tetrominos[Math.random() * gameState.tetrominos.length | 0]
    )
  );
  return {
    matrix: matrix,
    pos: {
      x: Math.floor((gameState.COLS - matrix[0].length) / 2),
      y: 0
    }
  };
}

function drawMatrix(matrix, offset) {
  matrix.forEach(function (row, y) {
    row.forEach(function (value, x) {
      if (value) {
        gameState.ctx.fillStyle = gameState.colors[value];
        gameState.ctx.fillRect(
          (x + offset.x) * gameState.BLOCK,
          (y + offset.y) * gameState.BLOCK,
          gameState.BLOCK - 1,
          gameState.BLOCK - 1
        );
      }
    });
  });
}

function draw() {
  if (!gameState.ctx) {
    console.error('draw: 描画コンテキストが利用できません');
    return;
  }

  // キャンバスをクリア
  gameState.ctx.fillStyle = '#f0f0f0';
  gameState.ctx.fillRect(0, 0, gameState.ctx.canvas.width, gameState.ctx.canvas.height);

  // ボードの枠を描画
  gameState.ctx.strokeStyle = '#000';
  gameState.ctx.lineWidth = 2;
  gameState.ctx.strokeRect(0, 0, gameState.COLS * gameState.BLOCK, gameState.ROWS * gameState.BLOCK);

  // ボードを描画
  if (gameState.debug) {
    console.log('draw: ボードを描画します');
  }
  drawMatrix(gameState.board, { x: 0, y: 0 });

  // 現在のピースを描画
  if (gameState.piece) {
    if (gameState.debug) {
      console.log('draw: 現在のピースを描画します', gameState.piece);
    }
    drawMatrix(gameState.piece.matrix, gameState.piece.pos);
  } else if (gameState.debug) {
    console.warn('draw: 描画するピースがありません');
  }

  // グリッド線を描画（デバッグ用）
  gameState.ctx.strokeStyle = '#ddd';
  gameState.ctx.lineWidth = 0.5;

  // 縦線
  for (var i = 0; i <= gameState.COLS; i++) {
    var x = i * gameState.BLOCK;
    gameState.ctx.beginPath();
    gameState.ctx.moveTo(x, 0);
    gameState.ctx.lineTo(x, gameState.ROWS * gameState.BLOCK);
    gameState.ctx.stroke();
  }

  // 横線
  for (var _i = 0; _i <= gameState.ROWS; _i++) {
    var y = _i * gameState.BLOCK;
    gameState.ctx.beginPath();
    gameState.ctx.moveTo(0, y);
    gameState.ctx.lineTo(gameState.COLS * gameState.BLOCK, y);
    gameState.ctx.stroke();
  }
}

function merge(board, piece) {
  piece.matrix.forEach(function (row, y) {
    row.forEach(function (value, x) {
      if (value) {
        var boardY = y + piece.pos.y;
        var boardX = x + piece.pos.x;
        if (boardY >= 0 && boardY < gameState.ROWS &&
        boardX >= 0 && boardX < gameState.COLS) {
          board[boardY][boardX] = value;
        }
      }
    });
  });
}

function collide(board, piece) {
  for (var y = 0; y < piece.matrix.length; ++y) {
    for (var x = 0; x < piece.matrix[y].length; ++x) {
      if (
      piece.matrix[y][x] &&
      (board[y + piece.pos.y] && board[y + piece.pos.y][x + piece.pos.x]) !== 0)
      {
        return true;
      }
    }
  }
  return false;
}

function rotate(matrix, dir) {
  for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < y; ++x) {var _ref =
      [matrix[y][x], matrix[x][y]];matrix[x][y] = _ref[0];matrix[y][x] = _ref[1];
    }
  }
  if (dir > 0) matrix.forEach(function (row) {return row.reverse();});else
  matrix.reverse();
}

function playerRotate(dir) {
  if (gameState.isGameOver) {
    console.log('playerRotate: ゲームオーバー中は回転できません');
    return;
  }

  if (!gameState.piece) {
    console.error('playerRotate: アクティブなピースがありません');
    return;
  }

  console.log('playerRotate: 回転処理を開始します', { dir: dir, currentPieceMatrix: JSON.stringify(gameState.piece.matrix) });

  var pos = gameState.piece.pos.x;
  var offset = 1;

  // 回転前の行列を保存
  var originalMatrix = JSON.parse(JSON.stringify(gameState.piece.matrix));

  // 回転を試みる
  rotate(gameState.piece.matrix, dir);
  console.log('playerRotate: 回転後のピース行列', { rotatedMatrix: JSON.stringify(gameState.piece.matrix) });

  // 壁や他のブロックと衝突する場合の処理
  while (collide(gameState.board, gameState.piece)) {
    console.log('playerRotate: 衝突を検出、オフセットを試みます', { offset: offset, currentX: gameState.piece.pos.x });

    gameState.piece.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));

    // オフセットが行列の幅を超えたら回転を元に戻す
    if (Math.abs(offset) > gameState.piece.matrix[0].length) {
      console.log('playerRotate: 有効な位置が見つかりませんでした、回転をキャンセルします。元の行列に戻します。');
      gameState.piece.matrix = originalMatrix; // 元の行列に戻す
      gameState.piece.pos.x = pos;
      console.log('playerRotate: 回転キャンセル後のピース行列', { finalMatrix: JSON.stringify(gameState.piece.matrix) });
      return;
    }
  }

  console.log('playerRotate: 回転が完了しました', { newPos: gameState.piece.pos, finalMatrix: JSON.stringify(gameState.piece.matrix) });
}

function playerMove(dir) {
  if (gameState.isGameOver) return;

  gameState.piece.pos.x += dir;
  if (collide(gameState.board, gameState.piece)) {
    gameState.piece.pos.x -= dir;
    if (collide(gameState.board, gameState.piece)) {
      gameState.piece.pos.x -= dir;
    }
  }
}

function clearLines() {
  var linesCleared = 0;

  outer: for (var y = gameState.ROWS - 1; y >= 0; y--) {
    // 行がすべて埋まっているかチェック
    for (var x = 0; x < gameState.COLS; x++) {
      if (gameState.board[y][x] === 0) {
        continue outer;
      }
    }

    // 行を削除して上にずらす
    var row = gameState.board.splice(y, 1)[0].fill(0);
    gameState.board.unshift(row);
    y++;
    linesCleared++;
  }

  // スコアを更新
  if (linesCleared > 0) {
    gameState.score += calculateScore(linesCleared);
    gameState.lines += linesCleared;
    gameState.level = calculateLevel(gameState.lines);
  }
}

function playerDrop() {
  if (gameState.isGameOver) return;

  gameState.piece.pos.y++;
  if (collide(gameState.board, gameState.piece)) {
    gameState.piece.pos.y--;
    merge(gameState.board, gameState.piece);

    // ラインが揃ったか確認
    clearLines();

    // 新しいピースを生成
    gameState.piece = createPiece();

    // ゲームオーバーチェック
    if (collide(gameState.board, gameState.piece)) {
      gameOver();
    }
  }
  gameState.dropCounter = 0;
}

function update() {var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  // 前回のフレームからの経過時間を計算
  var deltaTime = time - gameState.lastTime;
  gameState.lastTime = time;

  // ドロップカウンターを更新
  gameState.dropCounter += deltaTime;

  // 一定時間経過でピースを下に移動
  if (gameState.dropCounter > gameState.dropInterval) {
    if (gameState.debug) {
      console.log('update: ピースを下に移動します');
    }
    playerDrop();
    gameState.dropCounter = 0; // カウンターをリセット
  }

  // 描画
  try {
    draw();
  } catch (e) {
    console.error('update: 描画中にエラーが発生しました', e);
  }

  // ゲームオーバーでなければ次のフレームを要求
  if (!gameState.isGameOver) {
    gameState.gameLoopId = requestAnimationFrame(update);
  } else {
    // ゲームオーバー時の処理
    console.log('update: ゲームオーバーを検出しました');
    gameOver();
  }
}

// キーハンドラ関数
function handleKeyDown(event) {
  if (gameState.isGameOver) return;

  // キーリピートを防ぐ
  if (event.repeat) return;

  // キーが押されている間は押しっぱなしにしない（下矢印は除く）
  if (gameState.keys[event.key] && event.key !== 'ArrowDown') return;
  gameState.keys[event.key] = true;
  console.log('Key pressed:', event.key); // デバッグ用

  // キーに応じた処理
  switch (event.key) {
    case 'ArrowLeft':
      playerMove(-1);
      break;
    case 'ArrowRight':
      playerMove(1);
      break;
    case 'ArrowDown':
      playerDrop();
      break;
    case 'ArrowUp':
      playerRotate(1);
      break;
    case ' ':
      // ハードドロップ
      console.log('handleKeyDown: ハードドロップを実行します');
      if (!gameState.piece) {
        console.warn('handleKeyDown: アクティブなピースがありません');
        break;
      }

      // ピースを一番下まで落とす
      while (true) {
        var pieceY = gameState.piece.pos.y;
        playerDrop();
        // 位置が変わらなくなったら終了
        if (pieceY === gameState.piece.pos.y || gameState.isGameOver) {var _gameState$piece;
          console.log('handleKeyDown: ハードドロップ完了', { y: (_gameState$piece = gameState.piece) === null || _gameState$piece === void 0 ? void 0 : _gameState$piece.pos.y });
          break;
        }
      }
      break;
    case 'p':
    case 'P':
      // 一時停止
      if (gameState.gameLoopId) {
        cancelAnimationFrame(gameState.gameLoopId);
        gameState.gameLoopId = null;
      } else {
        gameState.lastTime = 0;
        gameState.gameLoopId = requestAnimationFrame(update);
      }
      break;
    case 'r':
    case 'R':
      // リセット
      resetGame();
      break;
  }
}

function handleKeyUp(event) {
  gameState.keys[event.key] = false;
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
    setupEventListeners(handleKeyDown, handleKeyUp);

    console.log('init: ゲームの初期化が完了しました');

    // 外部から参照できるように必要なものを返す
    return {
      canvas: canvas,
      gameState: gameState,
      handleKeyDown: handleKeyDown,
      handleKeyUp: handleKeyUp,
      eventManager: _event_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.eventManager
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
  eventManager: _event_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.eventManager
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
    eventManager: _event_EventManager_js__WEBPACK_IMPORTED_MODULE_0__.eventManager
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
      draw();
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
    var game = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.init)();
    console.log('テトリスゲームが初期化されました', game);

    // キャンバスの状態を確認
    var canvas = document.getElementById('game');
    if (canvas) {
      console.log('キャンバスのサイズ:', canvas.width, 'x', canvas.height);
      console.log('キャンバスのスタイルサイズ:', canvas.style.width, 'x', canvas.style.height);
    } else {
      console.error('キャンバス要素が見つかりません');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMscUNBQXFDLENBQUM7RUFDOUM7QUFDRixDQUFDLENBQUM7O0FBRUY7QUFDQSxJQUFJQyxJQUFzQyxFQUFFO0VBQzFDNUgsTUFBTSxDQUFDQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsQ0FBQztFQUNuQ0QsTUFBTSxDQUFDQyxNQUFNLENBQUNtSCxJQUFJLEdBQUdBLDBDQUFJO0FBQzNCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJvcGVydHlLZXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZXRyaXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RldHJpcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RldHJpcy8uL3NyYy9ldmVudC9FdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vdGV0cmlzLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90ZXRyaXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RldHJpcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGV0cmlzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZXRyaXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmV4cG9ydCB7IF9hcnJheUxpa2VUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIHI7XG59XG5leHBvcnQgeyBfYXJyYXlXaXRoSG9sZXMgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmV4cG9ydCB7IF9jbGFzc0NhbGxDaGVjayBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikge1xuICBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHtcbiAgICB2YXIgbyA9IHJbdF07XG4gICAgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHRvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmV4cG9ydCB7IF9jcmVhdGVDbGFzcyBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHtcbiAgdmFyIHQgPSBudWxsID09IHIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIHJbU3ltYm9sLml0ZXJhdG9yXSB8fCByW1wiQEBpdGVyYXRvclwiXTtcbiAgaWYgKG51bGwgIT0gdCkge1xuICAgIHZhciBlLFxuICAgICAgbixcbiAgICAgIGksXG4gICAgICB1LFxuICAgICAgYSA9IFtdLFxuICAgICAgZiA9ICEwLFxuICAgICAgbyA9ICExO1xuICAgIHRyeSB7XG4gICAgICBpZiAoaSA9ICh0ID0gdC5jYWxsKHIpKS5uZXh0LCAwID09PSBsKSB7XG4gICAgICAgIGlmIChPYmplY3QodCkgIT09IHQpIHJldHVybjtcbiAgICAgICAgZiA9ICExO1xuICAgICAgfSBlbHNlIGZvciAoOyAhKGYgPSAoZSA9IGkuY2FsbCh0KSkuZG9uZSkgJiYgKGEucHVzaChlLnZhbHVlKSwgYS5sZW5ndGggIT09IGwpOyBmID0gITApO1xuICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgIG8gPSAhMCwgbiA9IHI7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICghZiAmJiBudWxsICE9IHRbXCJyZXR1cm5cIl0gJiYgKHUgPSB0W1wicmV0dXJuXCJdKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheUxpbWl0IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZXhwb3J0IHsgX25vbkl0ZXJhYmxlUmVzdCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KHIsIGUpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKHIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGUpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGUpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZXhwb3J0IHsgX3NsaWNlZFRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZnVuY3Rpb24gdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbn1cbmV4cG9ydCB7IHRvUHJpbWl0aXZlIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZnVuY3Rpb24gdG9Qcm9wZXJ0eUtleSh0KSB7XG4gIHZhciBpID0gdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7XG59XG5leHBvcnQgeyB0b1Byb3BlcnR5S2V5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZXhwb3J0IHsgX3R5cGVvZiBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgaWYgKHIpIHtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBhcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5leHBvcnQgeyBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiDjgrnjgr/jgqTjg6vjga/lvozjgafov73liqAgKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBY1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiDjgrnjgr/jgqTjg6vjga/lvozjgafov73liqAgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXG4gKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLnrqHnkIbjgZnjgovjgq/jg6njgrlcbiAqIOODhuOCueODiOaZguOBq+ODouODg+OCr+OBq+W3ruOBl+abv+OBiOWPr+iDveOBquOCpOODs+OCv+ODvOODleOCp+ODvOOCueOCkuaPkOS+m+OBl+OBvuOBmVxuICovXG5jbGFzcyBFdmVudE1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICAvKipcbiAgICog44Kk44OZ44Oz44OI44Oq44K544OK44O844KS55m76Yyy44GZ44KLXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFR5cGUgLSDjgqTjg5njg7Pjg4jjgr/jgqTjg5fvvIjkvos6ICdrZXlkb3duJywgJ2tleXVwJ++8iVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0g44Kk44OZ44Oz44OI44OP44Oz44OJ44Op6Zai5pWwXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0g55m76Yyy6Kej6Zmk55So44Gu6Zai5pWwXG4gICAqL1xuICBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5ldmVudEhhbmRsZXJzLmhhcyhldmVudFR5cGUpKSB7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuc2V0KGV2ZW50VHlwZSwgbmV3IFNldCgpKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50VHlwZSk7XG4gICAgaGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICAgIFxuICAgIC8vIOWun+mam+OBruOCpOODmeODs+ODiOODquOCueODiuODvOOCkueZu+mMsu+8iOWIneWbnuOBruOBv++8iVxuICAgIGlmIChoYW5kbGVycy5zaXplID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgdGhpcy5jcmVhdGVFdmVudEhhbmRsZXIoZXZlbnRUeXBlKSk7XG4gICAgfVxuICAgIFxuICAgIC8vIOeZu+mMsuino+mZpOeUqOOBrumWouaVsOOCkui/lOOBmVxuICAgIHJldHVybiAoKSA9PiB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLliYrpmaTjgZnjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIOOCpOODmeODs+ODiOOCv+OCpOODl1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIC0g5YmK6Zmk44GZ44KL44OP44Oz44OJ44Op6Zai5pWwXG4gICAqL1xuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5ldmVudEhhbmRsZXJzLmhhcyhldmVudFR5cGUpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50VHlwZSk7XG4gICAgaGFuZGxlcnMuZGVsZXRlKGhhbmRsZXIpO1xuICAgIFxuICAgIC8vIOODj+ODs+ODieODqeOBjOepuuOBq+OBquOBo+OBn+OCieWun+mam+OBruOCpOODmeODs+ODiOODquOCueODiuODvOOCguWJiumZpFxuICAgIGlmIChoYW5kbGVycy5zaXplID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgdGhpcy5jcmVhdGVFdmVudEhhbmRsZXIoZXZlbnRUeXBlKSk7XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZGVsZXRlKGV2ZW50VHlwZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOOBmeOBueOBpuOBruOCpOODmeODs+ODiOODquOCueODiuODvOOCkuWJiumZpOOBmeOCi1xuICAgKi9cbiAgcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBbZXZlbnRUeXBlXSBvZiB0aGlzLmV2ZW50SGFuZGxlcnMpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCB0aGlzLmNyZWF0ZUV2ZW50SGFuZGxlcihldmVudFR5cGUpKTtcbiAgICB9XG4gICAgdGhpcy5ldmVudEhhbmRsZXJzLmNsZWFyKCk7XG4gIH1cblxuICAvKipcbiAgICog44Kk44OZ44Oz44OI44OP44Oz44OJ44Op44KS55Sf5oiQ44GZ44KLXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBjcmVhdGVFdmVudEhhbmRsZXIoZXZlbnRUeXBlKSB7XG4gICAgcmV0dXJuIChldmVudCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmV2ZW50SGFuZGxlcnMuaGFzKGV2ZW50VHlwZSkpIHJldHVybjtcbiAgICAgIFxuICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50SGFuZGxlcnMuZ2V0KGV2ZW50VHlwZSk7XG4gICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluICR7ZXZlbnRUeXBlfSBoYW5kbGVyOmAsIGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4bjgrnjg4jnlKjjgavjgqTjg5njg7Pjg4jjgpLnmbrngavjgZXjgZvjgotcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSAtIOOCpOODmeODs+ODiOOCv+OCpOODl1xuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRQcm9wcyAtIOOCpOODmeODs+ODiOOBruODl+ODreODkeODhuOCo1xuICAgKi9cbiAgdHJpZ2dlckV2ZW50KGV2ZW50VHlwZSwgZXZlbnRQcm9wcyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50SGFuZGxlcnMuaGFzKGV2ZW50VHlwZSkpIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICBPYmplY3QuYXNzaWduKGV2ZW50LCBldmVudFByb3BzKTtcbiAgICBcbiAgICBjb25zdCBoYW5kbGVycyA9IHRoaXMuZXZlbnRIYW5kbGVycy5nZXQoZXZlbnRUeXBlKTtcbiAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbiB0ZXN0ICR7ZXZlbnRUeXBlfSBoYW5kbGVyOmAsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyDjgrfjg7PjgrDjg6vjg4jjg7PjgqTjg7Pjgrnjgr/jg7PjgrnjgpLjgqjjgq/jgrnjg53jg7zjg4hcbmV4cG9ydCBjb25zdCBldmVudE1hbmFnZXIgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG5cbi8vIOODhuOCueODiOeUqOOBq+OCr+ODqeOCueOCguOCqOOCr+OCueODneODvOODiFxuZXhwb3J0IHsgRXZlbnRNYW5hZ2VyIH07XG5cbi8vIOODhuOCueODiOaZguOBq+ODouODg+OCr+OBq+W3ruOBl+abv+OBiOWPr+iDveOBq+OBmeOCi1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy50ZXRyaXMgPSB3aW5kb3cudGV0cmlzIHx8IHt9O1xuICB3aW5kb3cudGV0cmlzLmV2ZW50TWFuYWdlciA9IGV2ZW50TWFuYWdlcjtcbn1cbiIsImltcG9ydCB7IGV2ZW50TWFuYWdlciB9IGZyb20gJy4vZXZlbnQvRXZlbnRNYW5hZ2VyLmpzJztcblxuLy8g44Ky44O844Og44Gu54q25oWL44KS566h55CG44GZ44KL44Kq44OW44K444Kn44Kv44OIXG5leHBvcnQgY29uc3QgZ2FtZVN0YXRlID0ge1xuICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4lcbiAgZGVidWc6IHRydWUsXG4gIFxuICAvLyDjgq3jg7zlhaXlipvjgpLnrqHnkIbjgZnjgovjgqrjg5bjgrjjgqfjgq/jg4hcbiAga2V5czoge30sXG4gIENPTFM6IDEwLFxuICBST1dTOiAyMCxcbiAgQkxPQ0s6IDIwLFxuICBjb2xvcnM6IFsnIzAwMCcsICcjMGZmJywgJyNmMGYnLCAnIzBmMCcsICcjZmYwJywgJyNmMDAnLCAnIzAwZicsICcjZmZhNTAwJ10sXG4gIHRldHJvbWlub3M6IFtcbiAgICBbWzEsIDEsIDEsIDFdXSxcbiAgICBbWzIsIDJdLCBbMiwgMl1dLFxuICAgIFtbMCwgMywgMF0sIFszLCAzLCAzXV0sXG4gICAgW1swLCA0LCA0XSwgWzQsIDQsIDBdXSxcbiAgICBbWzUsIDUsIDBdLCBbMCwgNSwgNV1dLFxuICAgIFtbNiwgMCwgMF0sIFs2LCA2LCA2XV0sXG4gICAgW1swLCAwLCA3XSwgWzcsIDcsIDddXSxcbiAgXSxcbiAgYm9hcmQ6IFtdLFxuICBwaWVjZTogbnVsbCxcbiAgbmV4dFBpZWNlOiBudWxsLFxuICBjdHg6IG51bGwsXG4gIGRyb3BDb3VudGVyOiAwLFxuICBkcm9wSW50ZXJ2YWw6IDEwMDAsIC8vIOODn+ODquenklxuICBsYXN0VGltZTogMCxcbiAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gIHNjb3JlOiAwLFxuICBsaW5lczogMCxcbiAgbGV2ZWw6IDEsXG4gIGdhbWVMb29wSWQ6IG51bGwsXG4gIFxuICAvLyDjg4fjg5Djg4PjgrDnlKjjg6Hjgr3jg4Pjg4lcbiAgbG9nU3RhdGUoKSB7XG4gICAgY29uc29sZS5sb2coJz09PSDjgrLjg7zjg6DnirbmhYsgPT09Jyk7XG4gICAgY29uc29sZS5sb2coYOODlOODvOOCuTogJHt0aGlzLnBpZWNlID8gJ+OBguOCiicgOiAn44Gq44GXJ31gKTtcbiAgICBjb25zb2xlLmxvZyhg44K544Kz44KiOiAke3RoaXMuc2NvcmV9YCk7XG4gICAgY29uc29sZS5sb2coYOODqeOCpOODszogJHt0aGlzLmxpbmVzfWApO1xuICAgIGNvbnNvbGUubG9nKGDjg6zjg5njg6s6ICR7dGhpcy5sZXZlbH1gKTtcbiAgICBjb25zb2xlLmxvZyhg44Ky44O844Og44Kq44O844OQ44O8OiAke3RoaXMuaXNHYW1lT3Zlcn1gKTtcbiAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PScpO1xuICB9XG59O1xuXG4vLyDjg6bjg7zjg4bjgqPjg6rjg4bjgqPplqLmlbBcbmZ1bmN0aW9uIGNhbGN1bGF0ZVNjb3JlKGxpbmVzQ2xlYXJlZCwgY3VycmVudFNjb3JlID0gMCkge1xuICBjb25zdCBzY29yZVRhYmxlID0geyAxOiA0MCwgMjogMTAwLCAzOiAzMDAsIDQ6IDEyMDAgfTtcbiAgcmV0dXJuIGN1cnJlbnRTY29yZSArIChzY29yZVRhYmxlW2xpbmVzQ2xlYXJlZF0gfHwgMCkgKiBnYW1lU3RhdGUubGV2ZWw7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUxldmVsKHRvdGFsTGluZXMsIGxpbmVzUGVyTGV2ZWwgPSAxMCkge1xuICByZXR1cm4gTWF0aC5mbG9vcih0b3RhbExpbmVzIC8gbGluZXNQZXJMZXZlbCkgKyAxO1xufVxuXG5mdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgY29uc29sZS5sb2coJ2luaXRHYW1lOiDjgrLjg7zjg6Djga7liJ3mnJ/ljJbjgpLplovlp4vjgZfjgb7jgZknKTtcbiAgXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gIGlmICghY2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcignaW5pdEdhbWU6IOOCreODo+ODs+ODkOOCueimgee0oOOBjOimi+OBpOOBi+OCiuOBvuOBm+OCkycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K644KS6Kit5a6aXG4gIGNvbnN0IHdpZHRoID0gZ2FtZVN0YXRlLkNPTFMgKiBnYW1lU3RhdGUuQkxPQ0s7XG4gIGNvbnN0IGhlaWdodCA9IGdhbWVTdGF0ZS5ST1dTICogZ2FtZVN0YXRlLkJMT0NLO1xuICBcbiAgY29uc29sZS5sb2coYGluaXRHYW1lOiDjgq3jg6Pjg7Pjg5DjgrnjgrXjgqTjgrrjgpLoqK3lrprjgZfjgb7jgZkgKCR7d2lkdGh9eCR7aGVpZ2h0fSlgKTtcbiAgXG4gIC8vIGNhbnZhc+imgee0oOOBruOCteOCpOOCuuOCkuioreWumlxuICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgXG4gIC8vIOOCueOCv+OCpOODq+OCguioreWumu+8iOmrmOino+WDj+W6puODh+OCo+OCueODl+ODrOOCpOWvvuW/nO+8iVxuICBjYW52YXMuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xuICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNhbnZhcy5zdHlsZS5tYXJnaW4gPSAnMCBhdXRvJztcblxuICAvLyDjgrPjg7Pjg4bjgq3jgrnjg4jjgpLlj5blvpdcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnaW5pdEdhbWU6IDJE44Kz44Oz44OG44Kt44K544OI44KS5Y+W5b6X44GX44G+44GZJyk7XG4gICAgZ2FtZVN0YXRlLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChnYW1lU3RhdGUuY3R4KSB7XG4gICAgICBjb25zb2xlLmxvZygnaW5pdEdhbWU6IDJE44Kz44Oz44OG44Kt44K544OI44Gu5Y+W5b6X44Gr5oiQ5Yqf44GX44G+44GX44GfJyk7XG4gICAgICAvLyDpq5jop6Plg4/luqbjg4fjgqPjgrnjg5fjg6zjgqTlr77lv5xcbiAgICAgIGNvbnN0IGRwciA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgICBjb25zb2xlLmxvZyhgaW5pdEdhbWU6IOODh+ODkOOCpOOCueODlOOCr+OCu+ODq+avlDogJHtkcHJ9YCk7XG4gICAgICBnYW1lU3RhdGUuY3R4LnNjYWxlKGRwciwgZHByKTtcbiAgICAgIFxuICAgICAgLy8g44Kt44Oj44Oz44OQ44K544KS44Kv44Oq44KiXG4gICAgICBnYW1lU3RhdGUuY3R4LmZpbGxTdHlsZSA9ICcjZjBmMGYwJztcbiAgICAgIGdhbWVTdGF0ZS5jdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGdhbWVTdGF0ZS5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gICAgICBnYW1lU3RhdGUuY3R4LnN0cm9rZVJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdpbml0R2FtZTogMkTjgrPjg7Pjg4bjgq3jgrnjg4jjga7kvZzmiJDjgavlpLHmlZfjgZfjgb7jgZfjgZ86JywgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgXG4gIGlmICghZ2FtZVN0YXRlLmN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ2luaXRHYW1lOiAyROOCs+ODs+ODhuOCreOCueODiOOBjOWIqeeUqOOBp+OBjeOBvuOBm+OCkycpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8g44Ky44O844Og44Gu5Yid5pyf5YyWXG4gIGNvbnNvbGUubG9nKCdpbml0R2FtZTog44Ky44O844Og54q25oWL44KS44Oq44K744OD44OI44GX44G+44GZJyk7XG4gIHJlc2V0R2FtZSgpO1xuICBcblxuICBcbiAgLy8g44Ky44O844Og44Or44O844OX44KS6ZaL5aeLXG4gIGNvbnNvbGUubG9nKCdpbml0R2FtZTog44Ky44O844Og44Or44O844OX44KS6ZaL5aeL44GX44G+44GZJyk7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IDA7XG4gIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gIFxuICBjb25zb2xlLmxvZygnaW5pdEdhbWU6IOWIneacn+WMluOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOOCsuODvOODoOeKtuaFi+OCkuODquOCu+ODg+ODiOOBl+OBvuOBmScpO1xuICBcbiAgLy8g44Oc44O844OJ44KS5Yid5pyf5YyWXG4gIGdhbWVTdGF0ZS5ib2FyZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGdhbWVTdGF0ZS5ST1dTIH0sICgpID0+IEFycmF5KGdhbWVTdGF0ZS5DT0xTKS5maWxsKDApKTtcbiAgXG4gIC8vIOOCsuODvOODoOeKtuaFi+OCkuODquOCu+ODg+ODiFxuICBjb25zb2xlLmxvZygncmVzZXRHYW1lOiDmlrDjgZfjgYTjg5Tjg7zjgrnjgpLkvZzmiJDjgZfjgb7jgZknKTtcbiAgZ2FtZVN0YXRlLnBpZWNlID0gY3JlYXRlUGllY2UoKTtcbiAgXG4gIGlmICghZ2FtZVN0YXRlLnBpZWNlKSB7XG4gICAgY29uc29sZS5lcnJvcigncmVzZXRHYW1lOiDjg5Tjg7zjgrnjga7kvZzmiJDjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgXG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOaWsOOBl+OBhOODlOODvOOCueOCkuS9nOaIkOOBl+OBvuOBl+OBnycsIGdhbWVTdGF0ZS5waWVjZSk7XG4gIFxuICAvLyDjgrLjg7zjg6DnirbmhYvjga7jg5fjg63jg5Hjg4bjgqPjgpLliJ3mnJ/ljJZcbiAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDtcbiAgZ2FtZVN0YXRlLmxhc3RUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7IC8vIOePvuWcqOaZguWIu+OBp+WIneacn+WMllxuICBnYW1lU3RhdGUuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICBnYW1lU3RhdGUuZHJvcEludGVydmFsID0gMTAwMDsgLy8gMeenkuOBlOOBqOOBq+iHquWLleiQveS4i1xuICBnYW1lU3RhdGUuc2NvcmUgPSAwO1xuICBnYW1lU3RhdGUubGluZXMgPSAwO1xuICBnYW1lU3RhdGUubGV2ZWwgPSAxO1xuICBcbiAgLy8g44K544Kz44Ki6KGo56S644KS5pu05paw77yI5Luu44Gu5a6f6KOF77yJXG4gIGNvbnN0IHNjb3JlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpO1xuICBpZiAoc2NvcmVFbGVtZW50KSB7XG4gICAgc2NvcmVFbGVtZW50LnRleHRDb250ZW50ID0gYFNjb3JlOiAke2dhbWVTdGF0ZS5zY29yZX1gO1xuICB9XG4gIFxuICBjb25zdCBsZXZlbEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGV2ZWwnKTtcbiAgaWYgKGxldmVsRWxlbWVudCkge1xuICAgIGxldmVsRWxlbWVudC50ZXh0Q29udGVudCA9IGBMZXZlbDogJHtnYW1lU3RhdGUubGV2ZWx9YDtcbiAgfVxuICBcbiAgY29uc3QgbGluZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpbmVzJyk7XG4gIGlmIChsaW5lc0VsZW1lbnQpIHtcbiAgICBsaW5lc0VsZW1lbnQudGV4dENvbnRlbnQgPSBgTGluZXM6ICR7Z2FtZVN0YXRlLmxpbmVzfWA7XG4gIH1cbiAgXG4gIC8vIOOCsuODvOODoOODq+ODvOODl+OCkumWi+Wni1xuICBpZiAoZ2FtZVN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gIH1cbiAgXG4gIC8vIOOCsuODvOODoOODq+ODvOODl+OCkumWi+Wni1xuICBnYW1lU3RhdGUubGFzdFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgXG4gIGNvbnNvbGUubG9nKCdyZXNldEdhbWU6IOOCsuODvOODoOeKtuaFi+OBruODquOCu+ODg+ODiOOBjOWujOS6huOBl+OBvuOBl+OBnycpO1xuICAvLyDmlrDjgZfjgYTjg5Tjg7zjgrnjgYzphY3nva7lj6/og73jgYvnorroqo1cbiAgaWYgKGNvbGxpZGUoZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UpKSB7XG4gICAgLy8g44Ky44O844Og6ZaL5aeL5pmC44Gr6YWN572u44Gn44GN44Gq44GE5aC05ZCI44Gv44Ky44O844Og44Kq44O844OQ44O8XG4gICAgZ2FtZU92ZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnYW1lT3ZlcigpIHtcbiAgZ2FtZVN0YXRlLmlzR2FtZU92ZXIgPSB0cnVlO1xuICBpZiAoY29uZmlybSgn44Ky44O844Og44Kq44O844OQ44O877yBXFxu44KC44GG5LiA5bqm44OX44Os44Kk44GX44G+44GZ44GL77yfJykpIHtcbiAgICByZXNldEdhbWUoKTtcbiAgICAvLyDjgrLjg7zjg6Djg6vjg7zjg5fjgpLlho3plotcbiAgICBnYW1lU3RhdGUuZ2FtZUxvb3BJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBpZWNlKCkge1xuICBjb25zdCBtYXRyaXggPSBKU09OLnBhcnNlKFxuICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgZ2FtZVN0YXRlLnRldHJvbWlub3NbKE1hdGgucmFuZG9tKCkgKiBnYW1lU3RhdGUudGV0cm9taW5vcy5sZW5ndGgpIHwgMF1cbiAgICApXG4gICk7XG4gIHJldHVybiB7XG4gICAgbWF0cml4LFxuICAgIHBvczoge1xuICAgICAgeDogTWF0aC5mbG9vcigoZ2FtZVN0YXRlLkNPTFMgLSBtYXRyaXhbMF0ubGVuZ3RoKSAvIDIpLFxuICAgICAgeTogMCxcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBkcmF3TWF0cml4KG1hdHJpeCwgb2Zmc2V0KSB7XG4gIG1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBnYW1lU3RhdGUuY3R4LmZpbGxTdHlsZSA9IGdhbWVTdGF0ZS5jb2xvcnNbdmFsdWVdO1xuICAgICAgICBnYW1lU3RhdGUuY3R4LmZpbGxSZWN0KFxuICAgICAgICAgICh4ICsgb2Zmc2V0LngpICogZ2FtZVN0YXRlLkJMT0NLLCBcbiAgICAgICAgICAoeSArIG9mZnNldC55KSAqIGdhbWVTdGF0ZS5CTE9DSywgXG4gICAgICAgICAgZ2FtZVN0YXRlLkJMT0NLIC0gMSwgXG4gICAgICAgICAgZ2FtZVN0YXRlLkJMT0NLIC0gMVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZHJhdygpIHtcbiAgaWYgKCFnYW1lU3RhdGUuY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcignZHJhdzog5o+P55S744Kz44Oz44OG44Kt44K544OI44GM5Yip55So44Gn44GN44G+44Gb44KTJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8g44Kt44Oj44Oz44OQ44K544KS44Kv44Oq44KiXG4gIGdhbWVTdGF0ZS5jdHguZmlsbFN0eWxlID0gJyNmMGYwZjAnO1xuICBnYW1lU3RhdGUuY3R4LmZpbGxSZWN0KDAsIDAsIGdhbWVTdGF0ZS5jdHguY2FudmFzLndpZHRoLCBnYW1lU3RhdGUuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICBcbiAgLy8g44Oc44O844OJ44Gu5p6g44KS5o+P55S7XG4gIGdhbWVTdGF0ZS5jdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XG4gIGdhbWVTdGF0ZS5jdHgubGluZVdpZHRoID0gMjtcbiAgZ2FtZVN0YXRlLmN0eC5zdHJva2VSZWN0KDAsIDAsIGdhbWVTdGF0ZS5DT0xTICogZ2FtZVN0YXRlLkJMT0NLLCBnYW1lU3RhdGUuUk9XUyAqIGdhbWVTdGF0ZS5CTE9DSyk7XG4gIFxuICAvLyDjg5zjg7zjg4njgpLmj4/nlLtcbiAgaWYgKGdhbWVTdGF0ZS5kZWJ1Zykge1xuICAgIGNvbnNvbGUubG9nKCdkcmF3OiDjg5zjg7zjg4njgpLmj4/nlLvjgZfjgb7jgZknKTtcbiAgfVxuICBkcmF3TWF0cml4KGdhbWVTdGF0ZS5ib2FyZCwge3g6IDAsIHk6IDB9KTtcbiAgXG4gIC8vIOePvuWcqOOBruODlOODvOOCueOCkuaPj+eUu1xuICBpZiAoZ2FtZVN0YXRlLnBpZWNlKSB7XG4gICAgaWYgKGdhbWVTdGF0ZS5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ2RyYXc6IOePvuWcqOOBruODlOODvOOCueOCkuaPj+eUu+OBl+OBvuOBmScsIGdhbWVTdGF0ZS5waWVjZSk7XG4gICAgfVxuICAgIGRyYXdNYXRyaXgoZ2FtZVN0YXRlLnBpZWNlLm1hdHJpeCwgZ2FtZVN0YXRlLnBpZWNlLnBvcyk7XG4gIH0gZWxzZSBpZiAoZ2FtZVN0YXRlLmRlYnVnKSB7XG4gICAgY29uc29sZS53YXJuKCdkcmF3OiDmj4/nlLvjgZnjgovjg5Tjg7zjgrnjgYzjgYLjgorjgb7jgZvjgpMnKTtcbiAgfVxuICBcbiAgLy8g44Kw44Oq44OD44OJ57ea44KS5o+P55S777yI44OH44OQ44OD44Kw55So77yJXG4gIGdhbWVTdGF0ZS5jdHguc3Ryb2tlU3R5bGUgPSAnI2RkZCc7XG4gIGdhbWVTdGF0ZS5jdHgubGluZVdpZHRoID0gMC41O1xuICBcbiAgLy8g57im57eaXG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGdhbWVTdGF0ZS5DT0xTOyBpKyspIHtcbiAgICBjb25zdCB4ID0gaSAqIGdhbWVTdGF0ZS5CTE9DSztcbiAgICBnYW1lU3RhdGUuY3R4LmJlZ2luUGF0aCgpO1xuICAgIGdhbWVTdGF0ZS5jdHgubW92ZVRvKHgsIDApO1xuICAgIGdhbWVTdGF0ZS5jdHgubGluZVRvKHgsIGdhbWVTdGF0ZS5ST1dTICogZ2FtZVN0YXRlLkJMT0NLKTtcbiAgICBnYW1lU3RhdGUuY3R4LnN0cm9rZSgpO1xuICB9XG4gIFxuICAvLyDmqKrnt5pcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZ2FtZVN0YXRlLlJPV1M7IGkrKykge1xuICAgIGNvbnN0IHkgPSBpICogZ2FtZVN0YXRlLkJMT0NLO1xuICAgIGdhbWVTdGF0ZS5jdHguYmVnaW5QYXRoKCk7XG4gICAgZ2FtZVN0YXRlLmN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgZ2FtZVN0YXRlLmN0eC5saW5lVG8oZ2FtZVN0YXRlLkNPTFMgKiBnYW1lU3RhdGUuQkxPQ0ssIHkpO1xuICAgIGdhbWVTdGF0ZS5jdHguc3Ryb2tlKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoYm9hcmQsIHBpZWNlKSB7XG4gIHBpZWNlLm1hdHJpeC5mb3JFYWNoKChyb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgodmFsdWUsIHgpID0+IHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCBib2FyZFkgPSB5ICsgcGllY2UucG9zLnk7XG4gICAgICAgIGNvbnN0IGJvYXJkWCA9IHggKyBwaWVjZS5wb3MueDtcbiAgICAgICAgaWYgKGJvYXJkWSA+PSAwICYmIGJvYXJkWSA8IGdhbWVTdGF0ZS5ST1dTICYmIFxuICAgICAgICAgICAgYm9hcmRYID49IDAgJiYgYm9hcmRYIDwgZ2FtZVN0YXRlLkNPTFMpIHtcbiAgICAgICAgICBib2FyZFtib2FyZFldW2JvYXJkWF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29sbGlkZShib2FyZCwgcGllY2UpIHtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBwaWVjZS5tYXRyaXgubGVuZ3RoOyArK3kpIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHBpZWNlLm1hdHJpeFt5XS5sZW5ndGg7ICsreCkge1xuICAgICAgaWYgKFxuICAgICAgICBwaWVjZS5tYXRyaXhbeV1beF0gJiZcbiAgICAgICAgKGJvYXJkW3kgKyBwaWVjZS5wb3MueV0gJiYgYm9hcmRbeSArIHBpZWNlLnBvcy55XVt4ICsgcGllY2UucG9zLnhdKSAhPT0gMFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZShtYXRyaXgsIGRpcikge1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hdHJpeC5sZW5ndGg7ICsreSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgeTsgKyt4KSB7XG4gICAgICBbbWF0cml4W3hdW3ldLCBtYXRyaXhbeV1beF1dID0gW21hdHJpeFt5XVt4XSwgbWF0cml4W3hdW3ldXTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpciA+IDApIG1hdHJpeC5mb3JFYWNoKChyb3cpID0+IHJvdy5yZXZlcnNlKCkpO1xuICBlbHNlIG1hdHJpeC5yZXZlcnNlKCk7XG59XG5cbmZ1bmN0aW9uIHBsYXllclJvdGF0ZShkaXIpIHtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgY29uc29sZS5sb2coJ3BsYXllclJvdGF0ZTog44Ky44O844Og44Kq44O844OQ44O85Lit44Gv5Zue6Lui44Gn44GN44G+44Gb44KTJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZiAoIWdhbWVTdGF0ZS5waWVjZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3BsYXllclJvdGF0ZTog44Ki44Kv44OG44Kj44OW44Gq44OU44O844K544GM44GC44KK44G+44Gb44KTJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBjb25zb2xlLmxvZygncGxheWVyUm90YXRlOiDlm57ou6Llh6bnkIbjgpLplovlp4vjgZfjgb7jgZknLCB7IGRpciwgY3VycmVudFBpZWNlTWF0cml4OiBKU09OLnN0cmluZ2lmeShnYW1lU3RhdGUucGllY2UubWF0cml4KSB9KTtcbiAgXG4gIGNvbnN0IHBvcyA9IGdhbWVTdGF0ZS5waWVjZS5wb3MueDtcbiAgbGV0IG9mZnNldCA9IDE7XG4gIFxuICAvLyDlm57ou6LliY3jga7ooYzliJfjgpLkv53lrZhcbiAgY29uc3Qgb3JpZ2luYWxNYXRyaXggPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0ZS5waWVjZS5tYXRyaXgpKTtcbiAgXG4gIC8vIOWbnui7ouOCkuippuOBv+OCi1xuICByb3RhdGUoZ2FtZVN0YXRlLnBpZWNlLm1hdHJpeCwgZGlyKTtcbiAgY29uc29sZS5sb2coJ3BsYXllclJvdGF0ZTog5Zue6Lui5b6M44Gu44OU44O844K56KGM5YiXJywgeyByb3RhdGVkTWF0cml4OiBKU09OLnN0cmluZ2lmeShnYW1lU3RhdGUucGllY2UubWF0cml4KSB9KTtcbiAgXG4gIC8vIOWjgeOChOS7luOBruODluODreODg+OCr+OBqOihneeqgeOBmeOCi+WgtOWQiOOBruWHpueQhlxuICB3aGlsZSAoY29sbGlkZShnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSkpIHtcbiAgICBjb25zb2xlLmxvZygncGxheWVyUm90YXRlOiDooZ3nqoHjgpLmpJzlh7rjgIHjgqrjg5Xjgrvjg4Pjg4jjgpLoqabjgb/jgb7jgZknLCB7IG9mZnNldCwgY3VycmVudFg6IGdhbWVTdGF0ZS5waWVjZS5wb3MueCB9KTtcbiAgICBcbiAgICBnYW1lU3RhdGUucGllY2UucG9zLnggKz0gb2Zmc2V0O1xuICAgIG9mZnNldCA9IC0ob2Zmc2V0ICsgKG9mZnNldCA+IDAgPyAxIDogLTEpKTtcbiAgICBcbiAgICAvLyDjgqrjg5Xjgrvjg4Pjg4jjgYzooYzliJfjga7luYXjgpLotoXjgYjjgZ/jgonlm57ou6LjgpLlhYPjgavmiLvjgZlcbiAgICBpZiAoTWF0aC5hYnMob2Zmc2V0KSA+IGdhbWVTdGF0ZS5waWVjZS5tYXRyaXhbMF0ubGVuZ3RoKSB7XG4gICAgICBjb25zb2xlLmxvZygncGxheWVyUm90YXRlOiDmnInlirnjgarkvY3nva7jgYzopovjgaTjgYvjgorjgb7jgZvjgpPjgafjgZfjgZ/jgIHlm57ou6LjgpLjgq3jg6Pjg7Pjgrvjg6vjgZfjgb7jgZnjgILlhYPjga7ooYzliJfjgavmiLvjgZfjgb7jgZnjgIInKTtcbiAgICAgIGdhbWVTdGF0ZS5waWVjZS5tYXRyaXggPSBvcmlnaW5hbE1hdHJpeDsgLy8g5YWD44Gu6KGM5YiX44Gr5oi744GZXG4gICAgICBnYW1lU3RhdGUucGllY2UucG9zLnggPSBwb3M7XG4gICAgICBjb25zb2xlLmxvZygncGxheWVyUm90YXRlOiDlm57ou6Ljgq3jg6Pjg7Pjgrvjg6vlvozjga7jg5Tjg7zjgrnooYzliJcnLCB7IGZpbmFsTWF0cml4OiBKU09OLnN0cmluZ2lmeShnYW1lU3RhdGUucGllY2UubWF0cml4KSB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnNvbGUubG9nKCdwbGF5ZXJSb3RhdGU6IOWbnui7ouOBjOWujOS6huOBl+OBvuOBl+OBnycsIHsgbmV3UG9zOiBnYW1lU3RhdGUucGllY2UucG9zLCBmaW5hbE1hdHJpeDogSlNPTi5zdHJpbmdpZnkoZ2FtZVN0YXRlLnBpZWNlLm1hdHJpeCkgfSk7XG59XG5cbmZ1bmN0aW9uIHBsYXllck1vdmUoZGlyKSB7XG4gIGlmIChnYW1lU3RhdGUuaXNHYW1lT3ZlcikgcmV0dXJuO1xuICBcbiAgZ2FtZVN0YXRlLnBpZWNlLnBvcy54ICs9IGRpcjtcbiAgaWYgKGNvbGxpZGUoZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UpKSB7XG4gICAgZ2FtZVN0YXRlLnBpZWNlLnBvcy54IC09IGRpcjtcbiAgICBpZiAoY29sbGlkZShnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSkpIHtcbiAgICAgIGdhbWVTdGF0ZS5waWVjZS5wb3MueCAtPSBkaXI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyTGluZXMoKSB7XG4gIGxldCBsaW5lc0NsZWFyZWQgPSAwO1xuICBcbiAgb3V0ZXI6IGZvciAobGV0IHkgPSBnYW1lU3RhdGUuUk9XUyAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgLy8g6KGM44GM44GZ44G544Gm5Z+L44G+44Gj44Gm44GE44KL44GL44OB44Kn44OD44KvXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBnYW1lU3RhdGUuQ09MUzsgeCsrKSB7XG4gICAgICBpZiAoZ2FtZVN0YXRlLmJvYXJkW3ldW3hdID09PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyDooYzjgpLliYrpmaTjgZfjgabkuIrjgavjgZrjgonjgZlcbiAgICBjb25zdCByb3cgPSBnYW1lU3RhdGUuYm9hcmQuc3BsaWNlKHksIDEpWzBdLmZpbGwoMCk7XG4gICAgZ2FtZVN0YXRlLmJvYXJkLnVuc2hpZnQocm93KTtcbiAgICB5Kys7XG4gICAgbGluZXNDbGVhcmVkKys7XG4gIH1cbiAgXG4gIC8vIOOCueOCs+OCouOCkuabtOaWsFxuICBpZiAobGluZXNDbGVhcmVkID4gMCkge1xuICAgIGdhbWVTdGF0ZS5zY29yZSArPSBjYWxjdWxhdGVTY29yZShsaW5lc0NsZWFyZWQpO1xuICAgIGdhbWVTdGF0ZS5saW5lcyArPSBsaW5lc0NsZWFyZWQ7XG4gICAgZ2FtZVN0YXRlLmxldmVsID0gY2FsY3VsYXRlTGV2ZWwoZ2FtZVN0YXRlLmxpbmVzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwbGF5ZXJEcm9wKCkge1xuICBpZiAoZ2FtZVN0YXRlLmlzR2FtZU92ZXIpIHJldHVybjtcbiAgXG4gIGdhbWVTdGF0ZS5waWVjZS5wb3MueSsrO1xuICBpZiAoY29sbGlkZShnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSkpIHtcbiAgICBnYW1lU3RhdGUucGllY2UucG9zLnktLTtcbiAgICBtZXJnZShnYW1lU3RhdGUuYm9hcmQsIGdhbWVTdGF0ZS5waWVjZSk7XG4gICAgXG4gICAgLy8g44Op44Kk44Oz44GM5o+D44Gj44Gf44GL56K66KqNXG4gICAgY2xlYXJMaW5lcygpO1xuICAgIFxuICAgIC8vIOaWsOOBl+OBhOODlOODvOOCueOCkueUn+aIkFxuICAgIGdhbWVTdGF0ZS5waWVjZSA9IGNyZWF0ZVBpZWNlKCk7XG4gICAgXG4gICAgLy8g44Ky44O844Og44Kq44O844OQ44O844OB44Kn44OD44KvXG4gICAgaWYgKGNvbGxpZGUoZ2FtZVN0YXRlLmJvYXJkLCBnYW1lU3RhdGUucGllY2UpKSB7XG4gICAgICBnYW1lT3ZlcigpO1xuICAgIH1cbiAgfVxuICBnYW1lU3RhdGUuZHJvcENvdW50ZXIgPSAwO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUodGltZSA9IDApIHtcbiAgLy8g5YmN5Zue44Gu44OV44Os44O844Og44GL44KJ44Gu57WM6YGO5pmC6ZaT44KS6KiI566XXG4gIGNvbnN0IGRlbHRhVGltZSA9IHRpbWUgLSBnYW1lU3RhdGUubGFzdFRpbWU7XG4gIGdhbWVTdGF0ZS5sYXN0VGltZSA9IHRpbWU7XG4gIFxuICAvLyDjg4njg63jg4Pjg5fjgqvjgqbjg7Pjgr/jg7zjgpLmm7TmlrBcbiAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyICs9IGRlbHRhVGltZTtcbiAgXG4gIC8vIOS4gOWumuaZgumWk+e1jOmBjuOBp+ODlOODvOOCueOCkuS4i+OBq+enu+WLlVxuICBpZiAoZ2FtZVN0YXRlLmRyb3BDb3VudGVyID4gZ2FtZVN0YXRlLmRyb3BJbnRlcnZhbCkge1xuICAgIGlmIChnYW1lU3RhdGUuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGU6IOODlOODvOOCueOCkuS4i+OBq+enu+WLleOBl+OBvuOBmScpO1xuICAgIH1cbiAgICBwbGF5ZXJEcm9wKCk7XG4gICAgZ2FtZVN0YXRlLmRyb3BDb3VudGVyID0gMDsgLy8g44Kr44Km44Oz44K/44O844KS44Oq44K744OD44OIXG4gIH1cbiAgXG4gIC8vIOaPj+eUu1xuICB0cnkge1xuICAgIGRyYXcoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3VwZGF0ZTog5o+P55S75Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfJywgZSk7XG4gIH1cbiAgXG4gIC8vIOOCsuODvOODoOOCquODvOODkOODvOOBp+OBquOBkeOCjOOBsOasoeOBruODleODrOODvOODoOOCkuimgeaxglxuICBpZiAoIWdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgZ2FtZVN0YXRlLmdhbWVMb29wSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyDjgrLjg7zjg6Djgqrjg7zjg5Djg7zmmYLjga7lh6bnkIZcbiAgICBjb25zb2xlLmxvZygndXBkYXRlOiDjgrLjg7zjg6Djgqrjg7zjg5Djg7zjgpLmpJzlh7rjgZfjgb7jgZfjgZ8nKTtcbiAgICBnYW1lT3ZlcigpO1xuICB9XG59XG5cbi8vIOOCreODvOODj+ODs+ODieODqemWouaVsFxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgaWYgKGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSByZXR1cm47XG5cbiAgLy8g44Kt44O844Oq44OU44O844OI44KS6Ziy44GQXG4gIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgXG4gIC8vIOOCreODvOOBjOaKvOOBleOCjOOBpuOBhOOCi+mWk+OBr+aKvOOBl+OBo+OBseOBquOBl+OBq+OBl+OBquOBhO+8iOS4i+efouWNsOOBr+mZpOOBj++8iVxuICBpZiAoZ2FtZVN0YXRlLmtleXNbZXZlbnQua2V5XSAmJiBldmVudC5rZXkgIT09ICdBcnJvd0Rvd24nKSByZXR1cm47XG4gIGdhbWVTdGF0ZS5rZXlzW2V2ZW50LmtleV0gPSB0cnVlO1xuICBjb25zb2xlLmxvZygnS2V5IHByZXNzZWQ6JywgZXZlbnQua2V5KTsgLy8g44OH44OQ44OD44Kw55SoXG5cbiAgLy8g44Kt44O844Gr5b+c44GY44Gf5Yem55CGXG4gIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIHBsYXllck1vdmUoLTEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBwbGF5ZXJNb3ZlKDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgIHBsYXllckRyb3AoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgcGxheWVyUm90YXRlKDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnICc6XG4gICAgICAvLyDjg4/jg7zjg4njg4njg63jg4Pjg5dcbiAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVLZXlEb3duOiDjg4/jg7zjg4njg4njg63jg4Pjg5fjgpLlrp/ooYzjgZfjgb7jgZknKTtcbiAgICAgIGlmICghZ2FtZVN0YXRlLnBpZWNlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignaGFuZGxlS2V5RG93bjog44Ki44Kv44OG44Kj44OW44Gq44OU44O844K544GM44GC44KK44G+44Gb44KTJyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyDjg5Tjg7zjgrnjgpLkuIDnlarkuIvjgb7jgafokL3jgajjgZlcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHBpZWNlWSA9IGdhbWVTdGF0ZS5waWVjZS5wb3MueTtcbiAgICAgICAgcGxheWVyRHJvcCgpO1xuICAgICAgICAvLyDkvY3nva7jgYzlpInjgo/jgonjgarjgY/jgarjgaPjgZ/jgonntYLkuoZcbiAgICAgICAgaWYgKHBpZWNlWSA9PT0gZ2FtZVN0YXRlLnBpZWNlLnBvcy55IHx8IGdhbWVTdGF0ZS5pc0dhbWVPdmVyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZUtleURvd246IOODj+ODvOODieODieODreODg+ODl+WujOS6hicsIHsgeTogZ2FtZVN0YXRlLnBpZWNlPy5wb3MueSB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncCc6XG4gICAgY2FzZSAnUCc6XG4gICAgICAvLyDkuIDmmYLlgZzmraJcbiAgICAgIGlmIChnYW1lU3RhdGUuZ2FtZUxvb3BJZCkge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShnYW1lU3RhdGUuZ2FtZUxvb3BJZCk7XG4gICAgICAgIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdhbWVTdGF0ZS5sYXN0VGltZSA9IDA7XG4gICAgICAgIGdhbWVTdGF0ZS5nYW1lTG9vcElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyJzpcbiAgICBjYXNlICdSJzpcbiAgICAgIC8vIOODquOCu+ODg+ODiFxuICAgICAgcmVzZXRHYW1lKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlS2V5VXAoZXZlbnQpIHtcbiAgZ2FtZVN0YXRlLmtleXNbZXZlbnQua2V5XSA9IGZhbHNlO1xufVxuXG4vLyDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjga7oqK3lrppcbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoa2V5RG93bkhhbmRsZXIsIGtleVVwSGFuZGxlcikge1xuY29uc29sZS5sb2coJ3NldHVwRXZlbnRMaXN0ZW5lcnM6IOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumuOBl+OBvuOBmScpO1xuICBcbi8vIOaXouWtmOOBruOCpOODmeODs+ODiOODquOCueODiuODvOOCkuWJiumZpFxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gIFxuLy8g5paw44GX44GE44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6L+95YqgXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93bkhhbmRsZXIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlVcEhhbmRsZXIpO1xuICBcbmNvbnNvbGUubG9nKCdzZXR1cEV2ZW50TGlzdGVuZXJzOiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjga7oqK3lrprjgYzlrozkuobjgZfjgb7jgZfjgZ8nKTtcbn1cblxuLy8g44Ky44O844Og5Yid5pyf5YyWXG5leHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmScpO1xuICBcbiAgdHJ5IHtcbiAgICAvLyDjgrLjg7zjg6DnirbmhYvjgpLliJ3mnJ/ljJZcbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44KS6ZaL5aeL44GX44G+44GZJyk7XG4gICAgY29uc3QgY2FudmFzID0gaW5pdEdhbWUoKTtcbiAgICBcbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCfjgq3jg6Pjg7Pjg5Djgrnjga7liJ3mnJ/ljJbjgavlpLHmlZfjgZfjgb7jgZfjgZ8nKTtcbiAgICB9XG4gICAgXG4gICAgLy8g44Ky44O844Og44KS44Oq44K744OD44OIXG4gICAgY29uc29sZS5sb2coJ2luaXQ6IOOCsuODvOODoOOCkuODquOCu+ODg+ODiOOBl+OBvuOBmScpO1xuICAgIHJlc2V0R2FtZSgpO1xuICAgIFxuICAgIC8vIOOCsuODvOODoOeKtuaFi+OCkuODreOCsOOBq+WHuuWKm1xuICAgIGdhbWVTdGF0ZS5sb2dTdGF0ZSgpO1xuICAgIFxuICAgIC8vIOOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxuICAgIGNvbnNvbGUubG9nKCdpbml0OiDjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrprjgZfjgb7jgZknKTtcbiAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKGhhbmRsZUtleURvd24sIGhhbmRsZUtleVVwKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZygnaW5pdDog44Ky44O844Og44Gu5Yid5pyf5YyW44GM5a6M5LqG44GX44G+44GX44GfJyk7XG4gICAgXG4gICAgLy8g5aSW6YOo44GL44KJ5Y+C54Wn44Gn44GN44KL44KI44GG44Gr5b+F6KaB44Gq44KC44Gu44KS6L+U44GZXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbnZhcyxcbiAgICAgIGdhbWVTdGF0ZSxcbiAgICAgIGhhbmRsZUtleURvd24sXG4gICAgICBoYW5kbGVLZXlVcCxcbiAgICAgIGV2ZW50TWFuYWdlclxuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcign44Ky44O844Og44Gu5Yid5pyf5YyW5Lit44Gr44Ko44Op44O844GM55m655Sf44GX44G+44GX44GfOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5jb25zdCBleHBvcnRzID0ge1xuICBpbml0LFxuICBwbGF5ZXJNb3ZlLFxuICBwbGF5ZXJSb3RhdGUsXG4gIHBsYXllckRyb3AsXG4gIGhhbmRsZUtleURvd24sXG4gIGhhbmRsZUtleVVwLFxuICBzZXR1cEV2ZW50TGlzdGVuZXJzLFxuICBnYW1lU3RhdGUsXG4gIGV2ZW50TWFuYWdlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0cztcblxuLy8g44OG44K544OI55So44Gr44Kw44Ot44O844OQ44Or44Gr5YWs6ZaLXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LnRldHJpcyA9IHdpbmRvdy50ZXRyaXMgfHwge307XG4gIHdpbmRvdy50ZXRyaXMuZ2FtZSA9IHtcbiAgICBpbml0LFxuICAgIGdhbWVTdGF0ZSxcbiAgICBoYW5kbGVLZXlEb3duOiBleHBvcnRzLmhhbmRsZUtleURvd24sXG4gICAgaGFuZGxlS2V5VXAsXG4gICAgZXZlbnRNYW5hZ2VyXG4gIH07XG59XG5cbi8vIOOCsuODvOODoOOBruOCueOCv+ODvOODiO+8iOODluODqeOCpuOCtuWun+ihjOaZguOBruOBv++8iVxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAvLyDml6LlrZjjga7jgrLjg7zjg6Djg6vjg7zjg5fjgpLjgq/jg6rjgqJcbiAgICBpZiAoZ2FtZVN0YXRlLmdhbWVMb29wSWQpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGdhbWVTdGF0ZS5nYW1lTG9vcElkKTtcbiAgICB9XG4gICAgaW5pdEdhbWUoKTtcbiAgfSk7ICAvLyDjgqbjgqPjg7Pjg4njgqbjg6rjgrXjgqTjgrrmmYLjga7lh6bnkIZcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuICAgIGlmIChjYW52YXMgJiYgZ2FtZVN0YXRlLmN0eCkge1xuICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu44K144Kk44K644KS5YaN6Kit5a6aXG4gICAgICBjYW52YXMud2lkdGggPSBnYW1lU3RhdGUuQ09MUyAqIGdhbWVTdGF0ZS5CTE9DSztcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBnYW1lU3RhdGUuUk9XUyAqIGdhbWVTdGF0ZS5CTE9DSztcbiAgICAgIC8vIOWGjeaPj+eUu1xuICAgICAgZHJhdygpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qKlxuICog44OG44OI44Oq44K544Ky44O844Og44Gu44Ko44Oz44OI44Oq44O844Od44Kk44Oz44OIXG4gKi9cblxuLy8g44K544K/44Kk44Or44K344O844OI44KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbi8vIOOCsuODvOODoOODouOCuOODpeODvOODq+OCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4vZ2FtZS5qcyc7XG5cbi8vIOODh+ODkOODg+OCsOeUqOOBruOCueOCv+OCpOODq+OCkui/veWKoFxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICNnYW1lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIH1cbmA7XG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuLy8g44OJ44Kt44Ol44Oh44Oz44OI44Gu6Kqt44G/6L6844G/5a6M5LqG44KS5b6F44Gj44Gm44Ky44O844Og44KS5Yid5pyf5YyWXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnRE9NQ29udGVudExvYWRlZCDjgqTjg5njg7Pjg4jjgYznmbrngavjgZfjgb7jgZfjgZ8nKTtcbiAgXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ+OCsuODvOODoOOBruWIneacn+WMluOCkumWi+Wni+OBl+OBvuOBmS4uLicpO1xuICAgIGNvbnN0IGdhbWUgPSBpbml0KCk7XG4gICAgY29uc29sZS5sb2coJ+ODhuODiOODquOCueOCsuODvOODoOOBjOWIneacn+WMluOBleOCjOOBvuOBl+OBnycsIGdhbWUpO1xuICAgIFxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBrueKtuaFi+OCkueiuuiqjVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY29uc29sZS5sb2coJ+OCreODo+ODs+ODkOOCueOBruOCteOCpOOCujonLCBjYW52YXMud2lkdGgsICd4JywgY2FudmFzLmhlaWdodCk7XG4gICAgICBjb25zb2xlLmxvZygn44Kt44Oj44Oz44OQ44K544Gu44K544K/44Kk44Or44K144Kk44K6OicsIGNhbnZhcy5zdHlsZS53aWR0aCwgJ3gnLCBjYW52YXMuc3R5bGUuaGVpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcign44Kt44Oj44Oz44OQ44K56KaB57Sg44GM6KaL44Gk44GL44KK44G+44Gb44KTJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBnzonLCBlcnJvcik7XG4gICAgYWxlcnQoJ+OCsuODvOODoOOBruWIneacn+WMluS4reOBq+OCqOODqeODvOOBjOeZuueUn+OBl+OBvuOBl+OBn+OAguOCs+ODs+OCveODvOODq+OCkueiuuiqjeOBl+OBpuOBj+OBoOOBleOBhOOAgicpO1xuICB9XG59KTtcblxuLy8g6ZaL55m655SoOiDjgrDjg63jg7zjg5Djg6vlkI3liY3nqbrplpPjgavjgqjjgq/jgrnjg53jg7zjg4hcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICB3aW5kb3cudGV0cmlzID0gd2luZG93LnRldHJpcyB8fCB7fTtcbiAgd2luZG93LnRldHJpcy5pbml0ID0gaW5pdDtcbn1cbiJdLCJuYW1lcyI6WyJFdmVudE1hbmFnZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJldmVudEhhbmRsZXJzIiwiTWFwIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsIl90aGlzIiwiaGFzIiwic2V0IiwiU2V0IiwiaGFuZGxlcnMiLCJnZXQiLCJhZGQiLCJzaXplIiwiZG9jdW1lbnQiLCJjcmVhdGVFdmVudEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsImVyciIsImUiLCJmIiwiY2xlYXIiLCJfdGhpczIiLCJldmVudCIsImZvckVhY2giLCJlcnJvciIsImNvbnNvbGUiLCJjb25jYXQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudFByb3BzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiRXZlbnQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsIk9iamVjdCIsImFzc2lnbiIsImV2ZW50TWFuYWdlciIsIndpbmRvdyIsInRldHJpcyIsImdhbWVTdGF0ZSIsImRlYnVnIiwia2V5cyIsIkNPTFMiLCJST1dTIiwiQkxPQ0siLCJjb2xvcnMiLCJ0ZXRyb21pbm9zIiwiYm9hcmQiLCJwaWVjZSIsIm5leHRQaWVjZSIsImN0eCIsImRyb3BDb3VudGVyIiwiZHJvcEludGVydmFsIiwibGFzdFRpbWUiLCJpc0dhbWVPdmVyIiwic2NvcmUiLCJsaW5lcyIsImxldmVsIiwiZ2FtZUxvb3BJZCIsImxvZ1N0YXRlIiwibG9nIiwiY2FsY3VsYXRlU2NvcmUiLCJsaW5lc0NsZWFyZWQiLCJjdXJyZW50U2NvcmUiLCJzY29yZVRhYmxlIiwiY2FsY3VsYXRlTGV2ZWwiLCJ0b3RhbExpbmVzIiwibGluZXNQZXJMZXZlbCIsIk1hdGgiLCJmbG9vciIsImluaXRHYW1lIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsInN0eWxlIiwiZGlzcGxheSIsIm1hcmdpbiIsImdldENvbnRleHQiLCJkcHIiLCJkZXZpY2VQaXhlbFJhdGlvIiwic2NhbGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsInJlc2V0R2FtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJjcmVhdGVQaWVjZSIsInBlcmZvcm1hbmNlIiwibm93Iiwic2NvcmVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJsZXZlbEVsZW1lbnQiLCJsaW5lc0VsZW1lbnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNvbGxpZGUiLCJnYW1lT3ZlciIsImNvbmZpcm0iLCJtYXRyaXgiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJyYW5kb20iLCJwb3MiLCJ4IiwieSIsImRyYXdNYXRyaXgiLCJvZmZzZXQiLCJyb3ciLCJkcmF3IiwibGluZVdpZHRoIiwid2FybiIsImkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJtZXJnZSIsImJvYXJkWSIsImJvYXJkWCIsInJvdGF0ZSIsImRpciIsIl9yZWYiLCJyZXZlcnNlIiwicGxheWVyUm90YXRlIiwiY3VycmVudFBpZWNlTWF0cml4Iiwib3JpZ2luYWxNYXRyaXgiLCJyb3RhdGVkTWF0cml4IiwiY3VycmVudFgiLCJhYnMiLCJmaW5hbE1hdHJpeCIsIm5ld1BvcyIsInBsYXllck1vdmUiLCJjbGVhckxpbmVzIiwib3V0ZXIiLCJzcGxpY2UiLCJ1bnNoaWZ0IiwicGxheWVyRHJvcCIsInRpbWUiLCJkZWx0YVRpbWUiLCJoYW5kbGVLZXlEb3duIiwicmVwZWF0IiwicGllY2VZIiwiX2dhbWVTdGF0ZSRwaWVjZSIsImhhbmRsZUtleVVwIiwic2V0dXBFdmVudExpc3RlbmVycyIsImtleURvd25IYW5kbGVyIiwia2V5VXBIYW5kbGVyIiwiaW5pdCIsIkVycm9yIiwiZXhwb3J0cyIsImdhbWUiLCJjcmVhdGVFbGVtZW50IiwiaGVhZCIsImFwcGVuZENoaWxkIiwiYWxlcnQiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9