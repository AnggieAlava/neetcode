function mergeTwoSortedArrays(a, b) {
  // let concatenated = a.concat(b)
  // // console.log(concatenated)
  // let unique = [...new Set(concatenated)].sort((a,b) => a - b)
  // return unique
  return Array.from(new Set(a.concat(b))).sort((a, b) => a - b);
}

const array1 = [1, 2, 5, 7];
const array2 = [2, 4, 6, 8];

const result = mergeTwoSortedArrays(array1, array2);
console.log(result);
