export const whatCentury = (year) => {
  const century = Math.ceil(year / 100);
  let ending = 'th';
  const lastDigit = century % 10;

  if (century > 10 && century < 20) {
    ending = 'th';
  } else if (lastDigit === 1) {
    ending = 'st';
  } else if (lastDigit === 2) {
    ending = 'nd';
  } else if (lastDigit === 3) {
    ending = 'rd';
  }

  return `${Number(century)}${ending}`;
};
