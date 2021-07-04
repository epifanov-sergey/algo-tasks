export const sumTwoSmallestNumbers = (numbers) => {
  const min = Math.min(...numbers);
  const restNumbers = numbers.filter((item) => item !== min);

  const isRestNotContainsMin = restNumbers.length + 1 === numbers.length;

  if (isRestNotContainsMin) {
    return min + Math.min(...restNumbers);
  } else {
    return min * 2;
  }
};
