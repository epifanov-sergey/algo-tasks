export const coinCombo = (cents) => {
  const res = [0, 0, 0, 0];
  const coins = [1, 5, 10, 25];
  let value = cents;

  for (let i = coins.length - 1; i >= 0; i--) {
    let rest = Math.floor(value / coins[i]);

    if (rest >= 1) {
      res[i] = rest;
    }
    value = value % coins[i];
  }

  return res;
};
