def max_subarray(nums):
    max_current = max_global = nums[0]
    
    for num in nums[1:]:
        max_current = max(num, max_current + num)
        if max_current > max_global:
            max_global = max_current
    
    return max_global

# Ejemplos de uso
print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))  # Salida: 6
print(max_subarray([1]))  # Salida: 1
print(max_subarray([5, 4, -1, 7, 8]))  # Salida: 23