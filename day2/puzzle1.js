const fs = require("fs");

const RED_MAX = 12;
const GREEN_MAX = 13;
const BLUE_MAX = 14;

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
  .filter((game) => check_max(game.sets))
  .forEach((game) => {
    sum += game.id;
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

function check_max(set) {
  if (set.red > RED_MAX || set.green > GREEN_MAX || set.blue > BLUE_MAX)
    return false;
  return true;
}
console.log(sum);
