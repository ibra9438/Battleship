/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Medium.ttf */ "./src/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 500;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsla(0, 6%, 90%, 0.363);\n  font-family: \"MyFont\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 45rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 20rem;\n  height: 20rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n  cursor: pointer;\n}\n.illegal {\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(195, 170, 170);\n  cursor: pointer;\n}\n.hit {\n  background: green;\n  cursor: not-allowed;\n}\n.aim {\n  background: rgb(92, 92, 197);\n  cursor: pointer;\n}\n.miss {\n  background: rgb(243, 111, 3);\n  cursor: not-allowed;\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"MyFont\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: hidden;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.currentPLayer {\n  width: 5rem;\n  color: hsl(206, 95%, 64%);\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1rem 2rem;\n  color: white;\n  border: none;\n  outline: none;\n  background-color: hsla(202, 93%, 23%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,mCAAmC;EACnC,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,eAAe;AACjB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,2CAA2C;EAC3C,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,yBAAyB;AAC3B;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,4CAA4C;AAC9C;AACA;EACE,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./Roboto-Medium.ttf\") format(\"ttf\");\n  font-weight: 500;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsla(0, 6%, 90%, 0.363);\n  font-family: \"MyFont\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 45rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 20rem;\n  height: 20rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n  cursor: pointer;\n}\n.illegal {\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(195, 170, 170);\n  cursor: pointer;\n}\n.hit {\n  background: green;\n  cursor: not-allowed;\n}\n.aim {\n  background: rgb(92, 92, 197);\n  cursor: pointer;\n}\n.miss {\n  background: rgb(243, 111, 3);\n  cursor: not-allowed;\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"MyFont\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: hidden;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.currentPLayer {\n  width: 5rem;\n  color: hsl(206, 95%, 64%);\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1rem 2rem;\n  color: white;\n  border: none;\n  outline: none;\n  background-color: hsla(202, 93%, 23%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { ship } = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
const { controlGrid } = __webpack_require__(/*! ./dom */ "./src/dom.js");

const gameBoard = (player, pc) => {
  const playerBoard = [];
  const pcBoard = [];

  const shipsArr = [];
  const shipsArrPc = [];

  const shipSize = [5, 4, 3, 3, 2];
  let newShip;

  const missedPlayerHits = [];
  const missedPcHits = [];

  let turn = 0;
  let gameOn = true;
  const getTurn = () => turn;
  const setTurn = () => turn++;

  const init = () => {
    controlGrid.init(pcBoard, playerBoard);
  };
  const __checkActive = (
    randomNumberY,
    randomNumberX,
    length,
    orientation
  ) => {
    let legalValue;
    let legalRule = (a) => a.className !== "element activePlayer";
    if (orientation === "horizontal") {
      return (legalValue = pcBoard[randomNumberY].every((a) =>
        legalRule(a)
      ));
    } else {
      const filteredArr = [];
      for (let i = 0; i < length; i++) {
        filteredArr.push(pcBoard[randomNumberY + i][randomNumberX]);
      }
      return (legalValue = filteredArr.every((a) => legalRule(a)));
    }
  };
  const renderPcShip = () => {
    let randomNumberX;
    let randomNumberY;
    let orientation = ["vertical", "horizontal"];
    let orientationValue;
    let legalMove = true;
    shipSize.forEach((e) => {
      orientationValue =
        orientation[Math.floor(Math.random() * 9) % 2];
      if (orientationValue == "horizontal") {
        do {
          randomNumberX = Math.floor(Math.random() * 10);
          randomNumberY = Math.floor(Math.random() * 10);

          if (randomNumberX + e <= 9) {
            legalMove = __checkActive(
              randomNumberY,
              randomNumberX,
              e,
              orientationValue
            );
          }
        } while (randomNumberX + e >= 9 || !legalMove);

        newShip = ship(e, randomNumberX, randomNumberY, false);
        shipsArrPc.push(newShip);
        controlGrid.renderPcShip(
          pcBoard,
          e,
          randomNumberX,
          randomNumberY
        );
      } else {
        do {
          randomNumberX = Math.floor(Math.random() * 10);
          randomNumberY = Math.floor(Math.random() * 10);
          if (randomNumberY + e <= 9) {
            legalMove = __checkActive(
              randomNumberY,
              randomNumberX,
              e,
              orientationValue
            );
          }
        } while (randomNumberY + e >= 9 || !legalMove);
        newShip = ship(e, randomNumberX, randomNumberY, true);
        shipsArrPc.push(newShip);
        controlGrid.renderPcShip(
          pcBoard,
          e,
          randomNumberX,
          randomNumberY,
          false
        );
      }
    });
  };
  const showLegalPcGrid = (e, flag) => {
    if (flag) {
      controlGrid.showIfLegal(e, true);
    } else {
      controlGrid.showIfLegal(e, false);
    }
  };
  const dragAndDrop = (e, flag) => {
    let arr = [];
    controlGrid.dragAndDrop(e, flag);
  };
  const loadPlayerShip = (a) => {
    let values;
    if (shipSize.length > 0) {
      values = controlGrid.loadShip(a);
      if (values !== false) {
        newShip = ship(
          parseInt(shipSize[0]),
          parseInt(values[1]),
          parseInt(values[0])
        );
        shipsArr.push(newShip);
        shipSize.shift();
      }
    }
  };
  const recieveAttack = (x, y, a) => {
    let value = false;
    if (gameOn) {
      if (getTurn() % 2 === 0) {
        shipsArrPc.forEach((e) => {
          if (e.isHit(y, x) == true) {
            e.hit(1);
            controlGrid.markHit(a, true);
            value = true;
            allShipsSunk(true);
          }
        });
        if (value == false) {
          controlGrid.markHit(a, false);
          missedPlayerHits.push([x, y]);
          allShipsSunk();
        }
        setTurn();
      }
    }
    if (gameOn) {
      if (getTurn() % 2 !== 0) {
        value = false;
        let pcAttack = pc.pcAttack();
        let element;
        shipsArr.forEach((e) => {
          if (e.isHit(pcAttack[0], pcAttack[1]) == true) {
            e.hit(1);
            element = playerBoard[pcAttack[0]][pcAttack[1]];
            controlGrid.switchName(getTurn());
            setTimeout(() => {
              controlGrid.markHit(element, true);
              allShipsSunk(false);
              setTurn();
              controlGrid.switchName(getTurn());
            }, 20);
            value = true;
          }
        });
        if (value == false) {
          element = playerBoard[pcAttack[0]][pcAttack[1]];
          controlGrid.switchName(getTurn());
          setTimeout(() => {
            controlGrid.markHit(element, false);
            setTurn();
            controlGrid.switchName(getTurn());
          }, 20);
          missedPcHits.push([pcAttack[0], pcAttack[1]]);
        }
      }
    }
    return value;
  };
  const allShipsSunk = (flag) => {
    let pcSunkCounter = 0;
    let playerSunkCounter = 0;
    if (flag) {
      shipsArrPc.forEach((e) => {
        if (e.isSunk() == true) {
          pcSunkCounter++;
        }
      });
    } else {
      shipsArr.forEach((e) => {
        if (e.isSunk() == true) {
          playerSunkCounter++;
        }
      });
    }
    if (shipsArr.length === playerSunkCounter) {
      __checkWinner(false);
    }
    if (shipsArrPc.length === pcSunkCounter) {
      __checkWinner(true);
    }
  };
  const __checkWinner = (flag) => {
    if (flag) {
      controlGrid.checkWinner(flag);
    } else {
      controlGrid.checkWinner(flag);
    }
    gameOn = false;
    setTimeout(() => {
      __reset();
    }, 2000);
  };
  const __reset = () => {
    controlGrid.reset();
    turn = 0;
    controlGrid.switchName(turn);
    renderPcShip();
    // __testingShip();
    gameOn = true;
  };
  return {
    init,
    getTurn,
    recieveAttack,
    renderPcShip,
    dragAndDrop,
    pcBoard,
    loadPlayerShip,
    playerBoard,
    showLegalPcGrid,
  };
};
exports.gameBoard = gameBoard;


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

const player = () => {
  const shipHits = [];
  const pcAttack = () => {
    let legalRule;
    let hitRule;
    let randomNumbersX;
    let randomNumbersY;
    let flag = false;
    do {
      flag = false;
      randomNumbersX = Math.floor(Math.random() * 10);
      randomNumbersY = Math.floor(Math.random() * 10);
      for (let i = 0; i < shipHits.length; i++) {
        if (
          randomNumbersX == shipHits[i][1] &&
          randomNumbersY == shipHits[i][0]
        ) {
          flag = true;
        }
      }
    } while (flag);
    shipHits.push([randomNumbersY, randomNumbersX]);
    return [randomNumbersY, randomNumbersX];
  };
  return { pcAttack, shipHits };
};
exports.player = player;


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { gameBoard } = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
const controlGrid = (() => {
  const shipSize = [5, 4, 3, 3, 2];
  const filteredArr = [];
  const playerGrid = document.querySelectorAll(
    ".battle-grid:nth-child(1)"
  );
  const pcGrid = document.querySelectorAll(
    ".battle-grid:nth-child(2)"
  );
  const rotation = document.querySelector(".rotation");
  let rotationStatus = 0;
  rotation.addEventListener("click", () => {
    rotationStatus++;
  });
  let pcElements;
  let playerElements;

  let doublePcElements = [];
  let doublePlayerElements = [];
  const modalContainer = document.querySelector(".modal-container");
  const playerNameForm = document.forms["playerName"];
  playerNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    switchName(0);
    modalContainer.classList.remove("modal-container");
    modalContainer.classList.add("modal-container-hidden");
  });
  const input = document.querySelector("#formText");
  const currentPlayer = document.querySelector(".currentPlayer");

  const init = (pcBoard, playerBoard) => {
    for (let i = 0; i < 10; i++) {
      pcBoard.push([]);
      playerBoard.push([]);

      doublePcElements.push([]);
      doublePlayerElements.push([]);
      for (let j = 0; j < 10; j++) {
        pcGrid.forEach((e) => {
          const element = document.createElement("div");
          element.classList.add("element");
          element.setAttribute("data-index-v", i);
          element.setAttribute("data-index-h", j);
          e.append(element);
          pcBoard[i].push(element);
          doublePcElements[i].push(element);
        });
        playerGrid.forEach((e) => {
          const element = document.createElement("div");
          element.classList.add("element");
          element.setAttribute("data-index-h", j);
          element.setAttribute("data-index-v", i);
          e.append(element);
          playerBoard[i].push(element);
          doublePlayerElements[i].push(element);
        });
      }
    }
    pcElements = document.querySelectorAll(
      ".battle-grid:nth-child(2) .element"
    );
    playerElements = document.querySelectorAll(
      ".battle-grid:nth-child(1) .element"
    );
  };
  const renderPcShip = (
    pcBoard,
    length,
    positionX,
    positionY,
    flag = true
  ) => {
    if (flag) {
      for (let i = 0; i < length; i++) {
        pcBoard[positionY][positionX + i].classList.add(
          "activePlayer"
        );
      }
    } else {
      for (let i = 0; i < length; i++) {
        pcBoard[positionY + i][positionX].classList.add(
          "activePlayer"
        );
      }
    }
  };

  const showIfLegal = (e, flag) => {
    e.addEventListener("mouseout", () => {
      e.classList.remove("pcTurn");
      e.classList.remove("legal");
      e.classList.remove("illegal");
      e.classList.remove("aim");
    });
    if (flag == false) {
      e.classList.add("pcTurn");
    }
    let currentClassName = e.className;

    if (currentClassName != "element activePlayer") {
      e.classList.remove("illegal");
      e.classList.remove("aim");

      e.classList.add("legal");
    }
    if (
      currentClassName == "element miss" ||
      currentClassName == "element activePlayer hit"
    ) {
      e.classList.add("illegal");
      e.classList.remove("aim");
      e.classList.remove("pcTurn");
    }
    if (currentClassName == "element activePlayer") {
      e.classList.add("aim");
      e.classList.remove("legal");
      e.classList.remove("illegal");
      e.classList.remove("hit");
      e.classList.remove("pcTurn");
    }
  };
  const markHit = (a, hitFlag) => {
    if (hitFlag) {
      a.classList.remove("aim");
      a.classList.remove("legal");
      a.classList.remove("miss");
      a.classList.remove("illegal");

      a.classList.add("hit");
    } else {
      a.classList.remove("aim");
      a.classList.remove("legal");
      a.classList.remove("illegal");

      a.classList.add("miss");
    }
  };
  // implement drag and drop and push to to shipsArr
  const dragAndDrop = (e, flag = true) => {
    let value;
    let nextSibling;
    let lastTarget;
    let currentTarget = e;
    let length = shipSize[0];

    let x;
    let y;
    if (length > 0) {
      if (rotationStatus % 2 == 0) {
        if (flag) {
          filteredArr.length = 0;
          currentTarget.classList.remove("legal");
          for (let i = 0; i < length; i++) {
            filteredArr.push(currentTarget);
            nextSibling = currentTarget.nextSibling;
            currentTarget = nextSibling;
            lastTarget = currentTarget.previousSibling;
            currentTarget.classList.remove("legal");
          }
          value = filteredArr.every((a) => {
            if (
              a.className == "element" &&
              lastTarget.getAttribute("data-index-h") < 10 &&
              lastTarget.getAttribute("data-index-h") >
                e.getAttribute("data-index-h")
            ) {
              return true;
            } else {
              return false;
            }
          });
          if (value) {
            filteredArr.forEach((a) => {
              a.classList.add("legal");
            });
          } else {
            filteredArr.forEach((a) => {
              a.classList.remove("legal");
            });
            e.classList.add("illegal");
            return false;
          }
        } else {
          filteredArr.forEach((a) => {
            a.classList.remove("legal");
            a.classList.remove("illegal");
          });
        }
      } else {
        if (flag) {
          x = parseInt(e.getAttribute("data-index-h"));
          y = parseInt(e.getAttribute("data-index-v"));
          filteredArr.length = 0;
          filteredArr.push(currentTarget);
          nextSibling = doublePlayerElements[y + 1][x];
          filteredArr.push(nextSibling);
          for (let i = 1; i < length; i++) {
            currentTarget.classList.remove("legal");
            if (i + y < 10) {
              nextSibling = doublePlayerElements[y + i][x];
              currentTarget = nextSibling;
              filteredArr.push(currentTarget);
            } else {
              e.classList.add("illegal");
            }
          }
          value = filteredArr.every((a) => {
            if (
              a.className == "element" ||
              (a.className == "element legal" &&
                currentTarget.getAttribute("data-index-v") <= 10)
            ) {
              return true;
            } else {
              return false;
            }
          });
          if (value) {
            filteredArr.forEach((a) => {
              a.classList.add("legal");
            });
          } else {
            filteredArr.forEach((a) => {
              a.classList.remove("legal");
            });
            e.classList.add("illegal");
            return false;
          }
        } else {
          filteredArr.forEach((a) => {
            a.classList.remove("legal");
            a.classList.remove("illegal");
          });
        }
      }
    }
  };
  const loadShip = (a) => {
    let length = shipSize[0];
    let currentTarget = a;
    let nextSibling;
    let legal = dragAndDrop(a);

    let x = parseInt(a.getAttribute("data-index-h"));
    let y = parseInt(a.getAttribute("data-index-v"));

    if (rotationStatus % 2 == 0 && legal !== false) {
      for (let i = 0; i < length; i++) {
        currentTarget.classList.add("activePlayer");
        nextSibling = currentTarget.nextSibling;
        currentTarget = nextSibling;
      }
      shipSize.shift();

      return [
        a.getAttribute("data-index-v"),
        a.getAttribute("data-index-h"),
      ];
    }
    if (rotationStatus % 2 !== 0 && legal !== false) {
      currentTarget.classList.add("activePlayer");
      for (let i = 0; i < length; i++) {
        nextSibling = doublePlayerElements[y + i][x];
        currentTarget = nextSibling;
        currentTarget.classList.add("activePlayer");
      }
      shipSize.shift();
      return [
        a.getAttribute("data-index-v"),
        a.getAttribute("data-index-h"),
        true,
      ];
    }
    if (!legal == false) {
      alert("can't place ship here");
      return false;
    }
  };
  const switchName = (turn) => {
    if (turn % 2 == 0) {
      currentPlayer.innerText = input.value;
    } else {
      currentPlayer.innerText = "PC";
    }
  };
  const firing = (flag) => {
    if (flag) {
      currentPlayer.innerText = `${input.value} is firing`;
    } else {
      currentPlayer.innerText = `PC is firing`;
    }
  };
  const checkWinner = (flag) => {
    if (flag) {
      currentPlayer.innerText = `${input.value} HAS WON !!!!! `;
    } else {
      currentPlayer.innerText = `PC has won`;
    }
  };
  const reset = () => {
    pcElements.forEach((e) => {
      e.classList.remove("hit", "miss", "activePlayer");
    });
    playerElements.forEach((e) => {
      e.classList.remove("hit", "legal", "miss", "activePlayer");
    });
  };
  return {
    init,
    reset,
    rotation,
    renderPcShip,
    showIfLegal,
    markHit,
    checkWinner,
    loadShip,
    dragAndDrop,
    switchName,
  };
})();
exports.controlGrid = controlGrid;


/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

const ship = (length, startX, startY, vertical = false) => {
  const hits = [];
  const shipCoordinates = [];
  const getLength = () => length;

  const getVertical = () => vertical;

  const hit = (number) => {
    hits.push(number);
  };
  const isSunk = () => {
    if (hits.length === getLength()) {
      return true;
    }
    return false;
  };
  const isHit = (y, x) => {
    let value = false;
    shipCoordinates.forEach((e) => {
      if (e[0] == y && e[1] == x) {
        value = true;
      }
    });
    return value;
  };
  const __setCoordinates = () => {
    if (vertical == false) {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([startY, startX + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([startY + i, startX]);
      }
    }
  };
  __setCoordinates();
  return { hit, isSunk, hits, shipCoordinates, isHit };
};
exports.ship = ship;


/***/ }),

/***/ "./src/Roboto-Medium.ttf":
/*!*******************************!*\
  !*** ./src/Roboto-Medium.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7429a63c09f79a1760b0.ttf";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Player */ "./src/Player.js");






const { gameBoard } = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
const { player } = __webpack_require__(/*! ./Player */ "./src/Player.js");
const { controlGrid } = __webpack_require__(/*! ./dom */ "./src/dom.js");
const { ship } = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");

const humanPlayer = player();
const pcPlayer = player();

const board = gameBoard(pcPlayer, humanPlayer);
const pcBoard = board.pcBoard;
const playerBoard = board.playerBoard;
// remove click function from inside dom to here
board.init(pcBoard, playerBoard);
setTimeout(() => {
  board.renderPcShip();
}, 500);
playerBoard.forEach((e) => {
  e.forEach((a) => {
    a.addEventListener("mouseover", () => {
      board.dragAndDrop(a);
    });
    a.addEventListener("mouseout", () => {
      board.dragAndDrop(a, false);
    });
    a.addEventListener("click", () => {
      board.loadPlayerShip(a);
    });
  });
});
pcBoard.forEach((e) => {
  e.forEach((a) => {
    a.addEventListener("mouseover", () => {
      if (board.getTurn() % 2 == 0) {
        board.showLegalPcGrid(a);
      } else {
        board.showLegalPcGrid(a, false);
      }
    });
    a.addEventListener("click", () => {
      if (
        a.className !== "element hit" &&
        a.className !== "element miss" &&
        a.className !== "element illegal" &&
        a.className !== "element miss illegal" &&
        a.className !== "element activePlayer hit" &&
        board.getTurn() % 2 == 0
      ) {
        board.recieveAttack(
          parseInt(a.getAttribute("data-index-h")),
          parseInt(a.getAttribute("data-index-v")),
          a
        );
      }
    });
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDMU9qQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGNBQWM7Ozs7Ozs7Ozs7O0FDMUJkLFFBQVEsWUFBWSxFQUFFLG1CQUFPLENBQUMsdUNBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxj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Q0FBQyx1Q0FBYTtBQUMzQyxRQUFRLFNBQVMsRUFBRSxtQkFBTyxDQUFDLGlDQUFVO0FBQ3JDLFFBQVEsY0FBYyxFQUFFLG1CQUFPLENBQUMsMkJBQU87QUFDdkMsUUFBUSxPQUFPLEVBQUUsbUJBQU8sQ0FBQywyQ0FBZTs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInR0ZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDYlLCA5MCUsIDAuMzYzKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDQ1cmVtO1xcbn1cXG4uYmF0dGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5iYXR0bGUtZ3JpZC1vZmYge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbGxlZ2FsIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hY3RpdmVQbGF5ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE5NSwgMTcwLCAxNzApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFpbSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoOTIsIDkyLCAxOTcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAxMTEsIDMpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLm1vZGFsLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiByZ2IoNTcsIDkwLCAxMTkpO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyLWhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4NCwgMTk3LCAyNTAsIDAuOTQ1KTtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jdXJyZW50UExheWVyIHtcXG4gIHdpZHRoOiA1cmVtO1xcbiAgY29sb3I6IGhzbCgyMDYsIDk1JSwgNjQlKTtcXG59XFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDIsIDkzJSwgMjMlLCAwLjk1OSk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMi4ycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDBEQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9Sb2JvdG8tTWVkaXVtLnR0ZlxcXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgNiUsIDkwJSwgMC4zNjMpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogNDVyZW07XFxufVxcbi5iYXR0bGUtZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJhdHRsZS1ncmlkLW9mZiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZWxlbWVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmxlZ2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDAsIDI0OCwgMTQ2KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmlsbGVnYWwge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFjdGl2ZVBsYXllciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxNzAsIDE3MCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYWltIHtcXG4gIGJhY2tncm91bmQ6IHJnYig5MiwgOTIsIDE5Nyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDExMSwgMyk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYig1NywgOTAsIDExOSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5tb2RhbC1jb250YWluZXItaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxOTcsIDI1MCwgMC45NDUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmN1cnJlbnRQTGF5ZXIge1xcbiAgd2lkdGg6IDVyZW07XFxuICBjb2xvcjogaHNsKDIwNiwgOTUlLCA2NCUpO1xcbn1cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjZyZW0gMC40cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIwMiwgOTMlLCAyMyUsIDAuOTU5KTtcXG59XFxuYnV0dG9uOmhvdmVyIHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAyLjJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB7IHNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBGYWN0b3J5XCIpO1xuY29uc3QgeyBjb250cm9sR3JpZCB9ID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuXG5jb25zdCBnYW1lQm9hcmQgPSAocGxheWVyLCBwYykgPT4ge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IFtdO1xuICBjb25zdCBwY0JvYXJkID0gW107XG5cbiAgY29uc3Qgc2hpcHNBcnIgPSBbXTtcbiAgY29uc3Qgc2hpcHNBcnJQYyA9IFtdO1xuXG4gIGNvbnN0IHNoaXBTaXplID0gWzUsIDQsIDMsIDMsIDJdO1xuICBsZXQgbmV3U2hpcDtcblxuICBjb25zdCBtaXNzZWRQbGF5ZXJIaXRzID0gW107XG4gIGNvbnN0IG1pc3NlZFBjSGl0cyA9IFtdO1xuXG4gIGxldCB0dXJuID0gMDtcbiAgbGV0IGdhbWVPbiA9IHRydWU7XG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBzZXRUdXJuID0gKCkgPT4gdHVybisrO1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgY29udHJvbEdyaWQuaW5pdChwY0JvYXJkLCBwbGF5ZXJCb2FyZCk7XG4gIH07XG4gIGNvbnN0IF9fY2hlY2tBY3RpdmUgPSAoXG4gICAgcmFuZG9tTnVtYmVyWSxcbiAgICByYW5kb21OdW1iZXJYLFxuICAgIGxlbmd0aCxcbiAgICBvcmllbnRhdGlvblxuICApID0+IHtcbiAgICBsZXQgbGVnYWxWYWx1ZTtcbiAgICBsZXQgbGVnYWxSdWxlID0gKGEpID0+IGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyXCI7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgcmV0dXJuIChsZWdhbFZhbHVlID0gcGNCb2FyZFtyYW5kb21OdW1iZXJZXS5ldmVyeSgoYSkgPT5cbiAgICAgICAgbGVnYWxSdWxlKGEpXG4gICAgICApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVyZWRBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsdGVyZWRBcnIucHVzaChwY0JvYXJkW3JhbmRvbU51bWJlclkgKyBpXVtyYW5kb21OdW1iZXJYXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGxlZ2FsVmFsdWUgPSBmaWx0ZXJlZEFyci5ldmVyeSgoYSkgPT4gbGVnYWxSdWxlKGEpKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQY1NoaXAgPSAoKSA9PiB7XG4gICAgbGV0IHJhbmRvbU51bWJlclg7XG4gICAgbGV0IHJhbmRvbU51bWJlclk7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgIGxldCBvcmllbnRhdGlvblZhbHVlO1xuICAgIGxldCBsZWdhbE1vdmUgPSB0cnVlO1xuICAgIHNoaXBTaXplLmZvckVhY2goKGUpID0+IHtcbiAgICAgIG9yaWVudGF0aW9uVmFsdWUgPVxuICAgICAgICBvcmllbnRhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSAlIDJdO1xuICAgICAgaWYgKG9yaWVudGF0aW9uVmFsdWUgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHJhbmRvbU51bWJlclggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgcmFuZG9tTnVtYmVyWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgIGlmIChyYW5kb21OdW1iZXJYICsgZSA8PSA5KSB7XG4gICAgICAgICAgICBsZWdhbE1vdmUgPSBfX2NoZWNrQWN0aXZlKFxuICAgICAgICAgICAgICByYW5kb21OdW1iZXJZLFxuICAgICAgICAgICAgICByYW5kb21OdW1iZXJYLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICBvcmllbnRhdGlvblZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocmFuZG9tTnVtYmVyWCArIGUgPj0gOSB8fCAhbGVnYWxNb3ZlKTtcblxuICAgICAgICBuZXdTaGlwID0gc2hpcChlLCByYW5kb21OdW1iZXJYLCByYW5kb21OdW1iZXJZLCBmYWxzZSk7XG4gICAgICAgIHNoaXBzQXJyUGMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgY29udHJvbEdyaWQucmVuZGVyUGNTaGlwKFxuICAgICAgICAgIHBjQm9hcmQsXG4gICAgICAgICAgZSxcbiAgICAgICAgICByYW5kb21OdW1iZXJYLFxuICAgICAgICAgIHJhbmRvbU51bWJlcllcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICByYW5kb21OdW1iZXJYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHJhbmRvbU51bWJlclkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgaWYgKHJhbmRvbU51bWJlclkgKyBlIDw9IDkpIHtcbiAgICAgICAgICAgIGxlZ2FsTW92ZSA9IF9fY2hlY2tBY3RpdmUoXG4gICAgICAgICAgICAgIHJhbmRvbU51bWJlclksXG4gICAgICAgICAgICAgIHJhbmRvbU51bWJlclgsXG4gICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uVmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChyYW5kb21OdW1iZXJZICsgZSA+PSA5IHx8ICFsZWdhbE1vdmUpO1xuICAgICAgICBuZXdTaGlwID0gc2hpcChlLCByYW5kb21OdW1iZXJYLCByYW5kb21OdW1iZXJZLCB0cnVlKTtcbiAgICAgICAgc2hpcHNBcnJQYy5wdXNoKG5ld1NoaXApO1xuICAgICAgICBjb250cm9sR3JpZC5yZW5kZXJQY1NoaXAoXG4gICAgICAgICAgcGNCb2FyZCxcbiAgICAgICAgICBlLFxuICAgICAgICAgIHJhbmRvbU51bWJlclgsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyWSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBzaG93TGVnYWxQY0dyaWQgPSAoZSwgZmxhZykgPT4ge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBjb250cm9sR3JpZC5zaG93SWZMZWdhbChlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbEdyaWQuc2hvd0lmTGVnYWwoZSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZHJhZ0FuZERyb3AgPSAoZSwgZmxhZykgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBjb250cm9sR3JpZC5kcmFnQW5kRHJvcChlLCBmbGFnKTtcbiAgfTtcbiAgY29uc3QgbG9hZFBsYXllclNoaXAgPSAoYSkgPT4ge1xuICAgIGxldCB2YWx1ZXM7XG4gICAgaWYgKHNoaXBTaXplLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhbHVlcyA9IGNvbnRyb2xHcmlkLmxvYWRTaGlwKGEpO1xuICAgICAgaWYgKHZhbHVlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgbmV3U2hpcCA9IHNoaXAoXG4gICAgICAgICAgcGFyc2VJbnQoc2hpcFNpemVbMF0pLFxuICAgICAgICAgIHBhcnNlSW50KHZhbHVlc1sxXSksXG4gICAgICAgICAgcGFyc2VJbnQodmFsdWVzWzBdKVxuICAgICAgICApO1xuICAgICAgICBzaGlwc0Fyci5wdXNoKG5ld1NoaXApO1xuICAgICAgICBzaGlwU2l6ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9ICh4LCB5LCBhKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZmFsc2U7XG4gICAgaWYgKGdhbWVPbikge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgPT09IDApIHtcbiAgICAgICAgc2hpcHNBcnJQYy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuaXNIaXQoeSwgeCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZS5oaXQoMSk7XG4gICAgICAgICAgICBjb250cm9sR3JpZC5tYXJrSGl0KGEsIHRydWUpO1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgYWxsU2hpcHNTdW5rKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRyb2xHcmlkLm1hcmtIaXQoYSwgZmFsc2UpO1xuICAgICAgICAgIG1pc3NlZFBsYXllckhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgICAgIGFsbFNoaXBzU3VuaygpO1xuICAgICAgICB9XG4gICAgICAgIHNldFR1cm4oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGdhbWVPbikge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgIT09IDApIHtcbiAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBjQXR0YWNrID0gcGMucGNBdHRhY2soKTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIHNoaXBzQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5pc0hpdChwY0F0dGFja1swXSwgcGNBdHRhY2tbMV0pID09IHRydWUpIHtcbiAgICAgICAgICAgIGUuaGl0KDEpO1xuICAgICAgICAgICAgZWxlbWVudCA9IHBsYXllckJvYXJkW3BjQXR0YWNrWzBdXVtwY0F0dGFja1sxXV07XG4gICAgICAgICAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKGdldFR1cm4oKSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29udHJvbEdyaWQubWFya0hpdChlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgYWxsU2hpcHNTdW5rKGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0VHVybigpO1xuICAgICAgICAgICAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKGdldFR1cm4oKSk7XG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlID09IGZhbHNlKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHBsYXllckJvYXJkW3BjQXR0YWNrWzBdXVtwY0F0dGFja1sxXV07XG4gICAgICAgICAgY29udHJvbEdyaWQuc3dpdGNoTmFtZShnZXRUdXJuKCkpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbEdyaWQubWFya0hpdChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBzZXRUdXJuKCk7XG4gICAgICAgICAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKGdldFR1cm4oKSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICAgIG1pc3NlZFBjSGl0cy5wdXNoKFtwY0F0dGFja1swXSwgcGNBdHRhY2tbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9IChmbGFnKSA9PiB7XG4gICAgbGV0IHBjU3Vua0NvdW50ZXIgPSAwO1xuICAgIGxldCBwbGF5ZXJTdW5rQ291bnRlciA9IDA7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHNoaXBzQXJyUGMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pc1N1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgcGNTdW5rQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcHNBcnIuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pc1N1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgcGxheWVyU3Vua0NvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzaGlwc0Fyci5sZW5ndGggPT09IHBsYXllclN1bmtDb3VudGVyKSB7XG4gICAgICBfX2NoZWNrV2lubmVyKGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHNoaXBzQXJyUGMubGVuZ3RoID09PSBwY1N1bmtDb3VudGVyKSB7XG4gICAgICBfX2NoZWNrV2lubmVyKHRydWUpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX19jaGVja1dpbm5lciA9IChmbGFnKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGNvbnRyb2xHcmlkLmNoZWNrV2lubmVyKGZsYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250cm9sR3JpZC5jaGVja1dpbm5lcihmbGFnKTtcbiAgICB9XG4gICAgZ2FtZU9uID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBfX3Jlc2V0KCk7XG4gICAgfSwgMjAwMCk7XG4gIH07XG4gIGNvbnN0IF9fcmVzZXQgPSAoKSA9PiB7XG4gICAgY29udHJvbEdyaWQucmVzZXQoKTtcbiAgICB0dXJuID0gMDtcbiAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKHR1cm4pO1xuICAgIHJlbmRlclBjU2hpcCgpO1xuICAgIC8vIF9fdGVzdGluZ1NoaXAoKTtcbiAgICBnYW1lT24gPSB0cnVlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZ2V0VHVybixcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIHJlbmRlclBjU2hpcCxcbiAgICBkcmFnQW5kRHJvcCxcbiAgICBwY0JvYXJkLFxuICAgIGxvYWRQbGF5ZXJTaGlwLFxuICAgIHBsYXllckJvYXJkLFxuICAgIHNob3dMZWdhbFBjR3JpZCxcbiAgfTtcbn07XG5leHBvcnRzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiIsImNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEhpdHMgPSBbXTtcbiAgY29uc3QgcGNBdHRhY2sgPSAoKSA9PiB7XG4gICAgbGV0IGxlZ2FsUnVsZTtcbiAgICBsZXQgaGl0UnVsZTtcbiAgICBsZXQgcmFuZG9tTnVtYmVyc1g7XG4gICAgbGV0IHJhbmRvbU51bWJlcnNZO1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgcmFuZG9tTnVtYmVyc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByYW5kb21OdW1iZXJzWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJhbmRvbU51bWJlcnNYID09IHNoaXBIaXRzW2ldWzFdICYmXG4gICAgICAgICAgcmFuZG9tTnVtYmVyc1kgPT0gc2hpcEhpdHNbaV1bMF1cbiAgICAgICAgKSB7XG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHdoaWxlIChmbGFnKTtcbiAgICBzaGlwSGl0cy5wdXNoKFtyYW5kb21OdW1iZXJzWSwgcmFuZG9tTnVtYmVyc1hdKTtcbiAgICByZXR1cm4gW3JhbmRvbU51bWJlcnNZLCByYW5kb21OdW1iZXJzWF07XG4gIH07XG4gIHJldHVybiB7IHBjQXR0YWNrLCBzaGlwSGl0cyB9O1xufTtcbmV4cG9ydHMucGxheWVyID0gcGxheWVyO1xuIiwiY29uc3QgeyBnYW1lQm9hcmQgfSA9IHJlcXVpcmUoXCIuL0dhbWVib2FyZFwiKTtcbmNvbnN0IGNvbnRyb2xHcmlkID0gKCgpID0+IHtcbiAgY29uc3Qgc2hpcFNpemUgPSBbNSwgNCwgMywgMywgMl07XG4gIGNvbnN0IGZpbHRlcmVkQXJyID0gW107XG4gIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmJhdHRsZS1ncmlkOm50aC1jaGlsZCgxKVwiXG4gICk7XG4gIGNvbnN0IHBjR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuYmF0dGxlLWdyaWQ6bnRoLWNoaWxkKDIpXCJcbiAgKTtcbiAgY29uc3Qgcm90YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0aW9uXCIpO1xuICBsZXQgcm90YXRpb25TdGF0dXMgPSAwO1xuICByb3RhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJvdGF0aW9uU3RhdHVzKys7XG4gIH0pO1xuICBsZXQgcGNFbGVtZW50cztcbiAgbGV0IHBsYXllckVsZW1lbnRzO1xuXG4gIGxldCBkb3VibGVQY0VsZW1lbnRzID0gW107XG4gIGxldCBkb3VibGVQbGF5ZXJFbGVtZW50cyA9IFtdO1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGFpbmVyXCIpO1xuICBjb25zdCBwbGF5ZXJOYW1lRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wicGxheWVyTmFtZVwiXTtcbiAgcGxheWVyTmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzd2l0Y2hOYW1lKDApO1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRhaW5lci1oaWRkZW5cIik7XG4gIH0pO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVRleHRcIik7XG4gIGNvbnN0IGN1cnJlbnRQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnRQbGF5ZXJcIik7XG5cbiAgY29uc3QgaW5pdCA9IChwY0JvYXJkLCBwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgcGNCb2FyZC5wdXNoKFtdKTtcbiAgICAgIHBsYXllckJvYXJkLnB1c2goW10pO1xuXG4gICAgICBkb3VibGVQY0VsZW1lbnRzLnB1c2goW10pO1xuICAgICAgZG91YmxlUGxheWVyRWxlbWVudHMucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgcGNHcmlkLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIsIGkpO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIsIGopO1xuICAgICAgICAgIGUuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgIHBjQm9hcmRbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICBkb3VibGVQY0VsZW1lbnRzW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwbGF5ZXJHcmlkLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIsIGopO1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIsIGkpO1xuICAgICAgICAgIGUuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgIHBsYXllckJvYXJkW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgZG91YmxlUGxheWVyRWxlbWVudHNbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHBjRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuYmF0dGxlLWdyaWQ6bnRoLWNoaWxkKDIpIC5lbGVtZW50XCJcbiAgICApO1xuICAgIHBsYXllckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmJhdHRsZS1ncmlkOm50aC1jaGlsZCgxKSAuZWxlbWVudFwiXG4gICAgKTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyUGNTaGlwID0gKFxuICAgIHBjQm9hcmQsXG4gICAgbGVuZ3RoLFxuICAgIHBvc2l0aW9uWCxcbiAgICBwb3NpdGlvblksXG4gICAgZmxhZyA9IHRydWVcbiAgKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGNCb2FyZFtwb3NpdGlvblldW3Bvc2l0aW9uWCArIGldLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgXCJhY3RpdmVQbGF5ZXJcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBjQm9hcmRbcG9zaXRpb25ZICsgaV1bcG9zaXRpb25YXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIFwiYWN0aXZlUGxheWVyXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2hvd0lmTGVnYWwgPSAoZSwgZmxhZykgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcInBjVHVyblwiKTtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFpbVwiKTtcbiAgICB9KTtcbiAgICBpZiAoZmxhZyA9PSBmYWxzZSkge1xuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwicGNUdXJuXCIpO1xuICAgIH1cbiAgICBsZXQgY3VycmVudENsYXNzTmFtZSA9IGUuY2xhc3NOYW1lO1xuXG4gICAgaWYgKGN1cnJlbnRDbGFzc05hbWUgIT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllclwiKSB7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWltXCIpO1xuXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJsZWdhbFwiKTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgY3VycmVudENsYXNzTmFtZSA9PSBcImVsZW1lbnQgbWlzc1wiIHx8XG4gICAgICBjdXJyZW50Q2xhc3NOYW1lID09IFwiZWxlbWVudCBhY3RpdmVQbGF5ZXIgaGl0XCJcbiAgICApIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWxcIik7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhaW1cIik7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJwY1R1cm5cIik7XG4gICAgfVxuICAgIGlmIChjdXJyZW50Q2xhc3NOYW1lID09IFwiZWxlbWVudCBhY3RpdmVQbGF5ZXJcIikge1xuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYWltXCIpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwicGNUdXJuXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbWFya0hpdCA9IChhLCBoaXRGbGFnKSA9PiB7XG4gICAgaWYgKGhpdEZsYWcpIHtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImFpbVwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImlsbGVnYWxcIik7XG5cbiAgICAgIGEuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWltXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuXG4gICAgICBhLmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgIH1cbiAgfTtcbiAgLy8gaW1wbGVtZW50IGRyYWcgYW5kIGRyb3AgYW5kIHB1c2ggdG8gdG8gc2hpcHNBcnJcbiAgY29uc3QgZHJhZ0FuZERyb3AgPSAoZSwgZmxhZyA9IHRydWUpID0+IHtcbiAgICBsZXQgdmFsdWU7XG4gICAgbGV0IG5leHRTaWJsaW5nO1xuICAgIGxldCBsYXN0VGFyZ2V0O1xuICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gZTtcbiAgICBsZXQgbGVuZ3RoID0gc2hpcFNpemVbMF07XG5cbiAgICBsZXQgeDtcbiAgICBsZXQgeTtcbiAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHJvdGF0aW9uU3RhdHVzICUgMiA9PSAwKSB7XG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgZmlsdGVyZWRBcnIubGVuZ3RoID0gMDtcbiAgICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZEFyci5wdXNoKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBjdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IG5leHRTaWJsaW5nO1xuICAgICAgICAgICAgbGFzdFRhcmdldCA9IGN1cnJlbnRUYXJnZXQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gZmlsdGVyZWRBcnIuZXZlcnkoKGEpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgYS5jbGFzc05hbWUgPT0gXCJlbGVtZW50XCIgJiZcbiAgICAgICAgICAgICAgbGFzdFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIikgPCAxMCAmJlxuICAgICAgICAgICAgICBsYXN0VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSA+XG4gICAgICAgICAgICAgICAgZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQXJyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibGVnYWxcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyZWRBcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiaWxsZWdhbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyZWRBcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgIHggPSBwYXJzZUludChlLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSk7XG4gICAgICAgICAgeSA9IHBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIpKTtcbiAgICAgICAgICBmaWx0ZXJlZEFyci5sZW5ndGggPSAwO1xuICAgICAgICAgIGZpbHRlcmVkQXJyLnB1c2goY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgbmV4dFNpYmxpbmcgPSBkb3VibGVQbGF5ZXJFbGVtZW50c1t5ICsgMV1beF07XG4gICAgICAgICAgZmlsdGVyZWRBcnIucHVzaChuZXh0U2libGluZyk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgICBpZiAoaSArIHkgPCAxMCkge1xuICAgICAgICAgICAgICBuZXh0U2libGluZyA9IGRvdWJsZVBsYXllckVsZW1lbnRzW3kgKyBpXVt4XTtcbiAgICAgICAgICAgICAgY3VycmVudFRhcmdldCA9IG5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICBmaWx0ZXJlZEFyci5wdXNoKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiaWxsZWdhbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBmaWx0ZXJlZEFyci5ldmVyeSgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhLmNsYXNzTmFtZSA9PSBcImVsZW1lbnRcIiB8fFxuICAgICAgICAgICAgICAoYS5jbGFzc05hbWUgPT0gXCJlbGVtZW50IGxlZ2FsXCIgJiZcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSA8PSAxMClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQXJyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibGVnYWxcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyZWRBcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiaWxsZWdhbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsdGVyZWRBcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBsb2FkU2hpcCA9IChhKSA9PiB7XG4gICAgbGV0IGxlbmd0aCA9IHNoaXBTaXplWzBdO1xuICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gYTtcbiAgICBsZXQgbmV4dFNpYmxpbmc7XG4gICAgbGV0IGxlZ2FsID0gZHJhZ0FuZERyb3AoYSk7XG5cbiAgICBsZXQgeCA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpKTtcbiAgICBsZXQgeSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIpKTtcblxuICAgIGlmIChyb3RhdGlvblN0YXR1cyAlIDIgPT0gMCAmJiBsZWdhbCAhPT0gZmFsc2UpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUGxheWVyXCIpO1xuICAgICAgICBuZXh0U2libGluZyA9IGN1cnJlbnRUYXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQgPSBuZXh0U2libGluZztcbiAgICAgIH1cbiAgICAgIHNoaXBTaXplLnNoaWZ0KCk7XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIpLFxuICAgICAgICBhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSxcbiAgICAgIF07XG4gICAgfVxuICAgIGlmIChyb3RhdGlvblN0YXR1cyAlIDIgIT09IDAgJiYgbGVnYWwgIT09IGZhbHNlKSB7XG4gICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5leHRTaWJsaW5nID0gZG91YmxlUGxheWVyRWxlbWVudHNbeSArIGldW3hdO1xuICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbmV4dFNpYmxpbmc7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVBsYXllclwiKTtcbiAgICAgIH1cbiAgICAgIHNoaXBTaXplLnNoaWZ0KCk7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSxcbiAgICAgICAgYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIiksXG4gICAgICAgIHRydWUsXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAoIWxlZ2FsID09IGZhbHNlKSB7XG4gICAgICBhbGVydChcImNhbid0IHBsYWNlIHNoaXAgaGVyZVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN3aXRjaE5hbWUgPSAodHVybikgPT4ge1xuICAgIGlmICh0dXJuICUgMiA9PSAwKSB7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVyVGV4dCA9IFwiUENcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZpcmluZyA9IChmbGFnKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJUZXh0ID0gYCR7aW5wdXQudmFsdWV9IGlzIGZpcmluZ2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJUZXh0ID0gYFBDIGlzIGZpcmluZ2A7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja1dpbm5lciA9IChmbGFnKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJUZXh0ID0gYCR7aW5wdXQudmFsdWV9IEhBUyBXT04gISEhISEgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllci5pbm5lclRleHQgPSBgUEMgaGFzIHdvbmA7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBwY0VsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiLCBcIm1pc3NcIiwgXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgfSk7XG4gICAgcGxheWVyRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIsIFwibGVnYWxcIiwgXCJtaXNzXCIsIFwiYWN0aXZlUGxheWVyXCIpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgcmVzZXQsXG4gICAgcm90YXRpb24sXG4gICAgcmVuZGVyUGNTaGlwLFxuICAgIHNob3dJZkxlZ2FsLFxuICAgIG1hcmtIaXQsXG4gICAgY2hlY2tXaW5uZXIsXG4gICAgbG9hZFNoaXAsXG4gICAgZHJhZ0FuZERyb3AsXG4gICAgc3dpdGNoTmFtZSxcbiAgfTtcbn0pKCk7XG5leHBvcnRzLmNvbnRyb2xHcmlkID0gY29udHJvbEdyaWQ7XG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCwgc3RhcnRYLCBzdGFydFksIHZlcnRpY2FsID0gZmFsc2UpID0+IHtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGdldFZlcnRpY2FsID0gKCkgPT4gdmVydGljYWw7XG5cbiAgY29uc3QgaGl0ID0gKG51bWJlcikgPT4ge1xuICAgIGhpdHMucHVzaChudW1iZXIpO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMubGVuZ3RoID09PSBnZXRMZW5ndGgoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNIaXQgPSAoeSwgeCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGZhbHNlO1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZVswXSA9PSB5ICYmIGVbMV0gPT0geCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBfX3NldENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGlmICh2ZXJ0aWNhbCA9PSBmYWxzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbc3RhcnRZLCBzdGFydFggKyBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3N0YXJ0WSArIGksIHN0YXJ0WF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX19zZXRDb29yZGluYXRlcygpO1xuICByZXR1cm4geyBoaXQsIGlzU3VuaywgaGl0cywgc2hpcENvb3JkaW5hdGVzLCBpc0hpdCB9O1xufTtcbmV4cG9ydHMuc2hpcCA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCBcIi4vZG9tXCI7XG5pbXBvcnQgXCIuL1BsYXllclwiO1xuXG5jb25zdCB7IGdhbWVCb2FyZCB9ID0gcmVxdWlyZShcIi4vR2FtZWJvYXJkXCIpO1xuY29uc3QgeyBwbGF5ZXIgfSA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IHsgY29udHJvbEdyaWQgfSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcEZhY3RvcnlcIik7XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gcGxheWVyKCk7XG5jb25zdCBwY1BsYXllciA9IHBsYXllcigpO1xuXG5jb25zdCBib2FyZCA9IGdhbWVCb2FyZChwY1BsYXllciwgaHVtYW5QbGF5ZXIpO1xuY29uc3QgcGNCb2FyZCA9IGJvYXJkLnBjQm9hcmQ7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJvYXJkLnBsYXllckJvYXJkO1xuLy8gcmVtb3ZlIGNsaWNrIGZ1bmN0aW9uIGZyb20gaW5zaWRlIGRvbSB0byBoZXJlXG5ib2FyZC5pbml0KHBjQm9hcmQsIHBsYXllckJvYXJkKTtcbnNldFRpbWVvdXQoKCkgPT4ge1xuICBib2FyZC5yZW5kZXJQY1NoaXAoKTtcbn0sIDUwMCk7XG5wbGF5ZXJCb2FyZC5mb3JFYWNoKChlKSA9PiB7XG4gIGUuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBib2FyZC5kcmFnQW5kRHJvcChhKTtcbiAgICB9KTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBib2FyZC5kcmFnQW5kRHJvcChhLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYm9hcmQubG9hZFBsYXllclNoaXAoYSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5wY0JvYXJkLmZvckVhY2goKGUpID0+IHtcbiAgZS5mb3JFYWNoKChhKSA9PiB7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIGlmIChib2FyZC5nZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgICAgYm9hcmQuc2hvd0xlZ2FsUGNHcmlkKGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQuc2hvd0xlZ2FsUGNHcmlkKGEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgaGl0XCIgJiZcbiAgICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBtaXNzXCIgJiZcbiAgICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBpbGxlZ2FsXCIgJiZcbiAgICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBtaXNzIGlsbGVnYWxcIiAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllciBoaXRcIiAmJlxuICAgICAgICBib2FyZC5nZXRUdXJuKCkgJSAyID09IDBcbiAgICAgICkge1xuICAgICAgICBib2FyZC5yZWNpZXZlQXR0YWNrKFxuICAgICAgICAgIHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpKSxcbiAgICAgICAgICBwYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9