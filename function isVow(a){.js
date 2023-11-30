function isVow(a) {
  return a.map((num) => {
    if (
      num === 97 ||
      num === 101 ||
      num === 105 ||
      num === 111 ||
      num === 117
    ) {
      return String.fromCharCode(num);
    } else {
      return num;
    }
  });
}

console.log(isVow([97, 101, 105, 111, 117, 90, 100, 456, 345, 22, 1, 45]));
