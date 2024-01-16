function containsDuplicate(nums) {
  // Create a new set to store unique elements
  const set = new Set();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    // If the set already contains the element, return true
    if (set.has(n)) {
      return true;
    }

    // Add the element to the set in case it doesn't exist
    set.add(n);
  }

  // No duplicates found, return false
  return false;
}

console.log(containsDuplicate([1, 2, 3, 5]));
