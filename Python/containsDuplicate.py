# recibo una list de numeros y debo encontrar los duplicados
# si como minimo 1 numero esta dupplicado retorno true
# por lo contrario si cada numero es distinto, unico, retorno false
# [1,2,3,1] [1,2,3,4]


def containsDuplicate(nums):
    prevSet = set()
    for n in nums:
        if n in prevSet:
            return True
        prevSet.add(n)
    return False


print(containsDuplicate([1, 2, 3, 1]))
