function minimumBoxes(apple: number[], capacity: number[]): number {
  const totalApples = apple.reduce((acc, cur) => acc + cur, 0);
  capacity.sort((a, b) => b - a);
  let total = 0;

  for (let i = 0; i < capacity.length; i++) {
    total += capacity[i];
    if (total >= totalApples) {
      return i + 1;
    }
  }

  return 0;
}