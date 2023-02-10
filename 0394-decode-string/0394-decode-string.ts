function decodeString(s: string): string {
  while (s.includes('[')) {
    s = s.replace(/(\d+)\[(\w+)\]/g, (_, number, word) => word.repeat(number));
  }
  return s;
}