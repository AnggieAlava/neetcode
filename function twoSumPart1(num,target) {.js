function twoSumPart1(num, target) {
  //creo un map table donde guardare el numero y su indice
  const map = new Map();
  //recorro el array con un loop para encontrar dos numeros
  //que sumados den el target, calculando el complemento
  for (let n in num) {
    //guardo el complemento en una variable
    const complemento = target - num[n];
    //verficco si el mao ya tiene al complemento
    //si lo tiene significa que ya encontre los dos numeros que sumados dan atrget
    if (map.has(complemento)) {
      return [map.get(complemento), n];
    }
    map.set(num[n], n);
  }

  return [];
}

console.log(twoSumPart1([3, 2, 3], 6));
