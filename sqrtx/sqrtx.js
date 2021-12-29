/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    
    if (x === 1) {
        return 1;
    }
    
    let halfX = x / 2;
    
    for (let i = 1; i <= halfX; i++) {
        if (i * i === x) {
            return i;
        }
        if ((i + 1) * (i + 1) > x) {
            return i;
        }
    }
};