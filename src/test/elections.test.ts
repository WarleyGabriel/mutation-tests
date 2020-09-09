import { canBePresident } from "../elections";

test("An 27-year-old cannot be a president", () => {
  expect(canBePresident(27)).toBe(false);
});

test.skip("An 35-year-old can be a president", () => {
  expect(canBePresident(35)).toBe(true);
});
