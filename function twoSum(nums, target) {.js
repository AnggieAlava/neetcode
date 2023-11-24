function twoSum(nums, target) {
  const map = new Map();

  const len = nums.length;

  for (let i = 0; i < len; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
