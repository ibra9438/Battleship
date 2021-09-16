import "./style.css";
import "./Gameboard";
import "./shipFactory";
import "./dom";
import "./Player";

const { gameBoard } = require("./Gameboard");
const { player } = require("./Player");
const { controlGrid } = require("./dom");
const { ship } = require("./shipFactory");

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
