function twoSum(nums, target) {
  let hashset = new Set();
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let diff = target - n;
    if (diff in hashset) {
      return [hashset[diff], i];
    }
    hashset[n] = i;
  }
  return -1;
}

console.log(twoSum([1, 2, 3, 4, 5], 3));
