import { songDecoder } from './songDecoder';

describe('songDecoder tests', function () {
  it('It should pass fixed tests', function () {
    expect(songDecoder('AWUBBWUBC')).toBe('A B C'); // WUB should be replaced by 1 space
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toBe('A B C'); // multiples WUB should be replaced by only 1 space
    expect(songDecoder('WUBAWUBBWUBCWUB')).toBe('A B C'); // heading or trailing spaces should be removed
  });
});
