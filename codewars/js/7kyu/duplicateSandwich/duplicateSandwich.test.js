import { duplicateSandwich } from './duplicateSandwich';

describe('duplicateSandwich tests', function () {
  it('example tests', function () {
    expect(duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])).toStrictEqual([2, 3, 4, 5, 6]);
    expect(duplicateSandwich(['None', 'Hello', 'Example', 'hello', 'None', 'Extra'])).toStrictEqual(
      ['Hello', 'Example', 'hello']
    );
    expect(duplicateSandwich([0, 0])).toStrictEqual([]);
    expect(duplicateSandwich([true, false, true])).toStrictEqual([false]);
    expect(duplicateSandwich('example')).toBe('xampl');
  });
});
