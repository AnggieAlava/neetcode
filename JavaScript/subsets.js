// function subsets(nums) {
//   let subsets = []; // Initialize an empty array to store the subsets
//   let currentSubset = []; // Initialize an empty array to store the current subset being constructed

function subsets(nums) {
  let subsets = []; // Inicializa un array vacío para almacenar los subconjuntos
  let currentSubset = []; // Inicializa un array vacío para almacenar el subconjunto actual que se está construyendo

  function deepFirstSearch(index) {
    // Define una función recursiva para generar subconjuntos
    if (index >= nums.length) {
      // Caso base: si el índice es igual o mayor que la longitud del array de entrada
      subsets.push([...currentSubset]); // Agrega una copia del subconjunto actual al array de subconjuntos
      return; // Retorna desde la llamada recursiva actual
    }
    currentSubset.push(nums[index]); // Incluye el número actual en el subconjunto
    deepFirstSearch(index + 1); // Recurre con el siguiente índice
    currentSubset.pop(); // Excluye el número actual del subconjunto
    deepFirstSearch(index + 1); // Recurre con el siguiente índice
  }

  deepFirstSearch(0); // Inicia el proceso de generación recursiva con el índice inicial
  return subsets; // Retorna el array de subconjuntos
}

// Inicialización de Variables:

// subsets: Un array que almacenará todos los subconjuntos.
// currentSubset: Un array que representará el subconjunto actual que se está construyendo.
// Función deepFirstSearch:

// Esta es una función recursiva que se encarga de generar los subconjuntos.
// index: Es el índice actual en el array nums que estamos considerando.
// Caso Base:

// Si index es mayor o igual a la longitud de nums, significa que hemos considerado todos los elementos del array, y se agrega una copia del subconjunto actual a subsets.
// Construcción de Subconjuntos:

// Se añade nums[index] al subconjunto actual.
// Se realiza una llamada recursiva a la función con index + 1 para incluir el siguiente elemento en el subconjunto.
// Se elimina nums[index] del subconjunto actual para explorar el caso en que el elemento actual no está incluido.
// Se realiza otra llamada recursiva con index + 1 para explorar el caso sin el elemento actual.
// Inicio del Proceso:

// La función principal subsets inicia el proceso de generación llamando a deepFirstSearch(0) con el índice inicial.
// Resultado:

// Finalmente, la función devuelve el array subsets que contiene todos los subconjuntos posibles de nums.
// En resumen, esta función utiliza la técnica de búsqueda en profundidad (DFS) para generar todos los subconjuntos posibles de un array dado.
