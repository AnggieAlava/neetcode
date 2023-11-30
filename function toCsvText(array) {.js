function toCsvText(array) {
  const rowCsv = array.map((row) => row.join(","));
  return rowCsv.join("\\n");
}

const input = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34],
];

const output = toCsvText(input);
console.log(output);
