function valid_anagram(s,t){
  if(s.length !== t.length){
    return false
  }

  let countS =  {}
  let countT = {}

  for(let char in s ){
    countS[s[char]] = (countS[s[char]] || 0) + 1
    countT[t[char]] = (countT[t[char]] || 0) + 1
  }

  for(let key in countS){
    if(countS[key] !== countT[key]){
      return false
    }
  }
  return true
}

console.log(valid_anagram('cat', 'cat'))