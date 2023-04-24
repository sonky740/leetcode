function dayOfYear(dateString: string): number {
  const date = new Date(dateString);
  
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  
  const diffInMilliseconds = date.valueOf() - startOfYear.valueOf();
  
  // 1초 * 60초 * 60분 * 24시간
  const dayNumber = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;

  return dayNumber;
}