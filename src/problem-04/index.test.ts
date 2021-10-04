import { func } from ".";

it("should sort and array of arrays", () => {
  const list = [
    [10, 15, 30],
    [12, 15, 20],
    [17, 20, 32],
  ];
  const result = func(list);

  expect(result).toEqual([10, 12, 15, 15, 17, 20, 20, 30, 32]);
});
