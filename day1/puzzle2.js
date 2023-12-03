const fs = require("fs");
const input = fs
  .readFileSync("input")
  .toString()
  .split("\n")
  .filter((line) => line.length != 0);
const numbers = [
  {word: "1", number: "1"},
  {word: "2", number: "2"},
  {word: "3", number: "3"},
  {word: "4", number: "4"},
  {word: "5", number: "5"},
  {word: "6", number: "6"},
  {word: "7", number: "7"},
  {word: "8", number: "8"},
  {word: "9", number: "9"},
  { word: "one", number: "1" },
  { word: "two", number: "2" },
  { word: "three", number: "3" },
  { word: "four", number: "4" },
  { word: "five", number: "5" },
  { word: "six", number: "6" },
  { word: "seven", number: "7" },
  { word: "eight", number: "8" },
  { word: "nine", number: "9" },
];

const first_digits = input.map((line) => find_first(line));
const last_digits = input.map((line) => find_last(line));

let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += parseInt(first_digits[i] + last_digits[i]);
}

console.log(sum);

function find_first(line) {
  for (let i = 0; i < line.length; i++)
    for (let number of numbers)
      if (line.substring(i, i + number.word.length) === number.word)
        return number.number;
}

function find_last(line) {
  for (let i = line.length; i > 0; i--)
    for (let number of numbers)
      if (line.substring(i - number.word.length, i) === number.word)
        return number.number;
}
