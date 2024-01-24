function containsDuplicate(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
