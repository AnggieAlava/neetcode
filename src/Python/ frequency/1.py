# Crea un algoritmo para encontrar la frecuencia de caracteres en una cadena de texto
# Parámetro: sentence, cadena de texto
# Retorno: el caracter con mayor frecuencia
# Input example: ('This is a common interview question')
# output example: ('i', 5)


def frequency(sentence):
    formated_sentence = sentence.replace(' ', '').lower()

    char_frequency = {char: formated_sentence.count(
        char) for char in formated_sentence}

    char_frequency_sorted = sorted(
        char_frequency.items(), key=lambda kv: kv[1], reverse=True)

    return char_frequency_sorted[0]


sample = "This is a common interview question"
print(frequency(sample))
