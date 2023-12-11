function detectLier(str) {
  const numbers = str.split(" ");
  const even = numbers.filter((num) => num % 2 === 0);
  const odd = numbers.filter((num) => num % 2 !== 0);

  if (even.length === 1) {
    return numbers.indexOf(even[0]) + 1;
  } else {
    return numbers.indexOf(odd[0]) + 1;
  }
}

let output = detectLier("2 4 7 8 10");
console.log(output);
let ans = detectLier("1 10 1 1");
console.log(ans);
