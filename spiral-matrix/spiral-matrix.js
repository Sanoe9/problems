/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let result = [];
  
  while (matrix.length) {
    let topRow = matrix.shift();
    result.push(...topRow);

    matrix.forEach((row) => {
      let lastElement = row.pop();
      if (lastElement) {
          result.push(lastElement);
          row.reverse();
      }
      
    });

    matrix.reverse();
  }

  return result;
};