const getMaxDigit = (num: number) => {
  let maxDigit = 0;
  let numMV = num;
  while (numMV > 0) {
    maxDigit = Math.max(maxDigit, numMV % 10);
    numMV = Math.floor(numMV / 10);
  }
  return maxDigit;
};

function maxSum(nums: number[]) {
  const maxPairs: Record<number, number[]> = {};

  nums.forEach((num) => {
    const maxDigit = getMaxDigit(num);
    if (!maxPairs[maxDigit]) {
      maxPairs[maxDigit] = [num];
    } else {
      if (maxPairs[maxDigit].length === 1) {
        maxPairs[maxDigit].push(num);
      } else {
        const minIndex = maxPairs[maxDigit][0] < maxPairs[maxDigit][1] ? 0 : 1;
        if (num > maxPairs[maxDigit][minIndex]) {
          maxPairs[maxDigit][minIndex] = num;
        }
      }
      maxPairs[maxDigit].sort((a, b) => b - a);
    }
  });

  let globalMax = -1;
  Object.values(maxPairs).forEach((pair) => {
    if (pair.length > 1) {
      const sum = pair[0] + pair[1];
      if (sum > globalMax) {
        globalMax = sum;
      }
    }
  });

  return globalMax;
}