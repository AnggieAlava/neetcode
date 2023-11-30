function fromsStrToNum(str) {
  return Array.from(String(str), Number);
}

console.log(fromsStrToNum(123345));
