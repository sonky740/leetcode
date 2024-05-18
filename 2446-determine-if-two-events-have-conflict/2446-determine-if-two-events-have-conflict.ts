const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

function haveConflict(event1: string[], event2: string[]): boolean {
  const [start1, end1] = event1.map(timeToMinutes);
  const [start2, end2] = event2.map(timeToMinutes);

  return start1 <= end2 && start2 <= end1;
}