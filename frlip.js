// function flipPairs(sentence){
//     return sentence.replace(/(.)(.)/g, "$2$1" )
// }
// let input =
//   "check out how interesting this problem is, it's insanely interesting!";
// let output = flipPairs(input);
// console.log(output);

function flipEveryNChars(input, n) {
  //crear una expresion regular para dividir el input en grupos de n cracteres
  let regex = new RegExp(`.{1,${n}}`, "g");

  //dividir el input en grupos de n caracteres
  let groups = input.match(regex);

  //invertir el orden de los caracteres en cada grupo
  let invertedGroups = groups.map((group) =>
    group.split("").reverse().join("")
  );

  //une todos los grupos invertidos en un solo string
  let result = invertedGroups.join("");

  //devuelve el strring reesultante
  return result;
}
let input = "a short example";
let output = flipEveryNChars(input, 5);
console.log(output);
