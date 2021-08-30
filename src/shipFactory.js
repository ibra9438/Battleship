const ship = (length, startSquare) => {
  const hitSquares = [];
  const shipCoordinates = [startSquare];

  // add horizontal coordinates
  for (let i = 1; i < length; i++) {
    shipCoordinates.push(startSquare + i);
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
    shipCoordinates,
    hit,
    isSunk,
  };
};
export default ship;
