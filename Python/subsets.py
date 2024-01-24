# Given an integer array nums of unique elements, return all possible
# subsets
#  (the power set).
# The solution set must not contain duplicate subsets. Return the solution in any order.
# Example 1:
# Input: nums = [1,2,3]
# Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
# Example 2:
# Input: nums = [0]
# Output: [[],[0]]

def subsets(nums):
    result = []
    current_subset = []

    def deep_first_search(i):
        if i >= len(nums):
            result.append(current_subset.copy())
            return
        current_subset.append(nums[i])
        deep_first_search(i + 1)

        current_subset.pop()
        deep_first_search(i + 1)
    deep_first_search(0)
    return result


print(subsets([1, 2, 3]))
