export const solve = (a, b) => {
  if (a === '*') {
    return true;
  }

  if (`*${a}` === b || `${a}*` === b) {
    return true;
  }

  if (a.length > b.length + 1) {
    return false;
  }
  const arStrings = a.split('*');

  if (arStrings.length === 1) {
    return a === b;
  }

  return (
    b.substring(0, arStrings[0].length) === arStrings[0] &&
    b.substring(b.length - arStrings[1].length, b.length) === arStrings[1]
  );
};
