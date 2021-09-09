const player = (name = "PC") => {
  // attack, Pc Attack
  const playerHits = [];
  const playerShips = [];

  let randomNumber;

  const returnNum = () => randomNumber;

  const attack = (
    elements,
    flag = true,
    board,
    number = undefined
  ) => {
    if (flag) {
      if (!playerHits.includes(number)) {
        playerHits.push(number);
        return number;
      }
      return false;
    } else {
      let hit = false;
      while (hit == false) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        if (!playerHits.includes(randomNumber)) {
          playerHits.push(randomNumber);
          hit = true;
          return randomNumber;
        }
      }
    }
  };
  return {
    attack,
    returnNum,
  };
};
exports.player = player;
