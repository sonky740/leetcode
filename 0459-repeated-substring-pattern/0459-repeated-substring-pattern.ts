function repeatedSubstringPattern(s: string): boolean {
  const doubleS = s + s;
  return (doubleS).substring(1, doubleS.length - 1).includes(s);
}