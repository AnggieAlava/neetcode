function fromListToObject(arr) {
  return arr.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

let output = fromListToObject([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);
console.log(output); // => { make: 'Ford', model: 'Mustang', year: 1964 }
