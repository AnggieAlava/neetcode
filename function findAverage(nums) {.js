function findAverage(nums) {
  return nums.reduce((sum, num) => sum + num, 0) / nums.length;
}

console.log(findAverage([1, 3, 5, 7]));
