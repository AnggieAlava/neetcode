function containsDuplicate(nums) {
  const hashset = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (hashset.has(num)) {
      return true;
    }
    hashset.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
