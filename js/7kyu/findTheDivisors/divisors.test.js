import { divisors } from './divisors';

describe('divisors tests', () => {
  it('test', () => {
    expect(divisors(15)).toEqual([3, 5]);
    expect(divisors(12)).toEqual([2, 3, 4, 6]);
    expect(divisors(13)).toEqual('13 is prime');
  });
});
