function rotateTwoStrings(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const concatenated = str1 + str1;

  if (concatenated.includes(str2)) {
    return true;
  } else {
    return false;
  }
}
console.log(rotateTwoStrings("hello world", "orldhello w")); // => true
console.log(rotateTwoStrings("hello world", "omrel wp")); // => false
