import { generateColor } from './generateColor';

describe('Generate color tests', () => {
  it('Symbol test', () => {
    expect(generateColor().substring(0, 1)).toBe('#');
  });

  it('Length test', function () {
    expect(generateColor().length).toBe(7);
  });

  it('Regex test', function () {
    expect(
      /#[A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9][A-Fa-f0-9]/g.test(generateColor())
    ).toBe(true);
  });
});
