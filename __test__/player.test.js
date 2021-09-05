const { player } = require("../src/Player");
const { gameBoard } = require("../src/Gameboard");

describe("Testing player", () => {
  let humanPlayer;
  let pcPlayer;
  let board;
  beforeAll(() => {
    humanPlayer = player("Ibrahim");
    pcPlayer = player();
    board = gameBoard();
  });

  test("test player attack", () => {
    board.createShip(4, 0, 1);
    expect(board.recieveAttack(humanPlayer.attack(3))).toBe(true);
  });

  test("test pc attack", () => {
    board.createShip(4, 0);
    expect(board.recieveAttack(humanPlayer.pcAttack())).toBe(false);
  });
  
});
