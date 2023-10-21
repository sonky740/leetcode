function findMaxForm(strs: string[], m: number, n: number): number {
    const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (const str of strs) {
        let zeros = 0, ones = 0;

        for (const char of str) {
            if (char === '0') zeros++;
            else if (char === '1') ones++;
        }

        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }

    return dp[m][n];

};