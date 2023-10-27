const SUB_20: string[] = [
    "Zero", "One", "Two", "Three", "Four", 
    "Five", "Six", "Seven", "Eight", "Nine", 
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", 
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

const SUB_100: string[] = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const POW_10: string[] = [
    "Hundred", "Thousand", "Million", "Billion" //, ...
];

function getSub1000(buf: string[], num: number): void {
    if (num >= 100) {
        const mod = num % 100;
        buf.push(SUB_20[(num - mod)/100], POW_10[0]);
        num = mod;
    }

    if (num >= 20) {
        const mod = num % 10;
        buf.push(SUB_100[(num - mod)/10]);
        num = mod;
    }

    if (num > 0) {
        buf.push(SUB_20[num]);
    }
}

function numberToWords(num: number): string {
    if (num === 0) {
        return SUB_20[0];
    }

    const buf: string[] = [];
    for (let i = POW_10.length - 1; num >= 1000; --i) {
        const p = 1000**i;
        if (num >= p) {
            getSub1000(buf, Math.floor(num / p));
            buf.push(POW_10[i]);
            num %= p;
        }
    }

    getSub1000(buf, num);
    return buf.join(" ");
};
