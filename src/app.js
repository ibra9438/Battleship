import './style.css';

const { gameBoard } = require('./Gameboard');
const { player } = require('./Player');
const { createGrid } = require('./dom');

// TODO: player name;
const humanPlayer = player('Ibrahim');
const pcPlayer = player();

const humanBoard = gameBoard();
const pcBoard = gameBoard();

// create a grid
createGrid.init();

const humanShip = humanBoard.createShip(4, 0);
const pcShip = pcBoard.createShip(4, 5);
