function containsDuplicate(nums) {
  const prevSet = new Set();

  for (let num of nums) {
    if (prevSet.has(num)) {
      return true;
    }
    prevSet.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4, 1]));
