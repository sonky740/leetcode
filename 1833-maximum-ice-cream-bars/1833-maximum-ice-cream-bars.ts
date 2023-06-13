function maxIceCream(costs: number[], coins: number): number {
  costs.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < costs.length; i++) {
    if (coins >= costs[i]) {
      coins -= costs[i];
      answer++;
    } else {
      break;
    }
  }

  return answer;
}