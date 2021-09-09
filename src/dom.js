const { gameBoard } = require("./Gameboard");
const controlGrid = (() => {
  const grid = document.querySelectorAll(".battle-grid");
  const playerNameForm = document.forms["playerName"];
  let arr = [];
  let value;

  const __modalControl = () => {
    playerNameForm.addEventListener("submit", (e) => {
      value = playerNameForm.querySelector("input").value;
      e.preventDefault();
      __takeName();
      __switchPlayer();
    });
  };

  const init = () => {
    __modalControl();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        grid.forEach((e) => {
          const elem = document.createElement("div");
          elem.classList.add("element");
          elem.setAttribute("data-index", `${j}`);
          e.appendChild(elem);
        });
      }
    }
    listeners();
  };
  const elements = () => {
    const playerElements = document.querySelectorAll(
      ".grid-container .battle-grid:nth-child(1) .element"
    );
    const pcElements = document.querySelectorAll(
      ".grid-container .battle-grid:nth-child(2) .element "
    );
    return { playerElements, pcElements };
  };
  const listeners = (size = 5) => {
    elements().playerElements.forEach((e) => {
      e.addEventListener("mouseover", () => {
        __showLegalMove(e, size);
      });
      e.addEventListener("mouseout", () => {
        __showLegalMove(e, size, false);
      });
      e.addEventListener("click", () => {
        __printShipOnScreen(e, size);
      });
    });
  };

  const __showLegalMove = (e, size, flag = true) => {
    const LAST_NUMBER = 10;
    let target = e;
    let nextTarget;
    let lastTarget;
    for (let i = 0; i < size; i++) {
      nextTarget = target.nextSibling;
      arr.push(target);
      lastTarget = arr[arr.length - 1];
      target = nextTarget;
    }
    const lastTargetvalue = parseInt(
      lastTarget.getAttribute("data-index")
    );
    const targetValue = parseInt(e.getAttribute("data-index"));
    // check if e is on an already placed ship
    const rule = () => e.className != "element activePlayer";
    const legalPlacement = arr.every(rule);

    if (
      lastTargetvalue == LAST_NUMBER ||
      targetValue > lastTargetvalue ||
      legalPlacement == false
    ) {
      e.classList.add("illegal");
    } else {
      arr.forEach((s) => {
        s.classList.add("legal");
      });
    }
    if (!flag) {
      arr.forEach((a) => {
        a.classList.remove("legal");
        a.classList.remove("illegal");
      });
      arr.length = 0;
    }
  };
  const __printShipOnScreen = (e, size) => {
    const rule = () => {
      if (e.className == "element legal") {
        return true;
      } else {
        return false;
      }
    };
    const legalPlacement = arr.every(rule);
    if (legalPlacement) {
      let target = e;
      let nextTarget;
      for (let i = 0; i < size; i++) {
        target.classList.add("activePlayer");
        nextTarget = target.nextSibling;
        target = nextTarget;
      }
    }
  };
  // listen to enemy board, if current playerTurn, if grid not hit, hit
  const hitControl = (board) => {
    elements().pcElements.forEach((e) => {
      e.addEventListener("click", (e) => {
        if (board.getTurn() % 2 == 0) {
          if (
            e.target.className !== "element activePlayer hit" ||
            e.target.className !== "element miss"
          ) {
            if (
              board.recieveAttack(e.target.getAttribute("data-index"))
            ) {
              markHit(e, true, board);
              if (board.allShipsSunk()) {
                checkWinner(0);
                __reset(board);
              }
            } else {
              markHit(e, false, board);
            }
          }
        }
        if (board.getTurn() % 2 == 1) {
          // change turns to pc
          if (
            board.recieveAttack(
              board.getPc().attack(elements().playerElements, false)
            )
          ) {
            markPcHit(board.getPc().returnNum(), true, board);
            if (board.allShipsSunk()) {
              checkWinner(1);
              __reset(board);
            }
          } else {
            markPcHit(board.getPc().returnNum(), false, board);
          }
        }
      });
    });
  };
  // mark grid as hit and switchplayer
  const markHit = (e, flag = true, board) => {
    // if player attack
    e.target.classList.remove("legal");

    if (board.getTurn() % 2 == 0) {
      // if hit ship
      if (flag) {
        e.target.classList.add("hit");
        board.setTurn();
        __switchPlayer(board.getTurn());
        // if player miss
      } else {
        e.target.classList.add("element", "miss");
        board.setTurn();
        __switchPlayer(board.getTurn());
      }
    }
  };
  const markPcHit = (number, flag, board) => {
    if (flag) {
      elements().playerElements.item(number).classList.add("hit");
      board.setTurn();
      __switchPlayer(board.getTurn());
    } else {
      elements().playerElements.item(number).classList.add("miss");
      board.setTurn();
      __switchPlayer(board.getTurn());
    }
  };
  const checkWinner = (number) => {
    if (number === 1) {
      console.log(`${value} won the game`);
      return true;
    }
    if (number === 0) {
      console.log("Computer won the game");
      return true;
    }
  };
  const __takeName = () => {
    const modelContainer = document.querySelector(".modal-container");
    modelContainer.classList.toggle("modal-container");
    modelContainer.classList.toggle("modal-container-hidden");
  };
  const __switchPlayer = (number = 0) => {
    const currentPlayer = document.querySelector(".currentPlayer");
    if (number % 2 == 0) {
      // todo: finsih player attack
      grid[1].classList.remove("battle-grid-off");
      currentPlayer.innerHTML = `Current Player is ${value}`;
    } else {
      // todo: finish pc attack
      grid[1].classList.add("battle-grid-off");
      currentPlayer.innerHTML = `Current Player is: PC`;
    }
  };
  const __reset = (board) => {
    __modalControl();
    init();
    board.resetBoard();
  };
  return {
    init,
    hitControl,
    markPcHit,
    listeners,
  };
})();
exports.controlGrid = controlGrid;
