# ENCONTRAR DOS NUMEROS QUE SUMADOS DEN COMO RESULTADO EL TARGET

def twoSum(nums, target):
    # crear un hashmap vacio, donde ire mapeando el value con su index
    # por medio de un loop buscare el complemento del target, si lo encuentro lo devuelvo con su index
    # si no lo encuentro, guardo en el hashmap el value con su index
    prevMap = {}

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i
    return -1


print(twoSum([2, 7, 11, 15], 9))
