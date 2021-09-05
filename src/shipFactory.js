const ship = (length, startSquare) => {
  const hitSquares = [];
  const shipLocation = [];

  // return length
  const returnlength = () => length;

  // add horizontal coordinates
  const __setCoordinates = () => {
    for (let i = 0; i < length; i++) {
      shipLocation.push(startSquare + i);
    }
  };
  // return location of ship
  const location = () => shipLocation;

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
    location,
    returnlength,
  };
};
exports.ship = ship;
