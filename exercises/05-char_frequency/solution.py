def frequency(sentence):
    """
    Calcula la frecuencia de cada letra en una oración dada y retorna la letra con mayor frecuencia.

    Args:
        sentence (str): La oración de entrada de la cual se calculará la frecuencia de las letras.

    Returns:
        tuple: Una tupla que contiene la letra con mayor frecuencia y su conteo.

    Ejemplo:
        >>> frequency("Hola Mundo")
        ('o', 2)
    """
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
