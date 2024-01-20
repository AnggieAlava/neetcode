# recibo una list de numeros y debo encontrar los duplicados
# si como minimo 1 numero esta dupplicado retorno true
# por lo contrario si cada numero es distinto, unico, retorno false

def containDuplicate(nums):
    hashset = set()
    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False


print(containDuplicate([1, 2, 3, 1]))
