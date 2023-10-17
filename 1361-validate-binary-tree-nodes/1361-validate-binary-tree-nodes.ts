function validateBinaryTreeNodes(
  n: number,
  leftChild: number[],
  rightChild: number[]
): boolean {
  let parent = Array(n).fill(-1);
  const dfs = (i) => i >= 0 && --n && dfs(leftChild[i]) & dfs(rightChild[i]);
  for (let i in leftChild) {
    if (
      (leftChild[i] >= 0 && parent[leftChild[i]] >= 0) ||
      (rightChild[i] >= 0 && parent[rightChild[i]] >= 0)
    ) {
      return false;
    }
    parent[leftChild[i]] = i;
    parent[rightChild[i]] = i;
  }
  return dfs(parent.indexOf(-1)) || !n;
}