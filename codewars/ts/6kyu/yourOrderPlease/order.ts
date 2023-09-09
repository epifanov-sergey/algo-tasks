export const order = (words: string): string => {
  if (words === '') {
    return '';
  }
  const arWords = words.split(' ');

  arWords.sort((a, b) => {
    if (a === '' || b === '') {
      return 0;
    }
    const regexp = /[1-9]/;
    const aDigitPos = a.search(regexp);
    const bDigitPos = b.search(regexp);

    return Number(a[aDigitPos]) - Number(b[bDigitPos]);
  });

  return arWords.join(' ');
};
