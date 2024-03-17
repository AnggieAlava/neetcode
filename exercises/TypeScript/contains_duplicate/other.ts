function containsDuplicate(nums: number[]): boolean {
  const uniques: Set<number> = new Set(nums);
  return nums.length !== uniques.size;
}

console.log(containsDuplicate([1, 2, 3]));
