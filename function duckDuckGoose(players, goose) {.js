function duckDuckGoose(players, goose) {
  let index = (goose - 1) % players.length;
  let choosen = players[index];
  return choosen.name;
}

let players = [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }];

console.log(duckDuckGoose(players, 1)); // "a"
console.log(duckDuckGoose(players, 5)); // "a"
console.log(duckDuckGoose(players, 4)); // "d"
console.log(duckDuckGoose(players, 9)); // "c"
