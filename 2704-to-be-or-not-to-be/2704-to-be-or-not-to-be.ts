type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const toBe = (expected: any) => {
    if (val !== expected) throw new Error('Not Equal')
    return true;
  }
  const notToBe = (expected: any) => {
    if (val === expected) throw new Error('Equal')
    return true;
  }

  return {
    toBe,
    notToBe
  }
};