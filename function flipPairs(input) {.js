function flipPairs(input) {
  return input.replace(/(.)(.)/g, "$2$1");
}

let input =
  "check out how interesting this problem is, it's insanely interesting!";
let output = flipPairs(input);
console.log(output);
