function frequency(sentence: string): [string, number] {
  const count: Record<string, number> = {};
  let maxCount: number = 0;
  let maxChar: string = '';

  const formatedSentence = sentence.replace(/\s+/g, '').toLowerCase();

  for (let char of formatedSentence) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }
  return [maxChar, maxCount];
}

let sample = 'This is a common interview question';
console.log(frequency(sample));
