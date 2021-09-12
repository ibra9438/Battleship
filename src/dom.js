const { gameBoard } = require("./Gameboard");
const controlGrid = (() => {
  const playerGrid = document.querySelectorAll(
    ".battle-grid:nth-child(1)"
  );
  const pcGrid = document.querySelectorAll(
    ".battle-grid:nth-child(2)"
  );
  let pcElements;
  const getPcGrid = () => pcGrid;
  const getPlayerGrid = () => playerGrid;

  const playerNameForm = document.forms["playerName"];

  const init = (pcBoard, playerBoard) => {
    for (let i = 0; i < 10; i++) {
      pcBoard.push([]);
      playerBoard.push([]);
      for (let j = 0; j < 10; j++) {
        pcGrid.forEach((e) => {
          const element = document.createElement("div");
          element.classList.add("element");
          element.setAttribute("data-index-v", i);
          element.setAttribute("data-index-h", j);
          e.append(element);
          pcBoard[i].push(element);
        });
        playerGrid.forEach((e) => {
          const element = document.createElement("div");
          element.classList.add("element");
          element.setAttribute("data-index-h", j);
          element.setAttribute("data-index-v", i);

          e.append(element);
          playerBoard[i].push(element);
        });
      }
    }
    pcElements = document.querySelectorAll(
      ".battle-grid:nth-child(2) .elements"
    );
  };
  const renderPcShip = (
    pcBoard,
    length,
    positionX,
    positionY,
    flag = true
  ) => {
    if (flag) {
      for (let i = 0; i < length; i++) {
        pcBoard[positionY][positionX + i].classList.add(
          "activePlayer"
        );
      }
    } else {
      for (let i = 0; i < length; i++) {
        pcBoard[positionY + i][positionX].classList.add(
          "activePlayer"
        );
      }
    }
  };

  const showIfLegal = (e) => {
    e.addEventListener("mouseout", () => {
      e.classList.remove("legal");
      e.classList.remove("illegal");
    });

    let currentClassName = e.className;

    if (currentClassName != "element activePlayer") {
      e.classList.add("legal");
    }
    if (
      currentClassName == "element activePlayer" ||
      currentClassName == "element miss" ||
      currentClassName == "element hit"
    ) {
      e.classList.add("illegal");
    }
  };

  const dragAndDrop = () => {};
  return { init, renderPcShip, showIfLegal };
})();
exports.controlGrid = controlGrid;
