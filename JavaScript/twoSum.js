function twoSum(nums, target) {
  const hashmap = {}; //key = number, value = index

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const diff = target - n;
    if (diff in hashmap) {
      return [hashmap[diff], i];
    } else {
      hashmap[n] = i;
    }
  }
  return -1;
}

console.log(twoSum([2, 7, 11, 15], 26));
