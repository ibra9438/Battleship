const { gameBoard } = require("./Gameboard");

const controlGrid = (() => {
  const grid = document.querySelectorAll(".battle-grid");
  const init = () => {
    let dataIndex = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid.forEach((e) => {
          const elem = document.createElement("div");
          elem.classList.add("element");
          elem.setAttribute("data-index", `${dataIndex}`);
          e.appendChild(elem);
        });
        dataIndex++;
      }
    }
  };
  const elements = () => {
    const humanElemnts = document.querySelectorAll(
      ".grid-container .battle-grid:nth-child(1) .element"
    );
    const pcElements = document.querySelectorAll(
      ".grid-container .battle-grid:nth-child(2) .element "
    );
    return { humanElemnts, pcElements };
  };
  const renderShip = (shipLocation, playerFlag = true) => {
    let length = shipLocation.length;
    let shipIndex = shipLocation[0];
    // if true render player
    if (playerFlag == true) {
      for (let i = 0; i < length; i++) {
        elements()
          .humanElemnts.item(shipIndex + i)
          .classList.add("activePlayer");
      }
    } else {
      for (let i = 0; i < length; i++) {
        elements()
          .pcElements.item(shipIndex + i)
          .classList.add("activePlayer");
      }
    }
  };
  const showCurrentPlayer = () => {};
  const hitListen = (board) => {
    elements().pcElements.forEach((e) => {
      e.addEventListener("click", (e) => {
        if (board.getTurn() % 2 == 0) {
          if (
            humanGameboard.recieveAttack(
              e.target.getAttribute("data-index")
            )
          ) {
            e.target.classList.add("hit");
            board.setTurn();
          } else {
            e.target.classList.add("miss");
            board.setTurn();
          }
        }
        if (board.getTurn() % 2 == 1) {
          if (
            pcGameBoard.recieveAttack(
              e.target.getAttribute("data-index")
            )
          ) {
            e.target.classList.add("hit");
            board.setTurn();
          } else {
            e.target.classList.add("miss");
            board.setTurn();
          }
        }
      });
    });
  };
  return { init, renderShip, hitListen };
})();
exports.controlGrid = controlGrid;
