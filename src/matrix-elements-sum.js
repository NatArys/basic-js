const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let sum = 0

  for (c = 0; c < matrix[0].length; c++) {
    for (r = 0; r < matrix.length; r++) {
      matrix[r][c] !== 0 ? sum += matrix[r][c] : r = matrix.length;
    }
  }

  return sum;

}

// console.log(getMatrixElementsSum([
//   [1, 2, 3, 4],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ]))

module.exports = {
  getMatrixElementsSum
};
