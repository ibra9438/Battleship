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

const board = gameBoard(humanPlayer, pcPlayer);
board.init();
setTimeout(() => {
  board.renderPcShip();
}, 500);
const playerBoard = board.playerBoard;
const pcBoard = board.pcBoard;

pcBoard.forEach((e) => {
  e.forEach((a) => {
    a.addEventListener("mouseover", () => {
      board.showLegalPcGrid(a);
    });
  });
});
