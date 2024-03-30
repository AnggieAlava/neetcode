def frequency(sentence):
  formated = sentence.replace(' ', '').lower()
  charCount = {char: formated.count(char) for char in formated}
  charSort = sorted(charCount.items(), key=lambda kv:kv[1], reverse=True)
  return charSort[0]

print(frequency('Esta es una pregunta muy frecuente en las entrevistas tecnicas'))