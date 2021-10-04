export const func = (list: number[][]) => {
  const oneDimension = list.flat();
  return oneDimension.sort();
};
