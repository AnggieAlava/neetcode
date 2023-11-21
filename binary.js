//Binary search

function binarySearch(arr, value) {
  // establecer una variable que contenga ell punto de partida
  //establecer una segunda variable que contenga el punto final
  let start = 0;
  let end = arr.length - 1;

  //establezco un bucle donde indico que mi recorrido va a seguir sucediendo mientras start sea menor o
  // igual a end
  while (start <= end) {
    //defino el punto medio de la iteracion del array
    let mid = Math.floor((start + end) / 2);

    // realizo una ccondicional comparando el numero medio con el value objetivo que es el numero que estoy buscando
    if (arr[mid] === value) {
      // si el mid es igual al value significa que encontre mi objetivo
      return mid; //entonces como encointre  mi obj retorno mid
    } else if (arr[mid] < value) {
      // entonces si mi obj no fue encontrado en mid, lo commparo con el value condicieonalmente preguntando si es menor o mayor al para saber si tengo que buscar en la mitad derecha o izquierda
      // si el resultado de la comparacion me dice que
      //mid es menor a value => objetivo
      //significa que debo buscar en la mitad derecha y actualizo
      // la variable start para que ahora empiece desde el punto medio actuual + 1 lo que significa que busccara mi value desde mid en adelante hhacia su mitad derecha
      start = mid + 1;
    } else {
      // de otra forma si mid es mayor a mi valuo objetivo
      // entonces actualizo mi variable end para que retroceda desde mid hacia la izquierrda
      //porque mi mid es mayor, significa que debo buscar en los numeros menores que estarian desde mid hacia la izquierd
      //actualizo end para que retroceda desde mid de uno en uno
      end = mid - 1;
    }
  }

  return null;
}

let output = binarySearch(
  [10, 14, 16, 17, 28, 30, 45, 50, 78, 89, 90, 110, 134, 156, 189, 190, 200],
  50
);
console.log(output);
