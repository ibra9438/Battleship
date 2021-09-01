const { ship } = require("../src/shipFactory");

const newShip = ship(4, 0);

for (let i = 0; i < 4; i++) {
  newShip.hit(i);
}

test("test if hitSquares is being pushed", () => {
  expect(newShip.hitSquares.length).toBe(4);
});

test("test ship isSunk", () => {
  expect(newShip.isSunk()).toBe(true);
});

// finish testing all of the object public methods and properties
