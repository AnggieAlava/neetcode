function sortAndFormat(arr) {
  const arrSorted = arr.sort();
  const format = arrSorted[0].split("").join("***");
  return format;
}

let strings = ["zorro", "banana", "apple", "date"];
console.log(sortAndFormat(strings));
