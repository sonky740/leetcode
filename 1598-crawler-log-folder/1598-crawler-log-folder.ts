function minOperations(logs: string[]): number {
  return logs.reduce((depth, log) => {
    if (log === '../') {
      if (depth > 0) {
        return depth - 1;
      }
    } else if (log !== './') {
      return depth + 1;
    }
    return depth;
  }, 0);
}