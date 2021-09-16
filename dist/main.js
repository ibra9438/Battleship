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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"MyFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"ttf\");\n  font-weight: 500;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsl(221, 51%, 31%);\n  font-family: \"MyFont\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-size: 8rem;\n  font-weight: 500;\n  color: rgb(10, 36, 59);\n  font-family: \"MyFont\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 65rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 30rem;\n  height: 30rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n  cursor: pointer;\n}\n.illegal {\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(130, 128, 251);\n  cursor: pointer;\n}\n.hit {\n  background: rgb(139, 30, 20);\n  cursor: not-allowed;\n}\n.miss {\n  background: rgb(243, 111, 3);\n  cursor: not-allowed;\n}\n.element .activePlayer .illegal {\n  cursor: not-allowed;\n}\n.element .activePlayer .legal {\n  background: rgb(140, 248, 146);\n}\n.hidden {\n  background-color: hsl(221, 51%, 31%);\n}\n.sunk {\n  background-color: hsl(0, 0%, 58%);\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"MyFont\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: visible;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.currentPlayer {\n  width: 5rem;\n  font-size: 3rem;\n  color: hsl(228, 100%, 85%);\n  margin: 1rem;\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1.2rem 1.8rem;\n  color: white;\n  font-size: 1.2rem;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  background-color: hsla(228, 59%, 19%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAA6C;EAC7C,gBAAgB;EAChB,kBAAkB;AACpB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,8BAA8B;EAC9B,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,4BAA4B;EAC5B,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,oCAAoC;AACtC;AACA;EACE,iCAAiC;AACnC;AACA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,2CAA2C;EAC3C,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,WAAW;EACX,eAAe;EACf,0BAA0B;EAC1B,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,4CAA4C;AAC9C;AACA;EACE,sBAAsB;AACxB","sourcesContent":["@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./Roboto-Medium.ttf\") format(\"ttf\");\n  font-weight: 500;\n  font-style: normal;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsl(221, 51%, 31%);\n  font-family: \"MyFont\", sans-serif;\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-size: 8rem;\n  font-weight: 500;\n  color: rgb(10, 36, 59);\n  font-family: \"MyFont\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 65rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 30rem;\n  height: 30rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n  cursor: pointer;\n}\n.illegal {\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(130, 128, 251);\n  cursor: pointer;\n}\n.hit {\n  background: rgb(139, 30, 20);\n  cursor: not-allowed;\n}\n.miss {\n  background: rgb(243, 111, 3);\n  cursor: not-allowed;\n}\n.element .activePlayer .illegal {\n  cursor: not-allowed;\n}\n.element .activePlayer .legal {\n  background: rgb(140, 248, 146);\n}\n.hidden {\n  background-color: hsl(221, 51%, 31%);\n}\n.sunk {\n  background-color: hsl(0, 0%, 58%);\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"MyFont\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: visible;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"MyFont\", sans-serif;\n}\n.currentPlayer {\n  width: 5rem;\n  font-size: 3rem;\n  color: hsl(228, 100%, 85%);\n  margin: 1rem;\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1.2rem 1.8rem;\n  color: white;\n  font-size: 1.2rem;\n  border: none;\n  border-radius: 10px;\n  outline: none;\n  background-color: hsla(228, 59%, 19%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n"],"sourceRoot":""}]);
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
            setTimeout(() => {
              controlGrid.firing(true);
            }, 1000);
            e.hit(1);
            controlGrid.markHit(a, true);
            value = true;
            allShipsSunk(true);
          }
        });
        if (value == false) {
          setTimeout(() => {
            controlGrid.firing(true);
          }, 1000);
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
            setTimeout(() => {
              e.hit(1);
              element = playerBoard[pcAttack[0]][pcAttack[1]];
              controlGrid.firing(false);
              setTimeout(() => {
                controlGrid.markHit(element, true);
                controlGrid.switchName(getTurn());
                allShipsSunk(false);
                setTurn();
                controlGrid.switchName(getTurn());
              }, 2000);
              value = true;
            }, 1000);
          }
        });
        if (value == false) {
          setTimeout(() => {
            element = playerBoard[pcAttack[0]][pcAttack[1]];
            controlGrid.firing(false);
            controlGrid.switchName(getTurn());
            setTimeout(() => {
              controlGrid.markHit(element, false);
              setTurn();
              controlGrid.switchName(getTurn());
            }, 2000);
            missedPcHits.push([pcAttack[0], pcAttack[1]]);
          }, 1000);
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
  const audio = document.querySelector("audio");
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
      currentPlayer.innerText = `${input.value}`;
    } else {
      currentPlayer.innerText = "PC";
    }
  };
  const firing = (flag) => {
    audio.currentTime = 0;
    audio.play();
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
    firing,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxzREFBc0QsNEJBQTRCLHlFQUF5RSxxQkFBcUIsdUJBQXVCLEdBQUcsS0FBSyxjQUFjLGVBQWUsMkJBQTJCLEdBQUcsUUFBUSxtQ0FBbUMsd0NBQXdDLEdBQUcsTUFBTSxvQkFBb0Isd0JBQXdCLG9CQUFvQixxQkFBcUIsMkJBQTJCLHdDQUF3QyxHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsbUNBQW1DLHdCQUF3QixrQkFBa0IsaUJBQWlCLEdBQUcsZ0JBQWdCLDRCQUE0QixpQkFBaUIsa0JBQWtCLGtCQUFrQiwyQ0FBMkMsd0NBQXdDLG9CQUFvQixHQUFHLG9CQUFvQix3QkFBd0IsR0FBRyxZQUFZLDRCQUE0QixHQUFHLFVBQVUsbUNBQW1DLG9CQUFvQixHQUFHLFlBQVksd0JBQXdCLEdBQUcsaUJBQWlCLG1DQUFtQyxvQkFBb0IsR0FBRyxRQUFRLGlDQUFpQyx3QkFBd0IsR0FBRyxTQUFTLGlDQUFpQyx3QkFBd0IsR0FBRyxtQ0FBbUMsd0JBQXdCLEdBQUcsaUNBQWlDLG1DQUFtQyxHQUFHLFdBQVcseUNBQXlDLEdBQUcsU0FBUyxzQ0FBc0MsR0FBRyxvQkFBb0Isb0JBQW9CLGdCQUFnQixrQkFBa0IsV0FBVyxZQUFZLHlDQUF5QyxrQkFBa0IsNEJBQTRCLHdCQUF3Qix3Q0FBd0MsNEJBQTRCLHdCQUF3QixHQUFHLDJCQUEyQix1QkFBdUIsZUFBZSxHQUFHLFVBQVUsZ0RBQWdELGVBQWUsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDJCQUEyQix1QkFBdUIsb0JBQW9CLHdCQUF3QixxQkFBcUIsd0NBQXdDLEdBQUcsa0JBQWtCLGdCQUFnQixvQkFBb0IsK0JBQStCLGlCQUFpQixHQUFHLFNBQVMsMkJBQTJCLGtCQUFrQixHQUFHLFVBQVUsMkJBQTJCLGlCQUFpQixzQkFBc0IsaUJBQWlCLHdCQUF3QixrQkFBa0IsaURBQWlELEdBQUcsZ0JBQWdCLDJCQUEyQixHQUFHLFNBQVMsZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLHNDQUFzQyw0QkFBNEIsc0RBQXNELHFCQUFxQix1QkFBdUIsR0FBRyxLQUFLLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxRQUFRLG1DQUFtQyx3Q0FBd0MsR0FBRyxNQUFNLG9CQUFvQix3QkFBd0Isb0JBQW9CLHFCQUFxQiwyQkFBMkIsd0NBQXdDLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcscUJBQXFCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLGtCQUFrQixpQkFBaUIsR0FBRyxnQkFBZ0IsNEJBQTRCLGlCQUFpQixrQkFBa0Isa0JBQWtCLDJDQUEyQyx3Q0FBd0Msb0JBQW9CLEdBQUcsb0JBQW9CLHdCQUF3QixHQUFHLFlBQVksNEJBQTRCLEdBQUcsVUFBVSxtQ0FBbUMsb0JBQW9CLEdBQUcsWUFBWSx3QkFBd0IsR0FBRyxpQkFBaUIsbUNBQW1DLG9CQUFvQixHQUFHLFFBQVEsaUNBQWlDLHdCQUF3QixHQUFHLFNBQVMsaUNBQWlDLHdCQUF3QixHQUFHLG1DQUFtQyx3QkFBd0IsR0FBRyxpQ0FBaUMsbUNBQW1DLEdBQUcsV0FBVyx5Q0FBeUMsR0FBRyxTQUFTLHNDQUFzQyxHQUFHLG9CQUFvQixvQkFBb0IsZ0JBQWdCLGtCQUFrQixXQUFXLFlBQVkseUNBQXlDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHdDQUF3Qyw0QkFBNEIsd0JBQXdCLEdBQUcsMkJBQTJCLHVCQUF1QixlQUFlLEdBQUcsVUFBVSxnREFBZ0QsZUFBZSxnQkFBZ0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsMkJBQTJCLHVCQUF1QixvQkFBb0Isd0JBQXdCLHFCQUFxQix3Q0FBd0MsR0FBRyxrQkFBa0IsZ0JBQWdCLG9CQUFvQiwrQkFBK0IsaUJBQWlCLEdBQUcsU0FBUywyQkFBMkIsa0JBQWtCLEdBQUcsVUFBVSwyQkFBMkIsaUJBQWlCLHNCQUFzQixpQkFBaUIsd0JBQXdCLGtCQUFrQixpREFBaUQsR0FBRyxnQkFBZ0IsMkJBQTJCLEdBQUcscUJBQXFCO0FBQzFuTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNWMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5QywwR0FBMEcsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRW5mLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLG1GQUFPLElBQUksMEZBQWMsR0FBRywwRkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ2ZBLFFBQVEsT0FBTyxFQUFFLG1CQUFPLENBQUMsMkNBQWU7QUFDeEMsUUFBUSxjQUFjLEVBQUUsbUJBQU8sQ0FBQywyQkFBTzs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDblFqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLGNBQWM7Ozs7Ozs7Ozs7O0FDMUJkLFFBQVEsWUFBWSxFQUFFLG1CQUFPLENBQUMsdUNBQWE7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLFFBQVE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsVUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogaHNsKDIyMSwgNTElLCAzMSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2IoMTAsIDM2LCA1OSk7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDY1cmVtO1xcbn1cXG4uYmF0dGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5iYXR0bGUtZ3JpZC1vZmYge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbGxlZ2FsIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hY3RpdmVQbGF5ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMCwgMTI4LCAyNTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzksIDMwLCAyMCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAxMTEsIDMpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQgLmFjdGl2ZVBsYXllciAuaWxsZWdhbCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZWxlbWVudCAuYWN0aXZlUGxheWVyIC5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxufVxcbi5oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMSwgNTElLCAzMSUpO1xcbn1cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU4JSk7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDU3LCA5MCwgMTE5KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5tb2RhbC1jb250YWluZXItaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxOTcsIDI1MCwgMC45NDUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmN1cnJlbnRQbGF5ZXIge1xcbiAgd2lkdGg6IDVyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogaHNsKDIyOCwgMTAwJSwgODUlKTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMS44cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI4LCA1OSUsIDE5JSwgMC45NTkpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgcGFkZGluZzogMS4ycmVtIDIuMnJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiwwREFBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSwyQ0FBMkM7RUFDM0MsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL1JvYm90by1NZWRpdW0udHRmXFxcIikgZm9ybWF0KFxcXCJ0dGZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogaHNsKDIyMSwgNTElLCAzMSUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC1zaXplOiA4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiByZ2IoMTAsIDM2LCA1OSk7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDY1cmVtO1xcbn1cXG4uYmF0dGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzByZW07XFxuICBoZWlnaHQ6IDMwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5iYXR0bGUtZ3JpZC1vZmYge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbi5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5pbGxlZ2FsIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hY3RpdmVQbGF5ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDEzMCwgMTI4LCAyNTEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQ6IHJnYigxMzksIDMwLCAyMCk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4ubWlzcyB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCAxMTEsIDMpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmVsZW1lbnQgLmFjdGl2ZVBsYXllciAuaWxsZWdhbCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZWxlbWVudCAuYWN0aXZlUGxheWVyIC5sZWdhbCB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTQwLCAyNDgsIDE0Nik7XFxufVxcbi5oaWRkZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMSwgNTElLCAzMSUpO1xcbn1cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDU4JSk7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDU3LCA5MCwgMTE5KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5tb2RhbC1jb250YWluZXItaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxOTcsIDI1MCwgMC45NDUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTXlGb250XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmN1cnJlbnRQbGF5ZXIge1xcbiAgd2lkdGg6IDVyZW07XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogaHNsKDIyOCwgMTAwJSwgODUlKTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMS44cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjI4LCA1OSUsIDE5JSwgMC45NTkpO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgcGFkZGluZzogMS4ycmVtIDIuMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcEZhY3RvcnlcIik7XG5jb25zdCB7IGNvbnRyb2xHcmlkIH0gPSByZXF1aXJlKFwiLi9kb21cIik7XG5cbmNvbnN0IGdhbWVCb2FyZCA9IChwbGF5ZXIsIHBjKSA9PiB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gW107XG4gIGNvbnN0IHBjQm9hcmQgPSBbXTtcblxuICBjb25zdCBzaGlwc0FyciA9IFtdO1xuICBjb25zdCBzaGlwc0FyclBjID0gW107XG5cbiAgbGV0IHNoaXBTaXplID0gWzUsIDQsIDMsIDMsIDJdO1xuICBsZXQgbmV3U2hpcDtcblxuICBjb25zdCBtaXNzZWRQbGF5ZXJIaXRzID0gW107XG4gIGNvbnN0IG1pc3NlZFBjSGl0cyA9IFtdO1xuXG4gIGxldCB0dXJuID0gMDtcbiAgbGV0IGdhbWVPbiA9IHRydWU7XG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBzZXRUdXJuID0gKCkgPT4gdHVybisrO1xuICBjb25zdCBnZXRTaGlwU2l6ZUxlbmd0aCA9ICgpID0+IHNoaXBTaXplLmxlbmd0aDtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBjb250cm9sR3JpZC5pbml0KHBjQm9hcmQsIHBsYXllckJvYXJkKTtcbiAgfTtcbiAgY29uc3QgX19jaGVja0FjdGl2ZSA9IChcbiAgICByYW5kb21OdW1iZXJZLFxuICAgIHJhbmRvbU51bWJlclgsXG4gICAgbGVuZ3RoLFxuICAgIG9yaWVudGF0aW9uXG4gICkgPT4ge1xuICAgIGxldCBsZWdhbFZhbHVlO1xuICAgIGxldCBsZWdhbFJ1bGUgPSAoYSkgPT5cbiAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyXCIgJiZcbiAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyIGhpZGRlblwiO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHJldHVybiAobGVnYWxWYWx1ZSA9IHBjQm9hcmRbcmFuZG9tTnVtYmVyWV0uZXZlcnkoKGEpID0+XG4gICAgICAgIGxlZ2FsUnVsZShhKVxuICAgICAgKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkQXJyID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbHRlcmVkQXJyLnB1c2gocGNCb2FyZFtyYW5kb21OdW1iZXJZICsgaV1bcmFuZG9tTnVtYmVyWF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChsZWdhbFZhbHVlID0gZmlsdGVyZWRBcnIuZXZlcnkoKGEpID0+IGxlZ2FsUnVsZShhKSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVuZGVyUGNTaGlwID0gKCkgPT4ge1xuICAgIGxldCByYW5kb21OdW1iZXJYO1xuICAgIGxldCByYW5kb21OdW1iZXJZO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcbiAgICBsZXQgb3JpZW50YXRpb25WYWx1ZTtcbiAgICBsZXQgbGVnYWxNb3ZlID0gdHJ1ZTtcbiAgICBzaGlwU2l6ZS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBvcmllbnRhdGlvblZhbHVlID1cbiAgICAgICAgb3JpZW50YXRpb25bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSkgJSAyXTtcbiAgICAgIGlmIChvcmllbnRhdGlvblZhbHVlID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICByYW5kb21OdW1iZXJYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIHJhbmRvbU51bWJlclkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICBpZiAocmFuZG9tTnVtYmVyWCArIGUgPD0gOSkge1xuICAgICAgICAgICAgbGVnYWxNb3ZlID0gX19jaGVja0FjdGl2ZShcbiAgICAgICAgICAgICAgcmFuZG9tTnVtYmVyWSxcbiAgICAgICAgICAgICAgcmFuZG9tTnVtYmVyWCxcbiAgICAgICAgICAgICAgZSxcbiAgICAgICAgICAgICAgb3JpZW50YXRpb25WYWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHJhbmRvbU51bWJlclggKyBlID49IDkgfHwgIWxlZ2FsTW92ZSk7XG5cbiAgICAgICAgbmV3U2hpcCA9IHNoaXAoZSwgcmFuZG9tTnVtYmVyWCwgcmFuZG9tTnVtYmVyWSwgZmFsc2UpO1xuICAgICAgICBzaGlwc0FyclBjLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIGNvbnRyb2xHcmlkLnJlbmRlclBjU2hpcChcbiAgICAgICAgICBwY0JvYXJkLFxuICAgICAgICAgIGUsXG4gICAgICAgICAgcmFuZG9tTnVtYmVyWCxcbiAgICAgICAgICByYW5kb21OdW1iZXJZXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkbyB7XG4gICAgICAgICAgcmFuZG9tTnVtYmVyWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICByYW5kb21OdW1iZXJZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgIGlmIChyYW5kb21OdW1iZXJZICsgZSA8PSA5KSB7XG4gICAgICAgICAgICBsZWdhbE1vdmUgPSBfX2NoZWNrQWN0aXZlKFxuICAgICAgICAgICAgICByYW5kb21OdW1iZXJZLFxuICAgICAgICAgICAgICByYW5kb21OdW1iZXJYLFxuICAgICAgICAgICAgICBlLFxuICAgICAgICAgICAgICBvcmllbnRhdGlvblZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocmFuZG9tTnVtYmVyWSArIGUgPj0gOSB8fCAhbGVnYWxNb3ZlKTtcbiAgICAgICAgbmV3U2hpcCA9IHNoaXAoZSwgcmFuZG9tTnVtYmVyWCwgcmFuZG9tTnVtYmVyWSwgdHJ1ZSk7XG4gICAgICAgIHNoaXBzQXJyUGMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgY29udHJvbEdyaWQucmVuZGVyUGNTaGlwKFxuICAgICAgICAgIHBjQm9hcmQsXG4gICAgICAgICAgZSxcbiAgICAgICAgICByYW5kb21OdW1iZXJYLFxuICAgICAgICAgIHJhbmRvbU51bWJlclksXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc2hvd0xlZ2FsUGNHcmlkID0gKGUsIGZsYWcpID0+IHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgY29udHJvbEdyaWQuc2hvd0lmTGVnYWwoZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRyb2xHcmlkLnNob3dJZkxlZ2FsKGUsIGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRyYWdBbmREcm9wID0gKGUsIGZsYWcpID0+IHtcbiAgICBjb250cm9sR3JpZC5kcmFnQW5kRHJvcChlLCBmbGFnKTtcbiAgfTtcbiAgY29uc3QgbG9hZFBsYXllclNoaXAgPSAoYSkgPT4ge1xuICAgIGxldCB2YWx1ZXM7XG4gICAgaWYgKHNoaXBTaXplLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhbHVlcyA9IGNvbnRyb2xHcmlkLmxvYWRTaGlwKGEpO1xuICAgICAgaWYgKHZhbHVlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgbmV3U2hpcCA9IHNoaXAoXG4gICAgICAgICAgcGFyc2VJbnQoc2hpcFNpemVbMF0pLFxuICAgICAgICAgIHBhcnNlSW50KHZhbHVlc1sxXSksXG4gICAgICAgICAgcGFyc2VJbnQodmFsdWVzWzBdKVxuICAgICAgICApO1xuICAgICAgICBzaGlwc0Fyci5wdXNoKG5ld1NoaXApO1xuICAgICAgICBzaGlwU2l6ZS5zaGlmdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9ICh4LCB5LCBhKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZmFsc2U7XG4gICAgaWYgKGdhbWVPbikge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgPT09IDApIHtcbiAgICAgICAgc2hpcHNBcnJQYy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuaXNIaXQoeSwgeCkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRyb2xHcmlkLmZpcmluZyh0cnVlKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgZS5oaXQoMSk7XG4gICAgICAgICAgICBjb250cm9sR3JpZC5tYXJrSGl0KGEsIHRydWUpO1xuICAgICAgICAgICAgdmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgYWxsU2hpcHNTdW5rKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbEdyaWQuZmlyaW5nKHRydWUpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIGNvbnRyb2xHcmlkLm1hcmtIaXQoYSwgZmFsc2UpO1xuICAgICAgICAgIG1pc3NlZFBsYXllckhpdHMucHVzaChbeCwgeV0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFR1cm4oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGdhbWVPbikge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgIT09IDApIHtcbiAgICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHBjQXR0YWNrID0gcGMucGNBdHRhY2soKTtcbiAgICAgICAgbGV0IGVsZW1lbnQ7XG4gICAgICAgIHNoaXBzQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5pc0hpdChwY0F0dGFja1swXSwgcGNBdHRhY2tbMV0pID09IHRydWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBlLmhpdCgxKTtcbiAgICAgICAgICAgICAgZWxlbWVudCA9IHBsYXllckJvYXJkW3BjQXR0YWNrWzBdXVtwY0F0dGFja1sxXV07XG4gICAgICAgICAgICAgIGNvbnRyb2xHcmlkLmZpcmluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xHcmlkLm1hcmtIaXQoZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29udHJvbEdyaWQuc3dpdGNoTmFtZShnZXRUdXJuKCkpO1xuICAgICAgICAgICAgICAgIGFsbFNoaXBzU3VuayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgc2V0VHVybigpO1xuICAgICAgICAgICAgICAgIGNvbnRyb2xHcmlkLnN3aXRjaE5hbWUoZ2V0VHVybigpKTtcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBmYWxzZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudCA9IHBsYXllckJvYXJkW3BjQXR0YWNrWzBdXVtwY0F0dGFja1sxXV07XG4gICAgICAgICAgICBjb250cm9sR3JpZC5maXJpbmcoZmFsc2UpO1xuICAgICAgICAgICAgY29udHJvbEdyaWQuc3dpdGNoTmFtZShnZXRUdXJuKCkpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnRyb2xHcmlkLm1hcmtIaXQoZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRUdXJuKCk7XG4gICAgICAgICAgICAgIGNvbnRyb2xHcmlkLnN3aXRjaE5hbWUoZ2V0VHVybigpKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgbWlzc2VkUGNIaXRzLnB1c2goW3BjQXR0YWNrWzBdLCBwY0F0dGFja1sxXV0pO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcbiAgY29uc3QgYWxsU2hpcHNTdW5rID0gKGZsYWcpID0+IHtcbiAgICBsZXQgcGNTdW5rQ291bnRlciA9IDA7XG4gICAgbGV0IHBsYXllclN1bmtDb3VudGVyID0gMDtcbiAgICBpZiAoZmxhZykge1xuICAgICAgc2hpcHNBcnJQYy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmlzU3VuaygpID09IHRydWUpIHtcbiAgICAgICAgICBwY1N1bmtDb3VudGVyKys7XG4gICAgICAgICAgY29udHJvbEdyaWQuY29udHJvbFBjU2hpcFZpZXcoXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgZS5zaGlwQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBwY0JvYXJkXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBzQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuaXNTdW5rKCkgPT0gdHJ1ZSkge1xuICAgICAgICAgIHBsYXllclN1bmtDb3VudGVyKys7XG4gICAgICAgICAgY29udHJvbEdyaWQuY29udHJvbFBjU2hpcFZpZXcoXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgZS5zaGlwQ29vcmRpbmF0ZXMsXG4gICAgICAgICAgICBwbGF5ZXJCb2FyZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc2hpcHNBcnIubGVuZ3RoID09PSBwbGF5ZXJTdW5rQ291bnRlcikge1xuICAgICAgX19jaGVja1dpbm5lcihmYWxzZSk7XG4gICAgfVxuICAgIGlmIChzaGlwc0FyclBjLmxlbmd0aCA9PT0gcGNTdW5rQ291bnRlcikge1xuICAgICAgX19jaGVja1dpbm5lcih0cnVlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IF9fY2hlY2tXaW5uZXIgPSAoZmxhZykgPT4ge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBjb250cm9sR3JpZC5jaGVja1dpbm5lcihmbGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udHJvbEdyaWQuY2hlY2tXaW5uZXIoZmxhZyk7XG4gICAgfVxuICAgIGdhbWVPbiA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgX19yZXNldCgpO1xuICAgIH0sIDIwMDApO1xuICB9O1xuICBjb25zdCBfX3Jlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnRyb2xHcmlkLnJlc2V0KCk7XG4gICAgdHVybiA9IDA7XG4gICAgc2hpcFNpemUgPSBbNSwgNCwgMywgMywgMl07XG4gICAgc2hpcHNBcnIubGVuZ3RoID0gMDtcbiAgICBjb250cm9sR3JpZC5zd2l0Y2hOYW1lKHR1cm4pO1xuICAgIHJlbmRlclBjU2hpcCgpO1xuICAgIC8vIF9fdGVzdGluZ1NoaXAoKTtcbiAgICBnYW1lT24gPSB0cnVlO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZ2V0VHVybixcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIHJlbmRlclBjU2hpcCxcbiAgICBkcmFnQW5kRHJvcCxcbiAgICBwY0JvYXJkLFxuICAgIGdldFNoaXBTaXplTGVuZ3RoLFxuICAgIGxvYWRQbGF5ZXJTaGlwLFxuICAgIHBsYXllckJvYXJkLFxuICAgIHNob3dMZWdhbFBjR3JpZCxcbiAgfTtcbn07XG5leHBvcnRzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiIsImNvbnN0IHBsYXllciA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcEhpdHMgPSBbXTtcbiAgY29uc3QgcGNBdHRhY2sgPSAoKSA9PiB7XG4gICAgbGV0IGxlZ2FsUnVsZTtcbiAgICBsZXQgaGl0UnVsZTtcbiAgICBsZXQgcmFuZG9tTnVtYmVyc1g7XG4gICAgbGV0IHJhbmRvbU51bWJlcnNZO1xuICAgIGxldCBmbGFnID0gZmFsc2U7XG4gICAgZG8ge1xuICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgcmFuZG9tTnVtYmVyc1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICByYW5kb21OdW1iZXJzWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJhbmRvbU51bWJlcnNYID09IHNoaXBIaXRzW2ldWzFdICYmXG4gICAgICAgICAgcmFuZG9tTnVtYmVyc1kgPT0gc2hpcEhpdHNbaV1bMF1cbiAgICAgICAgKSB7XG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHdoaWxlIChmbGFnKTtcbiAgICBzaGlwSGl0cy5wdXNoKFtyYW5kb21OdW1iZXJzWSwgcmFuZG9tTnVtYmVyc1hdKTtcbiAgICByZXR1cm4gW3JhbmRvbU51bWJlcnNZLCByYW5kb21OdW1iZXJzWF07XG4gIH07XG4gIHJldHVybiB7IHBjQXR0YWNrLCBzaGlwSGl0cyB9O1xufTtcbmV4cG9ydHMucGxheWVyID0gcGxheWVyO1xuIiwiY29uc3QgeyBnYW1lQm9hcmQgfSA9IHJlcXVpcmUoXCIuL0dhbWVib2FyZFwiKTtcbmNvbnN0IGNvbnRyb2xHcmlkID0gKCgpID0+IHtcbiAgbGV0IHNoaXBTaXplID0gWzUsIDQsIDMsIDMsIDJdO1xuICBjb25zdCBmaWx0ZXJlZEFyciA9IFtdO1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcbiAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIuYmF0dGxlLWdyaWQ6bnRoLWNoaWxkKDEpXCJcbiAgKTtcbiAgY29uc3QgcGNHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5iYXR0bGUtZ3JpZDpudGgtY2hpbGQoMilcIlxuICApO1xuXG4gIGNvbnN0IHJvdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGlvblwiKTtcblxuICBsZXQgcm90YXRpb25TdGF0dXMgPSAwO1xuICByb3RhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJvdGF0aW9uU3RhdHVzKys7XG4gIH0pO1xuXG4gIGxldCBwY0VsZW1lbnRzO1xuICBsZXQgcGxheWVyRWxlbWVudHM7XG5cbiAgbGV0IGRvdWJsZVBjRWxlbWVudHMgPSBbXTtcbiAgbGV0IGRvdWJsZVBsYXllckVsZW1lbnRzID0gW107XG5cbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcGxheWVyTmFtZUZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcInBsYXllck5hbWVcIl07XG5cbiAgcGxheWVyTmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzd2l0Y2hOYW1lKDApO1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1jb250YWluZXJcIik7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWNvbnRhaW5lci1oaWRkZW5cIik7XG4gIH0pO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtVGV4dFwiKTtcbiAgY29uc3QgY3VycmVudFBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFBsYXllclwiKTtcblxuICBjb25zdCBpbml0ID0gKHBjQm9hcmQsIHBsYXllckJvYXJkKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBwY0JvYXJkLnB1c2goW10pO1xuICAgICAgcGxheWVyQm9hcmQucHVzaChbXSk7XG5cbiAgICAgIGRvdWJsZVBjRWxlbWVudHMucHVzaChbXSk7XG4gICAgICBkb3VibGVQbGF5ZXJFbGVtZW50cy5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBwY0dyaWQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnRcIik7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIiwgaSk7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIiwgaik7XG4gICAgICAgICAgZS5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgcGNCb2FyZFtpXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgIGRvdWJsZVBjRWxlbWVudHNbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBsYXllckdyaWQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImVsZW1lbnRcIik7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIiwgaik7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIiwgaSk7XG4gICAgICAgICAgZS5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgcGxheWVyQm9hcmRbaV0ucHVzaChlbGVtZW50KTtcbiAgICAgICAgICBkb3VibGVQbGF5ZXJFbGVtZW50c1tpXS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5iYXR0bGUtZ3JpZDpudGgtY2hpbGQoMikgLmVsZW1lbnRcIlxuICAgICk7XG4gICAgcGxheWVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuYmF0dGxlLWdyaWQ6bnRoLWNoaWxkKDEpIC5lbGVtZW50XCJcbiAgICApO1xuICB9O1xuICBjb25zdCByZW5kZXJQY1NoaXAgPSAoXG4gICAgcGNCb2FyZCxcbiAgICBsZW5ndGgsXG4gICAgcG9zaXRpb25YLFxuICAgIHBvc2l0aW9uWSxcbiAgICBmbGFnID0gdHJ1ZVxuICApID0+IHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBwY0JvYXJkW3Bvc2l0aW9uWV1bcG9zaXRpb25YICsgaV0uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBcImFjdGl2ZVBsYXllclwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGNCb2FyZFtwb3NpdGlvblkgKyBpXVtwb3NpdGlvblhdLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgXCJhY3RpdmVQbGF5ZXJcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250cm9sUGNTaGlwVmlldyhmYWxzZSwgdW5kZWZpbmVkLCBwY0JvYXJkKTtcbiAgfTtcbiAgY29uc3QgY29udHJvbFBjU2hpcFZpZXcgPSAoXG4gICAgZmxhZyxcbiAgICBzaGlwQ29vcmRpbmF0ZXMgPSB1bmRlZmluZWQsXG4gICAgYm9hcmRcbiAgKSA9PiB7XG4gICAgYm9hcmQuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIGlmIChhLmNsYXNzTmFtZSA9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyXCIpIHtcbiAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICBzaGlwQ29vcmRpbmF0ZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgYm9hcmQuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBwYXJzZUludChzLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSkgPT0gZVswXSAmJlxuICAgICAgICAgICAgICAgICAgcGFyc2VJbnQocy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIikpID09IGVbMV1cbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHMuY2xhc3NMaXN0LmFkZChcInN1bmtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgc2hvd0lmTGVnYWwgPSAoZSwgZmxhZykgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICB9KTtcbiAgICBsZXQgY3VycmVudENsYXNzTmFtZSA9IGUuY2xhc3NOYW1lO1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRDbGFzc05hbWUgPT0gXCJlbGVtZW50IG1pc3NcIiB8fFxuICAgICAgICBjdXJyZW50Q2xhc3NOYW1lID09IFwiZWxlbWVudCBhY3RpdmVQbGF5ZXIgaGl0XCJcbiAgICAgICkge1xuICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJpbGxlZ2FsXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJpbGxlZ2FsXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbWFya0hpdCA9IChhLCBoaXRGbGFnKSA9PiB7XG4gICAgaWYgKGhpdEZsYWcpIHtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImFpbVwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwibWlzc1wiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImlsbGVnYWxcIik7XG4gICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJwY1R1cm5cIik7XG4gICAgICBhLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImFpbVwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICAgIGEuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgfVxuICB9O1xuICAvLyBpbXBsZW1lbnQgZHJhZyBhbmQgZHJvcCBhbmQgcHVzaCB0byB0byBzaGlwc0FyclxuICBjb25zdCBkcmFnQW5kRHJvcCA9IChlLCBmbGFnID0gdHJ1ZSkgPT4ge1xuICAgIGxldCB2YWx1ZTtcbiAgICBsZXQgbmV4dFNpYmxpbmc7XG4gICAgbGV0IGxhc3RUYXJnZXQ7XG4gICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBlO1xuICAgIGxldCBsZW5ndGggPSBzaGlwU2l6ZVswXTtcblxuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBpZiAocm90YXRpb25TdGF0dXMgJSAyID09IDApIHtcbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICBmaWx0ZXJlZEFyci5sZW5ndGggPSAwO1xuICAgICAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZpbHRlcmVkQXJyLnB1c2goY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBuZXh0U2libGluZyA9IGN1cnJlbnRUYXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICBsYXN0VGFyZ2V0ID0gY3VycmVudFRhcmdldC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBmaWx0ZXJlZEFyci5ldmVyeSgoYSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBhLmNsYXNzTmFtZSA9PSBcImVsZW1lbnRcIiAmJlxuICAgICAgICAgICAgICBsYXN0VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSA8IDEwICYmXG4gICAgICAgICAgICAgIGxhc3RUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpID5cbiAgICAgICAgICAgICAgICBlLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRBcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWx0ZXJlZEFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJpbGxlZ2FsXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXJlZEFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImlsbGVnYWxcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgeCA9IHBhcnNlSW50KGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpKTtcbiAgICAgICAgICB5ID0gcGFyc2VJbnQoZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIikpO1xuICAgICAgICAgIGZpbHRlcmVkQXJyLmxlbmd0aCA9IDA7XG4gICAgICAgICAgZmlsdGVyZWRBcnIucHVzaChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICBuZXh0U2libGluZyA9IGRvdWJsZVBsYXllckVsZW1lbnRzW3kgKyAxXVt4XTtcbiAgICAgICAgICBmaWx0ZXJlZEFyci5wdXNoKG5leHRTaWJsaW5nKTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIGlmIChpICsgeSA8IDEwKSB7XG4gICAgICAgICAgICAgIG5leHRTaWJsaW5nID0gZG91YmxlUGxheWVyRWxlbWVudHNbeSArIGldW3hdO1xuICAgICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gbmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgIGZpbHRlcmVkQXJyLnB1c2goY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJpbGxlZ2FsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IGZpbHRlcmVkQXJyLmV2ZXJ5KChhKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGEuY2xhc3NOYW1lID09IFwiZWxlbWVudFwiIHx8XG4gICAgICAgICAgICAgIChhLmNsYXNzTmFtZSA9PSBcImVsZW1lbnQgbGVnYWxcIiAmJlxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIpIDw9IDEwKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZmlsdGVyZWRBcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICAgICAgICBhLmNsYXNzTGlzdC5hZGQoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWx0ZXJlZEFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImxlZ2FsXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJpbGxlZ2FsXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWx0ZXJlZEFyci5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZShcImlsbGVnYWxcIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGxvYWRTaGlwID0gKGEpID0+IHtcbiAgICBsZXQgbGVuZ3RoID0gc2hpcFNpemVbMF07XG4gICAgbGV0IGN1cnJlbnRUYXJnZXQgPSBhO1xuICAgIGxldCBuZXh0U2libGluZztcbiAgICBsZXQgbGVnYWwgPSBkcmFnQW5kRHJvcChhKTtcblxuICAgIGxldCB4ID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LWhcIikpO1xuICAgIGxldCB5ID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIikpO1xuXG4gICAgaWYgKHJvdGF0aW9uU3RhdHVzICUgMiA9PSAwICYmIGxlZ2FsICE9PSBmYWxzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgICAgIG5leHRTaWJsaW5nID0gY3VycmVudFRhcmdldC5uZXh0U2libGluZztcbiAgICAgICAgY3VycmVudFRhcmdldCA9IG5leHRTaWJsaW5nO1xuICAgICAgfVxuICAgICAgc2hpcFNpemUuc2hpZnQoKTtcblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4LXZcIiksXG4gICAgICAgIGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpLFxuICAgICAgXTtcbiAgICB9XG4gICAgaWYgKHJvdGF0aW9uU3RhdHVzICUgMiAhPT0gMCAmJiBsZWdhbCAhPT0gZmFsc2UpIHtcbiAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVBsYXllclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV4dFNpYmxpbmcgPSBkb3VibGVQbGF5ZXJFbGVtZW50c1t5ICsgaV1beF07XG4gICAgICAgIGN1cnJlbnRUYXJnZXQgPSBuZXh0U2libGluZztcbiAgICAgICAgY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUGxheWVyXCIpO1xuICAgICAgfVxuICAgICAgc2hpcFNpemUuc2hpZnQoKTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC12XCIpLFxuICAgICAgICBhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtaFwiKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgIF07XG4gICAgfVxuICAgIGlmICghbGVnYWwgPT0gdHJ1ZSkge1xuICAgICAgYWxlcnQoXCJjYW4ndCBwbGFjZSBzaGlwIGhlcmVcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICBjb25zdCBzd2l0Y2hOYW1lID0gKHR1cm4pID0+IHtcbiAgICBpZiAodHVybiAlIDIgPT0gMCkge1xuICAgICAgY3VycmVudFBsYXllci5pbm5lclRleHQgPSBgJHtpbnB1dC52YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVyVGV4dCA9IFwiUENcIjtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGZpcmluZyA9IChmbGFnKSA9PiB7XG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgICBpZiAoZmxhZykge1xuICAgICAgY3VycmVudFBsYXllci5pbm5lclRleHQgPSBgJHtpbnB1dC52YWx1ZX0gaXMgZmlyaW5nYDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBsYXllci5pbm5lclRleHQgPSBgUEMgaXMgZmlyaW5nYDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNoZWNrV2lubmVyID0gKGZsYWcpID0+IHtcbiAgICBpZiAoZmxhZykge1xuICAgICAgY3VycmVudFBsYXllci5pbm5lclRleHQgPSBgJHtpbnB1dC52YWx1ZX0gSEFTIFdPTiAhISEhISBgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVyVGV4dCA9IGBQQyBoYXMgd29uYDtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIHBjRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGl0XCIsIFwibWlzc1wiLCBcImFjdGl2ZVBsYXllclwiKTtcbiAgICB9KTtcbiAgICBwbGF5ZXJFbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRcIiwgXCJsZWdhbFwiLCBcIm1pc3NcIiwgXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgfSk7XG4gICAgc2hpcFNpemUgPSBbNSwgNCwgMywgMywgMl07XG4gIH07XG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICByZXNldCxcbiAgICByb3RhdGlvbixcbiAgICByZW5kZXJQY1NoaXAsXG4gICAgc2hvd0lmTGVnYWwsXG4gICAgbWFya0hpdCxcbiAgICBjaGVja1dpbm5lcixcbiAgICBsb2FkU2hpcCxcbiAgICBkcmFnQW5kRHJvcCxcbiAgICBzd2l0Y2hOYW1lLFxuICAgIGNvbnRyb2xQY1NoaXBWaWV3LFxuICAgIGZpcmluZyxcbiAgfTtcbn0pKCk7XG5leHBvcnRzLmNvbnRyb2xHcmlkID0gY29udHJvbEdyaWQ7XG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCwgc3RhcnRYLCBzdGFydFksIHZlcnRpY2FsID0gZmFsc2UpID0+IHtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGdldFZlcnRpY2FsID0gKCkgPT4gdmVydGljYWw7XG5cbiAgY29uc3QgaGl0ID0gKG51bWJlcikgPT4ge1xuICAgIGhpdHMucHVzaChudW1iZXIpO1xuICB9O1xuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdHMubGVuZ3RoID09PSBnZXRMZW5ndGgoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgaXNIaXQgPSAoeSwgeCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGZhbHNlO1xuICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBpZiAoZVswXSA9PSB5ICYmIGVbMV0gPT0geCkge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuICBjb25zdCBfX3NldENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGlmICh2ZXJ0aWNhbCA9PSBmYWxzZSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzaGlwQ29vcmRpbmF0ZXMucHVzaChbc3RhcnRZLCBzdGFydFggKyBpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3N0YXJ0WSArIGksIHN0YXJ0WF0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgX19zZXRDb29yZGluYXRlcygpO1xuICByZXR1cm4geyBoaXQsIGlzU3VuaywgaGl0cywgc2hpcENvb3JkaW5hdGVzLCBpc0hpdCB9O1xufTtcbmV4cG9ydHMuc2hpcCA9IHNoaXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBcIi4vc2hpcEZhY3RvcnlcIjtcbmltcG9ydCBcIi4vZG9tXCI7XG5pbXBvcnQgXCIuL1BsYXllclwiO1xuXG5jb25zdCB7IGdhbWVCb2FyZCB9ID0gcmVxdWlyZShcIi4vR2FtZWJvYXJkXCIpO1xuY29uc3QgeyBwbGF5ZXIgfSA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IHsgY29udHJvbEdyaWQgfSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcbmNvbnN0IHsgc2hpcCB9ID0gcmVxdWlyZShcIi4vc2hpcEZhY3RvcnlcIik7XG5cbmNvbnN0IGh1bWFuUGxheWVyID0gcGxheWVyKCk7XG5jb25zdCBwY1BsYXllciA9IHBsYXllcigpO1xuXG5jb25zdCBib2FyZCA9IGdhbWVCb2FyZChwY1BsYXllciwgaHVtYW5QbGF5ZXIpO1xuY29uc3QgcGNCb2FyZCA9IGJvYXJkLnBjQm9hcmQ7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IGJvYXJkLnBsYXllckJvYXJkO1xuLy8gcmVtb3ZlIGNsaWNrIGZ1bmN0aW9uIGZyb20gaW5zaWRlIGRvbSB0byBoZXJlXG5ib2FyZC5pbml0KHBjQm9hcmQsIHBsYXllckJvYXJkKTtcbnNldFRpbWVvdXQoKCkgPT4ge1xuICBib2FyZC5yZW5kZXJQY1NoaXAoKTtcbn0sIDUwMCk7XG5wbGF5ZXJCb2FyZC5mb3JFYWNoKChlKSA9PiB7XG4gIGUuZm9yRWFjaCgoYSkgPT4ge1xuICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICBib2FyZC5kcmFnQW5kRHJvcChhKTtcbiAgICB9KTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICBib2FyZC5kcmFnQW5kRHJvcChhLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYm9hcmQubG9hZFBsYXllclNoaXAoYSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5wY0JvYXJkLmZvckVhY2goKGUpID0+IHtcbiAgZS5mb3JFYWNoKChhKSA9PiB7XG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgIGlmIChib2FyZC5nZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgICAgYm9hcmQuc2hvd0xlZ2FsUGNHcmlkKGEsIHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmQuc2hvd0xlZ2FsUGNHcmlkKGEsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBsZW5ndGggPSBib2FyZC5nZXRTaGlwU2l6ZUxlbmd0aCgpO1xuICAgICAgaWYgKFxuICAgICAgICBsZW5ndGggPT0gMCAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGhpdFwiICYmXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgbWlzc1wiICYmXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgaWxsZWdhbFwiICYmXG4gICAgICAgIGEuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyIGhpdCBpbGxlZ2FsXCIgJiZcbiAgICAgICAgYS5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBtaXNzIGlsbGVnYWxcIiAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllciBoaXRcIiAmJlxuICAgICAgICBhLmNsYXNzTmFtZSAhPT0gXCJlbGVtZW50IGFjdGl2ZVBsYXllciBoaXQgbGVnYWxcIiAmJlxuICAgICAgICBib2FyZC5nZXRUdXJuKCkgJSAyID09IDBcbiAgICAgICkge1xuICAgICAgICBib2FyZC5yZWNpZXZlQXR0YWNrKFxuICAgICAgICAgIHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleC1oXCIpKSxcbiAgICAgICAgICBwYXJzZUludChhLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXgtdlwiKSksXG4gICAgICAgICAgYVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9