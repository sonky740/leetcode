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

function splitListToParts(head: ListNode, k: number): Array<ListNode | null> {
  let node = head;
  let count = 0;
  while (node) {
    count++;
    node = node.next;
  }

  const result = [];
  let remainder = count % k;
  let size = Math.floor(count / k);
  node = head;
  for (let i = 0; i < k; i++) {
    result.push(node);
    for (let j = 0; j < size + (remainder > 0 ? 1 : 0) - 1; j++) {
      if (node) {
        node = node.next;
      }
    }
    if (node) {
      const next = node.next;
      node.next = null;
      node = next;
    }
    remainder--;
  }
  return result;
}