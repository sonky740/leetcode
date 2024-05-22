function diStringMatch(s: string): number[] {
  let low = 0;
  let high = s.length;

  const answer = s.split('').reduce<number[]>((acc, cur) => {
    if (cur === 'I') {
      acc.push(low++);
    } else {
      acc.push(high--);
    }
    return acc;
  }, []);

  return answer.concat(low);
}