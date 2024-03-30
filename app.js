function frequency(sentence) {
  const formated = sentence.replace(/\s+/g, '').toLowerCase();
  const count = {};
  for (let char of formated) {
    count[char] = (count[char] || 0) + 1;
  }
  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sorted[0];
}

let sample = 'Esta es una pregunta muy frecuente de las entrevistas tecnicas';
console.log(frequency(sample));
