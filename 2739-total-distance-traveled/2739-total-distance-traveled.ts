function distanceTraveled(mainTank: number, additionalTank: number) {
  let answer = 0;

  while (mainTank > 0) {
    let consumed = Math.min(mainTank, 5);
    mainTank -= consumed;
    answer += consumed * 10;

    if (consumed === 5 && additionalTank > 0) {
      mainTank += 1;
      additionalTank -= 1;
    }
  }

  return answer;
}