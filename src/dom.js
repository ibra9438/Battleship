const createGrid = (() => {
  const humanGrid = document.querySelectorAll('.battle-grid');
  const init = () => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const element = document.createElement('div');
        element.classList.add('element');
        element.setAttribute('data-index', `${i}`);
        humanGrid.forEach((e) => {
          const element = document.createElement('div');
          element.classList.add('element');
          element.setAttribute('data-index', `${i}`);
          e.appendChild(element);
        });
      }
    }
  };
  const renderHumanShip = (shipLocation) => {};
  const renderPcShip = () => {};
  return { init };
})();
exports.createGrid = createGrid;
