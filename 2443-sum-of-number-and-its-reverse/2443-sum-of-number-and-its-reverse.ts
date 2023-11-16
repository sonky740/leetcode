function sumOfNumberAndReverse(num: number): boolean {
  for (let i = 0; i <= num; i++) {
    let reverse = parseInt(i.toString().split('').reverse().join(''));
    if (i + reverse === num) {
      return true;
    }
  }
  return false;
}