function customSortString(order: string, s: string): string {
  const map = new Map();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }
  
  return s.split('').sort((a, b) => {
    return (map.get(a) || 0) - (map.get(b) || 0);
  }).join('');
};