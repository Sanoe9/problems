/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length <= 1) {
    return false;
  }
let stackArray = [];
  let parens = {
  '}': '{',
  ']': '[',
  ')': '('
  };
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    console.log('i, char', i, char)
    if (Object.values(parens).includes(char)) {
      stackArray.push(char);
      console.log(stackArray);
    } else {
      console.log('\U0001f455', parens[char])
      if (parens[char] !== stackArray.pop()) {
        return false;
      }
    }
  }
  
  return stackArray.length === 0;
};

isValid('()');