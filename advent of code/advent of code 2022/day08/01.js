const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\r\n");

for (let i = 0; i < input.length; i++) {
  const arr = input.split("");
  let j = 1;
  let tallest = arr[0];
  let visible = 0;
  while (arr[j]) {
    if (arr[j] > tallest) {
      tallest = arr[j];
      visible++;
    }

    j++;
  }
}

function compare(tallest, curr) {
  if (curr > tallest) {
    return;
  }
}
