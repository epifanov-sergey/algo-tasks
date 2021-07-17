export const solve = (stones) => {
  let counter = 0;
  let lastSymbol = null;

  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === lastSymbol) {
      counter++;
    }
    lastSymbol = stones[i];
  }

  return counter;
};
