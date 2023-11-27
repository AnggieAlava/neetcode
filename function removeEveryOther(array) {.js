function removeEveryOther(array) {
  return array.filter((_, index) => index % 2 === 0);
}

console.log(removeEveryOther(["keep", "remove", "keep", "remove", "keep"]));
