# RECIBO UN ARR DE NUMEROS Y DEBO ENCONTRAR DOS QUE
# SUMEN UN NUMERO ESPECIFICO. RETORNA LA POSICION DE ESTOS NUMEROS

def twoSum(nums, target):
    # crear un hashmap donde guardare los values con su index de nums
    hashmap = {}
    # recorro el list  nums para extraer los numeros con sus idex
    for i, n in enumerate(nums):  # enumerate me devuelve una instancia de numero index
        diff = target - n
        if diff in hashmap:
            return [hashmap[diff], i]
        hashmap[n] = i
    return -1


print(twoSum([1, 2, 3, 4], 6))
