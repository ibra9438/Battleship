const { ship } = require("./shipFactory");
const { controlGrid } = require("./dom");

const gameBoard = () => {
  const shipsPlayerArr = [];
  const shipsPcArr = [];
  const missedPlayerHits = [];
  const missedPcHits = [];
  let turn = 0;

  const getTurn = () => turn;
  const setTurn = () => turn++;

  const shipSizeIndex = [
    [5, 0],
    [4, 6],
    [3, 24],
  ];
  let newShip;

  const createShip = (flag = true) => {
    shipSizeIndex.forEach((e) => {
      newShip = ship(e[0], e[1]);
      if (flag) {
        shipsPlayerArr.push(newShip);
        controlGrid.renderShip(newShip.location(), flag);
      } else {
        shipsPcArr.push(newShip);
        controlGrid.renderShip(newShip.location(), flag);
      }
    });
    return newShip;
  };

  // check if any ship has a hit
  const recieveAttack = (square) => {
    if (getTurn() % 2 == 0) {
      const hit = shipsPlayerArr.some((e) => e.hit(square));
      if (hit) {
        return true;
      }
      missedPlayerHits.push(square);
      return false;
    } else {
      const hit = shipsPcArrArr.some((e) => e.hit(square));
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
        console.log("all Player ships have been sunk");
        return true;
      }
      return false;
    } else {
      if (getTurn() % 2 == 0) {
        shipsPcArr.forEach((e) => {
          if (e.isSunk()) sunkPcCounter++;
        });
        if (sunkPcCounter === shipsPcArr.length) {
          console.log("all Pc ships have been sunk");
          return true;
        }
        return false;
      }
    }
  };

  return {
    allShipsSunk,
    recieveAttack,
    createShip,
    getTurn,
    setTurn,
  };
};
exports.gameBoard = gameBoard;
