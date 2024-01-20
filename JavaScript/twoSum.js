function twoSum(nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    let diff = target - n;
    if (diff in hashmap) {
      return [hashmap[diff], i];
    }
    hashmap[n] = i;
  }
}

console.log(twoSum([1, 2, 3, 4, 5], 9));
