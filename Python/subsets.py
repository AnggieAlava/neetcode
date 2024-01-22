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

def generate_subsets(nums):
    subsets = []  # Initialize an empty list to store the subsets
    # Initialize an empty list to store the current subset being constructed
    current_subset = []

    def generate(index):  # Define a recursive function to generate subsets
        # Base case: if the index is equal to or greater than the length of the input list
        if index >= len(nums):
            # Add a copy of the current subset to the list of subsets
            subsets.append(current_subset.copy())
            return  # Return from the current recursive call
        # Include the current number in the subset
        current_subset.append(nums[index])
        generate(index + 1)  # Recur with the next index
        current_subset.pop()  # Exclude the current number from the subset
        generate(index + 1)  # Recur with the next index

    generate(0)  # Start the recursive generation process with the initial index
    return subsets  # Return the list of subsets
