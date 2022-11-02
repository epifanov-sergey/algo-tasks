import { addTwoNumbers, ListNode } from './addTwoNumbers';

describe('addTwoNumbers problem', () => {
  it('l1 = [2,4,3], l2 = [5,6,4]', () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4)))
      )
    ).toStrictEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
  });

  it('l1 = [0], l2 = [0]', () => {
    expect(addTwoNumbers(new ListNode(0), new ListNode(0))).toStrictEqual(new ListNode(0));
  });

  it('l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', () => {
    expect(
      addTwoNumbers(
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))
          )
        ),
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
      )
    ).toStrictEqual(
      new ListNode(
        8,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))
          )
        )
      )
    );
  });
});
