function findRestaurant(list1: string[], list2: string[]): string[] {
  const map = new Map<string, number>();
  let min = Infinity;
  const answer: string[] = [];
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; i++) {
    if (map.has(list2[i])) {
      const sum = i + map.get(list2[i])!;
      if (sum < min) {
        min = sum;
        answer.length = 0;
        answer.push(list2[i]);
      } else if (sum === min) {
        answer.push(list2[i]);
      }
    }
  }
  return answer;
}