
def topKFrequent(nums, k):
    # Inicializa un diccionario para almacenar la frecuencia de cada número en la lista.
    count = {}

    # Inicializa una lista de listas (cubos) para almacenar los números que tienen la misma frecuencia.
    # La longitud de la lista de cubos es igual a la longitud de la lista de entrada más uno.
    freq = [[] for i in range(len(nums) + 1)]

    # Itera sobre cada número en la lista de entrada.
    for n in nums:
        # Si el número ya está en el diccionario 'count', incrementa su valor en 1.
        # Si el número no está en el diccionario 'count', lo añade con el valor 1.
        count[n] = 1 + count.get(n, 0)

    # Itera sobre cada número y su frecuencia en el diccionario 'count'.
    for n, c in count.items():
        # Añade el número a la lista en 'freq' que corresponde a su frecuencia.
        freq[c].append(n)

    # Inicializa una lista vacía para los resultados.
    res = []

    # Itera sobre 'freq' en orden inverso (desde la frecuencia más alta hasta la más baja).
    for i in range(len(freq) - 1, 0, -1):
        # Itera sobre cada número en la lista actual.
        for n in freq[i]:
            # Añade el número a 'res'.
            res.append(n)
            # Si la longitud de 'res' es igual a k, devuelve 'res'.
            if len(res) == k:
                return res


# Ejemplo de uso
print(topKFrequent([1, 2, 2, 3, 3, 3], 2))  # Output: [2,3]
print(topKFrequent([7, 7], 1))  # Output: [7]
