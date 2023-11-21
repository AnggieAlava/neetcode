function fromStringToBinary(mixArr) {
  //filtrar el array para encontrar solo los numeros
  const numbers = mixArr.filter((item) => typeof item === "number");

  //sumo los numeros para obtenner un total, y ese total es lo que transformare a binario
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  //transformar el total a binario
  return sum.toString(2);
}

//asumiendo que recibo un array con items algunos numeros y otros strings
const miArray = [5, "a", 3, "b", 2];
const resultadoBinario = fromStringToBinary(miArray);
console.log(resultadoBinario);
