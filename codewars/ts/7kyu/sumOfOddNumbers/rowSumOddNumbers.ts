export function rowSumOddNumbers(n: number): number {
  let rowNumber = n - 1;
  let startValue = 0;

  while (rowNumber > 0) {
    startValue += rowNumber;
    rowNumber--;
  }
  startValue = startValue * 2 + 1;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += startValue + i * 2;
  }

  return sum;
}
