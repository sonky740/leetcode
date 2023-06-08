function daysBetweenDates(date1: string, date2: string): number {
  const date1InMs = new Date(date1).getTime();
  const date2InMs = new Date(date2).getTime();

  return Math.abs(date1InMs - date2InMs) / (1000 * 60 * 60 * 24);
}