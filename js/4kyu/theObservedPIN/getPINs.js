export const getPINs = (observed) => {
  const neighbours = {
    0: ['0', '8'],
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['2', '3', '6'],
    4: ['1', '4', '5', '7'],
    5: ['2', '4', '5', '6', '8'],
    6: ['3', '5', '6', '9'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9'],
  };

  const digits = observed.split('');
  const pins = [];
  const neededNeighbours = [];

  digits.forEach((digit) => {
    neededNeighbours.push(neighbours[digit]);
  });

  if (neededNeighbours.length === 1) {
    return neededNeighbours[0];
  }

  const recursiveIterator = (arr, currentIndex, ...args) => {
    if (arr && arr.length) {
      for (let i = 0; i < arr.length; i++) {
        debugger;

        if (currentIndex < neededNeighbours.length - 1) {
          recursiveIterator(neededNeighbours[currentIndex + 1], currentIndex + 1, ...args, arr[i]);
        } else {
          debugger;
          pins.push(`${args.join('')}${arr[i]}`);
        }
      }
    }
  };

  recursiveIterator(neededNeighbours[0], 0);

  return pins;
};
