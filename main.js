/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js"),
    ship = _require.ship;

var _require2 = __webpack_require__(/*! ./dom */ "./src/dom.js"),
    controlGrid = _require2.controlGrid;

var gameBoard = function gameBoard() {
  var shipsPlayerArr = [];
  var shipsPcArr = [];
  var missedPlayerHits = [];
  var missedPcHits = [];
  var turn = 0;

  var getTurn = function getTurn() {
    return turn;
  };

  var setTurn = function setTurn() {
    return turn++;
  };

  var shipSizeIndex = [[5, 0], [4, 6], [3, 24]];
  var newShip;

  var createShip = function createShip() {
    var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    shipSizeIndex.forEach(function (e) {
      newShip = ship(e[0], e[1]);

      if (flag) {
        shipsPlayerArr.push(newShip);
        controlGrid.renderShip(newShip.location(), flag);
      } else {
        shipsPcArr.push(newShip);
        controlGrid.renderShip(newShip.location(), flag);
      }
    });
    return newShip;
  }; // check if any ship has a hit


  var recieveAttack = function recieveAttack(square) {
    if (getTurn() % 2 == 0) {
      var hit = shipsPlayerArr.some(function (e) {
        return e.hit(square);
      });

      if (hit) {
        return true;
      }

      missedPlayerHits.push(square);
      return false;
    } else {
      var _hit = shipsPcArrArr.some(function (e) {
        return e.hit(square);
      });

      if (_hit) {
        return true;
      }

      missedPcHits.push(square);
      return false;
    }
  };

  var allShipsSunk = function allShipsSunk() {
    var sunkPlayerCounter = 0;
    var sunkPcCounter = 0;

    if (getTurn() % 2 == 0) {
      shipsPlayerArr.forEach(function (e) {
        if (e.isSunk()) sunkPlayerCounter++;
      });

      if (sunkPlayerCounter === shipsPlayerArr.length) {
        console.log("all Player ships have been sunk");
        return true;
      }

      return false;
    } else {
      if (getTurn() % 2 == 0) {
        shipsPcArr.forEach(function (e) {
          if (e.isSunk()) sunkPcCounter++;
        });

        if (sunkPcCounter === shipsPcArr.length) {
          console.log("all Pc ships have been sunk");
          return true;
        }

        return false;
      }
    }
  };

  return {
    allShipsSunk: allShipsSunk,
    recieveAttack: recieveAttack,
    createShip: createShip,
    getTurn: getTurn,
    setTurn: setTurn
  };
};

exports.gameBoard = gameBoard;

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ../src/Gameboard */ "./src/Gameboard.js"),
    gameBoard = _require.gameBoard;

var player = function player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "PC";
  // attack, Pc Attack
  var playerHits = [];
  var pcHits = [];

  var returnName = function returnName() {
    return name;
  };

  var attack = function attack(number) {
    if (!playerHits.includes(number)) {
      playerHits.push(number);
      return number;
    }

    return false;
  };

  var pcAttack = function pcAttack() {
    var number = Math.floor(Math.random() * 100);
  };

  return {
    attack: attack,
    pcAttack: pcAttack,
    returnName: returnName
  };
};

exports.player = player;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var _require = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js"),
    gameBoard = _require.gameBoard;

var controlGrid = function () {
  var grid = document.querySelectorAll(".battle-grid");

  var init = function init() {
    var dataIndex = 0;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        grid.forEach(function (e) {
          var elem = document.createElement("div");
          elem.classList.add("element");
          elem.setAttribute("data-index", "".concat(dataIndex));
          e.appendChild(elem);
        });
        dataIndex++;
      }
    }
  };

  var elements = function elements() {
    var humanElemnts = document.querySelectorAll(".grid-container .battle-grid:nth-child(1) .element");
    var pcElements = document.querySelectorAll(".grid-container .battle-grid:nth-child(2) .element ");
    return {
      humanElemnts: humanElemnts,
      pcElements: pcElements
    };
  };

  var renderShip = function renderShip(shipLocation) {
    var playerFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var length = shipLocation.length;
    var shipIndex = shipLocation[0]; // if true render player

    if (playerFlag == true) {
      for (var i = 0; i < length; i++) {
        elements().humanElemnts.item(shipIndex + i).classList.add("activePlayer");
      }
    } else {
      for (var _i = 0; _i < length; _i++) {
        elements().pcElements.item(shipIndex + _i).classList.add("activePlayer");
      }
    }
  };

  var showCurrentPlayer = function showCurrentPlayer() {};

  var hitListen = function hitListen(board) {
    elements().pcElements.forEach(function (e) {
      e.addEventListener("click", function (e) {
        if (board.getTurn() % 2 == 0) {
          if (humanGameboard.recieveAttack(e.target.getAttribute("data-index"))) {
            e.target.classList.add("hit");
            board.setTurn();
          } else {
            e.target.classList.add("miss");
            board.setTurn();
          }
        }

        if (board.getTurn() % 2 == 1) {
          if (pcGameBoard.recieveAttack(e.target.getAttribute("data-index"))) {
            e.target.classList.add("hit");
            board.setTurn();
          } else {
            e.target.classList.add("miss");
            board.setTurn();
          }
        }
      });
    });
  };

  return {
    init: init,
    renderShip: renderShip,
    hitListen: hitListen
  };
}();

exports.controlGrid = controlGrid;

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

var ship = function ship(length, startSquare) {
  var hitSquares = [];
  var shipLocation = []; // return length

  var returnlength = function returnlength() {
    return length;
  }; // add horizontal coordinates


  var __setCoordinates = function __setCoordinates() {
    for (var i = 0; i < length; i++) {
      shipLocation.push(startSquare + i);
    }
  }; // return location of ship


  var location = function location() {
    return shipLocation;
  };

  var hit = function hit(number) {
    if (shipLocation.includes(number) === true) {
      hitSquares.push(number);
      return true;
    }

    return false;
  };

  var isSunk = function isSunk() {
    if (hitSquares.length === length) {
      return true;
    }

    return false;
  };

  __setCoordinates(startSquare);

  return {
    hitSquares: hitSquares,
    shipLocation: shipLocation,
    hit: hit,
    isSunk: isSunk,
    location: location,
    returnlength: returnlength
  };
};

exports.ship = ship;

/***/ }),

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsla(0, 6%, 90%, 0.363);\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 45rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 20rem;\n  height: 20rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.element {\n  border: 1px solid black;\n}\n.activePlayer {\n  background: rgb(195, 170, 170);\n}\n.hit {\n  background: green;\n}\n.miss {\n  background: rgb(233, 15, 15);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;AACA;EACE,uBAAuB;AACzB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,4BAA4B;AAC9B","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsla(0, 6%, 90%, 0.363);\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 45rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 20rem;\n  height: 20rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.element {\n  border: 1px solid black;\n}\n.activePlayer {\n  background: rgb(195, 170, 170);\n}\n.hit {\n  background: green;\n}\n.miss {\n  background: rgb(233, 15, 15);\n}\n"],"sourceRoot":""}]);
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


var _require = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js"),
    ship = _require.ship;

var _require2 = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js"),
    gameBoard = _require2.gameBoard;

var _require3 = __webpack_require__(/*! ./Player */ "./src/Player.js"),
    player = _require3.player;

var _require4 = __webpack_require__(/*! ./dom */ "./src/dom.js"),
    controlGrid = _require4.controlGrid; // TODO: player name;


var humanPlayer = player("Ibrahim");
var pcPlayer = player();
var board = gameBoard(); // create a grid

controlGrid.init();
var humanShip = board.createShip();
var pcShip = board.createShip(false);
controlGrid.hitListen(board);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ujs7QUFDQSxnQkFBd0JqQyxtQkFBTyxDQUFDLDJCQUFELENBQS9CO0FBQUEsSUFBUUUsV0FBUixhQUFRQSxXQUFSLEVBRUE7OztBQUNBLElBQU0yRSxXQUFXLEdBQUc1QyxNQUFNLENBQUMsU0FBRCxDQUExQjtBQUNBLElBQU02QyxRQUFRLEdBQUc3QyxNQUFNLEVBQXZCO0FBRUEsSUFBTWtDLEtBQUssR0FBR2hFLFNBQVMsRUFBdkIsRUFDQTs7QUFDQUQsV0FBVyxDQUFDOEMsSUFBWjtBQUNBLElBQU0rQixTQUFTLEdBQUdaLEtBQUssQ0FBQ3RELFVBQU4sRUFBbEI7QUFDQSxJQUFNbUUsTUFBTSxHQUFHYixLQUFLLENBQUN0RCxVQUFOLENBQWlCLEtBQWpCLENBQWY7QUFFQVgsV0FBVyxDQUFDZ0UsU0FBWixDQUFzQkMsS0FBdEIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBGYWN0b3J5XCIpO1xuY29uc3QgeyBjb250cm9sR3JpZCB9ID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuXG5jb25zdCBnYW1lQm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBzUGxheWVyQXJyID0gW107XG4gIGNvbnN0IHNoaXBzUGNBcnIgPSBbXTtcbiAgY29uc3QgbWlzc2VkUGxheWVySGl0cyA9IFtdO1xuICBjb25zdCBtaXNzZWRQY0hpdHMgPSBbXTtcbiAgbGV0IHR1cm4gPSAwO1xuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBzZXRUdXJuID0gKCkgPT4gdHVybisrO1xuXG4gIGNvbnN0IHNoaXBTaXplSW5kZXggPSBbXG4gICAgWzUsIDBdLFxuICAgIFs0LCA2XSxcbiAgICBbMywgMjRdLFxuICBdO1xuICBsZXQgbmV3U2hpcDtcblxuICBjb25zdCBjcmVhdGVTaGlwID0gKGZsYWcgPSB0cnVlKSA9PiB7XG4gICAgc2hpcFNpemVJbmRleC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBuZXdTaGlwID0gc2hpcChlWzBdLCBlWzFdKTtcbiAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgIHNoaXBzUGxheWVyQXJyLnB1c2gobmV3U2hpcCk7XG4gICAgICAgIGNvbnRyb2xHcmlkLnJlbmRlclNoaXAobmV3U2hpcC5sb2NhdGlvbigpLCBmbGFnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzUGNBcnIucHVzaChuZXdTaGlwKTtcbiAgICAgICAgY29udHJvbEdyaWQucmVuZGVyU2hpcChuZXdTaGlwLmxvY2F0aW9uKCksIGZsYWcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBuZXdTaGlwO1xuICB9O1xuXG4gIC8vIGNoZWNrIGlmIGFueSBzaGlwIGhhcyBhIGhpdFxuICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHNxdWFyZSkgPT4ge1xuICAgIGlmIChnZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXBzUGxheWVyQXJyLnNvbWUoKGUpID0+IGUuaGl0KHNxdWFyZSkpO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG1pc3NlZFBsYXllckhpdHMucHVzaChzcXVhcmUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBoaXQgPSBzaGlwc1BjQXJyQXJyLnNvbWUoKGUpID0+IGUuaGl0KHNxdWFyZSkpO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG1pc3NlZFBjSGl0cy5wdXNoKHNxdWFyZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3Vua1BsYXllckNvdW50ZXIgPSAwO1xuICAgIGxldCBzdW5rUGNDb3VudGVyID0gMDtcbiAgICBpZiAoZ2V0VHVybigpICUgMiA9PSAwKSB7XG4gICAgICBzaGlwc1BsYXllckFyci5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmlzU3VuaygpKSBzdW5rUGxheWVyQ291bnRlcisrO1xuICAgICAgfSk7XG4gICAgICBpZiAoc3Vua1BsYXllckNvdW50ZXIgPT09IHNoaXBzUGxheWVyQXJyLmxlbmd0aCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBQbGF5ZXIgc2hpcHMgaGF2ZSBiZWVuIHN1bmtcIik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZ2V0VHVybigpICUgMiA9PSAwKSB7XG4gICAgICAgIHNoaXBzUGNBcnIuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmlzU3VuaygpKSBzdW5rUGNDb3VudGVyKys7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc3Vua1BjQ291bnRlciA9PT0gc2hpcHNQY0Fyci5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImFsbCBQYyBzaGlwcyBoYXZlIGJlZW4gc3Vua1wiKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxsU2hpcHNTdW5rLFxuICAgIHJlY2lldmVBdHRhY2ssXG4gICAgY3JlYXRlU2hpcCxcbiAgICBnZXRUdXJuLFxuICAgIHNldFR1cm4sXG4gIH07XG59O1xuZXhwb3J0cy5nYW1lQm9hcmQgPSBnYW1lQm9hcmQ7XG4iLCJjb25zdCB7IGdhbWVCb2FyZCB9ID0gcmVxdWlyZShcIi4uL3NyYy9HYW1lYm9hcmRcIik7XG5jb25zdCBwbGF5ZXIgPSAobmFtZSA9IFwiUENcIikgPT4ge1xuICAvLyBhdHRhY2ssIFBjIEF0dGFja1xuICBjb25zdCBwbGF5ZXJIaXRzID0gW107XG4gIGNvbnN0IHBjSGl0cyA9IFtdO1xuXG4gIGNvbnN0IHJldHVybk5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIGNvbnN0IGF0dGFjayA9IChudW1iZXIpID0+IHtcbiAgICBpZiAoIXBsYXllckhpdHMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgcGxheWVySGl0cy5wdXNoKG51bWJlcik7XG4gICAgICByZXR1cm4gbnVtYmVyO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgcGNBdHRhY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGF0dGFjayxcbiAgICBwY0F0dGFjayxcbiAgICByZXR1cm5OYW1lLFxuICB9O1xufTtcbmV4cG9ydHMucGxheWVyID0gcGxheWVyO1xuIiwiY29uc3QgeyBnYW1lQm9hcmQgfSA9IHJlcXVpcmUoXCIuL0dhbWVib2FyZFwiKTtcblxuY29uc3QgY29udHJvbEdyaWQgPSAoKCkgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5iYXR0bGUtZ3JpZFwiKTtcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBsZXQgZGF0YUluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBncmlkLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xuICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBgJHtkYXRhSW5kZXh9YCk7XG4gICAgICAgICAgZS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRhdGFJbmRleCsrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgZWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgaHVtYW5FbGVtbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdyaWQtY29udGFpbmVyIC5iYXR0bGUtZ3JpZDpudGgtY2hpbGQoMSkgLmVsZW1lbnRcIlxuICAgICk7XG4gICAgY29uc3QgcGNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcIi5ncmlkLWNvbnRhaW5lciAuYmF0dGxlLWdyaWQ6bnRoLWNoaWxkKDIpIC5lbGVtZW50IFwiXG4gICAgKTtcbiAgICByZXR1cm4geyBodW1hbkVsZW1udHMsIHBjRWxlbWVudHMgfTtcbiAgfTtcbiAgY29uc3QgcmVuZGVyU2hpcCA9IChzaGlwTG9jYXRpb24sIHBsYXllckZsYWcgPSB0cnVlKSA9PiB7XG4gICAgbGV0IGxlbmd0aCA9IHNoaXBMb2NhdGlvbi5sZW5ndGg7XG4gICAgbGV0IHNoaXBJbmRleCA9IHNoaXBMb2NhdGlvblswXTtcbiAgICAvLyBpZiB0cnVlIHJlbmRlciBwbGF5ZXJcbiAgICBpZiAocGxheWVyRmxhZyA9PSB0cnVlKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGVsZW1lbnRzKClcbiAgICAgICAgICAuaHVtYW5FbGVtbnRzLml0ZW0oc2hpcEluZGV4ICsgaSlcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVBsYXllclwiKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBlbGVtZW50cygpXG4gICAgICAgICAgLnBjRWxlbWVudHMuaXRlbShzaGlwSW5kZXggKyBpKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUGxheWVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2hvd0N1cnJlbnRQbGF5ZXIgPSAoKSA9PiB7fTtcbiAgY29uc3QgaGl0TGlzdGVuID0gKGJvYXJkKSA9PiB7XG4gICAgZWxlbWVudHMoKS5wY0VsZW1lbnRzLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChib2FyZC5nZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBodW1hbkdhbWVib2FyZC5yZWNpZXZlQXR0YWNrKFxuICAgICAgICAgICAgICBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgYm9hcmQuc2V0VHVybigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgICAgICAgIGJvYXJkLnNldFR1cm4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvYXJkLmdldFR1cm4oKSAlIDIgPT0gMSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBjR2FtZUJvYXJkLnJlY2lldmVBdHRhY2soXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgICAgICBib2FyZC5zZXRUdXJuKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJtaXNzXCIpO1xuICAgICAgICAgICAgYm9hcmQuc2V0VHVybigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IGluaXQsIHJlbmRlclNoaXAsIGhpdExpc3RlbiB9O1xufSkoKTtcbmV4cG9ydHMuY29udHJvbEdyaWQgPSBjb250cm9sR3JpZDtcbiIsImNvbnN0IHNoaXAgPSAobGVuZ3RoLCBzdGFydFNxdWFyZSkgPT4ge1xuICBjb25zdCBoaXRTcXVhcmVzID0gW107XG4gIGNvbnN0IHNoaXBMb2NhdGlvbiA9IFtdO1xuXG4gIC8vIHJldHVybiBsZW5ndGhcbiAgY29uc3QgcmV0dXJubGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIC8vIGFkZCBob3Jpem9udGFsIGNvb3JkaW5hdGVzXG4gIGNvbnN0IF9fc2V0Q29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2hpcExvY2F0aW9uLnB1c2goc3RhcnRTcXVhcmUgKyBpKTtcbiAgICB9XG4gIH07XG4gIC8vIHJldHVybiBsb2NhdGlvbiBvZiBzaGlwXG4gIGNvbnN0IGxvY2F0aW9uID0gKCkgPT4gc2hpcExvY2F0aW9uO1xuXG4gIGNvbnN0IGhpdCA9IChudW1iZXIpID0+IHtcbiAgICBpZiAoc2hpcExvY2F0aW9uLmluY2x1ZGVzKG51bWJlcikgPT09IHRydWUpIHtcbiAgICAgIGhpdFNxdWFyZXMucHVzaChudW1iZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdFNxdWFyZXMubGVuZ3RoID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgX19zZXRDb29yZGluYXRlcyhzdGFydFNxdWFyZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBoaXRTcXVhcmVzLFxuICAgIHNoaXBMb2NhdGlvbixcbiAgICBoaXQsXG4gICAgaXNTdW5rLFxuICAgIGxvY2F0aW9uLFxuICAgIHJldHVybmxlbmd0aCxcbiAgfTtcbn07XG5leHBvcnRzLnNoaXAgPSBzaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogaHNsYSgwLCA2JSwgOTAlLCAwLjM2Myk7XFxufVxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiA0NXJlbTtcXG59XFxuLmJhdHRsZS1ncmlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uZWxlbWVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmFjdGl2ZVBsYXllciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxNzAsIDE3MCk7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyMzMsIDE1LCAxNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsNEJBQTRCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDYlLCA5MCUsIDAuMzYzKTtcXG59XFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDQ1cmVtO1xcbn1cXG4uYmF0dGxlLWdyaWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5lbGVtZW50IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4uYWN0aXZlUGxheWVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTUsIDE3MCwgMTcwKTtcXG59XFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG59XFxuLm1pc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiKDIzMywgMTUsIDE1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3QgeyBzaGlwIH0gPSByZXF1aXJlKFwiLi9zaGlwRmFjdG9yeVwiKTtcbmNvbnN0IHsgZ2FtZUJvYXJkIH0gPSByZXF1aXJlKFwiLi9HYW1lYm9hcmRcIik7XG5jb25zdCB7IHBsYXllciB9ID0gcmVxdWlyZShcIi4vUGxheWVyXCIpO1xuY29uc3QgeyBjb250cm9sR3JpZCB9ID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuXG4vLyBUT0RPOiBwbGF5ZXIgbmFtZTtcbmNvbnN0IGh1bWFuUGxheWVyID0gcGxheWVyKFwiSWJyYWhpbVwiKTtcbmNvbnN0IHBjUGxheWVyID0gcGxheWVyKCk7XG5cbmNvbnN0IGJvYXJkID0gZ2FtZUJvYXJkKCk7XG4vLyBjcmVhdGUgYSBncmlkXG5jb250cm9sR3JpZC5pbml0KCk7XG5jb25zdCBodW1hblNoaXAgPSBib2FyZC5jcmVhdGVTaGlwKCk7XG5jb25zdCBwY1NoaXAgPSBib2FyZC5jcmVhdGVTaGlwKGZhbHNlKTtcblxuY29udHJvbEdyaWQuaGl0TGlzdGVuKGJvYXJkKTtcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic2hpcCIsImNvbnRyb2xHcmlkIiwiZ2FtZUJvYXJkIiwic2hpcHNQbGF5ZXJBcnIiLCJzaGlwc1BjQXJyIiwibWlzc2VkUGxheWVySGl0cyIsIm1pc3NlZFBjSGl0cyIsInR1cm4iLCJnZXRUdXJuIiwic2V0VHVybiIsInNoaXBTaXplSW5kZXgiLCJuZXdTaGlwIiwiY3JlYXRlU2hpcCIsImZsYWciLCJmb3JFYWNoIiwiZSIsInB1c2giLCJyZW5kZXJTaGlwIiwibG9jYXRpb24iLCJyZWNpZXZlQXR0YWNrIiwic3F1YXJlIiwiaGl0Iiwic29tZSIsInNoaXBzUGNBcnJBcnIiLCJhbGxTaGlwc1N1bmsiLCJzdW5rUGxheWVyQ291bnRlciIsInN1bmtQY0NvdW50ZXIiLCJpc1N1bmsiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsInBsYXllciIsIm5hbWUiLCJwbGF5ZXJIaXRzIiwicGNIaXRzIiwicmV0dXJuTmFtZSIsImF0dGFjayIsIm51bWJlciIsImluY2x1ZGVzIiwicGNBdHRhY2siLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJncmlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5pdCIsImRhdGFJbmRleCIsImkiLCJqIiwiZWxlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnRzIiwiaHVtYW5FbGVtbnRzIiwicGNFbGVtZW50cyIsInNoaXBMb2NhdGlvbiIsInBsYXllckZsYWciLCJzaGlwSW5kZXgiLCJpdGVtIiwic2hvd0N1cnJlbnRQbGF5ZXIiLCJoaXRMaXN0ZW4iLCJib2FyZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJodW1hbkdhbWVib2FyZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInBjR2FtZUJvYXJkIiwic3RhcnRTcXVhcmUiLCJoaXRTcXVhcmVzIiwicmV0dXJubGVuZ3RoIiwiX19zZXRDb29yZGluYXRlcyIsImh1bWFuUGxheWVyIiwicGNQbGF5ZXIiLCJodW1hblNoaXAiLCJwY1NoaXAiXSwic291cmNlUm9vdCI6IiJ9