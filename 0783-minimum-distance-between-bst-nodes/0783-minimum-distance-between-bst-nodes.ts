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

function minDiffInBST(root: TreeNode | null): number {
  let min = Infinity;
  let prev = -1;
  const inOrder = (node: TreeNode | null) => {
    if (node === null) return;
    inOrder(node.left);
    if (prev !== -1) {
      min = Math.min(min, node.val - prev);
    }
    prev = node.val;
    inOrder(node.right);
  };
  inOrder(root);
  return min;
}