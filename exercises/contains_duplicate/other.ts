function containsDuplicatee(nums: number[]): boolean {
  const uniques: Set<number> = new Set(nums);
  return nums.length !== uniques.size;
}

console.log(containsDuplicatee([1, 2, 3]));
