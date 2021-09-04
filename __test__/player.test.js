const { player } = require("../src/Player");
const { gameBoard } = require("../src/Gameboard");

beforeAll(() => {
  const humanPlayer = player("Ibrahim");
  const pcPlayer = player();
  const board = gameBoard();
});
