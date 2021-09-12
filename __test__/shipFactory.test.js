const { ship } = require("../src/shipFactory");

// finish testing all of the object public methods and properties
describe("testing ship methods", () => {
  let newShip;
  beforeEach(() => {
    newShip = ship(3);
  });
  test("test if hit", () => {
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
    expect(newShip.hitLocation.length).toBe(3);
  });
  test("test if ship is sunk", () => {
    newShip.hit(1);
    newShip.hit(2);
    newShip.hit(3);
    expect(newShip.isSunk()).toBeTruthy();
  });
});
