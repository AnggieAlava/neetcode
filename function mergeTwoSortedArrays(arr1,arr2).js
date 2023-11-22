function mergeTwoSortedArrays(arr1, arr2) {
  let result = arr1.concat(arr2).sort((a, b) => a - b);
  return result;
}

console.log(mergeTwoSortedArrays([1, 10, 50], [2, 14, 99, 100]));
