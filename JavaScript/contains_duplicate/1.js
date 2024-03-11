function containsDuplicate(nums) {
  let hashset = new Set()
  for (let n of nums) {
    if (hashset.has(n)) {
      return true
    }
    hashset.add(n)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 3, 4, 5]))