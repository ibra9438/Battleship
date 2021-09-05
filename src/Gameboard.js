const { ship } = require('./shipFactory');

const gameBoard = () => {
  const shipsArr = [];
  const missedHits = [];

  let newShip;

  const createShip = (length, start) => {
    newShip = ship(length, start);
    shipsArr.push(newShip);
  };

  // check if any ship has a hit
  const recieveAttack = (square) => {
    const hit = shipsArr.some((e) => e.hit(square));
    if (hit) {
      return true;
    }
    missedHits.push(square);
    return false;
  };

  const allShipsSunk = () => {
    let sunkCounter = 0;
    shipsArr.forEach((e) => {
      if (e.isSunk() === true) {
        sunkCounter++;
      }
    });
    if (sunkCounter === shipsArr.length) {
      console.log('all ships have been sunk');
      return true;
    }
    return false;
  };

  return {
    allShipsSunk,
    recieveAttack,
    createShip,
  };
};
exports.gameBoard = gameBoard;
