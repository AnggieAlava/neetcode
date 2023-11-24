function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1, 2, 1, 1, 3, 2]));
