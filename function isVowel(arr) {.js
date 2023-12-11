function isVowel(arr) {
  const vowels = [97, 101, 105, 111, 117];
  return arr.map((num) =>
    vowels.includes(num) ? String.fromCharCode(num) : num
  );
}

console.log(isVowel([97, 101, 105, 111, 117, 90, 100, 456, 345, 22, 1, 45]));
