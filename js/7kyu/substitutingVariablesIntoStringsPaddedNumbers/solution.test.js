import { solution } from './solution';
describe('Solution tests', () => {
  it('Testing for fixed tests', () => {
    expect(solution(5)).toBe('Value is 00005');
    expect(solution(1204)).toBe('Value is 01204');
    expect(solution(109)).toBe('Value is 00109');
    expect(solution(0)).toBe('Value is 00000');
  });
});
