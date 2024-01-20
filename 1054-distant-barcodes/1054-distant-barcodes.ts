function rearrangeBarcodes(barcodes: number[]): number[] {
  if (barcodes.length === 1) return barcodes;

  const frequencyMap = new Map<number, number>();
  for (const barcode of barcodes) {
    frequencyMap.set(barcode, (frequencyMap.get(barcode) || 0) + 1);
  }

  const sortedBarcodes = Array.from(frequencyMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  const answer: number[] = new Array(barcodes.length);
  let index = 0;

  for (const [barcode, count] of sortedBarcodes) {
    for (let i = 0; i < count; i++) {
      if (index >= barcodes.length) {
        index = 1;
      }
      answer[index] = barcode;
      index += 2;
    }
  }

  return answer;
}