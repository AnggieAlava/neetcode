function twoSum(nums, target) {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (diff in hashmap) {
      return [hashmap[diff], i];
    }
    hashmap[n] = i;
  }
  return -1;
}

console.log(twoSum([1, 4, 5, 8], 9));
