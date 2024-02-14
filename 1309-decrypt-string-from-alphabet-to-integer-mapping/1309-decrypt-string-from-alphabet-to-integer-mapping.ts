function freqAlphabets(s: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return s.replace(/(\d{2})#|(\d)/g, (_, p1, p2) =>
    p1 ? alphabet[+p1 - 1] : alphabet[+p2 - 1]
  );
}