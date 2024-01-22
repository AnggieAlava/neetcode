# recibo una list de numeros y debo encontrar los duplicados
# si como minimo 1 numero esta dupplicado retorno true
# por lo contrario si cada numero es distinto, unico, retorno false
# [1,2,31] [1,2,3,4]


def containsDuplicate(nums):
    hashset = set()  # aqui guardare los elementos unicos
    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False


print(containsDuplicate([1, 2, 3, 1]))
