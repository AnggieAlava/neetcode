def move_zeroes(nums):
    last_non_zero_found_at = 0
    
    # Move all non-zero elements to the beginning of the array
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[last_non_zero_found_at], nums[i] = nums[i], nums[last_non_zero_found_at]
            last_non_zero_found_at += 1

# Ejemplo de uso
nums = [0, 1, 0, 3, 12]
move_zeroes(nums)
print(nums)  # Salida: [1, 3, 12, 0, 0]