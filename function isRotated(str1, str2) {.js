function isRotated(str1, str2) {
  // verificar si las longitudes de str1 y str2 son difeerentes, porque
  //si son diferenntes ya se que la rotacion no sera correcta porque str2 no esta en str1
  if (str1.length !== str2.length) {
    return false;
  }

  // pero si sus longitudes son iguales entonces
  //concatenare 2 veces mi str para formar una sola cadena larga y verificar
  //si mi str2 esta dentro de la cadena concatenada
  const concatenated = str1 + str1;

  //  aqui verifico si str2 esta dentro de la cadena concatenada
  if (concatenated.includes(str2)) {
    //si str2 esta   contenido en la cadena concatenada, entonces str2 es una rotacion de str1
    return true;
  } else {
    //pero si str2 nno esta dentro de la cadena concatenada entonces str2 no es una rotacion valida
    return false;
  }
}
console.log(isRotated("hello world", "orldhello w"));
console.log(isRotated("hello world", "omrel wp"));
