export const validSpacing = (s) => {
  return (
    s
      .trim()
      .split(' ')
      .filter((v) => v)
      .join(' ') === s
  );
};
