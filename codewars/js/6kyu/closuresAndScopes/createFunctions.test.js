import { createFunctions } from './createFunctions';

describe('createFunctions tests', () => {
  it('functions must return correct number', () => {
    const callbacks = createFunctions(5);

    for (let i = 0; i < callbacks.length; i++) {
      expect(callbacks[i]()).toBe(i);
    }
  });
});
