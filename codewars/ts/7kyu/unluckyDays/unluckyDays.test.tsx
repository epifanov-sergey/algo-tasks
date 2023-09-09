import { unluckyDays } from './unluckyDays';

describe('Unlucky days tests', () => {
  it('Basic tests', () => {
    expect(unluckyDays(1586)).toBe(1);
    expect(unluckyDays(1001)).toBe(3);
    expect(unluckyDays(2819)).toBe(2);
    expect(unluckyDays(2792)).toBe(2);
    expect(unluckyDays(2723)).toBe(2);
    expect(unluckyDays(1909)).toBe(1);
    expect(unluckyDays(1812)).toBe(2);
    expect(unluckyDays(1618)).toBe(2);
    expect(unluckyDays(2132)).toBe(1);
    expect(unluckyDays(2065)).toBe(3);
  });
});
