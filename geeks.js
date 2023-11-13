function foundOdds(arr) {
  // Create a map to store the count of each number in the array
  const countMap = new Map();

  // Iterate over each number in the array
  for (const num of arr) {
    // Increment the count of the number in the map
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // Create an array to store the odd numbers
  const oddNums = [];

  // Iterate over each entry in the count map
  for (const [key, val] of countMap.entries()) {
    // Check if the count of the number is odd
    if (val % 2 !== 0) {
      // Add the number to the array of odd numbers
      oddNums.push(key);
    }
  }

  // Return the array of odd numbers
  return oddNums;
}
let matriz = [7, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 9];
let output = foundOdds(matriz);
console.log(output);
