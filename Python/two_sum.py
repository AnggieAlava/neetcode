# RECIBO UN ARR DE NUMEROS Y DEBO ENCONTRAR DOS QUE
# SUMEN UN NUMERO ESPECIFICO. RETORNA LA POSICION DE ESTOS NUMEROS

def twoSum(nums, target):
    hashmap = {}
    # usare un hashmap donde mapeare el valor con su index
    # para luego buscar el complemento en el hashmap
    # que sumado al numero actual den el target

    # enumerate devuelve un iterador que contiene el index y el valor actual
    for i, n in enumerate(nums):
        diff = target - n  # complemento
        if diff in hashmap:  # si el complemento existe en el hashmap significa que ecnontre los dos numeros
            # retorna el index del complemento y el index del numero actual
            return [hashmap[diff], i]
        hashmap[n] = i  # si el complemento no existe en el hashmap lo agrego
    return -1


print(twoSum([3, 2, 4], 6))
