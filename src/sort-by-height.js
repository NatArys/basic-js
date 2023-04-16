const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sort = arr.filter(item => item !== -1).sort((a, b) => a - b);
  let j = 0

  const res = arr.map((item) => {
    return item !== -1 ? sort[j++] : -1;
    // if(item!==-1) return sort[j++]
    // else return -1
  })


  return res;
}


module.exports = {
  sortByHeight
};
