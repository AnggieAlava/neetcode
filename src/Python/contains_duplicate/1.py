# Algoritmo para encontrar duplicados en un array de números
# Parámetro: nums, array de números
# Retorno: Booleano, True si hay duplicados, False si no hay duplicados


def contains_duplicate(nums):
    hashset = set()
    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False


print(contains_duplicate([1, 2, 3, 4]))
