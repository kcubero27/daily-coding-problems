export const func = (list: number[]): number[] => {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const listWithoutCurrentItem = list.filter((_, index) => index !== i);
    result[i] = listWithoutCurrentItem.reduce((prev, curr) => prev * curr);
  }

  return result;
};
