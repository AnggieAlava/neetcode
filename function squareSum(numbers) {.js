function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b ** 2, 0);
}

console.log(squareSum([1, 2, 2]));
