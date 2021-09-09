import "./style.css";
const { gameBoard } = require("./Gameboard");
const { player } = require("./Player");
const { controlGrid } = require("./dom");

// TODO: player name;
const humanPlayer = player("Ibrahim");
const pcPlayer = player();

const board = gameBoard(humanPlayer, pcPlayer);
// create a grid
controlGrid.init();
// create player ship
// listen to board
controlGrid.hitControl(board);
// TODO: implement reset,
// TODO: drag and drop,
// TODO: fix spaghetti code with pen and paper
// TODO: testing
