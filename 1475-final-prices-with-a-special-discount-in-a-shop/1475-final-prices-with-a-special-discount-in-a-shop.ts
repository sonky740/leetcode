function finalPrices(prices: number[]): number[] {
  const answer: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        answer.push(prices[i] - prices[j]);
        break;
      } else {
        if (j === prices.length - 1) {
          answer.push(prices[i]);
        } else {
          continue;
        }
      }
    }

    if (i === prices.length - 1) {
      answer.push(prices[i]);
    }
  }

  return answer;
}