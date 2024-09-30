def rotate(nums, k):
    n = len(nums)
    k = k % n  # Manejar casos donde k es mayor que la longitud del array

    # Función para invertir una porción del array
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1

    # Paso 1: Invertir todo el array
    reverse(0, n - 1)
    # Paso 2: Invertir los primeros k elementos
    reverse(0, k - 1)
    # Paso 3: Invertir los elementos restantes
    reverse(k, n - 1)

# Ejemplos de uso
nums1 = [1, 2, 3, 4, 5, 6, 7]
rotate(nums1, 3)
print(nums1)  # Salida: [5, 6, 7, 1, 2, 3, 4]

nums2 = [-1, -100, 3, 99]
rotate(nums2, 2)
print(nums2)  # Salida: [3, 99, -1, -100]