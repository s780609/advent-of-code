const { input } = require("./read.cjs");

let resultArray = [];

for (let index = 0; index < input.length; index++) {
  const element = input[index];
  const arr = element.split("");

  arr.every((char) => {
    if (!Number.isNaN(parseInt(char))) {
      resultArray.push(char);

      return false;
    }

    return true;
  });

  arr.reverse();

  arr.every((char) => {
    if (!Number.isNaN(parseInt(char))) {
      resultArray[resultArray.length - 1] += char;

      return false;
    }

    return true;
  });
}

let result = 0;
resultArray.forEach((value) => {
  result += parseInt(value);
});

console.log("result", result);
