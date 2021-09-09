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

var gameBoard = function gameBoard(player, pc) {
  var shipsPlayerArr = [];
  var shipsPcArr = [];
  var missedPlayerHits = [];
  var missedPcHits = [];
  var turn = 0;

  var getPlayer = function getPlayer() {
    return player;
  };

  var getPc = function getPc() {
    return pc;
  };

  var getTurn = function getTurn() {
    return turn;
  };

  var setTurn = function setTurn() {
    return turn++;
  };

  var newShip;
  var shipSize = [5, 4, 3, 3, 2]; // check if any ship has a hit

  var recieveAttack = function recieveAttack(square) {
    square = parseInt(square);

    if (getTurn() % 2 == 0) {
      var hit = shipsPcArr.some(function (e) {
        return e.hit(square);
      });

      if (hit) {
        return true;
      }

      missedPlayerHits.push(square);
      return false;
    } else {
      var _hit = shipsPlayerArr.some(function (e) {
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
        return true;
      }

      return false;
    } else {
      if (getTurn() % 2 == 1) {
        shipsPcArr.forEach(function (e) {
          if (e.isSunk()) sunkPcCounter++;
        });

        if (sunkPcCounter === shipsPcArr.length) {
          return true;
        }

        return false;
      }
    }
  };

  var resetBoard = function resetBoard() {
    shipsPcArr.length = 0;
    shipsPlayerArr.length = 0;
    missedPlayerHits.length = 0;
    missedPcHits.length = 0;
    turn = 0;
  };

  return {
    allShipsSunk: allShipsSunk,
    recieveAttack: recieveAttack,
    getTurn: getTurn,
    setTurn: setTurn,
    getPlayer: getPlayer,
    getPc: getPc,
    resetBoard: resetBoard
  };
};

exports.gameBoard = gameBoard;

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

var player = function player() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "PC";
  // attack, Pc Attack
  var playerHits = [];
  var playerShips = [];
  var randomNumber;

  var returnNum = function returnNum() {
    return randomNumber;
  };

  var attack = function attack(elements) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var board = arguments.length > 2 ? arguments[2] : undefined;
    var number = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;

    if (flag) {
      if (!playerHits.includes(number)) {
        playerHits.push(number);
        return number;
      }

      return false;
    } else {
      var hit = false;

      while (hit == false) {
        randomNumber = Math.floor(Math.random() * 100) + 1;

        if (!playerHits.includes(randomNumber)) {
          playerHits.push(randomNumber);
          hit = true;
          return randomNumber;
        }
      }
    }
  };

  return {
    attack: attack,
    returnNum: returnNum
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
  var playerNameForm = document.forms["playerName"];
  var arr = [];
  var value;

  var __modalControl = function __modalControl() {
    playerNameForm.addEventListener("submit", function (e) {
      value = playerNameForm.querySelector("input").value;
      e.preventDefault();

      __takeName();

      __switchPlayer();
    });
  };

  var init = function init() {
    __modalControl();

    for (var i = 0; i < 10; i++) {
      var _loop = function _loop(j) {
        grid.forEach(function (e) {
          var elem = document.createElement("div");
          elem.classList.add("element");
          elem.setAttribute("data-index", "".concat(j));
          e.appendChild(elem);
        });
      };

      for (var j = 0; j < 10; j++) {
        _loop(j);
      }
    }

    listeners();
  };

  var elements = function elements() {
    var playerElements = document.querySelectorAll(".grid-container .battle-grid:nth-child(1) .element");
    var pcElements = document.querySelectorAll(".grid-container .battle-grid:nth-child(2) .element ");
    return {
      playerElements: playerElements,
      pcElements: pcElements
    };
  };

  var listeners = function listeners() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    elements().playerElements.forEach(function (e) {
      e.addEventListener("mouseover", function () {
        __showLegalMove(e, size);
      });
      e.addEventListener("mouseout", function () {
        __showLegalMove(e, size, false);
      });
      e.addEventListener("click", function () {
        __printShipOnScreen(e, size);
      });
    });
  };

  var __showLegalMove = function __showLegalMove(e, size) {
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var LAST_NUMBER = 10;
    var target = e;
    var nextTarget;
    var lastTarget;

    for (var i = 0; i < size; i++) {
      nextTarget = target.nextSibling;
      arr.push(target);
      lastTarget = arr[arr.length - 1];
      target = nextTarget;
    }

    var lastTargetvalue = parseInt(lastTarget.getAttribute("data-index"));
    var targetValue = parseInt(e.getAttribute("data-index")); // check if e is on an already placed ship

    var rule = function rule() {
      return e.className != "element activePlayer";
    };

    var legalPlacement = arr.every(rule);

    if (lastTargetvalue == LAST_NUMBER || targetValue > lastTargetvalue || legalPlacement == false) {
      e.classList.add("illegal");
    } else {
      arr.forEach(function (s) {
        s.classList.add("legal");
      });
    }

    if (!flag) {
      arr.forEach(function (a) {
        a.classList.remove("legal");
        a.classList.remove("illegal");
      });
      arr.length = 0;
    }
  };

  var __printShipOnScreen = function __printShipOnScreen(e, size) {
    var rule = function rule() {
      if (e.className == "element legal") {
        return true;
      } else {
        return false;
      }
    };

    var legalPlacement = arr.every(rule);

    if (legalPlacement) {
      var target = e;
      var nextTarget;

      for (var i = 0; i < size; i++) {
        target.classList.add("activePlayer");
        nextTarget = target.nextSibling;
        target = nextTarget;
      }
    }
  }; // listen to enemy board, if current playerTurn, if grid not hit, hit


  var hitControl = function hitControl(board) {
    elements().pcElements.forEach(function (e) {
      e.addEventListener("click", function (e) {
        if (board.getTurn() % 2 == 0) {
          if (e.target.className !== "element activePlayer hit" || e.target.className !== "element miss") {
            if (board.recieveAttack(e.target.getAttribute("data-index"))) {
              markHit(e, true, board);

              if (board.allShipsSunk()) {
                checkWinner(0);

                __reset(board);
              }
            } else {
              markHit(e, false, board);
            }
          }
        }

        if (board.getTurn() % 2 == 1) {
          // change turns to pc
          if (board.recieveAttack(board.getPc().attack(elements().playerElements, false))) {
            markPcHit(board.getPc().returnNum(), true, board);

            if (board.allShipsSunk()) {
              checkWinner(1);

              __reset(board);
            }
          } else {
            markPcHit(board.getPc().returnNum(), false, board);
          }
        }
      });
    });
  }; // mark grid as hit and switchplayer


  var markHit = function markHit(e) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var board = arguments.length > 2 ? arguments[2] : undefined;
    // if player attack
    e.target.classList.remove("legal");

    if (board.getTurn() % 2 == 0) {
      // if hit ship
      if (flag) {
        e.target.classList.add("hit");
        board.setTurn();

        __switchPlayer(board.getTurn()); // if player miss

      } else {
        e.target.classList.add("element", "miss");
        board.setTurn();

        __switchPlayer(board.getTurn());
      }
    }
  };

  var markPcHit = function markPcHit(number, flag, board) {
    if (flag) {
      elements().playerElements.item(number).classList.add("hit");
      board.setTurn();

      __switchPlayer(board.getTurn());
    } else {
      elements().playerElements.item(number).classList.add("miss");
      board.setTurn();

      __switchPlayer(board.getTurn());
    }
  };

  var checkWinner = function checkWinner(number) {
    if (number === 1) {
      console.log("".concat(value, " won the game"));
      return true;
    }

    if (number === 0) {
      console.log("Computer won the game");
      return true;
    }
  };

  var __takeName = function __takeName() {
    var modelContainer = document.querySelector(".modal-container");
    modelContainer.classList.toggle("modal-container");
    modelContainer.classList.toggle("modal-container-hidden");
  };

  var __switchPlayer = function __switchPlayer() {
    var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var currentPlayer = document.querySelector(".currentPlayer");

    if (number % 2 == 0) {
      // todo: finsih player attack
      grid[1].classList.remove("battle-grid-off");
      currentPlayer.innerHTML = "Current Player is ".concat(value);
    } else {
      // todo: finish pc attack
      grid[1].classList.add("battle-grid-off");
      currentPlayer.innerHTML = "Current Player is: PC";
    }
  };

  var __reset = function __reset(board) {
    __modalControl();

    init();
    board.resetBoard();
  };

  return {
    init: init,
    hitControl: hitControl,
    markPcHit: markPcHit,
    listeners: listeners
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsla(0, 6%, 90%, 0.363);\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 45rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 20rem;\n  height: 20rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n}\n.illegal {\n  background: red;\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(195, 170, 170);\n}\n.hit {\n  background: green;\n}\n.miss {\n  background: rgb(243, 111, 3);\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Oswald\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: visible;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1rem 2rem;\n  color: white;\n  border: none;\n  outline: none;\n  background-color: hsla(202, 93%, 23%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,mCAAmC;AACrC;AACA;EACE,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,4BAA4B;AAC9B;AACA;EACE,eAAe;EACf,WAAW;EACX,aAAa;EACb,MAAM;EACN,OAAO;EACP,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iCAAiC;EACjC,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,2CAA2C;EAC3C,UAAU;EACV,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;AACA;EACE,sBAAsB;EACtB,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,4CAA4C;AAC9C;AACA;EACE,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@400;500&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  background: hsla(0, 6%, 90%, 0.363);\n}\nh1 {\n  font-size: 4rem;\n  letter-spacing: 2px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n}\n.container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n.grid-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40rem;\n  width: 45rem;\n}\n.battle-grid {\n  border: 1px solid black;\n  width: 20rem;\n  height: 20rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  cursor: pointer;\n}\n.battle-grid-off {\n  cursor: not-allowed;\n}\n.element {\n  border: 1px solid black;\n}\n.legal {\n  background: rgb(140, 248, 146);\n}\n.illegal {\n  background: red;\n  cursor: not-allowed;\n}\n.activePlayer {\n  background: rgb(195, 170, 170);\n}\n.hit {\n  background: green;\n}\n.miss {\n  background: rgb(243, 111, 3);\n}\n.modal-container {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Oswald\", sans-serif;\n  color: rgb(57, 90, 119);\n  visibility: visible;\n}\n.modal-container-hidden {\n  visibility: hidden;\n  opacity: 1;\n}\n.modal {\n  background-color: rgba(84, 197, 250, 0.945);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n  font-size: 2rem;\n  letter-spacing: 1px;\n  font-weight: 400;\n  font-family: \"Oswald\", sans-serif;\n}\ninput {\n  padding: 0.6rem 0.4rem;\n  outline: none;\n}\nbutton {\n  padding: 1rem 2rem;\n  color: white;\n  border: none;\n  outline: none;\n  background-color: hsla(202, 93%, 23%, 0.959);\n}\nbutton:hover {\n  padding: 1.2rem 2.2rem;\n}\n"],"sourceRoot":""}]);
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


var _require = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js"),
    gameBoard = _require.gameBoard;

var _require2 = __webpack_require__(/*! ./Player */ "./src/Player.js"),
    player = _require2.player;

var _require3 = __webpack_require__(/*! ./dom */ "./src/dom.js"),
    controlGrid = _require3.controlGrid; // TODO: player name;


var humanPlayer = player("Ibrahim");
var pcPlayer = player();
var board = gameBoard(humanPlayer, pcPlayer); // create a grid

controlGrid.init(); // create player ship
// listen to board

controlGrid.hitControl(board); // TODO: implement reset,
// TODO: drag and drop,
// TODO: fix spaghetti code with pen and paper
// TODO: testing
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFDQSxlQUFzQkQsbUJBQU8sQ0FBQyx1Q0FBRCxDQUE3QjtBQUFBLElBQVFHLFNBQVIsWUFBUUEsU0FBUjs7QUFDQSxnQkFBbUJILG1CQUFPLENBQUMsaUNBQUQsQ0FBMUI7QUFBQSxJQUFRSSxNQUFSLGFBQVFBLE1BQVI7O0FBQ0EsZ0JBQXdCSixtQkFBTyxDQUFDLDJCQUFELENBQS9CO0FBQUEsSUFBUUUsV0FBUixhQUFRQSxXQUFSLEVBRUE7OztBQUNBLElBQU0wRyxXQUFXLEdBQUd4RyxNQUFNLENBQUMsU0FBRCxDQUExQjtBQUNBLElBQU15RyxRQUFRLEdBQUd6RyxNQUFNLEVBQXZCO0FBRUEsSUFBTW9DLEtBQUssR0FBR3JDLFNBQVMsQ0FBQ3lHLFdBQUQsRUFBY0MsUUFBZCxDQUF2QixFQUNBOztBQUNBM0csV0FBVyxDQUFDMEQsSUFBWixJQUNBO0FBQ0E7O0FBQ0ExRCxXQUFXLENBQUN3RixVQUFaLENBQXVCbEQsS0FBdkIsR0FDQTtBQUNBO0FBQ0E7QUFDQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHNoaXAgfSA9IHJlcXVpcmUoXCIuL3NoaXBGYWN0b3J5XCIpO1xuY29uc3QgeyBjb250cm9sR3JpZCB9ID0gcmVxdWlyZShcIi4vZG9tXCIpO1xuXG5jb25zdCBnYW1lQm9hcmQgPSAocGxheWVyLCBwYykgPT4ge1xuICBjb25zdCBzaGlwc1BsYXllckFyciA9IFtdO1xuICBjb25zdCBzaGlwc1BjQXJyID0gW107XG5cbiAgY29uc3QgbWlzc2VkUGxheWVySGl0cyA9IFtdO1xuICBjb25zdCBtaXNzZWRQY0hpdHMgPSBbXTtcblxuICBsZXQgdHVybiA9IDA7XG5cbiAgY29uc3QgZ2V0UGxheWVyID0gKCkgPT4gcGxheWVyO1xuICBjb25zdCBnZXRQYyA9ICgpID0+IHBjO1xuXG4gIGNvbnN0IGdldFR1cm4gPSAoKSA9PiB0dXJuO1xuICBjb25zdCBzZXRUdXJuID0gKCkgPT4gdHVybisrO1xuXG4gIGxldCBuZXdTaGlwO1xuICBsZXQgc2hpcFNpemUgPSBbNSwgNCwgMywgMywgMl07XG5cbiAgLy8gY2hlY2sgaWYgYW55IHNoaXAgaGFzIGEgaGl0XG4gIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoc3F1YXJlKSA9PiB7XG4gICAgc3F1YXJlID0gcGFyc2VJbnQoc3F1YXJlKTtcblxuICAgIGlmIChnZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXBzUGNBcnIuc29tZSgoZSkgPT4gZS5oaXQoc3F1YXJlKSk7XG4gICAgICBpZiAoaGl0KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbWlzc2VkUGxheWVySGl0cy5wdXNoKHNxdWFyZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGhpdCA9IHNoaXBzUGxheWVyQXJyLnNvbWUoKGUpID0+IGUuaGl0KHNxdWFyZSkpO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG1pc3NlZFBjSGl0cy5wdXNoKHNxdWFyZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICBsZXQgc3Vua1BsYXllckNvdW50ZXIgPSAwO1xuICAgIGxldCBzdW5rUGNDb3VudGVyID0gMDtcbiAgICBpZiAoZ2V0VHVybigpICUgMiA9PSAwKSB7XG4gICAgICBzaGlwc1BsYXllckFyci5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmlzU3VuaygpKSBzdW5rUGxheWVyQ291bnRlcisrO1xuICAgICAgfSk7XG4gICAgICBpZiAoc3Vua1BsYXllckNvdW50ZXIgPT09IHNoaXBzUGxheWVyQXJyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGdldFR1cm4oKSAlIDIgPT0gMSkge1xuICAgICAgICBzaGlwc1BjQXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5pc1N1bmsoKSkgc3Vua1BjQ291bnRlcisrO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHN1bmtQY0NvdW50ZXIgPT09IHNoaXBzUGNBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBzaGlwc1BjQXJyLmxlbmd0aCA9IDA7XG4gICAgc2hpcHNQbGF5ZXJBcnIubGVuZ3RoID0gMDtcbiAgICBtaXNzZWRQbGF5ZXJIaXRzLmxlbmd0aCA9IDA7XG4gICAgbWlzc2VkUGNIaXRzLmxlbmd0aCA9IDA7XG5cbiAgICB0dXJuID0gMDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFsbFNoaXBzU3VuayxcbiAgICByZWNpZXZlQXR0YWNrLFxuICAgIGdldFR1cm4sXG4gICAgc2V0VHVybixcbiAgICBnZXRQbGF5ZXIsXG4gICAgZ2V0UGMsXG4gICAgcmVzZXRCb2FyZCxcbiAgfTtcbn07XG5leHBvcnRzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiIsImNvbnN0IHBsYXllciA9IChuYW1lID0gXCJQQ1wiKSA9PiB7XG4gIC8vIGF0dGFjaywgUGMgQXR0YWNrXG4gIGNvbnN0IHBsYXllckhpdHMgPSBbXTtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBbXTtcblxuICBsZXQgcmFuZG9tTnVtYmVyO1xuXG4gIGNvbnN0IHJldHVybk51bSA9ICgpID0+IHJhbmRvbU51bWJlcjtcblxuICBjb25zdCBhdHRhY2sgPSAoXG4gICAgZWxlbWVudHMsXG4gICAgZmxhZyA9IHRydWUsXG4gICAgYm9hcmQsXG4gICAgbnVtYmVyID0gdW5kZWZpbmVkXG4gICkgPT4ge1xuICAgIGlmIChmbGFnKSB7XG4gICAgICBpZiAoIXBsYXllckhpdHMuaW5jbHVkZXMobnVtYmVyKSkge1xuICAgICAgICBwbGF5ZXJIaXRzLnB1c2gobnVtYmVyKTtcbiAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGhpdCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKGhpdCA9PSBmYWxzZSkge1xuICAgICAgICByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApICsgMTtcbiAgICAgICAgaWYgKCFwbGF5ZXJIaXRzLmluY2x1ZGVzKHJhbmRvbU51bWJlcikpIHtcbiAgICAgICAgICBwbGF5ZXJIaXRzLnB1c2gocmFuZG9tTnVtYmVyKTtcbiAgICAgICAgICBoaXQgPSB0cnVlO1xuICAgICAgICAgIHJldHVybiByYW5kb21OdW1iZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgYXR0YWNrLFxuICAgIHJldHVybk51bSxcbiAgfTtcbn07XG5leHBvcnRzLnBsYXllciA9IHBsYXllcjtcbiIsImNvbnN0IHsgZ2FtZUJvYXJkIH0gPSByZXF1aXJlKFwiLi9HYW1lYm9hcmRcIik7XG5jb25zdCBjb250cm9sR3JpZCA9ICgoKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhdHRsZS1ncmlkXCIpO1xuICBjb25zdCBwbGF5ZXJOYW1lRm9ybSA9IGRvY3VtZW50LmZvcm1zW1wicGxheWVyTmFtZVwiXTtcbiAgbGV0IGFyciA9IFtdO1xuICBsZXQgdmFsdWU7XG5cbiAgY29uc3QgX19tb2RhbENvbnRyb2wgPSAoKSA9PiB7XG4gICAgcGxheWVyTmFtZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgdmFsdWUgPSBwbGF5ZXJOYW1lRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWU7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfX3Rha2VOYW1lKCk7XG4gICAgICBfX3N3aXRjaFBsYXllcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgX19tb2RhbENvbnRyb2woKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBncmlkLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xuICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBgJHtqfWApO1xuICAgICAgICAgIGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0ZW5lcnMoKTtcbiAgfTtcbiAgY29uc3QgZWxlbWVudHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgXCIuZ3JpZC1jb250YWluZXIgLmJhdHRsZS1ncmlkOm50aC1jaGlsZCgxKSAuZWxlbWVudFwiXG4gICAgKTtcbiAgICBjb25zdCBwY0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmdyaWQtY29udGFpbmVyIC5iYXR0bGUtZ3JpZDpudGgtY2hpbGQoMikgLmVsZW1lbnQgXCJcbiAgICApO1xuICAgIHJldHVybiB7IHBsYXllckVsZW1lbnRzLCBwY0VsZW1lbnRzIH07XG4gIH07XG4gIGNvbnN0IGxpc3RlbmVycyA9IChzaXplID0gNSkgPT4ge1xuICAgIGVsZW1lbnRzKCkucGxheWVyRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgX19zaG93TGVnYWxNb3ZlKGUsIHNpemUpO1xuICAgICAgfSk7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgIF9fc2hvd0xlZ2FsTW92ZShlLCBzaXplLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgX19wcmludFNoaXBPblNjcmVlbihlLCBzaXplKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IF9fc2hvd0xlZ2FsTW92ZSA9IChlLCBzaXplLCBmbGFnID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IExBU1RfTlVNQkVSID0gMTA7XG4gICAgbGV0IHRhcmdldCA9IGU7XG4gICAgbGV0IG5leHRUYXJnZXQ7XG4gICAgbGV0IGxhc3RUYXJnZXQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgIG5leHRUYXJnZXQgPSB0YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICBhcnIucHVzaCh0YXJnZXQpO1xuICAgICAgbGFzdFRhcmdldCA9IGFyclthcnIubGVuZ3RoIC0gMV07XG4gICAgICB0YXJnZXQgPSBuZXh0VGFyZ2V0O1xuICAgIH1cbiAgICBjb25zdCBsYXN0VGFyZ2V0dmFsdWUgPSBwYXJzZUludChcbiAgICAgIGxhc3RUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKVxuICAgICk7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBwYXJzZUludChlLmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuICAgIC8vIGNoZWNrIGlmIGUgaXMgb24gYW4gYWxyZWFkeSBwbGFjZWQgc2hpcFxuICAgIGNvbnN0IHJ1bGUgPSAoKSA9PiBlLmNsYXNzTmFtZSAhPSBcImVsZW1lbnQgYWN0aXZlUGxheWVyXCI7XG4gICAgY29uc3QgbGVnYWxQbGFjZW1lbnQgPSBhcnIuZXZlcnkocnVsZSk7XG5cbiAgICBpZiAoXG4gICAgICBsYXN0VGFyZ2V0dmFsdWUgPT0gTEFTVF9OVU1CRVIgfHxcbiAgICAgIHRhcmdldFZhbHVlID4gbGFzdFRhcmdldHZhbHVlIHx8XG4gICAgICBsZWdhbFBsYWNlbWVudCA9PSBmYWxzZVxuICAgICkge1xuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiaWxsZWdhbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyLmZvckVhY2goKHMpID0+IHtcbiAgICAgICAgcy5jbGFzc0xpc3QuYWRkKFwibGVnYWxcIik7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFmbGFnKSB7XG4gICAgICBhcnIuZm9yRWFjaCgoYSkgPT4ge1xuICAgICAgICBhLmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcbiAgICAgICAgYS5jbGFzc0xpc3QucmVtb3ZlKFwiaWxsZWdhbFwiKTtcbiAgICAgIH0pO1xuICAgICAgYXJyLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9O1xuICBjb25zdCBfX3ByaW50U2hpcE9uU2NyZWVuID0gKGUsIHNpemUpID0+IHtcbiAgICBjb25zdCBydWxlID0gKCkgPT4ge1xuICAgICAgaWYgKGUuY2xhc3NOYW1lID09IFwiZWxlbWVudCBsZWdhbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgbGVnYWxQbGFjZW1lbnQgPSBhcnIuZXZlcnkocnVsZSk7XG4gICAgaWYgKGxlZ2FsUGxhY2VtZW50KSB7XG4gICAgICBsZXQgdGFyZ2V0ID0gZTtcbiAgICAgIGxldCBuZXh0VGFyZ2V0O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQbGF5ZXJcIik7XG4gICAgICAgIG5leHRUYXJnZXQgPSB0YXJnZXQubmV4dFNpYmxpbmc7XG4gICAgICAgIHRhcmdldCA9IG5leHRUYXJnZXQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvLyBsaXN0ZW4gdG8gZW5lbXkgYm9hcmQsIGlmIGN1cnJlbnQgcGxheWVyVHVybiwgaWYgZ3JpZCBub3QgaGl0LCBoaXRcbiAgY29uc3QgaGl0Q29udHJvbCA9IChib2FyZCkgPT4ge1xuICAgIGVsZW1lbnRzKCkucGNFbGVtZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoYm9hcmQuZ2V0VHVybigpICUgMiA9PSAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lICE9PSBcImVsZW1lbnQgYWN0aXZlUGxheWVyIGhpdFwiIHx8XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgIT09IFwiZWxlbWVudCBtaXNzXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgYm9hcmQucmVjaWV2ZUF0dGFjayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIG1hcmtIaXQoZSwgdHJ1ZSwgYm9hcmQpO1xuICAgICAgICAgICAgICBpZiAoYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjaGVja1dpbm5lcigwKTtcbiAgICAgICAgICAgICAgICBfX3Jlc2V0KGJvYXJkKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWFya0hpdChlLCBmYWxzZSwgYm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9hcmQuZ2V0VHVybigpICUgMiA9PSAxKSB7XG4gICAgICAgICAgLy8gY2hhbmdlIHR1cm5zIHRvIHBjXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYm9hcmQucmVjaWV2ZUF0dGFjayhcbiAgICAgICAgICAgICAgYm9hcmQuZ2V0UGMoKS5hdHRhY2soZWxlbWVudHMoKS5wbGF5ZXJFbGVtZW50cywgZmFsc2UpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBtYXJrUGNIaXQoYm9hcmQuZ2V0UGMoKS5yZXR1cm5OdW0oKSwgdHJ1ZSwgYm9hcmQpO1xuICAgICAgICAgICAgaWYgKGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICAgIGNoZWNrV2lubmVyKDEpO1xuICAgICAgICAgICAgICBfX3Jlc2V0KGJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFya1BjSGl0KGJvYXJkLmdldFBjKCkucmV0dXJuTnVtKCksIGZhbHNlLCBib2FyZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgLy8gbWFyayBncmlkIGFzIGhpdCBhbmQgc3dpdGNocGxheWVyXG4gIGNvbnN0IG1hcmtIaXQgPSAoZSwgZmxhZyA9IHRydWUsIGJvYXJkKSA9PiB7XG4gICAgLy8gaWYgcGxheWVyIGF0dGFja1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWdhbFwiKTtcblxuICAgIGlmIChib2FyZC5nZXRUdXJuKCkgJSAyID09IDApIHtcbiAgICAgIC8vIGlmIGhpdCBzaGlwXG4gICAgICBpZiAoZmxhZykge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICBib2FyZC5zZXRUdXJuKCk7XG4gICAgICAgIF9fc3dpdGNoUGxheWVyKGJvYXJkLmdldFR1cm4oKSk7XG4gICAgICAgIC8vIGlmIHBsYXllciBtaXNzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZWxlbWVudFwiLCBcIm1pc3NcIik7XG4gICAgICAgIGJvYXJkLnNldFR1cm4oKTtcbiAgICAgICAgX19zd2l0Y2hQbGF5ZXIoYm9hcmQuZ2V0VHVybigpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IG1hcmtQY0hpdCA9IChudW1iZXIsIGZsYWcsIGJvYXJkKSA9PiB7XG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIGVsZW1lbnRzKCkucGxheWVyRWxlbWVudHMuaXRlbShudW1iZXIpLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBib2FyZC5zZXRUdXJuKCk7XG4gICAgICBfX3N3aXRjaFBsYXllcihib2FyZC5nZXRUdXJuKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50cygpLnBsYXllckVsZW1lbnRzLml0ZW0obnVtYmVyKS5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIGJvYXJkLnNldFR1cm4oKTtcbiAgICAgIF9fc3dpdGNoUGxheWVyKGJvYXJkLmdldFR1cm4oKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGVja1dpbm5lciA9IChudW1iZXIpID0+IHtcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHt2YWx1ZX0gd29uIHRoZSBnYW1lYCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJDb21wdXRlciB3b24gdGhlIGdhbWVcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IF9fdGFrZU5hbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbW9kZWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgICBtb2RlbENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwibW9kYWwtY29udGFpbmVyXCIpO1xuICAgIG1vZGVsQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbC1jb250YWluZXItaGlkZGVuXCIpO1xuICB9O1xuICBjb25zdCBfX3N3aXRjaFBsYXllciA9IChudW1iZXIgPSAwKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudFBsYXllclwiKTtcbiAgICBpZiAobnVtYmVyICUgMiA9PSAwKSB7XG4gICAgICAvLyB0b2RvOiBmaW5zaWggcGxheWVyIGF0dGFja1xuICAgICAgZ3JpZFsxXS5jbGFzc0xpc3QucmVtb3ZlKFwiYmF0dGxlLWdyaWQtb2ZmXCIpO1xuICAgICAgY3VycmVudFBsYXllci5pbm5lckhUTUwgPSBgQ3VycmVudCBQbGF5ZXIgaXMgJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0b2RvOiBmaW5pc2ggcGMgYXR0YWNrXG4gICAgICBncmlkWzFdLmNsYXNzTGlzdC5hZGQoXCJiYXR0bGUtZ3JpZC1vZmZcIik7XG4gICAgICBjdXJyZW50UGxheWVyLmlubmVySFRNTCA9IGBDdXJyZW50IFBsYXllciBpczogUENgO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgX19yZXNldCA9IChib2FyZCkgPT4ge1xuICAgIF9fbW9kYWxDb250cm9sKCk7XG4gICAgaW5pdCgpO1xuICAgIGJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGhpdENvbnRyb2wsXG4gICAgbWFya1BjSGl0LFxuICAgIGxpc3RlbmVycyxcbiAgfTtcbn0pKCk7XG5leHBvcnRzLmNvbnRyb2xHcmlkID0gY29udHJvbEdyaWQ7XG4iLCJjb25zdCBzaGlwID0gKGxlbmd0aCwgc3RhcnRTcXVhcmUpID0+IHtcbiAgY29uc3QgaGl0U3F1YXJlcyA9IFtdO1xuICBjb25zdCBzaGlwTG9jYXRpb24gPSBbXTtcblxuICAvLyByZXR1cm4gbGVuZ3RoXG4gIGNvbnN0IHJldHVybmxlbmd0aCA9ICgpID0+IGxlbmd0aDtcblxuICAvLyBhZGQgaG9yaXpvbnRhbCBjb29yZGluYXRlc1xuICBjb25zdCBfX3NldENvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBMb2NhdGlvbi5wdXNoKHN0YXJ0U3F1YXJlICsgaSk7XG4gICAgfVxuICB9O1xuICAvLyByZXR1cm4gbG9jYXRpb24gb2Ygc2hpcFxuICBjb25zdCBsb2NhdGlvbiA9ICgpID0+IHNoaXBMb2NhdGlvbjtcblxuICBjb25zdCBoaXQgPSAobnVtYmVyKSA9PiB7XG4gICAgaWYgKHNoaXBMb2NhdGlvbi5pbmNsdWRlcyhudW1iZXIpID09PSB0cnVlKSB7XG4gICAgICBoaXRTcXVhcmVzLnB1c2gobnVtYmVyKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRTcXVhcmVzLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIF9fc2V0Q29vcmRpbmF0ZXMoc3RhcnRTcXVhcmUpO1xuXG4gIHJldHVybiB7XG4gICAgaGl0U3F1YXJlcyxcbiAgICBzaGlwTG9jYXRpb24sXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgICBsb2NhdGlvbixcbiAgICByZXR1cm5sZW5ndGgsXG4gIH07XG59O1xuZXhwb3J0cy5zaGlwID0gc2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgNiUsIDkwJSwgMC4zNjMpO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogNDVyZW07XFxufVxcbi5iYXR0bGUtZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJhdHRsZS1ncmlkLW9mZiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZWxlbWVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmxlZ2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDAsIDI0OCwgMTQ2KTtcXG59XFxuLmlsbGVnYWwge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFjdGl2ZVBsYXllciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxNzAsIDE3MCk7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDExMSwgMyk7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDU3LCA5MCwgMTE5KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5tb2RhbC1jb250YWluZXItaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxOTcsIDI1MCwgMC45NDUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDIsIDkzJSwgMjMlLCAwLjk1OSk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMi4ycmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLE9BQU87RUFDUCxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLDJDQUEyQztFQUMzQyxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsNENBQTRDO0FBQzlDO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgNiUsIDkwJSwgMC4zNjMpO1xcbn1cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogNDVyZW07XFxufVxcbi5iYXR0bGUtZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmJhdHRsZS1ncmlkLW9mZiB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uZWxlbWVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuLmxlZ2FsIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDAsIDI0OCwgMTQ2KTtcXG59XFxuLmlsbGVnYWwge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFjdGl2ZVBsYXllciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk1LCAxNzAsIDE3MCk7XFxufVxcbi5oaXQge1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxufVxcbi5taXNzIHtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDMsIDExMSwgMyk7XFxufVxcbi5tb2RhbC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogcmdiKDU3LCA5MCwgMTE5KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5tb2RhbC1jb250YWluZXItaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxOTcsIDI1MCwgMC45NDUpO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC42cmVtIDAuNHJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMDIsIDkzJSwgMjMlLCAwLjk1OSk7XFxufVxcbmJ1dHRvbjpob3ZlciB7XFxuICBwYWRkaW5nOiAxLjJyZW0gMi4ycmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5jb25zdCB7IGdhbWVCb2FyZCB9ID0gcmVxdWlyZShcIi4vR2FtZWJvYXJkXCIpO1xuY29uc3QgeyBwbGF5ZXIgfSA9IHJlcXVpcmUoXCIuL1BsYXllclwiKTtcbmNvbnN0IHsgY29udHJvbEdyaWQgfSA9IHJlcXVpcmUoXCIuL2RvbVwiKTtcblxuLy8gVE9ETzogcGxheWVyIG5hbWU7XG5jb25zdCBodW1hblBsYXllciA9IHBsYXllcihcIklicmFoaW1cIik7XG5jb25zdCBwY1BsYXllciA9IHBsYXllcigpO1xuXG5jb25zdCBib2FyZCA9IGdhbWVCb2FyZChodW1hblBsYXllciwgcGNQbGF5ZXIpO1xuLy8gY3JlYXRlIGEgZ3JpZFxuY29udHJvbEdyaWQuaW5pdCgpO1xuLy8gY3JlYXRlIHBsYXllciBzaGlwXG4vLyBsaXN0ZW4gdG8gYm9hcmRcbmNvbnRyb2xHcmlkLmhpdENvbnRyb2woYm9hcmQpO1xuLy8gVE9ETzogaW1wbGVtZW50IHJlc2V0LFxuLy8gVE9ETzogZHJhZyBhbmQgZHJvcCxcbi8vIFRPRE86IGZpeCBzcGFnaGV0dGkgY29kZSB3aXRoIHBlbiBhbmQgcGFwZXJcbi8vIFRPRE86IHRlc3RpbmdcbiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwic2hpcCIsImNvbnRyb2xHcmlkIiwiZ2FtZUJvYXJkIiwicGxheWVyIiwicGMiLCJzaGlwc1BsYXllckFyciIsInNoaXBzUGNBcnIiLCJtaXNzZWRQbGF5ZXJIaXRzIiwibWlzc2VkUGNIaXRzIiwidHVybiIsImdldFBsYXllciIsImdldFBjIiwiZ2V0VHVybiIsInNldFR1cm4iLCJuZXdTaGlwIiwic2hpcFNpemUiLCJyZWNpZXZlQXR0YWNrIiwic3F1YXJlIiwicGFyc2VJbnQiLCJoaXQiLCJzb21lIiwiZSIsInB1c2giLCJhbGxTaGlwc1N1bmsiLCJzdW5rUGxheWVyQ291bnRlciIsInN1bmtQY0NvdW50ZXIiLCJmb3JFYWNoIiwiaXNTdW5rIiwibGVuZ3RoIiwicmVzZXRCb2FyZCIsImV4cG9ydHMiLCJuYW1lIiwicGxheWVySGl0cyIsInBsYXllclNoaXBzIiwicmFuZG9tTnVtYmVyIiwicmV0dXJuTnVtIiwiYXR0YWNrIiwiZWxlbWVudHMiLCJmbGFnIiwiYm9hcmQiLCJudW1iZXIiLCJ1bmRlZmluZWQiLCJpbmNsdWRlcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdyaWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJOYW1lRm9ybSIsImZvcm1zIiwiYXJyIiwidmFsdWUiLCJfX21vZGFsQ29udHJvbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwicHJldmVudERlZmF1bHQiLCJfX3Rha2VOYW1lIiwiX19zd2l0Y2hQbGF5ZXIiLCJpbml0IiwiaSIsImoiLCJlbGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwibGlzdGVuZXJzIiwicGxheWVyRWxlbWVudHMiLCJwY0VsZW1lbnRzIiwic2l6ZSIsIl9fc2hvd0xlZ2FsTW92ZSIsIl9fcHJpbnRTaGlwT25TY3JlZW4iLCJMQVNUX05VTUJFUiIsInRhcmdldCIsIm5leHRUYXJnZXQiLCJsYXN0VGFyZ2V0IiwibmV4dFNpYmxpbmciLCJsYXN0VGFyZ2V0dmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRWYWx1ZSIsInJ1bGUiLCJjbGFzc05hbWUiLCJsZWdhbFBsYWNlbWVudCIsImV2ZXJ5IiwicyIsImEiLCJyZW1vdmUiLCJoaXRDb250cm9sIiwibWFya0hpdCIsImNoZWNrV2lubmVyIiwiX19yZXNldCIsIm1hcmtQY0hpdCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibW9kZWxDb250YWluZXIiLCJ0b2dnbGUiLCJjdXJyZW50UGxheWVyIiwiaW5uZXJIVE1MIiwic3RhcnRTcXVhcmUiLCJoaXRTcXVhcmVzIiwic2hpcExvY2F0aW9uIiwicmV0dXJubGVuZ3RoIiwiX19zZXRDb29yZGluYXRlcyIsImxvY2F0aW9uIiwiaHVtYW5QbGF5ZXIiLCJwY1BsYXllciJdLCJzb3VyY2VSb290IjoiIn0=