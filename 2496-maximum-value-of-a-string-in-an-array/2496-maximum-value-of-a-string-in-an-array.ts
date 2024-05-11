function maximumValue(strs: string[]): number {
  return Math.max(
    ...strs.map((str) => (/^\d+$/.test(str) ? parseInt(str, 10) : str.length))
  );
}