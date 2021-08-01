export const removeConsecutiveDuplicates = (s) => {
  const arr = s.split(' ');
  const unique = arr.filter((word, index, origin) => {
    return origin[index + 1] !== word;
  });

  return unique.join(' ');
};
