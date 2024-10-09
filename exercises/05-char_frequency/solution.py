def frequency(sentence):
    # Formatear el string para quitar espacios y volverlo todo a minúsculas
    formatted_sentence = sentence.replace(' ', '').lower()

    # Contar la frecuencia de cada letra
    frequency_count = {char: formatted_sentence.count(char) for char in formatted_sentence}

    # Ordenar las letras por frecuencia en orden descendente
    sorted_frequency = sorted(frequency_count.items(), key=lambda item: item[1], reverse=True)

    # Retornar la letra con mayor frecuencia
    return sorted_frequency[0]


sample = 'This Is a Common Frequent interview question'
print(frequency(sample))
