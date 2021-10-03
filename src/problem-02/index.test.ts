import { func } from ".";

it("should return [120, 60, 40, 30, 24]", () => {
  const list = [1, 2, 3, 4, 5];
  const result = func(list);

  expect(result).toEqual([120, 60, 40, 30, 24]);
});

it("should return [2, 3, 6]", () => {
  const list = [3, 2, 1];
  const result = func(list);

  expect(result).toEqual([2, 3, 6]);
});
