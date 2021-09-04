const { ship } = require("../src/shipFactory");
const { gameBoard } = require("../src/Gameboard");

describe("Gameboard functions", () => {
  let board;
  let ship;

  beforeAll(() => {
    board = gameBoard();
    ship = board.createShip(4, 0);
  });

  test("Created a ship", () => {
    expect(board.createShip(4, 0)).toBeDefined();
  });

  test("Recieve an attack", () => {
    expect(board.recieveAttack(0)).toBe(true);
  });

  test("All ships sunk", () => {
    expect(board.allShipsSunk()).toBe(false);
  });
});
