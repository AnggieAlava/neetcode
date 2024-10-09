// Pseudocódigo
function twoSum(nums, target) {
  // 1. Inicializar un nuevo Map 'numIndices' para almacenar los números y sus índices.
  let numIndices = new Map();

  // 2. Iterar sobre cada número en la lista de entrada 'nums' con un índice 'n':
  for (let n = 0; n < nums.length; n++) {
    // a. Calcular el complemento del número actual (target - nums[n]).
    let complement = target - nums[n];

    // b. Comprobar si el complemento ya está en el Map 'numIndices':
    if (numIndices.has(complement)) {
      // i. Si está, hemos encontrado dos números que suman el objetivo. Devolver una lista con el índice del complemento y el índice actual 'n'.
      return [numIndices.get(complement), n];
    }
    // c. Si el complemento no está en el Map, añadir el número actual y su índice al Map.
    numIndices.set(nums[n], n);
  }
  // 3. Si hemos iterado sobre todos los números y no hemos encontrado dos que sumen el objetivo, devolver false.
  return false;
}

// 4. Ejemplo de uso: console.log(twoSum([2, 7, 1, 3], 9)); // Debería imprimir [0, 1] porque 2 + 7 = 9
console.log(twoSum([2, 7, 1, 3], 9));
