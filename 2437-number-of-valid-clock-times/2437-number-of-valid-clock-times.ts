function countTime(time: string): number {
  let hour = 1;
  if (time[0] === '?' && time[1] === '?') {
    hour = 24;
  } else if (time[0] === '?') {
    hour = time[1] <= '3' ? 3 : 2;
  } else if (time[1] === '?') {
    hour = time[0] === '2' ? 4 : 10;
  }

  let min = 1;

  if (time[3] === '?' && time[4] === '?') {
    min = 60;
  } else if (time[3] === '?') {
    min = 6;
  } else if (time[4] === '?') {
    min = 10;
  }

  return hour * min;
}
