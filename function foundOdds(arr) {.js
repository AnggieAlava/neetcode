function foundOdds(arr) {
  const numbers = new Map();

  for (const num of arr) {
    numbers.set(num, (numbers.get(num) || 0) + 1);
  }
  const odds = [];

  for (const [key, value] of numbers) {
    if (value % 2 !== 0) {
      odds.push(key);
    }
  }
  return odds;
}

let matriz = [7, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 9];
let output = foundOdds(matriz);
console.log(output);
