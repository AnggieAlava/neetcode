# recibo una list de numeros y debo encontrar los duplicados
# si como minimo 1 numero esta dupplicado retorno true
# por lo contrario si cada numero es distinto, unico, retorno false

def containsDuplicate(nums):
    hashset = set()  # aqui guardare los numeros unicos para cuando busco duplicados preguntarle al hashset si ya lo tiene
    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False


print(containsDuplicate([1, 2, 1, 4]))
