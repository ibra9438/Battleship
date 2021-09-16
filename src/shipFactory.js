const ship = (length, startX, startY, vertical = false) => {
  const hits = [];
  const shipCoordinates = [];
  const getLength = () => length;

  const getVertical = () => vertical;

  const hit = (number) => {
    hits.push(number);
  };
  const isSunk = () => {
    if (hits.length === getLength()) {
      return true;
    }
    return false;
  };
  const isHit = (y, x) => {
    let value = false;
    shipCoordinates.forEach((e) => {
      if (e[0] == y && e[1] == x) {
        value = true;
      }
    });
    return value;
  };
  const __setCoordinates = () => {
    if (vertical == false) {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([startY, startX + i]);
      }
    } else {
      for (let i = 0; i < length; i++) {
        shipCoordinates.push([startY + i, startX]);
      }
    }
  };
  __setCoordinates();
  return { hit, isSunk, hits, shipCoordinates, isHit };
};
exports.ship = ship;
