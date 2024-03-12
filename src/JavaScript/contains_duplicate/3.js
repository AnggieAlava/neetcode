function containsDuplicate(nums) {
  let hashset = new Set()
  for (const n of nums) {
    if (hashset.has(n)) return true
    hashset.add(n)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3]))