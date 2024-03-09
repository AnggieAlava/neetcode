sample = "This is a common interview question"


def frequency(sentence):
    char_frequency = {char: sentence.count(char) for char in sentence}

    char_frequency_sorted = sorted(char_frequency.items(),
                                   key=lambda kv: kv[1],
                                   reverse=True)
    return char_frequency_sorted[0]


print(frequency(sample))
