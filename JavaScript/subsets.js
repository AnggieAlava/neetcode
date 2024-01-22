function generateSubsets(nums) {
  let subsets = []; // Initialize an empty array to store the subsets
  let currentSubset = []; // Initialize an empty array to store the current subset being constructed

  function generate(index) {
    // Define a recursive function to generate subsets
    if (index >= nums.length) {
      // Base case: if the index is equal to or greater than the length of the input array
      subsets.push([...currentSubset]); // Add a copy of the current subset to the array of subsets
      return; // Return from the current recursive call
    }
    currentSubset.push(nums[index]); // Include the current number in the subset
    generate(index + 1); // Recur with the next index
    currentSubset.pop(); // Exclude the current number from the subset
    generate(index + 1); // Recur with the next index
  }

  generate(0); // Start the recursive generation process with the initial index
  return subsets; // Return the array of subsets
}
