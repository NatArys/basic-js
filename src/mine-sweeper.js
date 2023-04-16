const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const col = matrix[0].length;
  const row = matrix.length;
  const res = [];

  for (r = 0; r < row; r++) {
    res[r] = [];
    for (c = 0; c < col; c++) {
      let sum = 0;

      for (i = r - 1; i <= r + 1; i++) {
        for (j = c - 1; j <= c + 1; j++) {
          if (i >= 0 && j >= 0 && i < row && j < col && matrix[i][j] == true&&(i !== r || j !== c)) sum++;
        }
      }

      res[r][c] = sum;

    }
  }

  return res
}

// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ])



module.exports = {
  minesweeper
};
