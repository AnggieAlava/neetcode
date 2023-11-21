function hasPairsSum(array, goal) {
  // Declaro un nuevo set donde guardaré los complementos para encontrar si hay dos números que sumados den el objetivo.
  let complementsSet = new Set();

  // Itero sobre mi array de números para buscar pares que sumen al objetivo.
  for (let num of array) {
    // Verifico si mi set creado ya contiene un número del array que, sumado con el número actual, da el objetivo.
    if (complementsSet.has(num)) {
      // Si encuentra un par, retorno verdadero.
      return true;
    }

    // Si mi set no tiene el número actual, entonces calculo su complemento (lo que falta para llegar al objetivo)
    // y lo guardo en mi set de complementos.
    complementsSet.add(goal - num);
  }

  // Si termina el bucle y no se encontraron pares que sumen al objetivo, retorno falso.
  return false;
}

// El objetivo es encontrar dos números dentro del array que sumados den el valor de goal.
const nums = [1, 2, 3, 4, 5];
const myGoal = 9;
let output = hasPairsSum(nums, myGoal);
console.log(output);
