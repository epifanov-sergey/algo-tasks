import { solve } from './solve';

describe('solve tests', () => {
  it('basic tests', () => {
    expect(solve('code')).toBe('code');
    expect(solve('CODe')).toBe('CODE');
    expect(solve('COde')).toBe('code');
    expect(solve('Code')).toBe('code');
  });
});
