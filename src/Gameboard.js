const { ship } = require("./shipFactory");
const { controlGrid } = require("./dom");

const gameBoard = (player, pc) => {
  const playerBoard = [];
  const pcBoard = [];
  const shipsArr = [];
  const shipsArrPc = [];

  const shipSize = [5, 4, 3, 3, 2];
  let newShip;

  const missedPlayerHits = [];
  const missedPcHits = [];

  let turn = 0;
  const getTurn = () => turn;
  const setTurn = () => turn++;

  const __initShipArr = () => {
    for (let i = 0; i < 10; i++) {
      shipsArr.push([]);
      shipsArrPc.push([]);
      for (let j = 0; j < 3; j++) {
        shipsArr[i].push(null);
        shipsArrPc[i].push(null);
      }
    }
    console.log(shipsArr);
  };
  const __testingShip = () => {
    for (let j = 0; j < 5; j++) {
      playerBoard[0][j].classList.add("activePlayer");
    }
    newShip = ship(5);
    shipsArr[0].push(newShip);
    console.log(shipsArr);
  };
  const init = () => {
    controlGrid.init(pcBoard, playerBoard);
    __testingShip();
  };
  const __checkActive = (
    randomNumberY,
    randomNumberX,
    length,
    orientation
  ) => {
    let legalValue;
    let legalRule = (a) => a.className !== "element activePlayer";
    if (orientation === "horizontal") {
      return (legalValue = pcBoard[randomNumberY].every((a) =>
        legalRule(a)
      ));
    } else {
      const filteredArr = [];
      for (let i = 0; i < length; i++) {
        filteredArr.push(pcBoard[randomNumberY + i][randomNumberX]);
      }
      return (legalValue = filteredArr.every((a) => legalRule(a)));
    }
  };
  const renderPcShip = () => {
    let randomNumberX;
    let randomNumberY;
    let orientation = ["vertical", "horizontal"];
    let orientationValue;
    let legalMove = true;
    shipSize.forEach((e) => {
      orientationValue =
        orientation[Math.floor(Math.random() * 9) % 2];
      if (orientationValue == "horizontal") {
        do {
          randomNumberX = Math.floor(Math.random() * 10);
          randomNumberY = Math.floor(Math.random() * 10);

          if (randomNumberX + e <= 9) {
            legalMove = __checkActive(
              randomNumberY,
              randomNumberX,
              e,
              orientationValue
            );
          }
        } while (randomNumberX + e >= 9 || !legalMove);

        controlGrid.renderPcShip(
          pcBoard,
          e,
          randomNumberX,
          randomNumberY
        );
      } else {
        do {
          randomNumberX = Math.floor(Math.random() * 10);
          randomNumberY = Math.floor(Math.random() * 10);
          if (randomNumberY + e <= 9) {
            legalMove = __checkActive(
              randomNumberY,
              randomNumberX,
              e,
              orientationValue
            );
          }
        } while (randomNumberY + e >= 9 || !legalMove);
        controlGrid.renderPcShip(
          pcBoard,
          e,
          randomNumberX,
          randomNumberY,
          false
        );
      }
    });
  };
  const showLegalPcGrid = (e) => {
    controlGrid.showIfLegal(e);
  };

  const dragAndDrop = () => {};
  const recieveAttack = (x, y) => {
    if (getTurn() % 2 === 0) {
      playerBoard.forEach((e) => {});
    }
  };
  __initShipArr();
  return {
    init,
    renderPcShip,
    dragAndDrop,
    pcBoard,
    playerBoard,
    showLegalPcGrid,
  };
};
exports.gameBoard = gameBoard;
