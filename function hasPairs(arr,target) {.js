function hasPairs(arr, target) {
  let twoNumsSum = new Set();
  for (let n of arr) {
    const complement = target - n;
    if (twoNumsSum.has(n)) {
      return [n, complement];
    }
    twoNumsSum.add(complement);
  }
}

let pair = hasPairs([3, 34, 4, 12, 5, 2], 9);
console.log(pair);
