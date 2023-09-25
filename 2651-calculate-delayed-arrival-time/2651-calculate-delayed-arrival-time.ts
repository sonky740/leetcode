function findDelayedArrivalTime(arrivalTime: number, delayedTime: number): number {
  const sum = arrivalTime + delayedTime;
  return sum >= 24 ? (sum) - 24 : sum;
};