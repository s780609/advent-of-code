const { input } = require("./parse");

let fisrtMarker = "";
let value = 0;
for (let index = 0; index < input.length; index++) {
  let character = input.charAt(index);

  if (fisrtMarker.includes(character)) {
    let tempIndex = fisrtMarker.indexOf(character);
    fisrtMarker = fisrtMarker.slice(tempIndex + 1, fisrtMarker.length);
    fisrtMarker = fisrtMarker + character;
  } else {
    fisrtMarker = fisrtMarker + character;
  }

  if (fisrtMarker.length === 14) {
    value = index + 1;
    break;
  }
}

console.log(value);
