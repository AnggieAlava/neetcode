//Merge two sorted arrays

//recibo dos rrays ordeenados, debo juntarlos y debolverlos ordenados evitando duplicar items

function mergeArrays(arr1, arr2) {
  const result = Array.from(new Set(arr1.concat(arr2))).sort((a, b) => a - b);
  return result;
}

const array1 = [1, 2, 3, 5, 7];
const array2 = [1, 2, 4, 6, 8];

const output = mergeArrays(array1, array2);
console.log(output);
