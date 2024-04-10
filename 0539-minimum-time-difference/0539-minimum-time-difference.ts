function findMinDifference(timePoints: string[]): number {
  const minutes = timePoints.map((time) => {
    const [hour, minute] = time.split(':').map(Number);
    return hour * 60 + minute;
  });
  minutes.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 1; i < minutes.length; i++) {
    minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
  }
  minDiff = Math.min(
    minDiff,
    minutes[0] + 24 * 60 - minutes[minutes.length - 1]
  );
  return minDiff;
}