const ship = require("../src/shipFactory");
jest.mock(ship);

const newShip = ship(4, 0);

for (let i = 0; i < 4; i++) {
  newShip.hit(1);
}

test("test ship issunk", () => {
  expect(ship.isSunk()).toBe(true);
});
