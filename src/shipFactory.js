const ship = (length, start, flag) => {
  const hits = [];
  const shipCoordinates = [];
  const hit = (number) => {
    hits.push(number);
  };
  const isSunk = () => {
    if (hitLocation.length === length) {
      return true;
    }
    return false;
  };

  /*const __setCoordinates = () {
    if (flag) {
      for (let i = 0; i < length + start; i++) {
        shipCoordinates.push(start + i);
      } else {
        for (let i = 0; i < length + start; i++) {
          ship
          shipCoordinates.push(start + i);
        }
      }
    }
  } */
  return { hit, isSunk, hits };
};
exports.ship = ship;
