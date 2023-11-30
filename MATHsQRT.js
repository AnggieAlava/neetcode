function raizOrSquare(array) {
  return array.map((num) => {
    if (Math.sqrt(num) % 1 === 0) {
      return Math.sqrt(num);
    } else {
      return Math.pow(num, 2);
    }
  });
}

const miArray = [4, 9, 16, 25, 30];
let output = raizOrSquare(miArray);
console.log(output);
