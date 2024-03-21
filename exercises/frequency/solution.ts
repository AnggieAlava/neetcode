const samples: string =
  'Esta es una pregunta frecuente en las entrevistas tecnicas';

function frequency(sentence: string): [string, number] {
  const formatedSentence: string = sentence.replace(/\s+/g, '').toLowerCase();
  const charFrequency: { [key: string]: number } = {};

  for (const char of formatedSentence) {
    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  const charFrequencySorted: [string, number][] = Object.entries(
    charFrequency
  ).sort((a, b) => b[1] - a[1]);
  return charFrequencySorted[0];
}

console.log(frequency(sample));
