function devolverRaizOCuadrado(array) {
  return array.map((num) => {
    if (Math.sqrt(num) % 1 === 0) {
      return Math.sqrt(num);
    } else {
      return Math.pow(num, 2);
    }
  });
}

const miArray = [4, 9, 16, 25, 30];
let output = devolverRaizOCuadrado(miArray);
console.log(output);

// function procesarArray(arr) {
//     return arr.reduce((resultado, numero) => {
//       const raizCuadrada = Math.sqrt(numero);
//       if (Number.isInteger(raizCuadrada)) {
//         resultado.push(raizCuadrada);
//       } else {
//         resultado.push(numero * numero);
//       }
//       return resultado;
//     }, []);
//   }

//   // Ejemplo de uso
//   const miArray = [4, 9, 16, 25, 30];
//   const resultadoProcesado = procesarArray(miArray);
//   console.log(resultadoProcesado);
