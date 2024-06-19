function groupAnagrams(strs) {
  const res = {};

  strs.forEach((s) => {
    // Ordena las letras de cada string
    const sortedS = s.split("").sort().join("");

    // Si la key no existe, crea una y dale como value una
    // lista vacía
    if (!res[sortedS]) {
      res[sortedS] = [];
    }

    // Añade la cadena a la lista correspondiente
    res[sortedS].push(s);
  });

  // Devuelve los valores del objeto, que son las listas de anagramas
  return Object.values(res);
}

// Ejemplo de uso
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);
