function rotate(A, B) {
  if (A.length !== B.length) return false;
  if (A.length === 0 && B.length === 0) return true;
  return A.concat(A).includes(B);
}

console.log(rotate("hello world", "orldhello w")); // => true
console.log(rotate("hello world", "omrel wp")); // => false
