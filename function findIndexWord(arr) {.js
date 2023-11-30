function findIndexWord(arr) {
  //ECCONTRAR LA PALABRA BUSCADA CON findIndex
  let word = "needle";
  const index = arr.findIndex((item) => item === word);
  // verificar si la palabra existe
  if (index !== -1) {
    return `Found the needle at position ${index}`;
  } else {
    return "Not found";
  }
}

const result = findIndexWord([
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
]);
console.log(result);
