type Fn = (...args: any[]) => any

function once(fn: Fn): Fn {
  let hasCalled = false;
  let answer = null;

  return function (...args: any[]) {
    if (!hasCalled) {
      answer = fn(...args);
      hasCalled = true;
      return answer;
    } else {
      return undefined;
    }
  }
}