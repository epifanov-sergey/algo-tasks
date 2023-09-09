import { solution } from './solution';

describe('strip comments', () => {
  it.each([
    [
      'apples, plums % and bananas\npears\noranges !applesauce',
      ['%', '!'],
      'apples, plums\npears\noranges',
    ],
    ['Q @b\nu\ne -e f g', ['@', '-'], 'Q\nu\ne'],
  ])('test %s', (input, markers, expected) => {
    expect(solution(input, markers)).toBe(expected);
  });
});
