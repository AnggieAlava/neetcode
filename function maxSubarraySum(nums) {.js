function maxSubarraySum(nums) {
  let maxSum = nums[0]; //1>4>4>5>6
  let currentSum = nums[0]; //1>-2>4>3>5>6>1>5

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums));
