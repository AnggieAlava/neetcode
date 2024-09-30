def binary_search(nums,target):
    low = 0
    high = len(nums) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = nums[mid]

        if guess == target:
            return mid
        elif guess > target:
            high = mid - 1
        else:
            low = mid + 1
    return -1


print(binary_search([1,2,3,4,5,6,7,8,9,10,11,12,13,14], 15))
