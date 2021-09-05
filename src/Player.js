const player = (name = 'PC') => {
  // attack, Pc Attack
  const playerHits = [];
  const pcHits = [];

  const returnName = () => name;

  const attack = (number) => {
    if (!playerHits.includes(number)) {
      playerHits.push(number);
      return number;
    }
    return false;
  };

  const pcAttack = () => {
    const number = Math.floor(Math.random() * 100);
    console.log(number);
    if (!pcHits.includes(number)) {
      pcHits.push(number);
      return number;
    }
    return false;
  };

  return {
    attack,
    pcAttack,
    returnName,
  };
};
exports.player = player;
