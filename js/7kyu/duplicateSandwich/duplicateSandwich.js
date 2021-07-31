export const duplicateSandwich = (a) => {
  const map = {};

  for (let i = 0; i < a.length; i++) {
    if (map[a[i]] !== undefined) {
      return a.slice(map[a[i]] + 1, i);
    }
    map[a[i]] = i;
  }

  return [];
};
