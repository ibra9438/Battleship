const ship = (length, startSquare) => {
  const hitSquares = [];
  let shipLocation = [startSquare];

  // add horizontal coordinates
  for (let i = 1; i < length; i++) {
    shipLocation.push(startSquare + i);
  }

  const hit = (number) => {
    hitSquares.push(number);
  };

  const isSunk = () => {
    if (hitSquares.length === length) {
      return true;
    }
    return false;
  };

  return {
    hitSquares,
    shipLocation,
    hit,
    isSunk,
  };
};
exports.ship = ship;
