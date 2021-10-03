import { func } from ".";

it("should return true", () => {
  const list = [10, 15, 3, 7];
  const k = 17;

  const result = func(list, k);
  expect(result).toBeTruthy();
});
