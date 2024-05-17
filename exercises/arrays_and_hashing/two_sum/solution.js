function twoSum(nums, target) {
  let prevMap = {}; // guardar el value:index

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    if (diff in prevMap) {
      return [prevMap[diff], i];
    }
    prevMap[num] = i;
  }
}

console.log(twoSum([1, 2, 3, 4], 3));
