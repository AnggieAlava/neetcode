//METODOS DE ARRAYS

// EL METODO MAP PERMITE RECORRE EL ARRAY Y MODIFICAR LOS ELEMENTOS PRESENTES EN EL , RETORNANDO
//UN NUEVO ARRAY CON LA MISMA LONGITUD QUE EL ORIGINAL
let array = [1, 2, 3, 4, 5];
const result = array.map((item) => item + 10);
console.log(result);

//FILTER => el metodo filter permite filtrar los elementos del array que cunplan con una condicion y retorna estos
//elementos en un nuevo array

let books = ["terror", "comedia", "romance", "historia", "ciencia"];
let filterBooks = books.filter(
  (book) => book === "terror" || book === "ciencia"
);
console.log(filterBooks);

//FOREACH => EL METODO FOREACH PERMITE ITERAR SOBRE LOS ELEMENTOS DE UN ARRAY, RRECIBE UN CALLBACK QUE TOMA COMO PARAMETRO EL ELEMENTO ACTUAL DE LA ITERACION Y SU INDICE

let pets = ["perro", "gato", "conejo"];
let location = pets.forEach((pet, index) => {
  console.log(`El ${pet} esta en la posicion ${index}`);
});

function factorial(num) {
  let result = 1;
  if (num === 0) return 1;
  for (let item = 2; item <= num; item++) {
    result *= item;
  }
  return result;
}
console.log(factorial(5));
