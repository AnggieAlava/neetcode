function fact(num) {
  let result = 1;
  for (let n = 2; n <= num; n++) {
    result *= n;
  }
  return result;
}

console.log(fact(6));
