const { ship } = require("./shipFactory");
const { controlGrid } = require("./dom");

const gameBoard = (player, pc) => {
  const shipsPlayerArr = [];
  const shipsPcArr = [];

  const missedPlayerHits = [];
  const missedPcHits = [];

  let turn = 0;

  const getPlayer = () => player;
  const getPc = () => pc;

  const getTurn = () => turn;
  const setTurn = () => turn++;

  let newShip;
  let shipSize = [5, 4, 3, 3, 2];

  // check if any ship has a hit
  const recieveAttack = (square) => {
    square = parseInt(square);

    if (getTurn() % 2 == 0) {
      const hit = shipsPcArr.some((e) => e.hit(square));
      if (hit) {
        return true;
      }
      missedPlayerHits.push(square);
      return false;
    } else {
      const hit = shipsPlayerArr.some((e) => e.hit(square));
      if (hit) {
        return true;
      }
      missedPcHits.push(square);
      return false;
    }
  };

  const allShipsSunk = () => {
    let sunkPlayerCounter = 0;
    let sunkPcCounter = 0;
    if (getTurn() % 2 == 0) {
      shipsPlayerArr.forEach((e) => {
        if (e.isSunk()) sunkPlayerCounter++;
      });
      if (sunkPlayerCounter === shipsPlayerArr.length) {
        return true;
      }
      return false;
    } else {
      if (getTurn() % 2 == 1) {
        shipsPcArr.forEach((e) => {
          if (e.isSunk()) sunkPcCounter++;
        });
        if (sunkPcCounter === shipsPcArr.length) {
          return true;
        }
        return false;
      }
    }
  };
  const resetBoard = () => {
    shipsPcArr.length = 0;
    shipsPlayerArr.length = 0;
    missedPlayerHits.length = 0;
    missedPcHits.length = 0;

    turn = 0;
  };

  return {
    allShipsSunk,
    recieveAttack,
    getTurn,
    setTurn,
    getPlayer,
    getPc,
    resetBoard,
  };
};
exports.gameBoard = gameBoard;
