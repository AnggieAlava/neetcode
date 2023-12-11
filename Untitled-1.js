
// function findPairForSum(arr,target) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i +1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [i,j]
//             }
//         } 
//     }
//     return -1
// }


function findPairForSum(arr, target) {
    let ans = new Map()
    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]
        if(ans.has(complement)){
            return [ans.get(complement), i]
        }
        ans.set(arr[i], i)
    }
   return -1
}


let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair);