function binary_search(nums,target){
    let low = 0
    let high = nums.length - 1

    while(low <= high){
        let mid = (low + high) / 2
        let guess = nums[mid]

        if(guess === target){
            return mid
        }
        else if(guess > target){
            high = mid - 1
        }

        else{
            low = mid + 1
        }
    }
    return -1
}

console.log(binary_search([1,2,3,4,5,6,7],9))