function arrayToObj(array) {
  return { [array[0]]: array[array.length - 1] };
}

let output = arrayToObj(["Queen", "Elizabeth", "Of Hearts", "Beyonce"]);
console.log(output); //
