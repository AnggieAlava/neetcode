function mergeSortedArrays(s, t){
    return s.concat(t).sort((a,b) => a - b)
}


console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))