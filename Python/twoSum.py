# RECIBO UN ARR DE NUMEROS Y DEBO ENCONTRAR DOS QUE
# SUMEN UN NUMERO ESPECIFICO. RETORNA LA POSICION DE ESTOS NUMEROS

def twoSum(nums, target):
    hashmap = {}  # mapear los actuales numeros con sus respectivos indices para en un futuro verificar si el complement existe ahi

    for i, n in enumerate(nums):
        diff = target - n
        if diff in hashmap:
            return [hashmap[diff], i]
        hashmap[n] = i


print(twoSum([1, 2, 3, 3, 4, 5], 3))
