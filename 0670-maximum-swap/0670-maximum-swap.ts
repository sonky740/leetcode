function maximumSwap(num: number): number {
  const arr = Array.from(num.toString()).map(Number);
  const lastIndex = Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    lastIndex[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let d = 9; d > arr[i]; d--) {
      if (lastIndex[d] > i) {
        [arr[i], arr[lastIndex[d]]] = [arr[lastIndex[d]], arr[i]];
        return parseInt(arr.join(''));
      }
    }
  }

  return num;
};