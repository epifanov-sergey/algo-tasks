import { humanYearsCatYearsDogYears } from './humanYearsCatYearsDogYears';

describe('catYearsDogYears tests', function () {
  it('one', function () {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15]);
  });

  it('two', function () {
    expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24]);
  });

  it('ten', function () {
    expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64]);
  });
});
