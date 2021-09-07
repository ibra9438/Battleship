import "./style.css";
const { ship } = require("./shipFactory");
const { gameBoard } = require("./Gameboard");
const { player } = require("./Player");
const { controlGrid } = require("./dom");

// TODO: player name;
const humanPlayer = player("Ibrahim");
const pcPlayer = player();

const board = gameBoard();
// create a grid
controlGrid.init();
const humanShip = board.createShip();
const pcShip = board.createShip(false);

controlGrid.hitListen(board);
