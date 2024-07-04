function topKFrequent(nums, k) {
  let count = new Map();
  let freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let n of nums) {
    count.set(n, (count.get(n) || 0) + 1);
  }

  for (let [key, value] of count) {
    freq[value].push(key);
  }

  let res = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    for (let n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
  return res;
}

// Ejemplo de uso
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // Output: [2,3]
console.log(topKFrequent([7, 7], 1)); // Output: [7]
