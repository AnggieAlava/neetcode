function addLon(string) {
  let arr = string.split(" ");
  return arr.map((item) => {
    return `${item}${item.length}`;
  });
}

console.log(addLon("apple ban"));
