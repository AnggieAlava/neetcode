function containsDuplicate(nums) {
  let nums2 = new Set(nums)
  return nums.length != nums2.size
}

console.log(containsDuplicate([1, 2, 3, 4, 5]))