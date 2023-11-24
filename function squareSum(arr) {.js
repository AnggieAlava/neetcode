function squareSum(arr) {
  return arr.reduce((a, b) => a + Math.pow(b, 2));
}

console.log(squareSum([1, 2, 2]));
