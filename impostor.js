//dado un array de numeros debo devolver el index del numero que no corresponde
//ej: [1,2,3,5,7]  => 2
//ej: [2,4,8,10,3] => 3
// el objetivo es aplicar foreach

function findImpostor(string) {
  const arr = string.split(" ");
  let evenImpostor = [];
  let oddImpostor = [];

  arr.forEach((element) => {
    if (element % 2 === 0) {
      evenImpostor.push(element);
    } else {
      oddImpostor.push(element);
    }
  });
  if (evenImpostor.length === 1) {
    return arr.indexOf(evenImpostor[0]) + 1;
  } else {
    return arr.indexOf(oddImpostor[0]) + 1;
  }
}

let output = findImpostor("1 10 1 1");
console.log(output);
