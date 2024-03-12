function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let n = 0; n < nums.length; n++) {
    if (set.has(nums[n])) return true;
    else set.add(nums[n]);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));
