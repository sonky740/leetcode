function canBeEqual(target: number[], arr: number[]): boolean {
  const data = {};

  for (let i = 0; i < target.length; ++i) {
    data[target[i]] = data[target[i]] + 1 || 1;
  }

  for (let i = 0; i < arr.length; ++i) {
    if (data.hasOwnProperty(arr[i]) === false) return false;
    if (data.hasOwnProperty(arr[i]) === true) {
      if (data[arr[i]] <= 0) return false;
      data[arr[i]] = data[arr[i]] - 1;
    }
  }
  return true;
}