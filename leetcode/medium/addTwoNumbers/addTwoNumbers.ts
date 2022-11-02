export class ListNode {
  val;
  next;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let carry = 0;
  let sum = 0;
  let head = new ListNode(0);
  let now = head;
  let a = l1;
  let b = l2;

  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }

  if (carry) now.next = new ListNode(carry);

  return head.next;
};
