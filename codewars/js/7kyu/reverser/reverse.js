export const reverse = (n) => {
  let num = n;
  const arr = [];

  while (num > 9) {
    arr.push(num % 10);
    num = ~~(num / 10);
  }
  arr.push(num);

  return arr.reduce((acc, current, index) => {
    return acc + current * 10 ** (arr.length - index - 1);
  }, 0);
};
