from collections import Counter


def frequency(sentence):
    char_frequency = Counter(sentence)
    char_frequency_sorted = sorted(
        char_frequency.items(), key=lambda item: item[1], reverse=True)
    return char_frequency_sorted[0]


sample = "This is a common interview question"
print(frequency(sample))
