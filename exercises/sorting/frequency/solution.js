/* 
Crea un algotimo para contar la frecuencia de los characters en un string y devuelve el que mas se repite
 */

const sample = 'Esta es una pregunta frecuente en las entrevistas tecninas';

function frequency(sentence) {
  const formatedSentence = sentence.replace(/\s+/g, '').toLowerCase();
  const charFrequency = {};

  for (const char of formatedSentence) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  const charFrequencySorted = Object.entries(charFrequency).sort(
    (a, b) => b[1] - a[1]
  );

  return charFrequencySorted[0];
}

console.log(frequency(sample));
