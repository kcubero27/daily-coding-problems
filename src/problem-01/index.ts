export const func = (list: number[], k: number): boolean => {
  const set = new Set();
  let result = false;

  for (let i = 0; i < list.length; i++) {
    const current = list[i];

    if (set.has(current)) {
      result = true;
      break;
    }

    set.add(k - current);
  }

  return result;
};
