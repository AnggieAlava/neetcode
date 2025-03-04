from typing import List


def dutch_recall(pivot_index, a):
    pivot = a[pivot_index]
    smaller, equal, larger = 0, 0, len(a)
    while equal < larger:
        if a[equal] < pivot:
            a[smaller], a[equal] = a[equal], a[smaller]
            smaller, equal = smaller + 1, equal + 1
        elif a[equal] == pivot:
            equal += 1
        else:
            larger -= 1
            a[equal], a[larger] = a[larger], a[equal]
    return a


print(dutch_recall(4, [1, 3, 4, 8, 7, 5, 3, 4]))
