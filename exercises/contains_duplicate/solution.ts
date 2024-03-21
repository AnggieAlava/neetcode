function contains_duplicate(nums: number[]): boolean {
  const uniques: Set<number> = new Set();
  for (const n of nums) {
    if (uniques.has(n)) return true;
    uniques.add(n);
  }
  return false;
}

console.log(contains_duplicate([1, 2, 3, 1]));
