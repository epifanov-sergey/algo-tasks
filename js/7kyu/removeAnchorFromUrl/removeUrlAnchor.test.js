import { removeUrlAnchor } from './removeUrlAnchor';

describe('removeUrlAnchor tests', () => {
  it('Testing for fixed tests', () => {
    expect(removeUrlAnchor('www.codewars.com#about')).toBe('www.codewars.com');
    expect(removeUrlAnchor('www.codewars.com/katas/?page=1#about')).toBe(
      'www.codewars.com/katas/?page=1'
    );
    expect(removeUrlAnchor('www.codewars.com/katas/')).toBe('www.codewars.com/katas/');
  });
});
