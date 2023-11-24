// const numbers = [1, 2, 3, 4, 5];

// // Utiliza un método de array para obtener la suma de todos los números en la lista 'numbers'
// // Completa el código a continuación

// const total =  numbers.reduce((a,b) => a +b, 0)

// const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'banana'];

// const uniqueFruits = fruits.filter((fruit, index) => {
//   return fruits.indexOf(fruit) === index;
// });

// console.log(uniqueFruits);

// const numbers = [1, 2, 3, 4, 5];

// // Utiliza un método de array para obtener un nuevo array que contenga el cuadrado de cada número
// // Completa el código a continuación

// const squaredNumbers = numbers.map(num => Math.pow(num,2))

// console.log(squaredNumbers);

// const names = ['John', 'Jane', 'Bob', 'Alice'];

// // Utiliza un método de array para obtener un nuevo array que contenga solo los nombres que tienen más de 3 caracteres
// // Completa el código a continuación

// const longNames = names.filter(name => name.length > 3)

// console.log(longNames);

// const numbers = [1, 2, 3, 4, 5];

// function averageOfSquaredEvenNumbers(arr) {
//   return arr
//     .filter(num => num % 2 === 0)
//     .map(num => Math.pow(num, 2))
//     .reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr.length;
// }

// console.log(averageOfSquaredEvenNumbers(numbers));

// const numbers = [1, 2, 3, 4, 5];

// function averageOfSquaredEvenNumbers(arr) {
//     const evens  = arr
//        .filter(num => num % 2 === 0)
//        .map(num => Math.pow(num, 2))

//     const sum = evens.reduce((a,b) => a+b,0)
//     const average = sum / evens.length
//     return average
// }

// console.log(averageOfSquaredEvenNumbers(numbers));
