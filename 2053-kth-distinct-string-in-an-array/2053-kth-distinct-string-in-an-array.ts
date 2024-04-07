function kthDistinct(arr: string[], k: number): string {
  const countMap = new Map();

  arr.forEach((str) => {
    countMap.set(str, (countMap.get(str) || 0) + 1);
  });

  return (
    arr.find((str) => {
      if (countMap.get(str) === 1) {
        k--;
        return k === 0;
      }
      return false;
    }) || ''
  );
}