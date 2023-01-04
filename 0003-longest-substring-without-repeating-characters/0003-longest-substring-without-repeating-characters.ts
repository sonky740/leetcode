function lengthOfLongestSubstring(s: string) {
  let max = 0;
  let cur = 0;
  let start = 0;
  let i = 0;
  let str = '';

  while (start < s.length) {
    str = s.slice(start, i);
    cur = str.length;

    if (cur > max) max = cur;

    if (str.indexOf(s[i]) !== -1) {
      start++;
      i = start;
    } else {
      i++;
    }

    if (i > s.length) break;
  }

  return max;
}