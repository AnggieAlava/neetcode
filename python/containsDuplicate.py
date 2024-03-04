def contains_duplicate(nums):
    return len(nums) != len(set(nums))


print(contains_duplicate([1, 2, 3, 1]))
