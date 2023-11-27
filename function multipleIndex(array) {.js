function multipleIndex(array) {
  return array.filter((num, index) => index === 0 || num % index === 0);
}

console.log(multipleIndex([0, 2, 3, 6, 9]));

//retornar u nuevo array solo con los numeros
//que son multiplos de su indice
