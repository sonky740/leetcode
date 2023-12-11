/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  function reverseList(head: ListNode | null): ListNode | null {
      let prev = null;
      let current = head;
      while (current !== null) {
          let next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }
      return prev;
  }

  l1 = reverseList(l1);
  l2 = reverseList(l2);

  let head: ListNode | null = null;
  let carry = 0;
  
  while (l1 !== null || l2 !== null || carry > 0) {
      let sum = carry;
      if (l1 !== null) {
          sum += l1.val;
          l1 = l1.next;
      }
      if (l2 !== null) {
          sum += l2.val;
          l2 = l2.next;
      }

      let newNode = new ListNode(sum % 10);
      newNode.next = head;
      head = newNode;

      carry = Math.floor(sum / 10);
  }

  return head;
}