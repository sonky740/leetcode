function destCity(paths: string[][]): string {
  let answer = '';
  for (let i = 0; i < paths.length; i++) {
    if (!paths.some((path) => path[0] === paths[i][1])) {
      answer = paths[i][1];
      break;
    }
  }

  return answer;
}