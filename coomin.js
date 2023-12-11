// function coomonItem(arr1,arr2) {
//     //iterar sobre el primer array y luego sobre el segundo, comparando los items

//     for(let item1 of arr1) {
//         for(let item2 of arr2) {
//             if(item1 === item2) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// function coomonItem(arr1, arr2) {
//    let set = new Set(arr1)
//    for(let item of arr2) {
//     if(set.has(item)){
//         return true
//     }
//    }
//    return false
//}

function coomonItem(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(coomonItem(["a", "b", "c"], ["d", "e", "x"]));

const lista1 = ["a", "b", "m", "x"];
const lista2 = ["z", "y", "x"];
console.log(coomonItem(lista1, lista2));
