def contains_duplicate(nums):
    uniques = set()
    for n in nums:
        if n in uniques:
            return True
        uniques.add(n)
    return False


print(contains_duplicate([1, 2, 3, 4, 3]))
