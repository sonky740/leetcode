function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3 || arr[0] >= arr[1]) return false;

  let peak = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (peak && arr[i] > arr[i + 1]) {
      peak = false;
    } else if ((!peak && arr[i] <= arr[i + 1]) || arr[i] === arr[i + 1]) {
      return false;
    }
  }

  return peak ? false : true;
}