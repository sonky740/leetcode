function getMonthNum(month: string): string {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
  };
  return months[month];
}

function reformatDate(date: string): string {
  const [day, month, year] = date.split(' ');
  const dayNum = day.slice(0, day.length - 2);
  const dayStr = dayNum.length === 1 ? `0${dayNum}` : dayNum;
  const monthNum = getMonthNum(month);
  const monthStr = monthNum.length === 1 ? `0${monthNum}` : monthNum;
  return `${year}-${monthStr}-${dayStr}`;
}