function countSegments(s: string): number {
  return s.split(' ').filter((s) => s !== '').length;
}
