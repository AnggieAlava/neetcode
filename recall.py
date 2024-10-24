def reverse_string(sentence):
    if not sentence or len(sentence) < 2 or not isinstance(sentence, str):
        return False

    backwards = []
    last_item = len(sentence) - 1
    for char in range(last_item, - 1, -1):
        backwards.append(sentence[char])
    return ''.join(backwards)


print(reverse_string('Hola mundo'))