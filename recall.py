def reverse_a_string(sentence):
    if not sentence or len(sentence) < 2 or not isinstance(sentence, str):
        return False 
    # convertir el input a una lista
    backwards = []
    # establezco el inicio de la iteracion
    last_item = len(sentence) - 1
    # itero sobre sentence y reverso con range
    for i in range(last_item, -1, -1):
        backwards.append(sentence[i])
    return ''.join(backwards)


print(reverse_a_string('Hello my name is Andrei'))