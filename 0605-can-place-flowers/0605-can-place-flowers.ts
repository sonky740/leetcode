function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let answer = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      answer++;
      flowerbed[i] = 1;
    }
  }
  return answer >= n;
}