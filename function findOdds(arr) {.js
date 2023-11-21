function findOdds(arr) {
  let result = [];
  let count = new Map();
  for (let num of arr) {
    if (count.has(num)) {
      count.set(num, count.get(num) + 1);
    } else {
      count.set(num, 1);
    }
  }
  for (let [item, frequency] of count) {
    if (frequency % 2 !== 0) {
      result.push(item);
    }
  }
  return result;
}

let matriz = [1, 4, 4, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 10, 10]; //   [1,5,6,8,]
let output = findOdds(matriz);
console.log(output);
