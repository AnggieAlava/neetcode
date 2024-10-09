// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverseString(str){
    // Validar inputs
    if( !str || str.length < 2 || typeof str !== 'string'){
        return false
    }

    // crear un array vacio donde guardare el string letra por letra de atras hacia adelante
    const backwards = []

    // itero sobre el string input desde su ultimo item hasta el primero
    let lastItem = str.length - 1
    for(let char = lastItem; char >= 0 ; char--){
        backwards.push(str[char])
    }
    return backwards.join('')
}
console.log(reverseString('Hola mi nombre es Anggie'))


/* Solucion dos posible */
function reverseStr(str){
    return str.split('').reverse().join('')
}


console.log(reverseStr('Hola mi nombre es Andrei'))