import { knight } from './knight';

describe('Knight tests', () => {
  it.each([
    ['a1', 'a1', 0],
    ['a1', 'b3', 1],
    ['a1', 'c1', 2],
    ['a1', 'f1', 3],
    ['a1', 'f3', 3],
    ['a1', 'f4', 4],
    ['a1', 'f7', 5],
    ['a5', 'd1', 3],
  ])('test', (start, end, count) => {
    expect(knight(start, end)).toBe(count);
  });
});
