export const unluckyDays = (year: number): number => {
  let counter: number = 0;

  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13);

    if (date.getDay() === 5) {
      counter++;
    }
  }

  return counter;
};
