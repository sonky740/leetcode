function perm(m: number, n: number): number {
  return n === 0 ? 1 : perm(m, n - 1) * (m - n + 1);
}

function numDupDigitsAtMostN(n: number): number {
  const digit = n.toString().split('').map(Number);
  let res = 0;
  let len = digit.length;

  for (let i = 1; i < len; i++) {
    res += 9 * perm(9, i - 1);
  }

  const seen = new Array(10).fill(false);

  for (let i = 0; i < len; i++) {
    for (let j = i > 0 ? 0 : 1; j < digit[i]; j++) {
      if (!seen[j]) res += perm(10 - (i + 1), len - (i + 1));
    }
    if (seen[digit[i]]) break;
    if (i === len - 1) res++;
    seen[digit[i]] = true;
  }

  return n - res;
}