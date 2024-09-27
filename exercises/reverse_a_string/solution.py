def reverse_string(s):
    # Verificar que la entrada es valida
    if not s or len(s) < 2 or not isinstance(s, str):
        return False
    
    # Convertir la cadena a una lista y luego invertirla

    backwards = []
    total_items = len(s) - 1
    for i in range(total_items, -1 , -1):
        backwards.append(s[i])
    return ''.join(backwards)


print(reverse_string('Hi my name is Andrei'))
