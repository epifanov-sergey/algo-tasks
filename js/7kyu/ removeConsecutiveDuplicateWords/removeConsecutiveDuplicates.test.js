import { removeConsecutiveDuplicates } from './removeConsecutiveDuplicates';

describe('removeConsecutiveDuplicates tests', () => {
  it('should handle example case', () => {
    expect(
      removeConsecutiveDuplicates(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
      )
    ).toBe('alpha beta gamma delta alpha beta gamma delta');
  });
});
