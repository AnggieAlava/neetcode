// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('Hi my name is Andrei'))

// const reverse = str => str.split('').reverse().join('')
// console.log(reverse('Hi my name is Andrei'))

const reverse = (str) => [...str].reverse().join("");
console.log(reverse("Hi my name is Andrei"));
