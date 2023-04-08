function longestDiverseString(a: number, b: number, c: number): string {
  let happyString = '';
  let counts: [string, number][] = [
    ['a', a],
    ['b', b],
    ['c', c],
  ];

  while (true) {
    counts.sort((x, y) => y[1] - x[1]);

    for (let i = 0; i < 3; i++) {
      if (
        counts[i][1] > 0 &&
        (happyString.length < 2 ||
          happyString.slice(-1) !== counts[i][0] ||
          happyString.slice(-2, -1) !== counts[i][0])
      ) {
        happyString += counts[i][0];
        counts[i][1]--;
        break;
      }
      if (i === 2) {
        return happyString;
      }
    }
  }
}