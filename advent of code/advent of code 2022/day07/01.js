const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\r\n");

console.log(input);

let history = [];
let directories = new Map();

for (let line of input) {
  if (line.includes("$ cd /")) {
  } else if (line.includes("$ cd")) {
    let dir = line.replace("$ cd ", "");
    if (dir === "..") {
      history.pop();
    } else {
      history.push(dir);
    }
  } else if (line.includes("$ ls")) {
  } else if (line.includes("dir")) {
    let dir = history.join("");

    let dirname = dir + line.replace("dir", "").trim();
    let currentFiles = directories.get(dir) || [];
    currentFiles.push({
      type: "dir",
      name: dirname,
    });

    directories.set(dir, currentFiles);
  } else {
    let [size, name] = line.split(" ");

    let dir = history.join("");
    let currentFiles = directories.get(dir) || [];
    currentFiles.push({
      type: "file",
      name: name,
      size: size,
    });

    directories.set(dir, currentFiles);
  }
}

console.log(directories);

let memeo = new Map();
let sum = 0;
for (let dir of directories.keys()) {
  let size = getDirSize(dir);

  if (size < 100000) {
    sum = sum + size;
  }
}

function getDirSize(dir) {
  let size = 0;
  console.log(dir);
  let currLevel = directories.get(dir);
  console.log(currLevel);
  for (let curr of currLevel) {
    if (curr.type === "dir") {
      if (!memeo.has(curr.name)) {
        memeo.set(curr.name, getDirSize(curr.name));
      }

      size = size + parseInt(memeo.get(curr.name));
    } else if (curr.type === "file") {
      size = size + parseInt(curr.size);
    }
  }

  return size;
}

console.log(sum);
