function warnTheSheep(queue) {
  const wolfIndex = queue.indexOf("wolf"); //3

  if (wolfIndex === queue.length - 1) {
    return "Get out of here";
  } else {
    //5   - 1 = 4 - 3 = 1
    const sheepNumber = queue.length - 1 - wolfIndex;
    return `Oi! Sheep number ${sheepNumber}! You are about to be eaten by a wolf!`;
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
// "Oi! Sheep number 1! You are about to be eaten by a wolf!"
