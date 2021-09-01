const { ship } = require("../src/shipFactory");
const gameBoard = () => {
  const shipsArr = [];
  const shipCoordinates = [];

  let newShip;

  const createShip = (length, start) => {
    newShip = ship(length, start);
    shipsArr.push(newShip);
    return newShip;
  };

  const setCoordinates = () => {
    shipCoordinates.push(newShip.shipCoordinates);
  };

  const recieveAttack = (square) => {
    shipsArr.forEach((e) => {
      if (e.hit() === true) {
        // color the corrospanding grid red
        console.log("hit");
      } else {
        // color the missed shot
        console.log("miss");
      }
    });
  };

  const allShipsSunk = () => {
    let sunkCounter = 0;
    shipsArr.forEach((e) => {
      if (e.isSunk() == true) {
        sunkCounter++;
      }
    });
    if (sunkCounter === shipsArr.length) {
      console.log("all ships have been sunk");
    }
  };
  return { createShip, setCoordinates, recieveAttack, allShipsSunk };
};
exports.gameBoard = gameBoard;
