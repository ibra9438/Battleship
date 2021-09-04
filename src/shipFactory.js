const ship = (length, startSquare) => {
  const hitSquares = [];
  let shipLocation = [];

  // add horizontal coordinates
  const __setCoordinates = () => {
    for (let i = 0; i < length; i++) {
      shipLocation.push(startSquare + i);
    }
  };

  const hit = (number) => {
    if (shipLocation.includes(number) === true) {
      hitSquares.push(number);
      return true;
    }
    return false;
  };

  const isSunk = () => {
    if (hitSquares.length === length) {
      return true;
    }
    return false;
  };

  __setCoordinates(startSquare);

  return {
    hitSquares,
    shipLocation,
    hit,
    isSunk,
  };
};
exports.ship = ship;
