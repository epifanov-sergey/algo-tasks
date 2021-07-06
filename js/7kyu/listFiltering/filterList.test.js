import { filterList } from './filterList';

describe('FilterList tests', () => {
  it('test', () => {
    expect(filterList([1, 2, 'a', 'b'])).toStrictEqual([1, 2]);
    expect(filterList([1, 'a', 'b', 0, 15])).toStrictEqual([1, 0, 15]);
    expect(filterList([1, 2, 'aasf', '1', '123', 123])).toStrictEqual([1, 2, 123]);
  });
});
