function containsDuplicate(nums) {
  const hashset = new Set();

  for (let n = 0; n < nums.length; n++) {
    const num = nums[n];
    if (hashset.has(num)) {
      return true;
    }
    hashset.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
