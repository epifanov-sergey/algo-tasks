import { removeDuplicateWords } from './removeDuplicateWords';

describe('removeDuplicateWords tests', function () {
  it('Should return a string', function () {
    expect(
      removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
      )
    ).toBe('alpha beta gamma delta');
  });
});
