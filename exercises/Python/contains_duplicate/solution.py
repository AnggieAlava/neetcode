# Crea un algoritmo para encontrar duplicados en un array de números
# Parámetro: nums, array de números
# Retorno: Booleano, True si hay duplicados, False si no hay duplicados

def contains_duplicate(nums):
    uniques = set()
    for number in nums:
        if number in uniques:
            return True
        uniques.add(number)
    return False


print(contains_duplicate([1, 2, 3, 4, 2]))
