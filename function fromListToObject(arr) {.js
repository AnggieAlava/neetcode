function fromListToObject(arr) {
  //defino una variable que guardara el nuevo OBJETO
  let result = {};
  //itero sobre el array de arrays
  for (let item of arr) {
    //actualizo mi objeto result diciendole
    // que del array de arrays tome
    // item[0] como key y le de el valor de item[1]
    //asi aactualizo result = {
    // arr[item[0]] : arr[item[1]]//}
    result[item[0]] = item[1];
  }
  return result;
}

// el objetivo de este ejercicio es tomar una matriz (array de arrays, y devolvret un
//objeto donde cada uno de los arrays represente una key con su value dentro del
//nuevo objeto que se retorna)

let output = fromListToObject([
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
]);
console.log(output);
