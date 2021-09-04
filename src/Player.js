const { gameBoard } = require("../src/Gameboard");

const player = (name = "PC") => {
  // attack, Pc Attack
  const playerTargets = [];
  const pcTargets = [];

  const attack = (number) => {
    if (!playerTargets.includes(number)) {
      playerTargets.push(number);
      return number;
    }
    return false;
  };

  const pcAttack = () => {
    let number = Math.floor(Math.random * 10) + 1;
    if (!pcTargets.includes(number)) {
      pcTargets.push(number);
      return number;
    }
  };

  return {
    attack,
    pcAttack,
  };
};
exports.player = player;
