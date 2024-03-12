const sample = "This is a common interview question";

function frequency(sentence) {
  const charFrequency = {};

  // Calcular la frecuencia de cada carácter en la cadena
  for (const char of sentence) {
    charFrequency[char] = sentence.split(char).length - 1;
  }

  // Ordenar el objeto de frecuencia de caracteres
  const charFrequencySorted = Object.entries(charFrequency)
    .sort((a, b) => b[1] - a[1]);

  // Devolver el carácter más frecuente
  return charFrequencySorted[0];
}

console.log(frequency(sample));
