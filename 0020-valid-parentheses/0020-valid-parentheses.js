/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    const reference = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    
    for (let i = 0; i < s.length; i++) {
        const parenthese = s[i];
        if (Object.values(reference).includes(parenthese)) {
            stack.push(parenthese);
        } else {
            const element = stack[stack.length - 1];
            if (element === reference[parenthese]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
