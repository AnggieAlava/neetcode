# Retornar true si en mi array hay como minimo dos elementos iguales
def containsDuplicate(nums):
    hashset = set()

    for n in nums:  # recorro mi array en busca de duplicados
        if n in hashset:  # si el elemento ya esta en el hashset significa que hay un duplicado
            return True  # retorno true
        hashset.add(n)  # si el elemento no esta en el hashset lo agrego
    return False  # retorno false si no hay duplicados


print(containsDuplicate([1, 2, 3, 4]))
