function numWaterBottles(numBottles: number, numExchange: number): number {
  let answer = 0;
  let emptyBottles = 0;

  while (numBottles > 0) {
    answer += numBottles;
    emptyBottles += numBottles;

    numBottles = Math.floor(emptyBottles / numExchange);
    emptyBottles = emptyBottles % numExchange;
  }

  return answer;
}