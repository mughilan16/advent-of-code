const fs = require("fs");
const input = fs
  .readFileSync("input")
  .toString()
  .split("\n")
  .filter((line) => line.length != 0);

const first_digits = input.map((line) => find_first(line));
const last_digits = input.map((line) => find_last(line));
let sum = 0;

console.log(first_digits, last_digits)
for (let i = 0; i < input.length; i++) {
  sum += parseInt(first_digits[i] + last_digits[i]);
}

console.log(sum);

function find_first(line) {
  for (let i of line)
    if (i in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) return i;
}

function find_last(line) {
  for (let i = line.length - 1; i >= 0; i--)
    if (line[i] in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) return line[i];
}
