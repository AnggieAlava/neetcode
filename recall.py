def reverse_string(s):
    # validar que el input sea un string 
    if not s or len(s) < 2 or not isinstance(s, str):
        return False
    
    # convertirlo a array y reversarlo iterando de atras hacia adelante
    backwards = []
    items = len(s) - 1

    for i in range(items, -1 , -1):
        backwards.append(s[i])
    return ''.join(backwards)


print(reverse_string('Hello my name is Andrei'))
