def valid_anagram(s, t):
    if len(s) != len(t):
        return False

    countS, countT = {}, {}

    for char in range(len(s)):
        countS[s[char]] = countS.get(s[char], 0) + 1
        countT[t[char]] = countT.get(t[char], 0) + 1

    print(countS)
    print(countT)

    if countS == countT:
        return True

    return False


print(valid_anagram('cat', 'cat'))
