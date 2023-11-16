// function factorial(n) {
//   // 5! = 4*3*2*1
//   let resp = 1;
//   if (n === 0) return 1; //factorial de 0 = 1
//   for (let i = 2; i <= n; i++) {
//     resp *= i;
//   }
//   return resp;
// }
// let output = factorial(4);
// console.log(output);
function transformFirstAndLast(arr) {
  return { [arr[0]]: arr[arr.length - 1] };
}
let output = transformFirstAndLast([
  "Queen",
  "Elizabeth",
  "Of Hearts",
  "Beyonce",
]);
console.log(output); //
