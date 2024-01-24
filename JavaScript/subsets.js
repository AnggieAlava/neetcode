function subsets(nums){
   let result = []
   let current_subset = []
   function deepFirstSearch(i){
    if(i >= nums.length){
      result.push([...current_subset])
    }
   }
}
