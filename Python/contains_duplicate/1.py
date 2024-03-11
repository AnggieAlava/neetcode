def containd_duplicate(nums):
    hashset = set()
    for n in nums:
        if n in hashset:
            return True
        hashset.add(n)
    return False


print(containd_duplicate([1, 2, 3, 4, 5, 1]))
