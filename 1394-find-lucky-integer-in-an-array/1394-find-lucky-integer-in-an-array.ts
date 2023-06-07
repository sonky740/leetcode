function findLucky(arr: number[]): number {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  let max = -1;

  for (const [key, value] of map.entries()) {
    if (key === value) {
      max = Math.max(max, key);
    }
  }
  return max;
}