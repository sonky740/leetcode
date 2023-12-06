function buyChoco(prices: number[], money: number): number {
  let minCost = Infinity;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const sum = prices[i] + prices[j];
      if (sum <= money && sum < minCost) {
        minCost = sum;
      }
    }
  }

  return minCost === Infinity ? money : money - minCost;
}