let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

////////////////////////////////////////////////

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

////////////////////////////////////////////////

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

////////////////////////////////////////////////

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);