function findItemIndex(array) {
  // let goal = 'needle'
  // for(let item  of array) {
  //     if(item === goal)
  //     return array.indexOf(item)
  // }

  const index = array.findIndex((item) => item === "needle");
  return index;
}

const result = findItemIndex([
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
]);
console.log(result);
