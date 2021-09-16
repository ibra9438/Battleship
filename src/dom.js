const { gameBoard } = require("./Gameboard");
const controlGrid = (() => {
  const shipSize = [5, 4, 3, 3, 2];
  const filteredArr = [];
  const playerGrid = document.querySelectorAll(
    ".battle-grid:nth-child(1)"
  );
  const pcGrid = document.querySelectorAll(
    ".battle-grid:nth-child(2)"
  );
  const rotation = document.querySelector(".rotation");
  let rotationStatus = 0;
  rotation.addEventListener("click", () => {
    rotationStatus++;
  });
  let pcElements;
  let playerElements;

  let doublePcElements = [];
  let doublePlayerElements = [];
  const modalContainer = document.querySelector(".modal-container");
  const playerNameForm = document.forms["playerName"];
  playerNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    switchName(0);
    modalContainer.classList.remove("modal-container");
    modalContainer.classList.add("modal-container-hidden");
  });
  const input = document.querySelector("#formText");
  const currentPlayer = document.querySelector(".currentPlayer");

  const init = (pcBoard, playerBoard) => {
    for (let i = 0; i < 10; i++) {
      pcBoard.push([]);
      playerBoard.push([]);

      doublePcElements.push([]);
      doublePlayerElements.push([]);
      for (let j = 0; j < 10; j++) {
        pcGrid.forEach((e) => {
          const element = document.createElement("div");
          element.classList.add("element");
          element.setAttribute("data-index-v", i);
          element.setAttribute("data-index-h", j);
          e.append(element);
          pcBoard[i].push(element);
          doublePcElements[i].push(element);
        });
        playerGrid.forEach((e) => {
          const element = document.createElement("div");
          element.classList.add("element");
          element.setAttribute("data-index-h", j);
          element.setAttribute("data-index-v", i);
          e.append(element);
          playerBoard[i].push(element);
          doublePlayerElements[i].push(element);
        });
      }
    }
    pcElements = document.querySelectorAll(
      ".battle-grid:nth-child(2) .element"
    );
    playerElements = document.querySelectorAll(
      ".battle-grid:nth-child(1) .element"
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

  const showIfLegal = (e, flag) => {
    e.addEventListener("mouseout", () => {
      e.classList.remove("pcTurn");
      e.classList.remove("legal");
      e.classList.remove("illegal");
      e.classList.remove("aim");
    });
    if (flag == false) {
      e.classList.add("pcTurn");
    }
    let currentClassName = e.className;

    if (currentClassName != "element activePlayer") {
      e.classList.remove("illegal");
      e.classList.remove("aim");

      e.classList.add("legal");
    }
    if (
      currentClassName == "element miss" ||
      currentClassName == "element activePlayer hit"
    ) {
      e.classList.add("illegal");
      e.classList.remove("aim");
      e.classList.remove("pcTurn");
    }
    if (currentClassName == "element activePlayer") {
      e.classList.add("aim");
      e.classList.remove("legal");
      e.classList.remove("illegal");
      e.classList.remove("hit");
      e.classList.remove("pcTurn");
    }
  };
  const markHit = (a, hitFlag) => {
    if (hitFlag) {
      a.classList.remove("aim");
      a.classList.remove("legal");
      a.classList.remove("miss");
      a.classList.remove("illegal");

      a.classList.add("hit");
    } else {
      a.classList.remove("aim");
      a.classList.remove("legal");
      a.classList.remove("illegal");

      a.classList.add("miss");
    }
  };
  // implement drag and drop and push to to shipsArr
  const dragAndDrop = (e, flag = true) => {
    let value;
    let nextSibling;
    let lastTarget;
    let currentTarget = e;
    let length = shipSize[0];

    let x;
    let y;
    if (length > 0) {
      if (rotationStatus % 2 == 0) {
        if (flag) {
          filteredArr.length = 0;
          currentTarget.classList.remove("legal");
          for (let i = 0; i < length; i++) {
            filteredArr.push(currentTarget);
            nextSibling = currentTarget.nextSibling;
            currentTarget = nextSibling;
            lastTarget = currentTarget.previousSibling;
            currentTarget.classList.remove("legal");
          }
          value = filteredArr.every((a) => {
            if (
              a.className == "element" &&
              lastTarget.getAttribute("data-index-h") < 10 &&
              lastTarget.getAttribute("data-index-h") >
                e.getAttribute("data-index-h")
            ) {
              return true;
            } else {
              return false;
            }
          });
          if (value) {
            filteredArr.forEach((a) => {
              a.classList.add("legal");
            });
          } else {
            filteredArr.forEach((a) => {
              a.classList.remove("legal");
            });
            e.classList.add("illegal");
            return false;
          }
        } else {
          filteredArr.forEach((a) => {
            a.classList.remove("legal");
            a.classList.remove("illegal");
          });
        }
      } else {
        if (flag) {
          x = parseInt(e.getAttribute("data-index-h"));
          y = parseInt(e.getAttribute("data-index-v"));
          filteredArr.length = 0;
          filteredArr.push(currentTarget);
          nextSibling = doublePlayerElements[y + 1][x];
          filteredArr.push(nextSibling);
          for (let i = 1; i < length; i++) {
            currentTarget.classList.remove("legal");
            if (i + y < 10) {
              nextSibling = doublePlayerElements[y + i][x];
              currentTarget = nextSibling;
              filteredArr.push(currentTarget);
            } else {
              e.classList.add("illegal");
            }
          }
          value = filteredArr.every((a) => {
            if (
              a.className == "element" ||
              (a.className == "element legal" &&
                currentTarget.getAttribute("data-index-v") <= 10)
            ) {
              return true;
            } else {
              return false;
            }
          });
          if (value) {
            filteredArr.forEach((a) => {
              a.classList.add("legal");
            });
          } else {
            filteredArr.forEach((a) => {
              a.classList.remove("legal");
            });
            e.classList.add("illegal");
            return false;
          }
        } else {
          filteredArr.forEach((a) => {
            a.classList.remove("legal");
            a.classList.remove("illegal");
          });
        }
      }
    }
  };
  const loadShip = (a) => {
    let length = shipSize[0];
    let currentTarget = a;
    let nextSibling;
    let legal = dragAndDrop(a);

    let x = parseInt(a.getAttribute("data-index-h"));
    let y = parseInt(a.getAttribute("data-index-v"));

    if (rotationStatus % 2 == 0 && legal !== false) {
      for (let i = 0; i < length; i++) {
        currentTarget.classList.add("activePlayer");
        nextSibling = currentTarget.nextSibling;
        currentTarget = nextSibling;
      }
      shipSize.shift();

      return [
        a.getAttribute("data-index-v"),
        a.getAttribute("data-index-h"),
      ];
    }
    if (rotationStatus % 2 !== 0 && legal !== false) {
      currentTarget.classList.add("activePlayer");
      for (let i = 0; i < length; i++) {
        nextSibling = doublePlayerElements[y + i][x];
        currentTarget = nextSibling;
        currentTarget.classList.add("activePlayer");
      }
      shipSize.shift();
      return [
        a.getAttribute("data-index-v"),
        a.getAttribute("data-index-h"),
        true,
      ];
    }
    if (!legal == false) {
      alert("can't place ship here");
      return false;
    }
  };
  const switchName = (turn) => {
    if (turn % 2 == 0) {
      currentPlayer.innerText = input.value;
    } else {
      currentPlayer.innerText = "PC";
    }
  };
  const firing = (flag) => {
    if (flag) {
      currentPlayer.innerText = `${input.value} is firing`;
    } else {
      currentPlayer.innerText = `PC is firing`;
    }
  };
  const checkWinner = (flag) => {
    if (flag) {
      currentPlayer.innerText = `${input.value} HAS WON !!!!! `;
    } else {
      currentPlayer.innerText = `PC has won`;
    }
  };
  const reset = () => {
    pcElements.forEach((e) => {
      e.classList.remove("hit", "miss", "activePlayer");
    });
    playerElements.forEach((e) => {
      e.classList.remove("hit", "legal", "miss", "activePlayer");
    });
  };
  return {
    init,
    reset,
    rotation,
    renderPcShip,
    showIfLegal,
    markHit,
    checkWinner,
    loadShip,
    dragAndDrop,
    switchName,
  };
})();
exports.controlGrid = controlGrid;
