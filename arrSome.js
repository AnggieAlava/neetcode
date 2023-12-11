// function  containsCommonItem(arr, array) {
//    for(let a in arr) {
//     for(let b in array) {
//         if(arr[a] === array[b]) return true
//     }
//    }
//    return false
// }

const a = ["a", "b", "c", "x"];
const b = ["z", "y", "x"];
console.log(containsCommonItem(a, b));

// function containsCommonItem(arr,array){
//     let hash = {}
//     for(let a in arr) {
//         if(!hash[arr[a]]) {
//             let char = arr[a]
//             hash[char] = true
//         }
//     }
//     for(let b in array) {
//         if(hash[array[b]])
//         return true
//     }

//     return false
// }

function containsCommonItem(arr, array) {
  return arr.some((item) => array.includes(item));
}
