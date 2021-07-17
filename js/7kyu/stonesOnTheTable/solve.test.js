import { solve } from './solve';
describe('Stones on the table tests', () => {
  it('example tests', () => {
    expect(solve('RRGGBB')).toBe(3);
    expect(solve('RGBRGB')).toBe(0);
    expect(solve('BGRBBGGBRRR')).toBe(4);
    expect(solve('GBBBGGRRGRB')).toBe(4);
    expect(solve('GBRGGRBBBBRRGGGB')).toBe(7);
  });
});
