function longestPrefix(s: string): string {
    const n: number = s.length;
    const lps: number[] = new Array(n).fill(0);
    let j: number = 0;

    for (let i: number = 1; i < n; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = lps[j - 1];
        }
        if (s[i] === s[j]) {
            j++;
            lps[i] = j;
        }
    }

    return s.slice(0, lps[n - 1]);

};