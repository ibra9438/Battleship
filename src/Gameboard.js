const { ship } = require("./shipFactory");
const { controlGrid } = require("./dom");

const gameBoard = (player, pc) => {
  const playerBoard = [];
  const pcBoard = [];

  const shipsArr = [];
  const shipsArrPc = [];

  let shipSize = [5, 4, 3, 3, 2];
  let newShip;

  const missedPlayerHits = [];
  const missedPcHits = [];

  let turn = 0;
  let gameOn = true;
  const getTurn = () => turn;
  const setTurn = () => turn++;
  const getShipSizeLength = () => shipSize.length;
  const init = () => {
    controlGrid.init(pcBoard, playerBoard);
  };
  const __checkActive = (
    randomNumberY,
    randomNumberX,
    length,
    orientation
  ) => {
    let legalValue;
    let legalRule = (a) =>
      a.className !== "element activePlayer" &&
      a.className !== "element activePlayer hidden";
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

        newShip = ship(e, randomNumberX, randomNumberY, false);
        shipsArrPc.push(newShip);
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
        newShip = ship(e, randomNumberX, randomNumberY, true);
        shipsArrPc.push(newShip);
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
  const showLegalPcGrid = (e, flag) => {
    if (flag) {
      controlGrid.showIfLegal(e, true);
    } else {
      controlGrid.showIfLegal(e, false);
    }
  };
  const dragAndDrop = (e, flag) => {
    controlGrid.dragAndDrop(e, flag);
  };
  const loadPlayerShip = (a) => {
    let values;
    if (shipSize.length > 0) {
      values = controlGrid.loadShip(a);
      if (values !== false) {
        newShip = ship(
          parseInt(shipSize[0]),
          parseInt(values[1]),
          parseInt(values[0])
        );
        shipsArr.push(newShip);
        shipSize.shift();
      }
    }
  };
  const recieveAttack = (x, y, a) => {
    let value = false;
    if (gameOn) {
      if (getTurn() % 2 === 0) {
        shipsArrPc.forEach((e) => {
          if (e.isHit(y, x) == true) {
            controlGrid.firing(true);

            setTimeout(() => {
              controlGrid.switchName(getTurn());
            }, 1000);
            e.hit(1);
            controlGrid.markHit(a, true);
            value = true;
            allShipsSunk(true);
          }
        });
        if (value == false) {
          controlGrid.firing(true);
          setTimeout(() => {
            controlGrid.markHit(a, false);
          }, 1000);
          missedPlayerHits.push([x, y]);
        }
        setTurn();
      }
    }
    if (gameOn) {
      if (getTurn() % 2 !== 0) {
        value = false;
        let pcAttack = pc.pcAttack();
        let element;
        shipsArr.forEach((e) => {
          if (e.isHit(pcAttack[0], pcAttack[1]) == true) {
            setTimeout(() => {
              e.hit(1);
              element = playerBoard[pcAttack[0]][pcAttack[1]];
              controlGrid.firing(false);
              setTimeout(() => {
                controlGrid.markHit(element, true);
                controlGrid.switchName(getTurn());
                allShipsSunk(false);
                setTurn();
              }, 2000);
              value = true;
            }, 1000);
          }
        });
        if (value == false) {
          setTimeout(() => {
            element = playerBoard[pcAttack[0]][pcAttack[1]];
            controlGrid.firing(false);
            setTimeout(() => {
              controlGrid.markHit(element, false);
              setTurn();
              controlGrid.switchName(getTurn());
            }, 2000);
            missedPcHits.push([pcAttack[0], pcAttack[1]]);
          }, 1000);
        }
      }
    }
    return value;
  };
  const allShipsSunk = (flag) => {
    let pcSunkCounter = 0;
    let playerSunkCounter = 0;
    if (flag) {
      shipsArrPc.forEach((e) => {
        if (e.isSunk() == true) {
          pcSunkCounter++;
          controlGrid.controlPcShipView(
            true,
            e.shipCoordinates,
            pcBoard
          );
        }
      });
    } else {
      shipsArr.forEach((e) => {
        if (e.isSunk() == true) {
          playerSunkCounter++;
          controlGrid.controlPcShipView(
            true,
            e.shipCoordinates,
            playerBoard
          );
        }
      });
    }
    if (shipsArr.length === playerSunkCounter) {
      __checkWinner(false);
    }
    if (shipsArrPc.length === pcSunkCounter) {
      __checkWinner(true);
    }
  };
  const __checkWinner = (flag) => {
    if (flag) {
      controlGrid.checkWinner(flag);
    } else {
      controlGrid.checkWinner(flag);
    }
    gameOn = false;
    setTimeout(() => {
      __reset();
    }, 2000);
  };
  const __reset = () => {
    controlGrid.reset();
    turn = 0;
    shipSize = [5, 4, 3, 3, 2];
    shipsArr.length = 0;
    controlGrid.switchName(turn);
    renderPcShip();
    // __testingShip();
    gameOn = true;
  };
  return {
    init,
    getTurn,
    recieveAttack,
    renderPcShip,
    dragAndDrop,
    pcBoard,
    getShipSizeLength,
    loadPlayerShip,
    playerBoard,
    showLegalPcGrid,
  };
};
exports.gameBoard = gameBoard;
