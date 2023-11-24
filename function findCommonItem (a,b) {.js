function findCommonItem(a, b) {
  return a.some((item) => b.includes(item));
}
let box1 = ["a", "b", "c", "d"];
let box2 = ["o", "p", "q", "x"];

console.log(findCommonItem(box1, box2));
