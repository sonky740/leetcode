function isValid(
  num1: string,
  num2: string,
  start: number,
  num: string
): boolean {
  if (start === num.length) {
    return true;
  }

  let sum = (BigInt(num1) + BigInt(num2)).toString();

  if (!num.startsWith(sum, start)) {
    return false;
  }

  return isValid(num2, sum, start + sum.length, num);
}

function isAdditiveNumber(num: string): boolean {
  const n = num.length;

  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let num1 = num.slice(0, i);
      let num2 = num.slice(i, j);

      if (
        (num1.length > 1 && num1.startsWith('0')) ||
        (num2.length > 1 && num2.startsWith('0'))
      ) {
        continue;
      }

      if (isValid(num1, num2, j, num)) {
        return true;
      }
    }
  }

  return false;
}