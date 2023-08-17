function invalidTransactions(transactions: string[]): string[] {
  const answer: string[] = [];
  const upperAmount = 1000;
  const transactionTime = 60;

  for (let i = 0; i < transactions.length; i++) {
    const [name, time, amount, city] = transactions[i].split(',');
    let added = false;

    if (+amount > upperAmount) {
      answer.push(transactions[i]);
      added = true;
    }

    for (let j = 0; j < transactions.length; j++) {
      if (i === j) continue;
      const [name2, time2, _, city2] = transactions[j].split(',');

      if (
        name === name2 &&
        city !== city2 &&
        Math.abs(+time - +time2) <= transactionTime
      ) {
        if (!added) {
          answer.push(transactions[i]);
          added = true;
        }
      }
    }
  }

  return answer;
}