import { killer } from './killer';

describe('Killer tests', function () {
  it('The killer is James!', function () {
    expect(
      killer(
        {
          James: ['Jacob', 'Bill', 'Lucas'],
          Johnny: ['David', 'Kyle', 'Lucas'],
          Peter: ['Lucy', 'Kyle'],
        },
        ['Lucas', 'Bill']
      )
    ).toBe('James');
  });

  it('The killer is Megan!', function () {
    expect(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben'])).toBe('Megan');
  });
});
