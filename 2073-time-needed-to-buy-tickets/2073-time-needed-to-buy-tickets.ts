function timeRequiredToBuy(tickets: number[], k: number): number {
  let answer = 0;

  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] > 0) {
        tickets[i]--;
        answer++;
      }

      if (i === k && tickets[i] === 0) {
        break;
      }
    }
  }

  return answer;
};