type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) return arr;

  const answer: MultiDimensionalArray = [];
  arr.forEach((el) => {
    if (typeof el === 'number') {
      answer.push(el);
    } else {
      answer.push(...flat(el, n - 1));
    }
  });

  return answer;
};
