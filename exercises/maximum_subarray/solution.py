def max_subarray(nums):
    # Inicializa la variable 'maximum' con el primer elemento del array 'nums'
    maximum = nums[0]
    
    # Itera sobre los elementos del array 'nums' comenzando desde el segundo elemento (índice 1)
    for i in range(1, len(nums)):
        # Actualiza 'nums[i]' con el valor máximo entre 'nums[i]' y 'nums[i] + nums[i - 1]'
        # Esto decide si es mejor comenzar un nuevo subarray en 'nums[i]' o continuar con el subarray actual sumando 'nums[i]' al subarray que termina en 'nums[i - 1]'
        nums[i] = max(nums[i], nums[i] + nums[i - 1])
        
        # Actualiza 'maximum' con el valor máximo entre 'maximum' y 'nums[i]'
        # Esto asegura que 'maximum' siempre contenga la suma máxima del subarray encontrada hasta ahora
        maximum = max(maximum, nums[i])
    
    # Devuelve la suma máxima del subarray encontrada en el array 'nums'
    return maximum

# Ejemplos de uso
print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # Salida: 6
print(max_subarray([1]))  # Salida: 1
print(max_subarray([5, 4, -1, 7, 8]))  # Salida: 23