
function containsDuplicate(nums) {
  const uniques = new Set()

  for (const n of nums) {
    if (uniques.has(n)) return true
    uniques.add(n)
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))



