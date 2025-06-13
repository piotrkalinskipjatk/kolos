const { add, subtract, multiply, divide } = require("../src/calculator");

test("addition", () => {
  expect(add(3, 2)).toBe(5);
});

test("subtraction", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiplication", () => {
  expect(multiply(4, 2)).toBe(8);
});

test("division", () => {
  expect(divide(10, 2)).toBe(5);
});

test("division by zero throws", () => {
  expect(() => divide(5, 0)).toThrow("Division by zero");
});
