function sumAndBi(arr) {
  //filtrar todos los elementos que son numeros usando filter

  const numbers = arr.filter((item) => typeof item === "number");
  const suma = numbers.reduce((a, b) => a + b, 0);
  const binario = suma.toString(2);
  return binario;
}

const miArray = [5, "a", 3, "b", 2];
const resultadoBinario = sumAndBi(miArray);
console.log(resultadoBinario);
