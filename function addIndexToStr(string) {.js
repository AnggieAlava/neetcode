function addIndexToStr(string) {
  return string
    .split(" ")
    .map((word) => `${word} ${word.length}`)
    .join(" ");
}

console.log(addIndexToStr("apple ban"));
