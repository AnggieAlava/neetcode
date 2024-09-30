function containsDuplicate(nums) {
  const uniques = new Set();

  for (let n of nums) {
    if (uniques.has(n)) {
      return true;
    }
    uniques.add(n);
  }
  return false;
}

console.log([1, 2, 3]);
