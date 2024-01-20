function validPalindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return newStr === newStr.split("").reverse().join("");
}

console.log(validPalindrome("Race a car"));
