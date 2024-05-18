function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;

  let mismatches: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      mismatches.push(i);
      if (mismatches.length > 2) return false;
    }
  }

  if (mismatches.length === 2) {
    const [i, j] = mismatches;
    return s1[i] === s2[j] && s1[j] === s2[i];
  }

  return false;
}