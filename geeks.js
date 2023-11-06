function foundOdds(arr) {
  let newArr = {};
  for (let i of arr) {
    if (!newArr.hasOwnProperty(i)) newArr[i] = 0;
    newArr[i]++;
  }
  let result = [];
  for (const [key, val] of Object.entries(newArr)) {
    if (val % 2 != 0) result.push(key);
  }

  return result;
}
let matriz = [7, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 9];
let output = foundOdds(matriz);
console.log(output);
