from collections import defaultdict


def group_anagrams(strs):
    res = defaultdict(list)

    for s in strs:
        sorted_s = ''.join(sorted(s))
        res[sorted_s].append(s)
    return list(res.values())


inputStrs = ["act", "pots", "tops", "cat", "stop", "hat"]
# expected: [["act","cat"],["pots","tops","stop"],["hat"]]
print(group_anagrams(inputStrs))
