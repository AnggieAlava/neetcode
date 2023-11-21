// // function factorial(n) {
// //   // 5! = 4*3*2*1
// //   let resp = 1;
// //   if (n === 0) return 1; //factorial de 0 = 1
// //   for (let i = 2; i <= n; i++) {
// //     resp *= i;
// //   }
// //   return resp;
// // }
// // let output = factorial(4);
// // console.log(output);

// function transformFirstAndLast(arr) {
//   return { [arr[0]]: arr[arr.length - 1] };
// }
// let output = transformFirstAndLast([
//   "Queen",
//   "Elizabeth",
//   "Of Hearts",
//   "Beyonce",
// ]);
// console.log(output); //

// function getLetter(s) {
//   const firstChar = s.charAt(0);

//   switch (firstChar) {
//     case 'a':
//       return 'A';
//     case 'b':
//       return 'B';
//     case 'c':
//       return 'C';
//     case 'd':
//       return 'D';
//     default:
//       return 'Invalid';
//   }
// }

// // Ejemplo de uso
// const inputStr = 'adfgt';
// const outputStr = getLetter(inputStr);
// console.log(outputStr); // Salida: A

// function vowelsAndConsonants(s) {
//   const vowels = "aeiouAEIOU";
//   const str = s.split("");
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       console.log(char);
//     }
//   }

//   for (let char of str) {
//     if (!vowels.includes(char)) {
//       console.log(char);
//     }
//   }
// }
// Salida:
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
function findOdds(arr) {
  // establecer la variable que guardara y retornara el resultado
  let result = [];
  //establecer un objeto donde contare las repeticiones de los numeros
  let count = new Map();
  // recorrer el array en busca de los numeros que se repiten de forma impar
  for (let item of arr) {
    if (count.has(item)) {
      count.set(item, count.get(item) + 1);
    } else {
      count.set(item, 1);
    }
  }

  for (let [num, frequency] of count) {
    if (frequency % 2 !== 0) {
      result.push(num);
    }
  }

  return result;
}

//recibida un array de numeros devolver los que  se repiten de forma impar
let myNumbers = [7, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 9, 8];
let output = findOdds(myNumbers);
console.log(output);
