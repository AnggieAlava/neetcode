function flip(a, b) {
  if (a == "L") {
    return b.sort((a, b) => b - a);
  }
  if (a == "R") {
    return b.sort((a, b) => a - b);
  }
}

const direction1 = "R";
const columns1 = [3, 2, 1, 2];
console.log(flip(direction1, columns1));
// Output: [1, 2, 2, 3]

const direction2 = "L";
const columns2 = [1, 4, 5, 3, 5];
console.log(flip(direction2, columns2));
// Output: [5, 5, 4, 3, 1]
