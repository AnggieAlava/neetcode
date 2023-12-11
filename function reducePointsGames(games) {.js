function reducePointsGames(games) {
  let total = 0;

  for (let i = 0; i < games.length; i++) {
    const [x, y] = games[i].split(":").map(Number);
    console.log(x, y);

    if (x > y) {
      total += 3;
    } else if (x === y) {
      total += 1;
    }
  }

  return total;
}
console.log(
  reducePointsGames([
    "1:0",
    "2:0",
    "3:0",
    "4:0",
    "2:1",
    "3:1",
    "4:1",
    "3:2",
    "4:2",
    "4:3",
  ])
);
