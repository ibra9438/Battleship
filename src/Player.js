const player = () => {
  const shipHits = [];
  const pcAttack = () => {
    let legalRule;
    let hitRule;
    let randomNumbersX;
    let randomNumbersY;
    let flag = false;
    do {
      flag = false;
      randomNumbersX = Math.floor(Math.random() * 10);
      randomNumbersY = Math.floor(Math.random() * 10);
      for (let i = 0; i < shipHits.length; i++) {
        if (
          randomNumbersX == shipHits[i][1] &&
          randomNumbersY == shipHits[i][0]
        ) {
          flag = true;
        }
      }
    } while (flag);
    shipHits.push([randomNumbersY, randomNumbersX]);
    return [randomNumbersY, randomNumbersX];
  };
  return { pcAttack, shipHits };
};
exports.player = player;
