
function frequency(sentence) {
  let count = {}
  let maxCount = 0
  let maxChar = ''

  let formatedSentence = sentence.replace(/\s+/g, '').toLowerCase()

  for (let char of formatedSentence) {
    count[char] = (count[char] || 0) + 1
    if (count[char] > maxCount) {
      maxCount = count[char]
      maxChar = char
    }
  }
  return [maxChar, maxCount]
}

let result = 'This is a common interview question'
console.log(frequency(result))









const sample = "This is a common interview question";
