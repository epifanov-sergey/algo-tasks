export const solution = (input, markers) => {
  const inputStrings = input.split('\n');
  const regexp = new RegExp(`[${markers.join('')}]`);

  const outputStrings = inputStrings.map((str) => {
    const match = str.match(regexp);

    if (match) {
      return str.slice(0, match.index - 1);
    }

    return str;
  });

  return outputStrings.join('\n');
};
