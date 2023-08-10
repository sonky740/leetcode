function maxAbsValExpr(arr1: number[], arr2: number[]): number {
  let max = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      const val = Math.abs(arr1[i] - arr1[j]) + Math.abs(arr2[i] - arr2[j]) + (j - i);
      if (val > max) max = val;
    }
  }

  return max;
};