// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5
// };

// const array = Object.entries(obj)

// console.log(array)

// let str =  "12345"
// const number = parseInt(str)
// console.log(number)

// let str = 'Hola mundo'
// let substr = 'mundo'

// const check = str.includes(substr)
// console.log(check)

// array1.concat(array2)

// Math.floor(Math.random() * (max - min) + 1)4

// let obj = {

// }

// const empty = Object.keys(obj).length === 0
// console.log(empty)

// let notArr = [123]
// let check = Array.isArray(notArr)
// console.log(check)

let arr = [2, 6, 9, 4, 2, 3, 8];
console.log(arr.sort((a, b) => a - b));

const unique = [...new Set(arr)];
console.log(unique);

console.log(unique.reverse());

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

const longitud = Object.keys(obj).length;
console.log(longitud);

let now = new Date();
console.log(now);
