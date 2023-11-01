/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findMode(root: TreeNode | null): number[] {
  let maxCount = 0;
  let count = 0;
  let prevVal = null;
  const result = [];
  function traverse(node: TreeNode | null) {
    if (!node) return;
    traverse(node.left);
    if (node.val === prevVal) {
      count++;
    } else {
      count = 1;
    }
    if (count > maxCount) {
      maxCount = count;
      result.length = 0;
      result.push(node.val);
    } else if (count === maxCount) {
      result.push(node.val);
    }
    prevVal = node.val;
    traverse(node.right);
  }
  traverse(root);
  return result;
}