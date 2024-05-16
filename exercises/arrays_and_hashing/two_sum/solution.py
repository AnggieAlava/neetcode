def two_sum(nums, target):
    prevMap = {}  # guardar el value:index

    for i, n in enumerate(nums):
        diff = target - n
        if diff in prevMap:
            return [prevMap[diff], i]
        prevMap[n] = i


print(two_sum([1, 2, 3, 4], 5))