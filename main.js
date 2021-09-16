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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 500;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsl(221, 51%, 31%);\n  font-family: \"MyFont\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-size: 8rem;\n  font-weight: 500;\n  color: rgb(10, 36, 59);\n  font-family: \"MyFont\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 65rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 30rem;\n  height: 30rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n  cursor: pointer;\n}\n.illegal {\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(130, 128, 251);\n  cursor: pointer;\n}\n.hit {\n  background: rgb(139, 30, 20);\n  cursor: not-allowed;\n}\n.miss {\n  background: rgb(243, 111, 3);\n  cursor: not-allowed;\n}\n.element .activePlayer .illegal {\n  cursor: not-allowed;\n}\n.element .activePlayer .legal {\n  background: rgb(140, 248, 146);\n}\n.hidden {\n  background-color: hsl(221, 51%, 31%);\n}\n.sunk {\n  background-color: hsl(0, 0%, 58%);\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"MyFont\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: hidden;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.currentPlayer {\n  width: 25rem;\n  font-size: 3rem;\n  color: hsl(228, 49%, 18%);\n  margin: 1rem;\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1.2rem 1.8rem;\n  color: white;\n  font-size: 1.2rem;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  background-color: hsla(228, 59%, 19%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,2CAA2C;EAC3C,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,YAAY;EACZ,eAAe;EACf,yBAAyB;EACzB,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,4CAA4C;AAC9C;AACA;EACE,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./Roboto-Medium.ttf\") format(\"ttf\");\n  font-weight: 500;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsl(221, 51%, 31%);\n  font-family: \"MyFont\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-size: 8rem;\n  font-weight: 500;\n  color: rgb(10, 36, 59);\n  font-family: \"MyFont\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 65rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 30rem;\n  height: 30rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n  cursor: pointer;\n}\n.illegal {\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(130, 128, 251);\n  cursor: pointer;\n}\n.hit {\n  background: rgb(139, 30, 20);\n  cursor: not-allowed;\n}\n.miss {\n  background: rgb(243, 111, 3);\n  cursor: not-allowed;\n}\n.element .activePlayer .illegal {\n  cursor: not-allowed;\n}\n.element .activePlayer .legal {\n  background: rgb(140, 248, 146);\n}\n.hidden {\n  background-color: hsl(221, 51%, 31%);\n}\n.sunk {\n  background-color: hsl(0, 0%, 58%);\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"MyFont\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: hidden;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.currentPlayer {\n  width: 25rem;\n  font-size: 3rem;\n  color: hsl(228, 49%, 18%);\n  margin: 1rem;\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1.2rem 1.8rem;\n  color: white;\n  font-size: 1.2rem;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  background-color: hsla(228, 59%, 19%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n"],"sourceRoot":""}]);
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

  let shipSize = [5, 4, 3, 3, 2];
  let newShip;

  const missedPlayerHits = [];
  const missedPcHits = [];

  let turn = 0;
  let gameOn = true;
  const getTurn = () => turn;
  const setTurn = () => turn++;
  const getShipSizeLength = () => shipSize.length;
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
    let legalRule = (a) =>
      a.className !== "element activePlayer" &&
      a.className !== "element activePlayer hidden";
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
          controlGrid.controlPcShipView(
            true,
            e.shipCoordinates,
            pcBoard
          );
        }
      });
    } else {
      shipsArr.forEach((e) => {
        if (e.isSunk() == true) {
          playerSunkCounter++;
          controlGrid.controlPcShipView(
            true,
            e.shipCoordinates,
            playerBoard
          );
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
    shipSize = [5, 4, 3, 3, 2];
    shipsArr.length = 0;
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
    getShipSizeLength,
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
  let shipSize = [5, 4, 3, 3, 2];
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
    controlPcShipView(false, undefined, pcBoard);
  };
  const controlPcShipView = (
    flag,
    shipCoordinates = undefined,
    board
  ) => {
    board.forEach((e) => {
      e.forEach((a) => {
        if (a.className == "element activePlayer") {
          a.classList.add("hidden");
        }
        if (flag) {
          shipCoordinates.forEach((e) => {
            board.forEach((a) => {
              a.forEach((s) => {
                if (
                  parseInt(s.getAttribute("data-index-v")) == e[0] &&
                  parseInt(s.getAttribute("data-index-h")) == e[1]
                ) {
                  s.classList.add("sunk");
                }
              });
            });
          });
        }
      });
    });
  };
  const showIfLegal = (e, flag) => {
    e.addEventListener("mouseout", () => {
      e.classList.remove("legal");
      e.classList.remove("illegal");
    });
    let currentClassName = e.className;
    if (flag) {
      if (
        currentClassName == "element miss" ||
        currentClassName == "element activePlayer hit"
      ) {
        e.classList.add("illegal");
      }
    } else {
      e.classList.add("illegal");
    }
  };
  const markHit = (a, hitFlag) => {
    if (hitFlag) {
      a.classList.remove("aim");
      a.classList.remove("legal");
      a.classList.remove("miss");
      a.classList.remove("illegal");
      a.classList.remove("pcTurn");
      a.classList.add("hit");
      a.classList.remove("hidden");
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
    if (!legal == true) {
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
    shipSize = [5, 4, 3, 3, 2];
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
    controlPcShipView,
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
        board.showLegalPcGrid(a, true);
      } else {
        board.showLegalPcGrid(a, false);
      }
    });
    a.addEventListener("click", () => {
      length = board.getShipSizeLength();
      if (
        length == 0 &&
        a.className !== "element hit" &&
        a.className !== "element miss" &&
        a.className !== "element illegal" &&
        a.className !== "element activePlayer hit illegal" &&
        a.className !== "element miss illegal" &&
        a.className !== "element activePlayer hit" &&
        a.className !== "element activePlayer hit legal" &&
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDeFBqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGNBQWM7Ozs7Ozs7Ozs7O0FDMUJkLFFBQVEsWUFBWSxFQUFFLG1CQUFPLENBQUMsdUNBQWE7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixZQUFZO0FBQ1o7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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Y2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHRmXFxcIik7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGhzbCgyMjEsIDUxJSwgMzElKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiKDEwLCAzNiwgNTkpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiA2NXJlbTtcXG59XFxuLmJhdHRsZS1ncmlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDMwcmVtO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYmF0dGxlLWdyaWQtb2ZmIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5lbGVtZW50IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ubGVnYWwge1xcbiAgYmFja2dyb3VuZDogcmdiKDE0MCwgMjQ4LCAxNDYpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaWxsZWdhbCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYWN0aXZlUGxheWVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzAsIDEyOCwgMjUxKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTM5LCAzMCwgMjApO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiKDI0MywgMTExLCAzKTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5lbGVtZW50IC5hY3RpdmVQbGF5ZXIgLmlsbGVnYWwge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQgLmFjdGl2ZVBsYXllciAubGVnYWwge1xcbiAgYmFja2dyb3VuZDogcmdiKDE0MCwgMjQ4LCAxNDYpO1xcbn1cXG4uaGlkZGVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjEsIDUxJSwgMzElKTtcXG59XFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1OCUpO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYig1NywgOTAsIDExOSk7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5tb2RhbC1jb250YWluZXItaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxOTcsIDI1MCwgMC45NDUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmN1cnJlbnRQbGF5ZXIge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IGhzbCgyMjgsIDQ5JSwgMTglKTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMS44cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI4LCA1OSUsIDE5JSwgMC45NTkpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgcGFkZGluZzogMS4ycmVtIDIuMnJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwwREFBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL1JvYm90by1NZWRpdW0udHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogaHNsKDIyMSwgNTElLCAzMSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2IoMTAsIDM2LCA1OSk7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDY1cmVtO1xcbn1cXG4uYmF0dGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5iYXR0bGUtZ3JpZC1vZmYge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbGxlZ2FsIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hY3RpdmVQbGF5ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMCwgMTI4LCAyNTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzksIDMwLCAyMCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAxMTEsIDMpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQgLmFjdGl2ZVBsYXllciAuaWxsZWdhbCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZWxlbWVudCAuYWN0aXZlUGxheWVyIC5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxufVxcbi5oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMSwgNTElLCAzMSUpO1xcbn1cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU4JSk7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDU3LCA5MCwgMTE5KTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLm1vZGFsLWNvbnRhaW5lci1oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDE5NywgMjUwLCAwLjk0NSk7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uY3VycmVudFBsYXllciB7XFxuICB3aWR0aDogMjVyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogaHNsKDIyOCwgNDklLCAxOCUpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjZyZW0gMC40cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEuMnJlbSAxLjhyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjgsIDU5JSwgMTklLCAwLjk1OSk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMi4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgeyBzaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwRmFjdG9yeVwiKTtcbmNvbnN0IHsgY29udHJvbEdyaWQgfSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcblxuY29uc3QgZ2FtZUJvYXJkID0gKHBsYXllciwgcGMpID0+IHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBbXTtcbiAgY29uc3QgcGNCb2FyZCA9IFtdO1xuXG4gIGNvbnN0IHNoaXBzQXJyID0gW107XG4gIGNvbnN0IHNoaXBzQXJyUGMgPSBbXTtcblxuICBsZXQgc2hpcFNpemUgPSBbNSwgNCwgMywgMywgMl07XG4gIGxldCBuZXdTaGlwO1xuXG4gIGNvbnN0IG1pc3NlZFBsYXllckhpdHMgPSBbXTtcbiAgY29uc3QgbWlzc2VkUGNIaXRzID0gW107XG5cbiAgbGV0IHR1cm4gPSAwO1xuICBsZXQgZ2FtZU9uID0gdHJ1ZTtcbiAgY29uc3QgZ2V0VHVybiA9ICgpID0+IHR1cm47XG4gIGNvbnN0IHNldFR1cm4gPSAoKSA9PiB0dXJuKys7XG4gIGNvbnN0IGdldFNoaXBTaXplTGVuZ3RoID0gKCkgPT4gc2hpcFNpemUubGVuZ3RoO1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnRyb2xHcmlkLmluaXQocGNCb2FyZCwgcGxheWVyQm9hcmQpO1xuICB9O1xuICBjb25zdCBfX2NoZWNrQWN0aXZlID0gKFxuICAgIHJhbmRvbU51bWJlclksXG4gICAgcmFuZG9tTnVtYmVyWCxcbiAgICBsZW5ndGgsXG4gICAgb3JpZW50YXRpb25cbiAgKSA9PiB7XG4gICAgbGV0IGxlZ2FsVmFsdWU7XG4gICAgbGV0IGxlZ2FsUnVsZSA9IChhKSA9PlxuICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBhY3RpdmVQbGF5ZXJcIiAmJlxuICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBhY3RpdmVQbGF5ZXIgaGlkZGVuXCI7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgcmV0dXJuIChsZWdhbFZhbHVlID0gcGNCb2FyZFtyYW5kb21OdW1iZXJZXS5ldmVyeSgoYSkgPT5cbiAgICAgICAgbGVnYWxSdWxlKGEpXG4gICAgICApKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVyZWRBcnIgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsdGVyZWRBcnIucHVzaChwY0JvYXJkW3JhbmRvbU51bWJlclkgKyBpXVtyYW5kb21OdW1iZXJYXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKGxlZ2FsVmFsdWUgPSBmaWx0ZXJlZEFyci5ldmVyeSgoYSkgPT4gbGVnYWxSdWxlKGEpKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCByZW5kZXJQY1NoaXAgPSAoKSA9PiB7XG4gICAgbGV0IHJhbmRvbU51bWJlclg7XG4gICAgbGV0IHJhbmRvbU51bWJlclk7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgIGxldCBvcmllbnRhdGlvblZhbHVlO1xuICAgIGxldCBsZWdhbE1vdmUgPSB0cnVlO1xuICAgIHNoaXBTaXplLmZvckVhY2goKGUpID0+IHtcbiAgICAgIG9yaWVudGF0aW9uVmFsdWUgPVxuICAgICAgICBvcmllbnRhdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSAlIDJdO1xuICAgICAgaWYgKG9yaWVudGF0aW9uVmFsdWUgPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHJhbmRvbU51bWJlclggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgcmFuZG9tTnVtYmVyWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICAgIGlmIChyYW5kb21OdW1iZXJYICsgZSA8PSA5KSB7XG4gICAgICAgICAgICBsZWdhbE1vdmUgPSBfX2NoZWNrQWN0aXZlKFxuICAgICAgICAgICAgICByYW5kb21OdW1iZXJZLFxuICAgICAgICAgICAgICByYW5kb21OdW1iZXJYLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICBvcmllbnRhdGlvblZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocmFuZG9tTnVtYmVyWCArIGUgPj0gOSB8fCAhbGVnYWxNb3ZlKTtcblxuICAgICAgICBuZXdTaGlwID0gc2hpcChlLCByYW5kb21OdW1iZXJYLCByYW5kb21OdW1iZXJZLCBmYWxzZSk7XG4gICAgICAgIHNoaXBzQXJyUGMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgY29udHJvbEdyaWQucmVuZGVyUGNTaGlwKFxuICAgICAgICAgIHBjQm9hcmQsXG4gICAgICAgICAgZSxcbiAgICAgICAgICByYW5kb21OdW1iZXJYLFxuICAgICAgICAgIHJhbmRvbU51bWJlcllcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICByYW5kb21OdW1iZXJYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHJhbmRvbU51bWJlclkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgaWYgKHJhbmRvbU51bWJlclkgKyBlIDw9IDkpIHtcbiAgICAgICAgICAgIGxlZ2FsTW92ZSA9IF9fY2hlY2tBY3RpdmUoXG4gICAgICAgICAgICAgIHJhbmRvbU51bWJlclksXG4gICAgICAgICAgICAgIHJhbmRvbU51bWJlclgsXG4gICAgICAgICAgICAgIGUsXG4gICAgICAgICAgICAgIG9yaWVudGF0aW9uVmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChyYW5kb21OdW1iZXJZICsgZSA+PSA5IHx8ICFsZWdhbE1vdmUpO1xuICAgICAgICBuZXdTaGlwID0gc2hpcChlLCByYW5kb21OdW1iZXJYLCByYW5kb21OdW1iZXJZLCB0cnVlKTtcbiAgICAgICAgc2hpcHNBcnJQYy5wdXNoKG5ld1NoaXApO1xuICAgICAgICBjb250cm9sR3JpZC5yZW5kZXJQY1NoaXAoXG4gICAgICAgICAgcGNCb2FyZCxcbiAgICAgICAgICBlLFxuICAgICAgICAgIHJhbmRvbU51bWJlclgsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyWSxcbiAgICAgICAgICBmYWxzZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBjb25zdCBzaG93TGVnYWxQY0dyaWQgPSAoZSwgZmxhZykgPT4ge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBjb250cm9sR3JpZC5zaG93SWZMZWdhbChlLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbEdyaWQuc2hvd0lmTGVnYWwoZSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZHJhZ0FuZERyb3AgPSAoZSwgZmxhZykgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBjb250cm9sR3JpZC5kcmFnQW5kRHJvcChlLCBmbGFnKTtcbiAgfTtcbiAgY29uc3QgbG9hZFBsYXllclNoaXAgPSAoYSkgPT4ge1xuICAgIGxldCB2YWx1ZXM7XG4gICAgaWYgKHNoaXBTaXplLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhbHVlcyA9IGNvbnRyb2xHcmlkLmxvYWRTaGlwKGEpO1xuICAgICAgaWYgKHZhbHVlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgbmV3U2hpcCA9IHNoaXAoXG4gICAgICAgICAgcGFyc2VJbnQoc2hpcFNpemVbMF0pLFxuICAgICAgICAgIHBhcnNlSW50KHZhbHVlc1sxXSksXG4gICAgICAgICAgcGFyc2VJbnQodmFsdWVzWzBdKVxuICAgICAgICApO1xuICAgICAgICBzaGlwc0Fyci5wdXNoKG5ld1NoaXApO1xuICAgICAgICBzaGlwU2l6ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9ICh4LCB5LCBhKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZmFsc2U7XG4gICAgaWYgKGdhbWVPbikge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgPT09IDApIHtcbiAgICAgICAgc2hpcHNBcnJQYy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuaXNIaXQoeSwgeCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZS5oaXQoMSk7XG4gICAgICAgICAgICBjb250cm9sR3JpZC5tYXJrSGl0KGEsIHRydWUpO1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgYWxsU2hpcHNTdW5rKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIGNvbnRyb2xHcmlkLm1hcmtIaXQoYSwgZmFsc2UpO1xuICAgICAgICAgIG1pc3NlZFBsYXllckhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFR1cm4oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGdhbWVPbikge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgIT09IDApIHtcbiAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBjQXR0YWNrID0gcGMucGNBdHRhY2soKTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIHNoaXBzQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5pc0hpdChwY0F0dGFja1swXSwgcGNBdHRhY2tbMV0pID09IHRydWUpIHtcbiAgICAgICAgICAgIGUuaGl0KDEpO1xuICAgICAgICAgICAgZWxlbWVudCA9IHBsYXllckJvYXJkW3BjQXR0YWNrWzBdXVtwY0F0dGFja1sxXV07XG4gICAgICAgICAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKGdldFR1cm4oKSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29udHJvbEdyaWQubWFya0hpdChlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgYWxsU2hpcHNTdW5rKGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0VHVybigpO1xuICAgICAgICAgICAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKGdldFR1cm4oKSk7XG4gICAgICAgICAgICB9LCAyMCk7XG4gICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZhbHVlID09IGZhbHNlKSB7XG4gICAgICAgICAgZWxlbWVudCA9IHBsYXllckJvYXJkW3BjQXR0YWNrWzBdXVtwY0F0dGFja1sxXV07XG4gICAgICAgICAgY29udHJvbEdyaWQuc3dpdGNoTmFtZShnZXRUdXJuKCkpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbEdyaWQubWFya0hpdChlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBzZXRUdXJuKCk7XG4gICAgICAgICAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKGdldFR1cm4oKSk7XG4gICAgICAgICAgfSwgMjApO1xuICAgICAgICAgIG1pc3NlZFBjSGl0cy5wdXNoKFtwY0F0dGFja1swXSwgcGNBdHRhY2tbMV1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9IChmbGFnKSA9PiB7XG4gICAgbGV0IHBjU3Vua0NvdW50ZXIgPSAwO1xuICAgIGxldCBwbGF5ZXJTdW5rQ291bnRlciA9IDA7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHNoaXBzQXJyUGMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pc1N1bmsoKSA9PSB0cnVlKSB7XG4gICAgICAgICAgcGNTdW5rQ291bnRlcisrO1xuICAgICAgICAgIGNvbnRyb2xHcmlkLmNvbnRyb2xQY1NoaXBWaWV3KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIGUuc2hpcENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgcGNCb2FyZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwc0Fyci5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmlzU3VuaygpID09IHRydWUpIHtcbiAgICAgICAgICBwbGF5ZXJTdW5rQ291bnRlcisrO1xuICAgICAgICAgIGNvbnRyb2xHcmlkLmNvbnRyb2xQY1NoaXBWaWV3KFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIGUuc2hpcENvb3JkaW5hdGVzLFxuICAgICAgICAgICAgcGxheWVyQm9hcmRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHNoaXBzQXJyLmxlbmd0aCA9PT0gcGxheWVyU3Vua0NvdW50ZXIpIHtcbiAgICAgIF9fY2hlY2tXaW5uZXIoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAoc2hpcHNBcnJQYy5sZW5ndGggPT09IHBjU3Vua0NvdW50ZXIpIHtcbiAgICAgIF9fY2hlY2tXaW5uZXIodHJ1ZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBfX2NoZWNrV2lubmVyID0gKGZsYWcpID0+IHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgY29udHJvbEdyaWQuY2hlY2tXaW5uZXIoZmxhZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xHcmlkLmNoZWNrV2lubmVyKGZsYWcpO1xuICAgIH1cbiAgICBnYW1lT24gPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIF9fcmVzZXQoKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcbiAgY29uc3QgX19yZXNldCA9ICgpID0+IHtcbiAgICBjb250cm9sR3JpZC5yZXNldCgpO1xuICAgIHR1cm4gPSAwO1xuICAgIHNoaXBTaXplID0gWzUsIDQsIDMsIDMsIDJdO1xuICAgIHNoaXBzQXJyLmxlbmd0aCA9IDA7XG4gICAgY29udHJvbEdyaWQuc3dpdGNoTmFtZSh0dXJuKTtcbiAgICByZW5kZXJQY1NoaXAoKTtcbiAgICAvLyBfX3Rlc3RpbmdTaGlwKCk7XG4gICAgZ2FtZU9uID0gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGdldFR1cm4sXG4gICAgcmVjaWV2ZUF0dGFjayxcbiAgICByZW5kZXJQY1NoaXAsXG4gICAgZHJhZ0FuZERyb3AsXG4gICAgcGNCb2FyZCxcbiAgICBnZXRTaGlwU2l6ZUxlbmd0aCxcbiAgICBsb2FkUGxheWVyU2hpcCxcbiAgICBwbGF5ZXJCb2FyZCxcbiAgICBzaG93TGVnYWxQY0dyaWQsXG4gIH07XG59O1xuZXhwb3J0cy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4iLCJjb25zdCBwbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBIaXRzID0gW107XG4gIGNvbnN0IHBjQXR0YWNrID0gKCkgPT4ge1xuICAgIGxldCBsZWdhbFJ1bGU7XG4gICAgbGV0IGhpdFJ1bGU7XG4gICAgbGV0IHJhbmRvbU51bWJlcnNYO1xuICAgIGxldCByYW5kb21OdW1iZXJzWTtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIGRvIHtcbiAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgIHJhbmRvbU51bWJlcnNYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmFuZG9tTnVtYmVyc1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICByYW5kb21OdW1iZXJzWCA9PSBzaGlwSGl0c1tpXVsxXSAmJlxuICAgICAgICAgIHJhbmRvbU51bWJlcnNZID09IHNoaXBIaXRzW2ldWzBdXG4gICAgICAgICkge1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSB3aGlsZSAoZmxhZyk7XG4gICAgc2hpcEhpdHMucHVzaChbcmFuZG9tTnVtYmVyc1ksIHJhbmRvbU51bWJlcnNYXSk7XG4gICAgcmV0dXJuIFtyYW5kb21OdW1iZXJzWSwgcmFuZG9tTnVtYmVyc1hdO1xuICB9O1xuICByZXR1cm4geyBwY0F0dGFjaywgc2hpcEhpdHMgfTtcbn07XG5leHBvcnRzLnBsYXllciA9IHBsYXllcjtcbiIsImNvbnN0IHsgZ2FtZUJvYXJkIH0gPSByZXF1aXJlKFwiLi9HYW1lYm9hcmRcIik7XG5jb25zdCBjb250cm9sR3JpZCA9ICgoKSA9PiB7XG4gIGxldCBzaGlwU2l6ZSA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgZmlsdGVyZWRBcnIgPSBbXTtcblxuICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5iYXR0bGUtZ3JpZDpudGgtY2hpbGQoMSlcIlxuICApO1xuICBjb25zdCBwY0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLmJhdHRsZS1ncmlkOm50aC1jaGlsZCgyKVwiXG4gICk7XG5cbiAgY29uc3Qgcm90YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0aW9uXCIpO1xuXG4gIGxldCByb3RhdGlvblN0YXR1cyA9IDA7XG4gIHJvdGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcm90YXRpb25TdGF0dXMrKztcbiAgfSk7XG5cbiAgbGV0IHBjRWxlbWVudHM7XG4gIGxldCBwbGF5ZXJFbGVtZW50cztcblxuICBsZXQgZG91YmxlUGNFbGVtZW50cyA9IFtdO1xuICBsZXQgZG91YmxlUGxheWVyRWxlbWVudHMgPSBbXTtcblxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGFpbmVyXCIpO1xuICBjb25zdCBwbGF5ZXJOYW1lRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wicGxheWVyTmFtZVwiXTtcblxuICBwbGF5ZXJOYW1lRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN3aXRjaE5hbWUoMCk7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICBtb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGFpbmVyLWhpZGRlblwiKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1UZXh0XCIpO1xuICBjb25zdCBjdXJyZW50UGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50UGxheWVyXCIpO1xuXG4gIGNvbnN0IGluaXQgPSAocGNCb2FyZCwgcGxheWVyQm9hcmQpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIHBjQm9hcmQucHVzaChbXSk7XG4gICAgICBwbGF5ZXJCb2FyZC5wdXNoKFtdKTtcblxuICAgICAgZG91YmxlUGNFbGVtZW50cy5wdXNoKFtdKTtcbiAgICAgIGRvdWJsZVBsYXllckVsZW1lbnRzLnB1c2goW10pO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHBjR3JpZC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudFwiKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiLCBpKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiLCBqKTtcbiAgICAgICAgICBlLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgICBwY0JvYXJkW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgZG91YmxlUGNFbGVtZW50c1tpXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcGxheWVyR3JpZC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudFwiKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiLCBqKTtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiLCBpKTtcbiAgICAgICAgICBlLmFwcGVuZChlbGVtZW50KTtcbiAgICAgICAgICBwbGF5ZXJCb2FyZFtpXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIGRvdWJsZVBsYXllckVsZW1lbnRzW2ldLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBwY0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmJhdHRsZS1ncmlkOm50aC1jaGlsZCgyKSAuZWxlbWVudFwiXG4gICAgKTtcbiAgICBwbGF5ZXJFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5iYXR0bGUtZ3JpZDpudGgtY2hpbGQoMSkgLmVsZW1lbnRcIlxuICAgICk7XG4gIH07XG4gIGNvbnN0IHJlbmRlclBjU2hpcCA9IChcbiAgICBwY0JvYXJkLFxuICAgIGxlbmd0aCxcbiAgICBwb3NpdGlvblgsXG4gICAgcG9zaXRpb25ZLFxuICAgIGZsYWcgPSB0cnVlXG4gICkgPT4ge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBjQm9hcmRbcG9zaXRpb25ZXVtwb3NpdGlvblggKyBpXS5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIFwiYWN0aXZlUGxheWVyXCJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBwY0JvYXJkW3Bvc2l0aW9uWSArIGldW3Bvc2l0aW9uWF0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBcImFjdGl2ZVBsYXllclwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnRyb2xQY1NoaXBWaWV3KGZhbHNlLCB1bmRlZmluZWQsIHBjQm9hcmQpO1xuICB9O1xuICBjb25zdCBjb250cm9sUGNTaGlwVmlldyA9IChcbiAgICBmbGFnLFxuICAgIHNoaXBDb29yZGluYXRlcyA9IHVuZGVmaW5lZCxcbiAgICBib2FyZFxuICApID0+IHtcbiAgICBib2FyZC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgaWYgKGEuY2xhc3NOYW1lID09IFwiZWxlbWVudCBhY3RpdmVQbGF5ZXJcIikge1xuICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICBib2FyZC5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgIGEuZm9yRWFjaCgocykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHBhcnNlSW50KHMuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIpKSA9PSBlWzBdICYmXG4gICAgICAgICAgICAgICAgICBwYXJzZUludChzLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSkgPT0gZVsxXVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwic3Vua1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBzaG93SWZMZWdhbCA9IChlLCBmbGFnKSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgKCkgPT4ge1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuICAgIH0pO1xuICAgIGxldCBjdXJyZW50Q2xhc3NOYW1lID0gZS5jbGFzc05hbWU7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudENsYXNzTmFtZSA9PSBcImVsZW1lbnQgbWlzc1wiIHx8XG4gICAgICAgIGN1cnJlbnRDbGFzc05hbWUgPT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllciBoaXRcIlxuICAgICAgKSB7XG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWxcIik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWxcIik7XG4gICAgfVxuICB9O1xuICBjb25zdCBtYXJrSGl0ID0gKGEsIGhpdEZsYWcpID0+IHtcbiAgICBpZiAoaGl0RmxhZykge1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWltXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJtaXNzXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcInBjVHVyblwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiYWltXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJpbGxlZ2FsXCIpO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG4gIH07XG4gIC8vIGltcGxlbWVudCBkcmFnIGFuZCBkcm9wIGFuZCBwdXNoIHRvIHRvIHNoaXBzQXJyXG4gIGNvbnN0IGRyYWdBbmREcm9wID0gKGUsIGZsYWcgPSB0cnVlKSA9PiB7XG4gICAgbGV0IHZhbHVlO1xuICAgIGxldCBuZXh0U2libGluZztcbiAgICBsZXQgbGFzdFRhcmdldDtcbiAgICBsZXQgY3VycmVudFRhcmdldCA9IGU7XG4gICAgbGV0IGxlbmd0aCA9IHNoaXBTaXplWzBdO1xuXG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGlmIChyb3RhdGlvblN0YXR1cyAlIDIgPT0gMCkge1xuICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgIGZpbHRlcmVkQXJyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmlsdGVyZWRBcnIucHVzaChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIG5leHRTaWJsaW5nID0gY3VycmVudFRhcmdldC5uZXh0U2libGluZztcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgIGxhc3RUYXJnZXQgPSBjdXJyZW50VGFyZ2V0LnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IGZpbHRlcmVkQXJyLmV2ZXJ5KChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGEuY2xhc3NOYW1lID09IFwiZWxlbWVudFwiICYmXG4gICAgICAgICAgICAgIGxhc3RUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpIDwgMTAgJiZcbiAgICAgICAgICAgICAgbGFzdFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIikgPlxuICAgICAgICAgICAgICAgIGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZEFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImxlZ2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQXJyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWxcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlcmVkQXJyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICB4ID0gcGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIikpO1xuICAgICAgICAgIHkgPSBwYXJzZUludChlLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSk7XG4gICAgICAgICAgZmlsdGVyZWRBcnIubGVuZ3RoID0gMDtcbiAgICAgICAgICBmaWx0ZXJlZEFyci5wdXNoKGN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgIG5leHRTaWJsaW5nID0gZG91YmxlUGxheWVyRWxlbWVudHNbeSArIDFdW3hdO1xuICAgICAgICAgIGZpbHRlcmVkQXJyLnB1c2gobmV4dFNpYmxpbmcpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgICAgaWYgKGkgKyB5IDwgMTApIHtcbiAgICAgICAgICAgICAgbmV4dFNpYmxpbmcgPSBkb3VibGVQbGF5ZXJFbGVtZW50c1t5ICsgaV1beF07XG4gICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQgPSBuZXh0U2libGluZztcbiAgICAgICAgICAgICAgZmlsdGVyZWRBcnIucHVzaChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gZmlsdGVyZWRBcnIuZXZlcnkoKGEpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgYS5jbGFzc05hbWUgPT0gXCJlbGVtZW50XCIgfHxcbiAgICAgICAgICAgICAgKGEuY2xhc3NOYW1lID09IFwiZWxlbWVudCBsZWdhbFwiICYmXG4gICAgICAgICAgICAgICAgY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIikgPD0gMTApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZEFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZChcImxlZ2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQXJyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibGVnYWxcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcImlsbGVnYWxcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbHRlcmVkQXJyLmZvckVhY2goKGEpID0+IHtcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgbG9hZFNoaXAgPSAoYSkgPT4ge1xuICAgIGxldCBsZW5ndGggPSBzaGlwU2l6ZVswXTtcbiAgICBsZXQgY3VycmVudFRhcmdldCA9IGE7XG4gICAgbGV0IG5leHRTaWJsaW5nO1xuICAgIGxldCBsZWdhbCA9IGRyYWdBbmREcm9wKGEpO1xuXG4gICAgbGV0IHggPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSk7XG4gICAgbGV0IHkgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSk7XG5cbiAgICBpZiAocm90YXRpb25TdGF0dXMgJSAyID09IDAgJiYgbGVnYWwgIT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVBsYXllclwiKTtcbiAgICAgICAgbmV4dFNpYmxpbmcgPSBjdXJyZW50VGFyZ2V0Lm5leHRTaWJsaW5nO1xuICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbmV4dFNpYmxpbmc7XG4gICAgICB9XG4gICAgICBzaGlwU2l6ZS5zaGlmdCgpO1xuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSxcbiAgICAgICAgYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIiksXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAocm90YXRpb25TdGF0dXMgJSAyICE9PSAwICYmIGxlZ2FsICE9PSBmYWxzZSkge1xuICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUGxheWVyXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBuZXh0U2libGluZyA9IGRvdWJsZVBsYXllckVsZW1lbnRzW3kgKyBpXVt4XTtcbiAgICAgICAgY3VycmVudFRhcmdldCA9IG5leHRTaWJsaW5nO1xuICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgICB9XG4gICAgICBzaGlwU2l6ZS5zaGlmdCgpO1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIiksXG4gICAgICAgIGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpLFxuICAgICAgICB0cnVlLFxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKCFsZWdhbCA9PSB0cnVlKSB7XG4gICAgICBhbGVydChcImNhbid0IHBsYWNlIHNoaXAgaGVyZVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHN3aXRjaE5hbWUgPSAodHVybikgPT4ge1xuICAgIGlmICh0dXJuICUgMiA9PSAwKSB7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVyVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVyVGV4dCA9IFwiUENcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZpcmluZyA9IChmbGFnKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJUZXh0ID0gYCR7aW5wdXQudmFsdWV9IGlzIGZpcmluZ2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJUZXh0ID0gYFBDIGlzIGZpcmluZ2A7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja1dpbm5lciA9IChmbGFnKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGN1cnJlbnRQbGF5ZXIuaW5uZXJUZXh0ID0gYCR7aW5wdXQudmFsdWV9IEhBUyBXT04gISEhISEgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllci5pbm5lclRleHQgPSBgUEMgaGFzIHdvbmA7XG4gICAgfVxuICB9O1xuICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICBwY0VsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImhpdFwiLCBcIm1pc3NcIiwgXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgfSk7XG4gICAgcGxheWVyRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIsIFwibGVnYWxcIiwgXCJtaXNzXCIsIFwiYWN0aXZlUGxheWVyXCIpO1xuICAgIH0pO1xuICAgIHNoaXBTaXplID0gWzUsIDQsIDMsIDMsIDJdO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgcmVzZXQsXG4gICAgcm90YXRpb24sXG4gICAgcmVuZGVyUGNTaGlwLFxuICAgIHNob3dJZkxlZ2FsLFxuICAgIG1hcmtIaXQsXG4gICAgY2hlY2tXaW5uZXIsXG4gICAgbG9hZFNoaXAsXG4gICAgZHJhZ0FuZERyb3AsXG4gICAgc3dpdGNoTmFtZSxcbiAgICBjb250cm9sUGNTaGlwVmlldyxcbiAgfTtcbn0pKCk7XG5leHBvcnRzLmNvbnRyb2xHcmlkID0gY29udHJvbEdyaWQ7XG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCwgc3RhcnRYLCBzdGFydFksIHZlcnRpY2FsID0gZmFsc2UpID0+IHtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGdldFZlcnRpY2FsID0gKCkgPT4gdmVydGljYWw7XG5cbiAgY29uc3QgaGl0ID0gKG51bWJlcikgPT4ge1xuICAgIGhpdHMucHVzaChudW1iZXIpO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMubGVuZ3RoID09PSBnZXRMZW5ndGgoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNIaXQgPSAoeSwgeCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGZhbHNlO1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZVswXSA9PSB5ICYmIGVbMV0gPT0geCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBfX3NldENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGlmICh2ZXJ0aWNhbCA9PSBmYWxzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbc3RhcnRZLCBzdGFydFggKyBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3N0YXJ0WSArIGksIHN0YXJ0WF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX19zZXRDb29yZGluYXRlcygpO1xuICByZXR1cm4geyBoaXQsIGlzU3VuaywgaGl0cywgc2hpcENvb3JkaW5hdGVzLCBpc0hpdCB9O1xufTtcbmV4cG9ydHMuc2hpcCA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCBcIi4vZG9tXCI7XG5pbXBvcnQgXCIuL1BsYXllclwiO1xuXG5jb25zdCB7IGdhbWVCb2FyZCB9ID0gcmVxdWlyZShcIi4vR2FtZWJvYXJkXCIpO1xuY29uc3QgeyBwbGF5ZXIgfSA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IHsgY29udHJvbEdyaWQgfSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcEZhY3RvcnlcIik7XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gcGxheWVyKCk7XG5jb25zdCBwY1BsYXllciA9IHBsYXllcigpO1xuXG5jb25zdCBib2FyZCA9IGdhbWVCb2FyZChwY1BsYXllciwgaHVtYW5QbGF5ZXIpO1xuY29uc3QgcGNCb2FyZCA9IGJvYXJkLnBjQm9hcmQ7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJvYXJkLnBsYXllckJvYXJkO1xuLy8gcmVtb3ZlIGNsaWNrIGZ1bmN0aW9uIGZyb20gaW5zaWRlIGRvbSB0byBoZXJlXG5ib2FyZC5pbml0KHBjQm9hcmQsIHBsYXllckJvYXJkKTtcbnNldFRpbWVvdXQoKCkgPT4ge1xuICBib2FyZC5yZW5kZXJQY1NoaXAoKTtcbn0sIDUwMCk7XG5wbGF5ZXJCb2FyZC5mb3JFYWNoKChlKSA9PiB7XG4gIGUuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBib2FyZC5kcmFnQW5kRHJvcChhKTtcbiAgICB9KTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBib2FyZC5kcmFnQW5kRHJvcChhLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYm9hcmQubG9hZFBsYXllclNoaXAoYSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5wY0JvYXJkLmZvckVhY2goKGUpID0+IHtcbiAgZS5mb3JFYWNoKChhKSA9PiB7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIGlmIChib2FyZC5nZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgICAgYm9hcmQuc2hvd0xlZ2FsUGNHcmlkKGEsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQuc2hvd0xlZ2FsUGNHcmlkKGEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZW5ndGggPSBib2FyZC5nZXRTaGlwU2l6ZUxlbmd0aCgpO1xuICAgICAgaWYgKFxuICAgICAgICBsZW5ndGggPT0gMCAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGhpdFwiICYmXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgbWlzc1wiICYmXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgaWxsZWdhbFwiICYmXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyIGhpdCBpbGxlZ2FsXCIgJiZcbiAgICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBtaXNzIGlsbGVnYWxcIiAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllciBoaXRcIiAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllciBoaXQgbGVnYWxcIiAmJlxuICAgICAgICBib2FyZC5nZXRUdXJuKCkgJSAyID09IDBcbiAgICAgICkge1xuICAgICAgICBib2FyZC5yZWNpZXZlQXR0YWNrKFxuICAgICAgICAgIHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpKSxcbiAgICAgICAgICBwYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9