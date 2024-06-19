function groupAnagrams(arrStrs) {
  // crea un objeto vacio donde guardar los grupos de anagramas
  const res = {};
  // Ordena las letras de cada string
  arrStrs.forEach((s) => {
    const sorted = s.split("").sort().join("");
    // Si la key [sorted] no existe en res, crea una y dale
    // como value una lista vacía
    if (!res[sorted]) {
      res[sorted] = [];
    }
    // Añade la cadena a la lista correspondiente
    res[sorted].push(s);
  });

  // Devuelve los values del objeto, que son las listas de anagramas
  return Object.values(res);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);
