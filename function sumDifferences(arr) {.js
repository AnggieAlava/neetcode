function sumDifferences(arr) {
  arr.sort((a, b) => b - a);
  return arr
    .slice(0, -1)
    .reduce((sum, current, index) => sum + (current - arr[index + 1]), 0);
}

console.log(sumDifferences([2, 1, 10]));
