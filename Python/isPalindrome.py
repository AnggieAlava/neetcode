# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
# Given a string s, return true if it is a palindrome, or false otherwise.


# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.


# def isPalindrom(string):
#     newStr = ""

#     for char in string:
#         if char.isalnum():
#             newStr += char.lower()
#     return newStr == newStr[::-1]


# print(isPalindrom("race a car"))
# # print(isPalindrom("A man, a plan, a canal: Panama"))


def isPalindrom(str):
    left = 0
    right = len(str) - 1
    while left < right:
        while left < right and not isAlphaNum(str[left]):
            left += 1
        while right > left and not isAlphaNum(str[right]):
            right -= 1
        if str[left].lower() != str[right].lower():
            return False
        left = left + 1
        right = right - 1
    return True


def isAlphaNum(char):
    return (ord('A') <= ord(char) <= ord('Z') or
            ord('a') <= ord(char) <= ord('z') or
            ord('0') <= ord(char) <= ord('9'))


print(isPalindrom("race a car"))
# print(isPalindrom("A man, a plan, a canal: Panama"))
