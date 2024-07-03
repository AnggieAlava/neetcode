function topKFrequent(nums, k) {
  // Inicializa un objeto para almacenar la frecuencia de cada número en la lista.
  let count = {};

  // Inicializa una lista de listas (cubos) para almacenar los números que tienen la misma frecuencia.
  // La longitud de la lista de cubos es igual a la longitud de la lista de entrada más uno.
  let freq = Array.from({ length: nums.length + 1 }, () => []);

  // Itera sobre cada número en la lista de entrada.
  for (let n of nums) {
    // Si el número ya está en el objeto 'count', incrementa su valor en 1.
    // Si el número no está en el objeto 'count', lo añade con el valor 1.
    count[n] = (count[n] || 0) + 1;
  }

  // Itera sobre cada número y su frecuencia en el objeto 'count'.
  for (let n in count) {
    // Añade el número a la lista en 'freq' que corresponde a su frecuencia.
    freq[count[n]].push(n);
  }

  // Inicializa una lista vacía para los resultados.
  let res = [];

  // Itera sobre 'freq' en orden inverso (desde la frecuencia más alta hasta la más baja).
  for (let i = freq.length - 1; i >= 0; i--) {
    // Itera sobre cada número en la lista actual.
    for (let n of freq[i]) {
      // Añade el número a 'res'.
      res.push(n);
      // Si la longitud de 'res' es igual a k, devuelve 'res'.
      if (res.length === k) {
        return res;
      }
    }
  }
  return res;
}

// Ejemplo de uso
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // Output: [2,3]
console.log(topKFrequent([7, 7], 1)); // Output: [7]
