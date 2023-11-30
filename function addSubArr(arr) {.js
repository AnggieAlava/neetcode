function addSubArr(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let n = 1; n < arr.length; n++) {
    currentSum = Math.max(arr[n], currentSum + arr[n]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(addSubArr(nums));
