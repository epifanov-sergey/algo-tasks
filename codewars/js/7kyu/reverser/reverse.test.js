import { reverse } from './reverse';

describe('reverse tests', () => {
  it('basic tests', () => {
    expect(reverse(1234)).toBe(4321);
    expect(reverse(10987)).toBe(78901);
    expect(reverse(1020)).toBe(201);
  });
});
