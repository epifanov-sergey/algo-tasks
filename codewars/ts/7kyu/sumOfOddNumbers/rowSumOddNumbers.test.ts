import { rowSumOddNumbers } from './rowSumOddNumbers';

describe('rowSumOddNumbers tests', function () {
  it('Testing for 1', () => {
    expect(rowSumOddNumbers(1)).toBe(1);
  });
  it('Testing for 2', () => {
    expect(rowSumOddNumbers(2)).toBe(8);
  });
  it('Testing for 13', () => {
    expect(rowSumOddNumbers(13)).toBe(2197);
  });
  it('Testing for 19', () => {
    expect(rowSumOddNumbers(19)).toBe(6859);
  });
  it('Testing for 41', () => {
    expect(rowSumOddNumbers(41)).toBe(68921);
  });
  it('Testing for 42', () => {
    expect(rowSumOddNumbers(42)).toBe(74088);
  });
  it('Testing for 74', () => {
    expect(rowSumOddNumbers(74)).toBe(405224);
  });
  it('Testing for 86', () => {
    expect(rowSumOddNumbers(86)).toBe(636056);
  });
  it('Testing for 93', () => {
    expect(rowSumOddNumbers(93)).toBe(804357);
  });
  it('Testing for 101', () => {
    expect(rowSumOddNumbers(101)).toBe(1030301);
  });
});
