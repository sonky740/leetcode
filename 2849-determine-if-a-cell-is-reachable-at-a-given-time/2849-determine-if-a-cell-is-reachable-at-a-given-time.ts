function isReachableAtTime(
  sx: number,
  sy: number,
  fx: number,
  fy: number,
  t: number
): boolean {
  let differX = Math.abs(sx - fx);
  let differY = Math.abs(sy - fy);

  if (differX === 0 && differY === 0 && t === 1) {
    return false;
  }

  let MaxDiagonalDistance = Math.min(differX, differY);
  differX -= MaxDiagonalDistance;
  differY -= MaxDiagonalDistance;
  MaxDiagonalDistance += Math.max(differX, differY);

  return MaxDiagonalDistance <= t;
}