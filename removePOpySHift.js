function array(string) {
  if (string === "" || string.indexOf(",") === -1) {
    return null;
  }

  let array = string.split(",");
  array.shift();
  array.pop();

  if (array.length === 0) {
    return null;
  }
  return array.join(" ");
}

console.log(array("1,2,3"));
console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));
console.log(array(""));
console.log(array("1"));
console.log(array("1,2"));
console.log(array("A1,B2"));
console.log(array("A,1,23,456,78,9,Z"));
