function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

const string = "apple ban";
console.log(addLength(string));
