import { filterHomogenous } from './filterHomogenous';

describe('filterHomogenous tests', () => {
  it('test', () => {
    expect(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])).toStrictEqual([
      [1, 5, 4],
      ['b'],
    ]);

    expect(
      filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
    ).toStrictEqual([[123, 234, 432], ['', 'abc'], [''], ['', '1']]);
  });
});
