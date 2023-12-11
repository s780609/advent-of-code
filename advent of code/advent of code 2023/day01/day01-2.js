const { input } = require("./read.cjs");

let resultArray = [];

for (let index = 0; index < input.length; index++) {
  const element = input[index];
  const arr = element.split("");

  let letters = "";

  arr.every((char) => {
    if (!Number.isNaN(parseInt(char))) {
      resultArray.push(char);

      return false;
    }

    letters += char;
    if (!Number.isNaN(mappingLetters(letters))) {
      resultArray.push(mappingLetters(letters).toString());
      letters = "";

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

    letters += char;
    if (!Number.isNaN(mappingLettersDesc(letters))) {
      resultArray[resultArray.length - 1] += mappingLettersDesc(letters);
      letters = "";

      return false;
    }

    return true;
  });
}

console.log("resultArray", resultArray);

let result = 0;
resultArray.forEach((value) => {
  result += parseInt(value);
});

console.log("result", result);

function mappingLetters(letters) {
  if (letters.includes("one")) {
    return 1;
  }
  if (letters.includes("two")) {
    return 2;
  }
  if (letters.includes("three")) {
    return 3;
  }
  if (letters.includes("four")) {
    return 4;
  }
  if (letters.includes("five")) {
    return 5;
  }
  if (letters.includes("six")) {
    return 6;
  }
  if (letters.includes("seven")) {
    return 7;
  }
  if (letters.includes("eight")) {
    return 8;
  }
  if (letters.includes("nine")) {
    return 9;
  }

  return Number.NaN;
}

function mappingLettersDesc(letters) {
  if (letters.includes("eno")) {
    return 1;
  }
  if (letters.includes("owt")) {
    return 2;
  }
  if (letters.includes("eerht")) {
    return 3;
  }
  if (letters.includes("ruof")) {
    return 4;
  }
  if (letters.includes("evif")) {
    return 5;
  }
  if (letters.includes("xis")) {
    return 6;
  }
  if (letters.includes("neves")) {
    return 7;
  }
  if (letters.includes("thgie")) {
    return 8;
  }
  if (letters.includes("enin")) {
    return 9;
  }

  return Number.NaN;
}
