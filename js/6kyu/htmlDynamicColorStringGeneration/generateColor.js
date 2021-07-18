export const generateColor = () => {
  const availableSymbols = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'A',
    'b',
    'B',
    'c',
    'C',
    'd',
    'D',
    'e',
    'E',
    'f',
    'F',
  ];
  const maxLength = 6;

  let result = '';

  for (let i = 0; i < maxLength; i++) {
    result += availableSymbols[Math.floor(Math.random() * availableSymbols.length)];
  }

  return `#${result}`;
};
