import { coinCombo } from './coinCombo';

describe('coinCombo tests', () => {
  it('takes 1 and returns, 1 Penny.', () => {
    expect(coinCombo(1)).toStrictEqual([1, 0, 0, 0]);
  });

  it('takes 6 and returns, 1 Penny, 1 Nickle.', () => {
    expect(coinCombo(6)).toStrictEqual([1, 1, 0, 0]);
  });

  it('takes 11 and returns, 1 Dime, 1 Penny.', () => {
    expect(coinCombo(11)).toStrictEqual([1, 0, 1, 0]);
  });
});
