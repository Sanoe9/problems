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

////////////////////////////////////////////////

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line 

////////////////////////////////////////////////

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result = unRegex.test(exampleStr);