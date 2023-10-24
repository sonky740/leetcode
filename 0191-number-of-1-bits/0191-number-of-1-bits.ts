function hammingWeight(n: number): number {
  let answer = 0;
  const str = n.toString(2);

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") answer++;
  }

  return answer;
}