const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

  let res = [];
 

  for (i = 0; i < names.length; i++) {
    if (res.includes(names[i])) {

      for (j = 1; j <= res.length; j++) {
        newName=`${names[i]}(${j})`

        if (!res.includes(`${names[i]}(${j})`)){
          res.push(`${names[i]}(${j})`);
          break;
        }

      }

    }
    else{
      res.push(names[i]);
    }
  }

return res;
}

// console.log('*********')
// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))

module.exports = {
  renameFiles
};
