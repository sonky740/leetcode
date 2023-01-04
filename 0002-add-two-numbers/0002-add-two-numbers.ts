function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let carry = 0;
  let head = new ListNode();
  let current = head;

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head.next;
}

// ListNode를 안 쓸 경우 이렇게 풀 듯...
// const addTwoNumbers = (l1: number[], l2: number[]) => {
//   const answer: number[] = [];
//   const n1 = Number(l1.reverse().join(''));
//   const n2 = Number(l2.reverse().join(''));
//   const sum = (n1 + n2).toString();

//   for (let i = sum.length - 1; i >= 0; i--) {
//     answer.push(+sum[i]);
//   }

//   return answer;
// };