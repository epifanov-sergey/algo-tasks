import { doubles } from './doubles';

describe('doubles tests', () => {
  it('basic tests', () => {
    expect(doubles('abbbzz')).toBe('ab');
    expect(doubles('zzzzykkkd')).toBe('ykd');
    expect(doubles('abbcccdddda')).toBe('aca');
    expect(doubles('vvvvvoiiiiin')).toBe('voin');
    expect(doubles('rrrmooomqqqqj')).toBe('rmomj');
    expect(doubles('xxbnnnnnyaaaaam')).toBe('bnyam');
  });
});
