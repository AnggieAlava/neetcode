function isVow(a) {
  const vowels = new Set([97, 101, 105, 111, 117]);
  return a.map((num) => (vowels.has(num) ? String.fromCharCode(num) : num));
}

console.log(isVow([97, 101, 105, 111, 117, 90, 100, 456, 345, 22, 1, 45]));

function isVow(a) {
  const vowels = new Set([97, 101, 105, 111, 117]);
  return a.map((num) => (vowels.has(num) ? String.fromCharCode(num) : num));
}
