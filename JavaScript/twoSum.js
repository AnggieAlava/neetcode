function twoSum(nums, target) {
  const prevMap = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n; // por ejemplo 9 - 2 = 7
    if (diff in prevMap) {
      return [prevMap[diff], i];
    }
    prevMap[n] = i;
  }
  return -1;
}
console.log(twoSum([2, 7, 11, 15], 9));
