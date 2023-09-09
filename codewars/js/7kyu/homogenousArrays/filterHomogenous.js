export const filterHomogenous = (arrays) => {
  return arrays.filter((subArray) => {
    if (!subArray.length) {
      return false;
    }

    const typesMap = subArray.reduce(
      ({ string, number }, item) => {
        if (typeof item === 'string') {
          string++;
        }

        if (typeof item === 'number') {
          number++;
        }

        return { number, string };
      },
      { string: 0, number: 0 }
    );

    return typesMap.string === 0 || typesMap.number === 0;
  });
};
