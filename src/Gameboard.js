const { ship } = require("../src/shipFactory");
const gameBoard = () => {
  const shipsArr = [];
  const shipCoordinates = [];
  const missedHits = [];

  let newShip;

  const createShip = (length, start) => {
    newShip = ship(length, start);
    shipsArr.push(newShip);
    return newShip;
  };

  const __setCoordinates = () => {
    shipCoordinates.push(newShip.shipCoordinates);
  };
  // check if any ship has a hit
  const recieveAttack = (square) => {
    const hit = shipsArr.some((e) => e.hit(square));
    return hit;
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
      return true;
    }
    return false;
  };

  return {
    allShipsSunk,
    recieveAttack,
    createShip,
    shipCoordinates,
  };
};
exports.gameBoard = gameBoard;
