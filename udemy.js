// const nemo = ["nemo"];
// const everyone = [
//   "anggie",
//   "sofi",
//   "carl",
//   "dora",
//   "shark",
//   "dom",
//   "guei",
//   "storm",
//   "suzy",
//   " mar",
//   "nemo",
// ];
// const large = new Array(10000000).fill("nemo");
// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log("running");
//     if (array[i] === "nemo") {
//       console.log("Found NEMO");
//     }
//   }
// }

// findNemo(nemo);

// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); O(1)

//log all pairs of array
// const boxes = [1, 2, 3, 4, 5];
// function logPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// } //O(n^2) quadratic time

// logPairs(boxes);

//find the first and the last
// const twits = ["hi", "Love", "Math"];
// function findFirstAndLastTwit(arr) {
//   if (arr.length === 0) return undefined;
//   return [arr[0], arr[arr.length - 1]];
// }
// let output = findFirstAndLastTwit(twits);
// console.log(output);

//given 2 arrays, create a function that let's a user know (true/false) whether these two
//arrays contain any common items
// for example:
//!This is not a  good approach, caus its unnecesary a O(N^2)
// function foundComonStrings(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// let output = foundComonStrings(arr1, arr2);
// console.log(output);

//*This is the version corrected of the behind function  found commun items with approach of Linear
// function containsCommonItem(arr1, arr2) {
//   let hashtable = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (!hashtable[arr1[i]]) {
//       let item = arr1[i];
//       hashtable[item] = true;
//     }
//   }
//   for (let j = 0; j < arr2.length; j++) {
//     if (hashtable[arr2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }
// let output = containsCommonItem(array1, array2);
// console.log(output);

//?This is inclusive a better approach to refactor my same function

// const array1 = ["a", "b", "c", "x"];
// const array2 = ["z", "y", "x"];

// function containsCommonItem(arr1, arr2) {
//   return arr1.some((item) => arr2.includes(item));
// }
// let output = containsCommonItem(array1, array2);
// console.log(output);

// function hasPairWithSum(arr, sum) {
//   //retrun true if  i found tow numberrs in my arr that add up to sum
//   //otherwise return false
//   //iterar dos veces sobre mi arr, verificar si alguno de sus items sumados dan el total de suma, iterando una segunda desde i+1 para evitar repetir items
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] === sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function hasPairWithSum(arr, sum) {
//   const mySet = new Set();
//   for (const num of arr) {
//     if (mySet.has(num)) return true;
//     mySet.add(sum - num);
//   }
//   return false;
// }
// const nums = [1, 2, 3, 4, 5];
// const goal = 9;
// let output = hasPairWithSum(nums, goal);
// console.log(output);
