const fs = require("fs");

let sum = 0;
fs.readFileSync("input")
  .toString()
  .split("\n")
  .filter((line) => line.length != 0)
  .map((line) => line.split(":"))
  .map((line) => ({
    id: parseInt(line[0].split(" ")[1]),
    sets: parseSets(line[1].split(";")),
  }))
  .map((game) => multiple_max(game.sets))
  .forEach(number => {
    sum += number
  });

function parseSets(game) {
  let newSet = {
    green: 0,
    red: 0,
    blue: 0,
  };
  for (let sets of game) {
    for (let set of sets.split(",")) {
      let [_, number, color] = set.split(" ");
      number = parseInt(number);
      if (number > newSet[color]) {
        newSet[color] = number;
      }
    }
  }
  return newSet;
}

function multiple_max(set) {
  return set.red * set.green * set.blue;
}
console.log(sum);
