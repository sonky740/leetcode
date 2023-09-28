const op = (s: string, t: string) => {
  let one = 0;
  let two = 0;
  let three = 0;

  for (const c of s) {
    if (c == t[2]) three += two;
    if (c == t[1]) two += one;
    if (c == t[0]) one++;
  }

  return three;
};

function numberOfWays(s: string): number {
  return op(s, '101') + op(s, '010');
}