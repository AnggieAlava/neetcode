//create a  function that reverse a string:
//'Hi my name is Andrei' should be:
//'ierdnA si eman ym iH'


function reverse(str){
    let arr = str.split('')
    let splitedArr = arr.reverse().join('')
    return splitedArr
}

let sentence = 'Hy my name is Andrei'
let output = reverse(sentence)
console.log(output)