import { generateRange } from './generateRange';

describe('generateRange tests', function () {
  it('generateRange(2, 10, 2) tests', () => {
    expect(generateRange(2, 10, 2)).toStrictEqual([2, 4, 6, 8, 10]);
  });
});
