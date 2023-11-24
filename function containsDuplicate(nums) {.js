function containsDuplicate(nums) {
  const memory = new Set();
  for (const num of nums) {
    if (memory.has(num)) {
      return true;
    }
    memory.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 5]));
