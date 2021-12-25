/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1], [1, 1]];
    
    if (numRows === 0) {
        return [];
    }
    
    if (numRows === 1) {
        return [[1]];
    }
    
    if (numRows === 2) {
        return result;
    }
    
    for (let i = 3; i <= numRows; i++) {
        let array = [1];
        let lastArray = result[result.length - 1];
        for (let j = 0; j < lastArray.length; j++) {
            if (lastArray[j + 1]) {
                array.push(lastArray[j] + lastArray[j + 1]);
            } 
        }
        array.push(1);
        result.push(array);
    }
    
    return result;
};