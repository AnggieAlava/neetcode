def containsDuplicate(nums):
    nums.sort()
    # con el -1 evito que el ultimo numero del list sea comparado con un numero fuera de rango
    for n in range(len(nums) - 1):
        if nums[n] == nums[n + 1]:
            return True
    return False


print(containsDuplicate([1, 2, 3, 4, 1]))
