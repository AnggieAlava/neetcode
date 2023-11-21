//containsCommonItem
//Dado dos arrays con valores
// compararlos y verificar si hay algun item que este presente en ambos arrays

// function  containsCommonItem(lista, caja) {
//     //puedo llegar a la solucion con un for anidado
//     // itero sobre el primer array
//     for(let i  = 0; i < lista.length; i++) {
//         //itero sobte el sebuinfdo objheto
//         for(let j = 0; j < caja.length; j++){
//             //realizo una comparacion de los items para saber si hay alguno igual en ambos
//             if(lista[i] === caja[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// function containsCommonItem(arr1, arr2) {
//     let hashtable = {}

//     for(let item in arr1) {
//         if(!hashtable[arr1[item]]) {
//             let char = arr1[item]
//             hashtable[char] = true
//         }
//     }
//     for(let letter in arr2) {
//         if(hashtable[arr2[letter]])
//         return true
//     }
//     return false
// }

function containsCommonItem(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

const lista = ["a", "b", "m", "x"];
const caja = ["z", "y", "f"];
console.log(containsCommonItem(lista, caja));
