function hasPairsWithSum(arr, value) {
  const total = new Set();
  for (let i of arr) {
    let complement = value - i;
    if (total.has(i)) {
      return [i, complement];
    }
    total.add(complement);
  }
  return null;
}

console.log(hasPairsWithSum([3, 34, 9, 12, 5, 2], 9));
