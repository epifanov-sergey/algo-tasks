import { isPalindrome } from './isPalindrome';

describe('palindrome number problem', () => {
  it.each([
    [121, true],
    [-121, false],
    [10, false],
  ])('case %d', (number, expected) => {
    expect(isPalindrome(number)).toBe(expected);
  });
});
