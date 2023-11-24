function moveZeros(nums) {
  let nonZeroIndex = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    } else {
      zeroCount++;
    }
  }
  for (let i = nums.length - 1; i >= nums.length - zeroCount; i--) {
    nums[i] = 0;
  }
  return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
