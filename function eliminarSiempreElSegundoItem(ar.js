function eliminarSiempreElSegundoItem(array) {
  return array.filter((_, index) => index % 2 === 0);
}

console.log(
  eliminarSiempreElSegundoItem(["keep", "remove", "keep", "remove", "keep"])
);
