// function isPalindrome(str) {
//   const newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

//   return newStr === newStr.split("").reverse().join("");
// }

// // console.log(isPalindrome("race a car"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(str[left])) {
      left++;
    }
    while (right > left && !isAlphaNum(str[right])) {
      right--;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}

function isAlphaNum(char) {
  return (
    ("A" <= char && char <= "Z") ||
    ("a" <= char && char <= "z") ||
    ("0" <= char && char <= "9")
  );
}

// console.log(isPalindrome("race a car"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
