function containsDuplicate(nums: number[]): boolean {
  const set = new Set(nums);
  return nums.length !== set.size;
}

console.log(containsDuplicate([1, 2, 3]));
