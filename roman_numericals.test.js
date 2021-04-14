const roman_numerals = require("./roman_numerals");
// Test.assertEquals(solution('XXI'), 21)
// Test.assertEquals(solution('I'), 1)
// Test.assertEquals(solution('IV'), 4)
// Test.assertEquals(solution('V'), 5)
// Test.assertEquals(solution('MMVIII'), 2008)
// Test.assertEquals(solution('MDCLXVI'), 1666)

test("decimal value for single roman symbols", () => {
  expect(roman_numerals("I")).toBe(1);
  expect(roman_numerals("V")).toBe(5);
  expect(roman_numerals("X")).toBe(10);
  expect(roman_numerals("L")).toBe(50);
});
test("decimal value for double roman symbols", () => {
  expect(roman_numerals("II")).toBe(2);
  //expect(roman_numerals(`III`)).toBe(3);
  // expect(roman_numerals(`VX`)).toBe(5);
  // expect(roman_numerals(`XX`)).toBe(10);
  // expect(roman_numerals(`LL`)).toBe(50);
});
