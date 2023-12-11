function binarySearch(arr, target) {
  let left = 0;
  let rigth = arr.length - 1;

  while (left <= rigth) {
    let middle = Math.floor((left + rigth) / 2);
    if (target === arr[middle]) {
      return middle;
    }
    if (target < arr[middle]) {
      rigth = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10)
);
