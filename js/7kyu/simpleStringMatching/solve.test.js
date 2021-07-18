import { solve } from './solve';

describe('Solve tests', function () {
  it('Basic tests', () => {
    expect(solve('code*s', 'codewars')).toBe(true);
    expect(solve('codewar*s', 'codewars')).toBe(true);
    expect(solve('code*warrior', 'codewars')).toBe(false);
    expect(solve('c', 'c')).toBe(true);
    expect(solve('*s', 'codewars')).toBe(true);
    expect(solve('*s', 's')).toBe(true);
    expect(solve('s*', 's')).toBe(true);
    expect(solve('aa', 'aaa')).toBe(false);
    expect(solve('aa*', 'aaa')).toBe(true);
    expect(solve('aaa', 'aa')).toBe(false);
    expect(solve('aaa*', 'aa')).toBe(false);
    expect(solve('*', 'codewars')).toBe(true);
  });
});
