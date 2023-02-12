function moveZeroes(nums: number[]): void {
  nums.forEach(num => {
    if (num === 0) {
      nums.splice(nums.indexOf(num), 1);
      nums.push(0);
    }
  })
}