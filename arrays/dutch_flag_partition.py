from typing import List


def dutch_flag_partition(pivot_index: int, A: List[int]) -> List[int]:
    pivot = A[pivot_index]
    # First pass: group elements smaller than pivot
    smaller = 0
    for i in range(len(A)):
        if A[i] < pivot:
            A[i], A[smaller] = A[smaller], A[i]
            smaller += 1
    # Second pass: group elements larger than pivot
    larger = len(A) - 1
    for i in reversed(range(len(A))):
        if A[i] > pivot:
            A[i], A[larger] = A[larger], A[i]
            larger -= 1
    return A


print(dutch_flag_partition(2, [3, 2, 1, 4, 5, 6, 7, 8, 9]))
